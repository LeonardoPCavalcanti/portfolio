import { useEffect, useState } from 'react';

/**
 * Toggle "Lights Out" fixo no canto inferior esquerdo.
 *
 * Ao ativar:
 *   - adiciona a classe `lights-out` ao <body>, que escurece o fundo para
 *     #000 e reduz a opacidade de header, seções e footer (regras em
 *     globals.css) — o próprio toggle permanece nítido, pois fica fora desses
 *     seletores.
 *   - alterna o visual do switch (track azul, thumb preto deslocado).
 *
 * O efeito é desfeito ao desativar; a classe é removida do body no cleanup
 * para não vazar caso o componente seja desmontado.
 */
export default function LightsOutToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('lights-out', on);
    return () => document.body.classList.remove('lights-out');
  }, [on]);

  return (
    <button
      type="button"
      className={`lights-btn${on ? ' on' : ''}`}
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
      aria-label="Alternar modo Lights Out"
    >
      <span className="trk">
        <span className="tmb" />
      </span>
      <span className="t-lbl">{on ? 'LIGHTS OUT' : 'SHIFT'}</span>
    </button>
  );
}
