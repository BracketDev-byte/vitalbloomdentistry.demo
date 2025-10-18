// Send to user after they successfuly make their appointment booking

export default function BookingConfirmationEmail(
  firstName: string,
  lastName: string,
  email: string,
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
                      <td style={{ backgroundColor: '#10b981', padding: '16px 24px' }}>
                        <h1 style={{ margin: 0, fontSize: 18, color: '#ffffff' }}>Your Appointment Request Was Received</h1>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '24px' }}>
                        <p style={{ margin: '0 0 12px' }}>Hi {firstName},</p>
                        <p style={{ margin: '0 0 12px' }}>
                          Thank you for reaching out to Vital Bloom. We have received your request for
                          <strong> {service}</strong> and will contact you shortly to confirm a date and time.
                        </p>
                        <table role="presentation" cellPadding={0} cellSpacing={0} style={{ width: '100%', borderCollapse: 'collapse', marginTop: 12 }}>
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
                              <td style={{ padding: '8px 0', verticalAlign: 'top', color: '#475569' }}>Message</td>
                              <td style={{ padding: '8px 0', whiteSpace: 'pre-wrap' }}>{message || '—'}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '8px 0', color: '#475569' }}>Submitted</td>
                              <td style={{ padding: '8px 0' }}>{submittedAt}</td>
                            </tr>
                          </tbody>
                        </table>
                        <p style={{ margin: '16px 0 0', fontSize: 14, color: '#334155' }}>
                          If this wasn’t you, please reply to this email so we can assist.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: '#f1f5f9', padding: '12px 24px', fontSize: 12, color: '#64748b' }}>
                        Vital Bloom • We care for your smile
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
