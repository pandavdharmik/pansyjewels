/* Back-to-top and WhatsApp, pinned bottom-right. */
import { useEffect, useState } from 'react';
import { whatsappUrl } from '../../data/site';
import useReducedMotion from '../../hooks/useReducedMotion';

export default function FloatingActions() {
  const [on, setOn] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setOn(window.pageYOffset > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pj-float-stack">
      <button
        className={`pj-fab pj-fab--top${on ? ' is-on' : ''}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
      >
        <i className="bi bi-arrow-up" />
      </button>
      <a
        className="pj-fab pj-fab--wa"
        href={whatsappUrl('Hello Pansy Jewels, I have an enquiry.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
      >
        <i className="bi bi-whatsapp" />
      </a>
    </div>
  );
}
