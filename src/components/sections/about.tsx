import Image from 'next/image'
import { Section } from '@/components/section'
import photo from '@/assets/oziel-sousa.jpg'

export function About() {
  return (
    <Section id="sobre" title="Sobre mim" className="border-y bg-muted/40">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-72 md:mx-0">
          <div className="photo-plate absolute -right-3 -bottom-3 size-full rounded-xl bg-highlight" aria-hidden />
          <Image
            src={photo}
            alt="Foto de Oziel Sousa, de camisa escura, olhando para o lado"
            sizes="(min-width: 768px) 18rem, 80vw"
            placeholder="blur"
            className="relative aspect-square rounded-xl object-cover shadow-card"
          />
        </div>

        <div className="flex max-w-2xl flex-col gap-5 text-lg">
          <p>
            Sou o Oziel, de Aparecida de Goiânia (GO). O interesse por computador virou estudo na formação de
            desenvolvedor full-stack da Programadores do Amanhã: 720 horas, de 2023 a 2024.
          </p>
          <p>
            Por dois anos fiz as artes das redes sociais do Supermercado Cristo Rei, e do design ficou o cuidado com a
            parte visual. Lá também fiz, como freelance, uma automação em Python com Selenium que troca a senha do Wi-Fi
            dos clientes, uma tarefa que antes era feita à mão.
          </p>
          <p>
            Sigo fazendo formatação, limpeza e manutenção de computadores como freelance, e já montei painéis elétricos na
            Volga Engenharia. Hoje curso Análise e Desenvolvimento de Sistemas na UNINTER e procuro vaga como
            desenvolvedor.
          </p>
        </div>
      </div>
    </Section>
  )
}
