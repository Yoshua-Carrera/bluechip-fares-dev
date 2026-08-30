export type LoaderVariant = 'page' | 'small'

export interface LoaderOptions {
  label?: string
}

export interface LoaderState {
  variant: LoaderVariant | null
  label?: string
}

export interface LoaderContextValue {
  show: (variant?: LoaderVariant, options?: LoaderOptions) => void
  hide: () => void
  isLoading: boolean
  variant: LoaderVariant | null
}
