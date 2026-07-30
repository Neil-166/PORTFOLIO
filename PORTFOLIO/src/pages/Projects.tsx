import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() { return <><Seo title="Projects" path="/projects" /><PageShell><Section eyebrow="PROJECTS" title="Built to learn. Designed to be used." copy="A selection of interfaces and systems where I explored the details that make a digital product feel considered."><div className="grid gap-5 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}</div></Section></PageShell></>; }
