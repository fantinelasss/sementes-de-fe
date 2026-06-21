import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

// Rola para o topo a cada troca de rota (exceto quando há pedido de
// seção específica vindo do header/footer).
function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (!state?.scrollTo) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, state])
  return null
}

export default function App() {
  return (
    <>
      {/* Atalho de acessibilidade: pular para o conteúdo */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sage focus:px-5 focus:py-2.5 focus:font-semibold focus:text-white focus:shadow-soft"
      >
        Pular para o conteúdo
      </a>

      <ScrollToTop />
      <Header />

      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Páginas de produto (e combo): /produto/:slug */}
          <Route path="/produto/:slug" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
