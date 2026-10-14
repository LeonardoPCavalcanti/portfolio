import type { OtherProject, Project } from '../types';
import shotZoonoses from '../assets/shots/zoonoses.jpg';
import shotSellerscope from '../assets/shots/sellerscope.jpg';
import shotConect2ai from '../assets/shots/conect2ai.jpg';
import shotElobelle from '../assets/shots/elobelle.jpg';

const GH = 'https://github.com/LeonardoPCavalcanti';
const PAGES = 'https://leonardopcavalcanti.github.io';

export const featured: Project[] = [
  {
    id: 'sellerscope',
    num: '001',
    name: 'SellerScope',
    role: { pt: 'Co-fundador · backend', en: 'Co-founder · backend' },
    summary: {
      pt: 'SaaS de inteligência de mercado para quem vende na Shopee, no Mercado Livre e no TikTok Shop, com três extensões publicadas na Chrome Web Store. Cuido do backend: cobrança recorrente com webhooks idempotentes, cancelamento automático por inadimplência e acesso por plano validado no banco com Row Level Security.',
      en: 'Market intelligence SaaS for sellers on Shopee, Mercado Livre and TikTok Shop, with three extensions published on the Chrome Web Store. I own the backend: recurring billing with idempotent webhooks, automatic cancellation on non-payment and plan-based access enforced in the database with Row Level Security.',
    },
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Supabase', 'Chrome MV3', 'GitHub Actions'],
    links: { site: 'https://sellerscope.com.br' },
    private: true,
    shot: shotSellerscope,
    shotAlt: { pt: 'Página inicial do SellerScope', en: 'SellerScope landing page' },
  },
  {
    id: 'conect2ai-site',
    num: '002',
    name: 'Conect2AI',
    role: { pt: 'Desenvolvedor principal · estágio obrigatório', en: 'Lead developer · required internship' },
    summary: {
      pt: 'Site e painel administrativo do laboratório Conect2AI (DCA/UFRN), da modelagem de dados à interface. Controle de acesso por papéis, revisão antes de publicar, trilha de auditoria só de inserção exportável em CSV, Excel, PDF e Word, e site em três idiomas com URLs traduzidas.',
      en: 'Website and admin panel for the Conect2AI lab (DCA/UFRN), from data modeling to UI. Role-based access, review before publishing, append-only audit trail exportable to CSV, Excel, PDF and Word, and a three-language site with translated URLs.',
    },
    stack: ['Fastify', 'Prisma', 'PostgreSQL', 'Next.js', 'Docker'],
    links: { site: 'https://conect2ai.dca.ufrn.br' },
    private: true,
    shot: shotConect2ai,
    shotAlt: { pt: 'Página inicial do site do Conect2AI', en: 'Conect2AI website home page' },
  },
  {
    id: 'intranet-ia',
    num: '003',
    name: 'Intranet IA',
    role: { pt: 'Desenvolvedor · Conect2AI', en: 'Developer · Conect2AI' },
    summary: {
      pt: 'Ferramenta interna que gera conteúdo do laboratório com IA. Vários provedores de LLM com failover e contexto compartilhado entre eles, avaliação das respostas, exemplos few-shot e um pipeline de fine-tuning (SFT e KTO) a partir das avaliações.',
      en: 'Internal tool that generates the lab content with AI. Multiple LLM providers with failover and shared context, response evaluation, few-shot examples and a fine-tuning pipeline (SFT and KTO) fed by those evaluations.',
    },
    stack: ['TypeScript', 'Fastify', 'PostgreSQL', 'React', 'Python'],
    links: {},
    private: true,
    illustration: 'ai-flow',
  },
  {
    id: 'zoonoses',
    num: '004',
    name: 'Zoonoses',
    role: { pt: 'Desenvolvedor', en: 'Developer' },
    summary: {
      pt: 'Controle de estoque e pedidos do Centro de Zoonoses com atualização em tempo real entre clientes, papéis de acesso, autenticação em dois fatores, assinatura de documentos em PDF e relatórios agendados.',
      en: 'Inventory and order system for the Zoonoses Center with real-time sync across clients, access roles, two-factor authentication, PDF document signing and scheduled reports.',
    },
    stack: ['React', 'TypeScript', 'PostgreSQL', 'Supabase', 'Docker'],
    links: { demo: `${PAGES}/zoonoses-inventory-dashboard/`, code: `${GH}/zoonoses-inventory-dashboard` },
    shot: shotZoonoses,
    shotAlt: { pt: 'Painel de estoque do Zoonoses', en: 'Zoonoses inventory dashboard' },
  },
  {
    id: 'elobelle',
    num: '005',
    name: 'EloBelle',
    role: { pt: 'Desenvolvedor full-stack', en: 'Full-stack developer' },
    summary: {
      pt: 'E-commerce de moda com Next.js no front e Spring Boot no back: login com Google, pagamento pelo Mercado Pago, imagens otimizadas pelo Cloudinary e nota máxima no Lighthouse nas páginas principais.',
      en: 'Fashion e-commerce with Next.js on the front and Spring Boot on the back: Google sign-in, Mercado Pago payments, Cloudinary-optimized images and top Lighthouse scores on the main pages.',
    },
    stack: ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Docker'],
    links: {},
    private: true,
    shot: shotElobelle,
    shotAlt: { pt: 'Vitrine da loja EloBelle', en: 'EloBelle storefront' },
  },
];

export const others: OtherProject[] = [
  {
    id: 'leoehelena',
    name: 'Leo & Helena',
    line: {
      pt: 'Site de casamento com lista de presentes paga e confirmação de presença.',
      en: 'Wedding website with paid gift registry and RSVP.',
    },
    stack: ['Next.js', 'PostgreSQL', 'Mercado Pago'],
    links: { site: 'https://leoehelena.vercel.app' },
  },
  {
    id: 'cinereserve',
    name: 'CineReserve',
    line: {
      pt: 'API de reserva de cinema com trava de assento contra reserva dupla.',
      en: 'Cinema booking API with seat locking against double booking.',
    },
    stack: ['Python', 'Django REST', 'Redis'],
    links: { demo: `${PAGES}/cinereserve/`, code: `${GH}/cinereserve` },
  },
  {
    id: 'filevault',
    name: 'FileVault',
    line: {
      pt: 'Upload seguro com URLs pré-assinadas e checagem de tipo real do arquivo.',
      en: 'Secure uploads with presigned URLs and real file-type checks.',
    },
    stack: ['NestJS', 'React', 'S3'],
    links: { demo: 'https://filevault-api.vercel.app', code: `${GH}/filevault` },
  },
  {
    id: 'compiler',
    name: 'Expression Compiler',
    line: {
      pt: 'Compilador de expressões com playground: tokens, árvore sintática e código intermediário.',
      en: 'Expression compiler with a playground: tokens, syntax tree and intermediate code.',
    },
    stack: ['Python', 'TypeScript'],
    links: { demo: `${PAGES}/python-expression-compiler/`, code: `${GH}/python-expression-compiler` },
  },
  {
    id: 'twitter',
    name: 'Distributed Twitter',
    line: {
      pt: 'Consistência eventual contra causal com relógios vetoriais, visualizada passo a passo.',
      en: 'Eventual versus causal consistency with vector clocks, visualized step by step.',
    },
    stack: ['Python', 'FastAPI', 'React'],
    links: { demo: `${PAGES}/distributed-twitter-consistency/`, code: `${GH}/distributed-twitter-consistency` },
  },
];
