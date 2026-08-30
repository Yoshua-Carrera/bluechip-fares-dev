import { SectionHeader } from '#/components/landing-page/SectionHeader'
import { m } from '#/paraglide/messages'
import { ServiceRow  } from './service-row'
import type {ServiceItem} from './service-row';

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
