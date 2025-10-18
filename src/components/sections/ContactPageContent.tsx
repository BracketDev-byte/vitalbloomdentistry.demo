'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { ContactPageCTA } from '@/components/ui/standardizedCTAComp';
import { useActionState } from 'react';
import getFormData from '@/actions/form-actions';

export default function ContactPageContent() {
  const [state, formAction] = useActionState(getFormData, { errors: {} });
  return (
    <div className="min-h-screen bg-background ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Get in Touch with Our{' '}
              <span className="text-primary">Biological Dentistry Team</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to experience mercury-free, biocompatible dental care?
              Contact us today to book your consultation and begin your journey
              to optimal oral and overall health.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Visit Our Biological Dentistry Practice
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Located in the heart of London, UK, our modern practice offers
                  a serene, healing environment where your health and comfort
                  are our top priorities.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        10 High Street
                        <br />
                        London SW1A 1AA, United Kingdom
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Phone & WhatsApp
                      </h3>
                      <p className="text-gray-600 mb-2">+44 20 7946 0991</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                        onClick={() =>
                          window.open('https://wa.me/442079460991', '_blank')
                        }
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Us
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        info@vitalbloomdentistry.com
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Office Hours
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Mon-Thu: 8:00 AM - 5:00 PM</p>
                        <p>Fri: 8:00 AM - 3:00 PM</p>
                        <p>Sat: By appointment</p>
                        <p>Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Schedule Your Consultation
                </h3>
                <form className="space-y-6" action={formAction}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your first name"
                        className="mt-1"
                      />
                      {state?.errors?.firstName &&
                        state.errors.firstName.length > 0 && (
                          <p className="mt-1 text-sm text-red-600">
                            {state.errors.firstName[0]}
                          </p>
                        )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your last name"
                        className="mt-1"
                      />
                      {state?.errors?.lastName &&
                        state.errors.lastName.length > 0 && (
                          <p className="mt-1 text-sm text-red-600">
                            {state.errors.lastName[0]}
                          </p>
                        )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                    {state?.errors?.email && state.errors.email.length > 0 && (
                      <p className="mt-1 text-sm text-red-600">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                    {state?.errors?.phone && state.errors.phone.length > 0 && (
                      <p className="mt-1 text-sm text-red-600">
                        {state.errors.phone[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <select
                      id="service"
                      name="service"
                      className="w-full mt-1 px-3 py-2 border border-input bg-input-background rounded-md"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">Initial Consultation</option>
                      <option value="mercury-free-fillings">
                        Mercury-Free Fillings
                      </option>
                      <option value="ceramic-implants">Ceramic Implants</option>
                      <option value="ozone-therapy">Ozone Therapy</option>
                      <option value="holistic-cleaning">
                        Holistic Cleaning
                      </option>
                      <option value="nutritional-counseling">
                        Nutritional Counseling
                      </option>
                      <option value="biocompatibility-testing">
                        Biocompatibility Testing
                      </option>
                      <option value="other">Other</option>
                    </select>
                    {state?.errors?.service &&
                      state.errors.service.length > 0 && (
                        <p className="mt-1 text-sm text-red-600">
                          {state.errors.service[0]}
                        </p>
                      )}
                  </div>

                  <div>
                    <Label htmlFor="urgencyLevel">Urgency Level</Label>
                    <select
                      id="urgencyLevel"
                      name="urgencyLevel"
                      className="w-full mt-1 px-3 py-2 border border-input bg-input-background rounded-md"
                    >
                      <option value="routine">Routine - Schedule within 1-2 weeks</option>
                      <option value="urgent">Urgent - Schedule within 2-3 days</option>
                      <option value="emergency">Emergency - Call immediately</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="preferredContactMethod">Preferred Contact Method</Label>
                    <select
                      id="preferredContactMethod"
                      name="preferredContactMethod"
                      className="w-full mt-1 px-3 py-2 border border-input bg-input-background rounded-md"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="text">Text Message</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your dental health goals or any specific concerns..."
                      className="mt-1 min-h-[120px]"
                      required
                    />
                    {state?.errors?.message &&
                      state.errors.message.length > 0 && (
                        <p className="mt-1 text-sm text-red-600">
                          {state.errors.message[0]}
                        </p>
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
                        <Label htmlFor="consentToContact" className="text-sm font-medium">
                          I consent to being contacted regarding my appointment request *
                        </Label>
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
                        <Label htmlFor="privacyPolicyAccepted" className="text-sm font-medium">
                          I have read and accept the Privacy Policy *
                        </Label>
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    Send Message & Schedule Consultation
                  </Button>

                  {/* Optional feedback */}
                  {state?.message && (
                    <p className="text-sm text-gray-600">{state.message}</p>
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
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our Biological Dentistry Practice
            </h2>
            <p className="text-lg text-gray-600">
              Conveniently located in London with easy transport links and
              accessibility.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                title="Vital Bloom Biological Dentistry Location Map"
                aria-label="Map showing the location of Vital Bloom Biological Dentistry"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent('10 High Street, London SW1A 1AA, United Kingdom')}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactPageCTA />
    </div>
  );
}
