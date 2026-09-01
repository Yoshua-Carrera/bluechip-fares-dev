import { Link } from '@tanstack/react-router'

export interface ServiceItem {
  title: string
  blurb: string
}

export function ServiceRow({ item }: { item: ServiceItem }) {
  return (
    <div className="border-transparent rounded-xl border hover:border-(--copper)">
      <Link
        to="/services"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-5)',
          padding: 'var(--space-4)',
          border: '1px solid var(--line-hairline)',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--surface-card)',
          textDecoration: 'none',
          height: '100%',
          transition: 'border-color 200ms ease, transform 300ms ease',
        }}
      >
        <span
          style={{
            width: '2.5rem',
            height: '2.5rem',
            flex: 'none',
            display: 'grid',
            placeItems: 'center',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--accent-hairline)',
            color: 'var(--gold)',
            fontSize: '0.9rem',
          }}
        >
          ✦
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-display)',
              fontSize: '1.375rem',
              fontWeight: 'var(--weight-bold)',
              color: 'var(--text-heading)',
            }}
          >
            {item.title}
          </span>
          <span
            style={{
              display: 'block',
              marginTop: '0.75rem',
              fontSize: '1.15rem',
              fontWeight: 'var(--weight-medium)',
              color: 'var(--on-panel)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {item.blurb}
          </span>
        </span>
        <span
          style={{
            color: 'var(--text-accent)',
            fontSize: '1.1rem',
            flex: 'none',
          }}
        >
          →
        </span>
      </Link>
    </div>
  )
}
