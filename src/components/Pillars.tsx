import { motion } from 'motion/react';
import { Leaf, ArrowRight, BookOpen, Route, Fingerprint, Landmark } from 'lucide-react';
import { cn } from '../lib/utils';
const pillars = [
  {
    title: 'किसान सशक्तिकरण',
    subtitle: 'आधुनिक तकनीक, बीज, सिंचाई और बाजार से सीधा जुड़ाव',
    image: '/images/farmer.jpeg',
    icon: <Leaf className="w-5 h-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] text-white" />,
    gradient: 'from-[#8bc34a] to-[#689f38]'
  },
  {
    title: 'शिक्षा परिवर्तन',
    subtitle: 'हर बच्चे को बेहतर शिक्षा और डिजिटल लर्निंग की सुविधा',
    image: '/images/school.jpeg',
    icon: <BookOpen className="w-5 h-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] text-white" />,
    gradient: 'from-[#29b6f6] to-[#0277bd]'
  },
  {
    title: 'सड़क एवं आधारभूत ढांचा',
    subtitle: 'हर गाँव तक पक्की सड़क और बेहतर यातायात सुविधा',
    image: '/images/road.jpeg',
    icon: <Route className="w-5 h-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] text-white" />,
    gradient: 'from-[#ffb74d] to-[#e65100]'
  },
  {
    title: 'डिजिटल पहचान',
    subtitle: 'हर ग्रामीण को डिजिटल पहचान और ऑनलाइन सुविधाएँ',
    image: '/images/digital.jpeg',
    icon: <Fingerprint className="w-5 h-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] text-white" />,
    gradient: 'from-[#b39ddb] to-[#4527a0]'
  },
  {
    title: 'पंचायत सेवाएँ',
    subtitle: 'हर ग्रामीण तक त्वरित और ऑनलाइन पंचायत सेवाएँ',
    image: '/images/panchayat.jpeg',
    icon: <Landmark className="w-5 h-5 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] text-white" />,
    gradient: 'from-[#4db6ac] to-[#00695c]'
  }
];

export function Pillars() {
  return (
    <section id="pillars" className="pt-32 pb-24 relative z-20 bg-surya-bg">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/images/pillarbg.jpeg"
          alt="Pillars Background" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[30%] brightness-[0.4] opacity-50 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surya-bg via-transparent to-surya-bg"></div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14 relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-surya-highlight/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3 relative z-10"
          >
            <Leaf className="w-5 h-5 text-surya-highlight transform -scale-x-100 drop-shadow-[0_0_15px_rgba(139,195,74,0.6)]" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight drop-shadow-md">विकास के मुख्य स्तंभ</h2>
            <Leaf className="w-5 h-5 text-surya-primary drop-shadow-[0_0_15px_rgba(30,122,68,0.6)]" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#a0c5b3] font-medium text-base tracking-wide uppercase relative z-10"
          >
            हमारा संकल्प - हर गाँव से विकास
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col rounded-[1.5rem] overflow-hidden border border-surya-border/50 bg-[#0a1813] relative h-[420px] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Image Background */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-transparent z-10 transition-colors group-hover:bg-surya-highlight/10 blend-overlay"></div>
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] brightness-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040a08] via-[#040a08]/70 to-transparent opacity-90 z-10" />
              </div>

              {/* Bottom Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-20">
                <h3 className="text-[22px] font-heading font-bold mb-2 leading-tight text-white group-hover:text-surya-highlight transition-colors duration-300 drop-shadow-md">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-white/80 mb-4 line-clamp-3 leading-relaxed font-medium drop-shadow-md">
                  {pillar.subtitle}
                </p>
                <div className="flex items-center gap-2 text-[14px] font-bold text-surya-highlight relative overflow-hidden group/link mt-auto w-max cursor-pointer">
                  और जानें
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1.5 transition-transform" />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-surya-highlight -translate-x-[101%] group-hover/link:translate-x-0 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Overlapping Icon Badges */}
              <div className={cn(
                "absolute top-6 left-6 w-12 h-12 rounded-[14px] shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2)] flex items-center justify-center z-20 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-500 ease-out bg-gradient-to-br",
                pillar.gradient
              )}>
                <div className="absolute inset-[1px] rounded-[13px] border border-white/20 mix-blend-overlay"></div>
                <div className="relative z-10 flex items-center justify-center">
                  {pillar.icon}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
