import { profile } from '../../data/profile';
import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';
import BlurText from '../ui/BlurText';
import Label from '../ui/Label';
import Magnetic from '../ui/Magnetic';

export default function Contact() {
  const { t } = useT();
  const cv = `${import.meta.env.BASE_URL}${profile.cvPath}`;
  const links = [
    { label: t(ui.contact.email), href: `mailto:${profile.email}`, text: profile.email },
    { label: 'LinkedIn', href: profile.linkedin, text: 'leonardocavalcanti-dev' },
    { label: 'GitHub', href: profile.github, text: 'LeonardoPCavalcanti' },
  ];
  return (
    <section id="contato" className="border-t border-line bg-paper py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <Label>{t(ui.contact.label)}</Label>
          <BlurText as="h2" className="display mt-5 text-[clamp(36px,5.5vw,68px)]" text={t(ui.contact.title)} />
          <div className="mt-8">
            <Magnetic>
              <a
                href={cv}
                download
                className="inline-flex items-center gap-3 rounded-full bg-orange px-6 py-3.5 font-semibold text-white transition-colors hover:bg-ink"
              >
                {t(ui.contact.cv)} <span aria-hidden>↓</span>
              </a>
            </Magnetic>
          </div>
        </div>
        <ul className="self-end divide-y divide-line border-y border-line">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex flex-col items-start gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="font-mono text-xs uppercase text-muted">{l.label}</span>
                <span className="font-semibold [overflow-wrap:anywhere] group-hover:text-orange sm:text-right">
                  {l.text} <span aria-hidden>↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
