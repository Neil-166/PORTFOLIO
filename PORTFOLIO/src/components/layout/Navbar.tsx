import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaArrowUpRightFromSquare, FaBars, FaXmark } from 'react-icons/fa6';
import { primaryNav, siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'py-3' : 'py-5')}>
      <nav
        aria-label="Primary navigation"
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 transition-all sm:px-8',
          scrolled && 'rounded-2xl border border-line/80 bg-canvas/75 shadow-2xl shadow-black/10 backdrop-blur-xl',
        )}
      >
        <Link to="/" className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink" aria-label="Neil Dua home">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blue-400 via-violet-400 to-pink-400 text-sm text-slate-950 shadow-glow">ND</span>
          <span>Neil<span className="text-brand">.</span></span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <NavLink
              end={item.href === '/'}
              key={item.href}
              to={item.href}
              className={({ isActive }) => cn('relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:text-ink', isActive ? 'text-ink' : 'text-muted')}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="desktop-active-nav"
                      transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-300 to-violet-400"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-base btn-secondary hidden text-sm sm:inline-flex"
            aria-label="View GitHub profile"
          >
            Let&apos;s build <FaArrowUpRightFromSquare className="text-xs" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-ink lg:hidden"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={reducedMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
            className="mx-5 mt-2 rounded-2xl border border-line bg-canvas/95 p-3 shadow-2xl backdrop-blur-xl sm:mx-8 lg:hidden"
          >
            {primaryNav.map((item) => (
              <NavLink
                end={item.href === '/'}
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) => cn('block rounded-xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? 'bg-brand/15 text-ink' : 'text-muted hover:bg-white/5 hover:text-ink')}
              >
                {item.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
