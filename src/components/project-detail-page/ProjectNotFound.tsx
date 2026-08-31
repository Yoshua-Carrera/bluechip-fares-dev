import { Button } from '#/components/button/Button'
import { m } from '#/paraglide/messages'

export function ProjectNotFound({ slug }: { slug: string }) {
  return (
    <section
      style={{
        padding: 'clamp(6rem, 14vh, 9rem) clamp(1.5rem, 4vw, 3rem)',
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div style={{ maxWidth: '36rem', textAlign: 'center' }}>
        <h1
          style={{
            margin: '0 0 var(--space-4)',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 'var(--weight-bold)',
            color: 'var(--text-heading)',
          }}
        >
          {m.project_not_found_title()}
        </h1>
        <p
          style={{
            margin: '0 0 var(--space-8)',
            fontSize: '1.1875rem',
            lineHeight: 'var(--leading-relaxed)',
            color: 'var(--text-body)',
          }}
        >
          {m.project_not_found_body({ slug })}
        </p>
        <Button variant="accent" href="/">
          {m.project_not_found_cta()}
        </Button>
      </div>
    </section>
  )
}
