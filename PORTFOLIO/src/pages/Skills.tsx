import { useState } from 'react';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { levelBadgeStyles, levelIndicatorDots, skills } from '@/data/skills';

export default function Skills() {
  const [active, setActive] = useState('All');
  const categories = ['All', ...new Set(skills.map((skill) => skill.category))];
  const visible = active === 'All' ? skills : skills.filter((skill) => skill.category === active);

  return (
    <>
      <Seo title="Skills" path="/skills" />
      <PageShell>
        <Section
          eyebrow="CAPABILITIES"
          title="Tools I am learning. Craft I am building."
          copy="Realistic skill levels for a second-year student — no inflated percentages."
        >
          <div className="mb-7 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={
                  active === category
                    ? 'rounded-full bg-brand px-4 py-2 text-xs font-bold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas'
                    : 'rounded-full border border-line px-4 py-2 text-xs font-bold text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand'
                }
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map(({ name, levelLabel, color, icon: Icon }) => (
              <GlassCard key={name} className="group p-5">
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-xl"
                    style={{ color }}
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${levelBadgeStyles[levelLabel]}`}
                  >
                    {levelLabel}
                  </span>
                </div>
                <h3 className="mt-5 font-semibold text-ink">{name}</h3>
                <div className="mt-3 flex items-center gap-1.5" aria-label={`${name}: ${levelLabel}`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`h-1.5 flex-1 rounded-full ${index < levelIndicatorDots[levelLabel] ? 'bg-brand/70' : 'bg-white/10'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>

        <Section eyebrow="LEARNING NOTE" title="Progress over percentages.">
          <GlassCard hover={false} className="p-7">
            <p className="max-w-3xl text-base leading-7 text-muted">
              I&apos;m currently strengthening these skills through projects, practice, and coursework. The labels above describe my current learning stage, not a claim of mastery.
            </p>
          </GlassCard>
        </Section>
      </PageShell>
    </>
  );
}
