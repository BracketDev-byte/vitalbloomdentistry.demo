import { generateTermsMetadata } from '@/lib/seo';

export const metadata = generateTermsMetadata();

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg text-gray-600 mb-8">
            <strong>Last updated:</strong> January 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the services of Vital Bloom Biological Dentistry, you accept and agree 
              to be bound by the terms and provision of this agreement. If you do not agree to abide by 
              the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Provided</h2>
            <p className="mb-4">
              Vital Bloom Biological Dentistry provides comprehensive biological dental care services including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Mercury-free dental fillings and restorations</li>
              <li>Ceramic dental implants</li>
              <li>Ozone therapy treatments</li>
              <li>Holistic dental cleanings</li>
              <li>Nutritional counseling for oral health</li>
              <li>Biocompatible dental materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Patient Responsibilities</h2>
            <p className="mb-4">As a patient, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete medical and dental history</li>
              <li>Follow treatment recommendations and care instructions</li>
              <li>Attend scheduled appointments or provide adequate notice for cancellations</li>
              <li>Pay for services as agreed upon</li>
              <li>Inform us of any changes in your health status</li>
              <li>Maintain good oral hygiene as recommended</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Appointment Policy</h2>
            <p className="mb-4">
              Appointments are scheduled based on availability. We require 24-hour notice for appointment 
              cancellations or rescheduling. Late cancellations or no-shows may be subject to a cancellation fee.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="mb-4">
              Payment is due at the time of service unless other arrangements have been made. We accept 
              cash, check, and major credit cards. For extensive treatment plans, payment plans may be 
              available upon request and approval.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Insurance and Billing</h2>
            <p className="mb-4">
              We will submit claims to your insurance company as a courtesy. However, you are ultimately 
              responsible for all charges. Insurance coverage varies, and we cannot guarantee payment by 
              your insurance company.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Medical Disclaimer</h2>
            <p className="mb-4">
              The information provided on our website and in our communications is for educational 
              purposes only and should not be considered as medical advice. Always consult with a 
              qualified healthcare provider for diagnosis and treatment of any medical condition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              While we strive to provide the highest quality dental care, we cannot guarantee specific 
              outcomes. Our liability is limited to the cost of the services provided. We are not 
              responsible for any indirect, incidental, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy and Confidentiality</h2>
            <p className="mb-4">
              We are committed to protecting your privacy and maintaining the confidentiality of your 
              health information in accordance with applicable laws and professional standards. Please 
              review our Privacy Policy for detailed information about how we handle your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Website Use</h2>
            <p className="mb-4">
              Our website is provided for informational purposes only. You may not use our website for 
              any unlawful purpose or in any way that could damage, disable, or impair the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Intellectual Property</h2>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, and images, is the property 
              of Vital Bloom Biological Dentistry and is protected by copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting on our website. Your continued use of our services constitutes 
              acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>Vital Bloom Biological Dentistry</strong></p>
              <p>123 Wellness Boulevard</p>
              <p>Natural City, NC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@vitalbloomdentistry.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="mb-4">
              These terms are governed by the laws of the state where our practice is located. Any 
              disputes will be resolved in the appropriate courts of that jurisdiction.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
