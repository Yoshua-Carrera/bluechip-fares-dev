import Ring from './ring'

import type { CSSProperties } from 'react'
import type { LoaderVariant } from './types'

export default function Loader({
  variant = 'small',
  label,
  className,
  style,
}: {
  variant?: LoaderVariant
  label?: string
  className?: string
  style?: CSSProperties
}) {
  if (variant === 'page') {
    return (
      <div
        className={className}
        style={{
          display: 'grid',
          placeItems: 'center',
          gap: '1rem',
          padding: '2.5rem 1rem',
          ...style,
        }}
      >
        <Ring size="3rem" thickness={3} />
        {label ? (
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: '0.8125rem',
              letterSpacing: 'var(--tracking-wider)',
              textTransform: 'uppercase',
              color: 'var(--text-heading)',
            }}
          >
            {label}
          </p>
        ) : null}
      </div>
    )
  }
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', ...style }}
    >
      <Ring size="1rem" thickness={2} />
    </span>
  )
}
