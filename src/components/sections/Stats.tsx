import { stats } from '../../data/stats';
import { useT } from '../../i18n/useT';
import CountUp from '../ui/CountUp';

export default function Stats() {
  const { t, lang } = useT();
  return (
    <section aria-label={lang === 'pt' ? 'Números' : 'Numbers'} className="border-b border-line bg-paper">
      <dl className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
        {stats.map((s) => (
          // flex-col-reverse: número acima do rótulo, mantendo dt antes de dd no DOM.
          <div key={s.label.pt} className="flex flex-col-reverse border-l border-line pl-5">
            <dt className="mt-2 max-w-[180px] text-sm leading-snug text-muted">{t(s.label)}</dt>
            <dd className="text-5xl font-extrabold tracking-tightest text-ink md:text-6xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
