import { MobileNav } from '@/components/mobile-nav'
import { NavLinks } from '@/components/nav-links'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex min-h-11 items-center gap-2 font-heading text-xl font-bold uppercase">
          <span className="size-2.5 rounded-full bg-highlight" aria-hidden />
          Oziel Sousa
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
