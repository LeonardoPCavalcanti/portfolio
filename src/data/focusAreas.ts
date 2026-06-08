import type { FocusArea } from '../types';

/**
 * Áreas de estudo — o coração acadêmico do portfólio. Cada projeto nasce de
 * uma dessas áreas; aqui elas aparecem como cards numerados (grade 2 colunas),
 * no espírito do grid de "serviços" da wibify, mas descrevendo o que estudo.
 */
export const focusAreas: FocusArea[] = [
  {
    num: '01',
    title: 'Sistemas Distribuídos',
    description:
      'Como múltiplas máquinas concordam sobre o estado do mundo quando não há relógio global nem ordem natural dos eventos.',
    topics: ['Vector Clocks', 'Consistência eventual vs. causal', 'Broadcast causal', 'happened-before'],
  },
  {
    num: '02',
    title: 'Compiladores',
    description:
      'Como uma linguagem vira código executável: das sequências de caracteres à árvore sintática e à representação intermediária.',
    topics: ['Análise léxica', 'Parsing LL(1)', 'AST', 'Código de 3 endereços'],
  },
  {
    num: '03',
    title: 'Computação Paralela & HPC',
    description:
      'Como dividir trabalho entre núcleos, nós e GPUs — e medir, com honestidade, o ganho real de desempenho.',
    topics: ['OpenMP', 'MPI', 'GPU offloading', 'Lei de Amdahl', 'SLURM'],
  },
  {
    num: '04',
    title: 'Arquitetura Backend',
    description:
      'APIs que se comportam bem sob concorrência: controle de corridas, tarefas assíncronas, testes e contratos claros.',
    topics: ['Concorrência & locks', 'Filas (Celery/Redis)', 'REST & JWT', 'Testes automatizados'],
  },
  {
    num: '05',
    title: 'Computação Confidencial',
    description:
      'Linha da minha iniciação científica no IMD/UFRN: proteger dados em uso, não apenas em repouso ou em trânsito.',
    topics: ['Pesquisa (IC)', 'Privacidade de dados', 'Ambientes de execução confiável'],
  },
  {
    num: '06',
    title: 'Engenharia Full-Stack',
    description:
      'Conectar a teoria a produtos reais: interfaces que comunicam com precisão e back-ends que sustentam o domínio.',
    topics: ['React / Next.js', 'Spring Boot / NestJS', 'PostgreSQL', 'CI/CD & Docker'],
  },
];
