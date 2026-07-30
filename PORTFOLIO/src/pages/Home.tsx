import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaCode, FaLocationDot, FaWandMagicSparkles } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Seo } from '@/components/ui/Seo';
import { ButtonLink } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { GlassCard } from '@/components/ui/GlassCard';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';
import { socialLinks } from '@/lib/constants';
import { useTypewriter } from '@/hooks/useTypewriter';

const HeroScene = lazy(() => import('@/components/sections/HeroScene').then((module) => ({ default: module.HeroScene })));

export default function Home() {
  const typed = useTypewriter(['interfaces that feel alive.', 'products with intent.', 'my engineering craft.']);
  return <><Seo /><main>
    <section className="relative flex min-h-[min(800px,100svh)] items-center overflow-hidden px-5 pb-14 pt-32 sm:px-8"><Suspense fallback={null}><HeroScene /></Suspense><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgb(var(--brand)/.1),transparent_40%)]" />
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_auto] lg:items-center"><div className="max-w-3xl"><motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />Open to Internship Opportunities</motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-7 text-sm font-semibold tracking-wide text-brand">HELLO, I’M NEIL DUA</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} className="mt-3 font-display text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-ink sm:text-6xl lg:text-7xl">Building the next<br />version of <span className="text-gradient">me.</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 min-h-8 font-display text-xl font-medium text-muted sm:text-2xl">I’m shaping {typed}<span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-brand align-middle" /></motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-5 max-w-xl leading-7 text-muted">A second-year Computer Science student who enjoys translating curious ideas into thoughtful, useful digital experiences.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-3"><Magnetic><ButtonLink to="/projects">Explore projects <FaArrowRight /></ButtonLink></Magnetic><Magnetic><ButtonLink to="/contact" variant="secondary">Let’s connect</ButtonLink></Magnetic></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-10 flex items-center gap-3"><span className="text-xs font-semibold text-muted">FIND ME ON</span><div className="h-px w-8 bg-line" />{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg text-muted transition hover:bg-white/5 hover:text-ink" aria-label={label}><Icon /></a>)}</motion.div></div>
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18, type: 'spring' }} className="mx-auto hidden lg:block"><div className="relative grid h-72 w-72 place-items-center rounded-full border border-brand/30 bg-gradient-to-br from-brand/20 via-violet-500/10 to-transparent shadow-glow"><div className="absolute inset-3 animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-brand/45" /><div className="grid h-52 w-52 place-items-center rounded-full border border-line bg-canvas/80 text-center backdrop-blur-xl"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-400 to-violet-500 text-2xl font-display font-bold text-slate-950">ND</span><p className="mt-4 font-display text-lg font-bold text-ink">Neil Dua</p><p className="mt-1 flex items-center gap-1 text-xs text-muted"><FaLocationDot /> Delhi NCR, India</p></div><span className="absolute -right-1 top-12 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-surface text-amber-300 shadow-xl"><FaWandMagicSparkles /></span><span className="absolute bottom-8 -left-3 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-surface text-cyan-300 shadow-xl"><FaCode /></span></div></motion.div>
      </div>
      <a href="#signal" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold text-muted transition hover:text-ink sm:flex">SCROLL TO EXPLORE <FaArrowDown className="animate-bounce" /></a>
    </section>
    <Section id="signal" eyebrow="A QUICK SIGNAL" title="Learning fast. Building deliberately." copy="Early in the journey, deeply invested in the process."><div className="grid gap-4 sm:grid-cols-3"><GlassCard className="p-6"><p className="font-display text-4xl font-bold text-ink">2025–29</p><p className="mt-2 text-sm text-muted">B.Tech CSE at ABES Engineering College</p></GlassCard><GlassCard className="p-6"><p className="font-display text-4xl font-bold text-ink">3<span className="text-brand">+</span></p><p className="mt-2 text-sm text-muted">Product-focused projects in progress</p></GlassCard><GlassCard className="p-6"><p className="font-display text-4xl font-bold text-ink">∞</p><p className="mt-2 text-sm text-muted">Curiosity for the next hard problem</p></GlassCard></div></Section>
    <Section eyebrow="SELECTED WORK" title="Things I’m making real." copy="Small products, serious attention to experience."><div className="grid gap-5 md:grid-cols-2"><ProjectCard project={projects[0]} featured /><ProjectCard project={projects[1]} /><ProjectCard project={projects[2]} /></div><Link to="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:gap-3">View all projects <FaArrowRight /></Link></Section>
  </main></>;
}
