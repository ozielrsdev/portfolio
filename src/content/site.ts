import type { Project } from '@/lib/types'

export const SITE_URL = 'https://ozieldev.vercel.app'

export const SEO = {
  title: 'Oziel Sousa | Desenvolvedor Full-Stack (React, Node.js, TypeScript)',
  description:
    'Desenvolvedor full-stack em Goiânia. Crio software que tira o trabalho repetitivo do caminho, com React, Node.js e TypeScript. Veja projetos e entre em contato.',
  /** Data da última atualização de conteúdo, usada no sitemap. Atualize ao mudar textos ou projetos. */
  lastUpdated: '2026-10-28',
} as const

export const PROFILE = {
  name: 'Oziel Sousa',
  role: 'Desenvolvedor Full-Stack',
  location: 'Aparecida de Goiânia, GO',
  email: 'ozielsousa.dev@gmail.com',
  cv: '/curriculo-oziel-sousa.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/devozielsousa',
    github: 'https://github.com/ozielrsdev',
    whatsapp: 'https://wa.me/5562993279634',
  },
} as const

export const PROJECTS: Project[] = [
  {
    slug: 'repairhub',
    name: 'RepairHub',
    summary: 'Controle de serviços de manutenção de computadores para pequenos comércios.',
    problem:
      'Pedidos de formatação, limpeza e troca de peça ficavam espalhados em conversas de WhatsApp, anotações e planilhas. Ninguém sabia direito o que estava pendente.',
    solution:
      'Um quadro Kanban em que cada serviço anda de Recebido a Concluído, com nível de urgência e regras que impedem pular etapas, como concluir sem registrar o que foi feito.',
    contribution:
      'Projeto solo. Levantei o problema, escrevi as regras de negócio, construí a interface e cobri as regras com testes.',
    result: 'As 10 regras de negócio são testadas com Vitest, e o quadro funciona com mouse, teclado e tela de toque.',
    role: 'Solo',
    stack: ['React', 'TypeScript', 'shadcn/ui', 'Tailwind CSS', 'Zod', 'Vitest'],
    links: {
      demo: 'https://repairhub-gules.vercel.app',
      repo: 'https://github.com/ozielrsdev/repairhub',
    },
  },
  {
    slug: 'reconstrua',
    name: 'Reconstrua',
    summary: 'Plataforma de uma ONG (fictícia) que conecta quem precisa de moradia a voluntários e empresas parceiras.',
    problem:
      'Quem precisa de moradia, quem quer ajudar e as empresas parceiras não tinham um lugar único para se cadastrar, e a equipe não tinha onde acompanhar esses cadastros.',
    solution:
      'Site com cadastro para os três públicos e validação de formulários, ligado a uma API com autenticação e a um painel administrativo.',
    contribution:
      'Fiz a maior parte do front-end, incluindo as telas de Login, Home e Painel administrativo, e ajudei no back-end.',
    role: 'Equipe',
    stack: ['React', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    links: {
      demo: 'https://reconstrua-front.onrender.com',
      repo: 'https://github.com/Reconstrua/Reconstrua-Front',
    },
  },
  {
    slug: 'marketplace-nft',
    name: 'Marketplace de NFTs',
    summary: 'Marketplace com catálogo, carrinho, checkout com carteiras simuladas e atualizações em tempo real.',
    problem:
      'Desafio técnico em squad: entregar um marketplace completo, fiel ao Figma, com API e tempo real simulados, acessível e rápido.',
    solution:
      'Front-end em React com TanStack Router e Query, Socket.IO para tempo real e MSW simulando toda a API, com testes E2E no Playwright.',
    contribution:
      'Montei a base visual: apliquei os tokens do design system Kronos, configurei as fontes e criei os componentes base de interface.',
    role: 'Equipe',
    stack: ['React', 'TypeScript', 'TanStack Query', 'shadcn/ui', 'Tailwind CSS', 'Socket.IO'],
    links: {
      repo: 'https://github.com/Gusttavooll/Desafio_NFT',
    },
  },
  {
    slug: 'hackathon-onfly',
    name: 'Hackathon PdA × Onfly',
    summary:
      'Catálogo de hospedagens feito em equipe de 3 pessoas no hackathon da Programadores do Amanhã, em parceria com a Onfly.',
    problem:
      'Criar uma aplicação full-stack que exibisse um catálogo fictício de hospedagens a partir de um banco SQLite e organizar a bagunça que estava nesse banco.',
    solution:
      'Catálogo com filtro por categoria, paginação e detalhes de cada hospedagem (comodidades, estrelas, localização) em um modal.',
    contribution: 'Atuei no front-end da aplicação.',
    result: '3º lugar no hackathon.',
    role: 'Equipe',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Axios'],
    links: {
      demo: 'https://hackaton-front-ruby.vercel.app',
      repo: 'https://github.com/ozielrsdev/Hackaton-Front',
    },
  },
]

export const STACK = [
  {
    area: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'shadcn/ui'],
  },
  { area: 'Back-end e dados', items: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'Sequelize', 'SQL'] },
  { area: 'Qualidade', items: ['Vitest', 'Zod', 'ESLint'] },
  { area: 'Ferramentas', items: ['Git', 'GitHub', 'Docker', 'AWS (fundamentos)', 'Figma', 'Postman'] },
  { area: 'Automação', items: ['Python', 'Selenium', 'PyInstaller'] },
] as const

export const TIMELINE = [
  {
    period: '03/2026 – hoje',
    title: 'Bacharelado em Engenharia de Software',
    place: 'UNINTER',
    detail: 'Previsão de conclusão: 08/2030.',
    kind: 'Formação',
  },
  {
    period: '03/2026 – 05/2026',
    title: 'Auxiliar de Montagem',
    place: 'Volga Engenharia',
    detail: 'Montagem de painéis elétricos de baixa tensão BlokSet, em parceria com a Schneider Electric.',
    kind: 'Experiência',
  },
  {
    period: '04/2025 – 06/2025',
    title: 'Desenvolvedor de Automação (freelance)',
    place: 'Supermercado Cristo Rei',
    detail:
      'Automação em Python + Selenium que eliminou uma tarefa manual recorrente, empacotada para rodar em Windows e Linux.',
    kind: 'Experiência',
  },
  {
    period: '02/2024 – 01/2026',
    title: 'Designer Gráfico e Social Media',
    place: 'Supermercado Cristo Rei',
    detail: 'Conteúdo e materiais promocionais para as redes sociais da empresa.',
    kind: 'Experiência',
  },
  {
    period: '05/2023 – 05/2024',
    title: 'Formação Desenvolvedor Full-Stack',
    place: 'Programadores do Amanhã',
    detail: '720 horas, incluindo inglês e soft skills.',
    kind: 'Formação',
  },
  {
    period: 'Curso livre',
    title: 'Fundamentos de Cloud AWS',
    place: 'DIO',
    detail: '48 horas.',
    kind: 'Formação',
  },
] as const
