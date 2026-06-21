import { Link } from 'react-router-dom'
import CoverPlaceholder from './CoverPlaceholder'
import PriceTag from './PriceTag'
import { btn } from './Button'
import { ArrowUpRight } from './icons'

/**
 * ProductCard — card de devocional na home.
 * Clicar no card (capa, nome, preço ou "Comprar") leva direto ao
 * checkout do produto (Cakto), em nova aba. Um link discreto
 * "Ver detalhes" abre a página de vendas interna (/produto/:slug).
 *
 * Os dois links são irmãos (não aninhados) — acessível e válido.
 */
export default function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl bg-surface p-4 shadow-card ring-1 ring-black/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
      {/* Ação principal: comprar (checkout externo) */}
      <a
        href={product.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Comprar o devocional ${product.name}`}
        className="flex flex-1 flex-col rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
      >
        {/* Capa */}
        <div className="overflow-hidden rounded-2xl">
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <CoverPlaceholder item={product} />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col gap-3 px-2 pb-1 pt-5">
          <h3 className="font-serif text-xl font-semibold text-sage-dark">{product.name}</h3>
          <p className="flex-1 text-[15px] leading-relaxed text-muted">
            {product.shortDescription}
          </p>

          <div className="mt-2 flex items-center justify-between gap-3">
            <PriceTag price={product.price} note="pagamento único" />
            <span className={btn({ variant: 'primary', size: 'md' })} aria-hidden="true">
              Comprar
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </a>

      {/* Ação secundária: ver a página de detalhes */}
      <Link
        to={`/produto/${product.slug}`}
        className="mt-3 inline-flex w-fit items-center gap-1 self-center rounded-full px-3 py-1.5 text-sm font-semibold text-muted transition-colors hover:text-sage-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark"
      >
        Ver detalhes do devocional
      </Link>
    </article>
  )
}
