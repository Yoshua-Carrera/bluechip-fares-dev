import { useTheme } from '#/context/theme'

interface LogoProps {
  variant?: 'lockup' | 'mark'
  tone?: 'auto' | 'white' | 'navy'
  height?: number | string
  className?: string
}

const SOURCES = {
  lockup: {
    navy: '/logo/bluechip-lockup-navy.svg',
    white: '/logo/bluechip-lockup-white.svg',
  },
  mark: {
    navy: '/logo/bluechip-mark-navy.svg',
    white: '/logo/bluechip-mark-white.svg',
  },
} as const

export function Logo({
  variant = 'lockup',
  tone = 'auto',
  height = 80,
  className,
}: LogoProps) {
  const { theme } = useTheme()
  const resolvedTone: 'navy' | 'white' =
    tone === 'auto' ? (theme === 'light' ? 'navy' : 'white') : tone
  return (
    <img
      src={SOURCES[variant][resolvedTone]}
      alt="Bluechip Fares"
      className={className}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: 'auto',
        display: 'block',
        transition: 'height 300ms ease',
      }}
    />
  )
}
