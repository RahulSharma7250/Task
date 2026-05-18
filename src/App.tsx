import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Pillars } from './components/Pillars';
import { SuccessStories } from './components/SuccessStories';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-surya-bg text-white selection:bg-surya-primary selection:text-white overflow-hidden">
      <div className="fixed inset-0 z-0 bg-surya-bg pointer-events-none"></div>
      
      <Navbar />

      
      <main>
        <Hero />
        <Pillars />
        <Stats />
        <SuccessStories />
        <Roadmap />
      </main>
      
      <Footer />
    </div>
  );
}
