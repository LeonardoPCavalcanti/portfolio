import { skills } from '../../data/skills';
import RevealOnScroll from '../ui/RevealOnScroll';

/**
 * Grid de skills (5 colunas no desktop, 2 no tablet, 1 no mobile).
 * As bordas das células formam a grade visual. Cada item tem um ponto azul
 * e o nome da tecnologia, que clareia no hover.
 */
export default function Skills() {
  return (
    <section id="skills">
      <RevealOnScroll>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <p className="sg-label">{group.category}</p>
              <div className="sg-items">
                {group.items.map((item) => (
                  <span className="sg-item" key={item}>
                    <span className="dot" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
