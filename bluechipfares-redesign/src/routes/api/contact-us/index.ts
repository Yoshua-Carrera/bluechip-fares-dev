import { createFileRoute } from '@tanstack/react-router'
import type { ContactUsRequest } from './contact-us.models'
// import { sendEmail } from '#/lib/email/emailer'
// import { createVendorEmailHtml } from './vendor-email'
// import { createClientEmailHtml } from './client-email'
import db from '../../../../db'
import { contactForm } from '../../../../db/contact-form-schema'
import { apiHandle, apiOk } from '#/lib/api/api-response-wrapper'

// try {
//   if (process.env.SMTP_USER) {
//     // Vendor Email
//     await sendEmail({
//       to: process.env.SMTP_USER,
//       subject: `New client inquiry from ${name} - Inquiry #${id}`,
//       text: '',
//       html: createVendorEmailHtml({
//         inquiryNum: String(id),
//         name: name,
//         phoneNumber: phone,
//         request: customerRequest,
//         clientEmail: email,
//       }),
//     })
//
//     // Client Email
//     await sendEmail({
//       to: email,
//       subject: `Thanks for contacting us, ${name}`,
//       text: '',
//       html: createClientEmailHtml({
//         inquiryNum: String(id),
//         name: name,
//         phoneNumber: phone,
//         inquiry: customerRequest,
//         contactEmail: process.env.SMTP_USER,
//       }),
//     })
//   }
//
//   console.info(
//     `Successfully posted contact us form: ${JSON.stringify({ data: null })}`,
//   )
//   console.info(`Successfully emailed: client ${email} inquiry #${id}`)
//
//   return new Response(
//     JSON.stringify({
//       status: 'SUCCESS',
//       message: 'okay',
//     }),
//     {
//       status: 200,
//     },
//   )
// } catch (error) {
//   console.error(error)
//   return new Response(
//     JSON.stringify({
//       status: 'ERROR',
//       message: 'Something went wrong, try again later.',
//     }),
//     {
//       status: 400,
//     },
//   )
// }

export const Route = createFileRoute('/api/contact-us/')({
  server: {
    handlers: {
      POST: async ({ request }) =>
        apiHandle({
          r: request,
          h: async () => {
            const body: ContactUsRequest = await request.json()
            const { name, email, service, request: customerRequest } = body

            const [{ id }] = await db
              .insert(contactForm)
              .values({
                name,
                email,
                phone: 'N/A',
                image: 'N/A',
                service,
                request: customerRequest,
              })
              .returning()

            return apiOk({
              message: 'The form has been submitted',
              data: { id },
            })
          },
        }),
    },
  },
})
