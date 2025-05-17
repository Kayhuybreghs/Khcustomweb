import React, { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && window.innerWidth <= 640) {
          const table = entry.target as HTMLElement;
          table.classList.add('scroll-hint');
          
          // Remove the animation class after it completes
          setTimeout(() => {
            table.classList.remove('scroll-hint');
          }, 2500);
          
          // Disconnect the observer after first animation
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-16">
      <style>
        {`
          @keyframes scrollHint {
            0% { transform: translateX(0); }
            25% { transform: translateX(-20px); }
            75% { transform: translateX(0); }
            100% { transform: translateX(0); }
          }
          
          .scroll-hint {
            animation: scrollHint 2.5s ease-in-out;
          }
        `}
      </style>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 text-center">
        Wat krijg je wel bij KHCustomWeb maar niet bij templatebouwers?
      </h2>
      
      <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Bij veel websitebouwers zoals Wix, Squarespace of WordPress-templates lijkt het alsof je goedkoop uit bent. Maar achter de schermen betaal je vaak de prijs met trage laadtijden, gelimiteerde functies en weinig vrijheid. Hier zie je precies het verschil:
      </p>

      <div ref={tableRef} className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-orange-50">
              <th className="py-4 px-6 text-left text-gray-900 font-semibold border-b border-gray-200 w-1/3">
                Functie of Kenmerk
              </th>
              <th className="py-4 px-6 text-left text-gray-900 font-semibold border-b border-gray-200 w-1/3">
                <div className="text-center">
                  Templatebouwers<br/>
                  <span className="font-normal text-sm">(Wix, WordPress)</span>
                </div>
              </th>
              <th className="py-4 px-6 text-left text-gray-900 font-semibold border-b border-gray-200 w-1/3">
                <div className="text-center">
                  KHCustomWeb<br/>
                  <span className="font-normal text-sm">(Maatwerk)</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                feature: "Volledige code in eigen beheer",
                template: "Gelocked binnen platform",
                custom: "Volledig in eigen beheer"
              },
              {
                feature: "Snelheid (onder 1.5s laadtijd)",
                template: "Traag door plugins",
                custom: "Razendsnelle laadtijd"
              },
              {
                feature: "Uniek ontwerp zonder sjabloon",
                template: "Standaard layouts",
                custom: "Op maat gemaakt"
              },
              {
                feature: "SEO-score (70+ standaard)",
                template: "Thema-afhankelijk",
                custom: "Standaard ingebouwd"
              },
              {
                feature: "Flexibiliteit & schaalbaarheid",
                template: "Beperkt uitbreidbaar",
                custom: "Modulaire code"
              },
              {
                feature: "Beveiliging & updates",
                template: "Plugin-afhankelijk",
                custom: "Minimale dependencies"
              },
              {
                feature: "Volledige controle over hosting",
                template: "Vast aan platform",
                custom: "Vrije hostkeuze"
              }
            ].map((row, index) => (
              <tr key={index} className={`border-b border-gray-100 ${index % 2 === 1 ? 'bg-orange-50/30' : ''}`}>
                <td className="py-4 px-6 text-gray-800">
                  {row.feature}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-6 flex justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-sm text-gray-600 flex-1 text-left">
                      {row.template}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-6 flex justify-center">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-sm text-gray-600 flex-1 text-left">
                      {row.custom}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;