/* =====================================================================
   PANSY JEWELS — site.js
   Everything that was hard-coded into 23 copies of the same header and
   footer now lives here once. Change a phone number or a nav link in
   this file and every page follows.
   ===================================================================== */

export const CURRENCY = '₹';

/** Country code + number, digits only — used to build wa.me links. */
export const WHATSAPP = '919000000000';

export const CONTACT = {
  phone: '+91 70463 12000',
  phoneHref: 'tel:+917046312000',
  landline: '0261 2961200',
  landlineHref: 'tel:+912612961200',
  email: 'sales@pansyjewels.com',
  addressLines: [
    'L-24, Pansy Jewels, L Road,',
    'Gujarat Hira Bourse, Gems & Jewellery Park,',
    'Ichchhapore, Surat - 394510 (GUJ)',
  ],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Gujarat+Hira+Bourse%2C+Ichchhapore%2C+Surat+394510',
};

/* The eight collections, in the order the header menu lists them. The
   preview image is what the desktop dropdown cross-fades to on hover. */
export const COLLECTIONS = [
  { slug: 'ring', path: '/ring-collection', label: 'Ring', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=75' },
  { slug: 'bali', path: '/bali-collection', label: 'Bali', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=700&q=75' },
  { slug: 'earring', path: '/earring-collection', label: 'Earring', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=700&q=75' },
  { slug: 'tanmaniya', path: '/tanmaniya-collection', label: 'Tanmaniya', img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=700&q=75' },
  { slug: 'pendant', path: '/pendant-collection', label: 'Pendant', img: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=700&q=75' },
  { slug: 'bangle', path: '/bangle-collection', label: 'Bangle', img: 'https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=700&q=75' },
  { slug: 'bracelet', path: '/bracelet-collection', label: 'Bracelet', img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=700&q=75' },
  { slug: 'necklace', path: '/necklace-collection', label: 'Necklace', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=75' },
];

export const EDUCATION = [
  { path: '/diamond-education', label: 'Diamond Education' },
  { path: '/learn-about-metals', label: 'Learn about Metals' },
  { path: '/ethical-sourcing', label: 'Ethical Sourcing' },
  { path: '/certification', label: 'Certification' },
  { path: '/best-practice-principle', label: 'Best Practice Principle' },
];

/* The top-level nav, after Occasions/Boutique/Craft were removed. The
   two dropdowns are rendered from COLLECTIONS and EDUCATION above. */
export const NAV = [
  { type: 'dropdown', label: 'Collections', items: COLLECTIONS },
  { type: 'link', label: 'About Us', path: '/about' },
  { type: 'dropdown', label: 'Education', items: EDUCATION, compact: true },
  { type: 'link', label: 'Event', path: '/event' },
  { type: 'link', label: 'Contact Us', path: '/contact' },
];

export const FOOTER_INFO = [
  { path: '/about', label: 'About Us' },
  { path: '/diamond-education', label: 'Education' },
  { path: '/faq', label: 'FAQ' },
  { path: '/#craft', label: 'Craftsmanship' },
  { path: '/contact', label: 'Contact Us' },
];

export const POLICIES = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-condition', label: 'Terms of Service' },
];

export const SOCIAL = [
  { icon: 'bi-instagram', label: 'Instagram', href: '#' },
  { icon: 'bi-pinterest', label: 'Pinterest', href: '#' },
  { icon: 'bi-facebook', label: 'Facebook', href: '#' },
  { icon: 'bi-youtube', label: 'YouTube', href: '#' },
];

/** wa.me link with a pre-filled message. */
export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message || '')}`;
}

/** ₹ 2,48,000 — Indian digit grouping, no decimals, same as the old site. */
export function money(n) {
  return `${CURRENCY} ${Number(n).toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}
