import { motion, useReducedMotion } from 'motion/react';
import { featured, others } from '../../data/projects';
import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';
import type { Project, ProjectLinks } from '../../types';
import BlurText from '../ui/BlurText';
import Label from '../ui/Label';
import AiFlow from '../ui/AiFlow';

function Links({ links, isPrivate }: { links: ProjectLinks; isPrivate?: boolean }) {
  const { t } = useT();
  const items = [
    links.site && { href: links.site, label: t(ui.projects.site) },
    links.demo && { href: links.demo, label: t(ui.projects.demo) },
    links.code && { href: links.code, label: t(ui.projects.code) },
  ].filter(Boolean) as Array<{ href: string; label: string }>;
  return (
    <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
      {items.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-orange-bright decoration-2 underline-offset-4 hover:text-orange"
        >
          {l.label} ↗
        </a>
      ))}
      {isPrivate && <span className="text-muted">● {t(ui.projects.private)}</span>}
    </div>
  );
}

function Row({ p }: { p: Project }) {
  const { t } = useT();
  const reduce = useReducedMotion();
  return (
    <article className="grid gap-6 border-t border-line py-10 md:grid-cols-[80px_1fr_minmax(0,420px)] md:gap-8">
      <p className="font-mono text-xs text-muted">
        <span className="text-orange-bright">●</span> {p.num}
      </p>
      <div>
        <h3 className="display text-3xl text-orange md:text-4xl">{p.name}</h3>
        <p className="mt-1 font-mono text-xs text-muted">
          {t(p.role)}
          {p.period ? ` · ${t(p.period)}` : ''}
        </p>
        <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-ink/80">{t(p.summary)}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
          {p.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Links links={p.links} isPrivate={p.private} />
        </div>
      </div>
      <motion.div
        className="group aspect-[16/10] overflow-hidden rounded-md bg-ink"
        initial={reduce ? false : { clipPath: 'inset(12% 12% 12% 12% round 6px)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 6px)' }}
        viewport={{ once: true, margin: '0px 0px -15% 0px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {p.illustration === 'ai-flow' ? (
          <AiFlow />
        ) : (
          <img
            src={p.shot}
            alt={p.shotAlt ? t(p.shotAlt) : ''}
            loading="lazy"
            width={1424}
            height={900}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        )}
      </motion.div>
    </article>
  );
}

export default function Projects() {
  const { t } = useT();
  // "Software que | está no ar | e gente | usa": escurece a 2ª e a 4ª parte.
  const parts = [ui.projects.titleA, ui.projects.titleB, ui.projects.titleC, ui.projects.titleD].map((p) => t(p));
  const dimWords: number[] = [];
  let idx = 0;
  parts.forEach((part, pi) => {
    const n = part.split(' ').length;
    if (pi % 2 === 1) for (let k = 0; k < n; k++) dimWords.push(idx + k);
    idx += n;
  });
  return (
    <section id="projetos" className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <Label>{t(ui.projects.label)}</Label>
        <BlurText as="h2" className="display mt-5 text-[clamp(36px,6vw,72px)]" text={parts.join(' ')} dimWords={dimWords} />
        <div className="mt-12">
          {featured.map((p) => (
            <Row key={p.id} p={p} />
          ))}
        </div>

        <h3 className="mt-16 font-mono text-xs uppercase tracking-[0.08em] text-muted">{t(ui.projects.othersTitle)}</h3>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {others.map((o) => (
            <li key={o.id} className="grid gap-2 py-4 md:grid-cols-[200px_1fr_auto] md:items-center md:gap-6">
              <span className="font-extrabold">{o.name}</span>
              <span className="text-sm text-ink/75">
                {t(o.line)} <span className="font-mono text-[11px] text-muted">· {o.stack.join(' · ')}</span>
              </span>
              <Links links={o.links} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
