import { useEffect } from 'react'

// Atualiza <title> e metatags por página (SEO básico em SPA).
// Sem dependências externas (react-helmet etc.).
function setMeta(selector, attr, value) {
  if (!value) return
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [key, val] = selector.replace(/meta\[|\]/g, '').split('=')
    el.setAttribute(key, val.replace(/["']/g, ''))
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
  }, [title, description])

  return null
}
