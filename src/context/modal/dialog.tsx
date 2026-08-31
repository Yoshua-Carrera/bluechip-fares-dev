import ModalActions from './actions'
import CustomBody from './custom-body'
import StatusBody from './status-body'
import { variantLine } from './utils'

import type { ModalAction, ModalItem } from './types'

export default function ModalDialog({
  modal,
  onDismiss,
}: {
  modal: ModalItem
  onDismiss: () => void
}) {
  const dismissable = modal.dismissable ?? true
  const line =
    modal.kind === 'status'
      ? variantLine(modal.variant)
      : 'var(--line-hairline)'

  const handleBackdrop = () => {
    if (dismissable) onDismiss()
  }
  const stop = (e: React.MouseEvent) => e.stopPropagation()

  const runAction = async (action: ModalAction) => {
    await action.onClick()
    onDismiss()
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        display: 'grid',
        placeItems: 'center',
        padding: '1.5rem',
        background: 'rgba(0, 0, 0, 0.72)',
        backdropFilter: 'blur(6px) saturate(100%)',
        WebkitBackdropFilter: 'blur(6px) saturate(100%)',
        animation: 'bcf-scrim-in 200ms ease both',
      }}
      onClick={handleBackdrop}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={stop}
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          maxWidth: '34rem',
          padding: '2rem',
          borderRadius: 'var(--radius-3xl)',
          border: `1px solid ${line}`,
          background: 'var(--dialog-surface)',
          boxShadow: 'var(--shadow-lg)',
          animation: 'bcf-dialog-in 300ms ease both',
        }}
      >
        {modal.kind === 'status' ? (
          <StatusBody
            modal={modal}
            dismissable={dismissable}
            onDismiss={onDismiss}
          />
        ) : (
          <CustomBody
            modal={modal}
            dismissable={dismissable}
            onDismiss={onDismiss}
          />
        )}
        <ModalActions modal={modal} onRun={runAction} />
      </div>
    </div>
  )
}
