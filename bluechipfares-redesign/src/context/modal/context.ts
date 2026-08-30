import { createContext, useContext } from 'react'

import type { ModalContextValue } from './types'

export const ModalContext = createContext<ModalContextValue | null>(null)

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used inside <ModalProvider>')
  return ctx
}
