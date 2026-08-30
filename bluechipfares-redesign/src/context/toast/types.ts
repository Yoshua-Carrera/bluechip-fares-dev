export type ToastVariant = 'success' | 'info' | 'warning' | 'error'

export interface ToastOptions {
  title: string
  description?: string
  duration?: number
  dismissable?: boolean
}

export interface ToastItem extends Required<Omit<ToastOptions, 'description'>> {
  id: number
  variant: ToastVariant
  description?: string
}

export interface Toaster {
  success: (options: ToastOptions) => number
  info: (options: ToastOptions) => number
  warning: (options: ToastOptions) => number
  error: (options: ToastOptions) => number
}

export interface ToastContextValue {
  toaster: Toaster
  show: (variant: ToastVariant, options: ToastOptions) => number
  hide: (id?: number) => void
}
