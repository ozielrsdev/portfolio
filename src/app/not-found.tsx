import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button-variants'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center gap-6 px-4">
      <p className="font-mono text-sm text-muted-foreground">erro 404</p>
      <h1 className="text-display">Estrada sem saída</h1>
      <p className="text-lead text-muted-foreground">Esta página não existe ou mudou de lugar.</p>
      <Link href="/" className={buttonVariants({ size: 'lg' })}>
        Voltar para o início
      </Link>
    </main>
  )
}
