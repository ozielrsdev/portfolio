'use client'

import { useEffect, useState } from 'react'
import { NAV_ITEMS } from '@/lib/nav'
import { cn } from '@/lib/utils'

/**
 * Links do menu do topo. Marca com aria-current a seção que ocupa o meio da tela;
 * o traço sob o link vem do CSS (.nav-link). Sem JS, os links funcionam normalmente, só sem a marcação.
 */
export function NavLinks() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ href }) => document.getElementById(href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    )
    // Faixa fina no meio da tela: a seção que passa por ela é a atual.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    // Acima da primeira seção (no hero), nenhum link fica marcado.
    const first = sections[0]
    const onScroll = () => {
      if (first && first.getBoundingClientRect().top > innerHeight / 2) setActive(null)
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <ul className="flex items-center gap-1">
      {NAV_ITEMS.map(({ href, label }) => {
        const current = active === href.slice(1)
        return (
          <li key={href}>
            <a
              href={href}
              aria-current={current ? 'true' : undefined}
              className={cn(
                'nav-link flex min-h-11 items-center rounded-lg px-3 font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
                current && 'text-foreground',
              )}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
