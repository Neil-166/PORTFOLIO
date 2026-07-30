import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import type { Project } from '@/types';

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -7 }} className={featured ? 'sm:col-span-2' : ''}>
    <Link to={`/projects/${project.slug}`} className="group relative block h-full overflow-hidden rounded-3xl border border-line bg-surface p-3 transition-shadow hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
      <div className={`relative min-h-52 overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-5 ${featured ? 'sm:min-h-72' : ''}`}>
        <img src={project.screenshot} alt={`${project.title} interface preview`} loading="lazy" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-55 transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent" />
        <p className="relative text-xs font-bold uppercase tracking-[0.15em] text-white/80">{project.eyebrow}</p>
        <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition group-hover:rotate-45"><FaArrowUpRightFromSquare /></span>
      </div>
      <div className="px-2 pb-2 pt-5"><h3 className="font-display text-xl font-bold text-ink">{project.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p><div className="mt-4 flex flex-wrap gap-2">{project.stack.slice(0, 3).map((item) => <span key={item} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">{item}</span>)}</div></div>
    </Link>
  </motion.article>;
}
