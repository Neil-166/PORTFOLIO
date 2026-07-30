import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { Seo } from '@/components/ui/Seo';
import { PageShell } from '@/components/ui/PageShell';
import { Section } from '@/components/ui/Section';
import { EmptyState } from '@/components/ui/EmptyState';
import { MarkdownArticle } from '@/components/sections/MarkdownArticle';

const publishedArticles: { slug: string; title: string; meta: string; body: string }[] = [];

export default function Article() {
  const { slug } = useParams();
  const article = publishedArticles.find((candidate) => candidate.slug === slug);
  if (!article) return <><Seo title="Article coming soon" path={`/blog/${slug ?? ''}`} /><PageShell><Section><Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-muted hover:text-ink"><FaArrowLeft /> All writing</Link><div className="mt-8"><EmptyState title="This article is not published yet" copy="The Markdown-ready reading experience is in place; the first field notes are being edited." /></div></Section></PageShell></>;
  return <><Seo title={article.title} path={`/blog/${slug ?? ''}`} /><PageShell><Section><MarkdownArticle title={article.title} meta={article.meta}><p>{article.body}</p></MarkdownArticle></Section></PageShell></>;
}
