import Section, { SectionHeader } from '../components/Section'
import Reveal from '../components/Reveal'
import { BookOpen, ShieldCheck, BoltMail } from '../components/icons'

const steps = [
  {
    icon: BookOpen,
    title: 'Escolha o devocional',
    text: 'Selecione o devocional ideal para o seu momento — ou leve o Kit Família completo.',
  },
  {
    icon: ShieldCheck,
    title: 'Pague com segurança',
    text: 'Finalize a compra em uma plataforma segura, com os principais meios de pagamento.',
  },
  {
    icon: BoltMail,
    title: 'Receba o PDF na hora',
    text: 'O acesso chega imediatamente no seu e-mail. É só baixar e começar a leitura.',
  },
]

export default function HowItWorks() {
  return (
    <Section id="como-funciona">
      <SectionHeader
        eyebrow="Como funciona"
        title="Simples, rápido e seguro"
        subtitle="Em três passos você já está com o seu devocional em mãos."
      />

      <ol className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-7">
        {steps.map((step, i) => {
          const StepIcon = step.icon
          return (
            <Reveal as="li" key={step.title} delay={i * 120} className="h-full">
              <div className="relative flex h-full flex-col items-center gap-4 rounded-3xl bg-surface p-7 text-center shadow-card ring-1 ring-black/5">
                {/* número do passo */}
                <span className="absolute -top-3 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-gold font-serif text-base font-bold text-white shadow-soft">
                  {i + 1}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage/12 text-sage-dark">
                  <StepIcon className="h-7 w-7" />
                </span>
                <h3 className="font-serif text-xl font-semibold text-sage-dark">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{step.text}</p>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </Section>
  )
}
