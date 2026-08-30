import { X } from 'lucide-react'

import type { CustomModalItem } from './types'

export default function CustomBody({
  modal,
  dismissable,
  onDismiss,
}: {
  modal: CustomModalItem
  dismissable: boolean
  onDismiss: () => void
}) {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {dismissable ? (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
        </div>
      ) : null}
      <div style={{ color: 'var(--dialog-ink)' }}>{modal.content}</div>
    </div>
  )
}
