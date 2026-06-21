import { Link } from 'react-router-dom'
import Section, { container } from '../components/Section'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import PriceTag from '../components/PriceTag'
import CoverPlaceholder from '../components/CoverPlaceholder'
import { combo, products } from '../data/products'
import { ArrowUpRight, Check, Sparkle } from '../components/icons'

export default function ComboOffer() {
  return (
    <section className="py-8 sm:py-12">
      <div className={container}>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FCF6EA] to-[#F3E7CF] p-7 shadow-glow-gold ring-1 ring-gold/30 sm:p-10 lg:p-12">
          {/* brilho decorativo */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/25 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              {/* selo */}
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-soft">
                <Sparkle className="h-4 w-4" />
                {combo.badge}
              </span>

              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">{combo.name}</h2>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/80">
                Leve os <strong className="text-sage-dark">3 devocionais juntos</strong> e crie uma
                rotina de fé para a casa toda — do adulto à criança.
              </p>

              {/* o que inclui */}
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {combo.includes.map((name) => (
                  <li key={name} className="flex items-center gap-2.5 text-[15px] text-ink/85">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                      <Check className="h-4 w-4" />
                    </span>
                    {name}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <PriceTag
                  price={combo.price}
                  oldPrice={combo.oldPrice}
                  size="lg"
                  note="pagamento único · acesso imediato"
                />
                <div className="flex flex-col items-start gap-2">
                  <Button
                    variant="gold"
                    size="lg"
                    href={combo.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Quero o Kit Família
                    <ArrowUpRight className="h-5 w-5" />
                  </Button>
                  <Link
                    to={`/produto/${combo.slug}`}
                    className="rounded-full px-2 py-1 text-sm font-semibold text-gold-dark/90 transition-colors hover:text-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
                  >
                    Ver detalhes do kit
                  </Link>
                </div>
              </div>
            </div>

            {/* mini-pilha de capas */}
            <div className="relative mx-auto hidden h-56 w-64 lg:block" aria-hidden="true">
              <div className="absolute left-0 top-4 w-32 -rotate-6">
                <CoverPlaceholder item={products[1]} showSpine={false} />
              </div>
              <div className="absolute right-0 top-0 w-32 rotate-6">
                <CoverPlaceholder item={products[2]} showSpine={false} />
              </div>
              <div className="absolute left-1/2 top-10 w-36 -translate-x-1/2 drop-shadow-xl">
                <CoverPlaceholder item={products[0]} showSpine={false} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
