import { FaCommentDots } from 'react-icons/fa6';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { EmptyState } from '@/components/ui/EmptyState';

export default function Testimonials() {
  return (
    <>
      <Seo title="Testimonials" path="/testimonials" />
      <PageShell>
        <Section eyebrow="TESTIMONIALS" title="Feedback will be shared when it is real.">
          <EmptyState
            title="Updating Soon"
            copy="Neil does not publish anonymous or placeholder testimonials. Verified feedback can be added here in the future."
            action={<FaCommentDots className="text-brand" aria-hidden="true" />}
          />
        </Section>
      </PageShell>
    </>
  );
}
