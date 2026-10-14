import { useT } from '../../i18n/useT';

const L = {
  aria: {
    pt: 'Pedido, roteador de provedores com failover, avaliação e fine-tuning',
    en: 'Request, provider router with failover, evaluation and fine-tuning',
  },
  request: { pt: 'pedido', en: 'request' },
  router: { pt: 'roteador', en: 'router' },
  eval: { pt: 'avaliação', en: 'evaluation' },
};

/** Ilustração do fluxo da Intranet IA: nenhum dado real, só a arquitetura. */
export default function AiFlow() {
  const { t } = useT();
  const node = 'rounded border border-white/15 bg-white/5 px-2 py-1';
  return (
    <div role="img" aria-label={t(L.aria)} className="flex h-full flex-col justify-center gap-3 bg-ink p-5 font-mono text-[11px] text-white/80">
      <div className="flex items-center gap-2">
        <span className={node}>{t(L.request)}</span>
        <span aria-hidden>→</span>
        <span className={`${node} border-orange-bright/60 text-white`}>{t(L.router)}</span>
      </div>
      <div className="ml-14 flex flex-wrap gap-1.5">
        {['groq', 'openrouter', 'mistral', 'nvidia'].map((p) => (
          <span key={p} className={node}>
            {p}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span aria-hidden>↳</span>
        <span className={node}>{t(L.eval)}</span>
        <span aria-hidden>→</span>
        <span className={node}>SFT · KTO</span>
      </div>
    </div>
  );
}
