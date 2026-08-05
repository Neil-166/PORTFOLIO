import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Section } from '@/components/ui/Section';
import { levelBadgeStyles, levelIndicatorDots, skills } from '@/data/skills';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** Skills — filterable grid of tools with honest beginner/intermediate labels. */
export function SkillsSection() {
  const [active, setActive] = useState('All');
  const reducedMotion = useReducedMotion();
  const categories = ['All', ...new Set(skills.map((skill) => skill.category))];
  const visible = active === 'All' ? skills : skills.filter((skill) => skill.category === active);

  return (
    <Section
      id="skills"
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
      <motion.div
        variants={staggerContainer}
        initial={reducedMotion ? false : 'hidden'}
        whileInView={reducedMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map(({ name, levelLabel, color, icon: Icon }) => (
          <motion.div key={name} variants={fadeUp}>
            <GlassCard className="group p-5">
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
          </motion.div>
        ))}
      </motion.div>

      <GlassCard hover={false} className="mt-8 p-7">
        <p className="max-w-3xl text-base leading-7 text-muted">
          I&apos;m currently strengthening these skills through projects, practice, and coursework. The labels above describe my current learning stage, not a claim of mastery.
        </p>
      </GlassCard>
    </Section>
  );
}
