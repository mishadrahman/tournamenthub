import { motion } from 'motion/react';
import { Star, Apple, Play, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-sm font-bold text-white">4.9/5 Rating <span className="text-sm font-normal text-slate-500 uppercase tracking-wider ml-2">Based on 12k reviews</span></span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              The Future of <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                Competitive Play.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Automate brackets, manage registrations, and track real-time leaderboards. Join over 50,000 organizers transforming their local gaming nights into world-class championships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#download" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer text-white transition-colors">
                <Apple className="w-6 h-6" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-tighter opacity-60 leading-none">Download on</span>
                  <span className="text-sm font-bold leading-none mt-1">App Store</span>
                </div>
              </a>
              <a href="/#download" className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer text-white transition-colors">
                <Play className="w-6 h-6" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-tighter opacity-60 leading-none">Get it on</span>
                  <span className="text-sm font-bold leading-none mt-1">Google Play</span>
                </div>
              </a>
            </div>

            <div className="mt-10 flex text-sm text-slate-400 gap-8">
              <div>
                <strong className="text-white text-xl block font-display">500K+</strong>
                Active Players
              </div>
              <div>
                <strong className="text-white text-xl block font-display">50K+</strong>
                Tournaments
              </div>
            </div>
          </motion.div>

          {/* Hero Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[400px]"
          >
            <div className="relative aspect-[1/2.1] bg-slate-900 rounded-[45px] border-[8px] border-slate-800 shadow-[0_0_100px_rgba(6,182,212,0.1)] overflow-hidden ring-1 ring-white/10">
              {/* Dynamic island notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
              
              {/* Screen Content Mockup */}
              <div className="absolute inset-0 bg-slate-950 p-6 pb-0 flex flex-col pt-12">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg text-white">Tournaments</h3>
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Trophy className="w-4 h-4" />
                    </div>
                 </div>

                 {/* Bracket visual */}
                 <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-4 backdrop-blur-md">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded">Active</span>
                      <span className="text-[10px] text-slate-500">24 Teams</span>
                    </div>
                    <div className="text-sm font-bold text-white mb-3">Global Strikers League</div>
                    <div className="w-full h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
                      <div className="w-3/4 h-full bg-cyan-500"></div>
                    </div>
                 </div>

                 <div className="flex-1 space-y-4 pt-2">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl opacity-50">
                      <h4 className="font-bold text-sm text-white">Apex Legends Invitational</h4>
                      <p className="text-[10px] mt-1 text-slate-400">Starts in 2 days</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-900 uppercase">Trending</p>
                      <h4 className="font-bold text-sm text-white mt-1">Valorant Masters Cup</h4>
                      <button className="mt-3 w-full py-2 bg-white text-slate-900 text-xs font-bold rounded-lg shadow-sm">Join Now</button>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating element */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -left-8 md:-left-16 top-32 bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl">
              <p className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold mb-1">Live Results</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-xs text-white">TX</div>
                <div>
                  <p className="text-sm font-bold text-white leading-none mb-1">Team X-Fire</p>
                  <p className="text-[10px] text-slate-400 leading-none">Qualified for Finals</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
