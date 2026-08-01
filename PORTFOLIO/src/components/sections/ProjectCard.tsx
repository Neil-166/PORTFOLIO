import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowUpRightFromSquare, FaChevronDown, FaGithub } from 'react-icons/fa6';
import type { Project } from '@/types';
import { Button, ButtonLink } from '@/components/ui/Button';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reducedMotion ? undefined : { y: -7 }}
      whileTap={reducedMotion ? undefined : { scale: 0.985 }}
      className={featured ? 'sm:col-span-2' : ''}
    >
      <div className="project-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-3 transition-shadow focus-within:shadow-glow hover:shadow-glow">
        <Link
          to={`/projects/${project.slug}`}
          className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          aria-label={`View details for ${project.title}`}
        >
          <div className={`relative min-h-52 overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-5 ${featured ? 'sm:min-h-72' : ''}`}>
            {/* TODO: Replace with an authentic project screenshot. */}
            <img
              src={project.screenshot}
              alt={`${project.title} placeholder — replace with an authentic project screenshot`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent" aria-hidden="true" />
            <p className="relative text-xs font-bold uppercase tracking-[0.15em] text-white/80">{project.eyebrow}</p>
            <span
              className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition group-hover:rotate-45 motion-reduce:transition-none"
              aria-hidden="true"
            >
              <FaArrowUpRightFromSquare />
            </span>
          </div>
          <div className="px-2 pb-2 pt-5">
            <h3 className="font-display text-xl font-bold text-ink">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((item) => (
                <span key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <div className="mt-auto flex flex-wrap gap-2 px-2 pb-2 pt-3">
          <Button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            variant="ghost"
            className="text-xs"
            aria-expanded={expanded}
            aria-controls={`${project.slug}-overview`}
          >
            {expanded ? 'Hide overview' : 'Quick overview'}
            <FaChevronDown className={`transition ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
          </Button>
          <ButtonLink
            to={`/projects/${project.slug}`}
            variant="secondary"
            className="text-xs"
            aria-label={`View ${project.title} details`}
          >
            Project details <FaArrowRight aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            variant="secondary"
            className="text-xs"
            aria-label={`View Neil Dua's GitHub profile`}
          >
            <FaGithub aria-hidden="true" /> GitHub Profile
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
