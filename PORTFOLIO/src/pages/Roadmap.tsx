import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown, FaCheck } from 'react-icons/fa6';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { roadmap } from '@/data/content';

const statusStyles = {
  'In Progress': 'border-brand/25 bg-brand/10 text-brand',
  'Early Stage': 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300',
  Exploring: 'border-violet-400/25 bg-violet-400/10 text-violet-300',
};

export default function Roadmap() {
  const [open, setOpen] = useState('DSA');

  return (
    <>
      <Seo title="Learning roadmap" path="/roadmap" />
      <PageShell>
        <Section
          eyebrow="LEARNING ROADMAP"
          title="A map, not a finish line."
          copy="Each track is intentionally staged: foundations first, then the useful complexity."
        >
          <div className="space-y-3">
            {roadmap.map((item) => {
              const expanded = open === item.title;
              return (
                <article key={item.title} className="overflow-hidden rounded-2xl border border-line bg-surface">
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? '' : item.title)}
                    aria-expanded={expanded}
                    className="flex w-full items-center gap-4 p-5 text-left sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <span className={`h-3 w-3 shrink-0 rounded-full bg-gradient-to-br ${item.accent}`} aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="font-display text-lg font-bold text-ink">{item.title}</h2>
                        <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${statusStyles[item.status]}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <FaChevronDown className={`shrink-0 text-muted transition ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line px-6 pb-6 pt-5 sm:pl-14">
                          <p className="max-w-2xl text-sm leading-6 text-muted">{item.detail}</p>
                          <div className="mt-5 grid gap-2 sm:grid-cols-3">
                            {item.lessons.map((lesson) => (
                              <div key={lesson} className="flex items-center gap-2 rounded-xl bg-white/[.035] p-3 text-sm text-ink">
                                <FaCheck className="text-xs text-brand" aria-hidden="true" />
                                {lesson}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </Section>
      </PageShell>
    </>
  );
}
