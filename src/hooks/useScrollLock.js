import { useEffect } from 'react';

/**
 * Locks page scroll while an overlay is open, and pads for the vanished
 * scrollbar so the layout behind does not jump sideways.
 */
export default function useScrollLock(locked, className = 'pj-lock') {
  useEffect(() => {
    if (!locked) return undefined;

    const { body } = document;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    const prevPad = body.style.paddingRight;

    body.classList.add(className);
    if (gap > 0) body.style.paddingRight = `${gap}px`;

    return () => {
      body.classList.remove(className);
      body.style.paddingRight = prevPad;
    };
  }, [locked, className]);
}
