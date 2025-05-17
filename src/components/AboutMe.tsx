import React, { useEffect, useRef } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const AboutMe: React.FC = () => {
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    paragraphRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-24">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-100 shadow-xl mx-auto">
                  <img
                    src="/about me/Aboutme-picture.webp"
                    alt="Kay Huybreghs - Webdesigner en eigenaar van KHCustomWeb"
                    className="w-full h-full object-cover object-top"
                    width="256"
                    height="256"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-orange-500 mb-4">4+ jaar ervaring in professioneel webdesign</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://www.instagram.com/khcustomweb/?igsh=OWhndTZzYTlsNTR3&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <Instagram size={24} />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="https://www.fiverr.com/khwebdesign"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <ExternalLink size={24} />
                      <span>Fiverr</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Wie is Kay? Jouw expert in <span className="text-orange-500">webdesign</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p 
                  ref={el => paragraphRefs.current[0] = el}
                  className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                >
                  Hallo! Ik ben Kay Huybreghs, 20 jaar jong en trots geboren en getogen in Venlo, Limburg. Onder de naam KH Custom Web help ik ondernemers zoals jij om een website te krijgen die niet alleen visueel aantrekkelijk is, maar ook razendsnel laadt en optimaal presteert in zoekmachines zoals Google.
                </p>
                
                <p 
                  ref={el => paragraphRefs.current[1] = el}
                  className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                >
                  Mijn passie ligt in het creëren van schone, efficiënte code die jouw bedrijf echt verder helpt. Geen overbodige plugins, geen trage systemen, maar een op maat gemaakte website die jij volledig in eigen beheer hebt. Hierdoor krijg je volledige controle over jouw online aanwezigheid en kun je de website eenvoudig beheren en aanpassen, zonder gedoe.
                </p>
                
                <p 
                  ref={el => paragraphRefs.current[2] = el}
                  className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                >
                  Bij KH Custom Web staat kwaliteit, snelheid en gebruiksvriendelijkheid centraal. Elke website die ik maak, wordt gebouwd met de nieuwste technieken (HTML, CSS en JavaScript) en is geoptimaliseerd voor SEO. Dat betekent dat je website niet alleen mooi is, maar ook goed vindbaar is in zoekmachines. Dit is perfect om jouw bedrijf online te laten groeien.
                </p>
                
                <p 
                  ref={el => paragraphRefs.current[3] = el}
                  className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                >
                  Als ondernemer in Limburg, maar ook in heel Nederland, kun je rekenen op persoonlijk advies en een website die jouw merk weerspiegelt. Ik zorg ervoor dat jouw website snel laadt, goed scoort in Google en perfect aansluit bij jouw bedrijfsdoelen. Het mooiste is dat je de volledige code ontvangt, zodat je altijd de controle hebt. Als je liever hebt dat ik de hosting en het onderhoud voor je regel, doe ik dat uiteraard met alle plezier. Jij kiest, en ik zorg ervoor dat alles soepel verloopt.
                </p>
                
                <p 
                  ref={el => paragraphRefs.current[4] = el}
                  className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                >
                  Of je nu net begint of je bedrijf wilt uitbreiden, bij KH Custom Web krijg je altijd een betaalbare en professionele oplossing. Ik help je met alles: van ontwerp en bouw tot SEO-optimalisatie en onderhoud.
                </p>
                
                <p 
                  ref={el => paragraphRefs.current[5] = el}
                  className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                >
                  Dus, ben je klaar om jouw bedrijf naar het volgende niveau te tillen met een website die jouw merk echt weerspiegelt? Neem contact met me op en laten we samen iets moois creëren!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;