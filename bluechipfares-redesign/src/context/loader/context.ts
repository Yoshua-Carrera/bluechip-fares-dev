import { createContext, useContext } from 'react'

import type { LoaderContextValue } from './types'

export const LoaderContext = createContext<LoaderContextValue | null>(null)

export function useLoader(): LoaderContextValue {
  const ctx = useContext(LoaderContext)
  if (!ctx) throw new Error('useLoader must be used inside <LoaderProvider>')
  return ctx
}
