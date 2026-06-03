import { motion } from 'motion/react';

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-3">Sleek Interface</h2>
        <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Designed for mobile speed</h3>
      </div>

      {/* Horizontal scrolling showcase using simple flex + overflow */}
      <div className="flex gap-8 px-6 lg:px-20 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-none snap-center w-[280px] h-[580px] bg-slate-900 rounded-[45px] border-[8px] border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden"
          >
            {/* Simple abstract mockups for screenshots */}
            <div className="absolute inset-0 bg-slate-950 p-5 flex flex-col">
              <div className="h-6 flex justify-center mb-4 text-xs font-bold text-slate-500">9:41</div>
              
              {i === 1 && (
                <>
                  <div className="text-xl font-bold text-white mb-2">My Tournaments</div>
                  <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 p-4 border border-white/5">
                     <div className="w-10 h-10 bg-cyan-500 rounded-lg mb-2"></div>
                     <div className="w-3/4 h-4 bg-white/20 rounded mb-2"></div>
                     <div className="w-1/2 h-3 bg-white/10 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-16 bg-white/5 rounded-xl border border-white/5"></div>
                    <div className="h-16 bg-white/5 rounded-xl border border-white/5"></div>
                  </div>
                </>
              )}
              {i === 2 && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-white/10"></div>
                    <div className="text-lg font-bold text-white">Bracket View</div>
                  </div>
                  <div className="flex-1 rounded-2xl border border-white/10 relative">
                     <div className="absolute top-10 left-4 w-24 h-10 bg-white/10 rounded-md border border-white/20"></div>
                     <div className="absolute top-28 left-4 w-24 h-10 bg-white/10 rounded-md border border-white/20"></div>
                     <div className="absolute top-[76px] left-[110px] w-24 h-10 bg-cyan-500/30 rounded-md border border-cyan-500/50"></div>
                     
                     {/* Lines */}
                     <div className="absolute top-[60px] left-[105px] w-3 h-8 border-t border-r border-white/20"></div>
                     <div className="absolute top-[92px] left-[105px] w-3 h-10 border-b border-r border-white/20"></div>
                  </div>
                </>
              )}
              {i > 2 && (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-slate-800 animate-pulse"></div>
                  <div className="w-3/4 h-6 bg-slate-800 rounded animate-pulse"></div>
                  <div className="w-1/2 h-4 bg-slate-800 rounded animate-pulse"></div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
