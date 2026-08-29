import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import type { ReactNode } from 'react'

export type Theme = 'dark' | 'light'

export const THEME_STORAGE_KEY = 'app-theme'
export const THEME_ATTRIBUTE = 'data-theme'
export const DEFAULT_THEME: Theme = 'dark'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readInitialTheme(): Theme {
  if (typeof document === 'undefined') return DEFAULT_THEME
  const attr = document.documentElement.getAttribute(THEME_ATTRIBUTE)
  if (attr === 'light' || attr === 'dark') return attr
  return DEFAULT_THEME
}

function writeTheme(theme: Theme) {
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme)
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* localStorage unavailable — ignore */
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    setThemeState(readInitialTheme())
  }, [])

  const setTheme = useCallback((next: Theme) => {
    writeTheme(next)
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      writeTheme(next)
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}

export const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var t=(s==='light'||s==='dark')?s:'${DEFAULT_THEME}';document.documentElement.setAttribute('${THEME_ATTRIBUTE}',t);}catch(e){document.documentElement.setAttribute('${THEME_ATTRIBUTE}','${DEFAULT_THEME}');}})();`
