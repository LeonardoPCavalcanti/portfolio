import type { ReactNode } from 'react';

/** Etiqueta em pílula com o ponto laranja que abre cada seção. */
export default function Label({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={`label-pill${dark ? ' label-pill--dark' : ''}`}>{children}</span>;
}
