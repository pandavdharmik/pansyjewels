/* =====================================================================
   PANSY JEWELS — SiteContext.jsx
   The state the old main.js kept in module-scope globals: the wishlist,
   the toast queue, and which of the four shared overlays is open.

   Anything in the tree can read it:
     const { toggleWish, isWished, toast, openModal } = useSite();
   ===================================================================== */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

const SiteContext = createContext(null);

const WISH_KEY = 'pj:wishlist';

/* localStorage throws in private mode and in some embedded webviews, so
   every access is guarded — the site works without persistence. */
function readWishlist() {
  try {
    const raw = JSON.parse(localStorage.getItem(WISH_KEY) || '[]');
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

export function SiteProvider({ children }) {
  const [wishlist, setWishlist] = useState(readWishlist);
  const [toasts, setToasts] = useState([]);
  /* One overlay at a time: 'quickview' | 'appointment' | 'search' |
     'wishlist' | null. quickViewId carries the piece for quick view. */
  const [modal, setModal] = useState(null);
  const [quickViewId, setQuickViewId] = useState(null);

  const nextToastId = useRef(0);

  useEffect(() => {
    try {
      localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
    } catch {
      /* private mode — the list simply does not survive a reload */
    }
  }, [wishlist]);

  const isWished = useCallback((id) => wishlist.includes(id), [wishlist]);

  const toast = useCallback((message, icon = 'bi-check2-circle') => {
    const id = ++nextToastId.current;
    setToasts((list) => [...list, { id, message, icon }]);
    // Matches the old 3.2s dwell plus the 450ms exit transition.
    setTimeout(() => setToasts((list) => list.filter((t) => t.id !== id)), 3650);
  }, []);

  /* `added` is derived from the current list rather than assigned inside
     the updater: a state updater has to stay pure, and StrictMode calls
     it twice in development, which would make a side effect there fire
     twice and report the wrong result. */
  const toggleWish = useCallback(
    (id, name) => {
      const added = !wishlist.includes(id);

      setWishlist((list) =>
        list.includes(id) ? list.filter((x) => x !== id) : [...list, id]
      );

      toast(
        added ? `${name || 'Piece'} saved to your wishlist.` : `${name || 'Piece'} removed.`,
        added ? 'bi-heart-fill' : 'bi-heart'
      );

      return added;
    },
    [wishlist, toast]
  );

  const openModal = useCallback((which, id = null) => {
    setQuickViewId(id);
    setModal(which);
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    setQuickViewId(null);
  }, []);

  const value = useMemo(
    () => ({
      wishlist,
      isWished,
      toggleWish,
      toasts,
      toast,
      modal,
      quickViewId,
      openModal,
      closeModal,
    }),
    [wishlist, isWished, toggleWish, toasts, toast, modal, quickViewId, openModal, closeModal]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used inside <SiteProvider>');
  return ctx;
}

export default SiteContext;
