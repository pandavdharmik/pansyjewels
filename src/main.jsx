import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/* Bootstrap first, then the house stylesheets — the cascade order the
   old pages used, so every custom rule still wins where it did before. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/style.css';
import './styles/collection.css';
import './styles/contact.css';
import './styles/event.css';
import './styles/faq.css';
import './styles/legal.css';
import './styles/login.css';
import './styles/register.css';
import './styles/diamond-education.css';
import './styles/learn-about-metals.css';
import './styles/ethical-sourcing.css';
import './styles/certification.css';
import './styles/best-practice-principle.css';

import App from './App.jsx';
import { SiteProvider } from './context/SiteContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteProvider>
        <App />
      </SiteProvider>
    </BrowserRouter>
  </React.StrictMode>
);
