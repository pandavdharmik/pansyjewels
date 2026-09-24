/* =====================================================================
   AuthVisual.jsx
   The animated left column shared by the login and register pages:
   cross-fading Ken Burns frames, a gold sheen, drifting "diamond dust"
   and a rotating word. Ported from login.js / register.js, which each
   carried their own copy of this.
   ===================================================================== */
import { useEffect, useMemo, useRef, useState } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

const WORDS = ['Engagements', 'Heirlooms', 'Bespoke Design', 'Everyday Wear'];
const SLIDE_MS = 5600;
const WORD_MS = 2600;
const DUST_COUNT = 16;

export default function AuthVisual({ slides, eyebrow, title, text }) {
  const [slide, setSlide] = useState(0);
  const [word, setWord] = useState(0);
  const [outgoing, setOutgoing] = useState(null);
  const reduced = useReducedMotion();
  const slideRefs = useRef([]);

  /* Randomised once per mount, so the specks do not re-scatter on every
     render the way they would if this were computed inline. */
  const dust = useMemo(
    () =>
      Array.from({ length: DUST_COUNT }, () => {
        const size = `${(2 + Math.random() * 4).toFixed(1)}px`;
        return {
          left: `${(Math.random() * 100).toFixed(2)}%`,
          top: `${(55 + Math.random() * 45).toFixed(2)}%`,
          '--d': `${(7 + Math.random() * 7).toFixed(2)}s`,
          '--delay': `${(Math.random() * 8).toFixed(2)}s`,
          width: size,
          height: size,
        };
      }),
    []
  );

  // Slideshow. Pauses while the tab is in the background.
  useEffect(() => {
    if (slides.length < 2) return undefined;
    let timer = setInterval(() => setSlide((i) => (i + 1) % slides.length), SLIDE_MS);

    const onVisible = () => {
      clearInterval(timer);
      if (!document.hidden) {
        timer = setInterval(() => setSlide((i) => (i + 1) % slides.length), SLIDE_MS);
      }
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [slides.length]);

  /* The Ken Burns keyframe is bound to .is-active, so it has to be
     removed and re-added for the animation to replay on every visit. */
  useEffect(() => {
    const el = slideRefs.current[slide];
    if (!el || reduced) return;
    el.classList.remove('is-active');
    void el.offsetWidth;
    el.classList.add('is-active');
  }, [slide, reduced]);

  /* Word ticker. The live index is mirrored in a ref so the interval can
     read it without re-subscribing on every tick — and so neither state
     setter sits inside the other's updater, which would make that
     updater impure and fire twice under StrictMode. */
  const wordRef = useRef(0);
  useEffect(() => {
    wordRef.current = word;
  }, [word]);

  useEffect(() => {
    if (reduced) return undefined;
    const timer = setInterval(() => {
      const from = wordRef.current;
      setOutgoing(from);
      setWord((from + 1) % WORDS.length);
    }, WORD_MS);
    return () => clearInterval(timer);
  }, [reduced]);

  // Park the outgoing word below the window again, ready for its turn.
  useEffect(() => {
    if (outgoing === null) return undefined;
    const t = setTimeout(() => setOutgoing(null), 520);
    return () => clearTimeout(t);
  }, [outgoing]);

  return (
    <aside className="pjl__visual">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`pjl-slide${i === slide ? ' is-active' : ''}`}
          ref={(el) => {
            slideRefs.current[i] = el;
          }}
        >
          <img src={src} alt="" />
        </div>
      ))}

      <span className="pjl__sheen" aria-hidden="true" />
      <div className="pjl__dust" aria-hidden="true">
        {!reduced && dust.map((style, i) => <span key={i} style={style} />)}
      </div>
      <span className="pjl__plate" aria-hidden="true" />

      <div className="pjl__visual-copy">
        <span className="pjl__eyebrow">{eyebrow}</span>
        <h2 className="pjl__visual-title">{title}</h2>
        <p className="pjl__visual-text">{text}</p>

        <div className="pjl__ticker">
          <span>Crafted for</span>
          <span className="pjl__ticker-window">
            {WORDS.map((w, i) => (
              <b
                key={w}
                className={i === word ? 'is-active' : i === outgoing ? 'is-out' : undefined}
              >
                {w}
              </b>
            ))}
          </span>
        </div>
      </div>

      <div className="pjl__dots" role="group" aria-label="Choose image">
        {slides.map((src, i) => (
          <button
            key={src}
            className={i === slide ? 'is-active' : undefined}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setSlide(i)}
          />
        ))}
      </div>
    </aside>
  );
}
