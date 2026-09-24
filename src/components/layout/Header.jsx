/* =====================================================================
   Header.jsx
   The fixed site header. Replaces ~90 lines that were copy-pasted into
   21 HTML files, plus the initHeader/initCollections modules of main.js.

   Behaviour kept from the old site:
     - `is-stuck` past 40px, `is-hidden` when scrolling down past 520px
     - the Collections dropdown cross-fades a preview image on hover
     - the Education dropdown is the compact variant
   ===================================================================== */
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { COLLECTIONS, EDUCATION } from '../../data/site';
import { useSite } from '../../context/SiteContext';

function CollectionsDropdown() {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(COLLECTIONS[0]);
  const wrap = useRef(null);

  // Close when focus or the pointer leaves the whole dropdown.
  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      className="pj-collections-dropdown"
      ref={wrap}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="pj-nav__link pj-collections-toggle"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="pjCollectionsMenu"
        onClick={() => setOpen((v) => !v)}
      >
        Collections <i className="bi bi-chevron-down" aria-hidden="true" />
      </button>

      <div className="pj-collections-menu" id="pjCollectionsMenu">
        <div className="pj-collections-menu__inner">
          <div>
            <span className="pj-collections-menu__head">Collections</span>
            <ul className="pj-collections-menu__grid" role="menu" aria-label="Collections">
              {COLLECTIONS.map((c) => (
                <li key={c.slug}>
                  <NavLink
                    className={({ isActive }) =>
                      `pj-collection-link${isActive ? ' is-active' : ''}`
                    }
                    role="menuitem"
                    to={c.path}
                    onMouseEnter={() => setPreview(c)}
                    onFocus={() => setPreview(c)}
                    onClick={() => setOpen(false)}
                  >
                    {c.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Frames are stacked and cross-faded, so swapping never flashes. */}
          <div className="pj-collections-preview" aria-hidden="true">
            {COLLECTIONS.map((c) => (
              <img
                key={c.slug}
                className={`pj-collections-preview__img${
                  preview.slug === c.slug ? ' is-active' : ''
                }`}
                loading="lazy"
                alt=""
                src={c.img}
              />
            ))}
            <span className="pj-collections-preview__caption">{preview.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="pj-collections-dropdown pj-collections-dropdown--compact"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="pj-nav__link pj-collections-toggle"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="pjEducationMenu"
        onClick={() => setOpen((v) => !v)}
      >
        Education <i className="bi bi-chevron-down" aria-hidden="true" />
      </button>
      <div className="pj-collections-menu pj-collections-menu--compact" id="pjEducationMenu">
        <ul className="pj-collections-menu__list" role="menu" aria-label="Education">
          {EDUCATION.map((e) => (
            <li key={e.path}>
              <NavLink
                className={({ isActive }) => `pj-collection-link${isActive ? ' is-active' : ''}`}
                role="menuitem"
                to={e.path}
                onClick={() => setOpen(false)}
              >
                {e.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Header({ onOpenMenu }) {
  const [stuck, setStuck] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { pathname } = useLocation();
  const { modal } = useSite();

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.pageYOffset;
        setStuck(y > 40);
        // Hide on the way down past the fold, reveal on the way back up.
        setHidden(y > lastY.current && y > 520);
        lastY.current = y;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // An open overlay must never leave the header hidden behind it.
  const isHidden = hidden && !modal;

  return (
    <header
      className={`pj-header${stuck ? ' is-stuck' : ''}${isHidden ? ' is-hidden' : ''}`}
      id="pjHeader"
    >
      <div className="pj-shell pj-header__inner">
        <Link className="pj-logo" to="/" aria-label="Pansy Jewels — home">
          <img
            className="pj-logo__img"
            src="/assets/images/pansy-logo.png"
            alt="Pansy Jewels"
            width="205"
            height="101"
          />
        </Link>

        <nav className="pj-nav" aria-label="Primary">
          <CollectionsDropdown key={`cols-${pathname}`} />
          <NavLink
            className={({ isActive }) => `pj-nav__link${isActive ? ' is-active' : ''}`}
            to="/about"
          >
            About Us
          </NavLink>
          <EducationDropdown key={`edu-${pathname}`} />
          <NavLink
            className={({ isActive }) => `pj-nav__link${isActive ? ' is-active' : ''}`}
            to="/event"
          >
            Event
          </NavLink>
        </nav>

        <div className="pj-header__actions">
          <Link className="pj-btn pj-btn--gold pj-btn--sm pj-hide-md" to="/contact">
            Contact us
          </Link>
          <button className="pj-burger" type="button" onClick={onOpenMenu} aria-label="Open menu">
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
