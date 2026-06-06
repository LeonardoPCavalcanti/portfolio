import type { Project } from '../types';

const GH = 'https://github.com/LeonardoPCavalcanti';

export const projects: Project[] = [
  {
    num: '01',
    title: 'CINERESERVE',
    description:
      'API RESTful de cinema com reserva de assentos sob controle de concorrência: autenticação JWT, sessões e bilhetagem, tarefas assíncronas (Celery/Redis), Swagger e 30 testes automatizados.',
    tags: ['Django REST', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Pytest'],
    icon: '🎬',
    label: 'BACKEND · CONCORRÊNCIA · API',
    href: `${GH}/cinereserve`,
    external: true,
  },
  {
    num: '02',
    title: 'ELOBELLE',
    description:
      'E-commerce completo de moda feminina com painel admin, checkout via MercadoPago, reviews, cupons, chat de suporte e notificações em tempo real.',
    tags: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Java', 'TypeScript', 'MercadoPago'],
    icon: '🛍️',
    label: 'E-COMMERCE · FULL-STACK',
    href: '#contact',
    external: false,
    isPrivate: true,
  },
  {
    num: '03',
    title: 'FILEVAULT',
    description:
      'Aplicação de upload de arquivos com presigned URLs, monorepo Turborepo e deploy automatizado. Demo ao vivo disponível.',
    tags: ['NestJS', 'React', 'Cloudflare R2', 'Turborepo', 'TypeScript'],
    icon: '🗄️',
    label: 'UPLOAD · STORAGE · MONOREPO',
    href: 'https://filevault-henna.vercel.app',
    external: true,
  },
  {
    num: '04',
    title: 'ZOONOSES INVENTORY',
    description:
      'Sistema full-stack de gestão de inventário para centros de zoonoses com CI/CD e containerização.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    icon: '🏥',
    label: 'GESTÃO · CI/CD · CONTAINERS',
    href: '#contact',
    external: false,
    isPrivate: true,
  },
  {
    num: '05',
    title: 'DISTRIBUTED TWITTER',
    description:
      'Implementação de consistência eventual vs. causal em micro-blogging distribuído com Vector Clocks.',
    tags: ['Python', 'Vector Clocks', 'Distributed Systems'],
    icon: '🐦',
    label: 'SISTEMAS DISTRIBUÍDOS',
    href: `${GH}/distributed-twitter-consistency`,
    external: true,
  },
  {
    num: '06',
    title: 'PARALLEL COMPUTING',
    description:
      'Computação paralela com OpenMP, MPI e GPU offloading em cluster HPC gerenciado com SLURM.',
    tags: ['C', 'OpenMP', 'MPI', 'SLURM', 'GPU'],
    icon: '⚡',
    label: 'HPC · PARALLEL · GPU',
    href: `${GH}/c-openmp-mpi-parallel-computing`,
    external: true,
  },
  {
    num: '07',
    title: 'EXPRESSION COMPILER',
    description:
      'Tradutor de expressões aritméticas com lexer, parser LL(1) e geração de código intermediário 3-endereços.',
    tags: ['Python', 'Compiladores', 'LL(1)', 'Lexer'],
    icon: '🔤',
    label: 'COMPILADORES · TEORIA',
    href: `${GH}/python-expression-compiler`,
    external: true,
  },
];
