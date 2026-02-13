import { createFileRoute } from '@tanstack/react-router'
import type { ContactUsRequest } from '@/models/contact-us.models'
import { getClient } from '@/db'
import { sendEmail } from '@/utils/email.utils'

export const Route = createFileRoute('/api/contact-us-form/')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const sql = await getClient()
        const body: ContactUsRequest = await request.json()
        const { name, email, phone, image, inquiry } = body
        if (!sql) {
          return new Response(
            JSON.stringify({ status: 'ERROR', message: 'Database not configured' }),
            { status: 500 },
          )
        }
        try {
          const res = await sql`
            INSERT INTO contact_us_form (
              customer_name, customer_email, customer_phone, image, customer_request
            )
            VALUES (
              ${name},
              ${email},
              ${phone},
              ${image},
              ${inquiry}
            )
            RETURNING id;
          `
          const rows: Array<Record<string, any>> = Array.isArray(res)
            ? res
            : 'rows' in res
              ? res.rows
              : []

          const insertedId = rows[0]?.id

          if (process.env.SMTP_USER) {
            // Vendor Email
            await sendEmail({
              to: process.env.SMTP_USER,
              subject: `New client inquiry from ${name} - Inquiry #${insertedId}`,
              text: `New client inquiry received!

              Client Name: ${name}
              Client Email: ${email}
              Client Phone: ${phone}

              Inquiry Details:
              ${inquiry}

              ${image ? `Image URL: ${image}` : ''}

              Please follow up with the client as soon as possible.`,
            })

            // Client Email
            await sendEmail({
              to: email,
              subject: `Thanks for contacting us, ${name}`,
              text: `Dear ${name},

              Thank you for contacting us regarding your inquiry about our services. We have received your message and will get back to you shortly.

              Here is a summary of your inquiry:
              ${inquiry}

              If you have any further questions, please don't hesitate to reply to this email or call us.

              For your records, your inquiry number is: ${insertedId}

              Sincerely,
              The Bluechip Fares Team`,
            })
          }

          console.info(`Successfully posted contact us form: ${JSON.stringify({ data: res })}`)
          console.info(`Successfully emailed: client ${email} inquiry #${insertedId}`)

          return new Response(
            JSON.stringify({
              status: 'SUCCESS',
              message: 'okay',
            }),
            {
              status: 200,
            },
          )
        } catch (error) {
          console.error(error)
          return new Response(
            JSON.stringify({ status: 'ERROR', message: 'Something went wrong, try again later.' }),
            {
              status: 400,
            },
          )
        }
      },
    },
  },
})
