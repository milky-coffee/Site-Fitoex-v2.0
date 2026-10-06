import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FlaskConical, Menu, X, ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'A Startup', href: '#startup' },
  { label: 'A Caatinga', href: '#caatinga' },
  { label: 'A Ciência', href: '#ciencia' },
  { label: 'Ativos em Destaque', href: '#galeria' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo minimalista */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cactus/40 bg-cactus/10 text-cactus transition-colors group-hover:bg-cactus/20">
            <FlaskConical size={16} strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-bone">
            Fito<span className="text-cactus">Ex</span>
          </span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-sand/90 transition-colors hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contato"
            className="group inline-flex items-center gap-1.5 rounded-full border border-clay/50 bg-clay/10 px-4 py-2 text-sm font-medium text-clay-soft transition-all hover:border-clay hover:bg-clay/20 hover:text-bone"
          >
            Parcerias &amp; Inovação
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="text-bone lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-void lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-3 text-base text-sand hover:bg-panel hover:text-bone"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full border border-clay/50 bg-clay/10 px-4 py-3 text-center text-sm font-medium text-clay-soft"
              >
                Parcerias &amp; Inovação
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
