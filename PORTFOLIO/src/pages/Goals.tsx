import { FaArrowRight, FaFlagCheckered } from 'react-icons/fa6';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { goals } from '@/data/content';

export default function Goals() { return <><Seo title="Goals" path="/goals" /><PageShell><Section eyebrow="DIRECTION" title="A long view, held lightly." copy="Ambition works best when it has a rhythm: a meaningful next step, then another."><div className="relative grid gap-5 lg:grid-cols-3">{goals.map((goal, index) => <article key={goal.title} className="relative rounded-3xl border border-line bg-surface p-7"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand"><FaFlagCheckered /></span><p className="mt-6 text-xs font-bold tracking-[.15em] text-brand">{goal.horizon.toUpperCase()}</p><h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">{goal.title}</h2><p className="mt-3 text-sm leading-7 text-muted">{goal.copy}</p><div className="mt-7 flex items-center justify-between border-t border-line pt-5"><span className="text-xs font-bold text-muted">{goal.status}</span>{index < goals.length - 1 && <FaArrowRight className="hidden text-brand lg:block" />}</div></article>)}</div></Section></PageShell></>; }
