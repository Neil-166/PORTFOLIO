import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function Projects() {
  return (
    <>
      <Seo title="Projects" path="/projects" />
      <PageShell>
        <ProjectsSection />
      </PageShell>
    </>
  );
}
