import { Leaf, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-surya-bg to-black pt-16 z-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-12 xl:gap-8 pb-12 relative">
          {/* Subtle gradient divider instead of a hard border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          {/* Logo & Description */}
          <div className="xl:col-span-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fbc02d] to-[#e65100] flex items-center justify-center p-[1px] relative overflow-hidden shadow-[0_0_15px_rgba(251,192,45,0.3)]">
                 <div className="absolute inset-0 bg-gradient-to-t from-surya-bg to-transparent opacity-60 z-0"></div>
                 <Leaf className="w-5 h-5 text-white z-10 drop-shadow-md" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none tracking-wide text-white">सूर्यपुरा</span>
                <span className="text-[10px] text-white/90 font-medium tracking-widest mt-1 uppercase gold-gradient-text">ग्राम विकास पोर्टल</span>
              </div>
            </div>
            <p className="text-white/60 text-[12px] leading-relaxed mb-6 font-medium">
              गाँव के समग्र विकास के लिए समर्पित एक डिजिटल पहल।
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Youtube, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-8 h-8 rounded-full border border-surya-border flex items-center justify-center text-white/60 hover:text-white hover:border-surya-primary hover:bg-surya-primary-hover transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-semibold mb-5 flex items-center gap-2">त्वरित लिंक</h4>
            <ul className="flex flex-col gap-3 text-white/60 text-[13px]">
              <li><a href="#" className="hover:text-surya-highlight transition-colors">होम</a></li>
              <li><a href="#" className="hover:text-surya-highlight transition-colors">हमारे बारे में</a></li>
              <li><a href="#" className="hover:text-surya-highlight transition-colors">योजनाएं</a></li>
              <li><a href="#" className="hover:text-surya-highlight transition-colors">सेवाएँ</a></li>
              <li><a href="#" className="hover:text-surya-highlight transition-colors">समाचार</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-semibold mb-5">उपयोगी लिंक</h4>
            <ul className="flex flex-col gap-3 text-white/60 text-[13px]">
              <li><a href="#" className="hover:text-surya-highlight transition-colors">गैलरी</a></li>
              <li><a href="#" className="hover:text-surya-highlight transition-colors">डिजिटल सेवा</a></li>
              <li><a href="#" className="hover:text-surya-highlight transition-colors">शिकायत निवारण</a></li>
              <li><a href="#" className="hover:text-surya-highlight transition-colors">डाउनलोड</a></li>
              <li><a href="#" className="hover:text-surya-highlight transition-colors">गोपनीयता नीति</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-white font-semibold mb-5">संपर्क करें</h4>
             <ul className="flex flex-col gap-4 text-white/60 text-[13px]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 opacity-80" />
                <span>सूर्यपुरा, भारत</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 opacity-80" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 opacity-80" />
                <span>info@suryapura.gov.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="xl:col-span-1 flex flex-col">
            <h4 className="text-white font-semibold mb-5">न्यूज़लेटर सब्सक्राइब करें</h4>
            <p className="text-white/60 text-[12px] mb-5 leading-relaxed">नवीनतम अपडेट और योजनाओं की जानकारी पाने के लिए सब्सक्राइब करें।</p>
            <div className="flex bg-[#0a1813] rounded-xl border border-white/10 focus-within:border-surya-highlight transition-all duration-300 p-1.5 pr-1.5 h-12 shadow-inner">
              <input type="email" placeholder="अपना ईमेल दर्ज करें..." className="bg-transparent outline-none px-4 text-[13px] w-full text-white placeholder:text-white/30" />
              <button className="bg-surya-highlight hover:bg-[#7cb342] text-[#040906] w-10 shrink-0 rounded-lg flex items-center justify-center transition-colors shadow-lg">
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/50">
          <p>© 2024 सूर्यपुरा ग्राम विकास पोर्टल | सभी अधिकार सुरक्षित</p>
          <div className="flex items-center gap-1">
            Made with <span className="text-red-500 text-sm mx-1">❤</span> for Rural India
          </div>
        </div>
      </div>
    </footer>
  );
}
