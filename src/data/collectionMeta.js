/* =====================================================================
   PANSY JEWELS — collectionMeta.js
   The per-collection copy and filter options that used to be hard-coded
   into eight nearly identical HTML files: banner, sidebar facet, and the
   two advice panels.

   Pairs with collections.js (the catalogues). <CollectionPage> reads one
   entry from each, so all eight URLs share a single component.
   ===================================================================== */

export const PRICE_BANDS = [
  { id: 'under-100k', label: 'Under ₹ 1,00,000', test: (p) => p < 100000 },
  { id: '100k-200k', label: '₹ 1,00,000 – 2,00,000', test: (p) => p >= 100000 && p <= 200000 },
  { id: 'above-200k', label: 'Above ₹ 2,00,000', test: (p) => p > 200000 },
];

/* Swatch order matches the old markup. */
export const METAL_SWATCHES = [
  { id: 'yellow', label: 'Yellow gold' },
  { id: 'rose', label: 'Rose gold' },
  { id: 'white', label: 'White gold' },
  { id: 'platinum', label: 'Platinum' },
];

/** Long names for the line above each card's title. */
export const METALS = {
  yellow: 'Yellow gold',
  white: 'White gold',
  rose: 'Rose gold',
  platinum: 'Platinum',
  silver: 'Sterling silver',
};

export const collectionMeta = {
  ring: {
    title: 'Rings',
    kicker: 'The right time for life',
    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1900&q=80',
    facetLabel: 'Ring size',
    facetOptions: ['12', '14', '16', '18'],
    helpTitle: 'Not sure of the size?',
    helpCopy:
      'Bring a ring she already wears and we will size it in minutes, or book a private appointment and we will measure properly.',
    ctaCopy:
      'Every ring here can be remade in another metal, another size, or around a stone you already own. Bring us the idea and we will draw it with you.',
  },
  bali: {
    title: 'Bali',
    kicker: 'The right time for life',
    img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1900&q=80',
    facetLabel: 'Hoop diameter',
    facetOptions: ['15', '20', '25', '30'],
    helpTitle: 'How big is a bali?',
    helpCopy:
      'Diameter is measured across the hoop. 15 mm sits close to the lobe; 30 mm falls below it. Try a pair on at the showroom before deciding.',
    ctaCopy:
      'Every bali here can be remade in another metal, at another diameter, or around stones you already own. Bring us the idea and we will draw it with you.',
  },
  bangle: {
    title: 'Bangles',
    kicker: 'The right time for life',
    img: 'https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=1900&q=80',
    facetLabel: 'Bangle size',
    facetOptions: ['2.2', '2.4', '2.6', '2.8'],
    helpTitle: 'Which bangle size?',
    helpCopy:
      'Bangle size is the inner diameter in inches — 2.4 suits most wrists. Measure an existing bangle across the inside, or bring one in and we will match it.',
    ctaCopy:
      'Every bangle here can be remade in another metal, at another size, or around stones you already own. Bring us the idea and we will draw it with you.',
  },
  bracelet: {
    title: 'Bracelets',
    kicker: 'The right time for life',
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1900&q=80',
    facetLabel: 'Wrist size',
    facetOptions: ['6.5', '7', '7.5', '8'],
    helpTitle: 'Not sure of the fit?',
    helpCopy:
      'Measure the wrist with a strip of paper and tell us the length — we add links or shorten the chain in the workshop before it ships.',
    ctaCopy:
      'Every bracelet here can be remade in another metal, to another length, or around stones you already own. Bring us the idea and we will draw it with you.',
  },
  earring: {
    title: 'Earrings',
    kicker: 'The right time for life',
    img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1900&q=80',
    facetLabel: 'Style',
    facetOptions: ['stud', 'hoop', 'drop', 'bali'],
    helpTitle: 'Sensitive ears?',
    helpCopy:
      'Every pair here can be made with hypoallergenic posts and backs at no extra cost. Ask us when you enquire, or book a fitting.',
    ctaCopy:
      'Every pair here can be remade in another metal, another length, or around stones you already own. Bring us the idea and we will draw it with you.',
  },
  necklace: {
    title: 'Necklaces',
    kicker: 'The right time for life',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1900&q=80',
    facetLabel: 'Length',
    facetOptions: ['14', '18', '22', '30'],
    helpTitle: 'Which length sits where?',
    helpCopy:
      'A choker sits at the base of the neck, princess just below the collarbone, matinee at the bust and opera lower still. Any chain here can be made to a length in between.',
    ctaCopy:
      'Every necklace here can be remade in another metal, to another length, or around stones you already own. Bring us the idea and we will draw it with you.',
  },
  pendant: {
    title: 'Pendants',
    kicker: 'The right time for life',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1900&q=80',
    facetLabel: 'Chain length',
    facetOptions: ['16', '18', '20', '22'],
    helpTitle: 'Not sure of the length?',
    helpCopy:
      'Chains can be shortened or extended in our workshop, usually while you wait. Tell us the drop you want and we will set it.',
    ctaCopy:
      'Every pendant here can be remade in another metal, on another chain, or around a stone you already own. Bring us the idea and we will draw it with you.',
  },
  tanmaniya: {
    title: 'Tanmaniya',
    kicker: 'The right time for life',
    img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=1900&q=80',
    facetLabel: 'Chain length',
    facetOptions: ['16', '18', '20', '22'],
    helpTitle: 'Matching a set?',
    helpCopy:
      'Most tanmaniya here can be made to match an existing mangalsutra chain, or paired with earrings from the same design. Send us a photograph.',
    ctaCopy:
      'Every tanmaniya here can be remade in another metal, on another chain, or around stones you already own. Bring us the idea and we will draw it with you.',
  },
};

export default collectionMeta;
