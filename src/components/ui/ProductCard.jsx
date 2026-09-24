/* =====================================================================
   ProductCard.jsx
   The .pj-card used by the home grid, the search results, the wishlist
   and the related-products row. Replaces cardHTML() in main.js.

   Props
   -----
   product   a record from src/data/products.js
   compact   drops the hover actions and the star row (modal grids)
   noPrice   drops the price block — the home boutique grid is
             enquiry-led, so the figure lives on the product page only
   ===================================================================== */
import { Link } from 'react-router-dom';
import { money } from '../../data/site';
import { useSite } from '../../context/SiteContext';

function Stars({ rating, reviews }) {
  return (
    <div className="pj-card__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className={`bi ${i < rating ? 'bi-star-fill' : 'bi-star'}`} aria-hidden="true" />
      ))}
      <small>({reviews})</small>
    </div>
  );
}

export default function ProductCard({ product, compact = false, noPrice = false, style }) {
  const { isWished, toggleWish, openModal } = useSite();
  const wished = isWished(product.id);

  return (
    <article className="pj-card" data-cat={product.cat} data-id={product.id} style={style}>
      <div className="pj-card__media">
        {product.tag && (
          <span
            className={`pj-card__tag${product.tag === 'Signature' ? ' pj-card__tag--gold' : ''}`}
          >
            {product.tag}
          </span>
        )}

        <button
          className={`pj-card__wish${wished ? ' is-on' : ''}`}
          type="button"
          aria-label={`Save ${product.name} to wishlist`}
          aria-pressed={wished}
          onClick={() => toggleWish(product.id, product.name)}
        >
          <i className={`bi bi-heart${wished ? '-fill' : ''}`} />
        </button>

        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <img src={product.img} alt={product.name} loading="lazy" />
        </Link>

        {!compact && (
          <div className="pj-card__actions">
            <button
              className="pj-btn pj-btn--sm"
              type="button"
              onClick={() => openModal('quickview', product.id)}
            >
              Quick View
            </button>
            <button
              className="pj-btn pj-btn--sm"
              type="button"
              onClick={() => openModal('appointment')}
            >
              Enquire
            </button>
          </div>
        )}
      </div>

      <div className="pj-card__body">
        <div>
          <span className="pj-card__cat">{product.cat}</span>
          <h3 className="pj-card__name">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          {!compact && <Stars rating={product.rating} reviews={product.reviews} />}
        </div>

        {!noPrice && (
          <div className="pj-card__price">
            {money(product.price)}
            {product.was && <del>{money(product.was)}</del>}
          </div>
        )}
      </div>
    </article>
  );
}
