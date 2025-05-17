import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="flex-shrink-0 h-5 w-5 text-orange-500" />
        ) : (
          <ChevronDown className="flex-shrink-0 h-5 w-5 text-orange-500" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-3 text-gray-600 leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const ProjectsFAQ: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-24 mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
        Veelgestelde vragen
      </h2>
      
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        <FAQItem 
          question="Kan ik mijn website zelf beheren of meenemen?"
          answer="Absoluut!
Je ontvangt van mij het volledige codebestand van je website, zodat je altijd volledige controle hebt. Dit betekent dat je niet vastzit aan een specifiek platform of aanbieder. Je kunt je website zelf beheren, aanpassen en zelfs verplaatsen naar een andere host wanneer dat nodig is."
        />
        
        <FAQItem 
          question="Is jouw webdesign geschikt voor mijn sector?"
          answer="Ja, zeker!
Mijn webdesign is sectoronafhankelijk. Of je nu een coach, kapper, installateur, of een creatief ondernemer bent, jouw bedrijf en doelen staan altijd centraal. Ik maak op maat gemaakte websites die passen bij jouw unieke wensen en doelgroep, zodat jij een professionele online aanwezigheid hebt, ongeacht je sector."
        />
        
        <FAQItem 
          question= "Wat zijn de kosten voor een website?"
          answer="Duidelijkheid en transparantie.
De prijs voor een website is een vast bedrag per project, afhankelijk van de complexiteit en je wensen. Er is geen sprake van verborgen kosten of onverwachte toeslagen. Daarnaast betaal je een kleine maandelijkse bijdrage voor hosting en onderhoud, zodat je website snel blijft draaien en up-to-date blijft. Geen verrassingen, alleen heldere prijsafspraken."
        />
        
        <FAQItem 
          question="Kan ik eerst een voorbeeld zien voordat ik besluit?"
          answer="Ja, je kunt eerst een gratis demo ontvangen.
Voordat je een definitieve beslissing maakt, krijg je de kans om een demo van je website te zien. Zo kun je al een goed idee krijgen van het ontwerp en de functionaliteit, en weet je precies wat je kunt verwachten. We zorgen ervoor dat het ontwerp perfect aansluit bij jouw visie.
"
        />
        
        <FAQItem 
          question="Hoe lang duurt het voordat mijn website klaar is?"
          answer="Meestal binnen 1 week!
De opleveringstijd van je website hangt af van de complexiteit van je project en de snelheid waarmee we de benodigde content kunnen verzamelen. De meeste websites kan ik echter binnen 1 week opleveren, zodat je snel online kunt gaan en je bedrijf kunt laten groeien."
        />
        
        <FAQItem 
          question="Wat heb je van mij nodig om te starten?"
          answer="Korte briefing en content.
Om te beginnen heb ik een korte briefing nodig over je bedrijf, je doelgroep en je wensen voor de website. Voor de inhoud (zoals teksten en afbeeldingen) kan je zelf materiaal aanleveren, maar ik help je daar graag bij als dat nodig is. Samen zorgen we ervoor dat je website volledig aansluit bij je merk en doelen."
        />
      </div>
    </div>
  );
};

export default ProjectsFAQ;