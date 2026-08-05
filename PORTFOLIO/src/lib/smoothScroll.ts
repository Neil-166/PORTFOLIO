import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/**
 * Create the app-wide smooth scroll (Lenis) once, keeping it in sync with GSAP
 * ScrollTrigger so scrubbed animations track the animated scroll position.
 * No-ops when the user prefers reduced motion.
 */
export function initSmoothScroll(reducedMotion: boolean): Lenis | null {
  if (reducedMotion || lenis) return lenis;
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  lenis.on('scroll', () => ScrollTrigger.update());
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function destroySmoothScroll() {
  if (!lenis) return;
  lenis.destroy();
  lenis = null;
}

export function getLenis() {
  return lenis;
}

/** Smoothly scroll to a section by element id, using Lenis when available. */
export function smoothScrollTo(id: string, reducedMotion = false) {
  const target = document.getElementById(id);
  if (!target) return;
  if (lenis && !reducedMotion) {
    lenis.scrollTo(target, { offset: -76, duration: 1.1 });
  } else {
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  }
}
