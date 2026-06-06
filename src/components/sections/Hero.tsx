import { useClock } from '../../hooks/useClock';

/**
 * Seção Hero — 100vh, header sobreposto.
 *
 * Camadas (de trás para frente):
 *   1. .hero-grid    — grade azul translúcida com drift diagonal (CSS).
 *   2. .hero-shape   — poliedro wireframe abstrato com float vertical (CSS).
 *   3. .hero-content — eyebrow + nome gigante + subtítulo.
 *   + cantos com relógio de Brasília (esq.) e formação (dir.) + scroll cue.
 *
 * O SVG é um poliedro geométrico abstrato: vértices conectados por linhas
 * finas, pontos azuis nos vértices e um brilho azul suave no vértice superior.
 * Inspirado na estética de yutaabe.com sem copiar o mascote.
 */
export default function Hero() {
  const clock = useClock();

  return (
    <section id="home">
      <div className="hero-grid" />

      <svg className="hero-shape" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#F0EDE8" strokeWidth="0.7" fill="none" opacity="0.4">
          {/* contorno externo do poliedro */}
          <polygon points="200,30 340,115 300,270 100,270 60,115" />
          {/* arestas internas convergindo aos vértices */}
          <line x1="200" y1="30" x2="300" y2="270" />
          <line x1="200" y1="30" x2="100" y2="270" />
          <line x1="340" y1="115" x2="100" y2="270" />
          <line x1="60" y1="115" x2="300" y2="270" />
          <line x1="200" y1="30" x2="200" y2="310" />
          {/* malha facetada interna */}
          <polyline
            points="60,115 130,90 200,30 270,90 340,115 280,210 200,270 120,210 60,115"
            opacity="0.35"
          />
          {/* pontos azuis nos vértices */}
          <circle cx="200" cy="30" r="4" fill="#30b8ff" stroke="none" opacity="0.9" />
          <circle cx="340" cy="115" r="3" fill="#30b8ff" stroke="none" opacity="0.7" />
          <circle cx="60" cy="115" r="3" fill="#30b8ff" stroke="none" opacity="0.7" />
          <circle cx="300" cy="270" r="3" fill="#30b8ff" stroke="none" opacity="0.4" />
          <circle cx="100" cy="270" r="3" fill="#30b8ff" stroke="none" opacity="0.4" />
          <circle cx="200" cy="310" r="2" fill="#30b8ff" stroke="none" opacity="0.3" />
        </g>
        {/* brilho azul suave no vértice superior */}
        <circle cx="200" cy="30" r="55" fill="#30b8ff" opacity="0.06" />
      </svg>

      <div className="hero-content">
        <p className="hero-eyebrow">/ Full-Stack Developer</p>
        <h1 className="hero-name">
          Leonardo
          <br />
          Cavalcanti
        </h1>
        <p className="hero-sub">Code · Architecture · Interactive Design</p>
      </div>

      <div className="corner-info bl">
        <span>{clock}</span>
        <br />
        <span>Natal, RN · BRT (UTC-3)</span>
      </div>
      <div className="corner-info br">
        <span>Engenharia da Computação</span>
        <br />
        <span>UFRN · 2022</span>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
