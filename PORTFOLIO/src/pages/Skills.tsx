import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { SkillsSection } from '@/components/sections/SkillsSection';

export default function Skills() {
  return (
    <>
      <Seo title="Skills" path="/skills" />
      <PageShell>
        <SkillsSection />
      </PageShell>
    </>
  );
}
