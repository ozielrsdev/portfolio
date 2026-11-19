'use client'

import { useSyncExternalStore } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import { applyThemeColor } from '@/lib/theme'

function applyTheme() {
  const isDark = document.documentElement.classList.toggle('dark')
  applyThemeColor(isDark)
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  } catch {
    // Navegação privada pode bloquear o storage; o tema só não fica salvo.
  }
}

// O tema novo se espalha em círculo a partir do botão (View Transitions).
// Sem suporte ou com movimento reduzido, troca direto.
function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
  const root = document.documentElement
  root.dataset.themeSwitched = ''
  if (!('startViewTransition' in document) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Troca instantânea sem estado misto: as transições de cor dos botões ficam desligadas por dois quadros.
    root.classList.add('theme-swapping')
    applyTheme()
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-swapping')))
    return
  }
  const rect = event.currentTarget.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  const transition = document.startViewTransition(applyTheme)
  transition.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      // Curva simétrica: a área do círculo cresce com o quadrado do raio, então um início explosivo viraria um flash.
      { duration: 500, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
    )
  })
}

// A classe .dark no <html> é a fonte da verdade (o script do layout a define antes da pintura).
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}
const isDarkNow = () => document.documentElement.classList.contains('dark')
const isDarkOnServer = () => false

// <button> nativo com o visual do Button: evita carregar o Base UI só para um clique.
export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, isDarkNow, isDarkOnServer)

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Tema escuro"
      aria-pressed={isDark}
      className={buttonVariants({ variant: 'ghost', size: 'icon' })}
    >
      <SunIcon className="theme-icon hidden dark:block" aria-hidden />
      <MoonIcon className="theme-icon dark:hidden" aria-hidden />
    </button>
  )
}
