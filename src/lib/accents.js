// Mapa de "accent" (chave usada nos produtos) -> cores da paleta.
// Centraliza os tons usados nas capas-placeholder, selos e detalhes,
// para manter tudo dentro da identidade visual da marca.
export const accents = {
  sage: {
    from: '#8FB89C',
    to: '#5C8161',
    solid: '#7BA488',
    soft: 'rgba(123, 164, 136, 0.14)',
    text: '#5C8161',
  },
  sky: {
    from: '#A6C2D2',
    to: '#6E92A8',
    solid: '#8AAABE',
    soft: 'rgba(138, 170, 190, 0.16)',
    text: '#3F6076',
  },
  blush: {
    from: '#EBB7C8',
    to: '#C77F99',
    solid: '#D99BB0',
    soft: 'rgba(217, 155, 176, 0.16)',
    text: '#A85C77',
  },
  gold: {
    from: '#DCC59B',
    to: '#B8945E',
    solid: '#C7A878',
    soft: 'rgba(199, 168, 120, 0.18)',
    text: '#A8884F',
  },
}

export function getAccent(name) {
  return accents[name] || accents.sage
}
