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
        className={cn(buttonVariants({ variant: 'link' }), 'self-start px-0')}
      >
        Mais projetos no meu GitHub (Eco-Points, FeelAI e outros)
        <ArrowUpRightIcon data-icon="inline-end" aria-hidden />
      </a>
    </Section>
  )
}
