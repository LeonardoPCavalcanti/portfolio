import type { ReactNode } from 'react';
import { useReveal } from '../../hooks/useReveal';

interface RevealOnScrollProps {
  children: ReactNode;
  /** Atraso (em segundos) para escalonar a entrada de itens em lista. */
  delay?: number;
  /** Permite passar classes adicionais ao wrapper. */
  className?: string;
}

/**
 * Envolve os filhos e os anima ao entrarem na viewport:
 * opacity 0 -> 1 e translateY 28px -> 0 (definido em globals.css via `.reveal`).
 * A transição dispara uma única vez, quando ~15% do elemento fica visível.
 */
export default function RevealOnScroll({ children, delay = 0, className = '' }: RevealOnScrollProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? ' in' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
