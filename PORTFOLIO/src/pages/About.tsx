import {
  FaBolt,
  FaBullseye,
  FaGraduationCap,
  FaLocationDot,
  FaReact,
  FaRocket,
} from 'react-icons/fa6';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { journey } from '@/data/content';
import { currentlyLearning } from '@/lib/constants';

const facts = [
  { icon: FaGraduationCap, label: 'Education', value: 'B.Tech CSE (2025–2029), ABES Engineering College' },
  { icon: FaLocationDot, label: 'Location', value: 'Delhi NCR, India' },
  { icon: FaBolt, label: 'Current Year', value: '2nd Year CSE Student' },
  { icon: FaRocket, label: 'Expected Graduation', value: '2029' },
  { icon: FaReact, label: 'Interests', value: 'React, JavaScript, UI/UX, Problem Solving' },
  { icon: FaBullseye, label: 'Career Goal', value: 'Software Engineer' },
];

export default function About() {
  return (
    <>
      <Seo title="About" path="/about" />
      <PageShell>
        <Section eyebrow="ABOUT ME" title="A student with a builder's bias.">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_.65fr]">
            <div className="space-y-5 text-lg leading-8 text-muted">
              <p>
                I&apos;m <strong className="font-semibold text-ink">Neil Dua</strong>, a second-year Computer Science
                Engineering student at <strong className="font-semibold text-ink">ABES Engineering College, Ghaziabad</strong>.
                I chose this field because I enjoy technology, problem solving, and building applications that people
                actually find useful.
              </p>
              <p>
                Right now, my focus is on <strong className="font-semibold text-ink">DSA and Web Development</strong>.
                I am learning React, JavaScript, and modern frontend patterns while practicing data structures and
                algorithms on LeetCode and CodeChef. I like work that is clear, collaborative, and grounded in real
                learning.
              </p>
              <p>
                My career goal is to become a <strong className="font-semibold text-ink">Software Engineer</strong> —
                someone who can take a rough idea, ask the right questions, and help turn it into something reliable
                and enjoyable to use.
              </p>
            </div>
            <div className="rounded-3xl border border-brand/20 bg-gradient-to-br from-brand/12 via-violet-500/8 to-transparent p-7">
              <p className="text-xs font-bold tracking-[.18em] text-brand">CURRENT FOCUS</p>
              <ul className="mt-5 space-y-4 text-sm text-ink">
                <li>↳ Data Structures &amp; Algorithms</li>
                <li>↳ React &amp; JavaScript</li>
                <li>↳ UI/UX and responsive design</li>
                <li>↳ Full-stack fundamentals</li>
              </ul>
              <p className="mt-6 text-xs font-bold tracking-[.18em] text-brand">CURRENTLY LEARNING</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {currentlyLearning.map((topic) => (
                  <span key={topic} className="rounded-full border border-line bg-white/5 px-2.5 py-1 text-xs font-semibold text-muted">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section eyebrow="EDUCATION TIMELINE" title="The path so far.">
          <GlassCard hover={false} className="p-7 sm:p-9">
          <ol className="relative ml-3 border-l border-line pl-8">
            {journey.map((item, index) => (
              <li key={item.date} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[41px] top-0 grid h-6 w-6 place-items-center rounded-full border-4 border-canvas bg-brand"
                  aria-hidden="true"
                />
                <p className="text-xs font-bold tracking-wider text-brand">{item.date}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{item.copy}</p>
                {index === 2 && (
                  <span className="mt-3 inline-flex rounded-full border border-brand/20 bg-brand/10 px-2.5 py-1 text-xs font-semibold text-brand">
                    You are here
                  </span>
                )}
              </li>
            ))}
          </ol>
          </GlassCard>
        </Section>

        <Section eyebrow="AT A GLANCE" title="The useful details.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <GlassCard key={label} className="p-5">
                <Icon className="text-brand" aria-hidden="true" />
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">{label}</p>
                <p className="mt-2 font-semibold leading-6 text-ink">{value}</p>
              </GlassCard>
            ))}
          </div>
        </Section>
      </PageShell>
    </>
  );
}
