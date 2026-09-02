import { Link } from '@tanstack/react-router'

export interface NotFoundLink {
  href: string
  title: string
  desc: string
  cta: string
}

export function NotFoundLinkCard({ link }: { link: NotFoundLink }) {
  return (
    <Link
      to={link.href}
      className="not-found-link-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        padding: '1.75rem',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--line-hairline)',
        background: 'var(--surface-card)',
        boxShadow: 'var(--shadow-sm)',
        textDecoration: 'none',
        transition:
          'transform 300ms ease, border-color 200ms ease, box-shadow 200ms ease',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-bold)',
          fontSize: '1.25rem',
          color: 'var(--text-heading)',
          lineHeight: 1.2,
        }}
      >
        {link.title}
      </span>
      <span
        style={{
          fontSize: '1.0625rem',
          lineHeight: 'var(--leading-relaxed)',
          color: 'var(--text-body)',
        }}
      >
        {link.desc}
      </span>
      <span
        style={{
          marginTop: 'var(--space-1)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.9375rem',
          color: 'var(--text-accent)',
        }}
      >
        {link.cta} →
      </span>
    </Link>
  )
}
