// Tipos compartilhados em todo o portfólio.

/** Um projeto exibido na seção Projects. */
export interface Project {
  /** Número de exibição, ex.: "01" */
  num: string;
  title: string;
  description: string;
  tags: string[];
  /** Emoji usado no card de preview que segue o cursor */
  icon: string;
  /** Rótulo curto exibido no card de preview */
  label: string;
  url: string;
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
