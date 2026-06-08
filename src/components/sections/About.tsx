import { experiences } from '../../data/experience';
import RevealOnScroll from '../ui/RevealOnScroll';

/**
 * Sobre, em duas colunas: bio à esquerda (com acentos em serif itálico) e a
 * linha do tempo de experiência à direita. Empilha no mobile.
 */
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <RevealOnScroll>
          <div className="section-head">
            <span className="eyebrow">Sobre</span>
            <h2 className="section-title">
              Leonardo <span className="serif">Cavalcanti</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="about-grid">
          <RevealOnScroll>
            <div>
              <p className="about-bio">
                Desenvolvedor full-stack júnior, graduando em{' '}
                <span className="serif">Engenharia da Computação</span> na UFRN.
                Gosto de problemas onde a teoria encontra a prática — de relógios
                vetoriais a controle de concorrência em APIs reais.
              </p>
              <p className="about-bio">
                Atuo como bolsista de iniciação científica em computação
                confidencial no IMD/UFRN, com passagens anteriores por redes,
                infraestrutura e desenvolvimento na Secretaria de Educação do RN.
                Acredito que estudar a fundo e compartilhar o que aprendo torna o
                software melhor — e este portfólio é parte disso.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div>
              <p className="exp-head">Trajetória</p>
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
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
