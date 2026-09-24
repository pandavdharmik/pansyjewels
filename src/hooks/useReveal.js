import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * The scroll-reveal that every page used to implement for itself.
 *
 * Elements opt in with a class (`.pjc-reveal`, `.pjev-reveal`, `[data-reveal]`
 * …) and get `.is-in` when they scroll into view. Pass the selector the
 * page's stylesheet expects and the effect does the rest.
 *
 * Re-runs whenever `deps` change, so a filtered grid reveals its new cards.
 */
export default function useReveal(selector = '[data-reveal]', deps = []) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(selector));
    if (!items.length) return undefined;

    // No observer, or the visitor asked for stillness: show everything.
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }

    const timers = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const delay = parseInt(en.target.getAttribute('data-reveal-delay'), 10) || 0;
          timers.push(setTimeout(() => en.target.classList.add('is-in'), delay));
          io.unobserve(en.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector, reduced, ...deps]);
}
