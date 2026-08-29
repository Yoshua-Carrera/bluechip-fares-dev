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
            <Logo height={52} />
          </div>
          <p
            style={{
              margin: 0,
              maxWidth: '20rem',
              fontSize: '1.0625rem',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--chrome-foreground-muted)',
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
              fontSize: '0.75rem',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--chrome-foreground-muted)',
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
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: '1.0625rem',
                  color: 'var(--chrome-foreground)',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3
            style={{
              margin: '0 0 var(--space-4)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--chrome-foreground-muted)',
            }}
          >
            {m.footer_contact()}
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              fontSize: '1.0625rem',
              color: 'var(--chrome-foreground)',
            }}
          >
            <span>
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
              (940) 275-7574
            </a>
            <a
              href="mailto:contact@bluechipfares.com"
              style={{
                color: 'var(--chrome-foreground)',
                textDecoration: 'none',
              }}
            >
              contact@bluechipfares.com
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
            fontSize: '0.9375rem',
            color: 'var(--chrome-foreground-muted)',
          }}
        >
          © 2026 Bluechip Fares. {m.footer_rights()}
        </div>
      </div>
    </footer>
  )
}
