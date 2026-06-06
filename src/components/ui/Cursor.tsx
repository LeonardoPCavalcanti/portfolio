import { useRef } from 'react';
import { useCursor } from '../../hooks/useCursor';

/**
 * Cursor customizado que substitui o ponteiro nativo.
 *
 * Estratégia de performance:
 *   - A POSIÇÃO é escrita diretamente no `transform` do <div> pelo hook
 *     useCursor (via ref), sem passar pelo state do React. Isso evita
 *     re-renderizar o componente a cada movimento do mouse.
 *   - Apenas o estado de HOVER (que muda raramente) vem do React e alterna
 *     a classe `.hover`, que expande o círculo de 12px -> 40px.
 *
 * Em dispositivos touch (sem hover real), `enabled` é false e nada é renderizado,
 * preservando o cursor nativo.
 */
export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { enabled, isHovering } = useCursor(cursorRef);

  if (!enabled) return null;

  return <div ref={cursorRef} className={`cursor${isHovering ? ' hover' : ''}`} aria-hidden="true" />;
}
