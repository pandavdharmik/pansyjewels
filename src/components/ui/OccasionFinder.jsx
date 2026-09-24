/* =====================================================================
   OccasionFinder.jsx
   The "What is the occasion?" tab strip. The old initFinder() built one
   <img> per occasion and cross-faded by toggling a class; that is now
   just a rendered list with an is-active flag.
   ===================================================================== */
import { useState } from 'react';
import { OCCASIONS } from '../../data/products';

const KEYS = Object.keys(OCCASIONS);

export default function OccasionFinder() {
  const [active, setActive] = useState(KEYS[0]);
  const current = OCCASIONS[active];

  return (
    <div className="pj-finder__grid">
      <ul className="pj-finder__list" data-reveal="left" role="tablist" aria-label="Occasions">
        {KEYS.map((key, i) => (
          <li key={key}>
            <button
              className={`pj-occ${active === key ? ' is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
            >
              <span className="pj-occ__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="pj-occ__name">{OCCASIONS[key].title}</span>
              <span className="pj-occ__arrow">
                <i className="bi bi-arrow-right" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="pj-finder__panel" data-reveal="right">
        {/* The stylesheet targets `.pj-finder__panel img` directly, so these
            carry no class of their own — only the is-active cross-fade flag. */}
        {KEYS.map((key) => (
          <img
            key={key}
            className={active === key ? 'is-active' : undefined}
            src={OCCASIONS[key].img}
            alt={`${OCCASIONS[key].title} jewellery`}
            loading="lazy"
          />
        ))}
        <div className="pj-finder__caption">
          <h3>{current.title}</h3>
          <p>{current.copy}</p>
          <a className="pj-link" href="#featured">
            Shop {current.title.toLowerCase()} <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
