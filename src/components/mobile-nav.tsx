'use client'

import { useRef } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import { NAV_ITEMS } from '@/lib/nav'
import { cn } from '@/lib/utils'

const MENU_ID = 'menu-mobile'

/**
 * Menu mobile com a Popover API nativa: foco, Esc e clique fora já vêm do navegador,
 * sem carregar biblioteca de diálogo. O JS aqui só fecha o menu ao escolher uma âncora.
 */
export function MobileNav() {
  const menuRef = useRef<HTMLDivElement>(null)
  const closeMenu = () => menuRef.current?.hidePopover()

  return (
    <>
      <button
        type="button"
        popoverTarget={MENU_ID}
        aria-label="Abrir menu"
        className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'md:hidden')}
      >
        <MenuIcon aria-hidden />
      </button>

      <div
        ref={menuRef}
        id={MENU_ID}
        popover="auto"
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-4/5 max-w-sm border-l bg-popover p-4 text-popover-foreground shadow-lg backdrop:bg-foreground/30 md:hidden"
      >
        <div className="flex items-center justify-between">
          <p className="font-heading text-xl font-bold uppercase">Navegação</p>
          <button
            type="button"
            popoverTarget={MENU_ID}
            popoverTargetAction="hide"
            aria-label="Fechar menu"
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
          >
            <XIcon aria-hidden />
          </button>
        </div>
        <nav aria-label="Principal (celular)" className="mt-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center rounded-lg px-3 text-lg font-semibold hover:bg-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
