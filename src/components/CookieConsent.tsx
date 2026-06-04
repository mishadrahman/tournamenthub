import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Check, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to let the page load first
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // Re-apply if they previously accepted
      updateConsent(true);
    }
  }, []);

  const updateConsent = (granted: boolean) => {
    // @ts-ignore
    if (typeof window.gtag === 'function') {
      // @ts-ignore
      window.gtag('consent', 'update', {
        'analytics_storage': granted ? 'granted' : 'denied',
        'ad_storage': granted ? 'granted' : 'denied'
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    updateConsent(true);
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    updateConsent(false);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pb-safe"
        >
          <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-xl shrink-0 hidden sm:block">
                <ShieldAlert className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400 sm:hidden" />
                  We use cookies
                </h3>
                <p className="text-slate-400 text-sm">
                  We use cookies to analyze website traffic and optimize your website experience. 
                  By accepting our use of cookies, your data will be aggregated with all other user data. 
                  <a href="/cookies-policy" className="text-cyan-400 hover:text-cyan-300 ml-1 underline underline-offset-2">
                    Learn more
                  </a>.
                </p>
              </div>
            </div>
            <div className="flex w-full sm:w-auto items-center gap-3 shrink-0">
              <button
                onClick={handleReject}
                className="flex-1 sm:flex-none px-4 py-2 border border-slate-700 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                Reject
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-4 py-2 bg-cyan-500 text-slate-950 rounded-lg text-sm font-medium hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
