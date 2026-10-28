import { cacheLife } from 'next/cache'
import Link from 'next/link'
import { PROFILE } from '@/content/site'

// Calculado no build e reaproveitado; um novo deploy atualiza o ano.
async function getYear() {
  'use cache'
  cacheLife('max')
  return new Date().getFullYear()
}

export async function Footer() {
  const year = await getYear()

  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {year} {PROFILE.name}
        </p>
        <p>
          Feito com Next.js e Tailwind CSS ·{' '}
          <Link href="/design-system" className="underline underline-offset-4 hover:text-foreground">
            Design system
          </Link>
        </p>
      </div>
    </footer>
  )
}
