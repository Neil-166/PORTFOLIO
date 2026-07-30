import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function PageShell({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <motion.main initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.32 }} className={cn('min-h-screen pt-24', className)}>{children}</motion.main>;
}
