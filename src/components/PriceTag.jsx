/**
 * PriceTag — preço em destaque na cor dourada, com preço antigo opcional.
 * Props:
 *  - price: string já formatada (ex.: "R$ 19,90")
 *  - oldPrice: string opcional (mostrada riscada)
 *  - size: "md" | "lg"
 *  - note: texto pequeno abaixo (ex.: "pagamento único")
 */
export default function PriceTag({ price, oldPrice, size = 'md', note, className = '' }) {
  const priceSize = size === 'lg' ? 'text-4xl sm:text-5xl' : 'text-3xl'
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {oldPrice ? (
          <span className="text-base font-medium text-muted line-through decoration-blush/70 decoration-2">
            {oldPrice}
          </span>
        ) : null}
        <span className={`font-serif font-semibold leading-none text-gold-dark ${priceSize}`}>
          {price}
        </span>
      </div>
      {note ? <span className="text-sm text-muted">{note}</span> : null}
    </div>
  )
}
