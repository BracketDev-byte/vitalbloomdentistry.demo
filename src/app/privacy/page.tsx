import { generatePrivacyMetadata } from '@/lib/seo';

export const metadata = generatePrivacyMetadata();

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg text-gray-600 mb-8">
            <strong>Last updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              At Vital Bloom Biological Dentistry, we collect information you
              provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Schedule an appointment or consultation</li>
              <li>Fill out our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Complete patient intake forms</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="mb-4">
              This information may include your name, email address, phone
              number, mailing address, medical history, and other health-related
              information necessary for your dental care.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide dental services and treatment</li>
              <li>Schedule and manage appointments</li>
              <li>Send appointment reminders and follow-up communications</li>
              <li>Process payments and insurance claims</li>
              <li>
                Send newsletters and educational content (with your consent)
              </li>
              <li>Improve our services and website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Health Information Protection
            </h2>
            <p className="mb-4">
              As a dental practice, we are committed to protecting your health
              information in accordance with applicable privacy laws and
              professional standards. Your dental records and health information
              are kept confidential and secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>With healthcare providers involved in your care</li>
              <li>With insurance companies for claims processing</li>
              <li>In case of emergency situations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. This includes secure servers,
              encrypted data transmission, and restricted access to your
              information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Request corrections to your information</li>
              <li>
                Request deletion of your information (subject to legal
                requirements)
              </li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Cookies and Website Analytics
            </h2>
            <p className="mb-4">
              Our website may use cookies and similar technologies to improve
              your browsing experience and analyze website usage. You can
              control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>
                <strong>Vital Bloom Biological Dentistry</strong>
              </p>
              <p>123 Wellness Boulevard</p>
              <p>Natural City, NC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@vitalbloomdentistry.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="mb-4">
              {`We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.`}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
