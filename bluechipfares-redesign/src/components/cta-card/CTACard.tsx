import { Button } from '#/components/button/Button'

interface CTACardProps {
  pill?: string
  headingLead: string
  headingAccent: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export function CTACard({
  pill,
  headingLead,
  headingAccent,
  description,
  ctaLabel,
  ctaHref,
}: CTACardProps) {
  return (
    <section
      style={{
        padding: 'clamp(3.5rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem)',
        background: 'var(--surface-page)',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: 'var(--container-narrow)',
          margin: '0 auto',
          overflow: 'hidden',
          borderRadius: 'var(--radius-3xl)',
          border: '1px solid var(--accent-hairline)',
          background: 'var(--panel-gradient)',
          padding: 'clamp(2.5rem, 6vw, 4rem)',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '-6rem',
            left: '-6rem',
            width: '18rem',
            height: '18rem',
            borderRadius: 9999,
            background: 'var(--orb-copper)',
            filter: 'blur(64px)',
            display: 'block',
          }}
        />
        <span
          style={{
            position: 'absolute',
            bottom: '-6rem',
            right: '-6rem',
            width: '18rem',
            height: '18rem',
            borderRadius: 9999,
            background: 'var(--orb-gold)',
            filter: 'blur(64px)',
            display: 'block',
          }}
        />
        <div style={{ position: 'relative' }}>
          {pill && (
            <span
              style={{
                display: 'inline-block',
                marginBottom: 'var(--space-5)',
                padding: '0.35rem 0.9rem',
                border: '1px solid var(--accent-hairline-strong)',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase',
                color: 'var(--text-accent)',
              }}
            >
              {pill}
            </span>
          )}
          <h2
            style={{
              margin: '0 0 var(--space-4)',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 'var(--weight-bold)',
              color: 'var(--on-panel)',
              lineHeight: 1.1,
              textWrap: 'balance',
            }}
          >
            {headingLead}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>
              {headingAccent}
            </span>
          </h2>
          <p
            style={{
              margin: '0 auto var(--space-8)',
              maxWidth: '34rem',
              fontSize: '1.25rem',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--on-panel-muted)',
            }}
          >
            {description}
          </p>
          <Button variant="accent" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
