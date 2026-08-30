import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { ToastContext } from './context'
import { DEFAULT_DURATION } from './utils'
import ToastViewport from './viewport'

import type { ReactNode } from 'react'
import type {
  ToastContextValue,
  ToastItem,
  ToastOptions,
  ToastVariant,
  Toaster,
} from './types'

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Array<ToastItem>>([])
  const nextIdRef = useRef(0)
  const timersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(
    new Map(),
  )

  const hide = useCallback((id?: number) => {
    if (id === undefined) {
      timersRef.current.forEach((t) => clearTimeout(t))
      timersRef.current.clear()
      setToasts([])
      return
    }
    const timer = timersRef.current.get(id)
    if (timer) {
      clearTimeout(timer)
      timersRef.current.delete(id)
    }
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const show = useCallback(
    (variant: ToastVariant, options: ToastOptions) => {
      const id = ++nextIdRef.current
      const duration = options.duration ?? DEFAULT_DURATION
      const dismissable = options.dismissable ?? true
      const item: ToastItem = {
        id,
        variant,
        title: options.title,
        description: options.description,
        duration,
        dismissable,
      }
      setToasts((prev) => prev.concat(item).slice(-5))
      if (duration > 0) {
        const timer = setTimeout(() => hide(id), duration)
        timersRef.current.set(id, timer)
      }
      return id
    },
    [hide],
  )

  useEffect(() => {
    const timers = timersRef.current
    return () => {
      timers.forEach((t) => clearTimeout(t))
      timers.clear()
    }
  }, [])

  const toaster = useMemo<Toaster>(
    () => ({
      success: (options) => show('success', options),
      info: (options) => show('info', options),
      warning: (options) => show('warning', options),
      error: (options) => show('error', options),
    }),
    [show],
  )

  const value = useMemo<ToastContextValue>(
    () => ({ toaster, show, hide }),
    [toaster, show, hide],
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={hide} />
    </ToastContext.Provider>
  )
}
