import Section, { SectionHeader } from '../components/Section'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  return (
    <Section id="produtos">
      <SectionHeader
        eyebrow="Nossos Devocionais"
        title="Escolha o devocional para o seu momento"
        subtitle="Conteúdos pensados com carinho para cada fase da vida — do seu tempo a sós com Deus à fé das crianças."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 110} variant="scale" className="h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
