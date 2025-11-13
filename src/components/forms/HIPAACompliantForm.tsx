'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlertCircle, Shield, Lock } from 'lucide-react';
import {
  HIPAAFormSchema,
  sanitizePatientData,
  logPatientInteraction,
} from '@/lib/hipaa';

interface HIPAACompliantFormProps {
  onSubmit: (data: typeof HIPAAFormSchema._type) => Promise<void>;
  isLoading?: boolean;
  className?: string;
}

export function HIPAACompliantForm({
  onSubmit,
  isLoading = false,
  className = '',
}: HIPAACompliantFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consentToContact: false,
    privacyPolicyAccepted: false,
    preferredContactMethod: 'email' as 'email' | 'phone' | 'text',
    urgencyLevel: 'routine' as 'routine' | 'urgent' | 'emergency',
  });

  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [showPrivacyNotice, setShowPrivacyNotice] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: [] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sanitize data before validation
      const sanitizedData = sanitizePatientData(formData);

      // Validate with HIPAA schema
      const validationResult = HIPAAFormSchema.safeParse(sanitizedData);

      if (!validationResult.success) {
        setErrors(validationResult.error.flatten().fieldErrors);
        return;
      }

      // Log interaction for audit trail
      logPatientInteraction('form_submission', sanitizedData);

      // Submit form
      await onSubmit(validationResult.data);

      // Clear form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        consentToContact: false,
        privacyPolicyAccepted: false,
        preferredContactMethod: 'email',
        urgencyLevel: 'routine',
      });
      // space
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ general: ['Failed to submit form. Please try again.'] });
    }
  };

  return (
    <Card className={`p-6 ${className}`}>
      {/* HIPAA Compliance Notice */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Your Privacy is Protected
            </h3>
            <p className="text-sm text-blue-800 mb-2">
              We are HIPAA compliant and protect your health information
              according to federal regulations.
            </p>
            <button
              type="button"
              onClick={() => setShowPrivacyNotice(!showPrivacyNotice)}
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              {showPrivacyNotice ? 'Hide' : 'View'} Privacy Notice
            </button>
          </div>
        </div>

        {showPrivacyNotice && (
          <div className="mt-3 p-3 bg-white border border-blue-200 rounded text-sm text-gray-700">
            <p className="mb-2">
              <strong>How we protect your information:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>All data is encrypted during transmission</li>
              <li>Access is restricted to authorized personnel only</li>
              <li>We maintain audit logs of all data access</li>
              <li>Your information is never shared without consent</li>
              <li>You have the right to access and amend your records</li>
            </ul>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-gray-600" />
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Enter your first name"
                className="mt-1"
                required
                aria-describedby={
                  errors.firstName ? 'firstName-error' : undefined
                }
              />
              {errors.firstName && (
                <p
                  id="firstName-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.firstName[0]}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName" className="text-sm font-medium">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Enter your last name"
                className="mt-1"
                required
                aria-describedby={
                  errors.lastName ? 'lastName-error' : undefined
                }
              />
              {errors.lastName && (
                <p
                  id="lastName-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.lastName[0]}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className="mt-1"
              required
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {errors.email[0]}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(555) 123-4567"
              className="mt-1"
              required
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p
                id="phone-error"
                className="mt-1 text-sm text-red-600"
                role="alert"
              >
                {errors.phone[0]}
              </p>
            )}
          </div>
        </div>

        {/* Service Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Service Information
          </h3>

          <div>
            <Label htmlFor="service" className="text-sm font-medium">
              Service Interest *
            </Label>
            <Select
              value={formData.service}
              onValueChange={(value) => handleInputChange('service', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consultation">
                  Initial Consultation
                </SelectItem>
                <SelectItem value="mercury-free-fillings">
                  Mercury-Free Fillings
                </SelectItem>
                <SelectItem value="ceramic-implants">
                  Ceramic Implants
                </SelectItem>
                <SelectItem value="ozone-therapy">Ozone Therapy</SelectItem>
                <SelectItem value="holistic-cleaning">
                  Holistic Cleaning
                </SelectItem>
                <SelectItem value="nutritional-counseling">
                  Nutritional Counseling
                </SelectItem>
                <SelectItem value="biocompatibility-testing">
                  Biocompatibility Testing
                </SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600" role="alert">
                {errors.service[0]}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="urgencyLevel" className="text-sm font-medium">
              Urgency Level
            </Label>
            <Select
              value={formData.urgencyLevel}
              onValueChange={(value) =>
                handleInputChange('urgencyLevel', value)
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="routine">
                  Routine - Schedule within 1-2 weeks
                </SelectItem>
                <SelectItem value="urgent">
                  Urgent - Schedule within 2-3 days
                </SelectItem>
                <SelectItem value="emergency">
                  Emergency - Call immediately
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label
              htmlFor="preferredContactMethod"
              className="text-sm font-medium"
            >
              Preferred Contact Method
            </Label>
            <Select
              value={formData.preferredContactMethod}
              onValueChange={(value) =>
                handleInputChange('preferredContactMethod', value)
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone Call</SelectItem>
                <SelectItem value="text">Text Message</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className="text-sm font-medium">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder="Please describe your dental concerns, health goals, or any specific questions..."
            className="mt-1 min-h-[120px]"
            required
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-sm text-red-600"
              role="alert"
            >
              {errors.message[0]}
            </p>
          )}
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Checkbox
              id="consentToContact"
              checked={formData.consentToContact}
              onCheckedChange={(checked) =>
                handleInputChange('consentToContact', checked)
              }
              required
              aria-describedby={
                errors.consentToContact ? 'consent-error' : undefined
              }
            />
            <div className="space-y-1">
              <Label htmlFor="consentToContact" className="text-sm font-medium">
                I consent to being contacted regarding my appointment request *
              </Label>
              <p className="text-xs text-gray-600">
                By checking this box, you agree to receive communications from
                Vital Bloom Biological Dentistry regarding your appointment
                request.
              </p>
              {errors.consentToContact && (
                <p
                  id="consent-error"
                  className="text-sm text-red-600"
                  role="alert"
                >
                  {errors.consentToContact[0]}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="privacyPolicyAccepted"
              checked={formData.privacyPolicyAccepted}
              onCheckedChange={(checked) =>
                handleInputChange('privacyPolicyAccepted', checked)
              }
              required
              aria-describedby={
                errors.privacyPolicyAccepted ? 'privacy-error' : undefined
              }
            />
            <div className="space-y-1">
              <Label
                htmlFor="privacyPolicyAccepted"
                className="text-sm font-medium"
              >
                I have read and accept the Privacy Policy *
              </Label>
              <p className="text-xs text-gray-600">
                You acknowledge that you have read our{' '}
                <a
                  href="/privacy"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>{' '}
                and understand how we collect, use, and protect your
                information.
              </p>
              {errors.privacyPolicyAccepted && (
                <p
                  id="privacy-error"
                  className="text-sm text-red-600"
                  role="alert"
                >
                  {errors.privacyPolicyAccepted[0]}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isLoading}
          aria-describedby={errors.general ? 'general-error' : undefined}
        >
          {isLoading
            ? 'Submitting...'
            : 'Send Secure Message & Schedule Consultation'}
        </Button>

        {/* General Errors */}
        {errors.general && (
          <div
            id="general-error"
            className="p-3 bg-red-50 border border-red-200 rounded-lg"
            role="alert"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <p className="text-sm text-red-800">{errors.general[0]}</p>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="text-xs text-gray-500 text-center">
          <div className="flex items-center justify-center gap-2">
            <Lock className="w-3 h-3" />
            <span>Your information is encrypted and transmitted securely</span>
          </div>
        </div>
      </form>
    </Card>
  );
}
