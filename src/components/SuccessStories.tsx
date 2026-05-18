import { motion } from 'motion/react';
import { Play, ChevronLeft, ChevronRight, Leaf } from 'lucide-react';
const stories = [
  {
    id: 1,
    title: 'रामलाल जी - प्रगतिशील किसान',
    subtitle: 'नई तकनीक से बढ़ाई 3 गुना उपज',
    image: '/images/farmer1.jpeg',
  },
  {
    id: 2,
    title: 'सूर्यपुरा की बेटियाँ',
    subtitle: 'शिक्षा से बदलती नई पहचान',
    image: '/images/women_school.jpeg',
  },
  {
    id: 3,
    title: 'महिला स्वयं सहायता समूह',
    subtitle: 'स्वरोजगार से आत्मनिर्भरता की ओर',
    image: '/images/women_power.jpeg',
  },
  {
    id: 4,
    title: 'डिजिटल सेवा केंद्र',
    subtitle: 'गाँव-गाँव डिजिटल क्रांति',
    image: '/images/panch.jpeg',
  }
];

export function SuccessStories() {
  return (
    <section id="success" className="py-24 relative z-20 bg-[#06110d] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 w-full justify-center">
            <div className="flex items-center text-surya-highlight gap-1"><Leaf className="w-4 h-4 transform -scale-x-100 drop-shadow-[0_0_10px_rgba(139,195,74,0.5)]"/></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">सफलता की कहानियाँ</h2>
            <div className="flex items-center text-surya-highlight gap-1"><Leaf className="w-4 h-4 drop-shadow-[0_0_10px_rgba(139,195,74,0.5)]"/></div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full lg:px-16 mt-4">
           {/* Navigation Prev */}
           <button className="absolute left-0 lg:left-2 top-1/2 -translate-y-[calc(50%+10px)] w-12 h-12 rounded-full border border-surya-highlight/30 bg-[#06110d]/80 backdrop-blur z-20 hidden md:flex items-center justify-center hover:bg-surya-highlight hover:text-surya-bg hover:border-surya-highlight transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer">
             <ChevronLeft className="w-6 h-6 text-white hover:text-surya-bg transition-colors" />
           </button>

           {/* Gradient Masks */}
           <div className="absolute left-0 lg:left-16 top-0 bottom-0 w-10 bg-gradient-to-r from-[#06110d] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 lg:right-16 top-0 bottom-0 w-10 bg-gradient-to-l from-[#06110d] to-transparent z-10 pointer-events-none"></div>

           <div className="flex gap-4 md:gap-6 overflow-x-auto pb-10 pt-4 px-2 lg:px-4 snap-x snap-mandatory scrollbar-hide w-full" style={{ scrollbarWidth: 'none' }}>
             {stories.map((story, i) => (
               <motion.div
                 key={story.id}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                 className="group relative w-[85vw] md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.125rem)] lg:flex-1 h-[420px] rounded-[1.5rem] overflow-hidden snap-center cursor-pointer border border-surya-border shadow-2xl flex-shrink-0"
               >
                 <img 
                   src={story.image} 
                   alt={story.title}
                   referrerPolicy="no-referrer"
                   className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#040a08] via-[#040a08]/40 to-transparent"></div>
                 
                 {/* Play Button Center */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full border border-white/60 bg-black/30 backdrop-blur-md flex items-center justify-center group-hover:bg-surya-highlight group-hover:border-surya-highlight transition-all duration-500 transform group-hover:scale-110 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                       <Play className="w-5 h-5 text-white group-hover:text-black ml-1 transition-colors" fill="currentColor" />
                    </div>
                 </div>

                 {/* Content Bottom */}
                 <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                    <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-heading font-bold mb-2 text-white group-hover:text-surya-highlight transition-colors leading-snug drop-shadow-md">{story.title}</h3>
                    <p className="text-[14px] text-white/90 font-medium drop-shadow-md">{story.subtitle}</p>
                 </div>
                 
                 {/* Hover Glow Border */}
                 <div className="absolute inset-0 border-2 border-surya-highlight rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>
               </motion.div>
             ))}
           </div>

           {/* Navigation Next */}
           <button className="absolute right-0 lg:right-2 top-1/2 -translate-y-[calc(50%+10px)] w-12 h-12 rounded-full border border-surya-highlight/30 bg-[#06110d]/80 backdrop-blur z-20 hidden md:flex items-center justify-center hover:bg-surya-highlight hover:text-surya-bg hover:border-surya-highlight transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer">
             <ChevronRight className="w-6 h-6 text-white hover:text-surya-bg transition-colors" />
           </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-4">
           <div className="w-3 h-3 rounded-full bg-surya-highlight shadow-[0_0_10px_rgba(139,195,74,0.5)]"></div>
           <div className="w-3 h-3 rounded-full bg-surya-surface-light border border-surya-border"></div>
           <div className="w-3 h-3 rounded-full bg-surya-surface-light border border-surya-border"></div>
        </div>

      </div>
    </section>
  );
}
