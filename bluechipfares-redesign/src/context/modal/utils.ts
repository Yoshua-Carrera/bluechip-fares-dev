import { CheckCircle2, Info, TriangleAlert, XCircle } from 'lucide-react'

import type { ModalStatusVariant } from './types'

export const VARIANT_ICON: Record<ModalStatusVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  info: Info,
  warning: TriangleAlert,
  error: XCircle,
}

export function variantColor(variant: ModalStatusVariant) {
  return `var(--status-${variant})`
}

export function variantTint(variant: ModalStatusVariant) {
  return `color-mix(in oklab, var(--status-${variant}) 16%, transparent)`
}

export function variantLine(variant: ModalStatusVariant) {
  return `color-mix(in oklab, var(--status-${variant}) 45%, transparent)`
}
