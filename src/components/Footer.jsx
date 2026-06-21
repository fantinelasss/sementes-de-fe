import { useLocation, useNavigate } from 'react-router-dom'
import { brand } from '../data/products'
import { container } from './Section'
import { Seedling, Instagram, TikTok, ShieldCheck } from './icons'

const footerLinks = [
  { id: 'produtos', label: 'Produtos' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
]

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()
  const year = new Date().getFullYear()

  const goToSection = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <footer id="contato" className="mt-8 border-t border-ink/10 bg-cream">
      <div className={`${container} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
        {/* Marca */}
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-white">
              <Seedling className="h-6 w-6" />
            </span>
            <span className="font-serif text-lg font-semibold text-sage-dark">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
            Devocionais cristãos digitais feitos com carinho para fortalecer a sua fé e a da sua
            família, um dia de cada vez.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sage-dark shadow-soft transition-colors hover:bg-sage hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={brand.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sage-dark shadow-soft transition-colors hover:bg-sage hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark"
            >
              <TikTok className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          <h2 className="font-serif text-base font-semibold text-sage-dark">Navegação</h2>
          {footerLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goToSection(link.id)}
              className="w-fit cursor-pointer text-left text-[15px] text-muted transition-colors hover:text-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Contato */}
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-base font-semibold text-sage-dark">Contato</h2>
          <a
            href={`mailto:${brand.email}`}
            className="w-fit text-[15px] text-muted transition-colors hover:text-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark"
          >
            {brand.email}
          </a>
          <p className="mt-2 inline-flex items-center gap-2 text-[15px] text-muted">
            <ShieldCheck className="h-5 w-5 text-sage" />
            Compra 100% segura
          </p>
        </div>
      </div>

      {/* Base */}
      <div className="border-t border-ink/10">
        <div
          className={`${container} flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-muted sm:flex-row sm:text-left`}
        >
          <p>
            © {year} {brand.name}. Todos os direitos reservados.
          </p>
          <p>Pagamento processado por plataforma segura.</p>
        </div>
      </div>
    </footer>
  )
}
