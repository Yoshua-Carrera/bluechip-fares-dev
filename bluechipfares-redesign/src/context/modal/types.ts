import type { ReactNode } from 'react'

export type ModalVariant = 'success' | 'info' | 'warning' | 'error' | 'custom'
export type ModalStatusVariant = Exclude<ModalVariant, 'custom'>

export interface ModalAction {
  label: string
  onClick: () => void | Promise<void>
}

export interface ModalBaseOptions {
  dismissable?: boolean
  primary?: ModalAction
  secondary?: ModalAction
}

export interface ModalStatusOptions extends ModalBaseOptions {
  title: string
  description?: string
}

export interface ModalCustomOptions extends ModalBaseOptions {
  content: ReactNode
}

export interface StatusModalItem extends ModalStatusOptions {
  id: number
  kind: 'status'
  variant: ModalStatusVariant
}

export interface CustomModalItem extends ModalCustomOptions {
  id: number
  kind: 'custom'
}

export type ModalItem = StatusModalItem | CustomModalItem

export interface ModalApi {
  success: (options: ModalStatusOptions) => number
  info: (options: ModalStatusOptions) => number
  warning: (options: ModalStatusOptions) => number
  error: (options: ModalStatusOptions) => number
  custom: (options: ModalCustomOptions) => number
}

export interface ModalContextValue {
  modal: ModalApi
  destroyAll: () => void
  show: (
    variant: ModalVariant,
    options: ModalStatusOptions | ModalCustomOptions,
  ) => number
  hide: (id?: number) => void
}
