import { useRef, type HTMLAttributes, type PointerEvent, type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface GlassCardProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> { hover?: boolean; }

export function GlassCard({ className, hover = true, children, ...props }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !hover || event.pointerType !== 'mouse' || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * 3.5}deg) rotateY(${x * 3.5}deg) translateY(-5px)`;
  };
  const resetTilt = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <div ref={ref} onPointerMove={tilt} onPointerLeave={resetTilt} className={cn('glass-card', hover && 'glass-card-tilt', className)} {...props}>
      {children}
    </div>
  );
}
