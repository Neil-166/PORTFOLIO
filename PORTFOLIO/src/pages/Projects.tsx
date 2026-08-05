import { motion } from 'framer-motion';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { staggerContainer } from '@/lib/animations';

export default function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Seo title="Projects" path="/projects" />
      <PageShell>
        <Section eyebrow="PROJECTS" title="Built to learn. Designed to be used." copy="A selection of interfaces and systems where I explored the details that make a digital product feel considered.">
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
        </Section>
      </PageShell>
    </>
  );
}
