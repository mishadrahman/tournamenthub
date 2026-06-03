import { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-slate-950/20 backdrop-blur-md border-white/5' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Tournament<span className="text-cyan-400">Hub</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#showcase" className="hover:text-white transition-colors">Screenshots</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a href="#download" className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            Download App
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">Features</a>
          <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">Screenshots</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">How It Works</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">FAQ</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200">Contact</a>
          <a href="#download" onClick={() => setMobileMenuOpen(false)} className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-center py-3 rounded-full font-bold mt-4 shadow-[0_0_20px_rgba(6,182,212,0.3)]">Download Now</a>
        </motion.div>
      )}
    </header>
  );
}
