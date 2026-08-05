import { useRef, type PointerEvent } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TiltOptions {
  /** Max rotation in degrees. */
  max?: number;
  /** Upward translate on hover, in px. */
  lift?: number;
  perspective?: number;
}

/**
 * Subtle pointer-driven 3D tilt for cards. Respects prefers-reduced-motion
 * and ignores touch input. Shared by GlassCard and ProjectCard.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>({ max = 3.5, lift = 5, perspective = 900 }: TiltOptions = {}) {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  const tilt = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse' || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    ref.current.style.transform = `perspective(${perspective}px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(${-lift}px)`;
  };

  const resetTilt = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return { ref, tilt, resetTilt, enabled: !reducedMotion };
}
