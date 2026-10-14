import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useId, useState } from 'react';
import { faq } from '../../data/faq';
import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';
import BlurText from '../ui/BlurText';
import Label from '../ui/Label';

export default function Faq() {
  const { t } = useT();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  const a = t(ui.faq.titleA);

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <Label>{t(ui.faq.label)}</Label>
          <BlurText as="h2" className="display mt-5 text-[clamp(32px,4.5vw,56px)]" text={`${a} ${t(ui.faq.titleB)}`} dimFrom={a.split(' ').length} />
        </div>
        <ul className="space-y-2">
          {faq.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${base}-p${i}`;
            return (
              <li key={item.q.pt} className="rounded-md border border-line bg-white">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold"
                  >
                    <span>
                      {i + 1}. {t(item.q)}
                    </span>
                    <motion.span aria-hidden animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-lg">
                      +
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink/75">{t(item.a)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
