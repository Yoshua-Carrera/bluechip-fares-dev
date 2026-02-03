import {
  HeadContent,
  ScriptOnce,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { useEffect, useState } from 'react'
import Header from '../components/Header'

import StoreDevtools from '../lib/demo-store-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

import type { TRPCRouter } from '@/integrations/trpc/router'
import type { TRPCOptionsProxy } from '@trpc/tanstack-react-query'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

interface MyRouterContext {
  queryClient: QueryClient

  trpc: TRPCOptionsProxy<TRPCRouter>
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Bluechip Fares',
      },
      {
        property: 'og:image',
        content: 'https://bluechipfares.com/bluechip-fares.png',
      },
      {
        property: 'og:image:type',
        content: 'image/jpeg',
      },
      {
        property: 'og:url',
        content: 'https://bluechipfares.com/',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Bluechip Fares: house remodeling',
      },
      {
        property: 'og:description',
        content: 'House remodeling and general contractor work',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [ctaShown, setCtaShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ctaShown && window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setTimeout(() => {
          setCtaShown(true)
          setIsDialogOpen(true)
          window.removeEventListener('scroll', handleScroll)
        }, 1000 * 60)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const themeScript = `
  (function () {
    const stored = localStorage.getItem("vite-ui-theme")
    console.log(stored)
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    if (stored === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    }
    root.classList.add(stored)
  })()
`

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          {isDialogOpen && (
            <Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(!isDialogOpen)}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Need help choosing the right solution?</DialogTitle>
                  <DialogDescription>
                    That usually means you're at least a little curious. Tell us what's stopping you
                    and we'll give you honest advice (no pitch).
                  </DialogDescription>
                </DialogHeader>
                <Button className="bg-primary">Let's talk now</Button>
              </DialogContent>
            </Dialog>
          )}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              StoreDevtools,
              TanStackQueryDevtools,
            ]}
          />
        </ThemeProvider>
        <Scripts />
        <ScriptOnce>{themeScript}</ScriptOnce>
        <Toaster />
      </body>
    </html>
  )
}
