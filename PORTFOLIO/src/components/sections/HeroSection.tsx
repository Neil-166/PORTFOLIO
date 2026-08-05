import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6';
import { Button, ButtonLink } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { heroBlur, staggerContainer } from '@/lib/animations';
import { siteConfig, socialLinks } from '@/lib/constants';
import { smoothScrollTo } from '@/lib/smoothScroll';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useTypewriter } from '@/hooks/useTypewriter';

/**
 * Full-viewport hero overlay shown above the fixed 3D background.
 * `data-hero-content` lets the GSAP scroll timeline fade the copy away as the
 * laptop takes over the first quarter of the page.
 */
export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const role = useTypewriter('Aspiring Software Engineer', 70, !reducedMotion);

  return (
    <section
      id="hero"
      data-hero-content
      className="relative flex min-h-svh items-center px-5 pb-28 pt-40 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={heroBlur}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
            🟢 Open to Internship Opportunities
          </motion.div>

          <motion.h1
            variants={heroBlur}
            className="heading-xl mt-7 text-[2.9rem] leading-[1.02] sm:text-7xl lg:text-[5rem]"
          >
            Neil Dua<span className="text-gradient">.</span>
          </motion.h1>

          <motion.p
            variants={heroBlur}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl"
          >
            Aspiring software engineer — turning ideas into modern web applications while
            strengthening my DSA and full-stack fundamentals.
          </motion.p>

          <motion.p
            variants={heroBlur}
            className="mt-5 flex min-h-7 items-center gap-2 text-sm font-semibold text-brand"
          >
            <span className="text-muted">On the path to:</span>
            <span aria-live="polite">{role}</span>
            {!reducedMotion && <span className="type-caret" aria-hidden="true" />}
          </motion.p>

          <motion.div variants={heroBlur} className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <Button onClick={() => smoothScrollTo('projects', reducedMotion)}>
                View Projects <FaArrowRight aria-hidden="true" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="secondary" onClick={() => smoothScrollTo('contact', reducedMotion)}>
                Contact Me
              </Button>
            </Magnetic>
            <Magnetic>
              {/* TODO: Replace public/resume.pdf with Neil's current resume. */}
              <ButtonLink href={siteConfig.resumePath} variant="secondary" download aria-label="Download resume PDF">
                Download Resume
              </ButtonLink>
            </Magnetic>
          </motion.div>

          <motion.div variants={heroBlur} className="mt-10 flex items-center gap-3">
            <span className="text-xs font-semibold text-muted">FIND ME ON</span>
            <div className="h-px w-8 bg-line" aria-hidden="true" />
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-transparent text-muted transition hover:border-brand/35 hover:bg-white/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => smoothScrollTo('about', reducedMotion)}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 cursor-pointer items-center gap-2 text-xs font-semibold text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:flex"
        aria-label="Scroll to the about section"
      >
        SCROLL TO EXPLORE <FaArrowDown className="animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </button>
    </section>
  );
}
