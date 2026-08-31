import { X } from 'lucide-react'

import { VARIANT_ICON, variantColor, variantLine, variantTint } from './utils'

import type { ToastItem } from './types'

export default function ToastRow({
  toast,
  onDismiss,
}: {
  toast: ToastItem
  onDismiss: () => void
}) {
  const Icon = VARIANT_ICON[toast.variant]
  const color = variantColor(toast.variant)
  return (
    <div
      role="status"
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
        padding: '1.15rem 1.25rem',
        borderRadius: 'var(--radius-xl)',
        border: `1px solid ${variantLine(toast.variant)}`,
        background: 'var(--surface-card)',
        boxShadow: 'var(--shadow-lg)',
        animation: 'bcf-toast-in 300ms ease both',
        pointerEvents: 'auto',
      }}
    >
      <span
        style={{
          flex: 'none',
          display: 'grid',
          placeItems: 'center',
          width: '2rem',
          height: '2rem',
          borderRadius: '9999px',
          background: variantTint(toast.variant),
          color,
        }}
      >
        <Icon size={18} aria-hidden />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.125rem',
            color,
          }}
        >
          {toast.title}
        </p>
        {toast.description ? (
          <p
            style={{
              margin: '0.3rem 0 0',
              fontSize: '1.0625rem',
              lineHeight: 'var(--leading-relaxed)',
              color: 'var(--text-body)',
            }}
          >
            {toast.description}
          </p>
        ) : null}
      </div>
      {toast.dismissable ? (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{
            flex: 'none',
            border: 'none',
            background: 'transparent',
            color: 'var(--text-body)',
            cursor: 'pointer',
            padding: '0.15rem',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <X size={16} aria-hidden />
        </button>
      ) : null}
    </div>
  )
}
