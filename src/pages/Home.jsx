import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import Products from '../sections/Products'
import ComboOffer from '../sections/ComboOffer'
import HowItWorks from '../sections/HowItWorks'
import SocialProof from '../sections/SocialProof'
import About from '../sections/About'

export default function Home() {
  const location = useLocation()

  // Ao chegar de outra página pedindo uma seção (header/footer),
  // rola suavemente até ela.
  useEffect(() => {
    const id = location.state?.scrollTo
    if (id) {
      // pequeno atraso para garantir que a seção já foi montada
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }),
      )
    }
  }, [location.state])

  return (
    <>
      <Seo
        title="Sementes de Fé — Devocionais cristãos para o seu dia"
        description="Devocionais cristãos digitais em PDF para fortalecer a sua fé e a da sua família. Acesso imediato e pagamento seguro."
      />
      <Hero />
      <Products />
      <ComboOffer />
      <HowItWorks />
      <SocialProof />
      <About />
    </>
  )
}
