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
            alt="Foto de Oziel Sousa, de camisa clara, olhando para a câmera"
            sizes="(min-width: 768px) 18rem, 80vw"
            placeholder="blur"
            className="relative aspect-square rounded-xl object-cover shadow-card"
          />
        </div>

        <div className="reveal flex max-w-2xl flex-col gap-5 text-lg">
          <p>
            Sou de Aparecida de Goiânia (GO). Fora do código, gosto de fazenda, trator, caminhonete, música e jogos, e de
            qualquer máquina bem construída. Levo isso para o software: tem que funcionar, ser fácil de usar e aguentar o
            tranco.
          </p>
          <p>
            Meu caminho não foi em linha reta. Trabalhei com design gráfico e redes sociais num supermercado, e lá percebi
            uma tarefa manual que se repetia e tomava tempo da equipe. Resolvi com uma automação em Python. Também passei
            pela linha de montagem de painéis elétricos, onde aprendi que padrão, organização e segurança não são detalhe.
          </p>
          <p>
            Hoje curso Engenharia de Software na UNINTER, depois de 720 horas de formação full-stack na Programadores do
            Amanhã. Sou <strong>curioso, calmo e direto</strong>: pergunto até entender o problema e falo com clareza
            quando algo não vai dar certo.
          </p>
        </div>
      </div>
    </Section>
  )
}
