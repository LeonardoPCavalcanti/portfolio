import { skills } from '../../data/skills';
import RevealOnScroll from '../ui/RevealOnScroll';

/**
 * Stack técnica em grade de cards (3 colunas no desktop, 1 no mobile). Cada
 * card é uma categoria; os itens são chips em mono que acendem em limão no
 * hover.
 */
export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <RevealOnScroll>
          <div className="section-head">
            <span className="eyebrow">Stack</span>
            <h2 className="section-title">
              Ferramentas do <span className="serif">ofício</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <RevealOnScroll key={group.category} delay={i * 0.05}>
              <div className="skill-group">
                <p className="sg-label">{group.category}</p>
                <div className="sg-items">
                  {group.items.map((item) => (
                    <span className="sg-item" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
