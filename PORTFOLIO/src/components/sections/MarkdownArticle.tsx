import type { ReactNode } from 'react';

/** A semantic, typography-ready wrapper for MDX/Markdown article content. */
export function MarkdownArticle({ title, meta, children }: { title: string; meta: string; children: ReactNode }) {
  return <article className="mx-auto max-w-3xl"><header className="border-b border-line pb-8"><p className="eyebrow">ARTICLE</p><h1 className="mt-3 font-display text-4xl font-bold tracking-[-.05em] text-ink">{title}</h1><p className="mt-4 text-sm text-muted">{meta}</p></header><div className="prose prose-invert mt-9 max-w-none prose-headings:font-display prose-p:text-muted">{children}</div></article>;
}
