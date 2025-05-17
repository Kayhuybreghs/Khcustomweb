import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Tip {
  title: string;
  content: string;
}

const tips: Tip[] = [
  {
    title: "Zorg voor een Duidelijke Call-to-Action",
    content: "Een van de belangrijkste onderdelen van een succesvolle website is een duidelijke call-to-action (CTA). Dit kan een knop zijn zoals 'Neem contact op', 'Vraag een offerte aan' of 'Start je project'. Zorg ervoor dat je CTA goed zichtbaar is en bezoekers aanmoedigt om de volgende stap te zetten. Dit verhoogt niet alleen je conversie, maar maakt het voor bezoekers ook makkelijker om te weten wat ze moeten doen."
  },
  {
    title: "Optimaliseer Je Beeldmateriaal voor Snelheid",
    content: "Veel ondernemers onderschatten hoe belangrijk geoptimaliseerde afbeeldingen zijn voor hun website. Grote bestanden vertragen de laadtijd, wat een negatief effect heeft op zowel gebruikerservaring als SEO. Zorg ervoor dat je afbeeldingen de juiste afmetingen en bestandsgrootte hebben om snel te laden, zonder in te boeten op de kwaliteit."
  },
  {
    title: "Gebruik Testimonials en Klantverhalen",
    content: "Een geweldige manier om vertrouwen op te bouwen is door succesverhalen en klantensuccessen te tonen. Voeg een sectie met testimonials toe op je website om bezoekers te laten zien dat je betrouwbaar en ervaren bent. Klanten die hun positieve ervaringen delen, zorgen voor meer geloofwaardigheid en kunnen de beslissing om met jou samen te werken vergemakkelijken."
  },
  {
    title: "Voeg Een Blog Toe voor Meer Autoriteit",
    content: "Met een blog kun je je autoriteit in jouw vakgebied opbouwen en tegelijkertijd waardevolle informatie delen die je doelgroep aanspreekt. Dit kan niet alleen helpen met SEO, maar zorgt er ook voor dat je website continu up-to-date blijft. Als je bijvoorbeeld websites bouwt voor een specifieke branche, kun je handige tips en trends in dat veld delen om je klanten te ondersteunen."
  },
  {
    title: "Zorg Voor Een Mobielvriendelijke Website",
    content: "Meer dan de helft van het internetverkeer komt van mobiele apparaten. Het is dus essentieel dat jouw website geoptimaliseerd is voor smartphones en tablets. Zorg ervoor dat je website responsive is, wat betekent dat deze automatisch aanpast aan verschillende schermformaten. Dit verbetert niet alleen de gebruikerservaring, maar heeft ook een positieve invloed op je zoekmachinepositie."
  },
  {
    title: "Implementeer Snelle Pagina's voor Betere Klantbeleving",
    content: "Je website moet snel laden, en niet alleen voor SEO. Gebruikers haken snel af als een pagina te lang duurt om te laden. Zorg voor snelle pagina's door gebruik te maken van tools zoals caching, minimaliseer het gebruik van zware scripts en maak gebruik van Content Delivery Networks (CDN). Hoe sneller je website, hoe groter de kans dat bezoekers langer blijven en je conversiepercentages stijgen."
  }
];

const WebDesignTips: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const nextTip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('right');
    setCurrentTip((prev) => (prev === tips.length - 1 ? 0 : prev + 1));
  };

  const prevTip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setCurrentTip((prev) => (prev === 0 ? tips.length - 1 : prev - 1));
  };

  const goToTip = (index: number) => {
    if (isAnimating || index === currentTip) return;
    setIsAnimating(true);
    setSlideDirection(index > currentTip ? 'right' : 'left');
    setCurrentTip(index);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Tips voor een succesvolle <span className="text-orange-500">website</span>
          </h2>

          <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-hidden">
            <button
              onClick={prevTip}
              disabled={isAnimating}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-orange-100 hover:bg-orange-200 text-orange-500 rounded-full transition-colors duration-300 focus:outline-none z-10 disabled:opacity-50"
              aria-label="Vorige tip"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTip}
              disabled={isAnimating}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-orange-100 hover:bg-orange-200 text-orange-500 rounded-full transition-colors duration-300 focus:outline-none z-10 disabled:opacity-50"
              aria-label="Volgende tip"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative px-8 md:px-12 overflow-hidden">
              <div
                className={`min-h-[300px] flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out ${
                  isAnimating
                    ? slideDirection === 'right'
                      ? '-translate-x-full opacity-0'
                      : 'translate-x-full opacity-0'
                    : 'translate-x-0 opacity-100'
                }`}
                onTransitionEnd={handleAnimationEnd}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  {tips[currentTip].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {tips[currentTip].content}
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {tips.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTip(index)}
                  disabled={isAnimating}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none disabled:opacity-50
                    ${index === currentTip 
                      ? 'bg-orange-500 w-6' 
                      : 'bg-orange-200 hover:bg-orange-300'
                    }`}
                  aria-label={`Ga naar tip ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignTips;