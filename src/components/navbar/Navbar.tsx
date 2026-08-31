import { DesktopNavbar } from '#/components/navbar/DesktopNavbar'
import { MobileNavbar } from '#/components/navbar/MobileNavbar'
import { getNavItems } from '#/components/navbar/nav-items'
import { useHideOnScrollDown } from '#/context/navbar-scroll'

interface NavbarProps {
  overPhoto?: boolean
  activeHref?: string
}

export function Navbar({ overPhoto = false, activeHref }: NavbarProps) {
  const items = getNavItems()
  const hidden = useHideOnScrollDown()

  return (
    <header
      className="navbar-scroll-fx"
      data-over-photo={overPhoto ? 'true' : 'false'}
      data-hidden={hidden ? 'true' : 'false'}
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
        paddingTop: 'calc(1.5rem - 0.8rem * var(--nav-scroll, 0))',
        paddingBottom: 'calc(1.5rem - 0.8rem * var(--nav-scroll, 0))',
        paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 3rem)',
      }}
    >
      <div className="hidden min-[900px]:contents">
        <DesktopNavbar
          items={items}
          overPhoto={overPhoto}
          activeHref={activeHref}
        />
      </div>
      <div className="contents min-[900px]:hidden">
        <MobileNavbar
          items={items}
          overPhoto={overPhoto}
          activeHref={activeHref}
        />
      </div>
    </header>
  )
}
