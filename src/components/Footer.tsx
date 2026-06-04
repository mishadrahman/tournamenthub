import { Trophy, Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-slate-950 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">Tournament<span className="text-cyan-400">Hub</span></span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              The premier mobile platform for creating, managing, and tracking competitive events anywhere, anytime.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-white/5 rounded-full"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Features</Link></li>
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Supported Games</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies-policy" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tournament Hub Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Designed for competitive excellence.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
