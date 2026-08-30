import ToastRow from './row'

import type { ToastItem } from './types'

export default function ToastViewport({
  toasts,
  onDismiss,
}: {
  toasts: Array<ToastItem>
  onDismiss: (id: number) => void
}) {
  return (
    <div
      style={{
        position: 'fixed',
        right: '1.25rem',
        bottom: '1.25rem',
        zIndex: 70,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        width: 'min(30rem, calc(100vw - 2.5rem))',
        pointerEvents: 'none',
      }}
      aria-live="polite"
      aria-atomic="false"
    >
      {toasts.map((t) => (
        <ToastRow key={t.id} toast={t} onDismiss={() => onDismiss(t.id)} />
      ))}
    </div>
  )
}
