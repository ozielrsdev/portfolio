import { Navbar } from '@/components/navbar'

// Página inicial provisória: o conteúdo real entra nas Fases 3 e 4.
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="inicio" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-display">Em reconstrução</h1>
        <p className="mt-4 text-lead text-muted-foreground">
          Veja o <a href="/design-system" className="text-primary underline underline-offset-4">design system</a>.
        </p>
      </main>
    </>
  )
}
