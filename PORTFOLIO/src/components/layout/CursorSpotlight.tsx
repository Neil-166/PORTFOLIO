import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function CursorSpotlight() {
  const desktop = useMediaQuery('(pointer: fine) and (min-width: 1024px)');
  const [position, setPosition] = useState({ x: -500, y: -500 });
  useEffect(() => {
    if (!desktop) return undefined;
    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [desktop]);
  if (!desktop) return null;
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 opacity-70" style={{ background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, rgb(112 134 255 / 0.08), transparent 62%)` }} />;
}
