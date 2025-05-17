import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/windmill.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const windmillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 500, 0);
        const translateY = scrollY * 0.3;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    const observeWindmill = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-windmill');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (windmillRef.current) {
      observeWindmill.observe(windmillRef.current);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observeWindmill.disconnect();
    };
  }, []);
  
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center py-20 md:py-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div ref={heroRef} className="transition-all duration-300 ease-out">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-normal mb-6 text-gray-900">
  Betaalbare <span className="text-orange-500">websites</span> voor ondernemers in Limburg en Nederland
</h1>
<p className="text-base sm:text-lg text-gray-700 mb-6 max-w-xl leading-normal">
  Voor ondernemers die online zichtbaar willen zijn met een snelle, moderne en betaalbare website. Gemaakt zonder gedoe, gewoon goed geregeld.
</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-orange-700 hover:bg-orange-800 text-white font-semibold py-4 px-6 rounded-lg hover-animate flex items-center justify-center text-lg"
              >
                Vraag een gratis demo aan
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link 
                to="/projecten-Tarieven" 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-6 rounded-lg border border-gray-300 hover-animate flex items-center justify-center text-lg"
              >
                Bekijk projecten
              </Link>
            </div>
          </div>
          
          <div 
            ref={windmillRef}
            className="relative h-[540px] flex items-center justify-center mt-8 lg:mt-0 opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="window">
              <div className="land"></div>
              <div className="grass grass-1"></div>
              <div className="grass grass-2"></div>
              <div className="windmill">
                <div className="windmill-window"></div>
                <div className="pillar"></div>
                <div className="dome">
                  <div className="dome-window"></div>
                </div>
                <div className="blades">
                  <div className="blade blade-1"></div>
                  <div className="blade blade-2"></div>
                  <div className="blade blade-3"></div>
                  <div className="blade blade-4"></div>
                </div>
                <div className="ramp">
                  <div className="grill"></div>
                  <div className="hook hook-1"></div>
                  <div className="hook hook-2"></div>
                  <div className="hook hook-3"></div>
                  <div className="hook hook-4"></div>
                </div>
              </div>
              <div className="sun"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;