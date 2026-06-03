import { Check, X } from 'lucide-react';

const features = [
  "Bracket Generation",
  "Real-time Standings",
  "Mobile Accessibility",
  "Push Notifications",
  "Participant Self-Registration",
  "Automated Scheduling",
  "Dispute Resolution Tools"
];

export default function Comparison() {
  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Why switch to Tournament Hub?</h2>
          <p className="text-slate-400 text-lg">Stop wrestling with complicated spreadsheets and manual updates.</p>
        </div>

        <div className="bg-[#020617] rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.05)]">
          <div className="grid grid-cols-3 bg-slate-950 p-6 border-b border-white/10">
            <div className="font-bold text-slate-300">Feature</div>
            <div className="text-center font-bold text-white">Tournament Hub</div>
            <div className="text-center font-bold text-slate-500">Spreadsheets</div>
          </div>
          
          <div className="divide-y divide-white/5">
            {features.map((feature, i) => (
              <div key={i} className="grid grid-cols-3 p-6 hover:bg-white/[0.02] transition-colors items-center">
                <div className="font-medium text-slate-300">{feature}</div>
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-8 bg-[#020617] border-t border-cyan-500/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>
            <h4 className="text-xl font-bold text-white mb-2 relative z-10">Save up to 10 hours per tournament</h4>
            <p className="text-slate-400 relative z-10">Focus on the community, let us handle the logistics.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
