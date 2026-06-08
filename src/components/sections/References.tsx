import { references } from '../../data/references';
import RevealOnScroll from '../ui/RevealOnScroll';

/**
 * Leituras de referência — inspirada na seção "Verify our claims / References"
 * da wibify, aqui voltada a compartilhar conhecimento: as obras canônicas por
 * trás de cada projeto, em cartões com nome de arquivo em mono, linkando para
 * a fonte original. Quem visita o perfil pode seguir as mesmas trilhas.
 */
export default function References() {
  return (
    <section id="references">
      <div className="container">
        <RevealOnScroll>
          <div className="section-head">
            <span className="eyebrow">Leituras de referência</span>
            <h2 className="section-title">
              As fontes <span className="serif">por trás</span> dos projetos
            </h2>
            <p className="section-lead">
              Não acredite só na minha palavra — aqui estão os artigos e livros
              que fundamentam cada área. Bons pontos de partida para estudar.
            </p>
          </div>
        </RevealOnScroll>

        <div className="ref-grid">
          {references.map((ref, i) => (
            <RevealOnScroll key={ref.file} delay={i * 0.05}>
              <a className="ref-card" href={ref.href} target="_blank" rel="noreferrer">
                <span className="ref-file">{ref.file}</span>
                <p className="ref-title">{ref.title}</p>
                <p className="ref-author">{ref.author}</p>
                <p className="ref-note">{ref.note}</p>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
