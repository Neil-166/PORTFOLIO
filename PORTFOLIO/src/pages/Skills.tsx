import { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { radarSkills, skills } from '@/data/skills';

export default function Skills() {
  const [active, setActive] = useState('All');
  const categories = ['All', ...new Set(skills.map((skill) => skill.category))];
  const visible = active === 'All' ? skills : skills.filter((skill) => skill.category === active);
  return <><Seo title="Skills" path="/skills" /><PageShell><Section eyebrow="CAPABILITIES" title="Tools are a means. Craft is the point." copy="A growing toolkit across product interfaces, programming foundations, and the systems behind them."><div className="mb-7 flex flex-wrap gap-2">{categories.map((category) => <button key={category} onClick={() => setActive(category)} className={active === category ? 'rounded-full bg-brand px-4 py-2 text-xs font-bold text-slate-950' : 'rounded-full border border-line px-4 py-2 text-xs font-bold text-muted transition hover:text-ink'}>{category}</button>)}</div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visible.map(({ name, level, color, icon: Icon }) => <GlassCard key={name} className="group p-5"><div className="flex items-center justify-between"><span title={`${name}: ${level}% confidence`} className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-xl" style={{ color }}><Icon /></span><span className="font-display text-xl font-bold text-ink">{level}%</span></div><div className="mt-5 flex items-center justify-between"><h3 className="font-semibold text-ink">{name}</h3><span className="text-xs text-muted">Learning</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full transition-all duration-700" style={{ width: `${level}%`, backgroundColor: color }} /></div></GlassCard>)}</div></Section><Section eyebrow="SKILL SHAPE" title="Where I’m spending my energy."><GlassCard hover={false} className="h-[380px] p-3 sm:p-7"><ResponsiveContainer width="100%" height="100%"><RadarChart data={radarSkills} outerRadius="72%"><PolarGrid stroke="rgb(255 255 255 / .14)" /><PolarAngleAxis dataKey="subject" tick={{ fill: 'rgb(160 167 187)', fontSize: 12 }} /><Tooltip contentStyle={{ background: '#10131e', border: '1px solid #293044', borderRadius: 12 }} /><Radar dataKey="value" stroke="#778cff" fill="#778cff" fillOpacity={0.28} /></RadarChart></ResponsiveContainer></GlassCard></Section></PageShell></>;
}
