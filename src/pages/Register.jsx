/* =====================================================================
   Register.jsx
   Ported from register.html + assets/js/register.js. Shares the animated
   visual and brand bar with the login page; the form is the same ten
   fields, with the same per-field messages.
   ===================================================================== */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthVisual from '../components/ui/AuthVisual';
import AuthBrandBar from '../components/ui/AuthBrandBar';
import useValidatedForm, { rules } from '../hooks/useValidatedForm';

const SLIDES = [
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=80',
];

const COUNTRIES = [
  'India', 'United Arab Emirates', 'United States', 'United Kingdom', 'Canada',
  'Australia', 'Singapore', 'Hong Kong', 'Belgium', 'Switzerland', 'Japan', 'Other',
];

/* Every field is required, so each rule carries its own wording rather
   than falling back to one generic message. */
const RULES = {
  firstName: { ...rules.required('Please enter your first name.') },
  lastName: { ...rules.required('Please enter your last name.') },
  email: { ...rules.required('Please enter your email address.'), ...rules.email() },
  password: {
    ...rules.required('Please choose a password.'),
    ...rules.minLength(8, 'Your password must be at least 8 characters.'),
  },
  phone: { ...rules.required('Please enter your contact number.'), ...rules.phone() },
  city: { ...rules.required('Please enter your city.') },
  state: { ...rules.required('Please enter your state.') },
  zipcode: {
    ...rules.required('Please enter your zipcode.'),
    test: (v) => /^[A-Za-z0-9][A-Za-z0-9\s-]{2,9}$/.test(v),
    invalid: 'Please enter a valid zipcode.',
  },
  address: {
    ...rules.required('Please enter your address.'),
    ...rules.minLength(6, 'Please enter your full address.'),
  },
  country: { ...rules.required('Please select your country.') },
  terms: { ...rules.required('Please accept the terms to continue.') },
};

const EMPTY = {
  firstName: '', lastName: '', email: '', password: '', phone: '',
  city: '', state: '', zipcode: '', address: '', country: '', terms: false,
};

/* Module scope, so the inputs are not remounted on every keystroke. */
function Field({ form, name, id, label, icon, type = 'text', placeholder, autoComplete, span, children }) {
  return (
    <div className={form.fieldClass(name, `pjl-field${span ? ' pjr-span' : ''}`)}>
      <label className="pjl-field__label" htmlFor={id}>
        {label} <span aria-hidden="true">*</span>
      </label>
      <div className="pjl-field__row">
        <span className="pjl-field__icon" aria-hidden="true">
          <i className={`bi ${icon}`} />
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...form.field(name)}
        />
        {children}
      </div>
      <p className="pjl-field__error" aria-live="polite">
        {form.errors[name] || ''}
      </p>
    </div>
  );
}

export default function Register() {
  const form = useValidatedForm(EMPTY, RULES);
  const [showPw, setShowPw] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.validateAll()) {
      setDone(false);
      return;
    }

    /* ---- Replace with your real endpoint, e.g.
         fetch('/api/register', { method: 'POST', … })
    ------------------------------------------------------- */
    if (import.meta.env.DEV) console.log('[Pansy Jewels] register payload', form.values);

    form.reset();
    setDone(true);
  };

  return (
    <main className="pjl">
      <section className="pjl__split pjl__split--register">
        <AuthVisual
          slides={SLIDES}
          eyebrow="The Private Room"
          title={
            <>
              A house
              <br />
              <em>that remembers you.</em>
            </>
          }
          text="Register once and every visit after runs shorter — saved addresses, a wishlist that keeps, and the full history of every piece that has left our atelier for you."
        />

        <div className="pjl__panel pjl__panel--register">
          <div className="pjl__card pjl__card--wide">
            <AuthBrandBar />

            <section className="pjl-view is-active" aria-labelledby="pjrTitle">
              <div className="pjl-stagger">
                <header className="pjl-view__head">
                  <span className="pjl-view__eyebrow">Register</span>
                  <h1 className="pjl-view__title" id="pjrTitle">
                    Fill the form to <em>register</em>
                  </h1>
                  <p className="pjl-view__sub">
                    Kindly go to{' '}
                    <Link className="pjl-link" to="/login">
                      Login
                    </Link>{' '}
                    if already registered.
                  </p>
                </header>

                <div className={`pjl-success${done ? ' is-on' : ''}`} role="status">
                  <i className="bi bi-patch-check" aria-hidden="true" />
                  <span>
                    Welcome to Pansy Jewels. Your account has been created — please check your
                    inbox to confirm your email address.
                  </span>
                </div>

                <form noValidate onSubmit={onSubmit}>
                  <div className="pjr-grid">
                    <Field form={form} name="firstName" id="pjrFirstName" label="First Name" icon="bi-person" autoComplete="given-name" placeholder="First Name *" />
                    <Field form={form} name="lastName" id="pjrLastName" label="Last Name" icon="bi-person" autoComplete="family-name" placeholder="Last Name *" />
                    <Field form={form} name="email" id="pjrEmail" label="Email-ID" icon="bi-envelope" type="email" autoComplete="email" placeholder="Email-ID *" />

                    <Field
                      form={form}
                      name="password"
                      id="pjrPassword"
                      label="Password"
                      icon="bi-key"
                      type={showPw ? 'text' : 'password'}
                      autoComplete="new-password"
                      placeholder="Password *"
                    >
                      <button
                        className="pjl-field__toggle"
                        type="button"
                        aria-label={showPw ? 'Hide password' : 'Show password'}
                        aria-pressed={showPw}
                        onClick={() => setShowPw((v) => !v)}
                      >
                        <i className={`bi ${showPw ? 'bi-eye-slash' : 'bi-eye'}`} aria-hidden="true" />
                      </button>
                    </Field>

                    <Field form={form} name="phone" id="pjrPhone" label="Contact No." icon="bi-phone" type="tel" autoComplete="tel" placeholder="Contact No. *" />
                    <Field form={form} name="city" id="pjrCity" label="City" icon="bi-buildings" autoComplete="address-level2" placeholder="City *" />
                    <Field form={form} name="state" id="pjrState" label="State" icon="bi-diagram-3" autoComplete="address-level1" placeholder="State *" />
                    <Field form={form} name="zipcode" id="pjrZip" label="Zipcode" icon="bi-pencil" autoComplete="postal-code" placeholder="Zipcode *" />
                    <Field form={form} name="address" id="pjrAddress" label="Address" icon="bi-pencil-square" autoComplete="street-address" placeholder="Address *" span />

                    <div className={form.fieldClass('country', 'pjl-field pjl-field--select pjr-span')}>
                      <label className="pjl-field__label" htmlFor="pjrCountry">
                        Country <span aria-hidden="true">*</span>
                      </label>
                      <div className="pjl-field__row">
                        <span className="pjl-field__icon" aria-hidden="true">
                          <i className="bi bi-globe2" />
                        </span>
                        <select id="pjrCountry" autoComplete="country-name" {...form.field('country')}>
                          <option value="">Select Country</option>
                          {COUNTRIES.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <p className="pjl-field__error" aria-live="polite">
                        {form.errors.country || ''}
                      </p>
                    </div>
                  </div>

                  <div className={form.fieldClass('terms', 'pjl-field pjl-field--terms')}>
                    <label className="pjl-check">
                      <input type="checkbox" {...form.field('terms', { type: 'checkbox' })} />
                      <span className="pjl-check__box" aria-hidden="true" />
                      <span>I agree to the Terms of Service and Privacy Policy</span>
                    </label>
                    <p className="pjl-field__error" aria-live="polite">
                      {form.errors.terms || ''}
                    </p>
                  </div>

                  <button className="pjl-submit" type="submit">
                    <span>
                      Submit <i className="bi bi-arrow-right" aria-hidden="true" />
                    </span>
                  </button>
                </form>

                <div className="pjl-divider">Already with us</div>

                <p className="pjl-foot">
                  Already registered?{' '}
                  <Link className="pjl-link" to="/login">
                    Sign in
                  </Link>
                </p>
              </div>

              <div className="pjr-benefits">
                <span className="pjl-view__eyebrow">Create an account</span>
                <h2 className="pjr-benefits__title">
                  Benefits for <em>registered customers</em>
                </h2>
                <p className="pjr-benefits__sub">Why it is worth the two minutes</p>

                <ul className="pjr-benefits__list">
                  <li>
                    <i className="bi bi-bag-check" aria-hidden="true" />
                    <span>Move through checkout faster, with your details already in place.</span>
                  </li>
                  <li>
                    <i className="bi bi-geo-alt" aria-hidden="true" />
                    <span>Store multiple shipping addresses and send a piece straight to its recipient.</span>
                  </li>
                  <li>
                    <i className="bi bi-truck" aria-hidden="true" />
                    <span>View and track your orders through every stage of the atelier.</span>
                  </li>
                  <li>
                    <i className="bi bi-heart" aria-hidden="true" />
                    <span>Keep a wishlist that stays with you between visits and devices.</span>
                  </li>
                  <li>
                    <i className="bi bi-calendar2-check" aria-hidden="true" />
                    <span>Book private appointments and hold pieces ahead of your visit.</span>
                  </li>
                </ul>
              </div>

              <p className="pjl-note">
                By creating an account you agree to our{' '}
                <Link to="/terms-condition">Terms of Service</Link> and{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
