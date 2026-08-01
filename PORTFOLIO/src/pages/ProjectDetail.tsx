import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaArrowUpRightFromSquare, FaCheck, FaCode, FaGithub, FaLightbulb, FaWandMagicSparkles } from 'react-icons/fa6';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { ButtonLink } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';
import { projects } from '@/data/projects';

function DetailList({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof FaCheck }) {
  return (
    <GlassCard className="p-6">
      <Icon className="text-brand" aria-hidden="true" />
      <h2 className="mt-4 font-display text-xl font-bold text-ink">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <FaCheck className="mt-1 shrink-0 text-brand" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    return (
      <>
        <Seo title="Project not found" />
        <PageShell>
          <Section>
            <EmptyState title="That project is still taking shape" action={<ButtonLink to="/projects">Back to projects</ButtonLink>} />
          </Section>
        </PageShell>
      </>
    );
  }

  return (
    <>
      <Seo title={project.title} path={`/projects/${project.slug}`} description={project.summary} />
      <PageShell>
        <section className="section-shell pt-5">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <FaArrowLeft aria-hidden="true" /> All projects
          </Link>

          <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-surface">
            <div className={`relative min-h-[340px] bg-gradient-to-br ${project.gradient} p-7 sm:p-10`}>
              {/* TODO: Replace with actual project screenshot */}
              <img
                src={project.screenshot}
                alt={`${project.title} project screenshot placeholder — replace with actual screenshot`}
                className="absolute inset-0 h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent" aria-hidden="true" />
              <div className="relative flex min-h-[270px] flex-col justify-end">
                <p className="text-xs font-bold tracking-[.16em] text-white/70">{project.eyebrow.toUpperCase()}</p>
                <h1 className="mt-3 font-display text-4xl font-bold tracking-[-.05em] text-white sm:text-6xl">{project.title}</h1>
              </div>
            </div>

            <div className="grid gap-7 p-7 sm:p-10 lg:grid-cols-[1.35fr_.65fr]">
              <div>
                <h2 className="font-display text-lg font-bold text-ink">Problem Statement</h2>
                <p className="mt-3 text-lg leading-8 text-muted">{project.problemStatement}</p>
                <p className="mt-5 text-base leading-7 text-muted">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-line px-3 py-1.5 text-xs font-bold text-ink">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end lg:pt-2">
                <ButtonLink href={project.github} target="_blank" rel="noreferrer noopener" aria-label="View Neil Dua's GitHub profile">
                  <FaGithub aria-hidden="true" /> GitHub Profile
                </ButtonLink>
                {project.demo ? (
                  <ButtonLink href={project.demo} target="_blank" rel="noreferrer noopener" variant="secondary" aria-label={`View live demo of ${project.title}`}>
                    Live Demo <FaArrowUpRightFromSquare aria-hidden="true" />
                  </ButtonLink>
                ) : (
                  <span className="inline-flex items-center rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-muted">
                    Demo coming soon
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        <Section title="Project breakdown.">
          <div className="grid gap-4 md:grid-cols-3">
            <DetailList title="Features" items={project.features} icon={FaCode} />
            <DetailList title="Challenges" items={project.challenges} icon={FaWandMagicSparkles} />
            <DetailList title="What I Learned" items={project.learnings} icon={FaLightbulb} />
          </div>
        </Section>

        <Section eyebrow="TECH STACK" title="Tools used.">
          <GlassCard className="p-7">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-brand/25 bg-brand/10 px-4 py-2 text-sm font-semibold text-ink">
                  {item}
                </span>
              ))}
            </div>
          </GlassCard>
        </Section>

        <Section eyebrow="FUTURE IMPROVEMENTS" title="Where this could go next.">
          <GlassCard className="p-7">
            <ul className="grid gap-4 sm:grid-cols-3">
              {project.improvements.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="font-display text-xl font-bold text-brand">0{index + 1}</span>
                  <span className="pt-1 text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Section>

        <Section eyebrow="SCREENSHOTS" title="A closer look.">
          {/* TODO: Replace with actual project screenshot */}
          <div className="overflow-hidden rounded-3xl border border-line">
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot placeholder — replace with actual project screenshot`}
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </Section>
      </PageShell>
    </>
  );
}
