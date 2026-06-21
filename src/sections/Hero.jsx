import { useEffect, useRef } from 'react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import CoverPlaceholder from '../components/CoverPlaceholder'
import { container } from '../components/Section'
import { products } from '../data/products'
import { ArrowRight, ShieldCheck, BoltMail, Sparkle } from '../components/icons'

export default function Hero() {
  const stackRef = useRef(null)

  const scrollToProducts = () =>
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })

  // Parallax suave: a pilha de capas acompanha o ponteiro (só no desktop
  // e quando o usuário não prefere menos movimento).
  useEffect(() => {
    const el = stackRef.current
    if (!el || typeof matchMedia === 'undefined') return
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const fine = matchMedia('(hover: hover) and (pointer: fine)')
    if (reduced.matches || !fine.matches) return

    let raf = 0
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x * 20}px, ${y * 16}px, 0) rotateX(${-y * 4}deg) rotateY(${x * 6}deg)`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = ''
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* Blobs decorativos suaves (dentro da paleta) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <span className="animate-drift absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sage/20 blur-3xl" />
        <span className="animate-drift absolute top-10 right-[-6rem] h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <span className="absolute bottom-[-6rem] left-1/3 h-72 w-72 rounded-full bg-blush/15 blur-3xl" />
      </div>

      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]`}>
        {/* Texto */}
        <div className="text-center lg:text-left">
          <Reveal
            as="span"
            variant="fade"
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-sage-dark shadow-soft ring-1 ring-sage/15"
          >
            <Sparkle className="h-4 w-4 text-gold" />
            Devocionais cristãos em PDF
          </Reveal>

          <Reveal as="h1" delay={80} className="mt-6 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Momentos diários para fortalecer a sua{' '}
            <span className="text-gold-dark">fé</span> e a da sua{' '}
            <span className="text-gold-dark">família</span>
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0"
          >
            Devocionais acolhedores para criar uma rotina de paz, oração e renovação — para você,
            para a família e para os pequenos. Receba na hora, no seu e-mail.
          </Reveal>

          <Reveal
            delay={240}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start"
          >
            <Button size="lg" onClick={scrollToProducts}>
              Ver devocionais
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" to="/produto/combo">
              Conhecer o Kit Família
            </Button>
          </Reveal>

          {/* Selos de confiança */}
          <Reveal
            delay={320}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted lg:justify-start"
          >
            <span className="inline-flex items-center gap-2">
              <BoltMail className="h-5 w-5 text-sage" />
              Acesso imediato por e-mail
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-sage" />
              Pagamento 100% seguro
            </span>
          </Reveal>
        </div>

        {/* Ilustração: pilha de capas reais flutuando + parallax */}
        <Reveal
          delay={200}
          variant="scale"
          className="relative mx-auto w-full max-w-md [perspective:1200px] lg:max-w-none"
        >
          <div ref={stackRef} className="parallax relative mx-auto aspect-square max-w-[28rem]">
            <div className="animate-float absolute left-0 top-6 w-1/2 -rotate-6">
              <CoverPlaceholder item={products[1]} />
            </div>
            <div className="animate-float-slow absolute right-0 top-0 w-1/2 rotate-6">
              <CoverPlaceholder item={products[2]} />
            </div>
            <div className="animate-float absolute left-1/2 bottom-0 w-[56%] -translate-x-1/2 drop-shadow-2xl">
              <CoverPlaceholder item={products[0]} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
