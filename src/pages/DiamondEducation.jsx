/* =====================================================================
   DiamondEducation.jsx
   The 4Cs of diamonds — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { useSite } from '../context/SiteContext';

export default function DiamondEducation() {
  const { openModal } = useSite();
  useReveal('[data-reveal]');

  return (
  <main className="pjd">
  
    {/* Diamond line-art used throughout the page. Drawn once, referenced by
         <use> so the illustrations stay crisp at any size and can be tinted
         per section with --pjd-tint.
  
         Stroke and facet styling live on the shapes as presentation
         attributes, not in the stylesheet: <use> copies these into a shadow
         tree that page CSS cannot select. Fill is deliberately left off the
         outlines so it inherits the tint set on each <svg>. */}
    <svg className="pjd-defs" aria-hidden="true" focusable="false" width="0" height="0">
      <defs>
        {/* Round brilliant, viewed from above */}
        <symbol id="pjdRound" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="47" strokeWidth="1.4" vector-effect="non-scaling-stroke"/>
          <polygon points="50,9 79,21 91,50 79,79 50,91 21,79 9,50 21,21" strokeWidth="1.2" vector-effect="non-scaling-stroke"/>
          <polygon points="50,29 65,35 71,50 65,65 50,71 35,65 29,50 35,35" strokeWidth="1.2" vector-effect="non-scaling-stroke"/>
          <path d="M50 9 50 29M79 21 65 35M91 50 71 50M79 79 65 65M50 91 50 71M21 79 35 65M9 50 29 50M21 21 35 35"
                fill="none" strokeWidth=".8" opacity=".6" vector-effect="non-scaling-stroke"/>
          <path d="M35 14 35 35M65 14 65 35M86 35 65 35M86 65 65 65M65 86 65 65M35 86 35 65M14 65 35 65M14 35 35 35"
                fill="none" strokeWidth=".8" opacity=".45" vector-effect="non-scaling-stroke"/>
        </symbol>
        {/* Round brilliant, viewed from the side */}
        <symbol id="pjdProfile" viewBox="0 0 120 92">
          <polygon points="36,16 84,16 106,40 14,40" strokeWidth="1.4" vector-effect="non-scaling-stroke"/>
          <polygon points="14,40 106,40 60,86" strokeWidth="1.4" vector-effect="non-scaling-stroke"/>
          <path d="M50 16 34 40M70 16 86 40" fill="none" strokeWidth=".8" opacity=".6" vector-effect="non-scaling-stroke"/>
          <path d="M34 40 60 86M60 40 60 86M86 40 60 86" fill="none" strokeWidth=".8" opacity=".5" vector-effect="non-scaling-stroke"/>
        </symbol>
      </defs>
    </svg>
  
    {/* ===================== MASTHEAD ===================== */}
    <section className="pj-section pjd-intro" id="pjdTop">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">Diamond Education</span>
        </nav>
  
        <header className="pjd-masthead" data-reveal="">
          <h1 className="pjd-title">The 4Cs of <em>Diamonds</em></h1>
          <p className="pjd-lede">
            What difference can the cut of a diamond make? It&rsquo;s a question that
            deserves a detailed answer. Each cut we make in the creation of a diamond
            unlocks the beauty in the form of sparkle. The final effect is magic. Over
            generations, we at Pansy Jewels have focused on our craft, using artistry
            and science to improve the brilliance, and create more of the allure that
            attracts us.
          </p>
        </header>
  
      </div>
    </section>
  
    {/* ===================== THE 4CS — OVERVIEW CARDS ===================== */}
    <section className="pj-section pj-section--tight pjd-cards" aria-labelledby="pjd4csHeading">
      <div className="pj-shell">
  
        <h2 className="pjd-rule" id="pjd4csHeading" data-reveal="">The 4Cs</h2>
  
        <div className="pjd-cards__grid">
  
          <a className="pjd-card" href="#pjdCut" data-reveal="" data-reveal-delay="0">
            <span className="pjd-card__art" aria-hidden="true">
              <svg className="pjd-gem"><use href="#pjdProfile"></use></svg>
            </span>
            <span className="pjd-card__name">Cut</span>
            <span className="pjd-card__copy">
              The cut grade indicates whether the diamond was cut to maximize sparkle.
            </span>
            <span className="pjd-card__go">Read more <i className="bi bi-arrow-right" aria-hidden="true"></i></span>
          </a>
  
          <a className="pjd-card" href="#pjdColor" data-reveal="" data-reveal-delay="90">
            <span className="pjd-card__art" aria-hidden="true">
              <svg className="pjd-gem" style={{ '--pjd-tint': 'rgba(201, 166, 107, .38)' }}><use href="#pjdRound"></use></svg>
            </span>
            <span className="pjd-card__name">Color</span>
            <span className="pjd-card__copy">
              This grade refers to the &ldquo;whiteness&rdquo; of a diamond, or its lack of color.
            </span>
            <span className="pjd-card__go">Read more <i className="bi bi-arrow-right" aria-hidden="true"></i></span>
          </a>
  
          <a className="pjd-card" href="#pjdClarity" data-reveal="" data-reveal-delay="180">
            <span className="pjd-card__art" aria-hidden="true">
              <svg className="pjd-gem"><use href="#pjdRound"></use></svg>
              <span className="pjd-card__spot pjd-card__spot--a"></span>
              <span className="pjd-card__spot pjd-card__spot--b"></span>
            </span>
            <span className="pjd-card__name">Clarity</span>
            <span className="pjd-card__copy">
              The clarity grade is based on only tiny natural identifiers found within a diamond.
            </span>
            <span className="pjd-card__go">Read more <i className="bi bi-arrow-right" aria-hidden="true"></i></span>
          </a>
  
          <a className="pjd-card" href="#pjdCarat" data-reveal="" data-reveal-delay="270">
            <span className="pjd-card__art" aria-hidden="true">
              <svg className="pjd-gem"><use href="#pjdRound"></use></svg>
            </span>
            <span className="pjd-card__name">Carat Weight</span>
            <span className="pjd-card__copy">
              This is a measure of a diamond&rsquo;s weight and a reflection of its size.
            </span>
            <span className="pjd-card__go">Read more <i className="bi bi-arrow-right" aria-hidden="true"></i></span>
          </a>
  
        </div>
      </div>
    </section>
  
    {/* ===================== WHAT IS CUT? ===================== */}
    <section className="pj-section pj-section--tight pjd-topic" id="pjdCut" aria-labelledby="pjdCutHeading">
      <div className="pj-shell">
  
        <h2 className="pjd-rule" id="pjdCutHeading" data-reveal="">What is Cut?</h2>
  
        <div className="pjd-split">
  
          <div className="pjd-split__text" data-reveal="left">
            <p className="pjd-note">The cut grade indicates how much a diamond will sparkle.</p>
            <p>
              Cut refers to how perfectly the symmetry and proportions of the diamond
              capture light and then deliver it to the eye in the form of sparkle. If
              the diamond does not have exceptional proportions, or if the symmetry is
              off, the light will not travel through the diamond and return to the eye
              with maximum sparkle.
            </p>
            <p>
              If you choose a diamond with a cut grade of Reserve Ideal or Ideal,
              you&rsquo;ll notice that it has more sparkle than diamonds with lower cut
              grades. If you&rsquo;re looking for a larger diamond within your budget,
              consider selecting a diamond with a Very Good cut grade, which will
              deliver amazing sparkle at a more affordable price. And if you want to
              maximize the size of your diamond, any Pansy Jewels diamond with a cut
              grade of Good will still sparkle beautifully.
            </p>
          </div>
  
          <figure className="pjd-panel" data-reveal="right">
            <figcaption className="pjd-panel__head">How cut grade can affect diamonds of the same price</figcaption>
  
            <div className="pjd-compare">
  
              <div className="pjd-compare__item">
                <span className="pjd-compare__art" aria-hidden="true">
                  <svg className="pjd-gem pjd-gem--lg"><use href="#pjdProfile"></use></svg>
                </span>
                <p className="pjd-compare__grade">Cut grades: <em>Reserve Ideal, Ideal, Very Good, Good</em></p>
                <ul className="pjd-compare__list">
                  <li>Smaller diamond</li>
                  <li>More sparkle</li>
                  <li>Perfect polish</li>
                </ul>
              </div>
  
              <div className="pjd-compare__item">
                <span className="pjd-compare__art" aria-hidden="true">
                  <svg className="pjd-gem pjd-gem--lg pjd-gem--shallow"><use href="#pjdProfile"></use></svg>
                </span>
                <p className="pjd-compare__grade">Cut grade: <em>Poor</em></p>
                <ul className="pjd-compare__list">
                  <li>Visibly larger diamond</li>
                  <li>Slightly less sparkle</li>
                  <li>Very good polish</li>
                </ul>
              </div>
  
            </div>
          </figure>
  
        </div>
      </div>
    </section>
  
    {/* ===================== WHAT IS COLOR? ===================== */}
    <section className="pj-section pj-section--tight pjd-topic" id="pjdColor" aria-labelledby="pjdColorHeading">
      <div className="pj-shell">
  
        <h2 className="pjd-rule" id="pjdColorHeading" data-reveal="">What is Color?</h2>
  
        <div className="pjd-split">
  
          <div className="pjd-split__text" data-reveal="left">
            <p className="pjd-note">This grade refers to the &ldquo;whiteness&rdquo; of a diamond, or its lack of color.</p>
            <p>
              Color is the characteristic of a diamond that is most easily detectable
              by the eye. Look at any Pansy Jewels diamond, from D to J (colorless to
              near-colorless) and you won&rsquo;t notice any distracting color, just
              beautiful sparkle.
            </p>
            <p>
              K and L graded diamonds are considered faint yellow. This means that,
              while still white diamonds, they reflect some secondary tones. These
              diamonds therefore look their most brilliant when set in yellow gold,
              which has a muting effect on the diamond&rsquo;s faint yellow.
            </p>
            <p>
              For an exceptionally white and colorless diamond, to be set in a white
              metal, consider those in grades D to F. Alternatively, grades G to J are
              almost invisible to the untrained eye.
            </p>
          </div>
  
          <figure className="pjd-panel" data-reveal="right">
  
            <div className="pjd-scale">
              <div className="pjd-scale__item">
                <span className="pjd-scale__art" aria-hidden="true">
                  <svg className="pjd-gem pjd-gem--md" style={{ '--pjd-tint': 'rgba(228, 238, 246, .55)' }}><use href="#pjdRound"></use></svg>
                </span>
                <span className="pjd-scale__name">Colorless</span>
                <span className="pjd-scale__grade">D E F</span>
              </div>
              <div className="pjd-scale__item">
                <span className="pjd-scale__art" aria-hidden="true">
                  <svg className="pjd-gem pjd-gem--md" style={{ '--pjd-tint': 'rgba(243, 230, 204, .6)' }}><use href="#pjdRound"></use></svg>
                </span>
                <span className="pjd-scale__name">Near-Colorless</span>
                <span className="pjd-scale__grade">G H I J</span>
              </div>
              <div className="pjd-scale__item">
                <span className="pjd-scale__art" aria-hidden="true">
                  <svg className="pjd-gem pjd-gem--md" style={{ '--pjd-tint': 'rgba(235, 213, 172, .85)' }}><use href="#pjdRound"></use></svg>
                </span>
                <span className="pjd-scale__name">Faint Yellow</span>
                <span className="pjd-scale__grade">K L</span>
              </div>
            </div>
  
            {/* A <p>, not a second <figcaption>: a figure may only caption
                 itself once, and only as its first or last child. */}
            <p className="pjd-panel__head pjd-panel__head--mid">
              Pansy Jewels does not carry diamonds of this quality
            </p>
  
            <div className="pjd-scale pjd-scale--muted">
              <div className="pjd-scale__item">
                <span className="pjd-scale__art" aria-hidden="true">
                  <svg className="pjd-gem pjd-gem--md" style={{ '--pjd-tint': 'rgba(201, 166, 107, .8)' }}><use href="#pjdRound"></use></svg>
                </span>
                <span className="pjd-scale__name">Noticeable Color</span>
                <span className="pjd-scale__grade">M N O P Q R</span>
              </div>
              <div className="pjd-scale__item">
                <span className="pjd-scale__art" aria-hidden="true">
                  <svg className="pjd-gem pjd-gem--md" style={{ '--pjd-tint': 'rgba(186, 142, 62, .95)' }}><use href="#pjdRound"></use></svg>
                </span>
                <span className="pjd-scale__name">Very Noticeable Color</span>
                <span className="pjd-scale__grade">S T U V W X Y Z</span>
              </div>
            </div>
  
          </figure>
  
        </div>
      </div>
    </section>
  
    {/* ===================== WHAT IS CLARITY? ===================== */}
    <section className="pj-section pj-section--tight pjd-topic" id="pjdClarity" aria-labelledby="pjdClarityHeading">
      <div className="pj-shell">
  
        <h2 className="pjd-rule" id="pjdClarityHeading" data-reveal="">What is Clarity?</h2>
  
        <div className="pjd-prose" data-reveal="">
          <p className="pjd-note">The clarity grade is based on any tiny natural identifiers found within a diamond.</p>
          <div className="pjd-prose__cols">
            <p>
              It is very common for diamonds to be formed with slight imperfections.
              These are known as &ldquo;inclusions&rdquo; and can come in many forms,
              including tiny white points, dark dots, or feathery cracks. The fewer
              inclusions, the more the stone is worth. A diamond&rsquo;s clarity ranking
              is determined by the number, size, type and placement of the inclusions.
            </p>
            <p>
              In order to grade the clarity of a diamond, it is necessary to observe the
              number and nature of any internal characteristics in the stone as well as
              their size and position. This Diamond Clarity Grading is carried out using
              the IGI scope and a loupe 10x under the experienced eye of laboratory
              gemologists. A diamond is said to be &ldquo;Internally Flawless&rdquo; when
              it presents no internal defects under 10x magnifications.
            </p>
          </div>
        </div>
  
      </div>
    </section>
  
    {/* ===================== WHAT IS CARAT WEIGHT? ===================== */}
    <section className="pj-section pj-section--tight pjd-topic" id="pjdCarat" aria-labelledby="pjdCaratHeading">
      <div className="pj-shell">
  
        <h2 className="pjd-rule" id="pjdCaratHeading" data-reveal="">What is Carat Weight?</h2>
  
        <div className="pjd-split">
  
          <div className="pjd-split__text" data-reveal="left">
            <p className="pjd-note">This is a measure of a diamond&rsquo;s weight and a reflection of its size.</p>
            <p>
              Carat weight is exactly that &mdash; a weight measurement. But carat weight
              does not always clearly help you determine if one diamond looks larger than
              the next.
            </p>
            <p>
              Consider that the carat weight of a diamond is the total weight, no matter
              how that weight is distributed. If a diamond is poorly cut and tall and
              narrow, when viewed from the top that diamond will appear smaller than a
              diamond of equal weight. To eliminate this concern when shopping at Pansy
              Jewels, we do not offer any diamonds cut to maximize carat weight at the
              expense of sparkle.
            </p>
          </div>
  
          <figure className="pjd-panel" data-reveal="right">
  
            {/* Each stone is drawn at its true relative diameter in millimetres, so
                 the row reads as a real size comparison rather than a decorative ramp.
                 Change --pjd-mm to restate a size. */}
            <div className="pjd-carats">
              <div className="pjd-carat" style={{ '--pjd-mm': '4.1' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">.25 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '5.2' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">.50 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '5.9' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">.75 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '6.5' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">1 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '6.9' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">1.25 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '7.4' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">1.50 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '8.2' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">2 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '9.4' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">3 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '10.4' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">4 ct.</span></div>
              <div className="pjd-carat" style={{ '--pjd-mm': '11.2' }}><span className="pjd-carat__art" aria-hidden="true"><svg className="pjd-gem"><use href="#pjdRound"></use></svg></span><span className="pjd-carat__val">5 ct.</span></div>
            </div>
  
            <figcaption className="pjd-tip">
              <span className="pjd-tip__label">Gemologist&rsquo;s tip</span>
              <p>
                For the best value in carat weight, instead of choosing .50 carats,
                1.0 carats, or 1.5 carats, etc., choose diamonds that weigh slightly
                less. You&rsquo;ll notice a significant price savings.
              </p>
            </figcaption>
  
          </figure>
  
        </div>
      </div>
    </section>
  
    {/* ===================== CLOSING CTA ===================== */}
    <section className="pjd-cta" aria-labelledby="pjdCtaHeading">
      <div className="pj-shell">
        <div className="pjd-cta__inner" data-reveal="">
          <span className="pj-eyebrow">Still deciding?</span>
          <h2 className="pj-title pj-title--sm" id="pjdCtaHeading">Let a gemologist walk you through the stones</h2>
          <p>
            Book a private viewing at our Surat office and compare cut, colour, clarity
            and carat side by side, in daylight, with no obligation.
          </p>
          <div className="pjd-cta__actions">
            <button className="pj-btn pj-btn--gold" type="button" onClick={() => openModal('appointment')}>
              <i className="bi bi-calendar2-week" aria-hidden="true"></i> Book an appointment
            </button>
            <Link className="pj-btn pj-btn--light" to="/contact">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  
  </main>
  );
}
