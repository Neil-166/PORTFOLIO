import { type FormEvent, useState } from 'react';
import {
  FaArrowUpRightFromSquare,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPaperPlane,
} from 'react-icons/fa6';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { Button, ButtonLink } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { sendContactMessage } from '@/services/email';
import { siteConfig } from '@/lib/constants';
import { useUiStore } from '@/store/uiStore';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const addToast = useUiStore((state) => state.addToast);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!siteConfig.email) {
      addToast('error', 'The contact form is Updating Soon. Please connect through LinkedIn or GitHub.');
      return;
    }
    if (form.name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(form.email) || form.message.trim().length < 12) {
      addToast('error', 'Please add your name, a valid email, and a slightly longer message.');
      return;
    }
    setSubmitting(true);
    try {
      await sendContactMessage(form);
      setForm(initialForm);
      addToast('success', 'Message sent — I will get back to you soon.');
    } catch (error) {
      addToast('error', error instanceof Error ? error.message : 'Something went wrong. Please email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const cards = [
    { icon: FaEnvelope, label: 'Email', value: siteConfig.email ?? 'Updating Soon', href: siteConfig.email ? `mailto:${siteConfig.email}` : undefined },
    { icon: FaLinkedinIn, label: 'LinkedIn', value: 'linkedin.com/in/neil-dua', href: siteConfig.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/Neil-166', href: siteConfig.github },
    { icon: SiLeetcode, label: 'LeetCode', value: 'Neil_Dua', href: siteConfig.leetcode },
    { icon: SiCodechef, label: 'CodeChef', value: 'neil0704', href: siteConfig.codechef },
    { icon: FaDownload, label: 'Download Resume', value: 'resume.pdf', href: siteConfig.resumePath },
  ];

  const mapUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL as string | undefined;

  return (
    <>
      <Seo title="Contact" path="/contact" />
      <PageShell>
        <Section
          eyebrow="CONTACT"
          title="Let's make the next thing better."
          copy="Have an opportunity, an idea, or simply want to compare notes? Connect with me through the profiles below."
        >
          <p className="mb-6 text-sm font-semibold text-brand">
            Open to internship opportunities (Remote / Delhi NCR)
          </p>

          <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr]">
            <div className="space-y-4">
              {cards.map(({ icon: Icon, label, value, href }) => {
                const content = <>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/12 text-brand" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">{label}</p>
                    <p className="mt-1 truncate text-sm font-semibold text-ink">{value}</p>
                  </div>
                  {href ? <FaArrowUpRightFromSquare className="text-xs text-muted" aria-hidden="true" /> : <span className="text-xs font-bold text-muted">Soon</span>}
                </>;

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    download={label === 'Download Resume' ? true : undefined}
                    className="glass-card flex items-center gap-4 p-5 transition hover:border-brand/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    aria-label={label === 'Download Resume' ? 'Download resume PDF' : `Contact via ${label}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="glass-card flex items-center gap-4 p-5" aria-label="Email contact is updating soon">
                    {content}
                  </div>
                );
              })}

              <div className="flex flex-wrap gap-3 pt-2">
                {siteConfig.email ? (
                  <ButtonLink href={`mailto:${siteConfig.email}`} aria-label="Send email to Neil Dua">
                    <FaEnvelope aria-hidden="true" /> Email
                  </ButtonLink>
                ) : (
                  <Button disabled aria-label="Email contact is updating soon">
                    <FaEnvelope aria-hidden="true" /> Email Updating Soon
                  </Button>
                )}
                <ButtonLink href={siteConfig.linkedin} target="_blank" rel="noreferrer noopener" variant="secondary" aria-label="View LinkedIn profile">
                  LinkedIn
                </ButtonLink>
                <ButtonLink href={siteConfig.github} target="_blank" rel="noreferrer noopener" variant="secondary" aria-label="View GitHub profile">
                  GitHub
                </ButtonLink>
                <ButtonLink href={siteConfig.leetcode} target="_blank" rel="noreferrer noopener" variant="secondary" aria-label="View LeetCode profile">
                  LeetCode
                </ButtonLink>
                <ButtonLink href={siteConfig.codechef} target="_blank" rel="noreferrer noopener" variant="secondary" aria-label="View CodeChef profile">
                  CodeChef
                </ButtonLink>
                {/* TODO: Replace public/resume.pdf with Neil's current resume. */}
                <ButtonLink href={siteConfig.resumePath} variant="secondary" download aria-label="Download resume PDF">
                  <FaDownload aria-hidden="true" /> Resume
                </ButtonLink>
              </div>

              <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                {mapUrl ? (
                  <iframe
                    title="Neil Dua location map — Delhi NCR, India"
                    src={mapUrl}
                    className="h-48 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="flex min-h-48 flex-col justify-end bg-[radial-gradient(circle_at_70%_25%,rgb(119_140_255/.24),transparent_25%),linear-gradient(135deg,#10162d,#10131e)] p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-brand" aria-hidden="true">
                      <FaLocationDot />
                    </span>
                    <p className="mt-4 font-display text-lg font-bold text-ink">Delhi NCR, India</p>
                    <p className="mt-1 text-sm text-muted">Open to remote and Delhi NCR opportunities.</p>
                  </div>
                )}
              </div>
            </div>

            <GlassCard hover={false} className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Your name
                    <input
                      required
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      className="input"
                      placeholder="Jane Smith"
                      aria-label="Your name"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-ink">
                    Email address
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      className="input"
                      placeholder="jane@company.com"
                      aria-label="Email address"
                    />
                  </label>
                </div>
                <label className="grid gap-2 text-sm font-semibold text-ink">
                  Tell me a little about it
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    className="input resize-y"
                    placeholder="I would love to talk about…"
                    aria-label="Your message"
                  />
                </label>
                <Button type="submit" disabled={submitting} className="w-full sm:w-auto" aria-label="Send contact message">
                  {submitting ? 'Sending…' : (
                    <>
                      <FaPaperPlane aria-hidden="true" />
                      Send message
                    </>
                  )}
                </Button>
                <p className="text-xs leading-5 text-muted">
                  {siteConfig.email
                    ? 'This form uses EmailJS. If it is not configured yet, use the mailto link above.'
                    : 'The email service has not been added yet, so this form will safely let you know instead of sending your message anywhere.'}
                </p>
              </form>
            </GlassCard>
          </div>
        </Section>
      </PageShell>
    </>
  );
}
