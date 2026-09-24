/* =====================================================================
   EthicalSourcing.jsx
   Ethical sourcing — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { useSite } from '../context/SiteContext';

export default function EthicalSourcing() {
  const { openModal } = useSite();
  useReveal('[data-reveal]');

  return (
  <main className="pje">
  
    {/* ===================== MASTHEAD ===================== */}
    <section className="pj-section pje-intro" id="pjeTop">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">Ethical Sourcing</span>
        </nav>
  
        <header className="pje-masthead" data-reveal="">
          <h1 className="pje-title">Ethical <em>Sourcing</em></h1>
          <p className="pje-lede">
            Where a stone comes from matters as much as how it is cut. These are the
            standards we hold our diamonds, our metals and our suppliers to &mdash;
            and the checks that keep us honest about them.
          </p>
        </header>
  
      </div>
    </section>
  
    {/* ===================== BEYOND CONFLICT FREE ===================== */}
    <section className="pje-row" id="pjeConflict" aria-labelledby="pjeConflictHeading">
      <div className="pj-shell">
        <div className="pje-row__grid">
  
          <div className="pje-row__body" data-reveal="left">
            <h2 className="pje-row__title" id="pjeConflictHeading">Beyond Conflict Free</h2>
            <p>
              Pansy Jewels goes above and beyond the current industry standards to
              guarantee that our diamonds originate from pure, ethical sources. We
              believe that high quality diamonds should not come at a great social and
              environmental cost.
            </p>
            <p>
              Our ethically sourced diamonds originate from mines that adhere to strict
              labor, trade, and environmental standards. All of our center diamonds are
              traceable to their origins in Canada, Namibia, Russia, or Botswana.
            </p>
          </div>
  
          {/* Placeholders: these three photos are reused from elsewhere on the
               site, so their alt text is accurate today. Swap each src for your
               own sourcing photography and rewrite the alt to match. */}
          <figure className="pje-row__media" data-reveal="right">
            <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1100&q=80"
                 alt="A diamond bracelet on a dark, reflective surface"
                 loading="lazy" width="1100" height="730" />
          </figure>
  
        </div>
      </div>
    </section>
  
    {/* ===================== RECYCLED GOLD AND PLATINUM ===================== */}
    <section className="pje-row" id="pjeRecycled" aria-labelledby="pjeRecycledHeading">
      <div className="pj-shell">
        <div className="pje-row__grid">
  
          <div className="pje-row__body" data-reveal="left">
            <h2 className="pje-row__title" id="pjeRecycledHeading">Recycled Gold and Platinum</h2>
            <p>
              Dirty gold mining has a history of civil war, labor abuses, and
              environmental devastation. As part of our commitment to environmental
              responsibility, we handcraft all of our fine jewelry from recycled
              precious metals. Our objective is to diminish the negative impacts of
              dirty gold by reducing the demand for newly mined metals.
            </p>
            <p>
              Pansy Jewels promotes the development of a fair trade gold system. This
              system will guarantee fair wages, promote economic growth, and empower
              mining communities. To demonstrate our support, we are now offering a
              stunning Fairmined gold collection.
            </p>
          </div>
  
          <figure className="pje-row__media" data-reveal="right">
            <img src="https://images.unsplash.com/photo-1772442125263-c9dd28bbd938?auto=format&fit=crop&w=1100&q=80"
                 alt="A Pansy Jewels goldsmith examining a finished piece at the workbench"
                 loading="lazy" width="1100" height="730" />
          </figure>
  
        </div>
      </div>
    </section>
  
    {/* ===================== COLORED GEMSTONES ===================== */}
    <section className="pje-row" id="pjeGemstones" aria-labelledby="pjeGemstonesHeading">
      <div className="pj-shell">
        <div className="pje-row__grid">
  
          <div className="pje-row__body" data-reveal="left">
            <h2 className="pje-row__title" id="pjeGemstonesHeading">Colored Gemstones</h2>
            <p>
              We offer our clients the option of having their jewellery made using
              recycled gold and platinum. This reduces demand for newly mined metals,
              diminishing the environmentally damaging effects of mining practices.
            </p>
            <p>
              Once refined, recycled gold and platinum are of identical quality to (and
              therefore completely indistinguishable from) newly mined refined gold or
              platinum. For this reason, our refiner is independently audited and
              certified to guarantee that their metals really are 100% recycled.
            </p>
          </div>
  
          <figure className="pje-row__media" data-reveal="right">
            <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1100&q=80"
                 alt="Layered gold chains with a faceted blue gemstone pendant"
                 loading="lazy" width="1100" height="730" />
          </figure>
  
        </div>
      </div>
    </section>
  
    {/* ===================== CLOSING CTA ===================== */}
    <section className="pje-cta" aria-labelledby="pjeCtaHeading">
      <div className="pj-shell">
        <div className="pje-cta__inner" data-reveal="">
          <span className="pj-eyebrow">Ask us anything</span>
          <h2 className="pj-title pj-title--sm" id="pjeCtaHeading">Every stone has a paper trail</h2>
          <p>
            Ask for the origin, the grading report or the refiner&rsquo;s audit on any
            piece and we will show you. Book a viewing, or write to us and we will send
            the documentation across.
          </p>
          <div className="pje-cta__actions">
            <button className="pj-btn pj-btn--gold" type="button" onClick={() => openModal('appointment')}>
              <i className="bi bi-calendar2-week" aria-hidden="true"></i> Book an appointment
            </button>
            <Link className="pj-btn" to="/contact">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  
  </main>
  );
}
