import { PolicyLayout } from "@/components/PolicyLayout";
import { pilConfig } from "@/lib/pilConfig";

export default function TermsConditionsPage() {
  return (
    <PolicyLayout title="Terms & Conditions">
      <div className="space-y-8 md:space-y-10 max-w-2xl mx-auto ">
        <p className="text-sm text-gray-500 text-right">Last updated: {pilConfig.lastUpdated}</p>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Acceptance of Terms</h2>
          <p>
            By accessing or using Vocapp, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Use of Service</h2>
          <p>
            You agree to use Vocapp in compliance with all applicable laws. You are responsible for maintaining the confidentiality of your account.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Account Registration & Security</h2>
          <p>
            To access certain features, you may need to register for an account. You agree to provide accurate information and keep your credentials secure. You are responsible for all activity under your account.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">User Content & Conduct</h2>
          <p>
            You may not use Vocapp to upload, share, or generate content that is unlawful, harmful, or infringes on others’ rights. We reserve the right to remove content or suspend accounts that violate these terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Subscription & Payments</h2>
          <p>
            Some features are available via paid subscription. By subscribing, you agree to the pricing, billing, and renewal terms presented at checkout. All fees are non-refundable except as required by law.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Intellectual Property</h2>
          <p>
            All content, trademarks, and data on Vocapp are the property of Vocapp Technologies Pvt. Ltd. or its licensors.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Third-Party Services</h2>
          <p>
            Vocapp may integrate with third-party services (e.g., news APIs, payment processors). We are not responsible for the content or practices of these external services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Limitation of Liability</h2>
          <p>
            Vocapp is provided &quot;as is&quot; without warranties. We are not liable for any damages arising from your use of the service.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Termination</h2>
          <p>
            We may suspend or terminate your access to Vocapp at our discretion, especially if you violate these terms. You may also delete your account at any time by contacting support.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Governing Law</h2>
          <p>
            These Terms & Conditions are governed by the laws of the jurisdiction where Vocapp Technologies Pvt. Ltd. is registered, without regard to conflict of law principles.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Continued use of the service constitutes acceptance of the new terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Contact</h2>
          <p>
            For questions about these terms, contact us at <a href={`mailto:${pilConfig.email}`} className="text-blue-600 underline">{pilConfig.email}</a>.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
