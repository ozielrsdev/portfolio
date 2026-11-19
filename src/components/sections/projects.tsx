import { ArrowUpRightIcon } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button-variants'
import { PROFILE, PROJECTS } from '@/content/site'
import { cn } from '@/lib/utils'

export function Projects() {
  return (
    <Section
      id="projetos"
      title="Projetos"
      description="Um projeto solo e três em equipe. Em cada um, deixo claro qual foi a minha parte."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          // Na grade de 2 colunas, o card da direita chega um instante depois do da esquerda.
          <li key={project.slug} className="reveal" style={{ '--i': i % 2 } as React.CSSProperties}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
      <a
        href={PROFILE.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: 'link' }), 'h-auto min-h-11 self-start px-0 text-left whitespace-normal')}
      >
        {/* Seta dentro do texto, presa à última palavra: no celular o link quebra linha e ela acompanha o fim da frase. */}
        <span>
          Mais projetos no meu GitHub (Eco-Points, FeelAI e{' '}
          <span className="whitespace-nowrap">
            outros)
            <ArrowUpRightIcon className="nudge nudge-out ml-1 inline size-4 align-[-0.125em]" aria-hidden />
          </span>
          <span className="sr-only"> (abre em nova aba)</span>
        </span>
      </a>
    </Section>
  )
}
