/* =====================================================================
   About.jsx
   About Pansy Jewels — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function About() {
  useReveal('[data-reveal]');

  return (
  <main className="pj-abt">
  
    <section className="pj-section" id="about">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">About Us</span>
        </nav>
  
        {/* Masthead: the page title runs full width above the split below */}
        <header className="pj-abt__masthead" data-reveal="">
          <h1 className="pj-abt__title">About <em>Pansy Jewels</em></h1>
        </header>
  
        <div className="pj-abt__grid">
  
          {/* The portrait stays with the reader while the column scrolls */}
          <figure className="pj-abt__media" data-reveal="left">
            <img src="https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=1000&q=80"
                 alt="A woman wearing a traditional Pansy Jewels gold necklace and earrings"
                 loading="lazy" width="1000" height="1250" />
            <figcaption>Surat, India — since 2010</figcaption>
          </figure>
  
          <div className="pj-abt__body" data-reveal="right">
  
            <p className="pj-abt__lede">
              A fully integrated jewellery company with world's most advanced technology.
            </p>
  
            <p>
              Pansy Jewels, a trading company, started in year 2010 in Surat (India).
              Pansy Jewels has been one of the most trusted and widely respected names
              in the industry. Our fully integrated, global trading, design, sourcing and
              distribution network allows us to operate highly efficiently and cost
              effectively.
            </p>
  
            <p className="pj-abt__more">
              <Link className="pj-link" to="/#craft">Inside the atelier <i className="bi bi-arrow-right"></i></Link>
            </p>
  
            <div className="pj-abt__vm">
  
              <article className="pj-abt__block">
                <div className="pj-abt__block-head">
                  <span className="pj-abt__icon" aria-hidden="true"><i className="bi bi-eye"></i></span>
                  <h2>Our <em>Vision</em></h2>
                </div>
                <p>
                  Our personal attention is one of our trademark as we promise to do
                  everything. We maintain a tremendous rapport with our clients, making
                  them feel at ease to work with us.
                </p>
                <p>
                  Our personal attention is one of our trademark as we promise to do
                  everything. We maintain a tremendous rapport with our clients, making
                  them feel at ease to work with us.
                </p>
              </article>
  
              <article className="pj-abt__block">
                <div className="pj-abt__block-head">
                  <span className="pj-abt__icon" aria-hidden="true"><i className="bi bi-compass"></i></span>
                  <h2>Our <em>Mission</em></h2>
                </div>
                <p>
                  Our personal attention is one of our trademark as we promise to do
                  everything. We maintain a tremendous rapport with our clients, making
                  them feel at ease to work with us.
                </p>
                <p>
                  Our personal attention is one of our trademark as we promise to do
                  everything. We maintain a tremendous rapport with our clients, making
                  them feel at ease to work with us.
                </p>
              </article>
  
            </div>
          </div>
  
        </div>
      </div>
    </section>
  
  </main>
  );
}
