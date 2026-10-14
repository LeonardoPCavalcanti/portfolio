import type { Localized } from '../i18n/types';

export type ProjectId =
  | 'sellerscope'
  | 'conect2ai-site'
  | 'intranet-ia'
  | 'zoonoses'
  | 'elobelle'
  | 'leoehelena'
  | 'cinereserve'
  | 'filevault'
  | 'compiler'
  | 'twitter';

export interface ProjectLinks {
  site?: string;
  demo?: string;
  code?: string;
}

export interface Project {
  id: ProjectId;
  /** Número de exibição, ex.: "001". */
  num: string;
  name: string;
  role: Localized;
  period?: Localized;
  summary: Localized;
  stack: string[];
  links: ProjectLinks;
  /** Código fechado: mostra "case privado". */
  private?: boolean;
  /** Print real (import de assets/shots). */
  shot?: string;
  shotAlt?: Localized;
  /** No lugar do print, quando o projeto é privado e tem dado sensível. */
  illustration?: 'ai-flow';
}

export interface OtherProject {
  id: ProjectId;
  name: string;
  line: Localized;
  stack: string[];
  links: ProjectLinks;
}

export interface StackItem {
  /** Localized só quando o nome muda de idioma ("Testes"/"Testing"). */
  name: string | Localized;
  /** Ex.: "NestJS, Fastify". */
  detail?: string;
  /** 'research' = a evidência é o artigo (ConfIoTA), não um projeto da lista. */
  usedIn: Array<ProjectId | 'research'>;
}

export interface Paper {
  authors: string;
  title: string;
  venue: string;
  pages: string;
  doi: string;
  contribution: Localized;
}

export interface ExperienceItem {
  period: Localized;
  org: string;
  role: Localized;
  tag: Localized;
  current: boolean;
}

export interface FaqItem {
  q: Localized;
  a: Localized;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: Localized;
}
