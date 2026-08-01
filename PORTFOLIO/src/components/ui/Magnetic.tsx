import { useState, type PointerEvent, type PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Magnetic({ children }: PropsWithChildren) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion();
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setOffset({ x: (event.clientX - (bounds.left + bounds.width / 2)) * 0.16, y: (event.clientY - (bounds.top + bounds.height / 2)) * 0.16 });
  };
  return <motion.div animate={reducedMotion ? undefined : offset} transition={{ type: 'spring', stiffness: 210, damping: 15, mass: .2 }} onPointerMove={move} onPointerLeave={() => setOffset({ x: 0, y: 0 })} className="inline-flex">{children}</motion.div>;
}
