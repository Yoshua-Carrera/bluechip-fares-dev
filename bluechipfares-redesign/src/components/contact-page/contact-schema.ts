import { z } from 'zod'

import { m } from '#/paraglide/messages'

export function getContactSchema() {
  return z.object({
    name: z.string().trim().min(1, m.contact_form_name_err()),
    email: z.string().trim().email(m.contact_form_email_err()),
    service: z.string(),
    request: z.string().trim().min(10, m.contact_form_inquiry_err()),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>

export const CONTACT_FORM_DEFAULTS: ContactFormValues = {
  name: '',
  email: '',
  service: '',
  request: '',
}

export function getServiceOptions() {
  return [
    { label: m.contact_service_unsure(), value: m.contact_service_unsure() },
    {
      label: m.contact_service_painting(),
      value: m.contact_service_painting(),
    },
    {
      label: m.contact_service_flooring(),
      value: m.contact_service_flooring(),
    },
    {
      label: m.contact_service_housekeeping(),
      value: m.contact_service_housekeeping(),
    },
    {
      label: m.contact_service_landscaping(),
      value: m.contact_service_landscaping(),
    },
    {
      label: m.contact_service_resurfacing(),
      value: m.contact_service_resurfacing(),
    },
    { label: m.contact_service_ac(), value: m.contact_service_ac() },
  ]
}
