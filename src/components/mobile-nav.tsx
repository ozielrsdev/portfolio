'use client'

import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { NAV_ITEMS } from '@/lib/nav'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />} aria-label="Abrir menu">
        <MenuIcon aria-hidden />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl font-bold uppercase">Navegação</SheetTitle>
        </SheetHeader>
        <nav aria-label="Principal (celular)" className="px-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <SheetClose
                  nativeButton={false}
                  render={<a href={href} />}
                  className="flex min-h-11 items-center rounded-lg px-3 text-lg font-semibold hover:bg-accent"
                >
                  {label}
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
