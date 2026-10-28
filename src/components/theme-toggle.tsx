'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark')
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  } catch {
    // Navegação privada pode bloquear o storage; o tema só não fica salvo.
  }
}

// <button> nativo com o visual do Button: evita carregar o Base UI só para um clique.
export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema claro/escuro"
      className={buttonVariants({ variant: 'ghost', size: 'icon' })}
    >
      <SunIcon className="hidden dark:block" aria-hidden />
      <MoonIcon className="dark:hidden" aria-hidden />
    </button>
  )
}
