/* =====================================================================
   Home.jsx
   The landing page. Markup ported from index.html; the two interactive
   regions — the occasion finder and the boutique grid — are their own
   components, and the shared chrome comes from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import OccasionFinder from '../components/ui/OccasionFinder';
import FeaturedGrid from '../components/ui/FeaturedGrid';
import useReveal from '../hooks/useReveal';
import useCounters from '../hooks/useCounters';
import { useSite } from '../context/SiteContext';

export default function Home() {
  const { openModal } = useSite();

  // [data-lines] is the hero's staggered line reveal; same observer.
  useReveal('[data-reveal], [data-lines]');
  useCounters();

  return (
  <main>

  {/* ======================= 1. HERO ======================= */}
  <section className="pj-hero" id="top">
    <div className="pj-hero__bg" data-parallax-scroll="0.14">
      <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1900&q=80" alt="Fine gold jewellery on a dark surface" />
    </div>
    <div className="pj-hero__veil"></div>
    <div className="pj-hero__sweep"></div>

    <div className="pj-shell pj-hero__grid">

      <div className="pj-hero__content">
        <span className="pj-eyebrow" data-reveal="">Fine Jewellery Atelier · Est. 2010</span>

        <h1 className="pj-hero__title pj-lines" data-lines="">
          <span className="line"><span>Where Every</span></span>
          <span className="line"><span className="accent">Sparkle</span></span>
          <span className="line"><span>Tells a Story</span></span>
        </h1>

        <p className="pj-hero__copy" data-reveal="" data-reveal-delay="260">
          Sculpted by hand in 18k gold, set with certified stones, and made for the
          moments you will keep retelling. This is jewellery with a memory of its own.
        </p>

        <div className="pj-hero__cta" data-reveal="" data-reveal-delay="380">
          <a className="pj-btn pj-btn--gold" href="#collections">
            Explore Collection <i className="bi bi-arrow-right"></i>
          </a>
          <button className="pj-btn pj-btn--light" type="button" onClick={() => openModal("appointment")}>
            <i className="bi bi-calendar2-week"></i> Book an Appointment
          </button>
        </div>

        <div className="pj-hero__stats" data-reveal="" data-reveal-delay="480">
          <div className="pj-stat">
            <div className="pj-stat__num"><span data-count="27">0</span></div>
            <div className="pj-stat__label">Years of Craft</div>
          </div>
          <div className="pj-stat">
            <div className="pj-stat__num"><span data-count="640">0</span>+</div>
            <div className="pj-stat__label">Unique Designs</div>
          </div>
          <div className="pj-stat">
            <div className="pj-stat__num"><span data-count="100">0</span>%</div>
            <div className="pj-stat__label">Certified Stones</div>
          </div>
        </div>
      </div>

      {/* 3D tilt stage */}
      <div className="pj-hero__stage" data-tilt="" data-reveal="zoom" data-reveal-delay="200">
        <div className="pj-hero__card" data-tilt-card="">
          <div className="pj-hero__frame">
            <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1100&q=80"
                 alt="Model wearing a Pansy Jewels diamond ring" />
          </div>
          <div className="pj-hero__ring" aria-hidden="true"></div>
          <div className="pj-hero__chip">
            <div className="t">Aurelia Solitaire</div>
            <div className="s">18k Gold · 1.20 ct</div>
          </div>
        </div>
      </div>

    </div>

    <a className="pj-scrollcue" href="#showcase" aria-label="Scroll to explore">
      <span>Scroll</span>
      <span className="pj-scrollcue__line"></span>
    </a>
  </section>

  {/* ======================= MARQUEE ======================= */}
  <div className="pj-marquee" aria-hidden="true">
    <div className="pj-marquee__track">
      <span>Hand-finished</span><i className="bi bi-gem"></i>
      <span>IGI Certified</span><i className="bi bi-gem"></i>
      <span>Lifetime Care</span><i className="bi bi-gem"></i>
      <span>Bespoke Design</span><i className="bi bi-gem"></i>
      <span>Ethically Sourced</span><i className="bi bi-gem"></i>
      <span>Made in India</span><i className="bi bi-gem"></i>
    </div>
    <div className="pj-marquee__track">
      <span>Hand-finished</span><i className="bi bi-gem"></i>
      <span>IGI Certified</span><i className="bi bi-gem"></i>
      <span>Lifetime Care</span><i className="bi bi-gem"></i>
      <span>Bespoke Design</span><i className="bi bi-gem"></i>
      <span>Ethically Sourced</span><i className="bi bi-gem"></i>
      <span>Made in India</span><i className="bi bi-gem"></i>
    </div>
  </div>

  {/* ======================= 2. FLOATING SHOWCASE ======================= */}
  <section className="pj-showcase" id="showcase" data-mouse-stage="">
    <div className="pj-showcase__glow" aria-hidden="true"></div>

    <div className="pj-shell pj-showcase__inner">
      <span className="pj-eyebrow pj-eyebrow--center" data-reveal="">The Centrepiece</span>
      <h2 className="pj-title" data-reveal="" data-reveal-delay="120" style={{ maxWidth: '16ch' }}>
        A single piece, <em className="pj-italic pj-gold-text">endlessly</em> considered
      </h2>

      <div className="pj-showcase__orbit" data-mouse-layer="18">
        <div className="pj-showcase__piece">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
               alt="The Aurelia solitaire ring, floating against a dark backdrop" />
        </div>

        <div className="pj-showcase__tag pj-showcase__tag--1" data-mouse-layer="40">
          <div className="k">Metal</div>
          <div className="v">18k Champagne Gold</div>
        </div>
        <div className="pj-showcase__tag pj-showcase__tag--2" data-mouse-layer="-34">
          <div className="k">Centre Stone</div>
          <div className="v">1.20 ct · VVS1</div>
        </div>
        <div className="pj-showcase__tag pj-showcase__tag--3" data-mouse-layer="26">
          <div className="k">Finish</div>
          <div className="v">Hand-polished</div>
        </div>
      </div>

      <p className="pj-lede mx-auto text-center" data-reveal="">
        Four hundred hours from sketch to setting. Every facet angled by hand so the
        light has somewhere to go.
      </p>
      <div className="mt-4" data-reveal="" data-reveal-delay="140">
        <Link className="pj-btn pj-btn--light" to="/product">View the Piece <i className="bi bi-arrow-right"></i></Link>
      </div>
    </div>
  </section>

  {/* ======================= 3. DISCOVER YOUR SIGNATURE ======================= */}
  <section className="pj-section" id="collections">
    <div className="pj-shell">

      <div className="pj-sec-head" data-reveal="">
        <span className="pj-eyebrow">Discover Your Signature</span>
        <h2 className="pj-title">Five ways to <em className="pj-italic">be remembered</em></h2>
        <p className="pj-lede mt-3">
          Each family is designed as a complete language — so a ring, a cuff and a
          pendant can be worn together and still feel like one thought.
        </p>
      </div>

      <div className="pj-cats">

        <Link className="pj-cat" to="/product" data-reveal="">
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80" alt="Gold rings collection" />
          <span className="pj-cat__frame" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
          <div className="pj-cat__body">
            <span className="pj-cat__index">01 — Rings</span>
            <h3 className="pj-cat__name">Rings</h3>
            <div className="pj-cat__meta">
              <small>Solitaires · Bands · Cocktail</small>
              <span className="pj-cat__go"><i className="bi bi-arrow-up-right"></i></span>
            </div>
          </div>
        </Link>

        <Link className="pj-cat" to="/product" data-reveal="" data-reveal-delay="90">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80" alt="Gold necklace on a model" />
          <span className="pj-cat__frame" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
          <div className="pj-cat__body">
            <span className="pj-cat__index">02 — Necklaces</span>
            <h3 className="pj-cat__name">Necklaces</h3>
            <div className="pj-cat__meta">
              <small>Chains · Chokers · Layering</small>
              <span className="pj-cat__go"><i className="bi bi-arrow-up-right"></i></span>
            </div>
          </div>
        </Link>

        <Link className="pj-cat" to="/product" data-reveal="" data-reveal-delay="180">
          <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=80" alt="Gold drop earrings" />
          <span className="pj-cat__frame" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
          <div className="pj-cat__body">
            <span className="pj-cat__index">03 — Earrings</span>
            <h3 className="pj-cat__name">Earrings</h3>
            <div className="pj-cat__meta">
              <small>Studs · Hoops · Drops</small>
              <span className="pj-cat__go"><i className="bi bi-arrow-up-right"></i></span>
            </div>
          </div>
        </Link>

        <Link className="pj-cat" to="/product" data-reveal="" data-reveal-delay="90">
          <img src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=1300&q=80" alt="Gold bracelet detail" />
          <span className="pj-cat__frame" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
          <div className="pj-cat__body">
            <span className="pj-cat__index">04 — Bracelets</span>
            <h3 className="pj-cat__name">Bracelets</h3>
            <div className="pj-cat__meta">
              <small>Tennis · Cuffs · Charms</small>
              <span className="pj-cat__go"><i className="bi bi-arrow-up-right"></i></span>
            </div>
          </div>
        </Link>

        <Link className="pj-cat" to="/product" data-reveal="" data-reveal-delay="180">
          <img src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=1300&q=80" alt="Pendant necklace detail" />
          <span className="pj-cat__frame" aria-hidden="true"><span></span><span></span><span></span><span></span></span>
          <div className="pj-cat__body">
            <span className="pj-cat__index">05 — Pendants</span>
            <h3 className="pj-cat__name">Pendants</h3>
            <div className="pj-cat__meta">
              <small>Lockets · Talismans · Solitaire</small>
              <span className="pj-cat__go"><i className="bi bi-arrow-up-right"></i></span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  </section>

  {/* ======================= 4. JEWELLERY FASHION STORY ======================= */}
  <section className="pj-story" id="worn">
    <div className="pj-story__bg" data-parallax-scroll="0.18">
      <img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1900&q=80"
           alt="Model wearing Pansy Jewels gold jewellery" />
    </div>
    <div className="pj-shell pj-story__inner">
      <h2 className="pj-story__quote" data-reveal="">
        Made to be worn.<br /><em>Made to be remembered.</em>
      </h2>
      <p className="pj-story__sig" data-reveal="" data-reveal-delay="200">The Pansy Jewels Campaign — Autumn Edit</p>
      <div className="mt-4" data-reveal="" data-reveal-delay="280">
        <a className="pj-btn pj-btn--light" href="#featured">See the Edit <i className="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </section>

  {/* ======================= 5. FIND YOUR JEWELLERY ======================= */}
  <section className="pj-section pj-finder" id="finder">
    <div className="pj-shell">

      <div className="pj-sec-head" data-reveal="">
        <span className="pj-eyebrow">Find Your Jewellery</span>
        <h2 className="pj-title">What is the <em className="pj-italic pj-gold-text">occasion</em>?</h2>
      </div>

      <OccasionFinder />
        </div>
      </section>

  {/* ======================= 6. FEATURED PRODUCTS ======================= */}
  <section className="pj-section" id="featured">
    <div className="pj-shell">

      <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-4" data-reveal="">
        <div className="pj-sec-head mb-0">
          <span className="pj-eyebrow">The Boutique</span>
          <h2 className="pj-title">Featured pieces</h2>
        </div>
        <Link className="pj-link" to="/product">View all 640 designs <i className="bi bi-arrow-right"></i></Link>
      </div>

      <FeaturedGrid />

    </div>
  </section>

  {/* ======================= 7. CRAFTSMANSHIP / TRUST ======================= */}
  <section className="pj-section pj-dark pj-section--tight" id="craft">
    <div className="pj-shell">
      <div className="pj-sec-head pj-sec-head--center" data-reveal="">
        <span className="pj-eyebrow pj-eyebrow--center">The Pansy Standard</span>
        <h2 className="pj-title">Nothing leaves the bench <em className="pj-italic">unfinished</em></h2>
      </div>
    </div>

    <div className="pj-trust" data-reveal="">
      <div className="pj-trust__item">
        <div className="pj-trust__icon"><i className="bi bi-gem"></i></div>
        <h4>Quality</h4>
        <p>Only 18k and above. Hallmarked, weighed and recorded before it ever reaches a tray.</p>
      </div>
      <div className="pj-trust__item">
        <div className="pj-trust__icon"><i className="bi bi-hammer"></i></div>
        <h4>Craftsmanship</h4>
        <p>Cast, set and polished in our own atelier by goldsmiths who sign off on every piece.</p>
      </div>
      <div className="pj-trust__item">
        <div className="pj-trust__icon"><i className="bi bi-patch-check"></i></div>
        <h4>Certification</h4>
        <p>Independent IGI grading on every stone above 0.30 ct, with a lifetime digital record.</p>
      </div>
      <div className="pj-trust__item">
        <div className="pj-trust__icon"><i className="bi bi-pencil"></i></div>
        <h4>Custom Jewellery</h4>
        <p>Bring a sketch, a stone or a story. We design with you across four studio sessions.</p>
      </div>
      <div className="pj-trust__item">
        <div className="pj-trust__icon"><i className="bi bi-heart"></i></div>
        <h4>Customer Experience</h4>
        <p>Free resizing, lifetime polishing and a private appointment suite whenever you visit.</p>
      </div>
    </div>
  </section>

  {/* ======================= 8. APPOINTMENT CTA ======================= */}
  <section className="pj-section pj-appt" id="appointment">
    <div className="pj-appt__glow" aria-hidden="true"></div>
    <div className="pj-shell pj-appt__inner">
      <span className="pj-eyebrow pj-eyebrow--center" data-reveal="">Private Appointments</span>
      <h2 className="pj-appt__title" data-reveal="" data-reveal-delay="90">
        Experience Pansy <em className="pj-italic pj-gold-text">in person.</em>
      </h2>
      <p className="pj-lede mx-auto" data-reveal="" data-reveal-delay="160">
        An hour with a designer, a tray chosen for you, and no obligation to buy
        anything at all. Tea included.
      </p>

      <div className="pj-appt__cta" data-reveal="" data-reveal-delay="220">
        <button className="pj-btn pj-btn--gold" type="button" onClick={() => openModal("appointment")}>
          <i className="bi bi-calendar2-week"></i> Book Appointment
        </button>
        <a className="pj-btn" href="#" data-whatsapp="Hello Pansy Jewels, I would like to enquire about a piece.">
          <i className="bi bi-whatsapp"></i> WhatsApp Enquiry
        </a>
      </div>

      <p className="pj-appt__note" data-reveal="">Mumbai · Delhi · Bengaluru — or by video, anywhere</p>
    </div>
  </section>

  </main>
  );
}
