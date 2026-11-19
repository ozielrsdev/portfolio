# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primário: recrutadores e tech leads** avaliando um candidato a vaga de desenvolvedor júnior/estágio (CLT ou PJ). Chegam por LinkedIn, currículo ou link direto, têm poucos minutos e querem responder: o que ele já construiu, com qual stack, como trabalha e como falo com ele.
- **Secundário: clientes freelance**, geralmente pequenos negócios que precisam de um site, sistema interno ou automação e querem ver que o trabalho resolve problema real.

## Product Purpose

Portfólio pessoal de Oziel Sousa, desenvolvedor full-stack (React, Node.js, TypeScript) em Aparecida de Goiânia, GO. Existe para converter uma visita em contato: e-mail, LinkedIn, WhatsApp ou download do currículo. Sucesso é o recrutador entender em segundos quem é o Oziel e sair com motivo para chamá-lo para conversar.

## Positioning

Dev júnior que vem da operação, não só do curso:

- **Background em design:** dois anos como designer gráfico e social media, com olho para interface e acabamento.
- **Automação que resolve problema real:** Python + Selenium entregue a um cliente (Supermercado Cristo Rei) que troca a senha do Wi-Fi dos clientes, tarefa antes feita à mão.
- **Regras de negócio e testes:** projetos com regras explícitas cobertas por testes (RepairHub: 10 regras testadas com Vitest).
- **Experiência prática fora do código:** comércio e montagem de painéis elétricos; entende a rotina de quem usa o software.

## Operating Context

Visitado em desktop (triagem de vagas) e celular (link aberto pelo LinkedIn ou WhatsApp). Prévias de link (Open Graph / Twitter Card) são parte da primeira impressão. O currículo em PDF é gerado a partir de `docs/curriculo.html`.

## Capabilities and Constraints

- Página única com seções: Hero, Sobre, Projetos, Stack, Trajetória, Contato. Há também `/design-system` como página de referência interna.
- Conteúdo centralizado em `src/content/site.ts`.
- **Deve continuar 100% estático:** todo o HTML pronto no build, para SEO e prévias de link.
- **Acessibilidade WCAG AA é requisito.**
- **Lighthouse alto é requisito** (relatórios em `docs/lighthouse`).
- Tema claro/escuro.
- Idioma atual: português. Versão em inglês ainda não decidida.

## Brand Commitments

- Nome: Oziel Sousa. Cargo: Desenvolvedor Full-Stack. Domínio: ozieldev.vercel.app.
- Foto real em `src/assets/oziel-sousa.jpg`.
- Origem real: desmonta computadores desde pequeno para entender como funcionam, e ainda hoje faz formatação, limpeza e manutenção de computadores como freelance; é daí que vem o interesse por programação. Fez design e programação em paralelo (não houve "troca" de carreira).
- Voz: direta, em primeira pessoa, concreta (problema → solução → contribuição → resultado), sem jargão de marketing.
- Ordem de apresentação: **primeiro desenvolvimento de sistemas web**; os serviços de manutenção de computadores (formatação, limpeza) vêm depois, como complemento.
- Impressão desejada no recrutador: **direto e prático**, alguém que resolve problema real, sem enfeite.
- **Sem metáforas temáticas** (carro, estrada, campo, fazenda). O site deve parecer sério e combinar com o Oziel; o tom vem do conteúdo, não de fantasia.

## Evidence on Hand

- 4 projetos reais com links (`src/content/site.ts`): RepairHub (solo), Reconstrua (equipe), Marketplace de NFTs (equipe), Hackathon PdA × Onfly (equipe, 3º lugar).
- Trajetória: Programadores do Amanhã (720 h), ADS na UNINTER (em curso), AWS (DIO), freelance de automação, design gráfico, montagem de painéis.
- Currículo em PDF: `public/curriculo-oziel-sousa.pdf`.
- **Não existem** depoimentos, clientes citáveis além dos listados, métricas de uso ou números de impacto além dos registrados. Não inventar.
- Reconstrua é uma ONG fictícia; manter essa ressalva.

## Product Principles

1. **Prova antes de adjetivo.** Cada afirmação aponta para um projeto, link ou resultado real.
2. **Respeitar o tempo do recrutador.** O essencial (quem, o quê, contato) é visível sem procurar.
3. **Honestidade sobre o papel.** Deixar claro o que foi solo, em equipe e o que ele fez de fato.
4. **O acabamento é argumento.** O próprio site demonstra o cuidado com design, acessibilidade e desempenho que ele afirma ter.

## Accessibility & Inclusion

WCAG 2.2 AA: contraste, navegação por teclado, foco visível, leitor de tela, respeito a `prefers-reduced-motion`.
