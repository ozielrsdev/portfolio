# Design System — Portfólio Oziel Sousa

**Direção:** paleta e tom da *Campo Aberto* (fazenda, trator, caminhonete: calmo, confiável, robusto) com a tipografia da *Pista* (automotivo, direto, caixa alta condensada).

**Fonte da verdade:** `src/app/globals.css`. Vitrine viva: rota `/design-system` (fora do índice de buscadores).

---

## 1. Cores

Todos os tokens seguem a convenção do shadcn/ui e viram utilitários do Tailwind (`bg-primary`, `text-muted-foreground`, `border-border`...). **Componentes nunca usam hex nem cores da paleta padrão do Tailwind** (`bg-green-700`, `text-[#1f7a3a]`).

| Token | Claro | Escuro | Quando usar |
|---|---|---|---|
| `background` | `#fafaf9` | `#0c0a09` | Fundo da página |
| `foreground` | `#0c0a09` | `#fafaf9` | Texto principal, títulos |
| `card` / `popover` | `#ffffff` | `#1c1917` | Superfícies elevadas: cards, menu mobile |
| `muted` | `#f5f5f4` | `#292524` | Fundos discretos: tags, blocos de código, rodapé de card |
| `muted-foreground` | `#57534e` | `#a8a29e` | Texto secundário: descrições, legendas, eyebrows |
| `accent` | `#f5f5f4` | `#292524` | **Só hover** de itens de navegação e botões fantasma (convenção shadcn) |
| `primary` | `#1f7a3a` verde trator | `#4ade80` | A ação mais importante da tela, links de texto, anel de foco |
| `secondary` | `#1e3a8a` azul Ford | `#93b4f5` | Segunda ação ("Fale comigo"); nunca concorre com a primária na mesma linha mais de uma vez |
| `highlight` | `#facc15` amarelo colheita | `#fde047` | Assinatura da marca: traço do eyebrow, ponto do logo, selo "Solo", seleção de texto |
| `border` | `#e7e5e4` | `#292524` | Divisórias e contornos de card |
| `input` | `#78716c` | `#78716c` | Contorno de campos de formulário (≥ 3:1) |
| `ring` | `#1f7a3a` | `#4ade80` | Contorno de foco do teclado |
| `success` | `#1f7a3a` | `#4ade80` | Confirmação |
| `warning` | `#b45309` | `#fbbf24` | Atenção |
| `destructive` | `#b91c1c` | `#f87171` | Erro |

Neutros: escala **stone** (cinzas quentes, de terra) do Tailwind, 50–950.

**Por que essas cores:** o verde e o azul são análogos e frios (calma, confiança); o amarelo é o contraponto quente (energia, criatividade). É a dupla verde e amarelo da John Deere com o azul da Ford.

**Por que `highlight` e não `accent`:** no shadcn, `accent` é a superfície de hover de menus e botões. Colocar o amarelo ali deixaria todo hover amarelo. A cor da marca ganhou um token próprio.

### Contraste verificado (WCAG 2.x)

| Par | Claro | Escuro |
|---|---|---|
| Texto principal / fundo | 18,92:1 AAA | 18,92:1 AAA |
| Texto secundário / fundo | 7,30:1 AAA | 7,83:1 AAA |
| Texto secundário / card | 7,63:1 AAA | 6,93:1 AA |
| Texto do botão primário | 5,38:1 AA | 11,34:1 AAA |
| Primária como texto / fundo | 5,15:1 AA | 11,34:1 AAA |
| Texto do botão secundário | 10,36:1 AAA | 9,49:1 AAA |
| Texto escuro / highlight | 12,90:1 AAA | 14,99:1 AAA |
| Anel de foco / fundo | 5,15:1 | 11,34:1 |
| Aviso / fundo | 4,81:1 AA | 11,83:1 AAA |
| Erro / fundo | 6,19:1 AA | 7,14:1 AAA |

## 2. Tipografia

| Papel | Fonte | Pesos | Utilitário |
|---|---|---|---|
| Títulos | **Barlow Condensed**: inspirada nas placas de rodovia, legível em velocidade | 600, 700 | `font-heading` (h1–h3 já usam por padrão, em caixa alta) |
| Texto | **Barlow** | 400, 500, 600 | `font-sans` (padrão) |
| Código, eyebrows, tags | **JetBrains Mono** | 400, 500 | `font-mono` |

Carregadas com `next/font` (servidas pelo próprio domínio, `font-display: swap`, fallback com métricas ajustadas para não haver salto de layout).

**Escala modular 1,333 (quarta justa), base 16px.** Os títulos são fluidos entre 360px e 1440px.

| Utilitário | Tamanho | Altura de linha | Uso |
|---|---|---|---|
| `text-display` | 44 → 67px | 0,95 | Só o nome/proposta no hero |
| `text-h1` | 38 → 51px | 1 | Reserva (a página tem um único h1, no hero) |
| `text-h2` | 28 → 38px | 1,05 | Título de seção |
| `text-h3` | 28px | 1,1 | Título de card |
| `text-lead` | 21px | 1,5 | Frase de abertura de seção |
| `text-base` | 16px | 1,6 | Texto corrido |
| `text-sm` | 14px | — | Legendas, metadados |

Regras: texto corrido nunca abaixo de 16px; linhas com no máximo ~70 caracteres (`max-w-2xl`); títulos com `text-balance`.

## 3. Espaçamento e layout

- Grade de **4px**; layout em múltiplos de **8px** (`gap-2`, `gap-4`, `gap-6`, `gap-10`, `py-16`...). Ajustes finos de 4px só dentro de componentes.
- Espaçamento entre elementos com `flex`/`grid` + `gap-*`. **Não usar `space-x-*`/`space-y-*`** (regra shadcn).
- Container: `max-w-6xl` (1152px), margens laterais `px-4` → `sm:px-6` → `lg:px-8`.
- Seções: `py-16` no celular e `md:py-20` a partir de 768px, via componente `Section`.
- Breakpoints padrão do Tailwind (mobile-first): `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Testar de 360px a 1440px+.
- Alvos de toque: mínimo **44×44px** (`h-11`, `size-11`, `min-h-11`).

## 4. Forma, profundidade e movimento

- **Raio base 8px** (`--radius`). Cards `rounded-xl` (12px), botões `rounded-lg` (8px), selos em pílula. É o meio-termo entre os títulos retos da *Pista* e a suavidade da *Campo Aberto*.
- **Sombras suaves e quentes:** `shadow-card` em repouso, `shadow-card-hover` no hover do card. Nada de sombras pretas duras.
- **Ícones:** Lucide, traço uniforme, sempre `aria-hidden` quando há texto ao lado; dentro de botões use `data-icon="inline-start|inline-end"`, sem classes de tamanho.
- **Movimento:** curto e com propósito. Hover em 150–300ms, entrada de seção com `animate-rise` (500ms, `ease-out-quart`, deslocamento de 12px). Nunca animar largura/altura. Com `prefers-reduced-motion`, animações e rolagem suave são desligadas globalmente.

## 5. Componentes

| Componente | Arquivo | Notas |
|---|---|---|
| `Button` | `components/ui/button.tsx` (shadcn) | Variantes `default`, `secondary`, `outline`, `ghost`, `link`; tamanhos `sm`, `default` (44px), `lg`. Para **links**, use `<a className={buttonVariants(...)}>`: mesmo visual, zero JS. |
| `Card` | `components/ui/card.tsx` (shadcn) | Use a composição completa: `CardHeader`/`CardTitle`/`CardDescription`/`CardContent`/`CardFooter`. |
| `Badge` | `components/ui/badge.tsx` (shadcn) | Variantes extras: `highlight` (selo de marca) e `tech`. |
| `TechTag` | `components/tech-tag.tsx` | Atalho para `Badge variant="tech"`. |
| `Section` | `components/section.tsx` | `<section>` com âncora, `aria-labelledby`, eyebrow, título h2 e descrição. |
| `ProjectCard` | `components/project-card.tsx` | Problema → solução → minha parte → resultado (opcional) → stack → links. |
| `Navbar` / `MobileNav` | `components/navbar.tsx`, `mobile-nav.tsx` | Âncoras da página única; menu mobile com `Sheet` (shadcn). |
| `ThemeToggle` | `components/theme-toggle.tsx` | Alterna `.dark` no `<html>` e salva em `localStorage`. O tema inicial é aplicado por script inline antes da pintura (sem flash). |

## 6. Faça / Não faça

| ✅ Faça | ❌ Não faça |
|---|---|
| `bg-primary text-primary-foreground` | `bg-green-700 text-white` ou `bg-[#1f7a3a]` |
| Amarelo como **fundo** com texto escuro (`bg-highlight text-highlight-foreground`) | Amarelo como **texto** sobre fundo claro (1,5:1, ilegível) |
| Uma ação primária por bloco | Dois botões verdes lado a lado |
| `flex flex-col gap-4` | `space-y-4` |
| `size-10` | `w-10 h-10` |
| Tokens semânticos que já mudam no escuro | `dark:bg-zinc-900` e outros ajustes manuais de `dark:` |
| Títulos h1–h3 em Barlow Condensed caixa alta | Caixa alta em parágrafos ou botões |
| `aria-label` em botões só com ícone | Ícone sem nome acessível |
| Rosa, roxo, lilás: **fora da marca** | Introduzir essas cores em ilustrações ou destaques |
