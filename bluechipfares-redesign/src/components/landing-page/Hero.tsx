import { Button } from '#/components/button/Button'
import { ImageCarousel } from '#/components/image-carousel/ImageCarousel'
import { m } from '#/paraglide/messages'

const HERO_IMAGES = [
  '/img/hero-bg-5.jpg',
  '/img/gallery-bathroom.jpg',
  '/img/gallery-wood-accent-wall.jpg',
]

export function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: 'max(78vh, 40rem)',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        padding: 0,
      }}
    >
      <ImageCarousel images={HERO_IMAGES} />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding:
            'clamp(8rem, 16vh, 11rem) clamp(1.5rem, 4vw, 3rem) clamp(5rem, 12vh, 7.5rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-6)',
            fontFamily: 'var(--font-display)',
            fontSize: '0.8125rem',
            letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase',
            color: 'var(--on-photo-muted)',
          }}
        >
          <span
            style={{
              width: '2.5rem',
              height: 1,
              background: 'var(--line-on-photo)',
              display: 'block',
            }}
          />
          {m.hero_eyebrow()}
        </div>

        <h1
          style={{
            margin: '0 0 var(--space-6)',
            maxWidth: '46rem',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 1.04,
            color: 'var(--on-photo-strong)',
            textWrap: 'balance',
          }}
        >
          {m.hero_lead()}
          <span style={{ fontStyle: 'italic', color: 'var(--copper-light)' }}>
            {m.hero_accent()}
          </span>
        </h1>

        <p
          style={{
            margin: '0 0 var(--space-8)',
            maxWidth: '34rem',
            fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'color-mix(in oklab, var(--on-photo) 88%, transparent)',
          }}
        >
          {m.hero_sub()}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
          }}
        >
          <Button variant="primary" tone="on-photo" href="/gallery">
            {m.hero_cta_work()}
          </Button>
          <Button variant="outline" tone="on-photo" href="/contact">
            {m.hero_cta_advice()} →
          </Button>
        </div>
      </div>
    </section>
  )
}
