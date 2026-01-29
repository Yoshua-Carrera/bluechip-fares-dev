import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      className="mr-2 bg-transparent border-[var(--logo)] p-7"
      variant="outline"
      size="icon-lg"
      onClick={() => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
      }}
    >
      <Sun className="h-[2.5rem] w-[2.5rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-white light:text-[var(--logo)]" />
      <Moon className="absolute h-[2rem] w-[2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
