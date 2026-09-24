/* =====================================================================
   Modal.jsx
   One dialog shell for the four shared overlays. Uses Bootstrap's modal
   CSS classes but drives them from React, so the Bootstrap JS bundle is
   never loaded.

   Handles what Bootstrap's plugin used to: backdrop, scroll lock, Escape,
   a focus trap, and returning focus to whatever opened it.
   ===================================================================== */
import { useEffect, useRef } from 'react';
import useScrollLock from '../../hooks/useScrollLock';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Modal({
  open,
  onClose,
  eyebrow,
  title,
  children,
  size = 'modal-lg',
  dark = false,
}) {
  const dialog = useRef(null);
  const opener = useRef(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) return undefined;

    opener.current = document.activeElement;
    // Focus the panel itself so Escape and the trap work immediately.
    dialog.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !dialog.current) return;

      const items = Array.from(dialog.current.querySelectorAll(FOCUSABLE));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      opener.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose} />
      <div
        className={`modal fade show pj-modal${dark ? ' pj-modal--dark' : ''}`}
        style={{ display: 'block' }}
        role="dialog"
        aria-modal="true"
        aria-label={title || eyebrow}
        tabIndex="-1"
        ref={dialog}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className={`modal-dialog ${size} modal-dialog-centered`}>
          <div className="modal-content">
            <div className="modal-header">
              <div>
                {eyebrow && <span className="pj-eyebrow mb-0">{eyebrow}</span>}
                {title && <h3 className="pj-title--sm mt-2 mb-0">{title}</h3>}
              </div>
              <button className="btn-close" type="button" onClick={onClose} aria-label="Close" />
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
