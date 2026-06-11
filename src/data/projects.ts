import type { Project } from '../types';
import shotCineReserve from '../assets/shots/cinereserve.jpg';
import shotZoonoses from '../assets/shots/zoonoses.jpg';
import shotFileVault from '../assets/shots/filevault.jpg';
import shotTwitter from '../assets/shots/twitter.jpg';
import shotCompiler from '../assets/shots/compiler.jpg';

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
    metric: '30 testes automatizados · corrida de reserva tratada com 409',
    shot: shotCineReserve,
  },
  {
    num: '02',
    title: 'Zoonoses Inventory',
    description:
      'Controle de estoque em tempo real para centros de zoonoses: entradas, saídas e validades sincronizadas entre toda a equipe no instante em que acontecem, com acesso por papel e auditoria.',
    study:
      'Estado distribuído em tempo real: replicação de eventos via WebSocket (Supabase Realtime), Row Level Security como autorização no banco e um trigger que impede saída além do saldo — a regra de negócio onde ela não pode ser burlada.',
    tags: ['React', 'TypeScript', 'Supabase', 'Realtime', 'PostgreSQL', 'RLS'],
    label: 'TEMPO REAL · SAÚDE PÚBLICA',
    href: `${GH}/zoonoses-inventory-dashboard`,
    demo: `${PAGES}/zoonoses-inventory-dashboard/`,
    external: true,
    metric: 'sincronização entre clientes em <1s · conta demo de um clique',
    shot: shotZoonoses,
  },
  {
    num: '03',
    title: 'FileVault',
    description:
      'Aplicação de upload de arquivos com presigned URLs para object storage, monorepo Turborepo e deploy automatizado. Demo ao vivo disponível.',
    study:
      'Arquitetura de upload direto ao storage: presigned URLs (o cliente envia direto ao bucket, sem passar o arquivo pelo servidor), validação por magic bytes, separação de responsabilidades em monorepo e CI/CD.',
    tags: ['NestJS', 'React', 'Cloudflare R2', 'Turborepo', 'TypeScript'],
    label: 'UPLOAD · STORAGE · MONOREPO',
    href: `${GH}/filevault`,
    demo: 'https://filevault-api.vercel.app',
    external: true,
    metric: '13 testes verdes · URLs assinadas com expiração curta',
    shot: shotFileVault,
  },
  {
    num: '04',
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
    metric: '3 réplicas simuladas · entrega causal visualizada passo a passo',
    shot: shotTwitter,
  },
  {
    num: '05',
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
    metric: 'pipeline completo no browser: tokens → AST → IR → execução',
    shot: shotCompiler,
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
    metric: 'Lighthouse 100 · 100 · 100 · 100 (perf, a11y, práticas, SEO)',
  },
];
