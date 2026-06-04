import { motion } from 'motion/react';
import liveBracketImg from '../assets/images/live_bracket.png';
import dashboardImg from '../assets/images/dashboard.png';
import teamStatsImg from '../assets/images/team_stats.png';

const screenshots = [
  { id: 1, src: dashboardImg, alt: 'Tournament Dashboard' },
  { id: 2, src: liveBracketImg, alt: 'Live Bracket View' },
  { id: 3, src: teamStatsImg, alt: 'Team Statistics' },
  { id: 4, src: dashboardImg, alt: 'Upcoming Matches' }, // Reusing for flow
  { id: 5, src: liveBracketImg, alt: 'Live Bracket View' } // Reusing for flow
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-3">Sleek Interface</h2>
        <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Designed for mobile speed</h3>
      </div>

      {/* Horizontal scrolling showcase using simple flex + overflow */}
      <div className="flex gap-8 px-6 lg:px-20 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar">
        {screenshots.map((screen, index) => (
          <motion.div 
            key={screen.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-none snap-center w-[280px] h-[580px] bg-slate-900 rounded-[45px] border-[8px] border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative overflow-hidden"
          >
            <img 
              src={screen.src} 
              alt={screen.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Phone notch UI overlay element */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-end pb-1 bg-gradient-to-b from-black/60 to-transparent">
              <div className="w-1/3 h-5 bg-black rounded-b-xl"></div>
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
