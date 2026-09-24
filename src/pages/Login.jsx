/* =====================================================================
   Login.jsx
   Ported from login.html + assets/js/login.js. The sign-in and forgot-
   password views swap in place; ?/#forgot still deep-links to the reset
   view, as the old page did.
   ===================================================================== */
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthVisual from '../components/ui/AuthVisual';
import AuthBrandBar from '../components/ui/AuthBrandBar';
import useValidatedForm, { rules } from '../hooks/useValidatedForm';

const SLIDES = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=1400&q=80',
];

const SIGNIN_RULES = {
  email: { ...rules.required('Please enter your email address.'), ...rules.email() },
  password: {
    ...rules.required('Please enter your password.'),
    ...rules.minLength(6, 'Your password must be at least 6 characters.'),
  },
};

const RESET_RULES = {
  email: { ...rules.required('Please enter your email address.'), ...rules.email() },
};

function FieldRow({ form, name, id, label, icon, type = 'text', placeholder, autoComplete, children }) {
  return (
    <div className={form.fieldClass(name, 'pjl-field')}>
      <label className="pjl-field__label" htmlFor={id}>
        {label}
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

function SignIn({ onForgot }) {
  const form = useValidatedForm({ email: '', password: '', remember: false }, SIGNIN_RULES);
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.validateAll()) return;

    /* ---- Replace with your real endpoint, e.g.
         fetch('/api/login', { method: 'POST', … })
    ------------------------------------------------------- */
    if (import.meta.env.DEV) console.log('[Pansy Jewels] login payload', form.values);

    // Stand-in for the real sign-in response.
    setBusy(true);
    setTimeout(() => setBusy(false), 1400);
  };

  return (
    <section className="pjl-view is-active" aria-labelledby="pjlSigninTitle">
      <div className="pjl-stagger">
        <header className="pjl-view__head">
          <span className="pjl-view__eyebrow">Sign in</span>
          <h1 className="pjl-view__title" id="pjlSigninTitle">
            Welcome <em>back</em>
          </h1>
          <p className="pjl-view__sub">Enter your details to continue to your account.</p>
        </header>

        <form noValidate onSubmit={onSubmit}>
          <FieldRow
            form={form}
            name="email"
            id="pjlEmail"
            label="Email address"
            icon="bi-envelope"
            type="email"
            autoComplete="email"
            placeholder="example@example.com"
          />

          <FieldRow
            form={form}
            name="password"
            id="pjlPassword"
            label={
              <>
                Password <span aria-hidden="true">*</span>
              </>
            }
            icon="bi-key"
            type={showPw ? 'text' : 'password'}
            autoComplete="current-password"
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
          </FieldRow>

          <div className="pjl-row-between">
            <label className="pjl-check">
              <input type="checkbox" {...form.field('remember', { type: 'checkbox' })} />
              <span className="pjl-check__box" aria-hidden="true" />
              <span>Remember me</span>
            </label>
            <button className="pjl-link" type="button" onClick={onForgot}>
              Forgot password?
            </button>
          </div>

          <button className="pjl-submit" type="submit" disabled={busy}>
            <span>
              {busy ? 'Signing in…' : 'Login'}{' '}
              {!busy && <i className="bi bi-arrow-right" aria-hidden="true" />}
            </span>
          </button>
        </form>

        <div className="pjl-divider">New here</div>

        <p className="pjl-foot">
          Don’t have an account?{' '}
          <Link className="pjl-link" to="/register">
            Create one
          </Link>
        </p>
      </div>

      <p className="pjl-note">
        By signing in you agree to our <Link to="/terms-condition">Terms of Service</Link> and{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>
    </section>
  );
}

function Forgot({ onBack }) {
  const form = useValidatedForm({ email: '' }, RESET_RULES);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.validateAll()) {
      setSent(false);
      return;
    }

    /* ---- Replace with your real endpoint ---- */
    if (import.meta.env.DEV) console.log('[Pansy Jewels] reset payload', form.values);

    form.reset();
    setSent(true);
  };

  return (
    <section className="pjl-view is-active" aria-labelledby="pjlForgotTitle">
      <div className="pjl-stagger">
        <header className="pjl-view__head">
          <span className="pjl-view__eyebrow">Reset</span>
          <h1 className="pjl-view__title" id="pjlForgotTitle">
            Forgot your <em>password?</em>
          </h1>
          <p className="pjl-view__sub">
            Enter the email address linked to your account and we will send you a link to create a
            new password.
          </p>
        </header>

        <div className={`pjl-success${sent ? ' is-on' : ''}`} role="status">
          <i className="bi bi-envelope-check" aria-hidden="true" />
          <span>
            If that email is registered with us, a reset link is on its way. Please check your
            inbox.
          </span>
        </div>

        <form noValidate onSubmit={onSubmit}>
          <FieldRow
            form={form}
            name="email"
            id="pjlResetEmail"
            label={
              <>
                Email-ID <span aria-hidden="true">*</span>
              </>
            }
            icon="bi-envelope"
            type="email"
            autoComplete="email"
            placeholder="Email-ID *"
          />

          <button className="pjl-submit" type="submit">
            <span>
              Reset Password <i className="bi bi-arrow-right" aria-hidden="true" />
            </span>
          </button>
        </form>

        <p className="pjl-foot" style={{ marginTop: '1.5rem' }}>
          <button className="pjl-link" type="button" onClick={onBack}>
            <i className="bi bi-arrow-left" aria-hidden="true" /> Back to log-in
          </button>
        </p>
      </div>

      <p className="pjl-note">
        Still locked out? Call <a href="tel:+917046312000">+91 70463 12000</a> or write to{' '}
        <a href="mailto:sales@pansyjewels.com">sales@pansyjewels.com</a>.
      </p>
    </section>
  );
}

export default function Login() {
  const { hash } = useLocation();
  const [view, setView] = useState(hash === '#forgot' ? 'forgot' : 'signin');

  // Keep the two in step if the visitor edits the hash directly.
  useEffect(() => {
    setView(hash === '#forgot' ? 'forgot' : 'signin');
  }, [hash]);

  return (
    <main className="pjl">
      <section className="pjl__split">
        <AuthVisual
          slides={SLIDES}
          eyebrow="The Private Room"
          title={
            <>
              Your pieces,
              <br />
              <em>kept close.</em>
            </>
          }
          text="Sign in to follow an order through the atelier, revisit the pieces you have saved, and hold a private appointment at a boutique of your choosing."
        />

        <div className="pjl__panel">
          <div className="pjl__card">
            <AuthBrandBar />
            {view === 'forgot' ? (
              <Forgot onBack={() => setView('signin')} />
            ) : (
              <SignIn onForgot={() => setView('forgot')} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
