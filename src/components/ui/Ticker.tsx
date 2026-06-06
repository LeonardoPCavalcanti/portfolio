/**
 * Faixa de texto em rolagem infinita (marquee).
 *
 * Como funciona o loop sem "salto":
 *   - O conteúdo é duplicado (items + items).
 *   - A animação translateX vai de 0 a -50% (exatamente uma cópia).
 *   - Quando completa, a segunda cópia está na posição inicial da primeira,
 *     tornando o reinício imperceptível.
 *
 * Itens em índice par usam a cor dim; ímpares, a cor azul.
 */

const ITEMS = [
  'DISPONÍVEL PARA PROJETOS',
  'REMOTE-FRIENDLY',
  'RESPONDE EM 48H',
  'NATAL, RN, BRASIL',
  'BRT (UTC-3)',
  'FULL-STACK',
];

export default function Ticker() {
  // Duplicamos a lista para o loop contínuo.
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span key={i} className={`ti${i % 2 === 1 ? ' blue' : ''}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
