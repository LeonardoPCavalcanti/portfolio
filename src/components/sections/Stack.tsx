import { motion, useReducedMotion } from 'motion/react';
import { primaryStack, secondaryStack } from '../../data/stack';
import { featured, others } from '../../data/projects';
import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';
import type { StackItem } from '../../types';
import BlurText from '../ui/BlurText';
import Label from '../ui/Label';

const names = new Map([...featured, ...others].map((p) => [p.id, p.name]));

export default function Stack() {
  const { t } = useT();
  const reduce = useReducedMotion();
  const label = (s: StackItem) => (typeof s.name === 'string' ? s.name : t(s.name));
  const used = (s: StackItem) => s.usedIn.map((id) => (id === 'research' ? t(ui.research.label) : names.get(id))).join(' · ');
  const a = t(ui.stack.titleA);

  return (
    <section id="stack" className="border-t border-line bg-paper py-20 md:py-28">
      <div className="container-x">
        <Label>{t(ui.stack.label)}</Label>
        <BlurText as="h2" className="display mt-5 text-[clamp(34px,5vw,60px)]" text={`${a} ${t(ui.stack.titleB)}`} dimFrom={a.split(' ').length} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {primaryStack.map((s, i) => (
            <motion.li
              key={label(s)}
              className="flex min-h-[170px] flex-col bg-white p-5"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
              <span className="mt-3 text-xl font-extrabold tracking-tight">{label(s)}</span>
              {s.detail && <span className="font-mono text-[11px] text-muted">{s.detail}</span>}
              <span className="mt-auto pt-4 text-xs leading-snug text-ink/70">
                <span className="font-mono text-muted">{t(ui.stack.usedIn)}:</span> {used(s)}
              </span>
            </motion.li>
          ))}
        </ul>
        <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
          <span className="font-mono text-xs uppercase tracking-[0.06em] text-muted">{t(ui.stack.also)}</span>
          {secondaryStack.map((s) => (
            <span key={label(s)} className="font-semibold">
              {label(s)}
              {s.detail ? <span className="font-normal text-muted"> ({s.detail})</span> : null}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
