import { useT } from '../../i18n/useT';
import { ui } from '../../i18n/ui';
import type { Lang } from '../../i18n/types';

export const NAV = [
  { href: '#projetos', label: ui.nav.projects },
  { href: '#pesquisa', label: ui.nav.research },
  { href: '#experiencia', label: ui.nav.experience },
  { href: '#contato', label: ui.nav.contact },
] as const;

export default function Header() {
  const { lang, setLang, t } = useT();
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ink focus:px-3 focus:py-2"
      >
        {t(ui.nav.skip)}
      </a>
      <div className="container-x flex flex-wrap items-center justify-between gap-y-3 py-5">
        <a href="#top" className="text-sm font-extrabold tracking-tight">
          Leonardo®
        </a>
        <nav
          aria-label={t(ui.nav.mainLabel)}
          className="order-last flex w-full gap-5 text-xs font-medium md:order-none md:w-auto md:gap-7 md:text-sm"
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="opacity-90 transition-opacity hover:opacity-100">
              {t(n.label)}
            </a>
          ))}
        </nav>
        <div role="group" aria-label={t(ui.nav.langLabel)} className="flex rounded-full border border-white/40 p-0.5 font-mono text-[11px]">
          {(['pt', 'en'] as Lang[]).map((l) => (
            <button
              key={l}
              type="button"
              aria-pressed={lang === l}
              onClick={() => setLang(l)}
              className={`rounded-full px-2.5 py-1 uppercase transition-colors ${lang === l ? 'bg-white text-orange' : 'text-white hover:bg-white/15'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
