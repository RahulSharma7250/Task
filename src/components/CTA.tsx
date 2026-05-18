import { motion } from 'motion/react';
import { ArrowRight, Shield, Cpu, Users, TrendingUp } from 'lucide-react';
export function CTA() {
  return (
    <div className="relative pb-12 pt-12 z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="relative rounded-[2rem] overflow-hidden border border-surya-highlight/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
         >
          {/* Background */}
          <div className="absolute inset-0">
             {/* Base dark brown/green */}
             <div className="absolute inset-0 bg-[#161a10] z-0"></div>
             {/* Sunset glow effect from right */}
             <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-[#d46a2a]/40 via-[#8bc34a]/10 to-transparent mix-blend-screen z-0"></div>
             <div className="absolute inset-y-0 right-1/4 w-1/2 bg-[#fbc02d]/10 blur-[120px] mix-blend-screen z-0"></div>
             
             {/* Forest Image */}
             <img 
                src="/images/ctabg.png" 
                className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
                alt="bg"
                referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#040a08]/90 via-[#040a08]/60 to-transparent z-0"></div>
          </div>

          <div className="relative z-10 p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="lg:w-2/5 text-left relative z-10">
              <span className="text-white font-semibold mb-2 block tracking-wider uppercase text-[11px]">आइए, मिलकर बनाएं एक</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4 leading-tight text-glow-highlight">
                सशक्त और समृद्ध <br/><span className="text-surya-gold">सूर्यपुरा</span>
              </h2>
              <p className="text-white/80 mb-6 font-medium text-sm leading-relaxed">आपका एक कदम, गाँव के समग्र विकास की ओर। जुड़ें और बदलाव के साक्षी बनें।</p>
              
              <button className="relative overflow-hidden px-8 py-3 bg-surya-primary hover:bg-surya-primary-hover text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_10px_30px_rgba(30,122,68,0.4)] hover:shadow-[0_10px_40px_rgba(30,122,68,0.6)] group hover:-translate-y-1 text-[15px]">
                <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out"></div>
                <span className="relative z-10">हमसे जुड़ें</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </div>

            {/* Right Badges in a single row */}
            <div className="lg:w-3/5 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full z-10">
               {[
                 { title: 'पारदर्शिता', icon: <Shield className="w-6 h-6"/> },
                 { title: 'तकनीक', icon: <Cpu className="w-6 h-6"/> },
                 { title: 'भागीदारी', icon: <Users className="w-6 h-6"/> },
                 { title: 'विकास', icon: <TrendingUp className="w-6 h-6"/> },
               ].map((badge, i) => (
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    key={i} 
                    className="flex flex-col items-center gap-4 group cursor-default"
                  >
                    <div className="w-[70px] h-[70px] relative flex items-center justify-center">
                       {/* Badge Shape Background */}
                       <div className="absolute inset-0 border-[1.5px] border-surya-gold/30 bg-[#040906]/80 rounded-full group-hover:border-surya-gold group-hover:bg-surya-gold/20 transition-all duration-500 backdrop-blur-md shadow-[0_0_20px_rgba(251,192,45,0.15)] group-hover:shadow-[0_0_30px_rgba(251,192,45,0.4)]"></div>
                       
                       {/* Outer rotating dashed ring */}
                       <motion.div 
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-[-4px] border border-dashed border-surya-gold/40 rounded-full pointer-events-none group-hover:border-surya-gold/80 transition-colors duration-500"
                       ></motion.div>
                       
                       {/* Inner rotating ring (opposite direction) */}
                       <motion.div 
                          animate={{ rotate: [360, 0] }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-[4px] border-[1px] border-dotted border-white/30 rounded-full pointer-events-none group-hover:border-white/60 transition-colors duration-500"
                       ></motion.div>

                       {/* Icon */}
                       <motion.div 
                         whileHover={{ scale: 1.15 }}
                         className="relative z-10 text-white group-hover:text-surya-gold transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(251,192,45,0.8)]"
                       >
                         {badge.icon}
                       </motion.div>
                    </div>
                    <span className="text-white/95 font-bold text-[13px] uppercase tracking-wider group-hover:text-surya-gold transition-colors duration-300 drop-shadow-md">{badge.title}</span>
                 </motion.div>
               ))}
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
