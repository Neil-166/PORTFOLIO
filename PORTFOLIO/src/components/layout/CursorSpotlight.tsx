import { useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function CursorSpotlight() {
  const desktop = useMediaQuery('(pointer: fine) and (min-width: 1024px)');
  const reducedMotion = useReducedMotion();
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!desktop || reducedMotion) return undefined;
    let frame = 0;
    let x = -500;
    let y = -500;
    const paint = () => {
      frame = 0;
      glow.current?.style.setProperty('--cursor-glow', `${x}px ${y}px`);
    };
    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [desktop, reducedMotion]);
  if (!desktop || reducedMotion) return null;
  return <div ref={glow} aria-hidden="true" className="cursor-spotlight pointer-events-none fixed inset-0 z-40" />;
}
