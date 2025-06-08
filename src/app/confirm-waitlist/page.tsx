import { PolicyLayout } from "@/components/PolicyLayout";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase-server";
import { cookies } from "next/headers";
import Link from "next/link";

interface WaitlistEntry {
  id: number;
  email: string;
  // accepted will be false initially from the data, but we update it to true
}

async function updateConfirmation(data: string | undefined): Promise<{ success: boolean; message: string; email?: string }> {
  if (!data) {
    return { success: false, message: "Confirmation data is missing." };
  }

  try {
    const decodedString = Buffer.from(data, 'base64').toString('utf-8');
    const entryData = JSON.parse(decodedString) as WaitlistEntry;

    if (!entryData || typeof entryData.id !== 'number' || typeof entryData.email !== 'string') {
      console.error("Invalid entry data structure:", entryData);
      return { success: false, message: "Invalid confirmation data format." };
    }

    const cookieStore = cookies();
    const supabase = await createClient(cookieStore);

    // Check if already confirmed to avoid redundant updates and provide appropriate feedback
    const { data: existingEntry, error: selectError } = await supabase
      .from("waitlist")
      .select("accepted")
      .eq("id", entryData.id)
      .single();

    if (selectError) {
      console.error("Error fetching waitlist entry:", selectError);
      return { success: false, message: "Could not verify your confirmation. Please try again later." };
    }

    if (existingEntry && existingEntry.accepted) {
      return { success: true, message: "Your email address has already been confirmed.", email: entryData.email };
    }

    const { error: updateError } = await supabase
      .from("waitlist")
      .update({ accepted: true}) // Also record confirmation time
      .eq("id", entryData.id);

    if (updateError) {
      console.error("Error updating waitlist entry:", updateError);
      return { success: false, message: "Failed to confirm your email. Please try again later." };
    }

    return { success: true, message: "Thank you! Your email address has been successfully confirmed.", email: entryData.email };
  } catch (error) {
    console.error("Error processing confirmation:", error);
    // Differentiate between JSON parsing errors and other errors
    if (error instanceof SyntaxError) {
        return { success: false, message: "Invalid confirmation link. The data is corrupted." };
    }
    return { success: false, message: "An unexpected error occurred during confirmation." };
  }
}

export default async function ConfirmWaitlistPage({
  searchParams,
}: {
  searchParams: { data?: string };
}) {
  const params = await searchParams;
  const result = await updateConfirmation(params.data);

  return (
    <PolicyLayout title="">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6">{result.success ? "🎉 Thank You!" : "⚠️ Oops!"}</h1>
          <p className="text-lg mb-4">{result.message}</p>
          {result.success && result.email && (
            <p className="text-md">
              The email <span className="font-semibold">{result.email}</span> is now confirmed for the Vocapp waitlist.
            </p>
          )}
          {!result.success && (
            <p className="text-md">
              If the problem persists, please try joining the waitlist again or contact support.
            </p>
          )}
          <div className="mt-8">
            <Button asChild>
              <Link href="/" className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                Go to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PolicyLayout>
  );
}
