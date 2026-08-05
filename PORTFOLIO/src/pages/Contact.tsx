import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Contact() {
  return (
    <>
      <Seo title="Contact" path="/contact" />
      <PageShell>
        <ContactSection />
      </PageShell>
    </>
  );
}
