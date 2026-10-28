import { MailIcon } from 'lucide-react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { CopyEmailButton } from '@/components/copy-email-button'
import { Section } from '@/components/section'
import { buttonVariants } from '@/components/ui/button-variants'
import { PROFILE } from '@/content/site'
import { cn } from '@/lib/utils'

const SOCIALS = [
  { label: 'LinkedIn', href: PROFILE.links.linkedin, Icon: FaLinkedin },
  { label: 'GitHub', href: PROFILE.links.github, Icon: FaGithub },
  { label: 'WhatsApp', href: PROFILE.links.whatsapp, Icon: FaWhatsapp },
]

export function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="próximo passo"
      title="Vamos conversar?"
      description="Estou disponível para vagas (inclusive estágio) e projetos freelance. Se você tem uma oportunidade ou um processo que precisa sair do papel, me chama."
    >
      <div className="reveal flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${PROFILE.email}`} className={buttonVariants({ size: 'lg' })}>
            <MailIcon data-icon="inline-start" aria-hidden />
            {PROFILE.email}
          </a>
          <CopyEmailButton email={PROFILE.email} />
        </div>

        <ul className="flex flex-wrap gap-3" aria-label="Redes e mensagens">
          {SOCIALS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'text-muted-foreground')}
              >
                <Icon data-icon="inline-start" aria-hidden />
                {label}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
