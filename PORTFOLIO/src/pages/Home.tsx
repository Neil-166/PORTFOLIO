import { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Seo } from '@/components/ui/Seo';
import { StaticBackground } from '@/components/3d/StaticBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CodingSection } from '@/components/sections/CodingSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { createHeroTimeline, refreshScrollTriggers } from '@/lib/scrollAnimations';
import { smoothScrollTo } from '@/lib/smoothScroll';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** The 3D background is code-split so WebGL never ships on mobile screens. */
const HeroCanvas = lazy(() => import('@/components/3d/HeroCanvas'));

/**
 * Cinematic single-scroll home: a fixed 3D laptop sits behind the page and the
 * whole document's scroll drives it (GSAP ScrollTrigger, scrub). Each section
 * scrolls over the top of it while the laptop rotates, zooms, tilts and fades.
 */
export default function Home() {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const location = useLocation();

  // When a nav item on another route sends us home with a target section,
  // scroll to it once the route (and instant scroll-to-top) has settled.
  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return undefined;
    const id = window.setTimeout(() => smoothScrollTo(scrollTo, reducedMotion), 80);
    return () => window.clearTimeout(id);
  }, [location.state, reducedMotion]);

  // Scroll-scrubbed 3D timeline — desktop, motion-ok only.
  useEffect(() => {
    if (!isDesktop || reducedMotion) return undefined;
    const heroContent = document.querySelector<HTMLElement>('[data-hero-content]');
    const timeline = createHeroTimeline(heroContent);

    const refresh = () => refreshScrollTriggers();
    window.addEventListener('load', refresh);
    const settle = window.setTimeout(refresh, 400);

    return () => {
      window.removeEventListener('load', refresh);
      window.clearTimeout(settle);
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, [isDesktop, reducedMotion]);

  return (
    <>
      <Seo />
      {isDesktop ? (
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      ) : (
        <StaticBackground />
      )}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CodingSection />
        <ContactSection />
      </main>
    </>
  );
}
