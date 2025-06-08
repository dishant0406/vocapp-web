import { getHTML } from "@/lib/email-template";
import { createClient } from "@/lib/supabase-server"; // Assuming @ is configured for src
import dns from "dns/promises"; // Import dns.promises
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Cache for the blocklist
let blockedDomainsCache: Set<string> | null = null;
let lastBlocklistFetchTimestamp: number = 0;
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

const BLOCKLIST_URL = 'https://raw.githubusercontent.com/TempMailDetector/Temporary-Email-Domain-Blocklist/main/domains.txt';

async function getBlockedDomains(): Promise<Set<string>> {
  const now = Date.now();
  if (blockedDomainsCache && (now - lastBlocklistFetchTimestamp < CACHE_DURATION_MS)) {
    return blockedDomainsCache;
  }

  console.log("Fetching temporary domain blocklist...");
  try {
    const response = await fetch(BLOCKLIST_URL);
    if (!response.ok) {
      console.warn(`Failed to fetch temporary domain blocklist (status: ${response.status}). Using stale or empty cache if available.`);
      // Return stale cache if available, otherwise an empty set to not block all emails if fetch fails
      return blockedDomainsCache || new Set();
    }
    const text = await response.text();
    const newBlockedDomains = new Set(text.split('\n').map(d => d.trim()).filter(d => d.length > 0));
    blockedDomainsCache = newBlockedDomains;
    lastBlocklistFetchTimestamp = now;
    console.log(`Successfully fetched and cached ${newBlockedDomains.size} blocked domains.`);
    return newBlockedDomains;
  } catch (fetchError) {
    console.warn("Error fetching or processing temporary domain blocklist. Using stale or empty cache if available.", fetchError);
    // Return stale cache if available, otherwise an empty set
    return blockedDomainsCache || new Set();
  }
}


// Function to verify MX records of the email domain
async function verifyMxRecords(email: string): Promise<boolean> {
  const domain = email.substring(email.lastIndexOf("@") + 1);

  // Check against the cached blocklist
  try {
    const blockedDomains = await getBlockedDomains();
    if (blockedDomains.has(domain)) {
      console.log(`Domain ${domain} for email ${email} is on the blocklist.`);
      return false; // Domain is on the blocklist
    }
  } catch (error) {
    // This catch is primarily for unexpected errors in getBlockedDomains itself,
    // though getBlockedDomains tries to handle its own fetch errors.
    console.warn("Error obtaining blocked domains list. Proceeding with MX check only.", error);
  }

  // Existing MX record check
  try {
    const addresses = await dns.resolveMx(domain);
    return addresses && addresses.length > 0;
  } catch (error) {
    console.warn("MX record check failed for:", email, error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const supabase = await createClient(cookieStore);

  let email: string;

  try {
    const body = await request.json();
    email = body.email;
    if (!email || typeof email !== "string") {
      return NextResponse.json({ message: "Email is required." }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ message: "Invalid request body. Email is missing or malformed." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
  }

  // Add MX record check
  const isDeliverableDomain = await verifyMxRecords(email);
  if (!isDeliverableDomain) {
    return NextResponse.json({ message: "Email domain does not appear to be valid or able to receive emails." }, { status: 400 });
  }

  try {
    // Check if email already exists
    const { data: existingEntry, error: selectError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .maybeSingle();

    if (selectError) {
      console.error("Error checking email:", selectError);
      return NextResponse.json({ message: "Error checking email in database.", error: selectError.message }, { status: 500 });
    }

    if (existingEntry) {
      return NextResponse.json({ message: "Email already in waitlist." }, { status: 409 }); // 409 Conflict
    }

    // Insert new email
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert({ email: email, accepted: false }); // 'accepted' defaults to false as per schema

    if (insertError) {
      console.error("Error inserting email:", insertError);
      // Check for unique constraint violation if not handled by the select query (though it should be)
      if (insertError.code === '23505') { // Postgres unique violation error code
         return NextResponse.json({ message: "Email already in waitlist (concurrent request)." }, { status: 409 });
      }
      return NextResponse.json({ message: "Error adding email to waitlist.", error: insertError.message }, { status: 500 });
    }

    const {data:entryData} = await supabase
      .from("waitlist")
      .select("id, email, accepted")
      .eq("email", email)
      .single();

    const base64Data = Buffer.from(JSON.stringify(entryData)).toString('base64');
    const confirmWaitlistUrl = `https://vocapp.live/confirm-waitlist?data=${base64Data}`;

    const template = getHTML(confirmWaitlistUrl);
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Vocapp <support@vocapp.live>",
      to: email,
      subject: "Welcome to the Vocapp Waitlist!",
      html: template
    });

    return NextResponse.json({ message: "Successfully added to waitlist!" }, { status: 201 });
  } catch (error: unknown) {
    console.error("Unexpected error:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ message: "An unexpected error occurred.", error: errorMessage }, { status: 500 });
  }
}
