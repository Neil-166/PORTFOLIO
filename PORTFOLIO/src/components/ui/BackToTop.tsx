import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 520);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 12 }}
          whileTap={reducedMotion ? undefined : { scale: 0.92 }}
          onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })}
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-2xl border border-brand/30 bg-surface/90 text-brand shadow-glow backdrop-blur-xl transition hover:border-brand hover:bg-brand hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:bottom-8 sm:right-8"
          aria-label="Back to top"
        >
          <FaArrowUp aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
