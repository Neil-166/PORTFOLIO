import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

export function ThemeSwitcher() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem('neil-theme');
    const isDark = saved !== 'light';
    setDark(isDark); document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }, []);
  const toggle = () => { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; localStorage.setItem('neil-theme', next ? 'dark' : 'light'); };
  return <button onClick={toggle} className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-muted transition hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand" aria-label={dark ? 'Use light theme' : 'Use dark theme'}>{dark ? <FaSun /> : <FaMoon />}</button>;
}
