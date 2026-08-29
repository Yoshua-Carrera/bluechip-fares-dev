import { ContactCTA } from '#/components/landing-page/ContactCTA'
import { FeaturedWork } from '#/components/landing-page/FeaturedWork'
import { Footer } from '#/components/footer/Footer'
import { Hero } from '#/components/landing-page/Hero'
import { Navbar } from '#/components/navbar/Navbar'
import { ServiceCatalog } from '#/components/landing-page/ServiceCatalog'
import { Stats } from '#/components/landing-page/Stats'

export function LandingPage() {
  return (
    <div
      style={{
        minHeight: '100%',
        background: 'var(--surface-page)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar overPhoto activeHref="/" />
      <Hero />
      <Stats />
      <FeaturedWork />
      <ServiceCatalog />
      <ContactCTA />
      <Footer />
    </div>
  )
}
