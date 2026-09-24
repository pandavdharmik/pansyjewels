/* =====================================================================
   FeaturedGrid.jsx
   The home page boutique grid and its category chips. Replaces
   initCatalogue() in main.js.

   Prices are omitted here on purpose: the home grid is enquiry-led, so
   the figure lives on the product page. ProductCard's `noPrice` does it.
   ===================================================================== */
import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../../data/products';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'rings', label: 'Rings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'bracelets', label: 'Bracelets' },
  { id: 'pendants', label: 'Pendants' },
];

export default function FeaturedGrid() {
  const [filter, setFilter] = useState('all');

  const list = useMemo(
    () => (filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter)),
    [filter]
  );

  return (
    <>
      <div className="pj-filters" data-reveal="">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`pj-chip${filter === f.id ? ' is-active' : ''}`}
            type="button"
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* The cards stagger in; the delay rides on each card itself rather
          than a wrapper, so the grid's own layout is untouched. */}
      <div className="pj-grid-products" aria-live="polite">
        {list.map((p, i) => (
          <ProductCard key={p.id} product={p} noPrice style={{ animationDelay: `${i * 55}ms` }} />
        ))}
      </div>
    </>
  );
}
