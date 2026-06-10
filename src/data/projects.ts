import type { Project } from '../types';

const GH = 'https://github.com/LeonardoPCavalcanti';
const PAGES = 'https://leonardopcavalcanti.github.io';

export const projects: Project[] = [
  {
    num: '01',
    title: 'CineReserve',
    description:
      'API RESTful de cinema com reserva de assentos sob controle de concorrência: autenticação JWT, sessões e bilhetagem, tarefas assíncronas (Celery/Redis), Swagger e 30 testes automatizados.',
    study:
      'Estudo de controle de concorrência: locks de assento com expiração, idempotência e a corrida clássica de duas reservas simultâneas (resposta 409). Frontend de demonstração simula a concorrência em memória.',
    tags: ['Django REST', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Pytest'],
    label: 'BACKEND · CONCORRÊNCIA · API',
    href: `${GH}/cinereserve`,
    demo: `${PAGES}/cinereserve/`,
    external: true,
  },
  {
    num: '02',
    title: 'Distributed Twitter',
    description:
      'Implementação de consistência eventual vs. causal em micro-blogging distribuído, com relógios vetoriais e broadcast causal entre réplicas.',
    study:
      'Teoria de sistemas distribuídos: a relação happened-before de Lamport, Vector Clocks e como o buffer causal evita a "reply órfã" (uma resposta entregue antes do post que ela responde). Visualização passo a passo das 3 réplicas.',
    tags: ['Python', 'Vector Clocks', 'Causal Broadcast', 'Sistemas Distribuídos'],
    label: 'SISTEMAS DISTRIBUÍDOS',
    href: `${GH}/distributed-twitter-consistency`,
    demo: `${PAGES}/distributed-twitter-consistency/`,
    external: true,
  },
  {
    num: '03',
    title: 'Expression Compiler',
    description:
      'Tradutor de expressões aritméticas com análise léxica, parser LL(1) e geração de código intermediário de três endereços.',
    study:
      'Front-end de compiladores: tokens (lexer), gramática livre de contexto e parsing preditivo LL(1), construção de AST e emissão de IR. Playground mostra tokens → AST → IR → execução ao vivo.',
    tags: ['Python', 'Compiladores', 'LL(1)', 'Lexer', 'IR'],
    label: 'COMPILADORES · TEORIA',
    href: `${GH}/python-expression-compiler`,
    demo: `${PAGES}/python-expression-compiler/`,
    external: true,
  },
  {
    num: '04',
    title: 'Parallel Computing',
    description:
      'Computação paralela com OpenMP, MPI e GPU offloading, executada em cluster HPC gerenciado com SLURM, com análise de speedup e eficiência.',
    study:
      'Modelos de paralelismo: memória compartilhada (OpenMP), troca de mensagens (MPI) e offloading para GPU. A Lei de Amdahl, escalabilidade forte vs. fraca e medição empírica de speedup no cluster.',
    tags: ['C', 'OpenMP', 'MPI', 'SLURM', 'GPU', 'HPC'],
    label: 'HPC · PARALELISMO · GPU',
    href: `${GH}/c-openmp-mpi-parallel-computing`,
    external: true,
  },
  {
    num: '05',
    title: 'FileVault',
    description:
      'Aplicação de upload de arquivos com presigned URLs para object storage, monorepo Turborepo e deploy automatizado. Demo ao vivo disponível.',
    study:
      'Arquitetura de upload direto ao storage: presigned URLs (o cliente envia direto ao bucket, sem passar o arquivo pelo servidor), separação de responsabilidades em monorepo e CI/CD.',
    tags: ['NestJS', 'React', 'Cloudflare R2', 'Turborepo', 'TypeScript'],
    label: 'UPLOAD · STORAGE · MONOREPO',
    href: 'https://filevault-api.vercel.app',
    demo: 'https://filevault-api.vercel.app',
    external: true,
  },
  {
    num: '06',
    title: 'EloBelle',
    description:
      'E-commerce completo de moda feminina com painel administrativo, checkout integrado, avaliações, cupons, chat de suporte e notificações em tempo real.',
    study:
      'Engenharia full-stack de ponta a ponta: modelagem de domínio de e-commerce, integração de gateway de pagamento, autenticação e um painel administrativo com dados em tempo real.',
    tags: ['Next.js', 'Spring Boot', 'Java', 'PostgreSQL', 'TypeScript'],
    label: 'E-COMMERCE · FULL-STACK',
    href: '#contact',
    external: false,
    isPrivate: true,
  },
  {
    num: '07',
    title: 'Zoonoses Inventory',
    description:
      'Sistema full-stack de gestão de inventário para centros de zoonoses, com CI/CD e containerização.',
    study:
      'Aplicação de software a um problema de saúde pública: modelagem de inventário, controle de acesso e uma esteira de entrega contínua containerizada.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    label: 'GESTÃO · CI/CD · CONTAINERS',
    href: '#contact',
    external: false,
    isPrivate: true,
  },
];
