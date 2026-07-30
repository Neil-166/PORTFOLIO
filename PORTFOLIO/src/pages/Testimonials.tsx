import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa6';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { testimonials } from '@/data/content';

export default function Testimonials() { return <><Seo title="Testimonials" path="/testimonials" /><PageShell><Section eyebrow="KIND WORDS" title="Collaboration leaves a signal." copy="Early feedback from people who have seen the work ethic, curiosity, and care up close."><div className="grid gap-5 lg:grid-cols-3">{testimonials.map((testimonial, index) => <motion.figure key={testimonial.initials} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -6 }} className="glass-card flex min-h-72 flex-col p-7"><FaQuoteLeft className="text-xl text-brand" /><blockquote className="mt-6 flex-1 font-display text-lg leading-8 text-ink">“{testimonial.quote}”</blockquote><figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5"><span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue-400 to-violet-500 text-xs font-bold text-slate-950">{testimonial.initials}</span><div><p className="text-sm font-bold text-ink">{testimonial.name}</p><p className="mt-0.5 text-xs text-muted">{testimonial.role}</p></div></figcaption></motion.figure>)}</div></Section></PageShell></>; }
