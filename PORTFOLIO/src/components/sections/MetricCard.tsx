import type { IconType } from 'react-icons';
import { GlassCard } from '@/components/ui/GlassCard';

export function MetricCard({ label, value, icon: Icon, caption }: { label: string; value: string | number; icon: IconType; caption?: string }) {
  return <GlassCard className="p-5"><div className="flex items-start justify-between"><p className="text-sm font-semibold text-muted">{label}</p><span className="grid h-9 w-9 place-items-center rounded-xl bg-brand/12 text-brand"><Icon /></span></div><p className="mt-5 font-display text-3xl font-bold tracking-tight text-ink">{value}</p>{caption && <p className="mt-1 text-xs text-muted">{caption}</p>}</GlassCard>;
}
