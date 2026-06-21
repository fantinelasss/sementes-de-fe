import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter: rotas ficam após o "#" (ex.: .../sementes-de-fe/#/produto/familia).
// É a forma mais confiável de rodar uma SPA no GitHub Pages — links diretos e
// "atualizar a página" sempre funcionam, sem depender de configuração do servidor.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
