/* =====================================================================
   SharedModals.jsx
   The four overlays that used to be pasted into the bottom of every HTML
   page: quick view, appointment, search and wishlist. Mounted once by
   SiteLayout and driven by `modal` in SiteContext.
   ===================================================================== */
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ProductCard from '../ui/ProductCard';
import { PRODUCTS, byId } from '../../data/products';
import { money, whatsappUrl } from '../../data/site';
import { useSite } from '../../context/SiteContext';

/* ------------------------------ quick view ------------------------- */
function QuickView() {
  const { modal, quickViewId, closeModal } = useSite();
  const product = quickViewId ? byId(quickViewId) : null;

  return (
    <Modal open={modal === 'quickview' && !!product} onClose={closeModal} eyebrow="Quick View">
      {product && (
        <div className="pj-quick">
          <div className="pj-quick__media">
            <img src={product.img} alt={product.name} />
          </div>
          <div>
            <span className="pj-card__cat">{product.cat}</span>
            <h3 className="pj-title--sm mb-2">{product.name}</h3>
            <div className="pj-card__stars mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <i
                  key={i}
                  className={`bi ${i < product.rating ? 'bi-star-fill' : 'bi-star'}`}
                  aria-hidden="true"
                />
              ))}
              <small>({product.reviews} reviews)</small>
            </div>

            <div className="pj-pdp__price" style={{ paddingBottom: '1.1rem', marginBottom: '1.1rem' }}>
              <span className="now">{money(product.price)}</span>
              {product.was && <del>{money(product.was)}</del>}
            </div>

            <p className="pj-lede" style={{ fontSize: '.95rem' }}>
              {product.blurb}
            </p>

            <ul className="pj-assure" style={{ gridTemplateColumns: '1fr' }}>
              <li>
                <i className="bi bi-patch-check" /> IGI certified stone
              </li>
              <li>
                <i className="bi bi-arrow-repeat" /> Free resizing for life
              </li>
            </ul>

            <div className="d-flex flex-wrap gap-2">
              <Link className="pj-btn pj-btn--ink" to={`/product/${product.id}`} onClick={closeModal}>
                Full Details <i className="bi bi-arrow-right" />
              </Link>
              <a
                className="pj-btn"
                href={whatsappUrl(
                  `Hello Pansy Jewels, I would like to enquire about the ${product.name} (${money(
                    product.price
                  )}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp" /> Enquire
              </a>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

/* ----------------------------- appointment ------------------------- */
const TIMES = ['11:00 — 12:00', '12:00 — 13:00', '15:00 — 16:00', '16:00 — 17:00', '17:00 — 18:00'];
const STORES = ['Mumbai — Bandra West', 'Delhi — Khan Market', 'Bengaluru — Indiranagar', 'Video Consultation'];
const INTERESTS = ['Engagement', 'Bridal', 'Bespoke Design', 'Gifting'];

function Appointment() {
  const { modal, closeModal, toast } = useSite();
  const [form, setForm] = useState({ name: '', phone: '', date: '', note: '' });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;

    /* ---- Replace with your real endpoint ---- */
    const first = form.name.trim().split(' ')[0];
    toast(
      `Thank you${first ? `, ${first}` : ''} — we will confirm your appointment shortly.`,
      'bi-calendar2-check'
    );
    setForm({ name: '', phone: '', date: '', note: '' });
    closeModal();
  };

  return (
    <Modal
      open={modal === 'appointment'}
      onClose={closeModal}
      eyebrow="Private Appointment"
      title="Book your visit"
      dark
    >
      <form onSubmit={onSubmit} noValidate>
        <div className="row">
          <div className="col-md-6">
            <div className="pj-field">
              <label htmlFor="apName">Full Name</label>
              <input id="apName" type="text" required placeholder="Your name" value={form.name} onChange={set('name')} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="pj-field">
              <label htmlFor="apPhone">Phone</label>
              <input id="apPhone" type="tel" required placeholder="+91" value={form.phone} onChange={set('phone')} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="pj-field">
              <label htmlFor="apDate">Preferred Date</label>
              <input id="apDate" type="date" required value={form.date} onChange={set('date')} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="pj-field">
              <label htmlFor="apTime">Preferred Time</label>
              <select id="apTime">{TIMES.map((t) => <option key={t}>{t}</option>)}</select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pj-field">
              <label htmlFor="apStore">Boutique</label>
              <select id="apStore">{STORES.map((s) => <option key={s}>{s}</option>)}</select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pj-field">
              <label htmlFor="apInterest">Interested In</label>
              <select id="apInterest">{INTERESTS.map((i) => <option key={i}>{i}</option>)}</select>
            </div>
          </div>
          <div className="col-12">
            <div className="pj-field">
              <label htmlFor="apNote">Anything we should prepare?</label>
              <textarea
                id="apNote"
                placeholder="Budget, style references, stone preferences…"
                value={form.note}
                onChange={set('note')}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mt-2">
          <button className="pj-btn pj-btn--gold" type="submit">
            Confirm Appointment <i className="bi bi-arrow-right" />
          </button>
          <a
            className="pj-btn pj-btn--light"
            href={whatsappUrl('Hello Pansy Jewels, I would like to book an appointment.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp" /> Book on WhatsApp
          </a>
        </div>
      </form>
    </Modal>
  );
}

/* -------------------------------- search --------------------------- */
function Search() {
  const { modal, closeModal } = useSite();
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return PRODUCTS.slice(0, 6);
    return PRODUCTS.filter((p) =>
      `${p.name} ${p.cat} ${p.blurb}`.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <Modal open={modal === 'search'} onClose={closeModal} eyebrow="Search" dark>
      <div className="pj-field mb-4">
        <label htmlFor="pjSearchInput">What are you looking for?</label>
        <input
          id="pjSearchInput"
          type="search"
          placeholder="Try “solitaire”, “tennis bracelet”, “Aurelia”"
          autoComplete="off"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div
        className="pj-grid-products"
        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))' }}
      >
        {results.length ? (
          results.map((p) => <ProductCard key={p.id} product={p} compact />)
        ) : (
          <p className="pj-lede" style={{ gridColumn: '1/-1' }}>
            Nothing matched “{q}”. Try a category, or ask us on WhatsApp.
          </p>
        )}
      </div>
    </Modal>
  );
}

/* ------------------------------- wishlist -------------------------- */
function WishlistModal() {
  const { modal, closeModal, wishlist } = useSite();
  const items = wishlist.map(byId).filter(Boolean);

  return (
    <Modal open={modal === 'wishlist'} onClose={closeModal} eyebrow="Saved" title="Your wishlist">
      <div
        className="pj-grid-products"
        style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))' }}
      >
        {items.length ? (
          items.map((p) => <ProductCard key={p.id} product={p} compact />)
        ) : (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem 0' }}>
            <i className="bi bi-heart" style={{ fontSize: '2rem', color: 'var(--pj-stone)' }} />
            <p className="pj-lede mt-3 mb-0">Nothing saved yet.</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default function SharedModals() {
  return (
    <>
      <QuickView />
      <Appointment />
      <Search />
      <WishlistModal />
    </>
  );
}
