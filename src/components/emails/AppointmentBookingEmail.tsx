interface EmailValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
}

export default function AppointmentBookingEmail(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  service: string,
  message: string,
  submittedAt: string
) {
  return (
    <html>
      <body style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#0f172a' }}>
        <table width="100%" cellPadding={0} cellSpacing={0} role="presentation" style={{ backgroundColor: '#f8fafc', padding: '24px' }}>
          <tbody>
            <tr>
              <td>
                <table width="100%" cellPadding={0} cellSpacing={0} role="presentation" style={{ maxWidth: 640, margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden' }}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#0ea5e9', padding: '16px 24px' }}>
                        <h1 style={{ margin: 0, fontSize: 18, color: '#ffffff' }}>New Appointment Booking</h1>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '24px' }}>
                        <p style={{ margin: '0 0 12px' }}>You have received a new appointment booking.</p>
                        <table role="presentation" cellPadding={0} cellSpacing={0} style={{ width: '100%', borderCollapse: 'collapse' }}>
                          <tbody>
                            <tr>
                              <td style={{ padding: '8px 0', width: 160, color: '#475569' }}>Name</td>
                              <td style={{ padding: '8px 0' }}>{firstName} {lastName}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 0', color: '#475569' }}>Email</td>
                              <td style={{ padding: '8px 0' }}>{email}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 0', color: '#475569' }}>Phone</td>
                              <td style={{ padding: '8px 0' }}>{phone}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 0', color: '#475569' }}>Service</td>
                              <td style={{ padding: '8px 0' }}>{service}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 0', verticalAlign: 'top', color: '#475569' }}>Message</td>
                              <td style={{ padding: '8px 0', whiteSpace: 'pre-wrap' }}>{message || '—'}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 0', color: '#475569' }}>Submitted</td>
                              <td style={{ padding: '8px 0' }}>{submittedAt}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: '#f1f5f9', padding: '12px 24px', fontSize: 12, color: '#64748b' }}>
                        This email was sent automatically by the Vital Bloom website.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
