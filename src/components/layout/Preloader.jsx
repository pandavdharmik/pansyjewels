/* The gold progress bar that covers the first paint. Runs once for the
   app rather than once per page — a route change is no longer a reload. */
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => setPct((p) => Math.min(p + Math.random() * 18, 92)), 180);

    const finish = () => {
      clearInterval(tick);
      setPct(100);
      setTimeout(() => setDone(true), 320);
    };

    if (document.readyState === 'complete') finish();
    else window.addEventListener('load', finish);

    // Safety net on slow image loads, same 3.5s cap as the old site.
    const cap = setTimeout(finish, 3500);

    return () => {
      clearInterval(tick);
      clearTimeout(cap);
      window.removeEventListener('load', finish);
    };
  }, []);

  return (
    <div className={`pj-loader${done ? ' is-done' : ''}`} aria-hidden="true">
      <div className="text-center">
        <div className="pj-loader__mark">Pansy Jewels</div>
        <div className="pj-loader__bar">
          <span style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
