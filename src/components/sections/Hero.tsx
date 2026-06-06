import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { useClock } from '../../hooks/useClock';

/**
 * Seção Hero — 100vh, header sobreposto.
 *
 * Camadas (de trás para frente):
 *   1. .hero-grid    — grade azul translúcida com drift diagonal (CSS).
 *   2. .hero-shape   — poliedro wireframe abstrato com float vertical (CSS).
 *   3. .hero-content — eyebrow + nome gigante + subtítulo (entrada em stagger).
 *   + cantos com relógio de Brasília (esq.) e formação (dir.) + scroll cue.
 *
 * Motion (decisão de design — portfólio criativo, lente Jakub/polish):
 *   A entrada do texto é uma animação de "rare frequency" (acontece uma vez,
 *   no load) → delight é bem-vindo. Recipe de enter: opacity + translateY +
 *   blur, com easing custom (easeOutExpo) e leve stagger entre as três linhas.
 *   Em `prefers-reduced-motion`, o hook useReducedMotion zera o movimento e o
 *   blur, deixando apenas um fade discreto (Framer Motion usa JS, então o
 *   media query de CSS não o alcança — o opt-out precisa ser explícito).
 */
export default function Hero() {
  const clock = useClock();
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
        show: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      };

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

      <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
        <motion.p className="hero-eyebrow" variants={item}>
          / Full-Stack Developer
        </motion.p>
        <motion.h1 className="hero-name" variants={item}>
          Leonardo
          <br />
          Cavalcanti
        </motion.h1>
        <motion.p className="hero-sub" variants={item}>
          Code · Architecture · Interactive Design
        </motion.p>
      </motion.div>

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
