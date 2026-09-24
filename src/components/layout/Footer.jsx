/* =====================================================================
   Footer.jsx
   One footer for the whole site, driven by src/data/site.js. The
   newsletter form posts nowhere yet — it raises a toast, exactly as the
   old initForms() did, and marks where a real endpoint goes.
   ===================================================================== */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS, CONTACT, FOOTER_INFO, POLICIES, SOCIAL } from '../../data/site';
import { useSite } from '../../context/SiteContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { toast } = useSite();

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    /* ---- Replace with your real endpoint, e.g.
         fetch('/api/newsletter', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ email }),
         })
    ------------------------------------------------------- */
    toast('You are on the list. The private edit lands monthly.', 'bi-envelope-check');
    setEmail('');
  };

  return (
    <footer className="pj-footer" id="contact">
      <div className="pj-shell">
        <div className="pj-footer__top">
          <div className="pj-footer__brand">
            <Link className="pj-logo" to="/">
              <img
                className="pj-logo__img"
                src="/assets/images/pansy-logo.png"
                alt="Pansy Jewels"
                width="205"
                height="101"
              />
            </Link>
            <p>
              Fine jewellery, hand-finished in Mumbai since 1998. Designed to be worn every day and
              handed down eventually.
            </p>

            <form className="pj-newsletter" onSubmit={onSubscribe}>
              <input
                type="email"
                placeholder="Email for the private edit"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <i className="bi bi-arrow-right" />
              </button>
            </form>

            <div className="pj-footer__social">
              {SOCIAL.map((s) => (
                <a key={s.label} className="pj-icon-btn" href={s.href} aria-label={s.label}>
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5>Collections</h5>
            <ul>
              {COLLECTIONS.map((c) => (
                <li key={c.slug}>
                  <Link to={c.path}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Information</h5>
            <ul>
              {FOOTER_INFO.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Contact Us</h5>
            <ul>
              <li>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {CONTACT.addressLines.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < CONTACT.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> /{' '}
                <a href={CONTACT.landlineHref}>{CONTACT.landline}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pj-footer__bottom">
          <span>© {new Date().getFullYear()} Pansy Jewels. All rights reserved.</span>
          <nav className="pj-footer__policies" aria-label="Policies">
            {POLICIES.map((p) => (
              <Link key={p.path} to={p.path}>
                {p.label}
              </Link>
            ))}
            <a href="#">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
