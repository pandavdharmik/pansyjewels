/* Renders the toast queue held in SiteContext. */
import { useSite } from '../../context/SiteContext';

export default function Toasts() {
  const { toasts } = useSite();

  return (
    <div className="pj-toast-wrap" aria-live="polite" aria-atomic="true">
      {toasts.map((t) => (
        <div className="pj-toast" key={t.id}>
          <i className={`bi ${t.icon}`} />
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
