import { useHead } from '@unhead/react';
import { siteConfig } from '@/lib/constants';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

export function Seo({ title, description = siteConfig.description, path = '/' }: SeoProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | B.Tech CSE Student | Aspiring Software Engineer`;
  const url = `${siteConfig.url}${path}`;
  const image = `${siteConfig.url}/og-image.svg`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: 'Computer Science Engineering Student',
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'ABES Engineering College, Ghaziabad' },
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.leetcode, siteConfig.codechef],
  };

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { name: 'author', content: siteConfig.name },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: siteConfig.name },
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: `${siteConfig.name} portfolio` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    link: [{ rel: 'canonical', href: url }],
    script: [{ type: 'application/ld+json', textContent: JSON.stringify(schema) }],
  });

  return null;
}
