import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], speed = 80) {
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wordIndex];
    const atEnd = length === word.length;
    const atStart = length === 0;
    const delay = atEnd ? 1450 : deleting ? speed / 2 : speed;
    const timer = window.setTimeout(() => {
      if (atEnd) setDeleting(true);
      else if (deleting && atStart) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else setLength((value) => value + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, length, speed, wordIndex, words]);
  return words[wordIndex].slice(0, length);
}
