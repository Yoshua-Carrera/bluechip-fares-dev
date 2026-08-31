import { m } from '#/paraglide/messages'

export function ServicesHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '46vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <img
        src="/img/gallery-kitchen-remodeling.jpg"
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
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding:
            'clamp(6rem, 14vh, 9rem) clamp(1.5rem, 4vw, 3rem) clamp(2.5rem, 6vh, 4rem)',
        }}
      >
        <h1
          style={{
            margin: '0 0 var(--space-3)',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 1.05,
            color: 'var(--on-photo-strong)',
          }}
        >
          {m.services_hero_lead()}{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--copper-light)' }}>
            {m.services_hero_accent()}
          </span>
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: '34rem',
            fontSize: 'clamp(1.0625rem, 1.5vw, 1.3125rem)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'color-mix(in oklab, var(--on-photo) 88%, transparent)',
          }}
        >
          {m.services_hero_sub()}
        </p>
      </div>
    </section>
  )
}
