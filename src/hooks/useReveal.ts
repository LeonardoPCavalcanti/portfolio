import { useEffect, useRef, useState } from 'react';

/**
 * Observa um elemento e indica quando ele entra na viewport.
 * Usado pelo RevealOnScroll para disparar a animação de entrada
 * (opacity 0 -> 1, translateY 28px -> 0) uma única vez.
 *
 * @param threshold fração do elemento que precisa estar visível (0.15 = 15%)
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback: se o navegador não suportar IntersectionObserver, revela direto.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // revela apenas uma vez
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
