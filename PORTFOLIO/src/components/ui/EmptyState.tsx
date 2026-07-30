import type { ReactNode } from 'react';
import { FaWandMagicSparkles } from 'react-icons/fa6';

export function EmptyState({ title = 'Coming soon', copy = 'This space is being thoughtfully prepared. Check back shortly.', action }: { title?: string; copy?: string; action?: ReactNode }) {
  return <div className="glass-card grid min-h-64 place-items-center p-8 text-center"><div><span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand/15 text-brand"><FaWandMagicSparkles /></span><h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted">{copy}</p>{action && <div className="mt-5">{action}</div>}</div></div>;
}
