import { useEffect, useRef, useState } from 'react'

/**
 * Reveal — revela o conteúdo com um fade/slide suave quando entra na tela.
 * Leve (IntersectionObserver nativo, sem bibliotecas). Respeita
 * prefers-reduced-motion via CSS (.reveal em index.css).
 *
 * Props:
 *  - as: tag a renderizar (padrão "div")
 *  - delay: atraso em ms (escalona itens de uma grade)
 *  - variant: "up" (padrão) | "scale" | "left" | "right" | "fade"
 *  - className: classes extras
 */
const variantClass = {
  up: '',
  scale: 'reveal-scale',
  left: 'reveal-left',
  right: 'reveal-right',
  fade: 'reveal-fade',
}

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  variant = 'up',
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Sem suporte a IO -> mostra direto.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target) // anima só uma vez
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass[variant] || ''} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
