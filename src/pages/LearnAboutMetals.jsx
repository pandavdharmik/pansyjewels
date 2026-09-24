/* =====================================================================
   LearnAboutMetals.jsx
   Learn about metals — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { useSite } from '../context/SiteContext';

export default function LearnAboutMetals() {
  const { openModal } = useSite();
  useReveal('[data-reveal]');

  return (
  <main className="pjm">
  
    {/* ===================== MASTHEAD ===================== */}
    <section className="pj-section pjm-intro" id="pjmTop">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">Learn about Metals</span>
        </nav>
  
        <div className="pjm-intro__grid">
  
          <header className="pjm-intro__text" data-reveal="left">
            <h1 className="pjm-title">Learn about <em>Metals</em></h1>
            <p className="pjm-lede">
              Choosing the metal of your engagement ring is an important decision.
              Your engagement is the foundation of your future together, and the metal
              is the foundation of your engagement ring. Color, durability, care
              &ndash; these are the most important metal characteristics. While there
              are fads in jewelry metal color, this is a decision that will endure all
              trends. Consider the following details and you&rsquo;ll make the right
              decision on the perfect ring.
            </p>
  
            <ul className="pjm-jump">
              <li><a href="#pjmGold"><span className="pjm-jump__sym">Au</span> Gold</a></li>
              <li><a href="#pjmPlatinum"><span className="pjm-jump__sym">Pt</span> Platinum</a></li>
              <li><a href="#pjmSilver"><span className="pjm-jump__sym">Ag</span> Silver</a></li>
            </ul>
          </header>
  
          {/* Placeholders: these four photos are reused from elsewhere on the
               site so the layout has something real to hold. Swap each src for
               your own metal photography and update the alt text to match what
               the new picture actually shows. */}
          <figure className="pjm-intro__media" data-reveal="right">
            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80"
                 alt="A diamond halo ring combining white and rose gold, in its presentation box"
                 loading="eager" width="1200" height="800" />
          </figure>
  
        </div>
      </div>
    </section>
  
    {/* ===================== GOLD ===================== */}
    <section className="pjm-band pjm-band--dark" id="pjmGold" aria-labelledby="pjmGoldHeading">
      <div className="pj-shell">
        <div className="pjm-band__grid">
  
          <figure className="pjm-band__media" data-reveal="left">
            <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=80"
                 alt="A chunky gold chain necklace resting on an open magazine"
                 loading="lazy" width="1000" height="750" />
          </figure>
  
          <div className="pjm-band__body" data-reveal="right">
            <h2 className="pjm-band__title" id="pjmGoldHeading">Gold</h2>
            <p>
              Yellow gold offers a warm glow, and even white gold is a warmer white
              than metals like platinum or palladium. Pure gold is too soft to hold its
              shape in fine jewelry, so it&rsquo;s alloyed with other precious metals
              for strength. Look for &ldquo;14k&rdquo; or &ldquo;18k&rdquo; as a
              fineness mark that proves the quality of your gold jewelry.
            </p>
            <p>
              Among fine metals, gold tends to be more malleable, so prongs in a gold
              engagement ring should be checked={true} each year with one of our Free In-Store
              Preview jewelers, and they can also re-plate white gold with Rhodium to
              bring it back to its original whiteness.
            </p>
            <p>
              To know what she&rsquo;d prefer in an engagement ring, check the color of
              the metal jewelry she wears. If you choose a yellow gold ring, the color
              of the metal can make a near-colorless diamond and a colorless diamond
              look the same.
            </p>
          </div>
  
        </div>
      </div>
    </section>
  
    {/* ===================== PLATINUM ===================== */}
    <section className="pjm-band" id="pjmPlatinum" aria-labelledby="pjmPlatinumHeading">
      <div className="pj-shell">
        <div className="pjm-band__grid pjm-band__grid--flip">
  
          <figure className="pjm-band__media" data-reveal="right">
            <img src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=1000&q=80"
                 alt="A pave-set diamond ring in a white metal band"
                 loading="lazy" width="1000" height="750" />
          </figure>
  
          <div className="pjm-band__body" data-reveal="left">
            <h2 className="pjm-band__title" id="pjmPlatinumHeading">Platinum</h2>
            <p>
              Platinum is a strong, durable metal choice that does not fade over time.
              This makes it a symbolic option for engagement rings, as it will endure
              with your love. A hypoallergenic material, platinum is ideal for those
              with sensitive skin as it does not react with other elements. Its
              naturally white appearance makes it a popular alternative to white gold.
              Unlike white gold, however, it will not need replating over the years.
              Over time, it develops a stunning finish called a patina. This further
              protects your setting.
            </p>
            <p>
              30 times more rare than gold, platinum is a wise choice for those looking
              for a truly unique and timeless engagement ring. Diamonds with color
              grades from D to F look particularly stunning set in platinum,
              complimenting their colorless quality.
            </p>
          </div>
  
        </div>
      </div>
    </section>
  
    {/* ===================== SILVER ===================== */}
    <section className="pjm-band pjm-band--dark" id="pjmSilver" aria-labelledby="pjmSilverHeading">
      <div className="pj-shell">
        <div className="pjm-band__grid">
  
          <figure className="pjm-band__media" data-reveal="left">
            <img src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=1000&q=80"
                 alt="A diamond pendant on a fine white metal chain"
                 loading="lazy" width="1000" height="750" />
          </figure>
  
          <div className="pjm-band__body" data-reveal="right">
            <h2 className="pjm-band__title" id="pjmSilverHeading">Silver</h2>
            <p>
              Sterling silver makes a fine choice for jewelry. While sometimes
              considered traditional, silver has a more modern, stylistic feel than
              yellow gold. Depending on the design, silver jewelry can be classic or
              contemporary. Since pure silver is very soft and malleable, sterling
              silver is 92.5% pure silver; mixed with other metals such as copper, it
              forms an alloy.
            </p>
            <p>
              Pansy Jewels sterling silver is also rhodium plated. This means your
              silver jewelry will be stronger, less prone to damage, and more resistant
              to tarnish. If you do notice some tarnish, gently cleaning your silver
              with a polish and cloth will keep it looking immaculate.
            </p>
            <p>
              A stunning combination of strength and beauty, sterling silver is used to
              create incredible pieces that you&rsquo;ll love wearing. It also
              complements most skin tones, making it a safe purchase for those needing
              to mark a special occasion.
            </p>
          </div>
  
        </div>
      </div>
    </section>
  
    {/* ===================== CLOSING CTA ===================== */}
    <section className="pjm-cta" aria-labelledby="pjmCtaHeading">
      <div className="pj-shell">
        <div className="pjm-cta__inner" data-reveal="">
          <span className="pj-eyebrow">Not sure which suits her?</span>
          <h2 className="pj-title pj-title--sm" id="pjmCtaHeading">See the metals side by side</h2>
          <p>
            Gold, platinum and sterling silver read very differently in daylight. Book a
            private viewing at our Surat office and compare them on the hand before you
            decide.
          </p>
          <div className="pjm-cta__actions">
            <button className="pj-btn pj-btn--gold" type="button" onClick={() => openModal('appointment')}>
              <i className="bi bi-calendar2-week" aria-hidden="true"></i> Book an appointment
            </button>
            <Link className="pj-btn" to="/diamond-education">Diamond education</Link>
          </div>
        </div>
      </div>
    </section>
  
  </main>
  );
}
