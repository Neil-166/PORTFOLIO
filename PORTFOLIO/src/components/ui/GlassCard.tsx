import type { HTMLAttributes, PropsWithChildren } from 'react';
import { useTilt } from '@/hooks/useTilt';
import { cn } from '@/lib/utils';

interface GlassCardProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> { hover?: boolean; }

export function GlassCard({ className, hover = true, children, ...props }: GlassCardProps) {
  const { ref, tilt, resetTilt, enabled } = useTilt();
  return (
    <div
      ref={ref}
      onPointerMove={hover && enabled ? tilt : undefined}
      onPointerLeave={resetTilt}
      className={cn('glass-card', hover && 'glass-card-tilt', className)}
      {...props}
    >
      {children}
    </div>
  );
}
