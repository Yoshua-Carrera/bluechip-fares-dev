import { Link } from '@tanstack/react-router'

import type { NavItem } from '#/components/navbar/nav-items'
import { Logo } from '#/components/logo/Logo'
import { LocaleSwitch } from '#/components/navbar/LocaleSwitch'
import { ThemeToggle } from '#/components/theme-toggle/ThemeToggle'

interface DesktopNavbarProps {
  items: Array<NavItem>
  scrolled: boolean
  onPhoto: boolean
  activeHref?: string
}

export function DesktopNavbar({
  items,
  onPhoto,
  activeHref,
}: DesktopNavbarProps) {
  return (
    <>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo tone={onPhoto ? 'white' : 'auto'} height={60} />
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
          return (
            <Link
              key={item.href}
              to={item.href}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.125rem',
                fontWeight: 'var(--weight-semibold)',
                color: active
                  ? onPhoto
                    ? 'var(--copper-light)'
                    : 'var(--text-accent)'
                  : onPhoto
                    ? 'var(--on-photo)'
                    : 'var(--chrome-foreground)',
                padding: '0.4rem 0.1rem',
                borderBottom: `1px solid ${
                  active
                    ? onPhoto
                      ? 'var(--copper-light)'
                      : 'var(--text-accent)'
                    : 'transparent'
                }`,
                textDecoration: 'none',
                transition: 'color 200ms ease, border-color 200ms ease',
              }}
            >
              {item.label}
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
        <LocaleSwitch tone={onPhoto ? 'on-photo' : 'on-chrome'} />
        <ThemeToggle tone={onPhoto ? 'on-photo' : 'on-chrome'} />
      </div>
    </>
  )
}
