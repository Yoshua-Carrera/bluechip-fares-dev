import { createFileRoute } from '@tanstack/react-router'
import db from '../../../../db'
import { contactForm } from '../../../../db/contact-form-schema'
import { apiHandle, apiOk } from '#/lib/api/api-response-wrapper'
import { sendEmail } from '#/lib/email/send-email'
import { logger } from '#/lib/api/logger'
import { createVendorEmailHtml } from '#/lib/email/vendor-email'
import { createClientEmailHtml } from '#/lib/email/client-email'
import type { ContactUsRequest } from '#/lib/email/contact-us.models'

const sendContactEmails = async (inputs: {
  id: number
  name: string
  email: string
  phone: string
  request: string
}) => {
  const vendorAddress = process.env.SMTP_USER
  if (!vendorAddress) {
    logger.warn('Skipping contact emails: SMTP_USER is not configured', {
      inquiryId: inputs.id,
    })
    return
  }

  const inquiryNum = String(inputs.id)

  await sendEmail({
    to: vendorAddress,
    subject: `New client inquiry from ${inputs.name} - Inquiry #${inquiryNum}`,
    text: '',
    html: createVendorEmailHtml({
      inquiryNum,
      name: inputs.name,
      phoneNumber: inputs.phone,
      request: inputs.request,
      clientEmail: inputs.email,
    }),
  })

  await sendEmail({
    to: inputs.email,
    subject: `Thanks for contacting us, ${inputs.name}`,
    text: '',
    html: createClientEmailHtml({
      inquiryNum,
      name: inputs.name,
      phoneNumber: inputs.phone,
      inquiry: inputs.request,
      contactEmail: vendorAddress,
    }),
  })
}

export const Route = createFileRoute('/api/contact-us/')({
  server: {
    handlers: {
      POST: async ({ request }) =>
        apiHandle({
          r: request,
          h: async () => {
            const body: ContactUsRequest = await request.json()
            const { name, email, service, request: customerRequest } = body
            const phone = 'N/A'

            const [{ id }] = await db
              .insert(contactForm)
              .values({
                name,
                email,
                phone,
                image: 'N/A',
                service,
                request: customerRequest,
              })
              .returning()

            try {
              await sendContactEmails({
                id,
                name,
                email,
                phone,
                request: customerRequest,
              })
              logger.info('Contact emails sent', { inquiryId: id, email })
            } catch (err) {
              logger.error('Failed to send contact emails', {
                inquiryId: id,
                email,
                err: err instanceof Error ? err.message : String(err),
              })
            }

            return apiOk({
              message: 'The form has been submitted',
              data: { id },
            })
          },
        }),
    },
  },
})
