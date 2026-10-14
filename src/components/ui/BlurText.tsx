import { motion, useReducedMotion } from 'motion/react';

interface BlurTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  /** Atraso inicial em segundos. */
  delay?: number;
  /** A partir deste índice de palavra, usa o tom secundário (títulos em dois tons). */
  dimFrom?: number;
  /** Índices exatos a escurecer; tem prioridade sobre dimFrom (tons alternados). */
  dimWords?: number[];
  dimClassName?: string;
}

/**
 * Título que sai do desfoque palavra por palavra ao entrar na tela.
 * O texto completo vai em aria-label; as palavras animadas ficam aria-hidden,
 * para o leitor de tela não soletrar pedaço por pedaço.
 */
export default function BlurText({
  text,
  as = 'span',
  className = '',
  delay = 0,
  dimFrom,
  dimWords,
  dimClassName = 'text-muted/60',
}: BlurTextProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = text.split(' ');
  const isDim = (i: number) => (dimWords ? dimWords.includes(i) : dimFrom !== undefined && i >= dimFrom);

  return (
    <Tag aria-label={text} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          data-word
          aria-hidden
          className={`inline-block will-change-[filter,transform] ${isDim(i) ? dimClassName : ''}`}
          initial={reduce ? false : { opacity: 0, filter: 'blur(12px)', y: 20 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.7, delay: delay + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Tag>
  );
}
