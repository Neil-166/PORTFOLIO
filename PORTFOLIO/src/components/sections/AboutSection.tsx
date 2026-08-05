import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Section } from '@/components/ui/Section';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { currentlyLearning } from '@/lib/constants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** About — who Neil is, where he studies, and what he is learning now. */
export function AboutSection() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Section id="about" eyebrow="PERSONAL INTRODUCTION" title="Learning with intent, building with curiosity.">
        <GlassCard className="relative overflow-hidden p-7 sm:p-9">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />
          <p className="relative max-w-4xl text-lg leading-8 text-muted">
            I chose Computer Science because I enjoy the way technology can turn an idea into something useful. Problem solving is the part of learning that keeps me curious: there is always another way to break a challenge into smaller, clearer pieces. I am currently building my foundations through Data Structures &amp; Algorithms, web development, coursework, and small projects. I am still a beginner, so I practice deliberately and treat every project as a chance to understand the basics better. My goal is to grow into a thoughtful software engineer who builds reliable experiences for real people.
          </p>
        </GlassCard>
      </Section>

      <Section
        eyebrow="AT A GLANCE"
        title="An honest snapshot of where I am today."
        copy="Early in the journey, focused on the fundamentals that compound."
      >
        <motion.div
          variants={staggerContainer}
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-3"
        >
          <motion.div variants={fadeUp}>
            <GlassCard className="p-6">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">2025–2029</p>
              <p className="mt-2 text-sm leading-6 text-muted">B.Tech CSE at ABES Engineering College, Ghaziabad</p>
            </GlassCard>
          </motion.div>
          <motion.div variants={fadeUp}>
            <GlassCard className="p-6">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">2nd Year</p>
              <p className="mt-2 text-sm leading-6 text-muted">Current focus: DSA and Web Development</p>
            </GlassCard>
          </motion.div>
          <motion.div variants={fadeUp}>
            <GlassCard className="p-6">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">Learning Stage</p>
              <p className="mt-2 text-sm leading-6 text-muted">Building practical skills one project and problem at a time</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </Section>

      <Section eyebrow="CURRENTLY LEARNING" title="What I am working on right now." copy="A focused set of fundamentals, explored steadily.">
        <motion.div
          variants={staggerContainer}
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentlyLearning.map((topic) => (
            <motion.div
              key={topic}
              variants={fadeUp}
              className="learning-chip flex items-center gap-3 rounded-2xl border border-line bg-surface/70 px-4 py-3 text-sm font-semibold text-ink"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-300 to-violet-400 shadow-glow" aria-hidden="true" />
              {topic}
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
