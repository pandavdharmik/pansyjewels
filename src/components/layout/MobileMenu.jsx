/* =====================================================================
   MobileMenu.jsx
   The slide-in menu. Uses Bootstrap's offcanvas CSS but drives the
   `show` class from React state rather than loading Bootstrap's JS
   bundle — nothing else in the app needs that bundle, and this keeps
   the open/close state in one place.
   ===================================================================== */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { COLLECTIONS, EDUCATION, CONTACT } from '../../data/site';
import useScrollLock from '../../hooks/useScrollLock';

/* Numbered exactly as the old markup did, after the Occasions/Boutique/
   Craft entries came out. */
const SIMPLE_LINKS = [
  { num: '04', path: '/event', label: 'Event' },
  { num: '05', path: '/contact', label: 'Contact Us' },
];

function Accordion({ num, label, items, open, onToggle, onNavigate }) {
  const panel = useRef(null);

  /* The stylesheet animates max-height from 0, so the open height has to
     be measured and written inline — exactly what the old JS did. It runs
     in a layout effect because the height can only be read after the DOM
     is there, and must be applied before the browser paints. */
  useLayoutEffect(() => {
    const el = panel.current;
    if (!el) return;
    el.style.maxHeight = open ? `${el.scrollHeight}px` : '';
  }, [open, items]);

  return (
    <li>
      <button
        className="pj-menu__acc"
        type="button"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span className="pj-menu__acc-label">
          <span className="num">{num}</span> {label}
        </span>
        <span className="pj-acc-sign" aria-hidden="true" />
      </button>
      <div
        className={`pj-collections-acc${open ? ' is-open' : ''}`}
        ref={panel}
      >
        <ul>
          {items.map((item) => (
            <li key={item.path}>
              <Link className="pj-collection-link" to={item.path} onClick={onNavigate}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function MobileMenu({ open, onClose }) {
  const [section, setSection] = useState(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Collapse the accordions once the panel has closed.
  useEffect(() => {
    if (!open) setSection(null);
  }, [open]);

  const toggle = (name) => setSection((s) => (s === name ? null : name));

  return (
    <>
      {open && <div className="offcanvas-backdrop fade show" onClick={onClose} />}

      <div
        className={`offcanvas offcanvas-end pj-menu${open ? ' show' : ''}`}
        tabIndex="-1"
        aria-label="Menu"
        aria-hidden={!open}
        style={{ visibility: open ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header justify-content-between">
          <Link className="pj-logo" to="/" onClick={onClose}>
            <img
              className="pj-logo__img"
              src="/assets/images/pansy-logo.png"
              alt="Pansy Jewels"
              width="205"
              height="101"
            />
          </Link>
          <button className="pj-menu__close" type="button" onClick={onClose} aria-label="Close menu">
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <div className="offcanvas-body">
          <ul className="pj-menu__list">
            <Accordion
              num="01"
              label="Collections"
              items={COLLECTIONS}
              open={section === 'collections'}
              onToggle={() => toggle('collections')}
              onNavigate={onClose}
            />
            <li>
              <NavLink to="/about" onClick={onClose}>
                <span className="num">02</span> About Us
              </NavLink>
            </li>
            <Accordion
              num="03"
              label="Education"
              items={EDUCATION}
              open={section === 'education'}
              onToggle={() => toggle('education')}
              onNavigate={onClose}
            />
            {SIMPLE_LINKS.map((l) => (
              <li key={l.path}>
                <NavLink to={l.path} onClick={onClose}>
                  <span className="num">{l.num}</span> {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pj-menu__auth">
            <Link className="pj-btn pj-btn--gold pj-btn--block pj-btn--sm" to="/contact" onClick={onClose}>
              Contact us
            </Link>
          </div>

          <div className="pj-menu__foot">
            <span className="pj-eyebrow">The Atelier</span>
            <p className="mb-2" style={{ fontSize: '.9rem' }}>
              {CONTACT.addressLines[0]}
              <br />
              {CONTACT.addressLines[2]}
            </p>
            <div className="pj-menu__social">
              <a className="pj-icon-btn" href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a className="pj-icon-btn" href="#" aria-label="Pinterest"><i className="bi bi-pinterest" /></a>
              <a className="pj-icon-btn" href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a className="pj-icon-btn" href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
