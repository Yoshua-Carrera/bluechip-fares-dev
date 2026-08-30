import { Link } from '@tanstack/react-router'

import type { GalleryProject } from '#/components/gallery-page/gallery-content'

interface GalleryCardProps {
  project: GalleryProject
}

export function GalleryCard({ project }: GalleryCardProps) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      style={{
        position: 'relative',
        display: 'block',
        aspectRatio: '4 / 5',
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        border: '1px solid var(--line-hairline)',
        transition:
          'transform 300ms ease, border-color 200ms ease, box-shadow 300ms ease',
      }}
    >
      <img
        src={project.image}
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
          background: 'var(--photo-scrim)',
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: 'var(--space-4)',
          left: 'var(--space-4)',
          padding: '0.2rem 0.7rem',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--line-on-photo)',
          background: 'var(--capsule-fill)',
          backdropFilter: 'blur(4px)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.7rem',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          color: 'var(--on-photo-strong)',
        }}
      >
        {project.tag}
      </span>
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          padding: 'var(--space-6)',
          display: 'block',
        }}
      >
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-display)',
            fontSize: '1.375rem',
            fontWeight: 'var(--weight-semibold)',
            color: 'var(--on-photo-strong)',
            lineHeight: 1.2,
          }}
        >
          {project.name}
        </span>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '0.35rem',
            fontSize: '0.95rem',
            color: 'var(--on-photo-strong)',
          }}
        >
          ◉ {project.location}
        </span>
      </span>
    </Link>
  )
}
