import { CTACard } from '#/components/cta-card/CTACard'
import { m } from '#/paraglide/messages'

export function GalleryCTA() {
  return (
    <CTACard
      headingLead={m.gallery_cta_lead()}
      headingAccent={m.gallery_cta_accent()}
      description={m.gallery_cta_desc()}
      ctaLabel={m.gallery_cta_button()}
      ctaHref="/contact"
    />
  )
}
