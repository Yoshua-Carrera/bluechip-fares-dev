import { Link } from '@tanstack/react-router'

import { Button } from '#/components/button/Button'
import { m } from '#/paraglide/messages'

export function ProjectFooterNav() {
  return (
    <section
      style={{
        padding: '0 clamp(1.5rem, 4vw, 3rem) clamp(3.5rem, 8vw, 6rem)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-6)',
          paddingTop: 'var(--space-8)',
          borderTop: '1px solid var(--line-hairline)',
        }}
      >
        <Link
          to="/gallery"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.0625rem',
          }}
        >
          ← {m.project_back()}
        </Link>
        <Button variant="accent" href="/contact">
          {m.project_cta_button()}
        </Button>
      </div>
    </section>
  )
}
