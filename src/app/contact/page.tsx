import { PolicyLayout } from "@/components/PolicyLayout";
import { pilConfig } from "@/lib/pilConfig";

export default function ContactPage() {
  return (
    <PolicyLayout title="Contact Us">
      <div className="space-y-8 md:space-y-10 max-w-2xl mx-auto">
        <p className="text-sm text-gray-500 text-right">
          Last updated: {pilConfig.lastUpdated}
        </p>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">General Inquiries</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${pilConfig.email}`}
                className="text-blue-600 underline"
              >
                {pilConfig.email}
              </a>
            </li>
           
            <li>
              <strong>Website:</strong>{" "}
              <a
                href={pilConfig.website}
                className="text-blue-600 underline"
              >
                {pilConfig.website}
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Support</h2>
          <p>
            For technical support or account issues, email us with a description
            of your problem. Our team aims to respond within 2 business days.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">
            Business & Partnerships
          </h2>
          <p>
            Interested in partnering, advertising, or business development?
            Contact us to discuss collaboration opportunities.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Media & Press</h2>
          <p>
            For press inquiries, interviews, or media kits, please reach out via
            email. We are happy to provide information about Vocapp, our
            technology, and our team.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
