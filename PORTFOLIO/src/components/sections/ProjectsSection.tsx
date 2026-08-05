import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { Section } from '@/components/ui/Section';
import { projects } from '@/data/projects';
import { staggerContainer } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** Projects — the current build-in-public work, opening into full detail pages. */
export function ProjectsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="projects"
      eyebrow="SELECTED WORK"
      title="Projects I am documenting as I learn."
      copy="Each project is a chance to explore a product problem and strengthen the fundamentals."
    >
      <motion.div
        variants={staggerContainer}
        initial={reducedMotion ? false : 'hidden'}
        whileInView={reducedMotion ? undefined : 'visible'}
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={index === 0} />
        ))}
      </motion.div>
      <Link
        to="/projects"
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        View all projects <FaArrowRight aria-hidden="true" />
      </Link>
    </Section>
  );
}
