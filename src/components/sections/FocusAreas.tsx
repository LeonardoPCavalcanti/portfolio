import { focusAreas } from '../../data/focusAreas';
import RevealOnScroll from '../ui/RevealOnScroll';

/**
 * Áreas de estudo em grade de cards numerados (2 colunas) — o equivalente ao
 * grid de "serviços" da wibify, reinterpretado para o viés acadêmico: o que
 * estudo e os tópicos concretos dentro de cada área.
 */
export default function FocusAreas() {
  return (
    <section id="focus">
      <div className="container">
        <RevealOnScroll>
          <div className="section-head">
            <span className="eyebrow">O que estudo</span>
            <h2 className="section-title">
              Seis áreas que <span className="serif">me movem</span>
            </h2>
            <p className="section-lead">
              Da teoria pura à engenharia aplicada. Cada projeto neste portfólio
              nasce de uma destas frentes.
            </p>
          </div>
        </RevealOnScroll>

        <div className="focus-grid">
          {focusAreas.map((area, i) => (
            <RevealOnScroll key={area.num} delay={i * 0.06}>
              <article className="focus-card">
                <div className="focus-top">
                  <span className="focus-num">{area.num}</span>
                  <span className="focus-kicker">Área de estudo</span>
                </div>
                <h3 className="focus-title">{area.title}</h3>
                <p className="focus-desc">{area.description}</p>
                <div className="focus-topics">
                  {area.topics.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
