# Portfólio — Leonardo Cavalcanti

![React](https://img.shields.io/badge/React-18-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

Portfólio pessoal com tema dark minimalista, tipografia grande e bold e estética tecno/editorial — inspirado em yutaabe.com. Single-page com scroll suave entre seções.

**🔗 Ver ao vivo: [leonardopcavalcanti.github.io/portfolio](https://leonardopcavalcanti.github.io/portfolio/)**

[![Portfólio — Leonardo Cavalcanti](docs/preview.png)](https://leonardopcavalcanti.github.io/portfolio/)

## Destaques

- **Acessibilidade real:** suporte completo a `prefers-reduced-motion` — todos os loops e transições são neutralizados para usuários sensíveis a movimento, preservando o conteúdo.
- **Motion proposital:** entrada do hero em _stagger_ via Framer Motion (opacity + translateY + blur, easing `easeOutExpo`), reveal-on-scroll via `IntersectionObserver` e micro-interações nos projetos.
- **Cursor customizado** com `mix-blend-mode: difference` e card de preview que segue o ponteiro — desativado automaticamente em dispositivos touch.
- **SEO & social:** meta tags Open Graph/Twitter e cartão social gerado (`og-image.svg`).
- **Tipado de ponta a ponta**, sem `any`, com ESLint + Prettier; build limpo (`tsc && vite build`).
- **CI/CD:** deploy automático no GitHub Pages a cada push em `main`.

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
