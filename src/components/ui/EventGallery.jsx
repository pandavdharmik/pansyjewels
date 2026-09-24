/* =====================================================================
   EventGallery.jsx
   The event mosaic and its fancybox-style lightbox, ported from
   event.html + assets/js/event.js.

   Add a frame by adding an entry to SLIDES — the grid, the counter and
   the thumbnail rail all read from it.
   ===================================================================== */
import { useCallback, useEffect, useRef, useState } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';
import useScrollLock from '../../hooks/useScrollLock';

const SLIDES = [
  {
    src: '/assets/images/events/event-01.png',
    alt: 'Models on the runway in bridal lehengas wearing Pansy Jewels polki and kundan sets',
    title: 'Bridal Couture Showcase',
    meta: 'Runway — Surat',
    wide: true,
  },
  {
    src: '/assets/images/events/event-02.png',
    alt: 'Models in black couture wearing collar necklaces and cuffs from the Noir edit',
    title: 'The Noir Edit',
    meta: 'Designer Show — Mumbai',
  },
  {
    src: '/assets/images/events/event-03.png',
    alt: 'Four models in evening gowns presenting fine jewellery under stage lighting',
    title: 'Evening Fine Jewellery',
    meta: 'Gala Presentation',
  },
  {
    src: '/assets/images/events/event-04.png',
    alt: 'The Pansy Jewels stand on the floor of an international jewellery trade exhibition',
    title: 'International Jewellery Fair',
    meta: 'Trade Exhibition — Hong Kong',
    wide: true,
  },
];

export default function EventGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  const openerRef = useRef(null);
  const closeBtn = useRef(null);
  const lb = useRef(null);
  const figure = useRef(null);
  const touch = useRef({ x: 0, y: 0, tracking: false });

  useScrollLock(open, 'pjev-lb-open');

  const show = useCallback((next) => {
    setIndex((i) => {
      const n = (next + SLIDES.length) % SLIDES.length;
      return n === i ? i : n;
    });
  }, []);

  const openAt = (i, el) => {
    openerRef.current = el;
    setIndex(i);
    setOpen(true);
  };

  const close = useCallback(() => {
    setOpen(false);
    openerRef.current?.focus?.();
    openerRef.current = null;
  }, []);

  // Focus the close button as soon as the overlay mounts.
  useEffect(() => {
    if (open) closeBtn.current?.focus();
  }, [open]);

  /* Esc and the arrows listen on the document so they keep working even
     if focus has drifted off the overlay's own controls. */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        show(index - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        show(index + 1);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, index, close, show]);

  /* Replay the swap animation on every change: the class has to come off,
     reflow, then go back on. */
  useEffect(() => {
    const el = figure.current;
    if (!el || reduced || !open) return;
    el.classList.remove('is-swap');
    void el.offsetWidth;
    el.classList.add('is-swap');
  }, [index, open, reduced]);

  // Warm the neighbouring frames so paging feels instant.
  useEffect(() => {
    if (!open) return;
    [index + 1, index - 1].forEach((i) => {
      const s = SLIDES[(i + SLIDES.length) % SLIDES.length];
      if (s) {
        const im = new Image();
        im.src = s.src;
      }
    });
  }, [index, open]);

  const onTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, tracking: true };
  };

  const onTouchEnd = (e) => {
    if (!touch.current.tracking) return;
    touch.current.tracking = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    // Horizontal intent only, and far enough to be deliberate.
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    show(dx < 0 ? index + 1 : index - 1);
  };

  /* Keep Tab inside the overlay while it is open. */
  const onTrapKey = (e) => {
    if (e.key !== 'Tab' || !lb.current) return;
    const items = Array.from(lb.current.querySelectorAll('button:not([disabled])'));
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const current = SLIDES[index];

  return (
    <>
      <div className="pjev-grid">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            className={`pjev-tile${s.wide ? ' pjev-tile--wide' : ''} pjev-reveal`}
            type="button"
            data-reveal-delay={i * 80}
            onClick={(e) => openAt(i, e.currentTarget)}
          >
            <img src={s.src} alt={s.alt} loading="lazy" width="640" height="439" />
            <span className="pjev-tile__cap">
              <span>
                <span className="pjev-tile__meta">{s.meta}</span>
                <span className="pjev-tile__name">{s.title}</span>
              </span>
              <span className="pjev-tile__zoom" aria-hidden="true">
                <i className="bi bi-arrows-angle-expand" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {open && (
        <div
          className="pjev-lb is-open"
          role="dialog"
          aria-modal="true"
          aria-label="Event gallery"
          tabIndex="-1"
          ref={lb}
          onKeyDown={onTrapKey}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <p className="pjev-lb__count">
            <b>{index + 1}</b> / <span>{SLIDES.length}</span>
          </p>

          <button
            className="pjev-lb__btn pjev-lb__close"
            type="button"
            ref={closeBtn}
            onClick={close}
            aria-label="Close gallery"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
          <button
            className="pjev-lb__btn pjev-lb__prev"
            type="button"
            onClick={() => show(index - 1)}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
          <button
            className="pjev-lb__btn pjev-lb__next"
            type="button"
            onClick={() => show(index + 1)}
            aria-label="Next image"
          >
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>

          {/* Clicking the stage's padding closes; clicking the image does not. */}
          <div
            className="pjev-lb__stage"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <figure className="pjev-lb__fig" ref={figure}>
              <img className="pjev-lb__img" src={current.src} alt={current.alt} />
              <figcaption className="pjev-lb__cap">
                <b>{current.title}</b>
                <span>{current.meta}</span>
              </figcaption>
            </figure>
          </div>

          <div className="pjev-lb__rail" role="group" aria-label="Choose image">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                className={i === index ? 'is-active' : undefined}
                type="button"
                aria-label={`Show image ${i + 1}: ${s.title}`}
                onClick={() => show(i)}
              >
                <img src={s.src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
