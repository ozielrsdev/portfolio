import { Section } from '@/components/section'
import { TechTag } from '@/components/tech-tag'
import { STACK } from '@/content/site'

export function Stack() {
  return (
    <Section id="stack" eyebrow="ferramentas do dia a dia" title="Stack" description="O que eu uso, agrupado por área.">
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STACK.map(({ area, items }) => (
          <div key={area} className="reveal flex flex-col gap-3 rounded-xl border bg-card p-5">
            <dt className="font-heading text-xl font-bold uppercase">{area}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item}>
                    <TechTag>{item}</TechTag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
