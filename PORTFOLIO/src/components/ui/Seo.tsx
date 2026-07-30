import { useHead } from '@unhead/react';
import { siteConfig } from '@/lib/constants';

interface SeoProps { title?: string; description?: string; path?: string; }

export function Seo({ title, description = siteConfig.description, path = '/' }: SeoProps) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.title}`;
  const url = `${siteConfig.url}${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: 'Computer Science Engineering Student',
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'ABES Engineering College' },
    sameAs: [siteConfig.github, siteConfig.linkedin],
  };
  useHead({ title: fullTitle, meta: [
    { name: 'description', content: description },
    { property: 'og:type', content: 'website' }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:url', content: url },
    { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title', content: fullTitle }, { name: 'twitter:description', content: description },
  ], link: [{ rel: 'canonical', href: url }], script: [{ type: 'application/ld+json', textContent: JSON.stringify(schema) }] });
  return null;
}
