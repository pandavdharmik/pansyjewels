import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * Subtle 3D tilt on [data-tilt] elements. Writes --rx/--ry custom
 * properties and lets the stylesheet own the actual transform, so the
 * effect can be switched off entirely from CSS. Fine pointers only.
 */
export default function useTilt(selector = '[data-tilt]') {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return undefined;

    const targets = Array.from(document.querySelectorAll(selector));
    if (!targets.length) return undefined;

    const cleanups = targets.map((el) => {
      const max = parseFloat(el.getAttribute('data-tilt')) || 4;
      let frame = null;

      const onMove = (e) => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = null;
          const r = el.getBoundingClientRect();
          // -0.5 … 0.5 from the element's centre
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          el.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`);
          el.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`);
        });
      };

      const onLeave = () => {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      return () => {
        if (frame) cancelAnimationFrame(frame);
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => cleanups.forEach((fn) => fn());
  }, [selector, reduced]);
}
