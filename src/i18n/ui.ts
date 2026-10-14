import type { Localized } from './types';

export const ui = {
  nav: {
    projects: { pt: 'Projetos', en: 'Projects' },
    research: { pt: 'Pesquisa', en: 'Research' },
    experience: { pt: 'Experiência', en: 'Experience' },
    contact: { pt: 'Contato', en: 'Contact' },
    langLabel: { pt: 'Idioma', en: 'Language' },
    skip: { pt: 'Pular para o conteúdo', en: 'Skip to content' },
    mainLabel: { pt: 'Principal', en: 'Main' },
  },
  hero: {
    place: { pt: '©2026 · Natal/RN', en: '©2026 · Natal, Brazil' },
    talkKicker: { pt: 'Vamos conversar', en: "Let's talk" },
    talkRole: { pt: 'Full-stack · estágio', en: 'Full-stack · internship' },
    photoAlt: {
      pt: 'Foto de Leonardo Cavalcanti, de terno preto, braços cruzados',
      en: 'Photo of Leonardo Cavalcanti in a black suit, arms crossed',
    },
  },
  projects: {
    label: { pt: 'Projetos', en: 'Projects' },
    titleA: { pt: 'Software em', en: 'Software in' },
    titleB: { pt: 'produção,', en: 'production,' },
    titleC: { pt: 'com usuários', en: 'with' },
    titleD: { pt: 'de verdade', en: 'real users' },
    site: { pt: 'Site', en: 'Website' },
    demo: { pt: 'Demo', en: 'Demo' },
    code: { pt: 'Código', en: 'Code' },
    private: { pt: 'Código fechado', en: 'Closed source' },
    othersTitle: { pt: 'Outros projetos', en: 'Other projects' },
  },
  research: {
    label: { pt: 'Pesquisa', en: 'Research' },
    titleA: { pt: 'Artigo publicado no', en: 'Paper published at' },
    titleB: { pt: 'SBSeg 2026', en: 'SBSeg 2026' },
    read: { pt: 'Ler pelo DOI', en: 'Read via DOI' },
  },
  stack: {
    label: { pt: 'Stack', en: 'Stack' },
    titleA: { pt: 'Poucas ferramentas,', en: 'Few tools,' },
    titleB: { pt: 'bem usadas', en: 'used well' },
    usedIn: { pt: 'Usado em', en: 'Used in' },
    also: { pt: 'Também uso', en: 'I also use' },
  },
  experience: {
    label: { pt: 'Experiência', en: 'Experience' },
    title: { pt: 'Quatro anos mantendo sistemas no ar', en: 'Four years keeping systems running' },
    current: { pt: 'atual', en: 'current' },
  },
  faq: {
    label: { pt: 'Perguntas', en: 'Questions' },
    titleA: { pt: 'O que recrutadores', en: 'What recruiters' },
    titleB: { pt: 'costumam perguntar', en: 'usually ask' },
  },
  contact: {
    label: { pt: 'Contato', en: 'Contact' },
    title: { pt: 'Vamos colocar algo no ar juntos?', en: 'Shall we ship something together?' },
    cv: { pt: 'Baixar CV', en: 'Download CV (Portuguese)' },
    email: { pt: 'E-mail', en: 'Email' },
    top: { pt: 'Voltar ao topo', en: 'Back to top' },
  },
} satisfies Record<string, Record<string, Localized>>;
