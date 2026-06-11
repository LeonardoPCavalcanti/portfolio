// Tipos compartilhados em todo o portfólio.

/** Um projeto exibido na seção Projects. */
export interface Project {
  /** Número de exibição, ex.: "01" */
  num: string;
  title: string;
  description: string;
  /**
   * O que está sendo estudado neste projeto (conceito/teoria) — usado para
   * o viés acadêmico do portfólio: compartilhar conhecimento com quem visita.
   */
  study: string;
  tags: string[];
  /** Rótulo curto exibido no card. */
  label: string;
  /** Destino do link: repositório, demo ao vivo ou âncora interna (#contact). */
  href: string;
  /** Demo interativa ao vivo (opcional) — abre em nova aba. */
  demo?: string;
  /** true = link externo (abre em nova aba); false = âncora interna. */
  external: boolean;
  /** Projeto de repositório privado — exibe cadeado e aponta para contato. */
  isPrivate?: boolean;
  /** Resultado mensurável do projeto (testes, Lighthouse, latência) — prova, não adjetivo. */
  metric?: string;
  /** Screenshot real do demo ao vivo (importado de assets/shots). */
  shot?: string;
}

/** Uma área de estudo/foco (card numerado, grade 2×N). */
export interface FocusArea {
  num: string;
  title: string;
  description: string;
  /** Tópicos concretos estudados dentro da área. */
  topics: string[];
}

/**
 * Uma referência acadêmica (livro/paper/curso) que fundamenta um dos projetos.
 * Exibida como "cartão de arquivo" com nome em mono — no espírito da seção
 * "Verify our claims / References" da wibify, aqui voltada a leituras.
 */
export interface Reference {
  /** Nome estilo arquivo, ex.: "dragon-book.pdf". */
  file: string;
  /** Autor(es). */
  author: string;
  /** Título da obra. */
  title: string;
  /** Por que importa / o que ensina. */
  note: string;
  /** Link para a obra/recurso canônico. */
  href: string;
}

/** Um grupo de skills (categoria + itens). */
export interface SkillGroup {
  category: string;
  items: string[];
}

/** Uma entrada de experiência profissional/acadêmica. */
export interface Experience {
  period: string;
  role: string;
  company: string;
  /** Se true, exibe o badge "Ativo". */
  active: boolean;
}
