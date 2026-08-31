import { Footer } from '#/components/footer/Footer'
import { Navbar } from '#/components/navbar/Navbar'
import { ServicesAccordion } from '#/components/services-page/ServicesAccordion'
import { ServicesCTA } from '#/components/services-page/ServicesCTA'
import { ServicesHero } from '#/components/services-page/ServicesHero'

export function ServicesPage() {
  return (
    <div
      style={{
        background: 'var(--surface-page)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar overPhoto activeHref="/services" />
      <ServicesHero />
      <ServicesAccordion />
      <ServicesCTA />
      <Footer />
    </div>
  )
}
