/* =====================================================================
   SiteLayout.jsx
   The chrome every page shares: preloader, progress bar, cursor, header,
   menu, footer, floating actions, toasts and the four modals.

   This is the ~320 lines that were duplicated across 21 HTML files.
   Pages now render only their own content through <Outlet>.

   `bare` drops the header and footer for the auth pages, which run
   full-bleed with no site chrome.
   ===================================================================== */
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import Preloader from './Preloader';
import Cursor from './Cursor';
import ScrollProgress from './ScrollProgress';
import FloatingActions from './FloatingActions';
import ScrollToTop from './ScrollToTop';
import Toasts from '../ui/Toasts';
import SharedModals from '../modals/SharedModals';

/* The auth pages carry no header or footer. */
const BARE_ROUTES = ['/login', '/register'];

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const bare = BARE_ROUTES.includes(pathname);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Cursor />
      <ScrollToTop />

      {!bare && (
        <>
          <Header onOpenMenu={() => setMenuOpen(true)} />
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
      )}

      <Outlet />

      {!bare && (
        <>
          <Footer />
          <FloatingActions />
        </>
      )}

      <Toasts />
      <SharedModals />
    </>
  );
}
