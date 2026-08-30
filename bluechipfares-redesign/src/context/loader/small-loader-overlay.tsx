import Ring from './ring'

export default function SmallLoaderOverlay() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        right: '1.25rem',
        top: '1.25rem',
        zIndex: 80,
        padding: '0.75rem 1rem',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-card)',
        border: '1px solid var(--accent-hairline)',
        boxShadow: 'var(--shadow-md)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.6rem',
        animation: 'bcf-toast-in 300ms ease both',
      }}
    >
      <Ring size="1rem" thickness={2} />
    </div>
  )
}
