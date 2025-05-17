import React from 'react';
import { Users, MapPin } from 'lucide-react';

const ForWhom: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-orange-100 text-orange-500 mx-auto">
              <Users size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
              Voor wie zijn mijn websites?
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
              Ik help ondernemers in allerlei sectoren: van coaches tot installateurs, van kappers tot kleine bedrijven. Wat ze gemeen hebben? Ze willen een site die werkt, betaalbaar is en ze zelf écht in handen hebben.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                <MapPin className="text-orange-500 mr-2" size={20} />
                <span className="text-gray-700 font-medium">Beschikbaar in heel Nederland</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-400"></div>
              <div className="flex items-center">
                <MapPin className="text-orange-500 mr-2" size={20} />
                <span className="text-gray-700 font-medium">Specialisatie in Limburg</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">ZZP'ers</h3>
                <p className="text-gray-600">Voor zelfstandig ondernemers die een professionele uitstraling willen.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">MKB'ers</h3>
                <p className="text-gray-600">Voor kleine tot middelgrote bedrijven die lokaal gevonden willen worden.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Startups</h3>
                <p className="text-gray-600">Voor nieuwe ondernemingen die snel online willen zonder grote investering.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;