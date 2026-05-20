'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const NAV_LINKS = ['Projects', 'Skills', 'About', 'Contact'] as const

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border/60 shadow-lg shadow-black/30'
            : 'bg-transparent backdrop-blur-sm'
          }`}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-sm text-muted-foreground tracking-widest uppercase hover:text-primary transition-colors duration-200"
          >
            Dev.Portfolio
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Resume button + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-lg border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-200 glow-purple-sm"
            >
              <Download size={13} />
              Resume
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] inset-x-0 z-40 md:hidden bg-background/90 backdrop-blur-lg border-b border-border/60 shadow-xl shadow-black/30"
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="py-2.5 text-sm text-muted-foreground hover:text-foreground border-b border-border/30 last:border-0 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                onClick={closeMenu}
                className="mt-3 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Download size={14} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
