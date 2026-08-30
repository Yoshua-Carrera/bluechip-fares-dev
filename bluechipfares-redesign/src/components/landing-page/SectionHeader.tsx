import { Link } from '@tanstack/react-router'

interface SectionHeaderProps {
  lead: string
  accent: string
  description: string
  linkLabel: string
  linkHref: string
}

export function SectionHeader({
  lead,
  accent,
  description,
  linkLabel,
  linkHref,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        marginBottom: 'var(--space-10)',
      }}
    >
      <div>
        <h2
          style={{
            margin: '0 0 var(--space-2)',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'var(--weight-bold)',
            color: 'var(--text-heading)',
            lineHeight: 1.1,
          }}
        >
          {lead}{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--text-accent)' }}>
            {accent}
          </span>
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: '1.1875rem',
            fontWeight: 'var(--weight-medium)',
            color: 'var(--text-muted)',
          }}
        >
          {description}
        </p>
      </div>
      <Link
        to={linkHref}
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-semibold)',
          fontSize: '1.125rem',
        }}
      >
        {linkLabel} →
      </Link>
    </div>
  )
}
