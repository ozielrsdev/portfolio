'use client'

import { useEffect } from 'react'

/** Elementos que ganham .is-in ao entrar na tela (uma vez só). */
const TARGETS = '.reveal, .section-title, .slots, .photo-plate'
/** Linha da tela, a partir do topo, onde fica a ponta do trilho da trajetória. */
const RAIL_LINE = 0.6

/**
 * Animações ao rolar, iguais em qualquer navegador (Chrome, Firefox/Zen, Safari).
 * Só liga com JS e sem prefers-reduced-motion; caso contrário a página fica no estado final, que é o padrão do CSS.
 */
export function ScrollMotion() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    const targets = [...document.querySelectorAll<HTMLElement>(TARGETS)]

    // O que já está na tela entra direto, sem piscar escondido-e-visível.
    for (const el of targets) {
      const { top, bottom } = el.getBoundingClientRect()
      if (top < innerHeight && bottom > 0) el.classList.add('is-in')
    }
    root.classList.add('js-motion')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    targets.filter((el) => !el.classList.contains('is-in')).forEach((el) => observer.observe(el))

    // Trilho da trajetória: cresce enquanto a lista passa pela linha de 60% da tela; cada ponto acende quando a ponta chega nele.
    const timeline = document.querySelector<HTMLElement>('.timeline')
    const dots = timeline ? [...timeline.querySelectorAll<HTMLElement>('.timeline-dot')] : []
    let frame = 0
    const updateRail = () => {
      frame = 0
      if (!timeline) return
      const line = innerHeight * RAIL_LINE
      const { top, height } = timeline.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, (line - top) / height))
      timeline.style.setProperty('--rail', progress.toFixed(4))
      for (const dot of dots) {
        const { top: dotTop, height: dotHeight } = dot.getBoundingClientRect()
        dot.classList.toggle('is-lit', dotTop + dotHeight / 2 <= line)
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateRail)
    }
    updateRail()
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      removeEventListener('scroll', onScroll)
      removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
      root.classList.remove('js-motion')
    }
  }, [])

  return null
}
