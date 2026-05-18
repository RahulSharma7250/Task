import { motion } from 'motion/react';
import { Target, Users, MapPin, Map, CheckCircle, Leaf } from 'lucide-react';
const impactStats = [
  { icon: <Target className="w-6 h-6" />, num: "2030", text: "तक का लक्ष्य" },
  { icon: <Users className="w-6 h-6" />, num: "1M+", text: "लाभार्थी" },
  { icon: <MapPin className="w-6 h-6" />, num: "500+", text: "गाँव" },
  { icon: <Map className="w-6 h-6" />, num: "1000+", text: "परियोजनाएँ" },
  { icon: <CheckCircle className="w-6 h-6" />, num: "98%", text: "संतुष्टि दर" }
];

export function Stats() {
  return (
    <section id="impact" className="relative z-20 overflow-hidden bg-[#0a1512]">
      {/* Background image constrained to right side using absolute positioning and mask/gradient */}
      <div className="absolute inset-0 z-0 flex justify-end overflow-hidden">
        <div className="w-full lg:w-3/5 h-full relative">
          <img
            src="/images/statsbg.png"
            alt="Happy rural children"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-[10%] brightness-[0.8]"
          />
          {/* Gradient to blend image into the solid dark background on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1512] via-[#0a1512]/60 to-transparent"></div>
          {/* Bottom gradient to blend seamlessly vertically if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1512] via-transparent to-[#0a1512]/30"></div>
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10 py-16">
        <div className="flex flex-col items-start w-full lg:w-[65%]">
          {/* Header (Left Aligned) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="flex items-center text-surya-highlight">
              <div className="h-[2px] w-6 bg-surya-highlight/80 rounded-full mr-2"></div>
              <Leaf className="w-4 h-4 transform -scale-x-100" />
              <Leaf className="w-5 h-5 ml-1 transform border-green-500 scale-x-[-1]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-wide">हमारा प्रभाव</h2>
            <div className="flex items-center text-surya-highlight">
              <Leaf className="w-5 h-5 mr-1" />
              <Leaf className="w-4 h-4" />
              <div className="h-[2px] w-6 bg-surya-highlight/80 rounded-full ml-2"></div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-10 lg:gap-10">
            {impactStats.map((stat, i) => (
              <div key={i} className="flex items-center relative w-full justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="flex flex-col items-center text-center group cursor-default w-full"
                >
                  {/* Icon */}
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-[1.5px] border-surya-highlight/60 border-dashed flex items-center justify-center mb-4 group-hover:border-surya-highlight transition-colors duration-300">
                    <div className="absolute inset-1 rounded-full border border-surya-highlight/30 bg-surya-bg/80 flex items-center justify-center shadow-[inset_0_0_15px_rgba(139,195,74,0.15)] group-hover:bg-[#0f241a] transition-colors duration-300">
                      <div className="text-surya-highlight drop-shadow-[0_0_8px_rgba(139,195,74,0.5)] transform scale-90 md:scale-100">
                        {stat.icon}
                      </div>
                    </div>
                  </div>

                  {/* Number */}
                  <div className="text-xl md:text-[28px] font-heading font-bold mb-1 leading-tight text-white tracking-wide">
                    {stat.num}
                  </div>

                  {/* Label text */}
                  <div className="text-[11px] md:text-[13px] text-white/80 font-medium tracking-wide">
                    {stat.text}
                  </div>
                </motion.div>

                {/* Divider (except after the last item) */}
                {i < impactStats.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/20 hidden lg:block -mr-5"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
