import { Link } from '@tanstack/react-router'

import type { NavItem } from '#/components/navbar/nav-items'
import { Logo } from '#/components/logo/Logo'
import { LocaleSwitch } from '#/components/navbar/LocaleSwitch'
import { ThemeToggle } from '#/components/theme-toggle/ThemeToggle'

interface DesktopNavbarProps {
  items: Array<NavItem>
  overPhoto: boolean
  activeHref?: string
}

const BLEND = 'calc(var(--nav-photo-blend, 0) * 100%)'
const blend = (photo: string, chrome: string) =>
  `color-mix(in srgb, ${photo} ${BLEND}, ${chrome})`

export function DesktopNavbar({
  items,
  overPhoto,
  activeHref,
}: DesktopNavbarProps) {
  return (
    <>
      <Link
        to="/"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Logo tone="auto" height={60} />
        {overPhoto && (
          <span
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              opacity: 'var(--nav-photo-blend, 0)',
              pointerEvents: 'none',
            }}
          >
            <Logo tone="white" height={60} />
          </span>
        )}
      </Link>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(0.75rem, 2vw, 2rem)',
        }}
      >
        {items.map((item) => {
          const active = activeHref === item.href
          const color = active
            ? blend('var(--copper-light)', 'var(--text-accent)')
            : blend('var(--on-photo)', 'var(--chrome-foreground)')
          const border = active
            ? blend('var(--copper-light)', 'var(--text-accent)')
            : 'transparent'
          return (
            <Link
              key={item.href}
              to={item.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                fontWeight: 'var(--weight-semibold)',
                color,
                padding: '0.4rem 0.1rem',
                borderBottom: `1px solid ${border}`,
                textDecoration: 'none',
              }}
            >
              <p className="hover:text-(--copper)">{item.label}</p>
            </Link>
          )
        })}
      </nav>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}
      >
        <LocaleSwitch />
        <ThemeToggle />
      </div>
    </>
  )
}
