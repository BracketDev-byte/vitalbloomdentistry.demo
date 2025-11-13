'use server';

import AppointmentBookingEmail from '@/components/emails/AppointmentBookingEmail';
import BookingConfirmationEmail from '@/components/emails/BookingConfirmationEmail';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.warn('RESEND_API_KEY is not set. Email sending will fail.');
}
const resend = new Resend(resendApiKey);

export async function sendAppointmentEmail(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  service: string,
  message: string,
  submittedAt: string,
  urgencyLevel?: string,
  preferredContactMethod?: string
) {
  try {
    const fromAddress =
      process.env.RESEND_FROM || 'Vital Bloom <onboarding@resend.dev>';
    const adminRecipient =
      process.env.BOOKINGS_INBOX || 'bracketdev.official@gmail.com';
    const subject =
      urgencyLevel === 'emergency'
        ? `🚨 URGENT: Emergency appointment request - ${firstName} ${lastName}`
        : urgencyLevel === 'urgent'
          ? `⚡ URGENT: Appointment request - ${firstName} ${lastName}`
          : `New appointment booking: ${firstName} ${lastName}`;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [adminRecipient],
      subject,
      react: AppointmentBookingEmail(
        firstName,
        lastName,
        email,
        phone,
        service,
        message,
        submittedAt
      ),
    });

    if (error) {
      console.error('Resend admin email error:', error);
      throw new Error('Failed to send admin booking email');
    }

    await sendBookingConfirmationEmail(
      firstName,
      lastName,
      email,
      service,
      message,
      submittedAt,
      urgencyLevel,
      preferredContactMethod
    );

    return data;
  } catch (error) {
    console.error('sendAppointmentEmail error:', error);
    throw error;
  }
}

export async function sendBookingConfirmationEmail(
  firstName: string,
  lastName: string,
  email: string,
  service: string,
  message: string,
  submittedAt: string
) {
  try {
    const fromAddress =
      process.env.RESEND_FROM || 'Vital Bloom <onboarding@resend.dev>';
    const subject = `We received your request for ${service}`;

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject,
      react: BookingConfirmationEmail(
        firstName,
        lastName,
        email,
        service,
        message,
        submittedAt
      ),
    });

    if (error) {
      console.error('Resend confirmation email error:', error);
      throw new Error('Failed to send confirmation email');
    }

    return data;
  } catch (error) {
    console.error('sendBookingConfirmationEmail error:', error);
    throw error;
  }
}
