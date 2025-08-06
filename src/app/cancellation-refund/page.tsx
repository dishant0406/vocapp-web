import { PolicyLayout } from "@/components/PolicyLayout";
import { pilConfig } from "@/lib/pilConfig";

export default function CancellationRefundPage() {
  return (
    <PolicyLayout title="Cancellation & Refund Policy">
      <div className="space-y-8 md:space-y-10 max-w-2xl mx-auto">
        <p className="text-sm text-gray-500 text-right">Last updated: {pilConfig.lastUpdated}</p>
        
        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Overview</h2>
          <p>
            This Cancellation & Refund Policy explains how credits work in Vocapp and the conditions under which refunds may be provided. Vocapp is operated by {pilConfig.companyName} as a personal project. By purchasing credits, you agree to the terms outlined below.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">How Credits Work</h2>
          <div className="space-y-4">
            <p>
              Vocapp operates on a credit-based system for creating AI-generated podcasts:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Credit Usage:</strong> Each credit allows you to create AI podcasts up to 1 hour in length</li>
              <li><strong>Extended Content:</strong> For podcasts longer than 1 hour, 1 additional credit is consumed per additional hour or part thereof</li>
              <li><strong>Credit Validity:</strong> Credits do not expire and remain in your account until used</li>
              <li><strong>Non-transferable:</strong> Credits are tied to your account and cannot be transferred to other users</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Refund Policy</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Eligible Refunds</h3>
            <p>Refunds may be provided in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Technical Issues:</strong> If our service fails to generate your podcast due to technical problems on our end</li>
              <li><strong>Duplicate Charges:</strong> If you were charged multiple times for the same credit purchase</li>
              <li><strong>Unauthorized Transactions:</strong> If credits were purchased without your authorization</li>
              <li><strong>Service Unavailability:</strong> If our service is unavailable for extended periods (more than 48 hours)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Non-Refundable Situations</h2>
          <p>Refunds will not be provided in the following cases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Credits that have been successfully used to generate podcasts</li>
            <li>Dissatisfaction with the quality or content of generated podcasts</li>
            <li>Change of mind after successful credit purchase</li>
            <li>Failure to use credits within any timeframe (credits do not expire)</li>
            <li>Account suspension or termination due to violation of our Terms of Service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Refund Process</h2>
          <div className="space-y-4">
            <p>To request a refund:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact our support team at <a href={`mailto:${pilConfig.email}`} className="text-blue-600 underline">{pilConfig.email}</a></li>
              <li>Include your account email, transaction ID, and reason for the refund request</li>
              <li>Provide any relevant screenshots or error messages</li>
              <li>Allow up to 5-7 business days for our team to review your request</li>
            </ol>
            <p className="mt-4">
              <strong>Processing Time:</strong> Approved refunds will be processed within 7-10 business days and credited back to your original payment method.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Subscription Cancellation</h2>
          <div className="space-y-4">
            <p>If you have a recurring subscription for credits:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can cancel your subscription at any time through your account settings</li>
              <li>Cancellation takes effect at the end of your current billing period</li>
              <li>You will retain access to unused credits after cancellation</li>
              <li>No refunds are provided for partial subscription periods</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Dispute Resolution</h2>
          <p>
            If you disagree with our refund decision, you may escalate the matter by contacting {pilConfig.companyName} again with additional information. We are committed to resolving disputes fairly and in good faith.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Changes to This Policy</h2>
          <p>
            We may update this Cancellation & Refund Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our service after changes constitutes acceptance of the new policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Contact Information</h2>
          <p>
            For questions about this policy or to request a refund, please contact us at:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Email:</strong> <a href={`mailto:${pilConfig.email}`} className="text-blue-600 underline">{pilConfig.email}</a></p>
            <p><strong>Company:</strong> {pilConfig.companyName}</p>
            <p><strong>Website:</strong> <a href={pilConfig.website} className="text-blue-600 underline">{pilConfig.website}</a></p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
}