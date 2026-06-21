import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Button from '../components/Button'
import PriceTag from '../components/PriceTag'
import CoverPlaceholder from '../components/CoverPlaceholder'
import Reveal from '../components/Reveal'
import { container } from '../components/Section'
import { getItemBySlug, products } from '../data/products'
import { getAccent } from '../lib/accents'
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck, BoltMail } from '../components/icons'
import NotFound from './NotFound'

export default function Product() {
  const { slug } = useParams()
  const item = getItemBySlug(slug)

  // Slug inexistente -> 404 amigável.
  if (!item) return <NotFound />

  const accent = getAccent(item.accent)
  const isCombo = Boolean(item.includes)

  return (
    <div className="pt-24 pb-20 sm:pt-28">
      <Seo
        title={`${item.name} — Sementes de Fé`}
        description={item.shortDescription}
      />

      <div className={container}>
        {/* Voltar */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-sage-dark transition-colors hover:bg-sage/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-dark"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a home
        </Link>

        <div className="mt-6 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Coluna da capa / mockup */}
          <Reveal className="lg:sticky lg:top-24">
            <div
              className="relative overflow-hidden rounded-[2rem] p-6 sm:p-10"
              style={{ background: accent.soft }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl"
                style={{ background: accent.soft }}
              />
              {isCombo ? (
                // Combo: mostra a pilha das 3 capas.
                <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80" aria-hidden="true">
                  <div className="absolute left-2 top-8 w-2/5 -rotate-6">
                    <CoverPlaceholder item={products[1]} />
                  </div>
                  <div className="absolute right-2 top-2 w-2/5 rotate-6">
                    <CoverPlaceholder item={products[2]} />
                  </div>
                  <div className="absolute left-1/2 top-12 w-[44%] -translate-x-1/2 drop-shadow-2xl">
                    <CoverPlaceholder item={products[0]} />
                  </div>
                </div>
              ) : (
                <div className="mx-auto max-w-xs">
                  {/* Área da capa/mockup — vira <img/> automaticamente ao
                      definir `cover` no produto (src/data/products.js). */}
                  <CoverPlaceholder item={item} />
                </div>
              )}
            </div>
          </Reveal>

          {/* Coluna de conteúdo */}
          <div>
            {item.badge ? (
              <span className="inline-flex items-center rounded-full bg-gold px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-soft">
                {item.badge}
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-sage/12 px-4 py-1.5 text-sm font-semibold text-sage-dark">
                {item.audience}
              </span>
            )}

            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{item.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{item.shortDescription}</p>

            {/* Descrição longa (edite em src/data/products.js) */}
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/85">
              {(Array.isArray(item.longDescription)
                ? item.longDescription
                : [item.longDescription]
              ).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* O que inclui (apenas no combo) */}
            {isCombo ? (
              <div className="mt-7">
                <h2 className="font-serif text-lg font-semibold text-sage-dark">O que está incluído</h2>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {item.includes.map((name) => (
                    <li key={name} className="flex items-center gap-2.5 text-[15px] text-ink/85">
                      <Check className="h-5 w-5 flex-none text-sage" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Benefícios */}
            <div className="mt-7">
              <h2 className="font-serif text-lg font-semibold text-sage-dark">O que você recebe</h2>
              <ul className="mt-3 grid gap-3">
                {item.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-[15px] text-ink/85">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                      <Check className="h-4 w-4" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Caixa de compra */}
            <div className="mt-9 rounded-3xl bg-surface p-6 shadow-card ring-1 ring-black/5 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <PriceTag
                  price={item.price}
                  oldPrice={item.oldPrice}
                  size="lg"
                  note="pagamento único · acesso imediato"
                />

                {/* ====================================================
                    BOTÃO DE COMPRA
                    O link de checkout (Cakto) fica no campo `checkoutUrl`
                    do produto em src/data/products.js. Abre em nova aba.
                    ==================================================== */}
                <Button
                  variant="gold"
                  size="xl"
                  href={item.checkoutUrl}
                  // remova target/rel se quiser abrir o checkout na mesma aba
                  target={item.checkoutUrl !== '#' ? '_blank' : undefined}
                  rel={item.checkoutUrl !== '#' ? 'noopener noreferrer' : undefined}
                  className="w-full sm:w-auto"
                >
                  Comprar agora
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/10 pt-4 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-sage" />
                  Pagamento 100% seguro
                </span>
                <span className="inline-flex items-center gap-2">
                  <BoltMail className="h-5 w-5 text-sage" />
                  Receba o PDF no e-mail
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
