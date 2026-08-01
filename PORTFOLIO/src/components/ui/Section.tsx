import type { PropsWithChildren, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionProps extends PropsWithChildren { id?: string; eyebrow?: string; title?: ReactNode; copy?: string; className?: string; }

export function Section({ id, eyebrow, title, copy, className, children }: SectionProps) {
  const reducedMotion = useReducedMotion();
  return (
    <section id={id} className={cn('section-shell', className)}>
      {(eyebrow || title || copy) && (
        <motion.header initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} className="mb-10 max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] text-ink sm:text-4xl">{title}</h2>}
          {copy && <p className="mt-4 leading-7 text-muted">{copy}</p>}
        </motion.header>
      )}
      {children}
    </section>
  );
}
