import { CTACard } from '#/components/cta-card/CTACard'
import { m } from '#/paraglide/messages'

export function ServicesCTA() {
  return (
    <CTACard
      pill={m.services_cta_pill()}
      headingLead={m.services_cta_lead()}
      headingAccent={m.services_cta_accent()}
      description={m.services_cta_desc()}
      ctaLabel={m.services_cta_button()}
      ctaHref="/contact"
    />
  )
}
