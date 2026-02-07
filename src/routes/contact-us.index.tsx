import { createFileRoute } from '@tanstack/react-router'
import z from 'zod'
import { useForm } from '@tanstack/react-form'
import { toast } from 'sonner'
import { useMaskito } from '@maskito/react'
import { maskitoPhoneOptionsGenerator } from '@maskito/phone'
import metadata from 'libphonenumber-js/min/metadata'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif']
const formSchema = z.object({
  name: z.string().nonempty('This field is required'),
  email: z.email('Please enter a valid email'),
  phone: z.string('Please enter a valid phone number').refine((value: string) => {
    const phone = parsePhoneNumberFromString(value)
    return phone?.isValid()
  }),
  inquiry: z
    .string()
    .min(10, 'Inquiry must be at least 10 characters long')
    .max(200, 'Inquiry must be at most 200 characters long'),
  image: z
    .any()
    .nullable()
    .refine((file) => {
      if (!file) return true
      return ACCEPTED_IMAGE_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE
    }),
})

export const Route = createFileRoute('/contact-us/')({
  component: ContactUsPage,
})

function ContactUsPage() {
  const maskedInputRef = useMaskito({
    options: maskitoPhoneOptionsGenerator({ countryIsoCode: 'US', metadata }),
  })
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '+1 ',
      inquiry: '',
      image: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: ({ value }) => {
      toast(`Thanks for contacting us ${value.name}!`, {
        position: 'bottom-center',
        richColors: true,
        style: {
          backgroundColor: 'var(--primary)',
          color: 'white',
          opacity: '80%',
        },
        icon: <Info />,
      })
    },
  })

  return (
    <section className="pt-6 px-6">
      <div className="relative py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[var(--accent-foreground)] mb-4">
            Contact <span className="text-copper italic">Us</span>
          </h1>
        </div>
      </div>

      <div className="mt-8 max-w-4xl mx-auto text-center">
        <div className="relative p-12 rounded-3xl bg-gradient-to-br dark:from-card dark:to-charcoal-80 light:from-card/50 light:to-copper/10 border border-[var(--accent-foreground)]/30 overflow-hidden shadow-md shadow-primary/20">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              form.handleSubmit()
            }}
          >
            <FieldGroup>
              <form.Field
                name="name"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Name <span className="text-red-600 text-[0.65rem]">* Required</span>
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Your name"
                        autoComplete="off"
                        className="border border-copper/15 light:border-primary/85"
                      />
                      {isInvalid && (
                        <FieldError className="text-red-400" errors={field.state.meta.errors} />
                      )}
                    </Field>
                  )
                }}
              />
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        E-mail <span className="text-red-600 text-[0.65rem]">* Required</span>
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        placeholder="Your email"
                        autoComplete="off"
                        className="border border-copper/15 light:border-primary/85"
                      />
                      <FieldError className="text-red-400" errors={field.state.meta.errors} />
                    </Field>
                  )
                }}
              />
              <form.Field
                name="phone"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Phone Number <span className="text-red-600 text-[0.65rem]">* Required</span>
                      </FieldLabel>
                      <Input
                        ref={maskedInputRef}
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        autoComplete="off"
                        className="border border-copper/15 light:border-primary/85"
                      />
                      <FieldError className="text-red-400" errors={field.state.meta.errors} />
                    </Field>
                  )
                }}
              />
              <form.Field
                name="inquiry"
                children={(field) => {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>
                        Description <span className="text-red-600 text-[0.65rem]">* Required</span>
                      </FieldLabel>
                      <InputGroup className="border border-copper/15 light:border-primary/85">
                        <InputGroupTextarea
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="How can we help? Share a few details about what you’re looking to build or repair."
                          rows={6}
                          className="min-h-24 resize-none"
                          aria-invalid={isInvalid}
                        />
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.state.value.length}/200 characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      <FieldError className="text-red-400" errors={field.state.meta.errors} />
                    </Field>
                  )
                }}
              />
              {/* <form.Field */}
              {/*   name="image" */}
              {/*   children={(field) => { */}
              {/*     return ( */}
              {/*       <Field> */}
              {/*         <FieldLabel htmlFor="picture">Picture</FieldLabel> */}
              {/*         <Input type="file" id={field.name} name={field.name} /> */}
              {/*         <FieldDescription>Select a picture to upload.</FieldDescription> */}
              {/*       </Field> */}
              {/*     ) */}
              {/*   }} */}
              {/* /> */}
            </FieldGroup>
            <Button
              className="mt-12 bg-gradient-to-t dark:from-copper/60 dark:to-copper light:from-primary/60 light:to-primary border border-white/25 text text-md"
              size={'lg'}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
