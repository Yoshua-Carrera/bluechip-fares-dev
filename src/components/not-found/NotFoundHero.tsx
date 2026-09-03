import { m } from '#/paraglide/messages'
import { Button } from '../button/Button'

export function NotFoundHero() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          minHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src="/img/gallery-wood-accent-wall.jpg"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <span
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--photo-scrim-hero)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--photo-vignette)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: 'var(--container-max)',
            margin: '0 auto',
            padding:
              'clamp(8rem, 16vh, 11rem) clamp(1.5rem, 4vw, 3rem) clamp(4rem, 10vh, 6rem)',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--weight-bold)',
              fontSize: 'clamp(4.5rem, 14vw, 9rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: 'var(--on-photo-strong)',
            }}
          >
            404
          </p>
          <h1
            style={{
              margin: 'var(--space-4) 0 0',
              maxWidth: '42rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--weight-bold)',
              fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
              lineHeight: 1.05,
              color: 'var(--on-photo-strong)',
              textWrap: 'balance',
            }}
          >
            {m.not_found_head_lead()}{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--copper-light)' }}>
              {m.not_found_head_accent()}
            </span>
          </h1>
          <p
            style={{
              margin: 'var(--space-6) 0 0',
              maxWidth: '38rem',
              fontSize: 'clamp(1.0625rem, 1.5vw, 1.3125rem)',
              lineHeight: 'var(--leading-relaxed)',
              color: 'color-mix(in oklab, var(--on-photo) 92%, transparent)',
            }}
          >
            {m.not_found_body()}
          </p>
          <div
            style={{
              marginTop: 'var(--space-8)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
            }}
          >
            <Button
              className="hover:border-(--copper)!"
              variant="primary"
              tone="on-photo"
              href="/"
            >
              {m.not_found_cta_home()}
            </Button>
            <Button
              className="hover:border-(--copper)!"
              variant="outline"
              tone="on-photo"
              href="/gallery"
            >
              {m.not_found_cta_work()}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
