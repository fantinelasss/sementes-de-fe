import Reveal from './Reveal'

// Espaçamento horizontal padrão e largura máxima consistente do site.
export const container = 'mx-auto w-full max-w-6xl px-5 sm:px-8'

/**
 * Section — invólucro de seção com largura máxima e respiro vertical.
 * Props: id, className (extra na <section>), innerClassName (no container).
 */
export default function Section({ id, className = '', innerClassName = '', children }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className={`${container} ${innerClassName}`}>{children}</div>
    </section>
  )
}

/**
 * Cabeçalho de seção: eyebrow (rótulo pequeno) + título + subtítulo.
 * Centralizado por padrão; passe align="left" para alinhar à esquerda.
 */
export function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-sage-dark">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold">{title}</h2>
      {subtitle ? <p className="text-lg text-muted leading-relaxed">{subtitle}</p> : null}
    </Reveal>
  )
}
