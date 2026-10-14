import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import type { ReactNode, PointerEvent } from 'react';

/** Puxa levemente o filho na direção do cursor. Só com mouse, nunca com movimento reduzido. */
export default function Magnetic({ children, strength = 0.25 }: { children: ReactNode; strength?: number }) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20, mass: 0.4 });

  function onMove(e: PointerEvent<HTMLSpanElement>) {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  return (
    <motion.span
      className="inline-block"
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
