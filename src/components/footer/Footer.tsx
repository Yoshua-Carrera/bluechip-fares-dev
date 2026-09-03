import { Link } from '@tanstack/react-router'

import { Logo } from '#/components/logo/Logo'
import { getNavItems } from '#/components/navbar/nav-items'
import { m } from '#/paraglide/messages'

export function Footer() {
  const items = getNavItems()

  return (
    <footer
      style={{
        background: 'var(--chrome-gradient)',
        borderTop: '1px solid var(--accent-hairline)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))',
          gap: 'var(--space-10)',
        }}
      >
        <div>
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <Logo height={100} />
          </div>
          <p
            style={{
              margin: 0,
              maxWidth: '20rem',
              fontSize: '1.2rem',
              fontWeight: 'var(--weight-medium)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--on-panel)',
            }}
          >
            {m.footer_blurb()}
          </p>
        </div>

        <div>
          <h3
            style={{
              margin: '0 0 var(--space-4)',
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 'var(--weight-semibold)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--on-panel-muted)',
            }}
          >
            {m.footer_pages()}
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
            }}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 'var(--weight-medium)',
                  color: 'var(--chrome-foreground)',
                  textDecoration: 'none',
                }}
              >
                <span className="hover:text-(--copper)">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3
            style={{
              margin: '0 0 var(--space-4)',
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 'var(--weight-semibold)',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--on-panel-muted)',
            }}
          >
            {m.footer_contact()}
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              fontSize: '1.125rem',
              fontWeight: 'var(--weight-medium)',
              color: 'var(--chrome-foreground)',
            }}
          >
            <span className="hover:text-(--copper)">
              5900 Balcones Dr #28454
              <br />
              Austin, TX 78731
            </span>
            <a
              href="tel:9402757574"
              style={{
                color: 'var(--chrome-foreground)',
                textDecoration: 'none',
              }}
            >
              <span className="hover:text-(--copper)">(940) 275-7574</span>
            </a>
            <a
              href="mailto:contact@bluechipfares.com"
              style={{
                color: 'var(--chrome-foreground)',
                textDecoration: 'none',
              }}
            >
              <span className="hover:text-(--copper)">
                contact@bluechipfares.com
              </span>
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--line-hairline)' }}>
        <div
          style={{
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding: 'var(--space-5) clamp(1.5rem, 4vw, 3rem)',
            fontSize: '1rem',
            fontWeight: 'var(--weight-medium)',
            color: 'var(--on-panel-muted)',
          }}
        >
          © 2026 Bluechip Fares. {m.footer_rights()}
        </div>
      </div>
    </footer>
  )
}
