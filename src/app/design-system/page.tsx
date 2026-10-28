import type { Metadata } from 'next'
import { ArrowRightIcon, DownloadIcon } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { ProjectCard } from '@/components/project-card'
import { Section } from '@/components/section'
import { TechTag } from '@/components/tech-tag'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button-variants'
import type { Project } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Design system',
  description: 'Tokens, tipografia e componentes do portfólio de Oziel Sousa.',
  alternates: { canonical: '/design-system' },
  robots: { index: false, follow: true },
}

const COLOR_TOKENS = [
  { name: 'background', className: 'bg-background', use: 'Fundo da página' },
  { name: 'foreground', className: 'bg-foreground', use: 'Texto principal' },
  { name: 'card', className: 'bg-card', use: 'Superfícies elevadas' },
  { name: 'muted', className: 'bg-muted', use: 'Fundos discretos, tags' },
  { name: 'muted-foreground', className: 'bg-muted-foreground', use: 'Texto secundário' },
  { name: 'primary', className: 'bg-primary', use: 'Ação principal, links' },
  { name: 'secondary', className: 'bg-secondary', use: 'Ação secundária' },
  { name: 'highlight', className: 'bg-highlight', use: 'Assinatura da marca' },
  { name: 'border', className: 'bg-border', use: 'Divisórias e contornos' },
  { name: 'success', className: 'bg-success', use: 'Confirmação' },
  { name: 'warning', className: 'bg-warning', use: 'Atenção' },
  { name: 'destructive', className: 'bg-destructive', use: 'Erro' },
]

const TYPE_SCALE = [
  { token: 'text-display', sample: 'Display', heading: true },
  { token: 'text-h1', sample: 'Título H1', heading: true },
  { token: 'text-h2', sample: 'Título H2', heading: true },
  { token: 'text-h3', sample: 'Título H3', heading: true },
  { token: 'text-lead', sample: 'Lead: abre seções com uma frase de contexto.', heading: false },
  { token: 'text-base', sample: 'Texto base 16px com altura de linha 1,6 para leitura confortável.', heading: false },
  { token: 'text-sm', sample: 'Texto pequeno para legendas e metadados.', heading: false },
]

const SAMPLE_PROJECT: Project = {
  slug: 'exemplo',
  name: 'Projeto exemplo',
  summary: 'Card de demonstração. O conteúdo real entra na Fase 3.',
  problem: 'Descrição curta do problema que o projeto resolve.',
  solution: 'Como o projeto resolve esse problema.',
  contribution: 'O que eu fiz, em primeira pessoa.',
  result: 'Resultado concreto, quando houver dado real.',
  role: 'Solo',
  stack: ['React', 'TypeScript', 'Node.js'],
  links: { demo: '#', repo: '#' },
}

export default function DesignSystemPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section id="cores" eyebrow="tokens / cores" title="Cores" description="Paleta Campo Aberto. Alterne o tema no topo para ver o modo escuro.">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {COLOR_TOKENS.map(({ name, className, use }) => (
              <li key={name} className="flex flex-col overflow-hidden rounded-lg border bg-card">
                <span className={`h-16 border-b ${className}`} aria-hidden />
                <span className="flex flex-col gap-0.5 p-3">
                  <code className="font-mono text-sm">{name}</code>
                  <span className="text-sm text-muted-foreground">{use}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="tipografia" eyebrow="tokens / tipografia" title="Tipografia" description="Barlow Condensed nos títulos, Barlow no texto e JetBrains Mono no código. Escala 1,333.">
          <ul className="flex flex-col gap-6">
            {TYPE_SCALE.map(({ token, sample, heading }) => (
              <li key={token} className="flex flex-col gap-1 border-b pb-6">
                <code className="font-mono text-xs text-muted-foreground">{token}</code>
                <p className={heading ? `${token} font-heading font-bold uppercase` : token}>{sample}</p>
              </li>
            ))}
          </ul>
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">
            <code>{`const stack = ['React', 'Node.js', 'TypeScript']`}</code>
          </pre>
        </Section>

        <Section id="componentes" eyebrow="componentes" title="Botões e selos">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Ver projetos</Button>
              <Button variant="secondary">Fale comigo</Button>
              <Button variant="outline">
                <DownloadIcon data-icon="inline-start" aria-hidden />
                Baixar CV
              </Button>
              <Button variant="ghost">Fantasma</Button>
              <a href="#cores" className={buttonVariants({ variant: 'link' })}>
                Link
                <ArrowRightIcon data-icon="inline-end" aria-hidden />
              </a>
              <Button disabled>Desabilitado</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Pequeno</Button>
              <Button>Padrão</Button>
              <Button size="lg">Grande</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Primário</Badge>
              <Badge variant="secondary">Secundário</Badge>
              <Badge variant="highlight">Solo</Badge>
              <Badge variant="outline">Equipe</Badge>
              <TechTag>TypeScript</TechTag>
              <TechTag>PostgreSQL</TechTag>
            </div>
          </div>
        </Section>

        <Section id="card" eyebrow="componentes" title="Card de projeto">
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard project={SAMPLE_PROJECT} />
            <ProjectCard project={{ ...SAMPLE_PROJECT, slug: 'exemplo-2', role: 'Equipe', result: undefined, links: { repo: '#' } }} />
          </div>
        </Section>
      </main>
    </>
  )
}
