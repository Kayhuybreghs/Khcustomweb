import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Check, 
  Palette, 
  Zap, 
  Search, 
  Repeat, 
  Clock, 
  Info, 
  AlertCircle, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';

interface PricingOption {
  id: string;
  name: string;
  price: number;
}

const AnimatedPrice: React.FC<{ value: number }> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  React.useEffect(() => {
    let startTimestamp: number;
    const duration = 1000;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);
  
  return <span>€{displayValue}</span>;
};

const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <div className="group relative inline-block">
    <Info size={16} className="text-orange-500 cursor-help ml-1" />
    <div className="opacity-0 bg-gray-900 text-white text-sm rounded-lg py-2 px-3 absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 w-48 pointer-events-none">
      {text}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 border-4 border-transparent border-t-gray-900"></div>
    </div>
  </div>
);

const PricingSection: React.FC = () => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [selectedMonthlyServices, setSelectedMonthlyServices] = useState<string[]>([]);
  
  const basePrice = 200;
  
  const monthlyServices: PricingOption[] = [
    { id: 'priority-support', name: 'Priority Support', price: 5 * 12 },
    { id: 'hosting-maintenance', name: 'Hosting & Onderhoud', price: 15 * 12 }
  ];

  const addons: PricingOption[] = [
    { id: 'analytics', name: 'Statistieken Dashboard', price: 30 },
    { id: 'newsletter', name: 'Nieuwsbrief integratie', price: 50 },
    { id: 'Logo', name: 'Logo Ontwerpen', price: 10 },
    { id: 'ssl', name: 'SSL-certificaat', price: 25 },
    { id: 'booking', name: 'Online boekingssysteem', price: 75 },
    { id: 'speed', name: 'Extra Pagina Snelheid Optimaliseren', price: 40 },
    { id: 'seo', name: 'Extra SEO-optimalisatie', price: 40 },
    { id: 'stripe', name: 'Stripe Checkout', price: 400 },
    { id: 'contactformulier', name: 'Contactformulier', price: 25 }
  ].sort((a, b) => a.price - b.price);

  const totalPrice = basePrice + 
    addons.filter(addon => selectedAddons.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0) +
    monthlyServices.filter(service => selectedMonthlyServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const toggleMonthlyService = (serviceId: string) => {
    setSelectedMonthlyServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white relative">
          <div className="absolute top-4 right-4 bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <Star size={16} className="mr-1" />
            <span className="whitespace-nowrap">Meest gekozen</span>
          </div>
          <h3 className="text-2xl font-bold mb-2 mt-8 md:mt-0">Standaard Website</h3>
          <div className="text-4xl font-bold mb-2">
            <AnimatedPrice value={totalPrice} />
          </div>
          <p className="text-orange-100">Eenmalig bedrag</p>
        </div>

        <div className="p-8">
          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">3-pagina website met SEO</h4>
                <p className="text-sm text-gray-600">Volledig responsive en geoptimaliseerd</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Palette className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Uniek ontwerp op maat</h4>
                <p className="text-sm text-gray-600">Perfect afgestemd op jouw merk</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">Supersnelle laadtijd</h4>
                <p className="text-sm text-gray-600">Gegarandeerd onder 1,5 seconden</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Search className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">SEO-score 70+</h4>
                <p className="text-sm text-gray-600">Optimaal vindbaar in Google</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Repeat className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">3 revisierondes inbegrepen</h4>
                <p className="text-sm text-gray-600">Voor de perfecte afwerking</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 pb-4">
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Clock size={16} className="mr-2 text-orange-500" />
              Levertijd: 4-7 dagen
            </div>
          </div>

          <div className="space-y-4">
            <Link
              to="/contact"
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-semibold py-4 px-6 rounded-xl transition-colors duration-300"
            >
              Start je project
            </Link>
            
            <a
              href="https://www.fiverr.com/khwebdesign/build-a-fast-modern-and-personal-website-for-you"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-orange-500 hover:bg-orange-50 text-orange-500 text-center font-semibold py-4 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center"
            >
              Bestel via Fiverr
              <ExternalLink className="ml-2" size={18} />
            </a>
          </div>

          <div className="hidden lg:block mt-8">
            <img
              src="/Logopricingcard-desktop.webp"
              alt="KHCustomWeb - Professioneel webdesign bureau in Limburg"
              className="w-full max-w-[300px] mx-auto"
              loading="lazy"
              width="300"
              height="100"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Bereken jouw webdesign kosten
          </h2>
          
          <p className="text-gray-600 mb-8">
            Gebruik de interactieve calculator hieronder om in enkele klikken te zien wat jouw ideale website zou kosten. Kies opties zoals extra pagina's, SEO-boosts of onderhoud, en ontdek direct jouw prijs zonder verborgen kosten.
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              Maandelijkse services
              <span className="ml-2 text-sm text-gray-500">(Jaarlijks berekend)</span>
            </h4>
            <div className="space-y-4">
              {monthlyServices.map(service => (
                <div 
                  key={service.id}
                  className="flex items-center justify-between p-4 bg-gradient-to-br from-white to-orange-50 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={service.id}
                      checked={selectedMonthlyServices.includes(service.id)}
                      onChange={() => toggleMonthlyService(service.id)}
                      className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                    />
                    <label htmlFor={service.id} className="ml-3 text-gray-700">
                      {service.name}
                      <span className="block text-sm text-gray-500">
                        €{service.price / 12}/maand
                      </span>
                    </label>
                  </div>
                  <span className="text-gray-900 font-medium">€{service.price}/jaar</span>
                </div>
              ))}
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-4">Eenmalige add-ons</h4>
          <div className="space-y-4">
            {addons.map(addon => (
              <div 
                key={addon.id}
                className="flex items-center justify-between p-4 bg-gradient-to-br from-white to-orange-50 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={addon.id}
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => toggleAddon(addon.id)}
                    className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                  />
                  <label htmlFor={addon.id} className="ml-3 text-gray-700 flex items-center">
                    {addon.name}
                    {addon.id === 'analytics' && (
                      <Tooltip text="Meest gekozen door onze klanten voor betere inzichten in websitegebruik" />
                    )}
                    {addon.id === 'ssl' && (
                      <Tooltip text="Belangrijk voor vindbaarheid en veiligheid van je website!" />
                    )}
                  </label>
                </div>
                <span className="text-gray-900 font-medium">€{addon.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-orange-50 p-4 rounded-xl">
            <div className="flex items-start">
              <AlertCircle className="text-orange-500 mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                Extra pagina's nodig? Neem contact op voor een persoonlijke offerte. 
                De prijs per extra pagina is afhankelijk van de complexiteit en inhoud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;