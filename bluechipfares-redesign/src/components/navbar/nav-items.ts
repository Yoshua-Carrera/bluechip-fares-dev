import { m } from '#/paraglide/messages'

export interface NavItem {
  label: string
  href: string
  glyph: string
}

export function getNavItems(): Array<NavItem> {
  return [
    { label: m.nav_home(), href: '/', glyph: '⌂' },
    { label: m.nav_services(), href: '/services', glyph: '▤' },
    { label: m.nav_gallery(), href: '/gallery', glyph: '▦' },
    { label: m.nav_contact(), href: '/contact', glyph: '✉' },
  ]
}
