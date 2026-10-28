import type { MetadataRoute } from 'next'
import { SEO, SITE_URL } from '@/content/site'

// Só a página principal: /design-system é vitrine técnica e fica fora do índice (noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: SEO.lastUpdated,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
