import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowUpRightFromSquare, FaChevronDown, FaGithub, FaWandMagicSparkles } from 'react-icons/fa6';
import type { Project } from '@/types';
import { Button, ButtonLink } from '@/components/ui/Button';
import { useTilt } from '@/hooks/useTilt';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { fadeUp } from '@/lib/animations';

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();
  const { ref, tilt, resetTilt, enabled } = useTilt({ max: 2.5, lift: 4 });

  const visibleStack = project.stack.slice(0, 4);
  const overflowCount = project.stack.length - visibleStack.length;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      className={featured ? 'sm:col-span-2' : ''}
    >
      <div
        ref={ref}
        onPointerMove={enabled ? tilt : undefined}
        onPointerLeave={resetTilt}
        className="project-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-3 shadow-card transition-[transform,box-shadow] duration-200 will-change-transform focus-within:shadow-glow hover:shadow-glow"
      >
        <div className={`relative min-h-52 overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} ${featured ? 'sm:min-h-72' : ''}`}>
          <Link
            to={`/projects/${project.slug}`}
            className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            aria-label={`View details for ${project.title}`}
          >
            <img
              src={project.screenshot}
              alt={`${project.title} placeholder — replace with an authentic project screenshot`}
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" aria-hidden="true" />
            <p className="absolute left-4 top-4 text-xs font-bold uppercase tracking-[0.15em] text-white/85">{project.eyebrow}</p>
          </Link>

          {featured && (
            <span className="absolute left-4 top-[3.35rem] inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-400/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200 backdrop-blur-sm">
              <FaWandMagicSparkles aria-hidden="true" /> Featured
            </span>
          )}

          <div className="absolute right-4 top-4 z-10 flex flex-col gap-2 sm:translate-x-2 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-x-0 sm:group-focus-within:opacity-100">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View ${project.title} source on GitHub`}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-slate-950/45 text-white backdrop-blur-md transition hover:bg-slate-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <FaGithub aria-hidden="true" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open live demo of ${project.title}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-slate-950/45 text-white backdrop-blur-md transition hover:bg-slate-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
          <h3 className="font-display text-[1.35rem] font-bold leading-snug text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>

          <div className="mt-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
            <span>{project.stack.length} technologies</span>
            <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
            <span>{project.features.length} features</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {visibleStack.map((item) => (
              <span key={item} className="rounded-full border border-line bg-white/[.03] px-2.5 py-1 text-xs text-muted">
                {item}
              </span>
            ))}
            {overflowCount > 0 && (
              <span className="rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">
                +{overflowCount} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 px-2 pb-2 pt-3">
          <Button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            variant="ghost"
            className="text-[13px]"
            aria-expanded={expanded}
            aria-controls={`${project.slug}-overview`}
          >
            {expanded ? 'Hide overview' : 'Quick overview'}
            <FaChevronDown className={`transition ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
          </Button>
          <ButtonLink
            to={`/projects/${project.slug}`}
            variant="secondary"
            className="text-[13px]"
            aria-label={`View ${project.title} details`}
          >
            Details <FaArrowRight aria-hidden="true" />
          </ButtonLink>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={`${project.slug}-overview`}
              initial={reducedMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mx-2 mb-2 rounded-2xl border border-brand/20 bg-brand/[.06] p-4">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-brand">Project details</p>
                <p className="mt-2 text-sm leading-6 text-muted">{project.problemStatement}</p>
                <p className="mt-3 text-xs font-semibold text-muted">Live demo: Coming Soon</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
