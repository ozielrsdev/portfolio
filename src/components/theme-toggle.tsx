'use client'

import { useSyncExternalStore } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import { applyThemeColor } from '@/lib/theme'

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark')
  applyThemeColor(isDark)
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  } catch {
    // Navegação privada pode bloquear o storage; o tema só não fica salvo.
  }
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
      <SunIcon className="hidden dark:block" aria-hidden />
      <MoonIcon className="dark:hidden" aria-hidden />
    </button>
  )
}
