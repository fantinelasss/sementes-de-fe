import { Link } from 'react-router-dom'

// Estilos compartilhados do botão. Exportados também como helper `btn()`
// para que elementos não interativos (ex.: o "Ver produto" dentro de um
// card que já é um link) possam ter exatamente a mesma aparência.
const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold ' +
  'transition-[transform,box-shadow,background-color,color] duration-200 ease-out ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-cream ' +
  'active:translate-y-px select-none'

const variants = {
  // Primário — verde sálvia
  primary:
    'bg-sage text-white shadow-soft hover:bg-sage-dark hover:shadow-card-hover hover:-translate-y-0.5',
  // Secundário — dourado (preços/ofertas)
  gold:
    'bg-gold text-white shadow-soft hover:bg-gold-dark hover:shadow-glow-gold hover:-translate-y-0.5',
  // Contorno — sobre fundo creme/branco
  outline:
    'border-2 border-sage/60 text-sage-dark bg-white/40 hover:bg-white hover:border-sage hover:-translate-y-0.5',
  // Suave — fundo translúcido claro
  soft:
    'bg-sage/10 text-sage-dark hover:bg-sage/20 hover:-translate-y-0.5',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
  xl: 'px-8 py-4 text-lg',
}

export function btn({ variant = 'primary', size = 'md', className = '' } = {}) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim()
}

/**
 * Botão polimórfico:
 *  - `to`   -> <Link> do React Router (navegação SPA interna)
 *  - `href` -> <a> (links externos, ex.: checkout)
 *  - senão  -> <button>
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  children,
  ...props
}) {
  const classes = btn({ variant, size, className }) + ' cursor-pointer'

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
