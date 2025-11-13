'use server';

import { sendAppointmentEmail } from './sendEmail-actions';
import {
  HIPAAFormSchema,
  sanitizePatientData,
  logPatientInteraction,
} from '@/lib/hipaa';

export type ActionState = {
  errors: Record<string, string[]>;
  success?: boolean;
  message?: string;
};

export default async function getFormData(
  prevState: ActionState,
  rawFormData: FormData
): Promise<ActionState> {
  try {
    // Extract and sanitize form data
    const formData = {
      firstName: rawFormData.get('firstName'),
      lastName: rawFormData.get('lastName'),
      email: rawFormData.get('email'),
      phone: rawFormData.get('phone'),
      service: rawFormData.get('service'),
      message: rawFormData.get('message'),
      consentToContact: rawFormData.get('consentToContact') === 'on',
      privacyPolicyAccepted: rawFormData.get('privacyPolicyAccepted') === 'on',
      preferredContactMethod:
        rawFormData.get('preferredContactMethod') || 'email',
      urgencyLevel: rawFormData.get('urgencyLevel') || 'routine',
    };

    // Sanitize data for HIPAA compliance
    const sanitizedData = sanitizePatientData(formData);

    // Validate with HIPAA-compliant schema
    const result = HIPAAFormSchema.safeParse(sanitizedData);

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
        success: false,
        message: 'Please correct the errors below.',
      };
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      urgencyLevel,
      preferredContactMethod,
    } = result.data;

    // Log interaction for HIPAA audit trail
    logPatientInteraction('appointment_request', sanitizedData);

    // Send emails (admin + confirmation)
    await sendAppointmentEmail(
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      new Date().toISOString(),
      urgencyLevel,
      preferredContactMethod
    );

    return {
      errors: {},
      success: true,
      message:
        'Your appointment request has been sent securely. We will contact you within 24 hours.',
    };
  } catch (err: unknown) {
    console.error('Error processing appointment request:', err);

    // Log error for audit trail
    logPatientInteraction('form_error', {}, 'server_error');

    return {
      errors: prevState?.errors || {},
      success: false,
      message:
        'We apologize, but there was an error processing your request. Please try again or call us directly.',
    };
  }
}
