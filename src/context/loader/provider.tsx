import { useCallback, useMemo, useState } from 'react'

import { LoaderContext } from './context'
import PageLoader from './page-loader'
import SmallLoaderOverlay from './small-loader-overlay'

import type { ReactNode } from 'react'
import type {
  LoaderContextValue,
  LoaderOptions,
  LoaderState,
  LoaderVariant,
} from './types'

export default function LoaderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LoaderState>({ variant: null })

  const show = useCallback(
    (variant: LoaderVariant = 'page', options: LoaderOptions = {}) => {
      setState({ variant, label: options.label })
    },
    [],
  )

  const hide = useCallback(() => setState({ variant: null }), [])

  const value = useMemo<LoaderContextValue>(
    () => ({
      show,
      hide,
      isLoading: state.variant !== null,
      variant: state.variant,
    }),
    [show, hide, state.variant],
  )

  return (
    <LoaderContext.Provider value={value}>
      {children}
      {state.variant === 'page' ? <PageLoader label={state.label} /> : null}
      {state.variant === 'small' ? <SmallLoaderOverlay /> : null}
    </LoaderContext.Provider>
  )
}
