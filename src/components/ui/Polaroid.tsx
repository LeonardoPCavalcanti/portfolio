import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react';
import type { PointerEvent } from 'react';

interface PolaroidProps {
  image: string;
  alt: string;
  title: string;
  tag: string;
  href: string;
}

/** Cartão de foto instantânea que inclina seguindo o cursor (mola). */
export default function Polaroid({ image, alt, title, tag, href }: PolaroidProps) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 200, damping: 18 });
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 18 });

  function onMove(e: PointerEvent<HTMLAnchorElement>) {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      style={{ rotateX, rotateY, rotate: 2, transformPerspective: 800 }}
      className="block w-[200px] bg-white p-2 text-ink shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
    >
      <img src={image} alt={alt} width={184} height={115} className="h-[115px] w-full object-cover object-top" />
      <span className="flex justify-between gap-2 whitespace-nowrap px-0.5 pt-2 font-mono text-[10px]">
        <span>
          <span className="text-orange-bright">●</span> {title}
        </span>
        <span className="text-muted">{tag}</span>
      </span>
    </motion.a>
  );
}
