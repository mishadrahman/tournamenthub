import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Tournament Hub completely changed how we run our weekend smash weeklies. The automated brackets alone save me hours of headaches.",
    name: "Alex Rivera",
    role: "Local Esports Organizer",
    initial: "A"
  },
  {
    quote: "The push notifications for upcoming matches are a game changer. No more yelling across the venue trying to find missing players.",
    name: "Sarah Chen",
    role: "Varsity Coach",
    initial: "S"
  },
  {
    quote: "Best mobile app for tournament tracking. We use it for our corporate ping pong ladder and the leaderboard keeps everyone engaged.",
    name: "Marcus Johnson",
    role: "Community Manager",
    initial: "M"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Loved by thousands of organizers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative shadow-xl"
            >
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">"{t.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-lg">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
