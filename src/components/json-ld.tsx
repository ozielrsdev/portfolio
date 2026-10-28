import photo from '@/assets/oziel-sousa.jpg'
import { PROFILE, SEO, SITE_URL, STACK } from '@/content/site'

const PERSON_ID = `${SITE_URL}/#pessoa`

// Descreve só o que está visível na página (regra das diretrizes do Google para dados estruturados).
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: PROFILE.name,
      url: SITE_URL,
      image: `${SITE_URL}${photo.src}`,
      jobTitle: PROFILE.role,
      email: `mailto:${PROFILE.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Aparecida de Goiânia',
        addressRegion: 'GO',
        addressCountry: 'BR',
      },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Programadores do Amanhã' },
        { '@type': 'CollegeOrUniversity', name: 'UNINTER' },
      ],
      knowsAbout: STACK.flatMap(({ items }) => items),
      sameAs: [PROFILE.links.linkedin, PROFILE.links.github],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      url: SITE_URL,
      name: PROFILE.name,
      description: SEO.description,
      inLanguage: 'pt-BR',
      author: { '@id': PERSON_ID },
    },
  ],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escapa "<" para que nenhum texto feche a tag <script> antes da hora.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  )
}
