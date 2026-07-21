import { useState, useEffect } from 'react';

const GRADIENT = 'linear-gradient(90deg, #0050fe 0%, #af90af 66.351%, #ffd0c0 100%)';

export default function Typewriter({ words, speed = 150, delay = 2000 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), delay);
      return () => clearTimeout(timeout);
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
  }, [subIndex, index, reverse, words, speed, delay]);

  return (
    <>
      <span
        className="bg-clip-text text-transparent font-bold inline-block"
        style={{ backgroundImage: GRADIENT, WebkitTextFillColor: 'transparent' }}
      >
        {words[index].substring(0, subIndex)}
      </span>
      <span className="animate-pulse border-r-2 border-white/70 ml-1 inline-block align-middle h-[0.9em]"></span>
    </>
  );
}
