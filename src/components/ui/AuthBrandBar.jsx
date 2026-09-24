/* The centred logo and "back to store" link that stand in for the site
   header on the two auth pages. */
import { Link } from 'react-router-dom';

export default function AuthBrandBar() {
  return (
    <div className="pjl__brandbar">
      <Link className="pjl__logo" to="/" aria-label="Pansy Jewels — home">
        <img src="/assets/images/pansy-logo.png" alt="Pansy Jewels" width="205" height="101" />
      </Link>
      <Link className="pjl__back" to="/">
        <i className="bi bi-arrow-left" aria-hidden="true" /> Back to store
      </Link>
    </div>
  );
}
