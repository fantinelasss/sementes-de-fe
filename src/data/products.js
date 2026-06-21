// ============================================================
//  DADOS DA LOJA — EDITE AQUI
// ------------------------------------------------------------
//  (a) PREÇOS .......... campo `price` (e `oldPrice` no combo)
//  (b) LINKS CHECKOUT .. campo `checkoutUrl` (já preenchidos com
//                        os links da Cakto). É só trocar se mudar.
//  (c) TEXTOS .......... name, shortDescription, longDescription,
//                        benefits, e o objeto `brand` abaixo.
//  (d) IMAGENS ......... campo `cover` aponta para /public/capas/.
//                        Troque o arquivo lá para mudar a capa.
// ============================================================

// Informações gerais da marca (usadas no header, footer e SEO)
export const brand = {
  name: 'Sementes de Fé',
  tagline: 'Devocionais cristãos para o seu dia',
  email: 'sementesdasfes@gmail.com',
  instagram: 'https://www.instagram.com/sementesdasfes/',
  tiktok: 'https://www.tiktok.com/@sementesdasfes',
}

// Devocionais individuais — os cards da home são renderizados a partir daqui.
export const products = [
  {
    slug: 'momentos-com-deus',
    name: 'Momentos com Deus',
    audience: 'Devocional pessoal · 15 dias',
    shortDescription:
      'Devocional pessoal de 15 dias para um tempo diário de fé, paz e renovação.',
    longDescription: [
      'Um convite para desacelerar e reservar, todos os dias, um momento só seu com Deus. Ao longo de 15 dias você recebe uma palavra, uma reflexão curta e uma oração para acalmar o coração, renovar as forças e cultivar a gratidão em meio à correria.',
      'É um material leve, bonito e fácil de seguir — perfeito para começar ou retomar a sua rotina de fé, no seu tempo e no seu ritmo.',
    ],
    price: 'R$ 19,90',
    accent: 'sage',
    cover: '/capas/momentos-com-deus.png',
    benefits: [
      '15 dias de meditações curtas e práticas',
      'Um versículo e uma oração para cada dia',
      'Espaço para anotações pessoais',
      'PDF para ler no celular, tablet ou imprimir',
    ],
    // Link de checkout (Cakto) — produto adulto
    checkoutUrl: 'https://pay.cakto.com.br/39y6dsg_936157',
  },
  {
    slug: 'familia',
    name: 'Momento com Deus em Família',
    audience: 'Pais e filhos · 15 dias',
    shortDescription:
      '15 dias de devocional para pais e filhos viverem a fé juntos, com atividades e orações.',
    longDescription: [
      'Uma forma simples e gostosa de aproximar a família de Deus. São 15 encontros pensados para pais e filhos lerem juntos, conversarem sobre o que aprenderam e orarem em união — fortalecendo os laços de casa e a fé de cada um.',
      'Com linguagem acolhedora e atividades para fazer em conjunto, vira aquele momento especial do dia que as crianças vão esperar com carinho.',
    ],
    price: 'R$ 19,90',
    accent: 'sky',
    cover: '/capas/familia.png',
    benefits: [
      '15 encontros para fazer em família',
      'Atividades e perguntas para conversar',
      'Orações curtas para pais e filhos',
      'PDF fácil de ler ou imprimir',
    ],
    // Link de checkout (Cakto) — devocional em família
    checkoutUrl: 'https://pay.cakto.com.br/ah3nppg_936177',
  },
  {
    slug: 'fofinho',
    name: 'Devocional Fofinho',
    audience: 'Crianças pequenas · Colorir',
    shortDescription:
      'Livrinho de colorir devocional para as crianças pequenas conhecerem o amor de Deus.',
    longDescription: [
      'Um livrinho cheio de fofura para os pequenos descobrirem o amor de Deus brincando. Com desenhos para colorir, figurinhas e frases simples, a criança aprende sobre a fé de um jeito leve, divertido e cheio de cor.',
      'Ideal para os primeiros passos na vida com Deus — perfeito para imprimir em casa e guardar de recordação.',
    ],
    price: 'R$ 19,90',
    accent: 'blush',
    cover: '/capas/fofinho.png',
    benefits: [
      'Páginas para colorir com desenhos fofos',
      'Frases simples sobre o amor de Deus',
      'Ideal para crianças pequenas',
      'PDF pronto para imprimir em casa',
    ],
    // Link de checkout (Cakto) — devocional fofinho
    checkoutUrl: 'https://pay.cakto.com.br/i78h9ro_936205',
  },
]

// Oferta combo — os 3 devocionais juntos com preço promocional.
export const combo = {
  slug: 'combo',
  name: 'Kit Família Completo',
  audience: 'Os 3 devocionais juntos',
  shortDescription:
    'Os 3 devocionais juntos por um preço especial — para a família toda viver a fé.',
  longDescription: [
    'O jeito mais completo (e mais econômico) de levar fé para a casa toda. O Kit Família Completo reúne os três devocionais — um para o seu tempo pessoal, um para a família e um para as crianças — por um valor único e especial.',
    'Tudo o que você precisa para criar uma rotina diária de oração e gratidão, do adulto ao pequeno, com acesso imediato a todos os PDFs.',
  ],
  price: 'R$ 25,90',
  oldPrice: 'R$ 59,70',
  accent: 'gold',
  badge: 'Mais vantajoso',
  includes: ['Momentos com Deus', 'Momento com Deus em Família', 'Devocional Fofinho'],
  benefits: [
    'Os 3 devocionais em um único kit',
    'Economia de R$ 33,80 em relação a comprar separado',
    'Conteúdo para adultos, família e crianças',
    'Acesso imediato a todos os PDFs',
  ],
  // Link de checkout (Cakto) — Kit Família Completo
  checkoutUrl: 'https://pay.cakto.com.br/3cngcbo_936211',
}

// Lista única (produtos + combo) — usada pela página de produto /produto/:slug
export const allItems = [...products, combo]

// Busca um item (produto ou combo) pelo slug da URL.
export function getItemBySlug(slug) {
  return allItems.find((item) => item.slug === slug)
}
