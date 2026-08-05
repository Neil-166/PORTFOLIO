import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import type { CodingProfile } from '@/types';
import { GlassCard } from '@/components/ui/GlassCard';
import { ButtonLink } from '@/components/ui/Button';
import { fadeUp } from '@/lib/animations';

export function CodingProfileCard({ profile }: { profile: CodingProfile }) {
  const Icon = profile.icon;
  return (
    <motion.div variants={fadeUp}>
      <GlassCard className="flex h-full flex-col p-6">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/12 text-2xl text-brand" aria-hidden="true">
          <Icon />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">{profile.platform}</h3>
        <p className="mt-1 text-sm font-semibold text-muted">@{profile.username}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{profile.description}</p>
        <ButtonLink
          href={profile.href}
          target="_blank"
          rel="noreferrer noopener"
          variant="secondary"
          className="mt-6 w-full sm:w-auto"
          aria-label={`View ${profile.platform} profile for ${profile.username}`}
        >
          View Profile <FaArrowUpRightFromSquare className="text-xs" aria-hidden="true" />
        </ButtonLink>
      </GlassCard>
    </motion.div>
  );
}
