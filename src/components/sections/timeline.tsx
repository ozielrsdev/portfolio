import { Section } from '@/components/section'
import { Badge } from '@/components/ui/badge'
import { TIMELINE } from '@/content/site'

export function Timeline() {
  return (
    <Section id="trajetoria" eyebrow="de onde eu venho" title="Trajetória" className="border-t bg-muted/40">
      <ol className="relative flex max-w-3xl flex-col gap-8 border-l-2 border-border pl-6 sm:pl-8">
        {TIMELINE.map(({ period, title, place, detail, kind }) => (
          <li key={`${title}-${period}`} className="reveal relative flex flex-col gap-1.5">
            <span
              className="absolute top-1.5 -left-[calc(1.5rem+7px)] size-3 rounded-full border-2 border-background bg-primary ring-2 ring-primary sm:-left-[calc(2rem+7px)]"
              aria-hidden
            />
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-sm text-muted-foreground">{period}</span>
              <Badge variant={kind === 'Formação' ? 'secondary' : 'outline'}>{kind}</Badge>
            </div>
            <h3 className="text-2xl leading-tight">{title}</h3>
            <p className="font-semibold">{place}</p>
            <p className="text-muted-foreground">{detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
