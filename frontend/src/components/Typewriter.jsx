import { useState, useEffect } from 'react';

export default function Typewriter({ words, speed = 150, delay = 2000 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Depend on the word's *text* rather than the `words` array's identity —
  // callers pass a fresh array literal on every render, and depending on
  // the reference would clear + reschedule the in-flight timeout on every
  // unrelated parent re-render, stuttering the animation mid-type.
  const currentWord = words[index % words.length] || '';

  useEffect(() => {
    if (subIndex === currentWord.length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, currentWord, reverse, speed, delay, words.length]);

  return (
    <span>
      {currentWord.substring(0, subIndex)}
      <span className="animate-pulse border-r-2 border-current ml-1"></span>
    </span>
  );
}