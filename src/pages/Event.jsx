/* =====================================================================
   Event.jsx
   Ported from event.html. The gallery and its lightbox live in
   <EventGallery>; everything else is the original markup.
   ===================================================================== */
import { Link } from 'react-router-dom';
import EventGallery from '../components/ui/EventGallery';
import useReveal from '../hooks/useReveal';

export default function Event() {
  useReveal('.pjev-reveal');

  return (
  <main className="pjev">

    <div className="pjev__shell">
      <nav className="pjev__crumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Event</span>
      </nav>
    </div>

    {/* ========================= INTRO ========================= */}
    <section className="pjev-intro">
      <div className="pjev__shell">
        <div className="pjev-intro__grid">

          <div className="pjev-reveal">
            <h1 className="pjev-title">Where the work <em>walks</em></h1>
          </div>

          <div className="pjev-reveal" data-reveal-delay="120">
            <p className="pjev-intro__text">
              A piece finishes in the atelier, but it is finished again under the
              lights. From designer runways to the trade floors of Hong Kong and
              Dubai, these are the rooms where our collections meet the people
              who wear and carry them.
            </p>
          </div>

        </div>

        <div className="pjev-stats pjev-reveal" data-reveal-delay="200">
          <div><span className="pjev-stats__n">26</span><span className="pjev-stats__l">Years on the floor</span></div>
          <div><span className="pjev-stats__n">40+</span><span className="pjev-stats__l">Shows &amp; exhibitions</span></div>
          <div><span className="pjev-stats__n">9</span><span className="pjev-stats__l">Countries visited</span></div>
          <div><span className="pjev-stats__n">300+</span><span className="pjev-stats__l">Pieces on the runway</span></div>
        </div>
      </div>
    </section>

    {/* ======================== GALLERY ======================== */}
    {/* Every tile is a real button element, so the lightbox is reachable by keyboard.
         Add a tile by copying one block; event.js reads the DOM order, so
         the lightbox picks up new frames with no further edits. */}
    <section className="pjev-gallery">
      <div className="pjev__shell">

        <div className="pjev-gallery__head pjev-reveal">
          <div>
            <span className="pjev-eyebrow">Gallery</span>
            <h2>Moments from the floor</h2>
          </div>
          <p className="pjev-gallery__hint">Select an image to enlarge</p>
        </div>

        <EventGallery />
        </div>
      </section>

    {/* ======================== UPCOMING ======================= */}
    <section className="pjev-next">
      <div className="pjev__shell">
        <div className="pjev-next__grid">

          <div className="pjev-reveal">
            <span className="pjev-eyebrow">What is next</span>
            <h2>Come and <em>see them</em> in person.</h2>
            <p className="pjev-intro__text" style={{ color: 'rgba(247,242,234,.62)', marginTop: '1.1rem' }}>
              We show a handful of times a year. Write to us before a date and we
              will set aside an hour and the pieces you want to see.
            </p>
            <Link className="pj-btn pj-btn--gold pj-btn--sm" to="/contact" style={{ marginTop: '1.6rem' }}>
              Request an invitation <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="pjev-next__list pjev-reveal" data-reveal-delay="120">
            <div className="pjev-next__row">
              <span className="pjev-next__date">14–17 Feb</span>
              <span className="pjev-next__name">India International Jewellery Show</span>
              <span className="pjev-next__where">Mumbai, IN</span>
            </div>
            <div className="pjev-next__row">
              <span className="pjev-next__date">05–09 Mar</span>
              <span className="pjev-next__name">Bridal Couture Week</span>
              <span className="pjev-next__where">Surat, IN</span>
            </div>
            <div className="pjev-next__row">
              <span className="pjev-next__date">21–25 Jun</span>
              <span className="pjev-next__name">Jewellery &amp; Gem World</span>
              <span className="pjev-next__where">Hong Kong</span>
            </div>
            <div className="pjev-next__row">
              <span className="pjev-next__date">12–16 Nov</span>
              <span className="pjev-next__name">Dubai Jewellery Exhibition</span>
              <span className="pjev-next__where">Dubai, AE</span>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
  );
}
