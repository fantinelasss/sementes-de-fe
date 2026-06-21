import { Link } from 'react-router-dom'
import { brand } from '../data/products'
import { Seedling } from './icons'

// Marca: símbolo (broto) + nome em serifada. Clica e volta para a home.
export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      aria-label={`${brand.name} — página inicial`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-white shadow-soft transition-transform duration-200 group-hover:scale-105">
        <Seedling className="h-6 w-6" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold text-sage-dark">{brand.name}</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          Devocionais
        </span>
      </span>
    </Link>
  )
}
