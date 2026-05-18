import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'होम', href: '#hero', active: true },
    { name: 'हमारे बारे में', href: '#about', active: false },
    { name: 'योजनाएं', href: '#plans', active: false },
    { name: 'सेवाएँ', href: '#services', active: false },
    { name: 'समाचार', href: '#news', active: false },
    { name: 'सफलताएँ', href: '#success', active: false },
    { name: 'संपर्क करें', href: '#contact', active: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-[#060e0a]/90 backdrop-blur-xl py-4" : "bg-gradient-to-b from-black/60 to-transparent py-6"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fbc02d] to-[#e65100] flex items-center justify-center p-[1px] relative overflow-hidden transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(251,192,45,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-t from-surya-bg to-transparent opacity-60 z-0"></div>
            <Leaf className="w-5 h-5 text-white z-10 drop-shadow-md group-hover:rotate-12 transition-transform duration-500" fill="currentColor" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl leading-none tracking-wide text-white drop-shadow-md">सूर्यपुरा</span>
            <span className="text-[10px] text-white/90 font-medium tracking-widest mt-1 uppercase gold-gradient-text">ग्राम विकास पोर्टल</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-[14px] font-semibold transition-colors duration-300 hover:text-surya-highlight whitespace-nowrap",
                link.active ? "text-surya-highlight nav-active" : "text-white/95"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="relative overflow-hidden bg-surya-primary hover:bg-surya-primary-hover text-white px-6 py-2.5 rounded-xl text-[14px] font-bold transition-all shadow-[0_4px_20px_0_rgba(30,122,68,0.5)] hover:shadow-[0_4px_25px_0_rgba(30,122,68,0.7)] hover:-translate-y-0.5 group">
            <div className="absolute inset-0 bg-white/20 -translate-x-[150%] skew-x-[-30deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-out"></div>
            <span className="relative z-10">पंचायत लॉगिन</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-12 h-12 rounded-full border border-surya-border/50 flex items-center justify-center bg-surya-surface/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#060e0a]/95 backdrop-blur-xl absolute top-full left-0 right-0 border-t border-surya-highlight/10 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-xl font-medium transition-colors",
                    link.active ? "text-surya-highlight" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-surya-border mt-2">
                <button className="w-full bg-surya-primary text-white px-6 py-4 rounded-xl font-bold shadow-lg">
                  पंचायत लॉगिन
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
