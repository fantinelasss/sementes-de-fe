import Section, { SectionHeader } from '../components/Section'
import Reveal from '../components/Reveal'
import { Star, ShieldCheck, BoltMail, Heart } from '../components/icons'

// TODO: troque pelos depoimentos reais (nome, cidade e texto).
const testimonials = [
  {
    quote:
      'Meus filhos pedem para ler o devocional toda noite. Virou o momento mais esperado do nosso dia em família.',
    name: 'Ana Paula',
    role: 'Mãe de 2 · São Paulo, SP',
  },
  {
    quote:
      'Comprei e recebi na hora. Em 15 dias minha rotina de oração mudou completamente. Recomendo de coração.',
    name: 'Marcos Vinícius',
    role: 'Belo Horizonte, MG',
  },
  {
    quote:
      'O livrinho de colorir é uma graça. Minha filha aprende sobre Deus brincando — simples e cheio de amor.',
    name: 'Juliana Costa',
    role: 'Curitiba, PR',
  },
]

const badges = [
  { icon: ShieldCheck, title: 'Pagamento seguro', text: 'Plataforma confiável e criptografada' },
  { icon: BoltMail, title: 'Acesso imediato', text: 'PDF no seu e-mail logo após a compra' },
  { icon: Heart, title: 'Feito com fé', text: 'Conteúdo acolhedor para toda a família' },
]

export default function SocialProof() {
  return (
    <Section className="bg-white/50">
      <SectionHeader
        eyebrow="Quem já vive essa experiência"
        title="Famílias mais perto de Deus, todos os dias"
        subtitle="Histórias de quem já transformou a rotina com os nossos devocionais."
      />

      {/* Depoimentos */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="figure" key={t.name} delay={i * 110} className="h-full">
            <blockquote className="flex h-full flex-col gap-4 rounded-3xl bg-surface p-7 shadow-card ring-1 ring-black/5">
              <div className="flex gap-0.5 text-gold" aria-label="Avaliação 5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-5 w-5" />
                ))}
              </div>
              <p className="flex-1 text-[15px] leading-relaxed text-ink/85">“{t.quote}”</p>
              <figcaption className="flex items-center gap-3 pt-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 font-serif text-lg font-semibold text-sage-dark">
                  {t.name.charAt(0)}
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold text-sage-dark">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </blockquote>
          </Reveal>
        ))}
      </div>

      {/* Selos de confiança */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {badges.map((b, i) => {
          const BadgeIcon = b.icon
          return (
            <Reveal key={b.title} delay={i * 90}>
              <div className="flex items-center gap-4 rounded-2xl bg-cream px-5 py-4 ring-1 ring-sage/15">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sage text-white">
                  <BadgeIcon className="h-6 w-6" />
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold text-sage-dark">{b.title}</span>
                  <span className="block text-sm text-muted">{b.text}</span>
                </span>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
