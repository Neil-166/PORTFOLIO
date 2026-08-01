import { useEffect, useState } from 'react';

export function useTypewriter(word: string, speed = 80, enabled = true) {
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    if (!enabled) {
      setLength(word.length);
      setDeleting(false);
      return undefined;
    }
    const atEnd = length === word.length;
    const atStart = length === 0;
    const delay = atEnd ? 1450 : deleting ? speed / 2 : speed;
    const timer = window.setTimeout(() => {
      if (atEnd) setDeleting(true);
      else if (deleting && atStart) {
        setDeleting(false);
      } else setLength((value) => value + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, enabled, length, speed, word]);
  return word.slice(0, length);
}
