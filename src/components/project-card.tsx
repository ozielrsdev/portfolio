import { ExternalLinkIcon, FolderGitIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TechTag } from '@/components/tech-tag'
import type { Project } from '@/lib/types'

export function ProjectCard({ project }: { project: Project }) {
  const { name, summary, problem, solution, contribution, result, role, stack, links } = project
  const details = [
    { term: 'Problema', text: problem },
    { term: 'Solução', text: solution },
    { term: 'Minha parte', text: contribution },
    ...(result ? [{ term: 'Resultado', text: result }] : []),
  ]

  return (
    <Card className="h-full transition-shadow duration-300 hover:shadow-card-hover">
      <CardHeader>
        <CardTitle>
          <h3 className="text-h3">{name}</h3>
        </CardTitle>
        <CardAction>
          <Badge variant={role === 'Solo' ? 'highlight' : 'outline'}>{role}</Badge>
        </CardAction>
        <CardDescription className="text-base">{summary}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-5">
        <dl className="flex flex-col gap-3 text-base">
          {details.map(({ term, text }) => (
            <div key={term} className="flex flex-col gap-0.5">
              <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">{term}</dt>
              <dd>{text}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-auto flex flex-wrap gap-2" aria-label={`Tecnologias usadas em ${name}`}>
          {stack.map((tech) => (
            <li key={tech}>
              <TechTag>{tech}</TechTag>
            </li>
          ))}
        </ul>
      </CardContent>

      {links.demo || links.repo ? (
        <CardFooter className="flex-wrap gap-3">
          {links.demo ? (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: 'sm' })}>
              <ExternalLinkIcon data-icon="inline-start" aria-hidden />
              Ver online<span className="sr-only"> ({name}, abre em nova aba)</span>
            </a>
          ) : null}
          {links.repo ? (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              <FolderGitIcon data-icon="inline-start" aria-hidden />
              Código<span className="sr-only"> de {name} no GitHub, abre em nova aba</span>
            </a>
          ) : null}
        </CardFooter>
      ) : null}
    </Card>
  )
}
