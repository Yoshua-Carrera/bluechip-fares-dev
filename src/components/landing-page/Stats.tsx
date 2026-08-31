import { m } from '#/paraglide/messages'

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 'var(--space-3)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.25rem',
          fontWeight: 'var(--weight-bold)',
          color: 'var(--text-accent)',
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.875rem',
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--tracking-wider)',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export function Stats() {
  const stats = [
    { value: '6', label: m.stat_contractors() },
    { value: '6', label: m.stat_services() },
    { value: '7', label: m.stat_days() },
  ]
  return (
    <div
      style={{
        borderBottom: '1px solid var(--line-hairline)',
        background: 'var(--surface-page)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'var(--space-6) clamp(1.5rem, 4vw, 3rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',
          gap: 'var(--space-6)',
        }}
      >
        {stats.map((s) => (
          <StatItem key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </div>
  )
}
