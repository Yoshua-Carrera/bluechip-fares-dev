import { useEffect, useState } from 'react'

import { DesktopNavbar } from '#/components/navbar/DesktopNavbar'
import { MobileNavbar } from '#/components/navbar/MobileNavbar'
import { getNavItems } from '#/components/navbar/nav-items'

const DESKTOP_MIN_WIDTH = 900
const SCROLL_THRESHOLD = 48

interface NavbarProps {
  overPhoto?: boolean
  /** Currently-active route path, e.g. '/'. */
  activeHref?: string
}

export function Navbar({ overPhoto = false, activeHref }: NavbarProps) {
  const [isDesktop, setIsDesktop] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= DESKTOP_MIN_WIDTH)
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    onResize()
    onScroll()
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onPhoto = overPhoto && !scrolled
  const items = getNavItems()

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-6)',
        padding: scrolled
          ? '0.7rem clamp(1.5rem, 4vw, 3rem)'
          : '1.5rem clamp(1.5rem, 4vw, 3rem)',
        background: scrolled ? 'var(--chrome-gradient)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid var(--accent-hairline)'
          : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition:
          'padding 300ms ease, background 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
      }}
    >
      {isDesktop ? (
        <DesktopNavbar
          items={items}
          scrolled={scrolled}
          onPhoto={onPhoto}
          activeHref={activeHref}
        />
      ) : (
        <MobileNavbar
          items={items}
          scrolled={scrolled}
          onPhoto={onPhoto}
          activeHref={activeHref}
        />
      )}
    </header>
  )
}
