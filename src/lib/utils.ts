import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export const capitalizeFirstLetter = (str: string) => {
  if (str.length === 0) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}
