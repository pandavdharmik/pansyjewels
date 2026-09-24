/* =====================================================================
   Product.jsx
   The product detail page, ported from product.html plus the initPDP()
   module of main.js. The markup mirrors product.html class for class,
   because style.css is shared verbatim with the old site.

   The old page hard-coded one piece. This one reads the piece from the
   :id route param — a home-page product or any collection piece — and
   falls back to the first product, so every card on the site can link
   straight to it.
   ===================================================================== */
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { PRODUCTS, byId } from '../data/products';
import collections from '../data/collections';
import collectionMeta from '../data/collectionMeta';
import { COLLECTIONS, money, whatsappUrl } from '../data/site';
import { useSite } from '../context/SiteContext';
import useReveal from '../hooks/useReveal';
import useReducedMotion from '../hooks/useReducedMotion';

/* Presentation options. The price deltas are added to the base price. */
const METALS = [
  { id: 'Champagne Gold', short: 'Champagne', delta: 0, swatch: 'linear-gradient(135deg,#f3e3c3,#c9a66b)' },
  { id: 'Yellow Gold', short: 'Yellow', delta: 0, swatch: 'linear-gradient(135deg,#f6dfa0,#c9992f)' },
  { id: 'Rose Gold', short: 'Rose', delta: 6000, swatch: 'linear-gradient(135deg,#f3cdbd,#c98d78)' },
  { id: 'Platinum', short: 'Platinum', delta: 42000, swatch: 'linear-gradient(135deg,#efefee,#b9bcc0)' },
];

/* Collection pieces name their metal by a short key; start on the match. */
const METAL_BY_KEY = { yellow: 'Yellow Gold', rose: 'Rose Gold', platinum: 'Platinum' };

const SIZES = [
  { id: 'H' }, { id: 'J' }, { id: 'L' }, { id: 'M' },
  { id: 'N' }, { id: 'P' }, { id: 'R', soldOut: true },
];

const GALLERY = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1100&q=80',
  'https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=1100&q=80',
];

const FRAMES = 36;
const METER = 140 - 26; // meter track minus its marker, as in style.css

/* A collection slug for a home-page category ("rings" -> "ring"). */
function slugForCat(cat) {
  const slug = String(cat || '').toLowerCase().replace(/s$/, '');
  return collections[slug] ? slug : 'ring';
}

/* Look the piece up in the home catalogue first, then in every
   collection, and give both the same shape. */
function findPiece(id) {
  const p = byId(id);
  if (p) return { ...p, slug: slugForCat(p.cat) };

  for (const slug of Object.keys(collections)) {
    const item = (collections[slug].items || []).find((i) => i.id === id);
    if (item) return { ...item, slug, rating: 5, reviews: 0, blurb: '' };
  }
  return { ...PRODUCTS[0], slug: slugForCat(PRODUCTS[0].cat) };
}

/* Swap the image size in an Unsplash URL (the old thumbs used w=200). */
function sized(src, w, q) {
  return src.replace(/w=\d+/, `w=${w}`).replace(/q=\d+/, `q=${q}`);
}

export default function Product() {
  const { id } = useParams();
  const product = useMemo(() => findPiece(id), [id]);
  const meta = collectionMeta[product.slug];
  const catTitle = meta ? meta.title : 'Rings';
  const catPath = (COLLECTIONS.find((c) => c.slug === product.slug) || COLLECTIONS[0]).path;
  const isRing = product.slug === 'ring';

  const { isWished, toggleWish, openModal, toast } = useSite();
  const reduced = useReducedMotion();
  useReveal('[data-reveal]', [product.id]);

  const [shot, setShot] = useState(0);
  const [fading, setFading] = useState(false);
  const [metal, setMetal] = useState(METALS[0]);
  const [size, setSize] = useState('M');
  const [open360, setOpen360] = useState(false);
  const [frame, setFrame] = useState(0);
  const [openPanel, setOpenPanel] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState('center center');
  const [sticky, setSticky] = useState(false);

  const actions = useRef(null);
  const viewer = useRef(null);
  const panels = useRef([]);
  const drag = useRef({ on: false, x: 0, from: 0 });

  // The gallery leads with the piece's own photograph.
  const shots = useMemo(
    () => [sized(product.img, 1100, 80), ...GALLERY.slice(1)],
    [product.img]
  );
  const price = product.price + metal.delta;
  const wished = isWished(product.id);
  const save = product.was ? Math.round(((product.was - product.price) / product.was) * 100) : 0;
  const enquiry = `Hello Pansy Jewels, I would like to enquire about the ${product.name}.`;

  // Reset the page state when the route switches to another piece.
  useEffect(() => {
    const start = METALS.find((m) => m.id === METAL_BY_KEY[product.metal]) || METALS[0];
    setShot(0);
    setMetal(start);
    setOpen360(false);
    setOpenPanel(0);
  }, [product.id, product.metal]);

  // style.css lifts the floating buttons above the sticky bar on this page.
  useEffect(() => {
    document.body.classList.add('pj-pdp-page');
    return () => document.body.classList.remove('pj-pdp-page');
  }, []);

  /* The purchase bar appears once the real actions scroll out of view. */
  useEffect(() => {
    const el = actions.current;
    if (!el) return undefined;
    const onScroll = () => setSticky(el.getBoundingClientRect().bottom < 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---- gallery: fade out, swap, fade back in, as main.js did ---- */
  const showShot = (i) => {
    if (i === shot) return;
    setFading(true);
    setTimeout(() => {
      setShot(i);
      setFading(false);
    }, 180);
  };

  /* ---- zoom follows the pointer (fine pointers only) ---- */
  const canZoom = !reduced && typeof window !== 'undefined' &&
    window.matchMedia && window.matchMedia('(pointer: fine)').matches;

  const onStageMove = (e) => {
    if (!zoom) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;
    setOrigin(`${px}% ${py}%`);
  };

  /* ---- 360 viewer ------------------------------------------------
     A placeholder, exactly as the old page was: one image turned by
     drag across a 36-frame turntable. Swap in a real frame sequence
     when you have one. */
  useEffect(() => {
    if (!open360) return undefined;
    viewer.current?.focus();

    const onMove = (e) => {
      if (!drag.current.on) return;
      const delta = Math.round((e.clientX - drag.current.x) / 9);
      setFrame((((drag.current.from + delta) % FRAMES) + FRAMES) % FRAMES);
    };
    const onUp = () => {
      drag.current.on = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [open360]);

  const deg = (frame / FRAMES) * 360;
  const frameStyle = {
    transform: `rotate(${deg.toFixed(1)}deg) scale(${(1 + Math.sin((deg * Math.PI) / 180) * 0.04).toFixed(3)})`,
  };
  const frameImgStyle = { transform: `rotate(${(-deg).toFixed(1)}deg) scale(1.25)` };

  const start360 = () => {
    setOpen360(true);
    toast('Drag to spin the piece — 360° preview', 'bi-arrow-repeat');
  };

  /* ---- accordion: one panel at a time, height animated ----
     Heights are measured after render, since refs are not attached yet
     on the first pass. */
  const [heights, setHeights] = useState([]);
  useLayoutEffect(() => {
    setHeights(panels.current.map((el) => (el ? el.scrollHeight : 0)));
  }, [openPanel, product.id, metal.id]);
  const panelHeight = (i) => (openPanel === i ? `${heights[i] || 0}px` : '0px');

  const accordion = [
    {
      title: 'Product Details',
      body: (
        <>
          <dl>
            <div><dt>Metal</dt><dd>{metal.id === 'Platinum' ? 'Platinum' : `18k ${metal.id}`}</dd></div>
            <div><dt>Gross Weight</dt><dd>4.82 g</dd></div>
            <div><dt>Centre Stone</dt><dd>1.20 ct Round Brilliant</dd></div>
            <div><dt>Clarity / Colour</dt><dd>VVS1 · F</dd></div>
            <div><dt>Cut Grade</dt><dd>Excellent</dd></div>
            <div><dt>Setting</dt><dd>Six-claw, off-axis</dd></div>
            <div><dt>Band Width</dt><dd>2.1 mm</dd></div>
            <div><dt>Finish</dt><dd>Hand-brushed satin</dd></div>
          </dl>
          <p className="mt-3 mb-0">
            Cast, set and polished in our Mumbai atelier. Each piece takes roughly four
            hundred hours from first sketch to final polish, and is signed by the
            goldsmith who finished it.
          </p>
        </>
      ),
    },
    {
      title: 'Certification',
      body: (
        <>
          <p>
            Every piece ships with an independent IGI grading report for the centre
            stone, a BIS hallmark on the metal, and a Pansy Jewels lifetime care record
            registered to your name.
          </p>
          <div className="pj-cert">
            <span><i className="bi bi-patch-check" /> IGI Report</span>
            <span><i className="bi bi-award" /> BIS Hallmark</span>
            <span><i className="bi bi-globe2" /> Conflict-Free</span>
            <span><i className="bi bi-file-earmark-text" /> Lifetime Record</span>
          </div>
        </>
      ),
    },
    {
      title: 'Care Information',
      body: (
        <ul>
          <li>Remove before swimming, gardening or applying perfume and lotion.</li>
          <li>Clean with warm water, a drop of mild soap and a soft brush behind the stone.</li>
          <li>Store separately in the supplied pouch — gold marks gold.</li>
          <li>Bring it in every twelve months: inspection, re-polish and claw check are free, forever.</li>
        </ul>
      ),
    },
    {
      title: 'Shipping & Returns',
      body: (
        <p>
          Fully insured delivery across India within seven working days, and worldwide
          within fourteen. Unworn pieces may be returned within thirty days; bespoke and
          engraved commissions are final.
        </p>
      ),
    },
  ];

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="pj-pdp">
      <div className="pj-shell">
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <Link to={catPath}>{catTitle}</Link>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="pj-pdp__grid">
          {/* ========================= GALLERY ======================= */}
          <div className="pj-gallery" data-reveal="left">
            <div className="pj-gallery__thumbs">
              {shots.map((src, i) => (
                <button
                  key={src}
                  className={`pj-thumb${i === shot ? ' is-active' : ''}`}
                  type="button"
                  aria-label={`View image ${i + 1}`}
                  onClick={() => showShot(i)}
                >
                  <img src={sized(src, 200, 70)} alt="" loading="lazy" />
                </button>
              ))}
              <button
                className="pj-thumb pj-thumb--360"
                type="button"
                aria-label="Open the 360 degree viewer"
                onClick={start360}
              >
                <i className="bi bi-arrow-repeat" aria-hidden="true" />
                <span>360°</span>
              </button>
            </div>

            <div
              className={`pj-stage${zoom ? ' is-zoom' : ''}`}
              onMouseEnter={() => canZoom && setZoom(true)}
              onMouseLeave={() => {
                setZoom(false);
                setOrigin('center center');
              }}
              onMouseMove={onStageMove}
            >
              {product.tag && <span className="pj-stage__badge">{product.tag}</span>}
              <img
                src={shots[shot]}
                alt={product.name}
                style={{ opacity: fading ? 0 : 1, transformOrigin: origin }}
              />
              <span className="pj-stage__hint">
                <i className="bi bi-zoom-in" aria-hidden="true" /> Hover to zoom
              </span>

              <div
                className={`pj-360${open360 ? ' is-on' : ''}`}
                ref={viewer}
                tabIndex={0}
                role="application"
                aria-label="360 degree product viewer"
                onMouseDown={(e) => {
                  if (e.target.closest('.pj-360__close')) return;
                  e.preventDefault();
                  drag.current = { on: true, x: e.clientX, from: frame };
                }}
                onTouchStart={(e) => {
                  drag.current = { on: true, x: e.touches[0].clientX, from: frame };
                }}
                onTouchMove={(e) => {
                  if (!drag.current.on) return;
                  const delta = Math.round((e.touches[0].clientX - drag.current.x) / 9);
                  setFrame((((drag.current.from + delta) % FRAMES) + FRAMES) % FRAMES);
                }}
                onTouchEnd={() => {
                  drag.current.on = false;
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') setFrame((f) => (f - 1 + FRAMES) % FRAMES);
                  if (e.key === 'ArrowRight') setFrame((f) => (f + 1) % FRAMES);
                  if (e.key === 'Escape') setOpen360(false);
                }}
              >
                <button
                  className="pj-icon-btn pj-360__close"
                  type="button"
                  aria-label="Close 360 viewer"
                  onClick={() => setOpen360(false)}
                >
                  <i className="bi bi-x-lg" />
                </button>
                <span className="pj-360__ring" aria-hidden="true" />
                <div className="pj-360__frame" style={frameStyle}>
                  <img src={GALLERY[1]} alt={`${product.name}, rotating view`} style={frameImgStyle} />
                </div>
                <div className="pj-360__hud">
                  <span>Frame {frame + 1} / {FRAMES}</span>
                  <span className="pj-360__meter">
                    <span style={{ left: `${(frame / FRAMES) * METER}px` }} />
                  </span>
                  <span>Drag · or use ← →</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================== INFO ========================= */}
          <div data-reveal="right">
            <span className="pj-card__cat">{catTitle} · Pansy Jewels</span>
            <h1 className="pj-pdp__title">{product.name}</h1>

            {product.reviews > 0 && (
              <div className="pj-pdp__rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`bi ${i < product.rating ? 'bi-star-fill' : 'bi-star'}`}
                    aria-hidden="true"
                  />
                ))}
                <small>
                  {product.rating.toFixed(1)} · {product.reviews} reviews
                </small>
              </div>
            )}

            <div className="pj-pdp__price">
              <span className="now">{money(price)}</span>
              {product.was && <del>{money(product.was)}</del>}
              {product.was && <span className="save">Save {save}%</span>}
            </div>

            {product.blurb && (
              <p className="pj-lede mb-4" style={{ fontSize: '1rem' }}>
                {product.blurb}
              </p>
            )}

            {/* Metal */}
            <div className="pj-opt">
              <div className="pj-opt__head">
                <span className="pj-opt__label">Metal</span>
                <span className="pj-opt__value">{metal.id}</span>
              </div>
              <div className="pj-opt__row">
                {METALS.map((m) => (
                  <button
                    key={m.id}
                    className={`pj-metal${metal.id === m.id ? ' is-active' : ''}`}
                    type="button"
                    aria-pressed={metal.id === m.id}
                    onClick={() => setMetal(m)}
                  >
                    <i style={{ background: m.swatch }} /> {m.short}
                  </button>
                ))}
              </div>
            </div>

            {/* Size — rings only */}
            {isRing && (
              <div className="pj-opt">
                <div className="pj-opt__head">
                  <span className="pj-opt__label">Ring Size</span>
                  <span className="pj-opt__value">UK {size}</span>
                </div>
                <div className="pj-opt__row">
                  {SIZES.map((s) => (
                    <button
                      key={s.id}
                      className={`pj-size${size === s.id ? ' is-active' : ''}`}
                      type="button"
                      aria-pressed={size === s.id}
                      disabled={s.soldOut}
                      onClick={() => setSize(s.id)}
                    >
                      {s.id}
                    </button>
                  ))}
                </div>
                <p className="mt-3 mb-0" style={{ fontSize: '.85rem', fontWeight: 500, color: 'var(--pj-smoke)' }}>
                  <i className="bi bi-rulers" /> Unsure of the size? We resize free, for life —{' '}
                  <a
                    href="#"
                    style={{ color: 'var(--pj-gold-ink)', fontWeight: 600, textDecoration: 'underline' }}
                    onClick={(e) => {
                      e.preventDefault();
                      openModal('appointment');
                    }}
                  >
                    book a fitting
                  </a>
                  .
                </p>
              </div>
            )}

            {/* Primary actions */}
            <div className="pj-pdp__actions" ref={actions}>
              <a
                className="pj-btn pj-btn--gold"
                href={whatsappUrl(
                  `Hello Pansy Jewels, I would like to enquire about the ${product.name} in ${metal.id}${
                    isRing ? `, size ${size}` : ''
                  } (${money(price)}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp" /> Enquire on WhatsApp
              </a>
              <button
                className={`pj-wish-btn${wished ? ' is-on' : ''}`}
                type="button"
                aria-label="Save to wishlist"
                aria-pressed={wished}
                onClick={() => toggleWish(product.id, product.name)}
              >
                <i className={`bi bi-heart${wished ? '-fill' : ''}`} />
              </button>
            </div>

            <div className="pj-pdp__actions pj-pdp__actions--sub">
              <button className="pj-btn pj-btn--ink" type="button" onClick={() => openModal('appointment')}>
                <i className="bi bi-calendar2-week" /> Book Appointment
              </button>
              <a
                className="pj-btn"
                href={whatsappUrl(`Hello Pansy Jewels, I would like a bespoke version of the ${product.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-pencil" /> Customise This
              </a>
            </div>

            {/* Assurances */}
            <ul className="pj-assure">
              <li><i className="bi bi-patch-check" /> IGI certified stone</li>
              <li><i className="bi bi-arrow-repeat" /> Free lifetime resizing</li>
              <li><i className="bi bi-shield-check" /> Hallmarked 18k gold</li>
              <li><i className="bi bi-box-seam" /> Insured delivery in 7 days</li>
            </ul>

            {/* Details / Certification / Care / Shipping */}
            <div className="pj-acc">
              {accordion.map((panel, i) => (
                <div className="pj-acc__item" key={panel.title}>
                  <button
                    className={`pj-acc__btn${openPanel === i ? ' is-open' : ''}`}
                    type="button"
                    aria-expanded={openPanel === i}
                    onClick={() => setOpenPanel((p) => (p === i ? null : i))}
                  >
                    {panel.title} <i className="bi bi-plus-lg" aria-hidden="true" />
                  </button>
                  <div
                    className="pj-acc__panel"
                    ref={(el) => {
                      panels.current[i] = el;
                    }}
                    style={{ maxHeight: panelHeight(i) }}
                  >
                    <div className="pj-acc__inner">{panel.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ======================= FASHION STRIP ===================== */}
      <section className="pj-story pj-section--flush mt-5" style={{ minHeight: 'min(70svh,620px)' }}>
        <div className="pj-story__bg" data-parallax-scroll="0.16">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1900&q=80"
            alt={`Model wearing the ${product.name}`}
          />
        </div>
        <div className="pj-shell pj-story__inner">
          <h2 className="pj-story__quote" data-reveal="">
            Worn by <em>Aanya</em>
          </h2>
          <p className="pj-story__sig" data-reveal="" data-reveal-delay="180">
            The {catTitle} Campaign — photographed in Mumbai
          </p>
        </div>
      </section>

      {/* ====================== RELATED PIECES ===================== */}
      <section className="pj-section">
        <div className="pj-shell">
          <div
            className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4"
            data-reveal=""
          >
            <div className="pj-sec-head mb-0">
              <span className="pj-eyebrow">Completes the Look</span>
              <h2 className="pj-title pj-title--sm" style={{ fontSize: 'clamp(1.9rem,3.4vw,3rem)' }}>
                You may also like
              </h2>
            </div>
            <Link className="pj-link" to={catPath}>
              All designs <i className="bi bi-arrow-right" />
            </Link>
          </div>

          <div className="pj-grid-products">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== APPOINTMENT CTA ===================== */}
      <section className="pj-section pj-appt" id="appointment">
        <div className="pj-appt__glow" aria-hidden="true" />
        <div className="pj-shell pj-appt__inner">
          <span className="pj-eyebrow pj-eyebrow--center" data-reveal="">
            Private Appointments
          </span>
          <h2 className="pj-appt__title" data-reveal="" data-reveal-delay="90">
            Experience Pansy <em className="pj-italic pj-gold-text">in person.</em>
          </h2>
          <p className="pj-lede mx-auto" data-reveal="" data-reveal-delay="160">
            See the {product.name} under boutique light, try it in four metals, and leave
            with no obligation at all.
          </p>
          <div className="pj-appt__cta" data-reveal="" data-reveal-delay="220">
            <button className="pj-btn pj-btn--gold" type="button" onClick={() => openModal('appointment')}>
              <i className="bi bi-calendar2-week" /> Book Appointment
            </button>
            <a className="pj-btn" href={whatsappUrl(enquiry)} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp" /> WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* ============ STICKY PURCHASE BAR (mobile only, via CSS) ============ */}
      <div className={`pj-stickybar${sticky ? ' is-on' : ''}`}>
        <div className="pj-stickybar__info">
          <strong>{product.name}</strong>
          <span>{money(price)}</span>
        </div>
        <button
          className={`pj-wish-btn${wished ? ' is-on' : ''}`}
          type="button"
          aria-label="Save to wishlist"
          aria-pressed={wished}
          onClick={() => toggleWish(product.id, product.name)}
          style={{ width: 46, height: 46, borderColor: 'rgba(247,242,234,.25)', color: 'var(--pj-ivory)' }}
        >
          <i className={`bi bi-heart${wished ? '-fill' : ''}`} />
        </button>
        <a
          className="pj-btn pj-btn--gold pj-btn--sm"
          href={whatsappUrl(enquiry)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp" /> Enquire
        </a>
      </div>
    </main>
  );
}
