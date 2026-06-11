import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

/** Estatísticas-resumo exibidas abaixo do título (mistura mono + serif). */
const stats = [
  { num: '2022', serif: false, label: 'Codando desde' },
  { num: '6', serif: false, label: 'Projetos públicos & privados' },
  { num: '3', serif: false, label: 'Anos de experiência' },
  { num: 'IC', serif: true, label: 'Iniciação científica · IMD/UFRN' },
];

/**
 * Hero editorial: eyebrow em mono, título gigante misturando Switzer com
 * acentos em Instrument Serif itálico, subtítulo, dois botões pill e uma
 * faixa de estatísticas. Entrada única no load, escalonada — em
 * prefers-reduced-motion, só um fade discreto.
 */
export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
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
      <motion.div className="container" variants={container} initial="hidden" animate="show">
        <motion.p className="eyebrow hero-eyebrow" variants={item}>
          Leonardo Cavalcanti · Full-Stack & Ciência da Computação
        </motion.p>

        <motion.h1 className="hero-title" variants={item}>
          Construo software — e estudo{' '}
          <span className="serif">por que</span> ele funciona.
        </motion.h1>

        <motion.p className="hero-sub" variants={item}>
          Desenvolvedor full-stack com base sólida em teoria da computação:
          sistemas distribuídos, compiladores e computação paralela. Cada projeto
          aqui vem com o conceito que ele ensina — para compartilhar conhecimento,
          não só código.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <a className="btn btn-fill" href="#projects">
            Ver projetos <ArrowUpRight size={16} />
          </a>
          <a
            className="btn btn-out"
            href="https://github.com/LeonardoPCavalcanti"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={item}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="hstat-num">
                <span className={s.serif ? 'serif' : undefined}>{s.num}</span>
              </div>
              <div className="hstat-lbl">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
