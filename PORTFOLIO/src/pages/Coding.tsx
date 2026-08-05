import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { CodingSection } from '@/components/sections/CodingSection';

export default function Coding() {
  return (
    <>
      <Seo title="Coding Profiles" path="/coding" />
      <PageShell>
        <CodingSection />
      </PageShell>
    </>
  );
}
