/* =====================================================================
   Certification.jsx
   Diamond certification — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { useSite } from '../context/SiteContext';

export default function Certification() {
  const { openModal } = useSite();
  useReveal('[data-reveal]');

  return (
  <main className="pjcr">
  
    {/* ===================== MASTHEAD ===================== */}
    <section className="pj-section pjcr-intro" id="pjcrTop">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">Certification</span>
        </nav>
  
        <header className="pjcr-masthead" data-reveal="">
          <h1 className="pjcr-title">Diamond <em>Certification</em></h1>
        </header>
  
        {/* Placeholder: reused from elsewhere on the site, so the alt text is
             accurate today. Swap the src for your own grading-lab photography
             and rewrite the alt to match. */}
        <figure className="pjcr-hero" data-reveal="zoom">
          <img src="https://images.unsplash.com/photo-1772442125263-c9dd28bbd938?auto=format&fit=crop&w=1800&q=80"
               alt="A Pansy Jewels goldsmith examining a finished piece at the workbench"
               loading="eager" width="1800" height="900" />
        </figure>
  
        <div className="pjcr-prose" data-reveal="">
          <p>
            Pansy Jewels diamonds are graded by the industry&rsquo;s most stringent
            diamond grading labs: AGSL and GIA. Each diamond available from Pansy
            Jewels comes with either a diamond grading report, Diamond Dossier&reg;,
            or a diamond quality document.
          </p>
          <p>
            The certified diamond experts at these diamond grading labs observe the
            diamond with their own expert eyes, as well as with a number of scientific
            tools to document the dimensions, color, clarity and carat weight of the
            diamond.
          </p>
        </div>
  
      </div>
    </section>
  
    {/* ===================== DIAMOND GRADING REPORTS ===================== */}
    <section className="pj-section pj-section--tight pjcr-reports" id="pjcrReports" aria-labelledby="pjcrReportsHeading">
      <div className="pj-shell">
  
        <h2 className="pjcr-rule" id="pjcrReportsHeading" data-reveal="">Diamond Grading Reports</h2>
  
        <div className="pjcr-reports__grid">
  
          <div className="pjcr-reports__body" data-reveal="left">
            <p>
              Pansy Jewels only works with the most respected diamond grading labs.
              Because these labs have the highest standards for diamond grading,
              you&rsquo;ll find diamonds certified by these labs tend to carry a
              premium. Our diamonds have received the highest grades of quality, so
              they are guaranteed to be the highest quality diamonds available.
            </p>
            <p>
              The GIA, founded in 1931, established the standards for grading diamonds
              and provides gemologist training and supplies diamond knowledge to the
              industry today. The founder of the GIA went on to form the AGS in 1934,
              to create a society of jewelers focused on consumer education and
              promoting ethical business practices within the diamond industry.
            </p>
            <p>
              In 1996 the AGS opened a diamond grading lab &mdash; the AGSL &mdash; a
              non-profit agency with the mission of providing stringent, standardized
              grading reports. Their mission is to establish a trusted set of criteria
              to evaluate diamond cut. This in turn promotes the production of more
              diamonds cut for maximum sparkle, rather than cut to maximize carat
              weight.
            </p>
          </div>
  
          {/* The three dates above, pulled out so the chronology is readable
               at a glance. Nothing here is stated that the copy does not. */}
          <aside className="pjcr-marks" data-reveal="right" aria-label="Grading lab milestones">
            <ol className="pjcr-marks__list">
              <li>
                <span className="pjcr-marks__year">1931</span>
                <span className="pjcr-marks__name">GIA founded</span>
                <span className="pjcr-marks__note">Set the standards for grading diamonds, and still trains the industry&rsquo;s gemologists.</span>
              </li>
              <li>
                <span className="pjcr-marks__year">1934</span>
                <span className="pjcr-marks__name">AGS formed</span>
                <span className="pjcr-marks__note">A society of jewelers focused on consumer education and ethical practice.</span>
              </li>
              <li>
                <span className="pjcr-marks__year">1996</span>
                <span className="pjcr-marks__name">AGSL opens</span>
                <span className="pjcr-marks__note">A non-profit lab issuing stringent, standardized reports, built around cut.</span>
              </li>
            </ol>
          </aside>
  
        </div>
      </div>
    </section>
  
    {/* ===================== CLOSING CTA ===================== */}
    <section className="pjcr-cta" aria-labelledby="pjcrCtaHeading">
      <div className="pj-shell">
        <div className="pjcr-cta__inner" data-reveal="">
          <span className="pj-eyebrow">Read the report first</span>
          <h2 className="pj-title pj-title--sm" id="pjcrCtaHeading">Every stone comes with its paperwork</h2>
          <p>
            Ask for the grading report on any diamond before you decide. We will send
            it across, and walk you through what each line on it actually means.
          </p>
          <div className="pjcr-cta__actions">
            <button className="pj-btn pj-btn--gold" type="button" onClick={() => openModal('appointment')}>
              <i className="bi bi-calendar2-week" aria-hidden="true"></i> Book an appointment
            </button>
            <Link className="pj-btn" to="/diamond-education">The 4Cs explained</Link>
          </div>
        </div>
      </div>
    </section>
  
  </main>
  );
}
