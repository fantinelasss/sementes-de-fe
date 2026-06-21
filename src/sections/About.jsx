import Section, { container } from '../components/Section'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { combo } from '../data/products'
import { Seedling, ArrowUpRight } from '../components/icons'

export default function About() {
  return (
    <Section id="sobre">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#7BA488] to-[#5C8161] px-7 py-12 text-center text-white shadow-card sm:px-12 sm:py-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/30 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
            <Seedling className="h-7 w-7" />
          </span>

          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Nossa missão</h2>

          <p className="text-lg leading-relaxed text-white/90">
            A <strong>Sementes de Fé</strong> nasceu do desejo de levar momentos de paz e oração
            para o dia a dia das famílias. Acreditamos que pequenas sementes plantadas todos os
            dias — uma leitura, uma oração, um tempo com Deus — florescem em fé, gratidão e amor.
            Cada devocional é feito com cuidado para caber na sua rotina e tocar o seu coração.
          </p>

          <p className="font-serif text-xl italic text-white/85">
            “Tudo posso naquele que me fortalece.” — Filipenses 4:13
          </p>

          <Button
            variant="gold"
            size="lg"
            href={combo.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            Comece pelo Kit Família
            <ArrowUpRight className="h-5 w-5" />
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}
