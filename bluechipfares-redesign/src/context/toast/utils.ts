import { CheckCircle2, Info, TriangleAlert, XCircle } from 'lucide-react'

import type { ToastVariant } from './types'

export const DEFAULT_DURATION = 3000

export const VARIANT_ICON: Record<ToastVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  info: Info,
  warning: TriangleAlert,
  error: XCircle,
}

export function variantColor(variant: ToastVariant) {
  return `var(--status-${variant})`
}

export function variantTint(variant: ToastVariant) {
  return `color-mix(in oklab, var(--status-${variant}) 16%, transparent)`
}

export function variantLine(variant: ToastVariant) {
  return `color-mix(in oklab, var(--status-${variant}) 45%, transparent)`
}
