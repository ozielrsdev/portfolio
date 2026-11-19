import { ArrowDownIcon, DownloadIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'
import { PROFILE } from '@/content/site'

// O que um recrutador procura primeiro, sem precisar rolar a página.
const SUMMARY = [
  { label: 'Área', value: 'Desenvolvimento full-stack' },
  { label: 'Stack', value: 'React, Node.js, TypeScript' },
  { label: 'Formação', value: 'ADS na UNINTER (cursando)' },
  { label: 'Busco', value: 'Vagas, estágio e freelance' },
  { label: 'Local', value: PROFILE.location },
]

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="relative overflow-hidden border-b">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="flex flex-col gap-6">
          <p className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
            <span className="h-1 w-8 rounded-full bg-highlight" aria-hidden />
            desenvolvedor full-stack · {PROFILE.location}
          </p>

          <h1 id="inicio-titulo" className="text-display">
            {PROFILE.name}
          </h1>

          <p className="max-w-xl text-xl leading-snug font-semibold text-balance sm:text-2xl">
            Desenvolvo <span className="hero-accent text-primary">sistemas web</span> com React, Node.js e TypeScript.
          </p>

          <p className="max-w-xl text-lg text-muted-foreground">
            Já fiz um quadro de serviços para assistência técnica e uma automação que troca a senha do Wi-Fi dos clientes
            de um supermercado. Também presto serviços de formatação, limpeza e manutenção de computadores, coisa que faço
            desde pequeno.
          </p>

          <p className="flex items-center gap-2 text-sm font-semibold">
            <span className="relative flex size-2.5" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 [animation-iteration-count:3] motion-reduce:hidden" />
              <span className="relative inline-flex size-2.5 rounded-full bg-success" />
            </span>
            Disponível para vagas (inclusive estágio) e projetos freelance
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projetos" className={buttonVariants({ size: 'lg' })}>
              Ver projetos
              <ArrowDownIcon data-icon="inline-end" className="nudge nudge-down" aria-hidden />
            </a>
            <a href="#contato" className={buttonVariants({ size: 'lg', variant: 'secondary' })}>
              Fale comigo
            </a>
            <a href={PROFILE.cv} download className={buttonVariants({ size: 'lg', variant: 'outline' })}>
              <DownloadIcon data-icon="inline-start" aria-hidden />
              Baixar CV<span className="sr-only"> (PDF)</span>
            </a>
          </div>
        </div>

        <aside
          aria-label="Resumo profissional"
          className="animate-rise rounded-xl border bg-card shadow-card [animation-delay:150ms]"
        >
          <div className="flex flex-col gap-4 p-6">
            <p className="font-heading text-xl font-bold tracking-wide uppercase">Resumo</p>
            <dl className="flex flex-col divide-y font-mono text-sm">
              {SUMMARY.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="summary-row flex items-baseline justify-between gap-4 py-2.5"
                  style={{ '--i': i } as React.CSSProperties}
                >
                  <dt className="text-muted-foreground uppercase">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  )
}
