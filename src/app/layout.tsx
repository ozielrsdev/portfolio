import type { Metadata, Viewport } from 'next'
import { Barlow, Barlow_Condensed, JetBrains_Mono } from 'next/font/google'
import { PROFILE, SEO, SITE_URL } from '@/content/site'
import { cn } from '@/lib/utils'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-barlow',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-barlow-condensed',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
  // Só aparece em detalhes (eyebrows, tags); fica fora do preload para não competir com as fontes do hero.
  preload: false,
})

export const ensureStatic = 'navigation'

// Imagens de Open Graph/Twitter vêm de app/opengraph-image.tsx e app/twitter-image.tsx; ícones de app/icon.png etc.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.title, template: `%s | ${PROFILE.name}` },
  description: SEO.description,
  applicationName: PROFILE.name,
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: PROFILE.name,
    title: SEO.title,
    description: SEO.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c0a09' },
  ],
}

// Aplica o tema salvo (ou o do sistema) antes da primeira pintura, evitando o flash de tema errado.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}})()`

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(barlow.variable, barlowCondensed.variable, jetbrainsMono.variable)}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#conteudo"
          className="sr-only z-50 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  )
}
