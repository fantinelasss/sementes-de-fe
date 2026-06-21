import { getAccent } from '../lib/accents'
import { BookOpen, Heart, Seedling, Sparkle } from './icons'

// ============================================================
//  CAPA do devocional.
//  - Se o produto tem `cover` (em src/data/products.js), mostra a
//    imagem real com um acabamento de "capa de livro".
//  - Senão, gera um placeholder estilizado dentro da paleta.
//  Para trocar a capa: substitua o arquivo em /public/capas/.
// ============================================================

// Proporção das capas (A4 retrato). Mantém a imagem inteira, sem cortes.
const COVER_RATIO = 'aspect-[1308/1852]'

const iconByAccent = {
  sage: BookOpen,
  sky: Heart,
  blush: Sparkle,
  gold: Seedling,
}

// Resolve um caminho de /public respeitando a base do site
// (em produção o site fica em /sementes-de-fe/). Ex.: "/capas/x.png".
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export default function CoverPlaceholder({ item, className = '', showSpine = true }) {
  // ---- Imagem real -------------------------------------------------
  if (item.cover) {
    return (
      <div
        className={`group/cover relative ${COVER_RATIO} w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 ${className}`}
      >
        <img
          src={asset(item.cover)}
          alt={`Capa do devocional ${item.name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        {/* lombada (sombra na borda esquerda) — dá profundidade de livro */}
        {showSpine ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/15 to-transparent"
          />
        ) : null}
        {/* brilho diagonal sutil que passa no hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/25"
        />
      </div>
    )
  }

  // ---- Placeholder estilizado (fallback) ---------------------------
  const accent = getAccent(item.accent)
  const GlyphIcon = iconByAccent[item.accent] || BookOpen

  return (
    <div
      className={`relative ${COVER_RATIO} flex w-full flex-col items-center justify-between overflow-hidden rounded-2xl p-6 text-white shadow-card ${className}`}
      style={{ background: `linear-gradient(150deg, ${accent.from} 0%, ${accent.to} 100%)` }}
      role="img"
      aria-label={`Capa ilustrativa do devocional ${item.name}`}
    >
      {showSpine ? (
        <span className="absolute left-3 top-3 bottom-3 w-1 rounded-full bg-white/30" aria-hidden="true" />
      ) : null}
      <span
        className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl"
        aria-hidden="true"
      />
      <p className="z-10 mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
        Sementes de Fé
      </p>
      <div className="z-10 flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40">
          <GlyphIcon className="h-8 w-8" />
        </span>
        <p className="font-serif text-xl font-semibold leading-tight">{item.name}</p>
      </div>
      <p className="z-10 text-xs font-medium text-white/85">{item.audience}</p>
    </div>
  )
}
