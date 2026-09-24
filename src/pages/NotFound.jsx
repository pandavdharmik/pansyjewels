/* A 404 that keeps the house styling rather than the browser's. */
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="pj-abt">
      <section className="pj-section">
        <div className="pj-shell" style={{ textAlign: 'center', maxWidth: '46rem' }}>
          <span className="pj-eyebrow pj-eyebrow--center">Page not found</span>
          <h1 className="pj-title">
            This one is <em className="pj-italic">not in the case</em>
          </h1>
          <p className="pj-lede mt-3">
            The page you were looking for has moved or never existed. The collections are
            all still here.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
            <Link className="pj-btn pj-btn--gold" to="/">
              Back to home <i className="bi bi-arrow-right" />
            </Link>
            <Link className="pj-btn" to="/ring-collection">
              Browse collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
