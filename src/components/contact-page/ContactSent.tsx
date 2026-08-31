import { m } from '#/paraglide/messages'

interface ContactSentProps {
  onReset: () => void
}

export function ContactSent({ onReset }: ContactSentProps) {
  return (
    <div style={{ padding: 'var(--space-8) 0', textAlign: 'center' }}>
      <div
        style={{
          width: '3.25rem',
          height: '3.25rem',
          margin: '0 auto var(--space-5)',
          display: 'grid',
          placeItems: 'center',
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--accent-hairline-strong)',
          color: 'var(--text-accent)',
          fontSize: '1.25rem',
        }}
      >
        ✓
      </div>
      <h3
        style={{
          margin: '0 0 var(--space-3)',
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem',
          fontWeight: 'var(--weight-bold)',
          color: 'var(--on-panel)',
        }}
      >
        {m.contact_sent_title()}
      </h3>
      <p
        style={{
          margin: '0 auto var(--space-6)',
          maxWidth: '24rem',
          fontSize: '1.1875rem',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 'var(--leading-relaxed)',
          color: 'var(--on-panel-muted)',
        }}
      >
        {m.contact_sent_body()}
      </p>
      <button
        type="button"
        onClick={onReset}
        style={{
          border: '1px solid var(--accent-hairline-strong)',
          background: 'none',
          borderRadius: 'var(--radius-pill)',
          padding: '0.7rem 1.5rem',
          fontFamily: 'var(--font-display)',
          fontSize: '1.0625rem',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--text-accent)',
          cursor: 'pointer',
        }}
      >
        {m.contact_sent_another()}
      </button>
    </div>
  )
}
