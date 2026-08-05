import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroState } from '@/lib/threeRegistry';

gsap.registerPlugin(ScrollTrigger);

const QUARTER = 0.25;

/**
 * Scroll-scrubbed timeline driving the fixed 3D laptop through the whole page.
 *
 * 0–25%   laptop rotates into view while hero copy lifts away
 * 25–50%  camera zooms forward and the laptop turns ~90°
 * 50–75%  laptop tilts open and the screen lights up (skills in focus)
 * 75–100% laptop recedes and fades while projects/contact take over
 */
export function createHeroTimeline(heroContent: HTMLElement | null) {
  const timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    },
  });

  // Pin a clean resting pose at scroll 0 (heroState persists across route changes).
  timeline.set(heroState, { rotX: 0, rotZ: 0, posZ: 0, opacity: 1 }, 0);

  // 0–25%: rotate into view.
  timeline.fromTo(
    heroState,
    { rotY: 0, scale: 0.9, posY: -0.5, camZ: 9, glow: 0.7 },
    { rotY: 0.55, scale: 1, posY: 0, camZ: 7.2, glow: 0.95, duration: QUARTER },
    0,
  );
  // Hero copy lifts away within the first quarter of the page.
  if (heroContent) {
    timeline.to(heroContent, { opacity: 0, y: -36, duration: 0.16 }, 0.04);
  }

  // 25–50%: zoom forward + quarter turn.
  timeline.to(heroState, { camZ: 5.7, rotY: Math.PI / 2, posZ: 0.25, duration: QUARTER }, QUARTER);

  // 50–75%: tilt open + screen lights up.
  timeline.to(heroState, { rotX: -0.5, glow: 1.6, duration: QUARTER }, 0.5);

  // 75–100%: recede + fade.
  timeline.to(heroState, { posZ: 2.9, camZ: 8.4, rotX: -0.1, duration: QUARTER }, 0.75);
  timeline.to(heroState, { opacity: 0.15, duration: QUARTER }, 0.75);

  return timeline;
}

/** Recompute ScrollTrigger positions once layout/images have settled. */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
