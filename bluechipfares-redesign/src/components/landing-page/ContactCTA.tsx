import { CTACard } from '#/components/cta-card/CTACard'
import { m } from '#/paraglide/messages'

export function ContactCTA() {
  return (
    <CTACard
      pill={m.cta_pill()}
      headingLead={m.cta_lead()}
      headingAccent={m.cta_accent()}
      description={m.cta_desc()}
      ctaLabel={m.cta_button()}
      ctaHref="/contact"
    />
  )
}
