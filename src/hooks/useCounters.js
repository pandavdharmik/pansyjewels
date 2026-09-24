import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * Counts [data-count] elements up to their target when they scroll into
 * view — the craftsmanship stats on the home page. Ported from the
 * runCounter() in main.js, including the cubic ease and the 1.5s run.
 */
export default function useCounters(selector = '[data-count]') {
  const reduced = useReducedMotion();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(selector));
    if (!items.length) return undefined;

    const frames = [];

    const run = (el) => {
      if (el.dataset.counted) return;
      el.dataset.counted = '1';
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;

      if (reduced) {
        el.textContent = String(target);
        return;
      }

      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / 1500, 1);
        const eased = 1 - (1 - p) ** 3;
        el.textContent = String(Math.round(target * eased));
        if (p < 1) frames.push(requestAnimationFrame(step));
      };
      frames.push(requestAnimationFrame(step));
    };

    if (!('IntersectionObserver' in window)) {
      items.forEach(run);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          run(en.target);
          io.unobserve(en.target);
        }),
      { threshold: 0.3 }
    );

    items.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      frames.forEach(cancelAnimationFrame);
    };
  }, [selector, reduced]);
}
