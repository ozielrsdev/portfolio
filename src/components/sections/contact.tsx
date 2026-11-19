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
      title="Contato"
      description="Procuro vaga (inclusive estágio) e aceito projetos freelance. Pode chamar por e-mail, LinkedIn ou WhatsApp."
    >
      <div className="slots flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${PROFILE.email}`} className={cn(buttonVariants({ size: 'lg' }), 'slot')} style={{ '--i': 0 } as React.CSSProperties}>
            <MailIcon data-icon="inline-start" aria-hidden />
            {PROFILE.email}
          </a>
          <div className="slot" style={{ '--i': 1 } as React.CSSProperties}>
            <CopyEmailButton email={PROFILE.email} />
          </div>
        </div>

        <ul className="flex flex-wrap gap-3" aria-label="Redes e mensagens">
          {SOCIALS.map(({ label, href, Icon }, i) => (
            <li key={label} className="slot" style={{ '--i': i + 2 } as React.CSSProperties}>
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
