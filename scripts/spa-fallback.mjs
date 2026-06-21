// Depois do build, copia dist/index.html -> dist/404.html.
// No GitHub Pages, isso faz com que links diretos (ex.: /produto/familia)
// e o "atualizar página" funcionem numa SPA (o 404 carrega o app).
import { copyFileSync, existsSync } from 'node:fs'

const src = 'dist/index.html'
const dest = 'dist/404.html'

if (!existsSync(src)) {
  console.error('build: dist/index.html não encontrado — rode "vite build" antes.')
  process.exit(1)
}

copyFileSync(src, dest)
console.log('✓ dist/404.html criado (fallback de SPA para GitHub Pages)')
