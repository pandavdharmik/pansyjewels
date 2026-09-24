/* =====================================================================
   PANSY JEWELS — collections.js
   The eight collection catalogues, ported verbatim from the old
   assets/js/*-collection.js files. Each entry keeps the same shape the
   vanilla collection engine used:

     noun        plural used in the result count ("24 rings")
     facetKey    the item field the sidebar's size/length filter reads
     facetLabel  turns that field into the line under the piece name
     items       the pieces themselves

   CollectionPage.jsx reads this by slug, so adding a collection means
   adding a key here and a route in App.jsx — no new component.
   ===================================================================== */

export const ring = {
  noun: 'rings',
  facetKey: 'sizes',
  facetLabel: function (sizes) { return sizes && sizes.length ? 'Sizes ' + sizes.join(', ') : ''; },
  items: [
  { id: 'aurelia-solitaire', name: 'Aurelia Solitaire Ring',  price: 248000, was: 279000, metal: 'white',    sizes: [12,14,16],    tag: 'Signature', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80' },
  { id: 'celeste-halo',      name: 'Celeste Halo Ring',       price: 196000, was: null,   metal: 'rose',     sizes: [14,16,18],    tag: null,        img: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=80' },
  { id: 'meridian-pave',     name: 'Meridian Pavé Band', price: 118000, was: 132000, metal: 'white',    sizes: [12,14,16,18], tag: 'Sale',      img: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=80' },
  { id: 'vesper-trilogy',    name: 'Vesper Trilogy Ring',     price: 284000, was: null,   metal: 'platinum', sizes: [14,16],       tag: 'Bridal',    img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80' },
  { id: 'lila-stack',        name: 'Lila Stacking Ring',      price: 64000,  was: 72000,  metal: 'yellow',   sizes: [12,14,16,18], tag: 'Sale',      img: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=80' },
  { id: 'noor-eternity',     name: 'Noor Eternity Band',      price: 152000, was: null,   metal: 'yellow',   sizes: [14,16,18],    tag: 'New',       img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80' },
  { id: 'saffron-signet',    name: 'Saffron Signet Ring',     price: 89000,  was: null,   metal: 'yellow',   sizes: [16,18],       tag: null,        img: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=80' },
  { id: 'aria-baguette',     name: 'Aria Baguette Ring',      price: 213000, was: 238000, metal: 'platinum', sizes: [12,14],       tag: 'Sale',      img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80' },
  { id: 'rosewater-twist',   name: 'Rosewater Twist Ring',    price: 97000,  was: null,   metal: 'rose',     sizes: [12,14,16],    tag: null,        img: 'https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=900&q=80' }
  ]
};

export const bali = {
  noun: 'bali',
  facetKey: 'diameters',
  facetLabel: function (d) {
  return d && d.length ? d.join(', ') + ' mm' : '';
  },
  items: [
  { id: 'orla-twist-bali',    name: 'Orla Twist Bali',          price: 78000,  was: 86000,  metal: 'yellow',   diameters: [20,25],    tag: 'Sale',      img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80' },
  { id: 'mira-jhumka-bali',   name: 'Mira Jhumka Bali',         price: 116000, was: null,   metal: 'yellow',   diameters: [25,30],    tag: 'Signature', img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=900&q=80' },
  { id: 'elise-huggie-bali',  name: 'Elise Huggie Bali',        price: 52000,  was: null,   metal: 'rose',     diameters: [15],       tag: null,        img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { id: 'zara-chand-bali',    name: 'Zara Chand Bali',          price: 189000, was: 208000, metal: 'yellow',   diameters: [25,30],    tag: 'Sale',      img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=900&q=80' },
  { id: 'noor-pave-bali',     name: 'Noor Pavé Bali',      price: 142000, was: null,   metal: 'white',    diameters: [20,25],    tag: null,        img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80' },
  { id: 'lila-everyday-bali', name: 'Lila Everyday Bali',       price: 38000,  was: 44000,  metal: 'yellow',   diameters: [15,20],    tag: 'Sale',      img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { id: 'celeste-wide-bali',  name: 'Celeste Wide Bali',        price: 98000,  was: null,   metal: 'rose',     diameters: [25,30],    tag: 'New',       img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80' },
  { id: 'anaya-bridal-bali',  name: 'Anaya Bridal Bali',        price: 264000, was: null,   metal: 'platinum', diameters: [25,30],    tag: 'Bridal',    img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=900&q=80' },
  { id: 'ivy-slim-bali',      name: 'Ivy Slim Bali',            price: 44000,  was: null,   metal: 'white',    diameters: [15,20],    tag: null,        img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' }
  ]
};

export const bangle = {
  noun: 'bangles',
  facetKey: 'sizes',
  facetLabel: function (sizes) {
  return sizes && sizes.length ? 'Size ' + sizes.join(', ') : '';
  },
  items: [
  { id: 'noor-kada',            name: 'Noor Diamond Kada',        price: 268000, was: 296000, metal: 'yellow',   sizes: ['2.4','2.6'],             tag: 'Sale',      img: 'https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=900&q=80' },
  { id: 'saffron-pair',         name: 'Saffron Bangle Pair',      price: 184000, was: null,   metal: 'yellow',   sizes: ['2.2','2.4','2.6'],       tag: 'Signature', img: 'https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=900&q=80' },
  { id: 'celeste-pave-bangle',  name: 'Celeste Pavé Bangle', price: 212000, was: null,   metal: 'white',    sizes: ['2.4','2.6'],             tag: null,        img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80' },
  { id: 'lila-slim-bangle',     name: 'Lila Slim Bangle',         price: 62000,  was: 70000,  metal: 'rose',     sizes: ['2.2','2.4','2.6','2.8'], tag: 'Sale',      img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80' },
  { id: 'vidya-bridal-kada',    name: 'Vidya Bridal Kada',        price: 348000, was: null,   metal: 'yellow',   sizes: ['2.4','2.6'],             tag: 'Bridal',    img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=900&q=80' },
  { id: 'aria-open-cuff',       name: 'Aria Open Bangle',         price: 96000,  was: null,   metal: 'rose',     sizes: ['2.4','2.6','2.8'],       tag: 'New',       img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80' },
  { id: 'meridian-stack',       name: 'Meridian Stacking Bangles', price: 128000, was: 142000, metal: 'white',   sizes: ['2.2','2.4'],             tag: 'Sale',      img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80' },
  { id: 'ivy-everyday-bangle',  name: 'Ivy Everyday Bangle',      price: 54000,  was: null,   metal: 'yellow',   sizes: ['2.4','2.6','2.8'],       tag: null,        img: 'https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=900&q=80' },
  { id: 'vesper-platinum-kada', name: 'Vesper Platinum Kada',     price: 296000, was: null,   metal: 'platinum', sizes: ['2.6','2.8'],             tag: null,        img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80' }
  ]
};

export const bracelet = {
  noun: 'bracelets',
  facetKey: 'fits',
  facetLabel: function (fits) {
  return fits && fits.length
    ? 'Fits ' + fits.map(function (f) { return f + '″'; }).join(', ')
    : '';
  },
  items: [
  { id: 'eterna-tennis',      name: 'Eterna Tennis Bracelet',    price: 315000, was: null,   metal: 'white',    fits: ['6.5','7','7.5'],     tag: 'Signature', img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80' },
  { id: 'rosewater-link',     name: 'Rosewater Link Bracelet',   price: 148000, was: 164000, metal: 'rose',     fits: ['6.5','7'],           tag: 'Sale',      img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80' },
  { id: 'noor-cuff',          name: 'Noor Hammered Cuff',        price: 92000,  was: null,   metal: 'yellow',   fits: ['7','7.5'],           tag: null,        img: 'https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=900&q=80' },
  { id: 'lila-charm',         name: 'Lila Charm Bracelet',       price: 68000,  was: 76000,  metal: 'yellow',   fits: ['6.5','7','7.5','8'], tag: 'Sale',      img: 'https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=900&q=80' },
  { id: 'celeste-riviera',    name: 'Celeste Rivière Bracelet', price: 268000, was: null, metal: 'platinum', fits: ['7','7.5'],        tag: 'Bridal',    img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80' },
  { id: 'aria-bar-bracelet',  name: 'Aria Bar Bracelet',         price: 54000,  was: null,   metal: 'rose',     fits: ['6.5','7'],           tag: 'New',       img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80' },
  { id: 'meridian-pave-band', name: 'Meridian Pavé Bracelet', price: 196000, was: 218000, metal: 'white',  fits: ['7','7.5','8'],       tag: 'Sale',      img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80' },
  { id: 'saffron-chain',      name: 'Saffron Chain Bracelet',    price: 116000, was: null,   metal: 'yellow',   fits: ['7','7.5'],           tag: null,        img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80' },
  { id: 'vesper-stack-cuff',  name: 'Vesper Stacking Cuff',      price: 84000,  was: null,   metal: 'platinum', fits: ['6.5','7','7.5'],     tag: null,        img: 'https://images.unsplash.com/photo-1758995116383-f51775896add?auto=format&fit=crop&w=900&q=80' }
  ]
};

export const earring = {
  noun: 'earrings',
  facetKey: 'style',
  facetLabel: function (style) {
  return { stud: 'Stud', hoop: 'Hoop', drop: 'Drop', bali: 'Bali' }[style] || style;
  },
  items: [
  { id: 'seraphine-drops',  name: 'Seraphine Drop Earrings',  price: 132000, was: 148000, metal: 'white',    style: 'drop', tag: 'Sale',      img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { id: 'solene-studs',     name: 'Solène Diamond Studs', price: 94000, was: null,   metal: 'white',    style: 'stud', tag: 'Signature', img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'orla-twist-hoops', name: 'Orla Twist Hoops',         price: 78000,  was: 86000,  metal: 'yellow',   style: 'hoop', tag: 'Sale',      img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80' },
  { id: 'mira-bali',        name: 'Mira Jhumka Bali',         price: 116000, was: null,   metal: 'yellow',   style: 'bali', tag: 'New',       img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { id: 'elise-huggies',    name: 'Elise Huggie Hoops',       price: 52000,  was: null,   metal: 'rose',     style: 'hoop', tag: null,        img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80' },
  { id: 'anaya-chandelier', name: 'Anaya Chandelier Drops',   price: 268000, was: 294000, metal: 'platinum', style: 'drop', tag: 'Bridal',    img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { id: 'ivy-halo-studs',   name: 'Ivy Halo Studs',           price: 138000, was: null,   metal: 'platinum', style: 'stud', tag: null,        img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'zara-chand-bali',  name: 'Zara Chand Bali',          price: 189000, was: null,   metal: 'yellow',   style: 'bali', tag: null,        img: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { id: 'noor-pearl-drops', name: 'Noor Pearl Drops',         price: 67000,  was: 74000,  metal: 'rose',     style: 'drop', tag: 'Sale',      img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80' }
  ]
};

/* Necklaces filter by the classic lengths; the card names each one,
   so it reads "Princess 18″" rather than a bare number. */
var NECKLACE_NAMES = { '14': 'Choker', '18': 'Princess', '22': 'Matinee', '30': 'Opera' };

export const necklace = {
  noun: 'necklaces',
  facetKey: 'lengths',
  facetLabel: function (lengths) {
  if (!lengths || !lengths.length) return '';
  return lengths.map(function (l) {
    return (NECKLACE_NAMES[l] ? NECKLACE_NAMES[l] + ' ' : '') + l + '″';
  }).join(', ');
  },
  items: [
  { id: 'lumiere-layered',    name: 'Lumière Layered Chain',    price: 86500,  was: null,   metal: 'yellow',   lengths: ['18','22'],       tag: 'New',       img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
  { id: 'saffron-rope',       name: 'Saffron Rope Necklace',    price: 148000, was: 164000, metal: 'yellow',   lengths: ['18','22','30'],  tag: 'Sale',      img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { id: 'celeste-riviere',    name: 'Celeste Rivière Necklace', price: 386000, was: null,   metal: 'white',    lengths: ['14','18'],       tag: 'Signature', img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'elise-pearl-strand', name: 'Elise Pearl Strand',       price: 112000, was: null,   metal: 'white',    lengths: ['18','22'],       tag: null,        img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80' },
  { id: 'vidya-bridal-set',   name: 'Vidya Bridal Necklace',    price: 424000, was: null,   metal: 'yellow',   lengths: ['14','18'],       tag: 'Bridal',    img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=900&q=80' },
  { id: 'ivy-choker',         name: 'Ivy Diamond Choker',       price: 196000, was: 218000, metal: 'platinum', lengths: ['14'],            tag: 'Sale',      img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'noor-opera-chain',   name: 'Noor Opera Chain',         price: 132000, was: null,   metal: 'rose',     lengths: ['22','30'],       tag: null,        img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { id: 'aria-station',       name: 'Aria Station Necklace',    price: 74000,  was: 82000,  metal: 'rose',     lengths: ['18','22'],       tag: 'Sale',      img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
  { id: 'meera-kundan',       name: 'Meera Kundan Necklace',    price: 348000, was: null,   metal: 'yellow',   lengths: ['14','18'],       tag: null,        img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=900&q=80' }
  ]
};

export const pendant = {
  noun: 'pendants',
  facetKey: 'lengths',
  facetLabel: function (lengths) {
  return lengths && lengths.length
    ? 'Chain ' + lengths.map(function (l) { return l + '″'; }).join(', ')
    : '';
  },
  items: [
  { id: 'aurelia-drop-pendant', name: 'Aurelia Drop Pendant',      price: 128000, was: 142000, metal: 'white',    lengths: [16,18],       tag: 'Sale',      img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'lumiere-solitaire',    name: 'Lumière Solitaire Pendant', price: 164000, was: null, metal: 'platinum', lengths: [16,18,20], tag: 'Signature', img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'meira-halo-pendant',   name: 'Meira Halo Pendant',        price: 96000,  was: null,   metal: 'rose',     lengths: [18,20],       tag: null,        img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
  { id: 'crescent-charm',       name: 'Crescent Charm Pendant',    price: 58000,  was: 64000,  metal: 'yellow',   lengths: [16,18,20,22], tag: 'Sale',      img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
  { id: 'noor-layered-set',     name: 'Noor Layered Pendant Set',  price: 186000, was: null,   metal: 'yellow',   lengths: [18,20,22],    tag: 'New',       img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { id: 'seraphine-teardrop',   name: 'Seraphine Teardrop Pendant', price: 214000, was: 236000, metal: 'white',   lengths: [16,18],       tag: 'Sale',      img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'pearl-drop-pendant',   name: 'Elise Pearl Drop Pendant',  price: 74000,  was: null,   metal: 'rose',     lengths: [16,18],       tag: null,        img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80' },
  { id: 'anaya-bridal-pendant', name: 'Anaya Bridal Pendant',      price: 292000, was: null,   metal: 'platinum', lengths: [16,18,20],    tag: 'Bridal',    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
  { id: 'ivy-initial-pendant',  name: 'Ivy Initial Pendant',       price: 46000,  was: null,   metal: 'yellow',   lengths: [18,20,22],    tag: null,        img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' }
  ]
};

export const tanmaniya = {
  noun: 'tanmaniya',
  facetKey: 'lengths',
  facetLabel: function (lengths) {
  return lengths && lengths.length
    ? 'Chain ' + lengths.map(function (l) { return l + '″'; }).join(', ')
    : '';
  },
  items: [
  { id: 'anaya-tanmaniya',      name: 'Anaya Diamond Tanmaniya',   price: 246000, was: 272000, metal: 'yellow',   lengths: [18,20],       tag: 'Sale',      img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=900&q=80' },
  { id: 'meera-mangalsutra',    name: 'Meera Mangalsutra',         price: 168000, was: null,   metal: 'yellow',   lengths: [18,20,22],    tag: 'Signature', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
  { id: 'lumiere-tanmaniya',    name: 'Lumière Tanmaniya',    price: 134000, was: null,   metal: 'white',    lengths: [16,18],       tag: null,        img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'noor-short-tanmaniya', name: 'Noor Short Tanmaniya',      price: 92000,  was: 104000, metal: 'rose',     lengths: [16,18],       tag: 'Sale',      img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
  { id: 'saffron-bead-chain',   name: 'Saffron Black Bead Chain',  price: 76000,  was: null,   metal: 'yellow',   lengths: [18,20,22],    tag: null,        img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { id: 'celeste-halo-tan',     name: 'Celeste Halo Tanmaniya',    price: 198000, was: null,   metal: 'platinum', lengths: [16,18,20],    tag: 'New',       img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80' },
  { id: 'vidya-bridal-tan',     name: 'Vidya Bridal Tanmaniya',    price: 318000, was: null,   metal: 'yellow',   lengths: [18,20],       tag: 'Bridal',    img: 'https://images.unsplash.com/photo-1756483560049-e7b2208f99a0?auto=format&fit=crop&w=900&q=80' },
  { id: 'ivy-everyday-tan',     name: 'Ivy Everyday Tanmaniya',    price: 58000,  was: 66000,  metal: 'rose',     lengths: [16,18,20,22], tag: 'Sale',      img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { id: 'aria-layered-tan',     name: 'Aria Layered Tanmaniya',    price: 212000, was: null,   metal: 'white',    lengths: [20,22],       tag: null,        img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' }
  ]
};

/* Keyed by URL slug so <CollectionPage> can look itself up from the route. */
export const collections = {
  ring, bali, bangle, bracelet, earring, necklace, pendant, tanmaniya,
};

export default collections;
