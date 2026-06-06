import { useEffect, useState, type RefObject } from 'react';

/**
 * Controla o cursor customizado.
 *
 * Em vez de guardar a posição em state do React (o que dispararia re-render a
 * cada pixel de movimento do mouse), escrevemos a posição diretamente no
 * `transform` do elemento referenciado — isso mantém o movimento fluido.
 *
 * O estado de "hover" (expandir o círculo) é mantido em React porque muda com
 * pouca frequência: apenas quando o mouse entra/sai de elementos interativos.
 *
 * Em dispositivos sem hover (touch) o cursor é desabilitado por completo.
 *
 * @param ref referência para o <div> que representa o cursor
 * @returns enabled — se o cursor customizado deve ser renderizado
 *          isHovering — se o cursor está sobre um elemento interativo
 */
export function useCursor(ref: RefObject<HTMLDivElement>) {
  // Detecta touch devices: não há cursor para substituir.
  const [enabled] = useState<boolean>(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches,
  );
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const cursor = ref.current;
    if (!cursor) return;

    // Seletor dos elementos que devem expandir o cursor.
    const interactiveSelector = 'a, button, [data-cursor-hover]';

    const handleMove = (e: MouseEvent): void => {
      // translate(-50%, -50%) centraliza o círculo no ponteiro.
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

      // Verifica se o elemento sob o cursor (ou um ancestral) é interativo.
      const target = e.target as Element | null;
      setIsHovering(Boolean(target?.closest(interactiveSelector)));
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [enabled, ref]);

  return { enabled, isHovering };
}
