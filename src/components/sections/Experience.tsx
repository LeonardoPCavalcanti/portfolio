import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { useRef } from 'react';
import { experience } from '../../data/experience';
import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';
import Label from '../ui/Label';

function Word({ word, i, total, progress }: { word: string; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const opacity = useTransform(progress, [start, start + 1 / total], [0.18, 1]);
  return (
    <motion.span aria-hidden style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
}

/** Faixa preta: o título acende palavra por palavra conforme o scroll avança. */
export default function Experience() {
  const { t } = useT();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 35%'] });
  const title = t(ui.experience.title);
  const words = title.split(' ');

  return (
    <section id="experiencia" className="bg-ink py-20 text-[#F2F0EA] md:py-28">
      <div className="container-x">
        <Label dark>{t(ui.experience.label)}</Label>
        <h2 ref={ref} aria-label={title} className="display mt-5 max-w-[900px] text-[clamp(38px,6.5vw,84px)]">
          {reduce ? title : words.map((w, i) => <Word key={`${w}-${i}`} word={w} i={i} total={words.length} progress={scrollYProgress} />)}
        </h2>
        <ol className="mt-14">
          {experience.map((e) => (
            <li key={e.org} className="grid gap-1 border-t border-white/10 py-5 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-6">
              <span className="font-mono text-xs text-white/55">{t(e.period)}</span>
              <span>
                <span className="font-extrabold">{e.org}</span>
                <span className="text-white/60"> · {t(e.role)}</span>
                {e.current && <span className="ml-2 font-mono text-[10px] uppercase text-orange-bright">● {t(ui.experience.current)}</span>}
              </span>
              <span className="font-mono text-xs text-white/55 md:text-right">{t(e.tag)}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
