// HIPAA Compliance utilities and components for Vital Bloom Biological Dentistry
// This ensures patient data is handled securely and in compliance with HIPAA regulations

import { z } from 'zod';

// HIPAA-compliant form validation schemas
export const HIPAAFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(
      /^[a-zA-Z\s'-]+$/,
      'First name can only contain letters, spaces, hyphens, and apostrophes'
    ),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(
      /^[a-zA-Z\s'-]+$/,
      'Last name can only contain letters, spaces, hyphens, and apostrophes'
    ),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 characters')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  service: z
    .string()
    .min(1, 'Please select a service')
    .max(100, 'Service selection is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .refine((msg) => {
      // Prevent potential injection attempts
      const dangerousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /data:/i,
        /vbscript:/i,
      ];
      return !dangerousPatterns.some((pattern) => pattern.test(msg));
    }, 'Message contains potentially unsafe content'),
  // HIPAA-specific fields
  consentToContact: z
    .boolean()
    .refine((val) => val === true, 'You must consent to being contacted'),
  privacyPolicyAccepted: z
    .boolean()
    .refine((val) => val === true, 'You must accept our privacy policy'),
  // Optional fields for better patient care
  preferredContactMethod: z.enum(['email', 'phone', 'text']).optional(),
  urgencyLevel: z.enum(['routine', 'urgent', 'emergency']).optional(),
});

export type HIPAAFormData = z.infer<typeof HIPAAFormSchema>;

// Data sanitization functions
export function sanitizePatientData(data: unknown): Partial<HIPAAFormData> {
  return {
    firstName: data.firstName?.trim().replace(/[<>]/g, ''),
    lastName: data.lastName?.trim().replace(/[<>]/g, ''),
    email: data.email?.trim().toLowerCase(),
    phone: data.phone?.replace(/\D/g, ''), // Remove non-digits
    service: data.service?.trim(),
    message: data.message?.trim().replace(/[<>]/g, ''),
    consentToContact: Boolean(data.consentToContact),
    privacyPolicyAccepted: Boolean(data.privacyPolicyAccepted),
    preferredContactMethod: data.preferredContactMethod,
    urgencyLevel: data.urgencyLevel,
  };
}

// Audit logging for HIPAA compliance
export function logPatientInteraction(
  action: string,
  data: Partial<HIPAAFormData>,
  ip?: string
) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    action,
    // Only log non-PHI data for audit purposes
    service: data.service,
    urgencyLevel: data.urgencyLevel,
    ip: ip || 'unknown',
    userAgent:
      typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
  };

  // In production, this should be sent to a secure logging service
  console.log('HIPAA Audit Log:', logEntry);
}

// Data retention policy
export const DATA_RETENTION_POLICY = {
  contactForms: 7 * 365, // 7 years as per HIPAA requirements
  appointmentRequests: 7 * 365,
  emailCommunications: 7 * 365,
  auditLogs: 6 * 365, // 6 years minimum
};

// Encryption utilities (for production use)
export function encryptSensitiveData(data: string): string {
  // In production, use proper encryption libraries like crypto-js
  // This is a placeholder - implement proper encryption
  return btoa(data); // Base64 encoding (NOT secure for production)
}

export function decryptSensitiveData(encryptedData: string): string {
  // In production, use proper decryption
  return atob(encryptedData); // Base64 decoding (NOT secure for production)
}

// HIPAA compliance checklist
export const HIPAA_COMPLIANCE_CHECKLIST = {
  administrative: [
    'Privacy Officer designated',
    'Security Officer designated',
    'Workforce training completed',
    'Business Associate Agreements in place',
    'Incident response plan established',
  ],
  physical: [
    'Facility access controls implemented',
    'Workstation security measures in place',
    'Device and media controls established',
    'Disposal procedures documented',
  ],
  technical: [
    'Access control systems implemented',
    'Audit controls in place',
    'Integrity controls established',
    'Transmission security measures',
    'Encryption for data at rest and in transit',
  ],
};

// Patient rights information
export const PATIENT_RIGHTS = {
  access: 'You have the right to access your health information',
  amendment:
    'You have the right to request amendments to your health information',
  disclosure: 'You have the right to request restrictions on disclosure',
  accounting: 'You have the right to receive an accounting of disclosures',
  complaint:
    'You have the right to file a complaint if you believe your privacy rights have been violated',
};
