import { variantColor } from './utils'

import type { ModalAction, ModalItem } from './types'

export default function ModalActions({
  modal,
  onRun,
}: {
  modal: ModalItem
  onRun: (action: ModalAction) => void
}) {
  if (!modal.primary && !modal.secondary) return null
  const primaryBackground =
    modal.kind === 'status' ? variantColor(modal.variant) : 'var(--primary)'
  return (
    <div
      style={{
        marginTop: '2rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--accent-hairline)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        justifyContent: 'flex-end',
      }}
    >
      {modal.secondary ? (
        <button
          type="button"
          onClick={() => onRun(modal.secondary!)}
          style={{
            minWidth: '11rem',
            textAlign: 'center',
            padding: '0.8rem 1.5rem',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--line-hairline)',
            background: 'transparent',
            color: 'var(--dialog-ink)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          {modal.secondary.label}
        </button>
      ) : null}
      {modal.primary ? (
        <button
          type="button"
          onClick={() => onRun(modal.primary!)}
          style={{
            minWidth: '11rem',
            textAlign: 'center',
            padding: '0.8rem 1.6rem',
            borderRadius: 'var(--radius-pill)',
            border: 'none',
            background: primaryBackground,
            color: 'var(--surface-page)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          {modal.primary.label}
        </button>
      ) : null}
    </div>
  )
}
