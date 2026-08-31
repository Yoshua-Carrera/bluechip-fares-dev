import { ContactForm } from '#/components/contact-page/ContactForm'
import { ContactHero } from '#/components/contact-page/ContactHero'
import { ContactInfo } from '#/components/contact-page/ContactInfo'
import { Footer } from '#/components/footer/Footer'
import { Navbar } from '#/components/navbar/Navbar'

export function ContactPage() {
  return (
    <div
      style={{
        background: 'var(--surface-page)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <Navbar activeHref="/contact" />
      <ContactHero />
      <section
        style={{
          padding: 'clamp(3rem, 7vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(19rem, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
          }}
        >
          <ContactInfo />
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'var(--radius-3xl)',
              border: '1px solid var(--accent-hairline)',
              background: 'var(--panel-gradient)',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '-7rem',
                right: '-7rem',
                width: '18rem',
                height: '18rem',
                borderRadius: '9999px',
                background: 'var(--orb-copper)',
                filter: 'blur(64px)',
                display: 'block',
              }}
            />
            <div style={{ position: 'relative' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
