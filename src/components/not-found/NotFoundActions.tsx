import { m } from '#/paraglide/messages'
import { NotFoundLinkCard  } from './NotFoundCard'
import type {NotFoundLink} from './NotFoundCard';

export function NotFoundActions() {
  const links: Array<NotFoundLink> = [
    {
      href: '/services',
      title: m.not_found_link_services_title(),
      desc: m.not_found_link_services_desc(),
      cta: m.not_found_link_services_cta(),
    },
    {
      href: '/gallery',
      title: m.not_found_link_gallery_title(),
      desc: m.not_found_link_gallery_desc(),
      cta: m.not_found_link_gallery_cta(),
    },
    {
      href: '/contact',
      title: m.not_found_link_contact_title(),
      desc: m.not_found_link_contact_desc(),
      cta: m.not_found_link_contact_cta(),
    },
  ]
  return (
    <>
      <section
        style={{
          padding:
            'clamp(3.5rem, 8vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(4rem, 9vw, 6rem)',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-8)',
          }}
        >
          <div>
            <p
              style={{
                margin: '0 0 var(--space-3)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.8125rem',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                color: 'var(--ink-on-surface)',
              }}
            >
              {m.not_found_links_kicker()}
            </p>
            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontWeight: 'var(--weight-bold)',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                color: 'var(--text-heading)',
              }}
            >
              {m.not_found_links_lead()}{' '}
              <span
                style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}
              >
                {m.not_found_links_accent()}
              </span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
              gap: 'var(--space-5)',
            }}
          >
            {links.map((l) => (
              <NotFoundLinkCard key={l.href} link={l} />
            ))}
          </div>

          <div style={{ height: 1, background: 'var(--accent-hairline)' }} />

          <p
            style={{
              margin: 0,
              maxWidth: '44rem',
              fontSize: 'clamp(1rem, 1.4vw, 1.1875rem)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--text-body)',
            }}
          >
            {m.not_found_call_lead()}{' '}
            <a href="tel:9402757574">{m.contact_phone()}</a>{' '}
            {m.not_found_call_mid()}{' '}
            <a href="mailto:contact@bluechipfares.com">{m.contact_email()}</a>
            {m.not_found_call_end()}
          </p>
        </div>
      </section>
    </>
  )
}
