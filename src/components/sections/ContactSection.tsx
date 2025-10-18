'use client';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Clock, MapPin, Phone, Mail, Shield } from 'lucide-react';
import SectionIntroduction from '../ui/sectionIntroduction';
import { useActionState } from 'react';
import getFormData from '@/actions/form-actions';
import { SkipLinks } from '@/components/accessibility/AccessibilityComponents';

export default function ContactSection() {
  const subhradingText =
    'Take the first step towards optimal oral health. Book your consultation today and discover the benefits of biological dentistry.';

  const [state, formAction] = useActionState(getFormData, { errors: {} });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <SkipLinks />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionIntroduction
          Heading=" Schedule Your Visit"
          Subheading={subhradingText}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* HIPAA-Compliant Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Your Privacy is Protected</h3>
                  <p className="text-sm text-blue-800">
                    We are HIPAA compliant and protect your health information according to federal regulations.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Book Your Appointment
            </h3>

            <form className="space-y-6" action={formAction}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    First Name *
                  </label>
                  <Input name="firstName" placeholder="Enter your first name" required />
                  {state?.errors?.firstName && state.errors.firstName.length > 0 && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.firstName[0]}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Last Name *
                  </label>
                  <Input name="lastName" placeholder="Enter your last name" required />
                  {state?.errors?.lastName && state.errors.lastName.length > 0 && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.lastName[0]}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Email *
                </label>
                <Input name="email" type="email" placeholder="Enter your email" required />
                {state?.errors?.email && state.errors.email.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Phone *
                </label>
                <Input name="phone" type="tel" placeholder="Enter your phone number" required />
                {state?.errors?.phone && state.errors.phone.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.phone[0]}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Service Type *
                </label>
                <select
                  name="service"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Initial Consultation</option>
                  <option value="mercury-free-fillings">Mercury-Free Fillings</option>
                  <option value="ceramic-implants">Ceramic Implants</option>
                  <option value="ozone-therapy">Ozone Therapy</option>
                  <option value="holistic-cleaning">Holistic Cleaning</option>
                  <option value="nutritional-counseling">Nutritional Counseling</option>
                  <option value="biocompatibility-testing">Biocompatibility Testing</option>
                  <option value="other">Other</option>
                </select>
                {state?.errors?.service && state.errors.service.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.service[0]}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Urgency Level
                </label>
                <select
                  name="urgencyLevel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="routine">Routine - Schedule within 1-2 weeks</option>
                  <option value="urgent">Urgent - Schedule within 2-3 days</option>
                  <option value="emergency">Emergency - Call immediately</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Preferred Contact Method
                </label>
                <select
                  name="preferredContactMethod"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your dental concerns or questions"
                  rows={4}
                  required
                />
                {state?.errors?.message && state.errors.message.length > 0 && (
                  <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consentToContact"
                    name="consentToContact"
                    required
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <label htmlFor="consentToContact" className="text-sm font-medium">
                      I consent to being contacted regarding my appointment request *
                    </label>
                    <p className="text-xs text-gray-600">
                      By checking this box, you agree to receive communications from Vital Bloom Biological Dentistry regarding your appointment request.
                    </p>
                    {state?.errors?.consentToContact && (
                      <p className="text-sm text-red-600">{state.errors.consentToContact[0]}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacyPolicyAccepted"
                    name="privacyPolicyAccepted"
                    required
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <label htmlFor="privacyPolicyAccepted" className="text-sm font-medium">
                      I have read and accept the Privacy Policy *
                    </label>
                    <p className="text-xs text-gray-600">
                      You acknowledge that you have read our{' '}
                      <a href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Privacy Policy
                      </a>{' '}
                      and understand how we collect, use, and protect your information.
                    </p>
                    {state?.errors?.privacyPolicyAccepted && (
                      <p className="text-sm text-red-600">{state.errors.privacyPolicyAccepted[0]}</p>
                    )}
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-3">
                Schedule Appointment
              </Button>

              {/* Success/Error Messages */}
              {state?.message && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">{state.message}</p>
                </div>
              )}
              {state?.errors && Object.keys(state.errors).length > 0 && (
                <ul className="text-sm text-red-600 list-disc pl-5">
                  {Object.entries(state.errors).map(([key, errors]) =>
                    errors?.map((err, idx) => (
                      <li key={`${key}-${idx}`}>{err}</li>
                    ))
                  )}
                </ul>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <address className="text-gray-600 not-italic">
                      123 Wellness Boulevard<br />
                      Natural City, NC 12345
                    </address>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@vitalbloomdentistry.com" className="hover:text-primary transition-colors">
                        info@vitalbloomdentistry.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center" aria-hidden="true">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Office Hours
                    </h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Thursday: 8:00 AM - 5:00 PM</p>
                      <p>Friday: 8:00 AM - 3:00 PM</p>
                      <p>Saturday: By appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-primary p-8 rounded-2xl text-white">
              <h3 className="text-xl font-semibold mb-4">Dental Emergency?</h3>
              <p className="mb-4 text-white/90">
                If you have a dental emergency, please call our emergency line
                for immediate assistance.
              </p>
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <a href="tel:+15551234567" aria-label="Call emergency line at (555) 123-4567">
                  Emergency: (555) 123-HELP
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
