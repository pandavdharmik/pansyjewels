/* =====================================================================
   CollectionPage.jsx
   One component behind all eight collection URLs. Replaces eight almost
   identical HTML files plus assets/js/collection.js.

   It takes a `slug`, reads the catalogue from data/collections.js and the
   copy from data/collectionMeta.js, and runs the same filter/sort/view
   logic the vanilla engine did — as derived state rather than DOM writes.
   ===================================================================== */
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import collections from '../data/collections';
import collectionMeta, { METALS, METAL_SWATCHES, PRICE_BANDS } from '../data/collectionMeta';
import { COLLECTIONS, money, whatsappUrl } from '../data/site';
import useReveal from '../hooks/useReveal';

/* An item's facet is either a list (ring sizes) or a single value
   (earring style); treat both as a list so filtering is one code path. */
function facetsOf(item, key) {
  const v = item[key];
  if (v === undefined || v === null) return [];
  return Array.isArray(v) ? v.map(String) : [String(v)];
}

function discount(p) {
  if (!p.was) return 0;
  return Math.round(((p.was - p.price) / p.was) * 100);
}

function toggle(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function Card({ item, facetKey, facetLabel, index }) {
  const off = discount(item);
  const detail = facetLabel ? facetLabel(item[facetKey], item) : '';

  return (
    <article
      className="pjcl-card"
      data-id={item.id}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="pjcl-card__media">
        {item.tag && (
          <span className={`pjcl-card__tag${item.tag === 'Sale' ? ' pjcl-card__tag--sale' : ''}`}>
            {item.tag}
          </span>
        )}
        <Link to={`/product/${item.id}`} aria-label={item.name}>
          <img src={item.img} alt={item.name} loading="lazy" />
        </Link>
      </div>

      <div className="pjcl-card__body">
        <span className="pjcl-card__meta">{METALS[item.metal] || item.metal}</span>
        <h3 className="pjcl-card__name">
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </h3>
        {detail && <p className="pjcl-card__sizes">{detail}</p>}

        <div className="pjcl-card__price">
          <span>{money(item.price)}</span>
          {item.was && (
            <>
              <del>{money(item.was)}</del>
              <em>{off}% off</em>
            </>
          )}
        </div>

        <div className="pjcl-card__actions">
          <Link className="pj-btn pj-btn--sm" to={`/product/${item.id}`}>
            View
          </Link>
          <a
            className="pj-btn pj-btn--sm pj-btn--gold"
            href={whatsappUrl(
              `Hello Pansy Jewels, I would like to know more about the ${item.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}

export default function CollectionPage({ slug }) {
  const cfg = collections[slug];
  const meta = collectionMeta[slug];

  const [metals, setMetals] = useState([]);
  const [facets, setFacets] = useState([]);
  const [bands, setBands] = useState([]);
  const [sort, setSort] = useState('featured');
  const [view, setView] = useState('grid');

  const facetKey = cfg.facetKey || 'sizes';

  const list = useMemo(() => {
    const matches = (p) => {
      if (metals.length && !metals.includes(p.metal)) return false;
      if (facets.length) {
        const mine = facetsOf(p, facetKey);
        if (!facets.some((f) => mine.includes(f))) return false;
      }
      if (bands.length) {
        const active = PRICE_BANDS.filter((b) => bands.includes(b.id));
        if (!active.some((b) => b.test(p.price))) return false;
      }
      return true;
    };

    const out = cfg.items.filter(matches);
    if (sort === 'price-asc') out.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') out.sort((a, b) => b.price - a.price);
    if (sort === 'name') out.sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }, [cfg.items, facetKey, metals, facets, bands, sort]);

  // Re-run the card reveal whenever the result set changes.
  useReveal('[data-reveal]', [slug]);

  const clearAll = () => {
    setMetals([]);
    setFacets([]);
    setBands([]);
  };

  const count =
    list.length === cfg.items.length
      ? `${cfg.items.length} ${cfg.noun}`
      : `${list.length} of ${cfg.items.length} ${cfg.noun}`;

  return (
    <main className="pjcl">
      <div className="pj-shell">
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <Link to="/ring-collection">Collections</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span aria-current="page">{meta.title}</span>
        </nav>

        <section className="pjcl-banner" data-reveal="zoom" aria-labelledby="pjclBannerHeading">
          <img
            className="pjcl-banner__img"
            src={meta.img}
            alt=""
            loading="eager"
            width="1900"
            height="700"
          />
          <div className="pjcl-banner__body">
            <span className="pjcl-banner__kicker">{meta.kicker}</span>
            <h1 className="pjcl-banner__title" id="pjclBannerHeading">
              {meta.title}
            </h1>
            <a className="pj-btn pj-btn--gold" href="#pjclGrid">
              See collection
            </a>
          </div>
        </section>

        <div className="pjcl-layout">
          {/* ------------------------- sidebar ------------------------ */}
          <aside className="pjcl-side" aria-label={`Filter ${cfg.noun}`}>
            <section className="pjcl-panel" aria-labelledby="pjclFilterHeading">
              <div className="pjcl-panel__head">
                <h2 className="pjcl-panel__title" id="pjclFilterHeading">
                  Filter
                </h2>
                <button className="pjcl-clear" type="button" onClick={clearAll}>
                  Clear
                </button>
              </div>

              <div className="pjcl-field">
                <h3 className="pjcl-field__label" id="pjclFacetLabel">
                  {meta.facetLabel}
                </h3>
                <div className="pjcl-chips" role="group" aria-labelledby="pjclFacetLabel">
                  {meta.facetOptions.map((opt) => (
                    <button
                      key={opt}
                      className={`pjcl-chip${facets.includes(opt) ? ' is-on' : ''}`}
                      type="button"
                      aria-pressed={facets.includes(opt)}
                      onClick={() => setFacets((f) => toggle(f, opt))}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pjcl-field">
                <h3 className="pjcl-field__label" id="pjclMetalLabel">
                  Metal
                </h3>
                <div className="pjcl-swatches" role="group" aria-labelledby="pjclMetalLabel">
                  {METAL_SWATCHES.map((m) => (
                    <button
                      key={m.id}
                      className={`pjcl-swatch pjcl-swatch--${m.id}${
                        metals.includes(m.id) ? ' is-on' : ''
                      }`}
                      type="button"
                      aria-pressed={metals.includes(m.id)}
                      aria-label={m.label}
                      onClick={() => setMetals((s) => toggle(s, m.id))}
                    >
                      <span />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pjcl-field">
                <h3 className="pjcl-field__label">Price</h3>
                {PRICE_BANDS.map((b) => (
                  <label className="pjcl-check" key={b.id}>
                    <input
                      type="checkbox"
                      checked={bands.includes(b.id)}
                      onChange={() => setBands((s) => toggle(s, b.id))}
                    />{' '}
                    <span>{b.label}</span>
                  </label>
                ))}
              </div>
            </section>

            <section className="pjcl-panel" aria-labelledby="pjclCatsHeading">
              <h2 className="pjcl-panel__title" id="pjclCatsHeading">
                Product categories
              </h2>
              <ul className="pjcl-cats">
                {COLLECTIONS.map((c) => (
                  <li key={c.slug}>
                    <Link className={c.slug === slug ? 'is-active' : undefined} to={c.path}>
                      {collectionMeta[c.slug].title} <span>{collections[c.slug].items.length}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pjcl-panel pjcl-panel--quiet" aria-labelledby="pjclHelpHeading">
              <h2 className="pjcl-panel__title" id="pjclHelpHeading">
                {meta.helpTitle}
              </h2>
              <p>{meta.helpCopy}</p>
              <Link className="pj-link" to="/contact">
                Talk to us <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </section>
          </aside>

          {/* --------------------------- grid ------------------------- */}
          <div>
            {/* Layout switch, count, then sort — the order the old markup used. */}
            <div className="pjcl-toolbar">
              <div className="pjcl-views" role="group" aria-label="Change layout">
                <button
                  className={`pjcl-view${view === 'grid' ? ' is-on' : ''}`}
                  type="button"
                  aria-pressed={view === 'grid'}
                  aria-label="Grid view"
                  onClick={() => setView('grid')}
                >
                  <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" />
                </button>
                <button
                  className={`pjcl-view${view === 'list' ? ' is-on' : ''}`}
                  type="button"
                  aria-pressed={view === 'list'}
                  aria-label="List view"
                  onClick={() => setView('list')}
                >
                  <i className="bi bi-list-ul" aria-hidden="true" />
                </button>
              </div>

              <p className="pjcl-count" role="status" aria-live="polite">
                {count}
              </p>

              <div className="pjcl-sort">
                <label htmlFor="pjclSort">View as</label>
                <select id="pjclSort" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price, low to high</option>
                  <option value="price-desc">Price, high to low</option>
                  <option value="name">Name, A to Z</option>
                </select>
              </div>
            </div>

            {/* The count above is the live region; announcing the grid too
                would read the whole result set out on every filter click. */}
            <div className={`pjcl-grid${view === 'list' ? ' pjcl-grid--list' : ''}`} id="pjclGrid">
              {list.length ? (
                list.map((item, i) => (
                  <Card
                    key={item.id}
                    item={item}
                    facetKey={facetKey}
                    facetLabel={cfg.facetLabel}
                    index={i}
                  />
                ))
              ) : (
                <p className="pjcl-empty">
                  Nothing matches those filters yet. Clear one and try again, or{' '}
                  <Link to="/contact">tell us what you are looking for</Link>.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------- closing CTA ---------------------- */}
      <section className="pjcl-cta" aria-labelledby="pjclCtaHeading">
        <div className="pj-shell">
          <div className="pjcl-cta__inner" data-reveal="">
            <span className="pj-eyebrow">Made to order</span>
            <h2 className="pj-title pj-title--sm" id="pjclCtaHeading">
              Not finding the one?
            </h2>
            <p>{meta.ctaCopy}</p>
            <div className="pjcl-cta__actions">
              <Link className="pj-btn pj-btn--gold" to="/contact">
                <i className="bi bi-envelope" aria-hidden="true" /> Start a custom piece
              </Link>
              <Link className="pj-btn" to="/diamond-education">
                Learn about the 4Cs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
