import { Apple, Play } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative pt-12 bg-[#020617]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 to-[#020617] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-cyan-500/20 shadow-2xl">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to run your best tournament?</h2>
            <p className="text-xl text-slate-300 mb-10">Join 500,000+ organizers managing events natively from their smartphones.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#download" className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold transition-colors">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80 leading-none">Download on the</div>
                  <div className="text-lg leading-none mt-1">App Store</div>
                </div>
              </a>
              <a href="#download" className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80 leading-none">Get it on</div>
                  <div className="text-lg leading-none mt-1">Google Play</div>
                </div>
              </a>
            </div>
            <p className="text-sm text-slate-400 mt-6 mt-8">Completely free to get started. No credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
