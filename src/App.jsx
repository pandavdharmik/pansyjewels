/* =====================================================================
   App.jsx
   Every route in the site. The eight collection URLs share one
   <CollectionPage> that looks its catalogue up by the `slug` prop, so
   adding a ninth collection is a data entry plus a line here.
   ===================================================================== */
import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Product from './pages/Product';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Register from './pages/Register';
import CollectionPage from './pages/CollectionPage';
import DiamondEducation from './pages/DiamondEducation';
import LearnAboutMetals from './pages/LearnAboutMetals';
import EthicalSourcing from './pages/EthicalSourcing';
import Certification from './pages/Certification';
import BestPracticePrinciple from './pages/BestPracticePrinciple';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import NotFound from './pages/NotFound';

const COLLECTION_ROUTES = [
  ['ring', 'Rings'],
  ['bali', 'Bali'],
  ['earring', 'Earrings'],
  ['tanmaniya', 'Tanmaniya'],
  ['pendant', 'Pendants'],
  ['bangle', 'Bangles'],
  ['bracelet', 'Bracelets'],
  ['necklace', 'Necklaces'],
];

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/faq" element={<Faq />} />

        {/* Legacy /product.html had no id; keep both shapes working. */}
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />

        {COLLECTION_ROUTES.map(([slug, title]) => (
          <Route
            key={slug}
            path={`/${slug}-collection`}
            element={<CollectionPage slug={slug} title={title} />}
          />
        ))}

        <Route path="/diamond-education" element={<DiamondEducation />} />
        <Route path="/learn-about-metals" element={<LearnAboutMetals />} />
        <Route path="/ethical-sourcing" element={<EthicalSourcing />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/best-practice-principle" element={<BestPracticePrinciple />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
