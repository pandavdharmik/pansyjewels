import { useEffect, useState } from 'react';

/**
 * Tracks prefers-reduced-motion. The old site read this once at load;
 * here it stays live, so toggling the OS setting takes effect without a
 * reload. Every animation module checks it before doing anything.
 */
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
