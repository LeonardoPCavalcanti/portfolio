# Portfólio — Leonardo Cavalcanti

Portfólio pessoal com tema dark minimalista, tipografia grande e bold e estética tecno/editorial — inspirado em yutaabe.com. Single-page com scroll suave entre seções.

## Stack

- **React 18 + Vite + TypeScript**
- **Tailwind CSS v3** + CSS Modules para animações específicas
- **Framer Motion** · **Lucide React**
- **React Router DOM v6**
- Fontes: **Syne** + **Space Mono** (Google Fonts)
- Deploy: **GitHub Pages** via GitHub Actions

## Desenvolvimento

```bash
npm install      # instala dependências
npm run dev      # servidor de desenvolvimento (http://localhost:5173/portfolio/)
npm run build    # build de produção (tsc + vite build)
npm run preview  # preview do build
npm run lint     # ESLint
npm run format   # Prettier
```

## Deploy

O deploy é automático: cada push para `main` dispara o workflow
`.github/workflows/deploy.yml`, que faz `npm ci → npm run build` e publica a
pasta `dist/` no GitHub Pages.

> O `base` do Vite e o `basename` do Router estão configurados como
> `/portfolio/`, coincidindo com o nome do repositório. Se o repo for renomeado,
> ajuste `base` em `vite.config.ts`.

Alternativa manual: `npm run deploy` (usa `gh-pages`).

## Estrutura

```
src/
├── components/
│   ├── layout/      Header, Footer
│   ├── ui/          Cursor, LightsOutToggle, RevealOnScroll, Ticker, ProjectPreviewCard
│   └── sections/    Hero, Projects, About, Skills, Contact
├── data/            projects, skills, experience
├── hooks/           useCursor, useReveal, useClock
├── styles/          globals.css, animations.module.css
└── types/           interfaces compartilhadas
```

## Notas de design

- **Cores:** `#080808` (fundo) · `#F0EDE8` (texto) · `#30b8ff` (accent) · `#3a3835` (dim) · `#1a1816` (borda)
- **Cursor customizado** com `mix-blend-mode: difference` — desabilitado em dispositivos touch.
- **Lights Out** escurece tudo exceto o toggle.
- Overlays de **noise** e **scanlines** em pseudo-elementos do `body`.
