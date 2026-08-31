export default function Ring({
  size,
  thickness,
}: {
  size: string
  thickness: number
}) {
  return (
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '9999px',
        border: `${thickness}px solid var(--accent-hairline)`,
        borderTopColor: 'var(--text-accent)',
        animation: 'bcf-spin 900ms linear infinite',
      }}
    />
  )
}
