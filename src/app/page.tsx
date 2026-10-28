import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Stack } from '@/components/sections/stack'
import { Timeline } from '@/components/sections/timeline'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
