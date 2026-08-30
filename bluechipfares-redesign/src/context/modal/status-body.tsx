import { X } from 'lucide-react'

import { VARIANT_ICON, variantColor, variantTint } from './utils'

import type { StatusModalItem } from './types'

export default function StatusBody({
  modal,
  dismissable,
  onDismiss,
}: {
  modal: StatusModalItem
  dismissable: boolean
  onDismiss: () => void
}) {
  const Icon = VARIANT_ICON[modal.variant]
  const color = variantColor(modal.variant)
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div className="flex gap-2 items-end justify-between">
        <div className="flex gap-2 items-end">
          <span
            style={{
              display: 'grid',
              placeItems: 'center',
              width: '2rem',
              height: '2rem',
              borderRadius: '9999px',
              background: variantTint(modal.variant),
              color,
            }}
          >
            <Icon size={22} aria-hidden />
          </span>

          <h3
            style={{
              margin: '0.6rem 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '2rem',
              lineHeight: 1.15,
              color: 'var(--dialog-ink-strong)',
            }}
          >
            {modal.title}
          </h3>
        </div>
        <div className="self-end">
          {dismissable ? (
            <button
              type="button"
              onClick={onDismiss}
              aria-label="Close"
              style={{
                border: 'none',
                background: 'transparent',
                color: 'var(--dialog-ink)',
                cursor: 'pointer',
                padding: '0.35rem',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <X size={18} aria-hidden />
            </button>
          ) : null}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '1rem',
        }}
      ></div>

      {modal.description ? (
        <p
          style={{
            margin: '1rem 0 0',
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 'var(--leading-relaxed)',
            color: 'var(--dialog-ink)',
          }}
        >
          {modal.description}
        </p>
      ) : null}
    </div>
  )
}
