import Image from 'next/image'
import { Section } from '@/components/section'
import photo from '@/assets/oziel-sousa.jpg'

export function About() {
  return (
    <Section id="sobre" eyebrow="quem está por trás" title="Sobre mim" className="border-y bg-muted/40">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
        <div className="reveal relative mx-auto w-full max-w-72 md:mx-0">
          <div className="absolute -right-3 -bottom-3 size-full rounded-xl bg-highlight" aria-hidden />
          <Image
            src={photo}
            alt="Foto de Oziel Sousa, de camisa escura, olhando para o lado"
            sizes="(min-width: 768px) 18rem, 80vw"
            placeholder="blur"
            className="relative aspect-square rounded-xl object-cover shadow-card"
          />
        </div>

        <div className="reveal flex max-w-2xl flex-col gap-5 text-lg">
          <p>
            Prazer, me chamo Oziel. Moro em Aparecida de Goiânia (GO) e trabalho como desenvolvedor full-stack.
          </p>
          <p>
            Uso React, Node.js e TypeScript e estudo Análise e Desenvolvimento de Sistemas na UNINTER. Antes de
            entrar de vez na programação, trabalhei com design gráfico, e isso me deixou atento à parte visual e a quem vai
            usar o sistema.
          </p>
          <p>
            Gosto de projetos que resolvem problemas de verdade, mesmo que pequenos, e de entender bem o problema antes de
            começar a escrever código.
          </p>
        </div>
      </div>
    </Section>
  )
}
