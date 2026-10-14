import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { profile } from '../../data/profile';
import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';

/** Rodapé com o sobrenome gigante subindo preso ao scroll. */
export default function Footer() {
  const { t } = useT();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 80, 0]);

  return (
    <footer ref={ref} className="overflow-hidden bg-paper">
      <div className="container-x flex items-center justify-between border-t border-line py-5 font-mono text-xs text-muted">
        <span>© 2026 {profile.fullName}</span>
        <a href="#top" className="hover:text-ink">
          {t(ui.contact.top)} ↑
        </a>
      </div>
      <motion.p
        aria-hidden
        style={{ y }}
        className="select-none whitespace-nowrap px-2 pb-[0.06em] text-center text-[clamp(56px,17vw,280px)] font-black leading-[0.9] tracking-crush text-ink"
      >
        {profile.lastName}
        <span className="align-top text-[0.3em]">®</span>
      </motion.p>
    </footer>
  );
}
