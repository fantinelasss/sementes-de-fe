# Sementes de Fé — Landing page de devocionais

Site de vendas (landing page + páginas de produto) para devocionais cristãos
digitais. Feito com **React + Vite + React Router + TailwindCSS**, mobile-first,
acessível e sem backend.

---

## ▶️ Como rodar localmente

Pré-requisitos: **Node.js 18+** instalado.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # inicia o servidor de desenvolvimento
```

Abra o endereço que aparecer no terminal (geralmente http://localhost:5173).

Outros comandos:

```bash
npm run build    # gera a versão de produção na pasta /dist
npm run preview  # pré-visualiza a versão de produção
```

---

## ✏️ O que você vai editar (e onde)

Quase tudo o que você precisa trocar está em **um único arquivo**:
[`src/data/products.js`](src/data/products.js).

| Quero trocar... | Onde mexer |
|---|---|
| **(a) Preços** | `src/data/products.js` → campo `price` de cada produto e `price`/`oldPrice` do `combo`. |
| **(b) Links de checkout** | `src/data/products.js` → campo `checkoutUrl`. Já preenchido com os links da **Cakto** (abrem em nova aba). Troque ali se mudar. |
| **(c) Textos** | `src/data/products.js` → `name`, `shortDescription`, `longDescription`, `benefits`, e o objeto `brand` (nome, e-mail, Instagram, TikTok). |
| **(d) Imagens (capas)** | Veja a seção abaixo. |

### Trocar as capas dos produtos

As capas são as **imagens reais dos devocionais**, na pasta
[`public/capas/`](public/capas):

- `momentos-com-deus.png`
- `familia.png`
- `fofinho.png`

Cada produto aponta para a sua capa pelo campo `cover` em
`src/data/products.js`. Para trocar uma capa, basta **substituir o arquivo**
correspondente em `public/capas/` (mantendo o mesmo nome) — de preferência no
mesmo formato retrato (proporção A4). Se não houver `cover`, o site mostra
automaticamente um placeholder colorido (em
[`src/components/CoverPlaceholder.jsx`](src/components/CoverPlaceholder.jsx)).

> A imagem de prévia para redes sociais (Open Graph) é configurada em
> [`index.html`](index.html) (`og:image`) — coloque um `public/og-image.png`
> de 1200×630px.

---

## 🗂️ Estrutura do projeto

```
src/
├─ main.jsx                # ponto de entrada + Router
├─ App.jsx                 # layout (Header + rotas + Footer) e scroll
├─ index.css               # tokens de cor/fonte (TailwindCSS v4) e animações
├─ data/
│  └─ products.js          # ⭐ DADOS DA LOJA — edite aqui (preços, textos, links)
├─ lib/
│  └─ accents.js           # cores de destaque por produto
├─ components/             # componentes reutilizáveis
│  ├─ Header.jsx  Footer.jsx  Logo.jsx
│  ├─ Button.jsx  Section.jsx  PriceTag.jsx
│  ├─ ProductCard.jsx  CoverPlaceholder.jsx
│  ├─ Reveal.jsx          # animação de entrada ao rolar
│  ├─ Seo.jsx             # título/meta por página
│  └─ icons.jsx           # ícones SVG (sem emojis)
├─ sections/              # seções da home
│  ├─ Hero.jsx  Products.jsx  ComboOffer.jsx
│  ├─ HowItWorks.jsx  SocialProof.jsx  About.jsx
└─ pages/
   ├─ Home.jsx            # home (todas as seções)
   ├─ Product.jsx         # página de produto /produto/:slug
   └─ NotFound.jsx        # 404
```

---

## 🎨 Identidade visual

- **Cores** e **fontes** ficam em [`src/index.css`](src/index.css) (bloco
  `@theme`). Trocar um valor ali reflete no site inteiro.
- **Tipografia:** Fraunces (títulos) + Quicksand (corpo), via Google Fonts em
  `index.html`.
- **Paleta:** creme `#FBF8F3`, sálvia `#7BA488` / `#5C8161`, dourado `#C7A878`,
  rosa `#D99BB0`, azul `#8AAABE`, texto `#4A4540` / `#7A736C`.

---

## ✅ Boas práticas já incluídas

- **Responsivo** (mobile-first), testado em 360 / 768 / 1280px.
- **Acessibilidade:** HTML semântico, foco visível, `alt` nas imagens,
  navegação por teclado, link "pular para o conteúdo", `prefers-reduced-motion`.
- **SEO básico:** `title`, `meta description`, Open Graph e hierarquia de
  headings correta (um `<h1>` por página).
- **Performance:** sem bibliotecas pesadas; animações via CSS + IntersectionObserver.

---

## ✍️ Ainda como exemplo (troque quando quiser)

- **Depoimentos** da seção de prova social — edite em
  [`src/sections/SocialProof.jsx`](src/sections/SocialProof.jsx).

## 🚫 O que este projeto **não** faz (proposital)

- Não processa pagamentos nem tem login/backend — o checkout é feito pela Cakto.
- Não usa imagens de terceiros — só as capas dos próprios devocionais.
