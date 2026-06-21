import Seo from '../components/Seo'
import Button from '../components/Button'
import { container } from '../components/Section'
import { Seedling, ArrowLeft } from '../components/icons'

export default function NotFound() {
  return (
    <div className={`${container} flex min-h-[70vh] flex-col items-center justify-center py-24 text-center`}>
      <Seo title="Página não encontrada — Sementes de Fé" description="A página que você procura não foi encontrada." />
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/12 text-sage-dark">
        <Seedling className="h-8 w-8" />
      </span>
      <p className="mt-6 font-serif text-6xl font-semibold text-sage-dark">404</p>
      <h1 className="mt-2 text-2xl font-semibold">Página não encontrada</h1>
      <p className="mt-3 max-w-md text-muted">
        O conteúdo que você procura pode ter mudado de lugar. Volte para a home e continue a sua
        leitura.
      </p>
      <Button to="/" size="lg" className="mt-8">
        <ArrowLeft className="h-5 w-5" />
        Voltar para a home
      </Button>
    </div>
  )
}
