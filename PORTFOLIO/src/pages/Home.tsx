import { motion } from 'framer-motion';
import {
  FaArrowDown,
  FaArrowRight,
  FaCode,
  FaLocationDot,
  FaWandMagicSparkles,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/ui/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { GlassCard } from '@/components/ui/GlassCard';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { CodingProfileCard } from '@/components/sections/CodingProfileCard';
import { projects } from '@/data/projects';
import { codingProfiles, currentlyLearning, siteConfig, socialLinks } from '@/lib/constants';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useTypewriter } from '@/hooks/useTypewriter';

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  const reducedMotion = useReducedMotion();
  const role = useTypewriter('Aspiring Software Engineer', 70, !reducedMotion);

  return (
    <>
      <Seo />
      <main>
        <section className="relative flex min-h-[min(820px,100svh)] items-center overflow-hidden px-5 pb-14 pt-32 sm:px-8">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_45%_32%,rgb(var(--brand)/.12),transparent_36%)]" />

          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={reducedMotion ? false : 'hidden'}
                animate="visible"
                variants={reveal}
                className="internship-badge inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-200"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                🟢 Open to Internship Opportunities
              </motion.div>

              <motion.h1
                initial={reducedMotion ? false : 'hidden'}
                animate="visible"
                variants={reveal}
                transition={{ delay: reducedMotion ? 0 : 0.08 }}
                className="mt-7 font-display text-3xl font-bold leading-tight tracking-[-0.045em] text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
              >
                Neil Dua — B.Tech CSE Student | Aspiring Software Engineer | Learning Full Stack Development
              </motion.h1>

              <motion.p
                initial={reducedMotion ? false : 'hidden'}
                animate="visible"
                variants={reveal}
                transition={{ delay: reducedMotion ? 0 : 0.15 }}
                className="mt-5 max-w-2xl text-lg leading-7 text-muted sm:text-xl"
              >
                “I’m a second-year Computer Science student who enjoys solving problems with code and building modern web applications while continuously improving my DSA and development skills.”
              </motion.p>

              <motion.p
                initial={reducedMotion ? false : 'hidden'}
                animate="visible"
                variants={reveal}
                transition={{ delay: reducedMotion ? 0 : 0.22 }}
                className="mt-5 flex min-h-7 items-center gap-2 text-sm font-semibold text-brand"
              >
                <span className="text-muted">On the path to:</span>
                <span aria-live="polite">{role}</span>
                {!reducedMotion && <span className="type-caret" aria-hidden="true" />}
              </motion.p>

              <motion.div
                initial={reducedMotion ? false : 'hidden'}
                animate="visible"
                variants={reveal}
                transition={{ delay: reducedMotion ? 0 : 0.28 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Magnetic>
                  <ButtonLink to="/projects">
                    View Projects <FaArrowRight aria-hidden="true" />
                  </ButtonLink>
                </Magnetic>
                <Magnetic>
                  <ButtonLink to="/contact" variant="secondary">
                    Contact Me
                  </ButtonLink>
                </Magnetic>
                <Magnetic>
                  {/* TODO: Replace public/resume.pdf with Neil's current resume. */}
                  <ButtonLink href={siteConfig.resumePath} variant="secondary" download aria-label="Download resume PDF">
                    Download Resume
                  </ButtonLink>
                </Magnetic>
              </motion.div>

              <motion.div
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reducedMotion ? 0 : 0.4 }}
                className="mt-10 flex items-center gap-3"
              >
                <span className="text-xs font-semibold text-muted">FIND ME ON</span>
                <div className="h-px w-8 bg-line" aria-hidden="true" />
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Magnetic key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="grid h-10 w-10 place-items-center rounded-xl border border-transparent text-muted transition hover:border-brand/35 hover:bg-white/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                      aria-label={label}
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  </Magnetic>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: reducedMotion ? 0 : 0.16, type: 'spring', stiffness: 130, damping: 18 }}
              className="mx-auto w-full max-w-[19rem]"
            >
              <div className="profile-frame relative grid aspect-square place-items-center overflow-hidden rounded-[2rem] border border-brand/30 bg-gradient-to-br from-brand/20 via-violet-500/10 to-cyan-300/10 p-5 shadow-glow">
                <div className="absolute inset-4 rounded-[1.45rem] border border-dashed border-brand/35" aria-hidden="true" />
                <div className="relative grid h-44 w-44 place-items-center rounded-[1.65rem] border border-white/10 bg-canvas/75 text-center backdrop-blur-xl">
                  {/* TODO: Replace this monogram with an authentic profile photo. */}
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-blue-300 via-violet-400 to-fuchsia-400 text-xl font-display font-bold text-slate-950">
                    ND
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-ink">Neil Dua</p>
                    <p className="mt-1 flex items-center justify-center gap-1 text-xs text-muted">
                      <FaLocationDot aria-hidden="true" /> Delhi NCR, India
                    </p>
                  </div>
                </div>
                <span className="absolute right-4 top-6 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-surface/90 text-amber-300 shadow-xl" aria-hidden="true">
                  <FaWandMagicSparkles />
                </span>
                <span className="absolute bottom-6 left-4 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-surface/90 text-cyan-300 shadow-xl" aria-hidden="true">
                  <FaCode />
                </span>
              </div>
            </motion.div>
          </div>
          <a
            href="#introduction"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:flex"
          >
            SCROLL TO EXPLORE <FaArrowDown className="animate-bounce motion-reduce:animate-none" aria-hidden="true" />
          </a>
        </section>

        <Section
          id="introduction"
          eyebrow="PERSONAL INTRODUCTION"
          title="Learning with intent, building with curiosity."
        >
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
          <div className="grid gap-4 sm:grid-cols-3">
            <GlassCard className="p-6">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">2025–2029</p>
              <p className="mt-2 text-sm leading-6 text-muted">B.Tech CSE at ABES Engineering College, Ghaziabad</p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">2nd Year</p>
              <p className="mt-2 text-sm leading-6 text-muted">Current focus: DSA and Web Development</p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="font-display text-2xl font-bold text-ink sm:text-3xl">Learning Stage</p>
              <p className="mt-2 text-sm leading-6 text-muted">Building practical skills one project and problem at a time</p>
            </GlassCard>
          </div>
        </Section>

        <Section eyebrow="CURRENTLY LEARNING" title="What I am working on right now." copy="A focused set of fundamentals, explored steadily.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {currentlyLearning.map((topic, index) => (
              <motion.div
                key={topic}
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: reducedMotion ? 0 : index * 0.04 }}
                className="learning-chip flex items-center gap-3 rounded-2xl border border-line bg-surface/70 px-4 py-3 text-sm font-semibold text-ink"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-300 to-violet-400 shadow-glow" aria-hidden="true" />
                {topic}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="coding-profiles"
          eyebrow="CODING PROFILES"
          title="Problem-solving practice, without inflated numbers."
          copy="Follow my learning journey on the platforms where I practice."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {codingProfiles.map((profile) => (
              <CodingProfileCard key={profile.platform} profile={profile} />
            ))}
          </div>
        </Section>

        <Section eyebrow="SELECTED WORK" title="Projects I am documenting as I learn." copy="Each project is a chance to explore a product problem and strengthen the fundamentals.">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index === 0} />
            ))}
          </div>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            View all projects <FaArrowRight aria-hidden="true" />
          </Link>
        </Section>
      </main>
    </>
  );
}
