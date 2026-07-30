import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { useUiStore } from '@/store/uiStore';

export function ToastRegion() {
  const { toasts, removeToast } = useUiStore();
  return <div aria-live="polite" className="fixed right-4 top-24 z-[100] grid w-[min(360px,calc(100vw-2rem))] gap-3">
    <AnimatePresence>
      {toasts.map((toast) => <motion.div key={toast.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} className="glass-card flex items-center gap-3 p-4 text-sm shadow-xl">
        <span className={toast.type === 'success' ? 'grid h-7 w-7 place-items-center rounded-full bg-emerald-400/15 text-emerald-300' : 'grid h-7 w-7 place-items-center rounded-full bg-rose-400/15 text-rose-300'}>{toast.type === 'success' ? <FaCheck /> : <FaXmark />}</span>
        <p className="flex-1 text-ink">{toast.message}</p><button onClick={() => removeToast(toast.id)} className="text-muted hover:text-ink" aria-label="Dismiss notification"><FaXmark /></button>
      </motion.div>)}
    </AnimatePresence>
  </div>;
}
