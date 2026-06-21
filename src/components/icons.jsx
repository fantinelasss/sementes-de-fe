// Ícones em SVG (viewBox 24x24). Sem emojis — conforme boas práticas.
// Todos aceitam className para tamanho/cor (usam currentColor por padrão).

function Icon({ children, className = 'h-6 w-6', label, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={label ? undefined : 'true'}
      role={label ? 'img' : undefined}
      aria-label={label}
      {...props}
    >
      {label ? <title>{label}</title> : null}
      {children}
    </svg>
  )
}

export const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
)

export const ArrowLeft = (p) => (
  <Icon {...p}>
    <path d="M19 12H5" />
    <path d="m11 18-6-6 6-6" />
  </Icon>
)

// Seta diagonal — sinaliza link externo (abre o checkout em nova aba)
export const ArrowUpRight = (p) => (
  <Icon {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Icon>
)

// Carrinho / sacola de compra
export const Cart = (p) => (
  <Icon {...p}>
    <path d="M6 6h15l-1.5 9h-12z" />
    <path d="M6 6 5 3H3" />
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
  </Icon>
)

export const Check = (p) => (
  <Icon {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
)

export const ShieldCheck = (p) => (
  <Icon {...p}>
    <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
)

export const BoltMail = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
)

export const Bolt = (p) => (
  <Icon {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </Icon>
)

export const Heart = (p) => (
  <Icon {...p}>
    <path d="M12 20s-7-4.4-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5C19 15.6 12 20 12 20Z" />
  </Icon>
)

export const BookOpen = (p) => (
  <Icon {...p}>
    <path d="M12 6c-1.5-1.2-4-2-6.5-2A2.5 2.5 0 0 0 3 6.5v11A2 2 0 0 0 5 19.5c2.3 0 4.7.6 7 2 2.3-1.4 4.7-2 7-2A2 2 0 0 0 21 17.5v-11A2.5 2.5 0 0 0 18.5 4C16 4 13.5 4.8 12 6Z" />
    <path d="M12 6v14" />
  </Icon>
)

export const Sparkle = (p) => (
  <Icon {...p}>
    <path d="M12 3c.4 3.6 1.4 4.6 5 5-3.6.4-4.6 1.4-5 5-.4-3.6-1.4-4.6-5-5 3.6-.4 4.6-1.4 5-5Z" />
    <path d="M19 14c.2 1.6.7 2.1 2.3 2.3-1.6.2-2.1.7-2.3 2.3-.2-1.6-.7-2.1-2.3-2.3 1.6-.2 2.1-.7 2.3-2.3Z" />
  </Icon>
)

// Broto / semente — símbolo da marca
export const Seedling = (p) => (
  <Icon {...p}>
    <path d="M12 21v-7" />
    <path d="M12 14c0-3.5-2-6.5-6-7 0 4 2.5 6.5 6 7Z" />
    <path d="M12 12c0-2.8 1.8-5.2 5-5.6 0 3.2-2 5.2-5 5.6Z" />
  </Icon>
)

export const Menu = (p) => (
  <Icon {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Icon>
)

export const Close = (p) => (
  <Icon {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Icon>
)

export const Star = ({ className = 'h-5 w-5', label, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden={label ? undefined : 'true'}
    role={label ? 'img' : undefined}
    {...props}
  >
    {label ? <title>{label}</title> : null}
    <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.98 6.1 20.67l1.13-6.57L2.45 9.44l6.6-.96L12 2.5Z" />
  </svg>
)

// Marcas — caminhos oficiais (Simple Icons)
export const Instagram = ({ className = 'h-5 w-5', label = 'Instagram', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" role="img" aria-label={label} {...props}>
    <title>{label}</title>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.18.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.18.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.18-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.18a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.76-.07Zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92Zm0 1.62a3.84 3.84 0 1 0 0 7.68 3.84 3.84 0 0 0 0-7.68Zm5.65-.93a1.28 1.28 0 1 1 0 2.55 1.28 1.28 0 0 1 0-2.55Z" />
  </svg>
)

export const TikTok = ({ className = 'h-5 w-5', label = 'TikTok', ...props }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" role="img" aria-label={label} {...props}>
    <title>{label}</title>
    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.2v12.86a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 1 1 .73-5.1V7.97a5.85 5.85 0 0 0-.73-.05A5.82 5.82 0 1 0 15.4 13.7V8.32a7.5 7.5 0 0 0 4.4 1.41V6.53a4.28 4.28 0 0 1-3.2-.71Z" />
  </svg>
)
