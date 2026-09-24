/* The gold cursor follower. Fine pointers only, and never when the
   visitor has asked for reduced motion. */
import { useEffect, useRef } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

const HOVERABLES = 'a, button, [data-quickview], .pj-cat, .pj-card, .pj-occ, .pj-thumb';

export default function Cursor() {
  const dot = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = dot.current;
    if (!el || reduced) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    let x = 0, y = 0, cx = 0, cy = 0, raf = null;

    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onLeave = () => el.classList.remove('is-on');
    const onOver = (e) => e.target.closest?.(HOVERABLES) && el.classList.add('is-hover');
    const onOut = (e) => e.target.closest?.(HOVERABLES) && el.classList.remove('is-hover');

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [reduced]);

  return <div className="pj-cursor" ref={dot} aria-hidden="true" />;
}
