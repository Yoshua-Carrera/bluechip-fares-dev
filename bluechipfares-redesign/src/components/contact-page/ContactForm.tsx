import { useState } from 'react'
import { useForm } from '@tanstack/react-form'

import {
  CONTACT_FORM_DEFAULTS,
  getContactSchema,
  getServiceOptions,
} from '#/components/contact-page/contact-schema'
import { ContactSent } from '#/components/contact-page/ContactSent'
import {
  FormField,
  fieldControlStyle,
} from '#/components/contact-page/FormField'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'
import { m } from '#/paraglide/messages'

function firstError(errors: Array<unknown>): string | undefined {
  const err = errors[0]
  if (!err) return undefined
  if (typeof err === 'string') return err
  if (typeof err === 'object' && 'message' in err) {
    const msg = (err as { message?: unknown }).message
    return typeof msg === 'string' ? msg : undefined
  }
  return undefined
}

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const schema = getContactSchema()
  const serviceOptions = getServiceOptions()

  const form = useForm({
    defaultValues: CONTACT_FORM_DEFAULTS,
    validators: { onSubmit: schema },
    onSubmit: async () => {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setSent(true)
    },
  })

  if (sent) {
    return (
      <ContactSent
        onReset={() => {
          form.reset()
          setSent(false)
        }}
      />
    )
  }

  return (
    <div>
      <h2
        style={{
          margin: '0 0 var(--space-2)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 'var(--weight-bold)',
          color: 'var(--on-panel)',
          lineHeight: 1.15,
        }}
      >
        {m.contact_form_lead()}{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>
          {m.contact_form_accent()}
        </span>
      </h2>
      <p
        style={{
          margin: '0 0 var(--space-7)',
          fontSize: '1.1875rem',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-relaxed)',
          color: 'var(--on-panel-muted)',
        }}
      >
        {m.contact_form_desc()}
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          void form.handleSubmit()
        }}
        style={{ display: 'grid', gap: 'var(--space-5)' }}
        noValidate
      >
        <form.Field
          name="name"
          validators={{
            onSubmit: schema.shape.name,
            onBlur: schema.shape.name,
          }}
        >
          {(field) => {
            const error = field.state.meta.isTouched
              ? firstError(field.state.meta.errors)
              : undefined
            return (
              <FormField
                htmlFor="bcf-name"
                label={m.contact_form_name_label()}
                required
                error={error}
              >
                <input
                  id="bcf-name"
                  type="text"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder={m.contact_form_name_ph()}
                  style={fieldControlStyle(Boolean(error))}
                />
              </FormField>
            )
          }}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onSubmit: schema.shape.email,
            onBlur: schema.shape.email,
          }}
        >
          {(field) => {
            const error = field.state.meta.isTouched
              ? firstError(field.state.meta.errors)
              : undefined
            return (
              <FormField
                htmlFor="bcf-email"
                label={m.contact_form_email_label()}
                required
                error={error}
              >
                <input
                  id="bcf-email"
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="you@example.com"
                  style={fieldControlStyle(Boolean(error))}
                />
              </FormField>
            )
          }}
        </form.Field>

        <form.Field name="service">
          {(field) => (
            <FormField
              htmlFor="bcf-service"
              label={m.contact_form_service_label()}
            >
              <Select
                value={field.state.value || undefined}
                onValueChange={(value) => field.handleChange(value)}
              >
                <SelectTrigger
                  id="bcf-service"
                  className="h-auto! w-full"
                  style={fieldControlStyle(false)}
                >
                  <SelectValue placeholder={serviceOptions[0]?.label ?? ''} />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      style={{ color: 'var(--on-panel)' }}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
          )}
        </form.Field>

        <form.Field
          name="inquiry"
          validators={{
            onSubmit: schema.shape.inquiry,
            onBlur: schema.shape.inquiry,
          }}
        >
          {(field) => {
            const error = field.state.meta.isTouched
              ? firstError(field.state.meta.errors)
              : undefined
            const count = field.state.value.trim().length
            return (
              <FormField
                htmlFor="bcf-inquiry"
                label={m.contact_form_inquiry_label()}
                required
                error={error}
                hint={m.contact_form_counter({ count })}
              >
                <textarea
                  id="bcf-inquiry"
                  rows={5}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder={m.contact_form_inquiry_ph()}
                  style={{
                    ...fieldControlStyle(Boolean(error)),
                    lineHeight: 'var(--leading-relaxed)',
                    resize: 'vertical',
                  }}
                />
              </FormField>
            )
          }}
        </form.Field>

        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '1.05rem 1.5rem',
                border: 0,
                borderRadius: 'var(--radius-pill)',
                background: 'var(--text-accent)',
                color: 'var(--charcoal)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.1875rem',
                fontWeight: 'var(--weight-bold)',
                cursor: isSubmitting ? 'progress' : 'pointer',
                opacity: isSubmitting ? 0.6 : 1,
                transition: 'transform 300ms ease, opacity 200ms ease',
              }}
            >
              {isSubmitting
                ? m.contact_form_sending()
                : m.contact_form_submit()}
            </button>
          )}
        </form.Subscribe>

        <p
          style={{
            margin: 0,
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 'var(--weight-medium)',
            color: 'var(--on-panel-muted)',
          }}
        >
          {m.contact_form_foot()}
        </p>
      </form>
    </div>
  )
}
