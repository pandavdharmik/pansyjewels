/* =====================================================================
   useValidatedForm.js
   The inline validation that contact.js, login.js and register.js each
   implemented separately. Same behaviour in all three:

     - a field is only validated once the visitor has been in it
     - the message clears as soon as the problem is fixed
     - on submit, everything is checked and focus jumps to the first fault

   Usage
   -----
     const form = useValidatedForm(initialValues, RULES);
     <input {...form.field('email')} />
     {form.errors.email && <p>{form.errors.email}</p>}
   ===================================================================== */
import { useCallback, useRef, useState } from 'react';

/** Shared rule builders, so the same wording appears on every page. */
export const rules = {
  required: (message) => ({ required: message }),
  email: (message = 'Please enter a valid email address.') => ({
    test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
    invalid: message,
  }),
  phone: (message = 'Please enter a valid phone number.') => ({
    // Digits, spaces and the usual separators; at least 8 digits.
    test: (v) => /^[+()\d\s-]{8,}$/.test(v) && (v.match(/\d/g) || []).length >= 8,
    invalid: message,
  }),
  minLength: (n, message) => ({ test: (v) => v.length >= n, invalid: message }),
};

export default function useValidatedForm(initial, RULES) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const refs = useRef({});

  const check = useCallback(
    (name, raw) => {
      const rule = RULES[name];
      if (!rule) return '';

      // A checkbox has no text to test, only a checked state.
      if (typeof raw === 'boolean') return raw ? '' : rule.required || '';

      const value = String(raw ?? '').trim();
      if (!value) return rule.required || '';
      if (rule.test && !rule.test(value)) return rule.invalid || '';
      return '';
    },
    [RULES]
  );

  const setValue = useCallback(
    (name, value) => {
      setValues((v) => ({ ...v, [name]: value }));
      // Clear the message the moment the field becomes valid again.
      setErrors((e) => (e[name] ? { ...e, [name]: check(name, value) } : e));
    },
    [check]
  );

  const field = useCallback(
    (name, { type = 'text' } = {}) => ({
      name,
      ref: (el) => {
        refs.current[name] = el;
      },
      ...(type === 'checkbox'
        ? { checked: !!values[name], onChange: (e) => setValue(name, e.target.checked) }
        : { value: values[name] ?? '', onChange: (e) => setValue(name, e.target.value) }),
      onBlur: () => {
        setTouched((t) => ({ ...t, [name]: true }));
        // Only nag about a field the visitor has actually been in.
        const v = values[name];
        if ((typeof v === 'string' && v.trim()) || errors[name]) {
          setErrors((e) => ({ ...e, [name]: check(name, v) }));
        }
      },
      'aria-invalid': errors[name] ? 'true' : 'false',
    }),
    [values, errors, check, setValue]
  );

  /** Runs every rule. Returns true when the form is clean. */
  const validateAll = useCallback(() => {
    const next = {};
    let firstBad = null;

    Object.keys(RULES).forEach((name) => {
      const msg = check(name, values[name]);
      if (msg) {
        next[name] = msg;
        if (!firstBad) firstBad = name;
      }
    });

    setErrors(next);
    setTouched(Object.fromEntries(Object.keys(RULES).map((k) => [k, true])));
    if (firstBad) refs.current[firstBad]?.focus?.();
    return !firstBad;
  }, [RULES, check, values]);

  const reset = useCallback(() => {
    setValues(initial);
    setErrors({});
    setTouched({});
  }, [initial]);

  /** Drives the wrapper's .is-focus / .is-invalid classes. */
  const fieldClass = useCallback(
    (name, base) => `${base}${errors[name] ? ' is-invalid' : ''}`,
    [errors]
  );

  return { values, errors, touched, field, fieldClass, validateAll, reset, setValue };
}
