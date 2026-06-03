import { motion } from 'motion/react';
import { LayoutGrid, Users, Trophy, Share2, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: "Auto-Generate Brackets",
    description: "Instantly create single, double elimination, or round-robin tournaments with a tap."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Management",
    description: "Easily register participants, manage rosters, and assign seeds or random placements."
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Real-time Standings",
    description: "Leaderboards and brackets update instantly as match results are reported."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Match Scheduling",
    description: "Automated match scheduling with push notifications for participating teams."
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "One-Click Sharing",
    description: "Broadcast your tournament brackets to social media or via public read-only links."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Administration",
    description: "Granular admin roles. Assign moderators to help report scores and resolve disputes."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#020617] border-y border-white/5">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-3">Power Features</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Everything you need to host like a pro</h3>
          <p className="text-slate-400 text-lg">Leave the spreadsheets behind. Our platform automates the busywork so you can focus on the competition.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
