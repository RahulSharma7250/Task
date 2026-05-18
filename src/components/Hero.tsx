import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play, Leaf, Home, Users, Briefcase, Fingerprint, Star } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[110vh] w-full flex flex-col justify-start pt-32 pb-40">
      {/* Animated Background Image & Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div style={{ y: y1 }} className="absolute inset-x-0 -top-[10%] h-[120%]">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="/images/hero_sec.jpeg"
            alt="Rural India Future"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surya-bg/90 via-surya-bg/60 lg:via-surya-bg/20 to-transparent z-10 w-full lg:w-2/3" />
          <div className="absolute inset-0 bg-gradient-to-t from-surya-bg via-transparent to-transparent z-10 h-1/2 bottom-0 top-auto" />
          <div className="absolute inset-0 bg-black/20 z-10" />

          {/* Soft sun glow effect */}
          <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-surya-gold/15 rounded-full blur-[150px] mix-blend-screen z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-surya-highlight/10 rounded-full blur-[120px] mix-blend-screen z-10 pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center">

        <div className="max-w-[800px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surya-highlight/30 bg-[#1e7a44]/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(139,195,74,0.15)] group hover:bg-[#1e7a44]/20 transition-colors cursor-pointer"
          >
            <Leaf className="w-3.5 h-3.5 text-surya-highlight group-hover:rotate-12 transition-transform" fill="currentColor" />
            <span className="text-[12px] font-semibold text-white/95 uppercase tracking-wider">सूर्यपुरा ग्राम विकास पोर्टल</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[38px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-heading font-bold leading-[1.05] tracking-tight mb-5"
          >
            सशक्त गाँव <br />
            समृद्ध <span className="text-surya-highlight text-glow-highlight relative inline-block">
              भारत
              <div className="absolute -bottom-2 left-0 w-full h-[5px] bg-surya-highlight rounded-full opacity-50 blur-[2px]"></div>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl font-medium leading-relaxed mb-8 text-shadow-sm"
          >
            शिक्षा, किसान, सड़क, डिजिटल पहचान और सतत विकास के
            माध्यम से हम बना रहे हैं एक बेहतर, आत्मनिर्भर और विकसित भारत।
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 relative z-30"
          >
            <button className="relative overflow-hidden px-6 py-3.5 bg-surya-primary hover:bg-surya-primary-hover text-white rounded-xl font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_30px_rgba(30,122,68,0.4)] hover:shadow-[0_0_40px_rgba(30,122,68,0.6)] group text-base border border-white/10 hover:-translate-y-1">
              <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out"></div>
              <span className="relative z-10">हमारी योजनाएं देखें</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            <button className="px-6 py-3.5 bg-white/5 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-2.5 transition-all duration-300 text-base group backdrop-blur-md hover:-translate-y-1">
              हमारे बारे में जानें
              <div className="w-6 h-6 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white transition-colors">
                <Play className="w-3 h-3 ml-0.5 group-hover:text-black transition-colors" fill="currentColor" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right Floating Card */}
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex absolute right-4 md:right-12 top-[8%] md:top-[60%] -translate-y-1/2 glass-panel !bg-[#060e0a]/40 p-3 md:p-5 rounded-[1rem] md:rounded-[1.5rem] max-w-[200px] md:max-w-[280px] flex-col gap-3 md:gap-4 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden group hover:border-surya-highlight/50 transition-colors duration-500 scale-[0.8] md:scale-100 origin-right z-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="w-full flex flex-col gap-3 md:gap-4"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-surya-highlight/0 via-surya-highlight/10 to-surya-highlight/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 flex gap-2 md:gap-3 items-start">
              <div className="mt-0.5 w-8 h-8 md:w-10 md:h-10 rounded-full bg-surya-highlight/10 border border-surya-highlight/30 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:border-surya-highlight/80 transition-colors duration-500">
                <Leaf className="w-4 h-4 md:w-5 md:h-5 text-surya-highlight" fill="currentColor" />
                <div className="absolute inset-0 bg-surya-highlight/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-[14px] md:text-[16px] tracking-wide">हमारा लक्ष्य</h4>
                <p className="text-white/70 text-[11px] md:text-[13px] mt-1 hidden md:block leading-relaxed font-medium">"हर गाँव का समग्र विकास, <br /> हर परिवार का सम्मान।"</p>
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-[1.25rem] bg-[#040906]/50 border border-surya-border/50 shadow-inner">
              <div className="flex -space-x-2 hidden md:flex">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-8 h-8 rounded-full border-2 border-[#040906] shadow-lg relative z-[10] hover:-translate-y-1 transition-transform" style={{ zIndex: 10 - i }} />
                ))}
              </div>
              <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                <span className="text-[16px] md:text-[18px] font-bold text-white">50K+</span>
                <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">लोग जुड़े हैं</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Gradient overlay to smooth out stats */}
      <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-surya-bg to-transparent z-20 pointer-events-none"></div>

      {/* Stats Bar (Glassmorphic) */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 z-30 w-full max-w-[1400px] px-6 lg:px-12"
      >
        <div className="glass-card rounded-3xl p-5 md:p-6 grid grid-cols-2 md:grid-cols-5 gap-y-6 md:gap-y-0 gap-x-4 lg:divide-x divide-surya-border shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-surya-highlight/50 to-transparent"></div>
          {[
            { icon: <Home className="w-5 h-5" />, num: "50+", text: "गाँव जुड़े", color: "text-surya-highlight", delay: 0.9 },
            { icon: <Users className="w-5 h-5" />, num: "25K+", text: "लाभार्थी", color: "text-white", delay: 1.0 },
            { icon: <Briefcase className="w-5 h-5" />, num: "120+", text: "परियोजनाएँ", color: "text-surya-gold", delay: 1.1 },
            { icon: <Fingerprint className="w-5 h-5" />, num: "75%", text: "डिजिटल पहचान", color: "text-surya-gold", delay: 1.2 },
            { icon: <Star className="w-5 h-5" />, num: "100+", text: "सफलताएँ", color: "text-surya-highlight", delay: 1.3, isLast: true }
          ].map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              key={i}
              className={`flex items-center gap-3 lg:gap-4 px-2 lg:px-6 justify-center group cursor-default ${stat.isLast ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center ${stat.color} shadow-[inset_0_1px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shrink-0`}>
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[24px] font-bold font-heading leading-tight">{stat.num}</span>
                <span className="text-[11px] md:text-[12px] text-white/60 font-semibold tracking-wide whitespace-nowrap">{stat.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}