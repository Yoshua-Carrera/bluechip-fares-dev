import Ring from './ring'

export default function PageLoader({ label }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 80,
        display: 'grid',
        placeItems: 'center',
        gap: '1.25rem',
        background: 'color-mix(in oklab, var(--surface-page) 82%, transparent)',
        backdropFilter: 'blur(10px)',
        animation: 'bcf-scrim-in 200ms ease both',
      }}
    >
      <div style={{ display: 'grid', placeItems: 'center', gap: '1.25rem' }}>
        <Ring size="3.5rem" thickness={3} />
        {label ? (
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: '0.875rem',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--text-heading)',
            }}
          >
            {label}
          </p>
        ) : null}
      </div>
    </div>
  )
}
