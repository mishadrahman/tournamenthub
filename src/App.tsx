/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const Home = React.lazy(() => import('./pages/Home'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const CookiesPolicy = React.lazy(() => import('./pages/CookiesPolicy'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}
