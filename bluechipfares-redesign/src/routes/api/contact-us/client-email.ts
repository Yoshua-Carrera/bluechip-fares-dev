import { capitalizeFirstLetter } from '#/lib/utils'

export const createClientEmailHtml = (inputs: {
  inquiryNum: string
  name: string
  phoneNumber: string
  inquiry: string
  contactEmail: string
}) => `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Contact us form</title>
        </head>
        <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">

          <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
            <tr>
              <td align="center">
                
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(90deg, #4f46e5, #3b82f6); padding:24px; text-align:center;">
                      <h1 style="color:#ffffff; margin:0; font-size:22px;">We have received your inquiry (#${inputs.inquiryNum})</h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:30px;">
                      
                      <p style="margin:0 0 20px 0; color:#333333; font-size:15px;">
                          Hi ${capitalizeFirstLetter(inputs.name.toLowerCase())}, thank you for contacting us regarding your inquiry about our services. We have received your message and will get back to you shortly.

                          Here is a summary of your inquiry:
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                        
                        <tr>
                          <td style="padding:10px 0; font-weight:bold; color:#555;">Name:</td>
                          <td style="padding:10px 0; color:#333;">${inputs.name}</td>
                        </tr>

                        <tr>
                          <td style="padding:10px 0; font-weight:bold; color:#555;">Phone Number:</td>
                          <td style="padding:10px 0; color:#333;">${inputs.phoneNumber}</td>
                        </tr>

                        <tr>
                          <td style="padding:10px 0; font-weight:bold; color:#555;">Inquiry:</td>
                          <td style="padding:10px 0; color:#333;">${inputs.inquiry}</td>
                        </tr>

                        <tr>
                          <td style="padding:10px 0; font-weight:bold; color:#555;">Inquiry number:</td>
                          <td style="padding:10px 0; color:#333;">${inputs.inquiryNum}</td>
                        </tr>


                        <tr>
                          <td colspan="2" style="padding-top:20px; font-weight:bold; color:#555;">Message:</td>
                        </tr>

                        <tr>
                          <td colspan="2" style="padding:12px; background:#f9fafb; border-radius:6px; color:#333; line-height:1.6;">
                            We will reach out to you in the next 24-48 hours.
                          </td>
                        </tr>

                      </table>

                      <!-- Button -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:30px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${inputs.contactEmail}" 
                              style="background:#4f46e5; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-size:14px; display:inline-block;">
                              Reply to Sender
                            </a>
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f4f6f8; padding:20px; text-align:center; font-size:12px; color:#888;">
                      This message was sent from an automated system at Bluechip Fares.
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
        </html>

`
