/* =====================================================================
   Contact.jsx
   Ported from contact.html + assets/js/contact.js. The page markup is
   unchanged; the form is a controlled component using the shared
   validation hook, and the reveal/tilt effects come from hooks.
   ===================================================================== */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import useTilt from '../hooks/useTilt';
import useValidatedForm, { rules } from '../hooks/useValidatedForm';
import { whatsappUrl } from '../data/site';

const RULES = {
  firstName: { ...rules.required('Please enter your first name.') },
  lastName: { ...rules.required('Please enter your last name.') },
  email: { ...rules.required('Please enter your email address.'), ...rules.email() },
  phone: { ...rules.required('Please enter your phone number.'), ...rules.phone() },
  message: { ...rules.required('Please tell us how we can help.') },
};

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };

/* Declared at module scope on purpose. A component defined inside another
   is a brand-new type on every render, so React would unmount and remount
   the input — losing focus after every keystroke. */
function Field({ form, name, label, id, type = 'text', placeholder, autoComplete, textarea }) {
  const described = `${id}Err`;
  return (
    <div className={form.fieldClass(name, 'pjc-field')}>
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea
          id={id}
          rows="4"
          placeholder={placeholder}
          aria-describedby={described}
          {...form.field(name)}
        />
      ) : (
        <input
          id={id}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-describedby={described}
          {...form.field(name)}
        />
      )}
      <span className="pjc-field__line" aria-hidden="true" />
      <span className="pjc-field__error" id={described} role="alert">
        {form.errors[name] || ''}
      </span>
    </div>
  );
}

function ContactForm() {
  const form = useValidatedForm(EMPTY, RULES);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.validateAll()) {
      setSent(false);
      return;
    }

    /* ---- Collected payload, ready for a real endpoint ----
       Replace this block with your fetch() call, e.g.
         fetch('/api/contact', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(form.values),
         })
    ------------------------------------------------------- */
    if (import.meta.env.DEV) console.log('[Pansy Jewels] contact form payload', form.values);

    form.reset();
    setSent(true);
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className="pjc-form__row">
        <Field form={form} name="firstName" id="pjcFirstName" label="First Name" autoComplete="given-name" placeholder="Your first name" />
        <Field form={form} name="lastName" id="pjcLastName" label="Last Name" autoComplete="family-name" placeholder="Your last name" />
      </div>

      <Field form={form} name="email" id="pjcEmail" label="Email Address" type="email" autoComplete="email" placeholder="you@example.com" />
      <Field form={form} name="phone" id="pjcPhone" label="Phone Number" type="tel" autoComplete="tel" placeholder="+91" />

      <div className="pjc-field">
        <label htmlFor="pjcSubject">Subject</label>
        <input id="pjcSubject" type="text" placeholder="Custom design, appointment, an existing order…" {...form.field('subject')} />
        <span className="pjc-field__line" aria-hidden="true" />
      </div>

      <Field form={form} name="message" id="pjcMessage" label="Message" placeholder="Tell us how we can help…" textarea />

      <div className="pjc-actions">
        <button className="pjc-btn pjc-btn--gold" type="submit">
          <span>Send Message</span> <i className="bi bi-arrow-right" aria-hidden="true" />
        </button>
        <a
          className="pjc-btn pjc-btn--dark"
          href={whatsappUrl('Hello Pansy Jewels, I have an enquiry.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp" aria-hidden="true" /> <span>WhatsApp Us</span>
        </a>
      </div>

      <div className={`pjc-success${sent ? ' is-on' : ''}`} role="status" aria-live="polite">
        <i className="bi bi-check2-circle" aria-hidden="true" />
        <p>Thank you for contacting Pansy Jewels. Our team will get back to you shortly.</p>
      </div>
    </form>
  );
}

export default function Contact() {
  useReveal('.pjc-reveal');
  useTilt();

  return (
  <main className="pjc">

    <div className="pjc__shell">
      <nav className="pjc__crumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Contact Us</span>
      </nav>
    </div>

    {/* ===================== ROW 1 — CONTACT INFORMATION ===================== */}
    <section className="pjc-info" aria-labelledby="pjcInfoHeading">
      <div className="pjc__shell">

        <div className="pjc-reveal">
          <h1 className="pjc__title" id="pjcInfoHeading">We are always <em>within reach</em></h1>
        </div>

        <div className="pjc-info__grid pjc-reveal" data-reveal-delay="120">

          <a className="pjc-info__item" href="mailto:sales@pansyjewels.com" data-tilt="4">
            <i className="bi bi-envelope pjc-info__ico" aria-hidden="true"></i>
            <span className="pjc-info__label">Email</span>
            <span className="pjc-info__value">sales@pansyjewels.com</span>
            <span className="pjc-info__note">Send us an email</span>
          </a>

          <a className="pjc-info__item" href="tel:+917046312000" data-tilt="4">
            <i className="bi bi-chat-dots pjc-info__ico" aria-hidden="true"></i>
            <span className="pjc-info__label">Contact</span>
            <span className="pjc-info__value">+91 70463 12000</span>
            <span className="pjc-info__note">Speak with our team</span>
          </a>

          <a className="pjc-info__item" href="tel:+912612441200" data-tilt="4">
            <i className="bi bi-telephone pjc-info__ico" aria-hidden="true"></i>
            <span className="pjc-info__label">Phone</span>
            <span className="pjc-info__value">0261 2441200</span>
            <span className="pjc-info__note">Call our showroom</span>
          </a>

        </div>
      </div>
    </section>

    {/* ===================== ROW 2 — CONTACT EXPERIENCE ===================== */}
    <section className="pjc-exp" aria-labelledby="pjcFormHeading">
      <div className="pjc__shell">
        <div className="pjc-exp__grid">

          {/* Visual. Swap the <img /> src for your own photography. */}
          <div className="pjc-exp__visual pjc-reveal">
            <figure className="pjc-exp__figure" data-tilt="3">
              <img src="https://images.unsplash.com/photo-1772442125263-c9dd28bbd938?auto=format&fit=crop&w=1100&q=80"
                   alt="A Pansy Jewels goldsmith examining a finished piece at the workbench"
                   loading="lazy" width="1100" height="1375" />
              <figcaption className="pjc-exp__overlay">
                <span className="pjc__eyebrow">The Atelier</span>
                <h2>Let&rsquo;s create something beautiful</h2>
                <p>
                  Whether you have a question about a piece, need a custom design,
                  or simply want to visit us, our team is here to help.
                </p>
                <a className="pjc-exp__cta" href="#pjcMap">
                  Visit our showroom <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </a>
              </figcaption>
            </figure>
          </div>

          {/* Enquiry form */}
          <div className="pjc-exp__form pjc-reveal" data-reveal-delay="140">

            <div className="pjc-form__head">
              <span className="pjc__eyebrow">Enquiries</span>
              <h2 className="pjc__title" id="pjcFormHeading">Send us a message</h2>
              <p className="pjc__lede">
                We&rsquo;d love to hear from you. Fill out the form and our team
                will get back to you shortly.
              </p>
            </div>

            <ContactForm />
          </div>

        </div>
      </div>
    </section>

    {/* ========================== ROW 3 — MAP =========================== */}
    <section className="pjc-map" id="pjcMap" aria-labelledby="pjcMapHeading">
      <div className="pjc__shell">
        <div className="pjc-map__frame pjc-reveal">

          {/* Keyless Google Maps embed. To use a different location, change the
               q= value; to use a Maps Embed API key instead, swap the whole src. */}
          <iframe
            src="https://www.google.com/maps?q=L-24%2C%20Pansy%20Jewels%2C%20L%20Road%2C%20Gujarat%20Hira%20Bourse%2C%20Gems%20%26%20Jewellery%20Park%2C%20Ichchhapore%2C%20Surat%20394510%2C%20Gujarat%2C%20India&amp;z=16&amp;output=embed"
            title="Map showing Pansy Jewels at Gujarat Hira Bourse, Ichchhapore, Surat"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <div className="pjc-map__card">
            <span className="pjc-map__place">Visit Pansy Jewels</span>
            <h2 id="pjcMapHeading">Ichchhapore, Surat</h2>
            <p className="pjc-map__addr">
              L-24, Pansy Jewels, L Road,<br />
              Gujarat Hira Bourse, Gems &amp; Jewellery Park,<br />
              Ichchhapore, Surat - 394510 (GUJ)
            </p>
            <a className="pjc-map__link"
               href="https://www.google.com/maps/search/?api=1&amp;query=L-24%2C+Pansy+Jewels%2C+L+Road%2C+Gujarat+Hira+Bourse%2C+Ichchhapore%2C+Surat+394510"
               target="_blank" rel="noopener">
              View Directions <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>

        </div>
      </div>
    </section>

  </main>
  );
}
