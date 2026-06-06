import type { Project } from '../types';

export const projects: Project[] = [
  {
    num: '01',
    title: 'ELOBELLE',
    description:
      'E-commerce completo de moda feminina com painel admin, checkout via MercadoPago, reviews, cupons, chat de suporte e notificações em tempo real.',
    tags: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Java', 'TypeScript', 'MercadoPago'],
    icon: '🛍️',
    label: 'E-COMMERCE · FULL-STACK',
    url: 'https://github.com/LeonardoPCavalcanti',
  },
  {
    num: '02',
    title: 'FILEVAULT',
    description:
      'Aplicação de upload de arquivos com presigned URLs, monorepo Turborepo e deploy automatizado.',
    tags: ['NestJS', 'React', 'Cloudflare R2', 'Turborepo', 'TypeScript'],
    icon: '🗄️',
    label: 'UPLOAD · STORAGE · MONOREPO',
    url: 'https://github.com/LeonardoPCavalcanti',
  },
  {
    num: '03',
    title: 'ZOONOSES INVENTORY',
    description:
      'Sistema full-stack de gestão de inventário para centros de zoonoses com CI/CD e containerização.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    icon: '🏥',
    label: 'GESTÃO · CI/CD · CONTAINERS',
    url: 'https://github.com/LeonardoPCavalcanti',
  },
  {
    num: '04',
    title: 'DISTRIBUTED TWITTER',
    description:
      'Implementação de consistência eventual vs. causal em micro-blogging distribuído com Vector Clocks.',
    tags: ['Python', 'Vector Clocks', 'Distributed Systems'],
    icon: '🐦',
    label: 'SISTEMAS DISTRIBUÍDOS',
    url: 'https://github.com/LeonardoPCavalcanti',
  },
  {
    num: '05',
    title: 'PARALLEL COMPUTING',
    description:
      'Computação paralela com OpenMP, MPI e GPU offloading em cluster HPC gerenciado com SLURM.',
    tags: ['C', 'OpenMP', 'MPI', 'SLURM', 'GPU'],
    icon: '⚡',
    label: 'HPC · PARALLEL · GPU',
    url: 'https://github.com/LeonardoPCavalcanti',
  },
  {
    num: '06',
    title: 'EXPRESSION COMPILER',
    description:
      'Tradutor de expressões aritméticas com lexer, parser LL(1) e geração de código intermediário 3-endereços.',
    tags: ['Python', 'Compiladores', 'LL(1)', 'Lexer'],
    icon: '🔤',
    label: 'COMPILADORES · TEORIA',
    url: 'https://github.com/LeonardoPCavalcanti',
  },
];
