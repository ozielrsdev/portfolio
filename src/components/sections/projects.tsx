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
      eyebrow="o que eu já construí"
      title="Projetos em destaque"
      description="Problemas reais, o que eu fiz e com o quê."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <li key={project.slug} className="reveal">
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
            <ArrowUpRightIcon className="ml-1 inline size-4 align-[-0.125em]" aria-hidden />
          </span>
          <span className="sr-only"> (abre em nova aba)</span>
        </span>
      </a>
    </Section>
  )
}
