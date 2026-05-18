import { motion } from 'motion/react';
import { Target, Lightbulb, Wifi, Home, Leaf, CheckCircle, TrendingUp } from 'lucide-react';
import { CTA } from './CTA';

const timeline = [
  { year: '2024', icon: <Target className="w-5 h-5" />, title: 'डिजिटल गाँव', subtext: 'अभियान', active: true },
  { year: '2025', icon: <Lightbulb className="w-5 h-5" />, title: 'स्मार्ट शिक्षा', subtext: 'मिशन', active: true },
  { year: '2026', icon: <Wifi className="w-5 h-5" />, title: 'हर घर इंटरनेट', subtext: 'योजना', active: false },
  { year: '2027', icon: <Home className="w-5 h-5" />, title: 'आत्मनिर्भर गाँव', subtext: 'परियोजना', active: false },
  { year: '2028', icon: <Leaf className="w-5 h-5" />, title: 'ग्रीन एनर्जी', subtext: 'विकास', active: false },
  { year: '2029', icon: <CheckCircle className="w-5 h-5" />, title: 'स्वच्छ सूर्यपुरा', subtext: 'विस्तार', active: false },
  { year: '2030', icon: <TrendingUp className="w-5 h-5" />, title: 'विकसित भारत', subtext: 'संकल्प', active: false },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="pt-24 relative z-20 bg-surya-bg border-t border-surya-highlight/10">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/roadmapbg.jpeg"
          alt="Roadmap Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[30%] brightness-[0.4] opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surya-bg via-transparent to-surya-bg"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-16 w-full justify-center">
          <div className="flex items-center text-surya-highlight gap-1"><Leaf className="w-5 h-5 transform -scale-x-100 drop-shadow-[0_0_10px_rgba(139,195,74,0.5)]" /></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">आगामी योजनाएं</h2>
          <div className="flex items-center text-surya-highlight gap-1"><Leaf className="w-5 h-5 drop-shadow-[0_0_10px_rgba(139,195,74,0.5)]" /></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[1200px] mx-auto mt-8">

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 -mt-4 w-[2px] bg-surya-border -translate-x-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-y-12 md:gap-y-0 relative z-10 w-full">
            {timeline.map((node, i) => (
              <motion.div
                key={node.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group cursor-default relative w-full"
              >
                {/* Connecting Line Desktop (except for last item) */}
                {i < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-[24px] z-0" style={{ left: 'calc(50% + 28px)', right: 'calc(-50% + 28px)' }}>
                    <div className="w-full h-[2px] bg-surya-border"></div>
                    {/* If both current and next are active, show active line */}
                    {node.active && timeline[i + 1]?.active && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.2) }}
                        className="absolute inset-0 h-[2px] bg-surya-highlight origin-left shadow-[0_0_10px_rgba(139,195,74,0.8)]"
                      />
                    )}
                  </div>
                )}

                {/* Icon Container */}
                <div className="mb-4 relative z-10">
                  <div className={`w-12 h-12 mx-auto flex items-center justify-center transition-all duration-500 rounded-full border border-surya-border/50 ${node.active ? 'bg-transparent text-surya-highlight shadow-[0_0_25px_rgba(139,195,74,0.3)] scale-110 border-surya-highlight' : 'bg-transparent text-surya-gold opacity-80 group-hover:scale-110 group-hover:border-surya-gold/50 group-hover:opacity-100'}`}>
                    {node.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className={`text-[20px] md:text-[24px] font-heading font-bold mb-1 transition-colors duration-300 ${node.active ? 'text-white text-glow-highlight' : 'text-white/80 group-hover:text-surya-gold'}`}>
                  {node.year}
                </h3>
                <p className="text-[12px] font-medium text-white/60 leading-relaxed uppercase tracking-wider">
                  <span className="text-white/90 font-bold block mb-1 tracking-normal">{node.title}</span> {node.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section included inside Roadmap */}
      <CTA />
    </section>
  );
}
