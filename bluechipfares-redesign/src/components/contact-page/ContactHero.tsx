import { m } from '#/paraglide/messages'

export function ContactHero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '42vh',
        display: 'flex',
        alignItems: 'flex-end',
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
          {m.contact_hero_lead()}{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--copper-light)' }}>
            {m.contact_hero_accent()}
          </span>
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: '34rem',
            fontSize: 'clamp(1.1875rem, 1.7vw, 1.4375rem)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 'var(--leading-relaxed)',
            color: 'color-mix(in oklab, var(--on-photo) 92%, transparent)',
          }}
        >
          {m.contact_hero_sub()}
        </p>
      </div>
    </section>
  )
}
