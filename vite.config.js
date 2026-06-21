import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite + React + TailwindCSS v4 (plugin oficial, sem postcss.config).
//
// `base`: em produção o site é publicado no GitHub Pages em
//   https://SEU-USUARIO.github.io/sementes-de-fe/
// Por isso o build usa base "/sementes-de-fe/". Em desenvolvimento
// (npm run dev) usa "/" normalmente.
// >> Se você RENOMEAR o repositório, troque o nome abaixo. <<
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/sementes-de-fe/' : '/',
  plugins: [react(), tailwindcss()],
}))
