/* =====================================================================
   BestPracticePrinciple.jsx
   Best practice principles — ported from the static page of the same name. The markup is
   unchanged apart from JSX attribute names; the shared header, menu and
   footer now come from <SiteLayout>.
   ===================================================================== */
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

export default function BestPracticePrinciple() {
  useReveal('[data-reveal]');

  return (
  <main className="pjb">
  
    {/* ===================== MASTHEAD ===================== */}
    <section className="pj-section pjb-intro" id="pjbTop">
      <div className="pj-shell">
  
        <nav className="pj-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link><i className="bi bi-chevron-right"></i>
          <span aria-current="page">Best Practice Principles</span>
        </nav>
  
        <header className="pjb-masthead" data-reveal="">
          <h1 className="pjb-title">Best Practice <em>Principles</em></h1>
        </header>
  
        {/* Placeholder: reused from elsewhere on the site, so the alt text is
             accurate today. Swap the src for your own photography and rewrite
             the alt to match. */}
        <figure className="pjb-hero" data-reveal="zoom">
          <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1900&q=80"
               alt="A rose gold bracelet set with diamonds, against a soft blush background"
               loading="eager" width="1900" height="810" />
        </figure>
  
        <div className="pjb-prose" data-reveal="">
          <p className="pjb-prose__lede">
            Pansy Jewels is taking the lead in introducing best practice principles to
            ensure the diamond industry is run in an ethical and professional way.
          </p>
          <p>
            Pansy Jewels is committed to abiding by these principles and is making it a
            condition of supplying all clients that they too agree to comply with them.
            Moreover the principles are formulated to ensure that Pansy Jewels and its
            customers encourage adherence to them at all levels of the supply chain down
            to the consumer. Pansy Jewels will also encourage industry organisations in
            the major diamond cutting centres to adopt these principles.
          </p>
          <p>
            The implementation and monitoring of these Best Practice Principles will
            ensure consumers buying will be able to rely with confidence on the ethical
            standards of the industry.
          </p>
        </div>
  
      </div>
    </section>
  
    {/* ===================== 1 — CONSUMER ===================== */}
    <section className="pj-section pj-section--tight pjb-principle" id="pjbConsumer" aria-labelledby="pjbConsumerHeading">
      <div className="pj-shell">
  
        <header className="pjb-principle__head" data-reveal="">
          <span className="pj-eyebrow pjb-principle__eyebrow">Principle 01</span>
          <h2 className="pjb-principle__title" id="pjbConsumerHeading">Consumer</h2>
        </header>
  
        <div className="pjb-principle__body" data-reveal="">
          <p className="pjb-principle__intro">
            We are committed to operating our businesses with a view to ensuring that
            consumers buying are able to rely with confidence on the professional and
            ethical standards and technical skills of the gem diamond industry, taking
            account of the following:
          </p>
  
          <ul className="pjb-list">
            <li>
              Natural diamonds are objects of prestige, a luxury good, generally
              acquired for sentimental reasons and are regarded as items of value by
              the consumer.
            </li>
            <li>
              Diamonds are a unique item about which the consumer has limited expertise
              and consequently, in order to make an informed choice, the consumer is
              reliant on (i) the standards and integrity of the diamond industry, and
              (ii) information from the diamond industry as to cut, colour, clarity and
              carat weight and other attributes, including the application of any
              treatment.
            </li>
            <li>
              The highest professional and ethical standards and technical skills are
              necessary to ensure that consumer trust is not misplaced and that the
              reputation of the gem diamond industry is maintained and enhanced.
            </li>
            <li>
              Consumers expect to purchase diamonds in their natural state, without any
              treatment, beyond the accepted skills of craftsmanship associated with
              their cutting and polishing &mdash; and therefore the danger of
              non-disclosure of treatment of natural diamonds, and the passing off of
              partly or wholly synthetic diamonds and simulants as natural diamonds, is
              contrary to the interests of consumers.
            </li>
            <li>
              The injury and hardship suffered by local populations (and the potential
              for it) when conflicts arise in diamond producing areas are unacceptable,
              as is seeking to profit from such conflicts.
            </li>
          </ul>
        </div>
  
      </div>
    </section>
  
    {/* ===================== 2 — BUSINESS PRACTICES ===================== */}
    <section className="pj-section pj-section--tight pjb-principle" id="pjbPractices" aria-labelledby="pjbPracticesHeading">
      <div className="pj-shell">
  
        <header className="pjb-principle__head" data-reveal="">
          <span className="pj-eyebrow pjb-principle__eyebrow">Principle 02</span>
          <h2 className="pjb-principle__title" id="pjbPracticesHeading">Business Practices</h2>
        </header>
  
        <div className="pjb-principle__body" data-reveal="">
          <p className="pjb-principle__intro">
            We are committed to operating our businesses in such a way that we neither
            engage in, nor encourage in any manner, the following practices which are
            regarded as unacceptable and against the public interest and that of the
            diamond industry:
          </p>
  
          <ul className="pjb-list">
            <li>
              Buying and trading rough diamonds from areas where this would encourage
              or support conflict and human suffering.
            </li>
            <li>The use of child labour.</li>
            <li>
              Practices which intentionally or recklessly endanger or harm the health
              or welfare of individuals.
            </li>
            <li>
              Conduct which conflicts with the principles set out in (1) above, thereby
              bringing the diamond industry into serious disrepute.
            </li>
          </ul>
        </div>
  
      </div>
    </section>
  
    {/* ===================== 3 — COMMITMENT ===================== */}
    <section className="pj-section pj-section--tight pjb-principle" id="pjbCommitment" aria-labelledby="pjbCommitmentHeading">
      <div className="pj-shell">
  
        <header className="pjb-principle__head" data-reveal="">
          <span className="pj-eyebrow pjb-principle__eyebrow">Principle 03</span>
          <h2 className="pjb-principle__title" id="pjbCommitmentHeading">Commitment</h2>
        </header>
  
        <div className="pjb-principle__body" data-reveal="">
          <p className="pjb-principle__intro">
            We are committed to the highest industry ethics including the following:
          </p>
  
          <ul className="pjb-list">
            <li>
              Action to address concerns arising out of the misuse of rough diamonds in
              support of conflict, and regular discussions on other issues relevant to
              the gem diamond industry to enable appropriate and timely industry
              responses.
            </li>
            <li>
              The provision of proper working conditions, including the health, safety
              and well-being of workers.
            </li>
            <li>
              The dignity of individuals and best practices to ensure the fair
              treatment of individuals.
            </li>
            <li>
              Full compliance with international best practice and the related
              regulatory framework with respect to the environment.
            </li>
            <li>
              Full disclosure at all levels of the diamond distribution chain and, most
              importantly, to consumers, of all treatments to natural diamonds and with
              respect to wholly or partly synthetic stones, and compliance with the
              rules, regulations and guidelines published from time to time by the
              diamond industry&rsquo;s governing bodies.
            </li>
          </ul>
        </div>
  
      </div>
    </section>
  
    {/* ===================== CLOSING CTA ===================== */}
    <section className="pjb-cta" aria-labelledby="pjbCtaHeading">
      <div className="pj-shell">
        <div className="pjb-cta__inner" data-reveal="">
          <span className="pj-eyebrow">Hold us to it</span>
          <h2 className="pj-title pj-title--sm" id="pjbCtaHeading">Principles are only worth the checking</h2>
          <p>
            If you supply us, these principles are a condition of doing business. If you
            buy from us, ask us to show our working on any piece &mdash; origin, grading
            report or refiner&rsquo;s audit.
          </p>
          <div className="pjb-cta__actions">
            <Link className="pj-btn pj-btn--gold" to="/contact">
              <i className="bi bi-envelope" aria-hidden="true"></i> Contact us
            </Link>
            <Link className="pj-btn" to="/ethical-sourcing">Ethical sourcing</Link>
          </div>
        </div>
      </div>
    </section>
  
  </main>
  );
}
