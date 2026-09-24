/* =====================================================================
   PANSY JEWELS — products.js
   The home page catalogue and the occasion finder copy, lifted verbatim
   from the old assets/js/main.js. Kept as plain data so the components
   that render it stay presentational.
   ===================================================================== */

export const PRODUCTS = [
    {
      id: 'aurelia-solitaire', name: 'Aurelia Solitaire Ring', cat: 'rings',
      price: 248000, was: 279000, tag: 'Signature', rating: 5, reviews: 48,
      img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80',
      blurb: 'A brushed 18k band curving around a 1.20 ct brilliant, set deliberately off-centre.'
    },
    {
      id: 'lumiere-chain', name: 'Lumière Layered Chain', cat: 'necklaces',
      price: 86500, was: null, tag: 'New', rating: 5, reviews: 31,
      img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80',
      blurb: 'Three weights of 18k chain, joined at a single hidden clasp so they never tangle.'
    },
    {
      id: 'seraphine-drops', name: 'Seraphine Drop Earrings', cat: 'earrings',
      price: 132000, was: 148000, tag: null, rating: 4, reviews: 22,
      img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80',
      blurb: 'Pear-cut stones suspended on an invisible hinge — they move when you do.'
    },
    {
      id: 'eterna-tennis', name: 'Eterna Tennis Bracelet', cat: 'bracelets',
      price: 315000, was: null, tag: 'Bridal', rating: 5, reviews: 57,
      img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=900&q=80',
      blurb: 'Forty-two matched brilliants in a continuous line, each set by hand.'
    },
    {
      id: 'vesper-pendant', name: 'Vesper Solitaire Pendant', cat: 'pendants',
      price: 74000, was: 82000, tag: null, rating: 5, reviews: 19,
      img: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&w=900&q=80',
      blurb: 'A single stone on a whisper-fine chain. The one you will never take off.'
    },
    {
      id: 'orin-band', name: 'Orin Eternity Band', cat: 'rings',
      price: 158000, was: null, tag: null, rating: 4, reviews: 26,
      img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
      blurb: 'Channel-set brilliants running the full circumference in warm 18k gold.'
    },
    {
      id: 'nova-hoops', name: 'Nova Pavé Hoops', cat: 'earrings',
      price: 96000, was: 112000, tag: 'Editor’s Pick', rating: 5, reviews: 41,
      img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
      blurb: 'Pavé on the inner and outer edge, so they catch light from every angle.'
    },
    {
      id: 'celeste-choker', name: 'Celeste Collar Necklace', cat: 'necklaces',
      price: 268000, was: null, tag: 'Statement', rating: 5, reviews: 15,
      img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
      blurb: 'A sculpted collar that sits flat against the collarbone and never rotates.'
    },
    {
      id: 'mira-cuff', name: 'Mira Sculpted Cuff', cat: 'bracelets',
      price: 124000, was: null, tag: null, rating: 4, reviews: 12,
      img: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=900&q=80',
      blurb: 'Solid 18k, hand-forged and polished to a mirror on one face, satin on the other.'
    },
    {
      id: 'sol-locket', name: 'Sol Keepsake Locket', cat: 'pendants',
      price: 58000, was: 66000, tag: 'Gift', rating: 5, reviews: 34,
      img: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=80',
      blurb: 'Opens on a silent hinge. Engraved inside at no charge, in any script.'
    },
    {
      id: 'ivory-studs', name: 'Ivory Classic Studs', cat: 'earrings',
      price: 44000, was: null, tag: null, rating: 5, reviews: 88,
      img: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=900&q=80',
      blurb: 'The everyday stud, in four carat weights. Martini setting, secure backs.'
    },
    {
      id: 'dawn-stack', name: 'Dawn Stacking Trio', cat: 'rings',
      price: 92000, was: 104000, tag: 'Set of 3', rating: 4, reviews: 29,
      img: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=900&q=80',
      blurb: 'Three bands — plain, pavé and twisted — sized to sit flush together.'
    }
];

export const OCCASIONS = {
    everyday: {
      title: 'Everyday',
      copy: 'Featherweight pieces you forget you are wearing — until someone asks. Designed for sleeping in, showering in, living in.',
      img: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?auto=format&fit=crop&w=1300&q=80'
    },
    wedding: {
      title: 'Wedding',
      copy: 'Bridal sets, matched bands and heirloom-weight necklaces — fitted across four appointments so nothing is rushed.',
      img: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?auto=format&fit=crop&w=1300&q=80'
    },
    engagement: {
      title: 'Engagement',
      copy: 'Solitaires, three-stones and hidden halos. Every centre stone IGI certified, every setting adjusted to her hand.',
      img: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1300&q=80'
    },
    party: {
      title: 'Party',
      copy: 'Movement-led drops and pavé hoops built to read across a room, at a weight you can still dance in.',
      img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1300&q=80'
    },
    gift: {
      title: 'Gift',
      copy: 'Lockets, pendants and studs that work without knowing a ring size. Engraving and next-day delivery included.',
      img: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=1300&q=80'
    },
    statement: {
      title: 'Statement',
      copy: 'Sculpted collars and solid cuffs. One piece, nothing else needed — the rest of the outfit can stay quiet.',
      img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1300&q=80'
    }
};

/** Look a piece up by id — used by quick view, wishlist and the PDP. */
export function byId(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

export default PRODUCTS;
