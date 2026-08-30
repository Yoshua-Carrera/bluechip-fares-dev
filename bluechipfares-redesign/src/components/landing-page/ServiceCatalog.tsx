import { Link } from '@tanstack/react-router'

import { SectionHeader } from '#/components/landing-page/SectionHeader'
import { m } from '#/paraglide/messages'

interface ServiceItem {
  title: string
  blurb: string
}

function ServiceRow({ item }: { item: ServiceItem }) {
  return (
    <Link
      to={'/services' as '/'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        padding: 'var(--space-4)',
        border: '1px solid var(--line-hairline)',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--surface-card)',
        textDecoration: 'none',
        transition: 'border-color 200ms ease, transform 300ms ease',
      }}
    >
      <span
        style={{
          width: '2.5rem',
          height: '2.5rem',
          flex: 'none',
          display: 'grid',
          placeItems: 'center',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--accent-hairline)',
          color: 'var(--gold)',
          fontSize: '0.9rem',
        }}
      >
        ✦
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-display)',
            fontSize: '1.375rem',
            fontWeight: 'var(--weight-bold)',
            color: 'var(--text-heading)',
          }}
        >
          {item.title}
        </span>
        <span
          style={{
            display: 'block',
            marginTop: '0.75rem',
            fontSize: '1.15rem',
            fontWeight: 'var(--weight-medium)',
            color: 'var(--on-panel)',
            lineHeight: 'var(--leading-relaxed)',
          }}
        >
          {item.blurb}
        </span>
      </span>
      <span
        style={{
          color: 'var(--text-accent)',
          fontSize: '1.1rem',
          flex: 'none',
        }}
      >
        →
      </span>
    </Link>
  )
}

export function ServiceCatalog() {
  const services: Array<ServiceItem> = [
    { title: m.svc_painting_title(), blurb: m.svc_painting_blurb() },
    { title: m.svc_flooring_title(), blurb: m.svc_flooring_blurb() },
    { title: m.svc_housekeeping_title(), blurb: m.svc_housekeeping_blurb() },
    { title: m.svc_landscaping_title(), blurb: m.svc_landscaping_blurb() },
    { title: m.svc_resurfacing_title(), blurb: m.svc_resurfacing_blurb() },
    { title: m.svc_ac_title(), blurb: m.svc_ac_blurb() },
  ]

  return (
    <section
      style={{
        padding: 'clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem)',
        background: 'var(--surface-page)',
        borderTop: '1px solid var(--line-hairline)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeader
          lead={m.svc_lead()}
          accent={m.svc_accent()}
          description={m.svc_desc()}
          linkLabel={m.svc_view_all()}
          linkHref="/services"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {services.map((s) => (
            <ServiceRow key={s.title} item={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
