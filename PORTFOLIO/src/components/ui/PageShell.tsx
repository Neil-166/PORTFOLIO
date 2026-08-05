import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function PageShell({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reducedMotion = useReducedMotion();
  return <motion.main initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reducedMotion ? 0 : 0.32 }} className={cn('min-h-screen pt-28', className)}>{children}</motion.main>;
}
