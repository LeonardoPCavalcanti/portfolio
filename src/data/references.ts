import type { Reference } from '../types';

/**
 * Leituras de referência — a seção de "compartilhar conhecimento". São as
 * obras canônicas por trás de cada área de estudo. A ideia é que quem visita
 * o perfil possa seguir as mesmas trilhas. Exibidas como cartões com nome de
 * arquivo em mono, ecoando a seção "References" da wibify.
 */
export const references: Reference[] = [
  {
    file: 'lamport-1978.pdf',
    author: 'Leslie Lamport (1978)',
    title: 'Time, Clocks, and the Ordering of Events in a Distributed System',
    note: 'O artigo fundador da relação happened-before e dos relógios lógicos — base do Distributed Twitter.',
    href: 'https://lamport.azurewebsites.net/pubs/time-clocks.pdf',
  },
  {
    file: 'distributed-systems.pdf',
    author: 'Tanenbaum & Van Steen',
    title: 'Distributed Systems: Principles and Paradigms',
    note: 'Referência ampla sobre replicação, consistência e coordenação entre processos.',
    href: 'https://www.distributed-systems.net/index.php/books/ds3/',
  },
  {
    file: 'dragon-book.pdf',
    author: 'Aho, Lam, Sethi & Ullman',
    title: 'Compilers: Principles, Techniques, and Tools',
    note: 'O "livro do dragão": análise léxica, parsing e geração de código intermediário — base do Expression Compiler.',
    href: 'https://suif.stanford.edu/dragonbook/',
  },
  {
    file: 'parallel-programming.pdf',
    author: 'Peter Pacheco',
    title: 'An Introduction to Parallel Programming',
    note: 'OpenMP e MPI na prática, com análise de speedup e eficiência, dos estudos de HPC.',
    href: 'https://www.cs.usfca.edu/~peter/ipp/',
  },
  {
    file: 'amdahl-1967.pdf',
    author: 'Gene Amdahl (1967)',
    title: 'Validity of the Single Processor Approach to Achieving Large-Scale Computing Capabilities',
    note: 'A lei que explica por que paralelizar tem limite — leitura obrigatória antes de medir speedup.',
    href: 'https://inst.eecs.berkeley.edu/~n252/paper/Amdahl.pdf',
  },
  {
    file: 'designing-data-intensive.pdf',
    author: 'Martin Kleppmann',
    title: 'Designing Data-Intensive Applications',
    note: 'Ponte entre teoria e back-end real: concorrência, consistência e sistemas de dados confiáveis.',
    href: 'https://dataintensive.net/',
  },
];
