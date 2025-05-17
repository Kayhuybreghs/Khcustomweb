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

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Veelgestelde vragen
          </h2>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <FAQItem 
              question="Kan ik de site zelf beheren of meenemen?"
              answer="Zeker. Je krijgt van mij het volledige codebestand zodat je altijd eigenaar bent en niets vastzit aan een platform."
            />
            
            <FAQItem 
              question="Is dit geschikt voor mijn sector?"
              answer="Ja, ik werk sectoronafhankelijk. Of je nu coach, kapper, installateur of creatief bent: jouw doelen staan centraal, niet je branche."
            />
            
            <FAQItem 
              question="Wat kost het?"
              answer="Je betaalt een vaste prijs per project, plus een kleine maandelijkse bijdrage voor hosting & onderhoud. Geen verrassingen, geen addertjes."
            />
            
            <FAQItem 
              question="Kan ik eerst iets zien voordat ik beslis?"
              answer="Ja, je ontvangt een gratis demo zodat je vooraf ziet hoe jouw website eruit kan komen te zien."
            />
            
            <FAQItem 
              question="Hoe lang duurt het voordat mijn website klaar is?"
              answer="Afhankelijk van de complexiteit van je project en de beschikbare content, kan ik de meeste websites binnen 2-3 weken opleveren."
            />
            
            <FAQItem 
              question="Wat heb je van mij nodig om te beginnen?"
              answer="Om te beginnen heb ik een korte briefing nodig over je bedrijf, doelgroep en wensen. Voor de content is het handig als je teksten en afbeeldingen kunt aanleveren, maar ik kan je daar ook bij helpen."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;