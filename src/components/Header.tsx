import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import { Briefcase, Contact, GalleryHorizontal, Home, Menu, X } from 'lucide-react'

import BluechipLogo from '../assets/bluechip-fares-logo.svg?react'
import BluechipLogoComplete from '../assets/bluechip-fares-logo-complete.svg?react'

import { DarkModeToggle } from './dark-mode-toggle.tsx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="bg-background p-4 flex items-center justify-between text-white shadow-sm shadow-copper">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-background rounded-lg transition-colors light:text-[var(--logo)]"
          aria-label="Open menu"
        >
          <Menu
            size={36}
            className="hover:bg-[var(--accent-foreground)]/10 hover:rounded-lg hover:cursor-pointer"
          />
        </button>
        <h1 className="flex-1 text-center text-xl font-semibold flex justify-center">
          <Link to="/">
            <BluechipLogo className="h-35  text-white light:[--logo-fill-cls-2:var(--logo)] light:[--logo-fill-cls-3:var(--logo)] light:[--logo-stroke-cls-1:var(--logo)]" />
          </Link>
        </h1>
        <DarkModeToggle></DarkModeToggle>
      </header>

      <aside
        className={`bg-muted/95 fixed top-0 left-0 h-full w-screen md:w-100 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl text-[var(--accent-foreground)] font-bold">Bluechip Fares</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 light:hover:bg-gray-800/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="text-[var(--accent-foreground)]" size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 light:hover:bg-gray-800/10 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <Home className="text-[var(--accent-foreground)]" size={20} />
            <span className="font-medium text-[var(--accent-foreground)]">Home</span>
          </Link>

          {/* Demo Links Start */}

          <Link
            to="/services-offered"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 light:hover:bg-gray-800/10 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <Briefcase className="text-[var(--accent-foreground)]" size={20} />
            <span className="font-medium text-[var(--accent-foreground)]">Services Offered</span>
          </Link>

          <Link
            to="/gallery"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 light:hover:bg-gray-800/10 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <GalleryHorizontal className="text-[var(--accent-foreground)]" size={20} />
            <span className="font-medium text-[var(--accent-foreground)]">Gallery</span>
          </Link>

          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 light:hover:bg-gray-800/10 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <Contact className="text-[var(--accent-foreground)]" size={20} />
            <span className="font-medium text-[var(--accent-foreground)]">Contact Us</span>
          </Link>

          {/* Demo Links End */}
        </nav>

        <div className="p-4 border-t border-gray-700 bg-gray-800 flex flex-row gap-2 flex justify-center">
          {/* TODO: Add Auth portal  */}
          {/* <BetterAuthHeader /> */}
          {/* <RemyButton /> */}
          <Link to="/">
            <BluechipLogoComplete className="h-20  text-white light:[--logo-fill-cls-2:var(--logo)] light:[--logo-fill-cls-3:var(--logo)] light:[--logo-stroke-cls-1:var(--logo)]" />
          </Link>
        </div>
      </aside>
    </>
  )
}
