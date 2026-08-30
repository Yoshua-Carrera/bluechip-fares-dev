import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { ModalContext } from './context'
import ModalDialog from './dialog'

import type { ReactNode } from 'react'
import type {
  ModalApi,
  ModalContextValue,
  ModalCustomOptions,
  ModalItem,
  ModalStatusOptions,
  ModalVariant,
} from './types'

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [modals, setModals] = useState<Array<ModalItem>>([])
  const nextIdRef = useRef(0)

  const hide = useCallback((id?: number) => {
    if (id === undefined) {
      setModals([])
      return
    }
    setModals((prev) => prev.filter((m) => m.id !== id))
  }, [])

  const destroyAll = useCallback(() => setModals([]), [])

  const show = useCallback(
    (
      variant: ModalVariant,
      options: ModalStatusOptions | ModalCustomOptions,
    ) => {
      const id = ++nextIdRef.current
      const dismissable = options.dismissable ?? true
      if (variant === 'custom') {
        const custom = options as ModalCustomOptions
        setModals((prev) =>
          prev.concat({
            id,
            kind: 'custom',
            content: custom.content,
            dismissable,
            primary: custom.primary,
            secondary: custom.secondary,
          }),
        )
      } else {
        const status = options as ModalStatusOptions
        setModals((prev) =>
          prev.concat({
            id,
            kind: 'status',
            variant,
            title: status.title,
            description: status.description,
            dismissable,
            primary: status.primary,
            secondary: status.secondary,
          }),
        )
      }
      return id
    },
    [],
  )

  const modal = useMemo<ModalApi>(
    () => ({
      success: (options) => show('success', options),
      info: (options) => show('info', options),
      warning: (options) => show('warning', options),
      error: (options) => show('error', options),
      custom: (options) => show('custom', options),
    }),
    [show],
  )

  useEffect(() => {
    if (modals.length === 0) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      const top = modals[modals.length - 1]
      if (top && (top.dismissable ?? true)) hide(top.id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modals, hide])

  const value = useMemo<ModalContextValue>(
    () => ({ modal, destroyAll, show, hide }),
    [modal, destroyAll, show, hide],
  )

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modals.map((m) => (
        <ModalDialog key={m.id} modal={m} onDismiss={() => hide(m.id)} />
      ))}
    </ModalContext.Provider>
  )
}
