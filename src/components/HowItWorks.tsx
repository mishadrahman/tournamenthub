import { motion } from 'motion/react';
import { Smartphone, Target, LineChart } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "1. Install & Create",
    description: "Download the app, create your organizer profile, and set up your first tournament in under 2 minutes."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "2. Invite & Seed",
    description: "Share the join link with participants. Once everyone is in, auto-generate your brackets or manually seed teams."
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "3. Play & Track",
    description: "Participants play their matches and report scores. Brackets advance automatically to crown the champion."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-6">
         <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">From zero to tournament in 3 steps</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 -translate-y-1/2 z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-[#020617] border-2 border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
              <p className="text-slate-400 max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
