import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaArrowUpRightFromSquare, FaBars, FaXmark } from 'react-icons/fa6';
import { primaryNav, siteConfig } from '@/lib/constants';
import { ThemeSwitcher } from '@/components/layout/ThemeSwitcher';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'py-3' : 'py-5')}>
    <nav aria-label="Primary navigation" className={cn('mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 transition-all sm:px-8', scrolled && 'rounded-2xl border border-line/80 bg-canvas/75 shadow-2xl shadow-black/10 backdrop-blur-xl')}>
      <Link to="/" className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink" aria-label="Neil Dua home"><span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blue-400 via-violet-400 to-pink-400 text-sm text-slate-950 shadow-glow">ND</span><span>Neil<span className="text-brand">.</span></span></Link>
      <div className="hidden items-center gap-1 lg:flex">
        {primaryNav.map((item) => <NavLink end={item.href === '/'} key={item.href} to={item.href} className={({ isActive }) => cn('rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:text-ink', isActive ? 'text-ink' : 'text-muted')}>{item.label}</NavLink>)}
      </div>
      <div className="flex items-center gap-2"><ThemeSwitcher /><a href={siteConfig.github} target="_blank" rel="noreferrer" className="btn-base btn-secondary hidden text-sm sm:inline-flex">Let’s build <FaArrowUpRightFromSquare className="text-xs" /></a><button aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-ink lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <FaXmark /> : <FaBars />}</button></div>
    </nav>
    <AnimatePresence>{open && <motion.div id="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-5 mt-2 rounded-2xl border border-line bg-canvas/95 p-3 shadow-2xl backdrop-blur-xl sm:mx-8 lg:hidden">
      {primaryNav.map((item) => <NavLink end={item.href === '/'} key={item.href} to={item.href} className={({ isActive }) => cn('block rounded-xl px-4 py-3 text-sm font-semibold', isActive ? 'bg-brand/15 text-ink' : 'text-muted hover:bg-white/5 hover:text-ink')}>{item.label}</NavLink>)}
    </motion.div>}</AnimatePresence>
  </header>;
}
