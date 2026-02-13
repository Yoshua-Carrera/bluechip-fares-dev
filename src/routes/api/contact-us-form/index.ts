import { createFileRoute } from '@tanstack/react-router'
import type { ContactUsRequest } from '@/models/contact-us.models'
import { getClient } from '@/db'

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
          console.info(`Successfully posted contact us form: ${JSON.stringify({ data: res })}`)
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
