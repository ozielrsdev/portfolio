import type { MetadataRoute } from 'next'
import { PROFILE, SEO } from '@/content/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PROFILE.name} | ${PROFILE.role}`,
    short_name: PROFILE.name,
    description: SEO.description,
    start_url: '/',
    display: 'browser',
    lang: 'pt-BR',
    background_color: '#fafaf9',
    theme_color: '#1f7a3a',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
