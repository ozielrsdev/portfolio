# Portfólio — Oziel Sousa

Site pessoal de [Oziel Sousa](https://ozieldev.vercel.app), desenvolvedor full-stack (React, Node.js, TypeScript).

Página única gerada de forma 100% estática: o HTML já chega com todo o conteúdo para buscadores e prévias de link.

## Stack

- **Next.js 16** (App Router, Cache Components, `ensureStatic = 'navigation'` no layout raiz)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** com design tokens em CSS variables
- **shadcn/ui** (Base UI) para Button, Card e Badge
- `next/font` (Barlow, Barlow Condensed, JetBrains Mono) e `next/image` (AVIF/WebP)
- `next/og` para a imagem de prévia (Open Graph e Twitter Card)

## Rodando localmente

Precisa de Node.js 20.9 ou superior.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção (falha se algo dinâmico entrar na página)
npm run lint
```

## Onde mexer

| Quero mudar... | Arquivo |
|---|---|
| Textos, projetos, stack, trajetória, links | `src/content/site.ts` |
| Título e descrição para buscadores | `SEO` em `src/content/site.ts` |
| Cores, fontes, espaçamentos | `src/app/globals.css` (veja `DESIGN_SYSTEM.md`) |
| Currículo em PDF | `public/curriculo-oziel-sousa.pdf` |
| Imagem de prévia de link | `src/lib/og-image.tsx` |

Ao atualizar o conteúdo, ajuste `SEO.lastUpdated` para o sitemap refletir a data.

## Documentação

- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md): tokens, tipografia, componentes e regras de uso
- [`docs/lighthouse/`](docs/lighthouse/): relatórios Lighthouse antes e depois da reformulação
- `/design-system`: vitrine viva dos componentes (fora do índice de buscadores)

## Licenças

Fontes Barlow em `src/assets/fonts/` sob a [SIL Open Font License](src/assets/fonts/OFL.txt).
