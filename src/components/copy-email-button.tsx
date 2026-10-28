'use client'

import { useState } from 'react'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button-variants'

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Sem permissão de área de transferência: o link mailto ao lado continua funcionando.
    }
  }

  return (
    <button type="button" onClick={copy} className={buttonVariants({ variant: 'outline', size: 'lg' })}>
      {copied ? <CheckIcon data-icon="inline-start" aria-hidden /> : <CopyIcon data-icon="inline-start" aria-hidden />}
      <span aria-live="polite">{copied ? 'E-mail copiado' : 'Copiar e-mail'}</span>
    </button>
  )
}
