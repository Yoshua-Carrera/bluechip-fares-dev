import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from '@tanstack/react-router'

import type { NavItem } from '#/components/navbar/nav-items'
import { Logo } from '#/components/logo/Logo'
import { LocaleSwitch } from '#/components/navbar/LocaleSwitch'
import { ThemeToggle } from '#/components/theme-toggle/ThemeToggle'
import { m } from '#/paraglide/messages'

interface MobileNavbarProps {
  items: Array<NavItem>
  overPhoto: boolean
  activeHref?: string
}

const BLEND = 'calc(var(--nav-photo-blend, 0) * 100%)'
const blend = (photo: string, chrome: string) =>
  `color-mix(in srgb, ${photo} ${BLEND}, ${chrome})`

const LOGO_HEIGHT = 'calc(40px - 8px * var(--nav-scroll, 0))'

export function MobileNavbar({
  items,
  overPhoto,
  activeHref,
}: MobileNavbarProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

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
        <Logo tone="auto" height={LOGO_HEIGHT} />
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
            <Logo tone="white" height={LOGO_HEIGHT} />
          </span>
        )}
      </Link>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
        }}
      >
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={m.nav_menu()}
          style={{
            width: 38,
            height: 38,
            display: 'grid',
            placeItems: 'center',
            border: `1px solid ${blend('var(--line-on-photo)', 'var(--line-hairline)')}`,
            borderRadius: 'var(--radius-pill)',
            background: 'transparent',
            color: blend('var(--on-photo)', 'var(--chrome-foreground)'),
            cursor: 'pointer',
          }}
        >
          <Menu size={18} />
        </button>
      </div>

      {open && (
        <MobileDrawer
          items={items}
          activeHref={activeHref}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

interface MobileDrawerProps {
  items: Array<NavItem>
  onClose: () => void
  activeHref?: string
}

function MobileDrawer({ items, onClose, activeHref }: MobileDrawerProps) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        background: 'var(--overlay-scrim)',
      }}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 'min(22rem, 88vw)',
          background: 'var(--surface-drawer)',
          backdropFilter: 'blur(8px)',
          borderRight: '1px solid var(--line-hairline)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)',
          minHeight: '100vh',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-6)',
          }}
        >
          <Logo height={100} />
          <button
            type="button"
            onClick={onClose}
            aria-label={m.nav_close()}
            style={{
              border: 0,
              background: 'transparent',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: 8,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {items.map((item) => {
          const active = activeHref === item.href
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: '0.85rem 0.75rem',
                borderRadius: 'var(--radius-lg)',
                fontFamily: 'var(--font-display)',
                fontSize: '1.1875rem',
                fontWeight: 'var(--weight-semibold)',
                color: 'var(--text-heading)',
                textDecoration: 'none',
                background: active ? 'var(--hover-surface)' : 'transparent',
                transition: 'background 200ms ease',
              }}
            >
              <span
                style={{ color: 'var(--text-accent)', fontSize: '0.95rem' }}
              >
                {item.glyph}
              </span>
              {item.label}
            </Link>
          )
        })}

        <div
          style={{
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid var(--line-hairline)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            fontSize: '1rem',
            fontWeight: 'var(--weight-medium)',
            color: 'var(--text-muted)',
          }}
        >
          <LocaleSwitch />
          <div>
            (940) 275-7574
            <br />
            contact@bluechipfares.com
          </div>
        </div>
      </aside>
    </div>
  )
}
