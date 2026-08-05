import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps extends PropsWithChildren {
  className?: string;
  /** Seconds to wait before animating in. */
  delay?: number;
  /** Initial vertical offset. */
  y?: number;
  /** How much of the element must be visible to trigger. */
  amount?: number;
}

/** Fade-and-rise wrapper for content that should animate once when scrolled into view. */
export function Reveal({ className, delay = 0, y = 24, amount = 0.25, children }: RevealProps) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, ease: easeOut, delay: reducedMotion ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
