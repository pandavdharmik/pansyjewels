/* =====================================================================
   Faq.jsx
   Frequently asked questions — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function Faq() {
  useReveal('[data-reveal]');

  return (
  <main className="pjf">
  
    {/* ===================== MASTHEAD ===================== */}
    <section className="pj-section pjf-intro" id="pjfTop">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">FAQ</span>
        </nav>
  
        <header className="pjf-masthead" data-reveal="">
          <h1 className="pjf-title">Before you <em>buy</em></h1>
        </header>
  
        <div className="pjf-lead">
  
          <div className="pjf-lead__text" data-reveal="left">
            <h2 className="pjf-heading">Introduction</h2>
            <p>
              This website is owned and operated by Pansy Jewels. In using the Pansy
              Jewels service, users are deemed to have accepted the Terms and
              Conditions listed below, or as may be revised from time to time, which
              is for an indefinite period; and you understand and agree that you are
              bound by such terms and conditions for as long as you access this
              website.
            </p>
          </div>
  
          {/* A set mark rather than a stock photograph: the reference uses a
               question-mark picture, which sits awkwardly against the rest of
               the site. Drop an <img /> in here if you would rather have one. */}
          <aside className="pjf-mark" data-reveal="right" aria-hidden="true">
            <span className="pjf-mark__glyph">?</span>
          </aside>
  
        </div>
  
      </div>
    </section>
  
    {/* ===================== ELIGIBILITY CRITERIA ===================== */}
    <section className="pj-section pj-section--tight pjf-topic" id="pjfEligibility" aria-labelledby="pjfEligibilityHeading">
      <div className="pj-shell">
  
        <h2 className="pjf-heading pjf-heading--rule" id="pjfEligibilityHeading" data-reveal="">Eligibility Criteria</h2>
  
        <div className="pjf-prose" data-reveal="">
          <p>
            Persons who are &ldquo;incompetent to contract&rdquo; within the meaning of
            the Indian Contract Act, 1872 are not eligible to use the Website. If your
            age is below 18 years you are prohibited from using, purchasing from or
            contracting with this website.
          </p>
          <p>
            Those who choose to access this website from outside India are responsible
            for compliance with local laws, if and to the extent local laws are
            applicable. We will deliver the products only within India, and will not be
            liable for any claims relating to any products ordered from outside India.
          </p>
          <p>
            In case any Indian state prohibits direct sale of merchandise from other
            states and requires special documentation to effect such a sale without dual
            taxation, then if we receive an order from such a state, or an order to be
            delivered to such a state, we retain the right under those circumstances to
            accept or reject the order.
          </p>
        </div>
  
      </div>
    </section>
  
    {/* ===================== CLOSING CTA ===================== */}
    <section className="pjf-cta" aria-labelledby="pjfCtaHeading">
      <div className="pj-shell">
        <div className="pjf-cta__inner" data-reveal="">
          <span className="pj-eyebrow">Still have a question?</span>
          <h2 className="pj-title pj-title--sm" id="pjfCtaHeading">Ask us directly</h2>
          <p>
            Anything not answered here &mdash; sizing, delivery, a piece you have seen
            elsewhere &mdash; write to us or call the showroom. Someone who knows the
            stock will answer.
          </p>
          <div className="pjf-cta__actions">
            <Link className="pj-btn pj-btn--gold" to="/contact">
              <i className="bi bi-envelope" aria-hidden="true"></i> Contact us
            </Link>
            <a className="pj-btn" href="tel:+917046312000">+91 70463 12000</a>
          </div>
        </div>
      </div>
    </section>
  
  </main>
  );
}
