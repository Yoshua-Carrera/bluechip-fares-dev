import { Link } from '@tanstack/react-router'

import { m } from '#/paraglide/messages'

interface ProjectHeroProps {
  image: string
  tag: string
  location: string
  title: string
}

export function ProjectHero({ image, tag, location, title }: ProjectHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '62vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <img
        src={image}
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
        <Link
          to="/gallery"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-6)',
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            color: 'var(--on-photo-strong)',
          }}
        >
          ← {m.project_back()}
        </Link>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-4)',
          }}
        >
          <span
            style={{
              padding: '0.2rem 0.7rem',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--line-on-photo)',
              background: 'var(--capsule-fill)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.7rem',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--on-photo-strong)',
            }}
          >
            {tag}
          </span>
          <span
            style={{
              fontSize: '1rem',
              color: 'var(--on-photo-strong)',
            }}
          >
            ◉ {location}
          </span>
        </div>
        <h1
          style={{
            margin: 0,
            maxWidth: '40rem',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            fontWeight: 'var(--weight-bold)',
            lineHeight: 1.06,
            color: 'var(--on-photo-strong)',
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  )
}
