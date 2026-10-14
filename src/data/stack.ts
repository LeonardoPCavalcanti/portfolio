import type { StackItem } from '../types';

export const primaryStack: StackItem[] = [
  { name: 'TypeScript', usedIn: ['sellerscope', 'conect2ai-site', 'intranet-ia', 'zoonoses', 'filevault'] },
  { name: 'React + Next.js', usedIn: ['sellerscope', 'conect2ai-site', 'zoonoses', 'elobelle', 'leoehelena'] },
  { name: 'Node.js', detail: 'NestJS, Fastify', usedIn: ['conect2ai-site', 'intranet-ia', 'filevault'] },
  { name: 'PostgreSQL', usedIn: ['sellerscope', 'conect2ai-site', 'zoonoses', 'elobelle', 'leoehelena'] },
  { name: 'Docker + CI/CD', detail: 'GitHub Actions', usedIn: ['sellerscope', 'conect2ai-site', 'zoonoses', 'elobelle'] },
];

export const secondaryStack: StackItem[] = [
  { name: 'Python', usedIn: ['intranet-ia', 'cinereserve', 'compiler'] },
  { name: 'Java + Spring Boot', usedIn: ['elobelle'] },
  { name: { pt: 'Testes', en: 'Testing' }, detail: 'Vitest, Playwright', usedIn: ['sellerscope', 'conect2ai-site', 'intranet-ia'] },
  { name: { pt: 'IA aplicada', en: 'Applied AI' }, detail: 'LLMs', usedIn: ['intranet-ia'] },
  // Kubernetes e nuvem vêm do ConfIoTA (pesquisa), não de um projeto da lista.
  { name: 'Kubernetes + Cloud', detail: 'GCP, Azure', usedIn: ['research'] },
];
