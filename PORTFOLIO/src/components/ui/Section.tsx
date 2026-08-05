import type { PropsWithChildren, ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface SectionProps extends PropsWithChildren { id?: string; eyebrow?: string; title?: ReactNode; copy?: string; className?: string; }

export function Section({ id, eyebrow, title, copy, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('section-shell', className)}>
      {(eyebrow || title || copy) && (
        <Reveal className="mb-12 max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2 className="heading-lg mt-3 text-[2rem] sm:text-[2.6rem]">{title}</h2>}
          {copy && <p className="mt-4 leading-7 text-muted">{copy}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
