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
            By accessing or using Vocapp, you agree to be bound by these Terms & Conditions. Vocapp is operated by {pilConfig.companyName} as a personal project. If you do not agree to these terms, please do not use our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Use of Service</h2>
          <p>
            Vocapp is an AI-powered podcast creation platform that operates on a credit-based system. You agree to use Vocapp in compliance with all applicable laws and these terms. You are responsible for maintaining the confidentiality of your account and all activities that occur under your account.
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
          <h2 className="text-2xl font-semibold mb-2 mt-4">Credits & Payments</h2>
          <div className="space-y-4">
            <p>
              Vocapp operates on a credit-based system for AI podcast creation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Credit Purchase:</strong> You can purchase credits to create AI-generated podcasts</li>
              <li><strong>Credit Usage:</strong> Each credit allows creation of podcasts up to 1 hour in length. Podcasts longer than 1 hour consume 1 additional credit per hour or part thereof</li>
              <li><strong>Payment Terms:</strong> All credit purchases are final and non-refundable except as outlined in our Cancellation & Refund Policy</li>
              <li><strong>Credit Validity:</strong> Credits do not expire and remain in your account until used</li>
              <li><strong>Pricing:</strong> Credit prices are displayed at the time of purchase and may change without notice</li>
            </ul>
            <p>
              By purchasing credits, you agree to the pricing, billing, and terms presented at checkout.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Intellectual Property</h2>
          <div className="space-y-4">
            <p>
              All content, trademarks, and data on Vocapp are the property of {pilConfig.companyName} or its licensors.
            </p>
            <p>
              <strong>AI-Generated Content:</strong> You retain ownership of podcasts you create using our AI technology. However, you acknowledge that similar content may be generated for other users due to the nature of AI systems. We do not claim ownership of your generated podcasts, but we reserve the right to use anonymized usage data to improve our services.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Third-Party Services</h2>
          <p>
            Vocapp may integrate with third-party services including AI providers, payment processors, and content delivery networks. We are not responsible for the content, availability, or practices of these external services. Service interruptions from third-party providers may affect podcast generation but do not entitle users to credit refunds unless specified in our Cancellation & Refund Policy.
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
            These Terms & Conditions are governed by applicable laws. For any disputes, you agree to resolve them through good faith communication with {pilConfig.companyName}.
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
