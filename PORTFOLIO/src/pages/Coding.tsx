import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { ButtonLink } from '@/components/ui/Button';
import { CodingProfileCard } from '@/components/sections/CodingProfileCard';
import { codingProfiles, siteConfig } from '@/lib/constants';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { staggerContainer } from '@/lib/animations';

export default function Coding() {
  const reducedMotion = useReducedMotion();
  return (
    <>
      <Seo title="Coding Profiles" path="/coding" />
      <PageShell>
        <Section
          eyebrow="CODING PROFILES"
          title="Problem-solving practice."
          copy="My profile links are here for context — I intentionally do not publish unverified solved counts, ranks, ratings, or streaks."
        >
          <motion.div
            variants={staggerContainer}
            initial={reducedMotion ? false : 'hidden'}
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {codingProfiles.map((profile) => (
              <CodingProfileCard key={profile.platform} profile={profile} />
            ))}
          </motion.div>
        </Section>

        <Section eyebrow="GITHUB" title="Projects and learning in public.">
          <GlassCard className="flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/12 text-xl text-brand" aria-hidden="true">
                <FaGithub />
              </span>
              <h2 className="mt-5 font-display text-xl font-bold text-ink">GitHub profile</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                Explore repositories and works in progress directly on GitHub. Repository details are updated as projects are documented.
              </p>
            </div>
            <ButtonLink
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              variant="secondary"
              aria-label="View Neil Dua's GitHub profile"
            >
              View GitHub <FaArrowUpRightFromSquare className="text-xs" aria-hidden="true" />
            </ButtonLink>
          </GlassCard>
        </Section>
      </PageShell>
    </>
  );
}
