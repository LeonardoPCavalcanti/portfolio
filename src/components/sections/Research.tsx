import { paper } from '../../data/research';
import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';
import BlurText from '../ui/BlurText';
import Label from '../ui/Label';
import Magnetic from '../ui/Magnetic';

export default function Research() {
  const { t } = useT();
  const a = t(ui.research.titleA);
  return (
    <section id="pesquisa" className="border-t border-line bg-paper py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <div>
          <Label>{t(ui.research.label)}</Label>
          <BlurText
            as="h2"
            className="display mt-5 text-[clamp(34px,5vw,60px)]"
            text={`${a} ${t(ui.research.titleB)}`}
            dimFrom={a.split(' ').length}
          />
        </div>
        <figure className="rounded-lg border border-line bg-white p-6 md:p-8">
          <blockquote lang="pt-BR" className="text-xl font-extrabold leading-snug tracking-tight md:text-2xl">
            {paper.title}
          </blockquote>
          <figcaption className="mt-4 font-mono text-xs leading-relaxed text-muted">
            {paper.authors}
            <br />
            {paper.venue} · {paper.pages}
          </figcaption>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/80">{t(paper.contribution)}</p>
          <div className="mt-6">
            <Magnetic>
              <a
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange"
              >
                {t(ui.research.read)} <span aria-hidden>↗</span>
              </a>
            </Magnetic>
          </div>
        </figure>
      </div>
    </section>
  );
}
