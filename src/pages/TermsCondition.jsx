/* =====================================================================
   TermsCondition.jsx
   Terms and conditions — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function TermsCondition() {
  useReveal('[data-reveal]');

  return (
  <main className="pjlg">
  
    <section className="pj-section pjlg-page" id="pjtTop">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">Terms &amp; Condition</span>
        </nav>
  
        <div className="pjlg-grid">
  
          {/* ===================== LEFT — THE TERMS ===================== */}
          <div className="pjlg-col">
  
            <header className="pjlg-masthead" data-reveal="">
              <h1 className="pjlg-title">The terms you <em>agree to</em></h1>
            </header>
  
            <section className="pjlg-block" aria-labelledby="pjtIntroHeading" data-reveal="">
              <h2 className="pjlg-heading" id="pjtIntroHeading">Introduction</h2>
              <p>
                This website is owned and operated by Pansy Jewels Diamond Jewellery.
                In using the Pansy Jewels Diamond Jewellery service, users are deemed to
                have accepted the Terms and Conditions listed below, or as may be
                revised from time to time, which is for an indefinite period; and you
                understand and agree that you are bound by such terms and conditions for
                as long as you access this website.
              </p>
            </section>
  
            <section className="pjlg-block" aria-labelledby="pjtEligibilityHeading" data-reveal="">
              <h2 className="pjlg-heading" id="pjtEligibilityHeading">Eligibility Criteria</h2>
              <p>
                Persons who are &ldquo;incompetent to contract&rdquo; within the meaning
                of the Indian Contract Act, 1872 are not eligible to use the Website. If
                your age is below 18 years you are prohibited from using, purchasing
                from or contracting with this website.
              </p>
              <p>
                Those who choose to access this website from outside India are
                responsible for compliance with local laws, if and to the extent local
                laws are applicable. We will deliver the products only within India, and
                will not be liable for any claims relating to any products ordered from
                outside India.
              </p>
              <p>
                In case any Indian state prohibits direct sale of merchandise from other
                states and requires special documentation to effect such a sale without
                dual taxation, then if we receive an order from such a state, or an order
                to be delivered to such a state, we retain the right under those
                circumstances to accept or reject the order.
              </p>
            </section>
  
          </div>
  
          {/* ===================== RIGHT — THE VISUAL ===================== */}
          {/* Same eight-sided facet as the privacy page; the shape lives in
               --pjlg-cut in legal.css, so both pages stay in step. */}
          <aside className="pjlg-visual">
            <div className="pjlg-visual__inner">
  
              <figure className="pjlg-shape pjlg-shape--lead" data-reveal="right">
                <span className="pjlg-shape__echo"></span>
                <img className="pjlg-shape__img"
                     src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80"
                     alt="" loading="lazy" width="900" height="1100" />
              </figure>
  
              <figure className="pjlg-shape pjlg-shape--trail" data-reveal="right" data-reveal-delay="140">
                <span className="pjlg-shape__echo"></span>
                <img className="pjlg-shape__img"
                     src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=800&q=80"
                     alt="" loading="lazy" width="800" height="800" />
              </figure>
  
              <p className="pjlg-visual__note" data-reveal="right" data-reveal-delay="220">
                <i className="bi bi-file-earmark-text" aria-hidden="true"></i>
                These terms may be revised from time to time; the version on this page
                is the one that applies.
              </p>
  
            </div>
          </aside>
  
        </div>
      </div>
    </section>
  
    {/* ===================== CLOSING CTA ===================== */}
    <section className="pjlg-cta" aria-labelledby="pjtCtaHeading">
      <div className="pj-shell">
        <div className="pjlg-cta__inner" data-reveal="">
          <span className="pj-eyebrow">Something unclear?</span>
          <h2 className="pj-title pj-title--sm" id="pjtCtaHeading">Ask before you order</h2>
          <p>
            If any of this affects an order you are planning &mdash; delivery outside
            India, or into a state with its own documentation rules &mdash; write to us
            first and we will tell you where you stand.
          </p>
          <div className="pjlg-cta__actions">
            <Link className="pj-btn pj-btn--gold" to="/contact">
              <i className="bi bi-envelope" aria-hidden="true"></i> Contact us
            </Link>
            <Link className="pj-btn" to="/privacy-policy">Privacy &amp; policy</Link>
          </div>
        </div>
      </div>
    </section>
  
  </main>
  );
}
