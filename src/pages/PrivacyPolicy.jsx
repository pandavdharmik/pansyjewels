/* =====================================================================
   PrivacyPolicy.jsx
   Privacy policy — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function PrivacyPolicy() {
  useReveal('[data-reveal]');

  return (
  <main className="pjlg">
  
    <section className="pj-section pjlg-page" id="pjpTop">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">Privacy &amp; Policy</span>
        </nav>
  
        <div className="pjlg-grid">
  
          {/* ===================== LEFT — THE POLICY ===================== */}
          <div className="pjlg-col">
  
            <header className="pjlg-masthead" data-reveal="">
              <h1 className="pjlg-title">Your details, <em>kept close</em></h1>
            </header>
  
            <section className="pjlg-block" aria-labelledby="pjpOverviewHeading" data-reveal="">
              <h2 className="pjlg-heading" id="pjpOverviewHeading">Overview</h2>
              <p>
                At Pansy Jewels Diamond Jewellery Online, we are extremely proud of our
                commitment to protect your privacy. We value your trust in us. We will
                work hard to earn your confidence so that you can enthusiastically use
                our services and recommend us to friends and family.
              </p>
              <p>
                Please read the following policy to understand how your personal
                information will be treated as you make full use of our Site. Privacy
                guaranteed.
              </p>
            </section>
  
            <section className="pjlg-block" aria-labelledby="pjpCommitmentHeading" data-reveal="">
              <h2 className="pjlg-heading" id="pjpCommitmentHeading">Your Privacy &mdash; Our Commitment</h2>
              <p>
                This website is owned and operated by Pansy Jewels Diamond Jewellery.
                In using the Pansy Jewels Diamond Jewellery service, users are deemed to
                have accepted the Terms and Conditions listed below, or as may be
                revised from time to time, which is for an indefinite period; and you
                understand and agree that you are bound by such terms and conditions for
                as long as you access this website.
              </p>
            </section>
  
          </div>
  
          {/* ===================== RIGHT — THE VISUAL ===================== */}
          {/* Two photographs cut to the same eight-sided facet, echoing the
               step cut of an emerald-cut stone and the diamond in our mark.
               The shape itself lives in --pjlg-cut, so changing it once in the
               stylesheet restates every figure on the page. */}
          <aside className="pjlg-visual">
            <div className="pjlg-visual__inner">
  
              <figure className="pjlg-shape pjlg-shape--lead" data-reveal="right">
                <span className="pjlg-shape__echo"></span>
                <img className="pjlg-shape__img"
                     src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80"
                     alt="" loading="lazy" width="900" height="1100" />
              </figure>
  
              <figure className="pjlg-shape pjlg-shape--trail" data-reveal="right" data-reveal-delay="140">
                <span className="pjlg-shape__echo"></span>
                <img className="pjlg-shape__img"
                     src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
                     alt="" loading="lazy" width="800" height="800" />
              </figure>
  
              <p className="pjlg-visual__note" data-reveal="right" data-reveal-delay="220">
                <i className="bi bi-shield-lock" aria-hidden="true"></i>
                Your information is held only as long as it is useful to you.
              </p>
  
            </div>
          </aside>
  
        </div>
      </div>
    </section>
  
    {/* ===================== CLOSING CTA ===================== */}
    <section className="pjlg-cta" aria-labelledby="pjpCtaHeading">
      <div className="pj-shell">
        <div className="pjlg-cta__inner" data-reveal="">
          <span className="pj-eyebrow">Questions about your data?</span>
          <h2 className="pj-title pj-title--sm" id="pjpCtaHeading">Ask us what we hold</h2>
          <p>
            Write to us and we will tell you what information we have about you, and
            remove it on request.
          </p>
          <div className="pjlg-cta__actions">
            <Link className="pj-btn pj-btn--gold" to="/contact">
              <i className="bi bi-envelope" aria-hidden="true"></i> Contact us
            </Link>
            <Link className="pj-btn" to="/faq">Read the FAQ</Link>
          </div>
        </div>
      </div>
    </section>
  
  </main>
  );
}
