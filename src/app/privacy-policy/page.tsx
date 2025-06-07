import { PolicyLayout } from "@/components/PolicyLayout";
import { pilConfig } from "@/lib/pilConfig";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="space-y-8 md:space-y-10 max-w-2xl mx-autobg-background ">
        <p className="text-sm text-gray-500 text-right">Last updated: {pilConfig.lastUpdated}</p>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Introduction</h2>
          <p>
            Vocapp Technologies Pvt. Ltd. (&quot;Vocapp&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our app and services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Personal Information:</strong> Name, email address, and other information you provide when creating an account or contacting support.</li>
            <li><strong>Usage Data:</strong> App usage, device type, IP address, and analytics data to improve our services.</li>
            <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies for authentication, analytics, and personalization.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain our services, including personalized news and learning episodes.</li>
            <li>To improve app features, user experience, and security.</li>
            <li>To communicate with you about updates, offers, and support.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Information Sharing</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>We do <strong>not</strong> sell your personal information.</li>
            <li>We may share data with trusted service providers (e.g., cloud hosting, analytics) under strict confidentiality agreements.</li>
            <li>We may disclose information if required by law or to protect our rights and users.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Data Security</h2>
          <p>
            We use industry-standard encryption and security practices to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">International Data Transfers</h2>
          <p>
            Your information may be processed and stored in countries outside your own. We ensure adequate safeguards for international transfers.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Retention</h2>
          <p>
            We retain your information as long as necessary to provide our services and comply with legal obligations.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access, update, or delete your personal information by contacting us.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Request a copy of your data or object to certain processing.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us information, please contact us for removal.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify users of significant changes and update the date above.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Contact</h2>
          <p>
            For questions about this policy, contact us at <a href={`mailto:${pilConfig.email}`} className="text-blue-600 underline">{pilConfig.email}</a>.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
}
