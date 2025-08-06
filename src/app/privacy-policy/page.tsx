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
            {pilConfig.companyName} (&quot;Vocapp&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates Vocapp as a personal project and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our app and services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Personal Information:</strong> Name, email address, and other information you provide when creating an account or contacting support.</li>
            <li><strong>Usage Data:</strong> App usage, device type, IP address, and analytics data to improve our services.</li>
            <li><strong>Podcast Creation Data:</strong> Information about your podcast requests, topics, and preferences to generate AI content and improve our algorithms.</li>
            <li><strong>Credit Usage:</strong> Records of credit purchases, usage patterns, and transaction history for billing and support purposes.</li>
            <li><strong>Generated Content:</strong> Metadata about podcasts you create (duration, topics) but not the actual audio content unless you explicitly share it with us.</li>
            <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies for authentication, analytics, and personalization.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain our AI podcast creation services and manage your credit balance.</li>
            <li>To process payments and manage your account billing information.</li>
            <li>To generate personalized AI podcasts based on your preferences and requests.</li>
            <li>To improve our AI algorithms, app features, user experience, and security.</li>
            <li>To provide customer support and respond to your inquiries.</li>
            <li>To communicate with you about updates, offers, and support.</li>
            <li>To prevent fraud and ensure compliance with our terms of service.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Information Sharing</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>We do <strong>not</strong> sell your personal information or generated podcast content.</li>
            <li>We may share data with trusted service providers including AI technology partners, cloud hosting providers, payment processors, and analytics services under strict confidentiality agreements.</li>
            <li>We may share anonymized usage patterns and aggregated data to improve our AI models, but never your personal information or specific podcast content.</li>
            <li>We may disclose information if required by law or to protect our rights and users.</li>
            <li>Your generated podcasts remain private unless you choose to share them publicly.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">AI Processing and Data Use</h2>
          <div className="space-y-4">
            <p>
              Our AI podcast creation service processes your requests to generate audio content:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Content Generation:</strong> Your podcast topics and preferences are processed by our AI systems to create personalized content</li>
              <li><strong>Quality Improvement:</strong> We may use anonymized data about podcast generation patterns to improve our AI models</li>
              <li><strong>No Content Storage:</strong> We do not permanently store the actual audio content of your generated podcasts unless you explicitly save them to our servers</li>
              <li><strong>Processing Location:</strong> AI processing may occur on servers located in different countries, but always under appropriate data protection measures</li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Data Security</h2>
          <p>
            We use industry-standard encryption and security practices to protect your data, including your account information, payment details, and podcast generation requests. However, no method of transmission over the Internet is 100% secure.
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
