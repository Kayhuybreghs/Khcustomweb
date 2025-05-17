import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klaar voor een snelle en betaalbare webdesign?
          </h2>
          
          <p className="text-xl mb-8 text-orange-50">
            Wil je een website die professioneel oogt, goed scoort in Google en direct gebruiksklaar is? Neem vandaag nog contact op voor een gratis webdesign demo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              Vraag je demo aan
              <ArrowRight className="ml-2" size={18} />
            </Link>
            
            <Link
              to="/projecten"
              className="bg-transparent hover:bg-orange-700 text-white border border-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
            >
              Bekijk eerdere projecten
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;