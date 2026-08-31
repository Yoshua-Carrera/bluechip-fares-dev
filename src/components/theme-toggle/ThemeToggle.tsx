import { Moon, Sun } from 'lucide-react'

import { useTheme } from '#/context/theme'
import { m } from '#/paraglide/messages'

const BLEND = 'calc(var(--nav-photo-blend, 0) * 100%)'
const blend = (photo: string, chrome: string) =>
  `color-mix(in srgb, ${photo} ${BLEND}, ${chrome})`

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={m.theme_toggle_label()}
      style={{
        width: 34,
        height: 34,
        display: 'grid',
        placeItems: 'center',
        border: `1px solid ${blend('var(--line-on-photo)', 'var(--line-hairline)')}`,
        borderRadius: 'var(--radius-pill)',
        background: 'transparent',
        color: blend('var(--on-photo)', 'var(--chrome-foreground)'),
        cursor: 'pointer',
        opacity: 0.75,
        transition: 'opacity 200ms ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
    >
      {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}
