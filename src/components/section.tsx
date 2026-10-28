import { cn } from '@/lib/utils'

interface SectionProps extends React.ComponentProps<'section'> {
  id: string
  eyebrow?: string
  title: string
  description?: string
}

/** Bloco de conteúdo da página única: âncora, landmark rotulado pelo título e espaçamento vertical padrão. */
export function Section({ id, eyebrow, title, description, className, children, ...props }: SectionProps) {
  const titleId = `${id}-titulo`

  return (
    <section id={id} aria-labelledby={titleId} className={cn('py-16 md:py-20', className)} {...props}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <header className="flex max-w-2xl flex-col gap-3">
          {eyebrow ? (
            <p className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
              <span className="h-1 w-8 rounded-full bg-highlight" aria-hidden />
              {eyebrow}
            </p>
          ) : null}
          <h2 id={titleId} className="text-h2">
            {title}
          </h2>
          {description ? <p className="text-lead text-muted-foreground">{description}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
