import { experiences } from '../../data/experience';
import RevealOnScroll from '../ui/RevealOnScroll';

/** Estatísticas exibidas abaixo da bio. */
const stats = [
  { num: '2022', label: 'Codando desde' },
  { num: '6+', label: 'Projetos' },
  { num: '3', label: 'Anos de exp.' },
];

/**
 * Seção About em duas colunas (empilha no mobile/tablet):
 *   - Esquerda: eyebrow, nome grande, bio (2 parágrafos) e linha de stats.
 *   - Direita: lista de experiências profissionais/acadêmicas.
 */
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          {/* Coluna esquerda */}
          <RevealOnScroll>
            <p className="about-eyebrow">/ About</p>
            <h2 className="about-name">
              Leonardo
              <br />
              Cavalcanti
            </h2>
            <p className="about-bio">
              Desenvolvedor Full-Stack Junior apaixonado por arquitetura de software e experiências
              interativas. Graduando em Engenharia da Computação na UFRN, com foco em aplicações
              full-stack robustas e interfaces que comunicam com precisão.
            </p>
            <p className="about-bio">
              Atuo com pesquisa em computação confidencial no IMD/UFRN. Tenho experiência prévia
              como estagiário na Secretaria de Educação do RN e passagem por redes, infraestrutura e
              iniciação científica.
            </p>
            <div className="stat-row">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Coluna direita — experiências */}
          <RevealOnScroll delay={0.1}>
            <p className="exp-head">Experience</p>
            <div className="exp-list">
              {experiences.map((exp) => (
                <div className="exp-item" key={exp.period + exp.role}>
                  <p className="exp-period">{exp.period}</p>
                  <p className="exp-role">
                    {exp.role}
                    {exp.active && <span className="badge">Ativo</span>}
                  </p>
                  <p className="exp-company">{exp.company}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
