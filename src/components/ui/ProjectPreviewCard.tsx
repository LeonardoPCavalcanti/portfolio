import { useEffect, useRef } from 'react';

interface ProjectPreviewCardProps {
  /** Emoji do projeto atualmente sob o cursor. */
  icon: string;
  /** Rótulo curto do projeto. */
  label: string;
  /** Se o card deve estar visível (mouse sobre um item). */
  visible: boolean;
}

const OFFSET = 20; // distância do cursor para o card não ficar sob o ponteiro
const CARD_W = 280;
const CARD_H = 190;

/**
 * Card flutuante (280×190px) que segue o cursor enquanto o mouse está sobre
 * um item de projeto, mostrando o emoji e o rótulo do projeto.
 *
 * Performance: a posição é escrita diretamente no `transform` via ref, sem
 * state do React — assim o card acompanha o mouse suavemente sem re-renders.
 *
 * Os limites da janela são respeitados: o card é deslocado para a esquerda/
 * cima do cursor quando estaria saindo da tela à direita/embaixo.
 */
export default function ProjectPreviewCard({ icon, label, visible }: ProjectPreviewCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent): void => {
      // Por padrão posiciona o card abaixo/à direita do cursor.
      let x = e.clientX + OFFSET;
      let y = e.clientY + OFFSET;

      // Evita ultrapassar a borda direita / inferior da janela.
      if (x + CARD_W > window.innerWidth) x = e.clientX - CARD_W - OFFSET;
      if (y + CARD_H > window.innerHeight) y = e.clientY - CARD_H - OFFSET;

      card.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div ref={cardRef} className={`project-preview${visible ? ' visible' : ''}`} aria-hidden="true">
      <span className="preview-icon">{icon}</span>
      <span className="preview-lbl">{label}</span>
    </div>
  );
}
