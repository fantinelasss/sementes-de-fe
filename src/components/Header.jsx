import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { brand } from '../data/products'
import Logo from './Logo'
import { container } from './Section'
import { Instagram, TikTok, Menu, Close } from './icons'

// Links de navegação -> âncoras de seções da home.
const navLinks = [
  { id: 'produtos', label: 'Produtos' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Sombra/blur sutil ao rolar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu mobile com Esc e trava o scroll do body quando aberto.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Navega até uma seção: se já estiver na home, rola suave;
  // se estiver em outra página, vai para a home e rola lá.
  const goToSection = (id) => {
    setOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-cream/85 backdrop-blur-md shadow-[0_6px_24px_-18px_rgba(74,69,64,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className={`${container} flex h-[68px] items-center justify-between`}>
        <Logo onClick={() => setOpen(false)} />

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition-colors duration-200 hover:bg-sage/10 hover:text-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark"
            >
              {link.label}
            </button>
          ))}

          <span className="mx-2 h-6 w-px bg-ink/10" aria-hidden="true" />

          <SocialIcons />
        </nav>

        {/* Botão do menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-sage-dark transition-colors hover:bg-sage/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark md:hidden"
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Painel mobile */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ink/5 bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Navegação mobile" className={`${container} flex flex-col gap-1 py-4`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              className="cursor-pointer rounded-2xl px-4 py-3 text-left text-base font-semibold text-ink/90 transition-colors hover:bg-sage/10 hover:text-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-2 flex items-center gap-3 px-4 pt-3">
            <SocialIcons />
          </div>
        </nav>
      </div>
    </header>
  )
}

function SocialIcons() {
  const linkClass =
    'inline-flex h-10 w-10 items-center justify-center rounded-full text-sage-dark transition-colors duration-200 hover:bg-sage hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark'
  return (
    <div className="flex items-center gap-1">
      <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <Instagram className="h-5 w-5" />
      </a>
      <a href={brand.tiktok} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <TikTok className="h-5 w-5" />
      </a>
    </div>
  )
}
