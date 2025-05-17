import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Palette, 
  Zap, 
  Search, 
  Repeat, 
  Clock, 
  Info, 
  AlertCircle, 
  ArrowRight, 
  ExternalLink,
  Gift,
  Smartphone
} from 'lucide-react';
import LogoCarousel from './LogoCarousel';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  isReversed?: boolean;
}

const BenefitItem: React.FC<BenefitProps> = ({ icon, title, description, image, imageAlt, isReversed = false }) => (
  <div className={`flex flex-col ${image ? 'lg:flex-row' : 'md:flex-row'} items-center gap-8 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
    {image && (
      <div className="flex-1 flex justify-center">
        <img 
          src={image} 
          alt={imageAlt} 
          className={`rounded-lg w-full max-w-[500px] h-[250px] object-contain ${
            image.includes('Vector-KhcustomWeb') ? 'bg-transparent' : 'object-cover shadow-xl'
          }`}
          width="500"
          height="250"
          loading="lazy"
        />
      </div>
    )}
    <div className={`flex-1 ${image ? '' : 'flex flex-col md:flex-row md:items-start gap-4'}`}>
      <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full text-orange-500 mb-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Programmeer <span className="text-orange-500">talen</span> waarmee ik werk
          </h2>
          <p className="text-xl text-gray-600">
            Moderne technologieën voor snelle, veilige en schaalbare websites
          </p>
        </div>
      </div>

      <LogoCarousel />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Waarom kiezen voor <span className="text-orange-500">KHCustomWeb</span>?</h2>
          <p className="text-xl text-gray-600">Ontdek hoe ik jouw online aanwezigheid kan versterken met websites die niet alleen mooi zijn, maar ook resultaat opleveren.</p>
        </div>
        
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          <BenefitItem 
            icon={<Check size={32} />}
            title="Betaalbaar webdesign zonder kwaliteit in te leveren"
            description="Je hoeft geen duizenden euro's uit te geven om een professionele website te krijgen. Ik bouw maatwerk websites in echte code, niet met trage template-systemen of ingewikkelde tools. Elke site wordt ontworpen op basis van jouw wensen/doelen en dat voor een eerlijke, overzichtelijke prijs. Ideaal voor startende ondernemers of kleine bedrijven die een sterke online basis willen."
            image="/Customwebste-codephoto.webp"
            imageAlt="Custom Website Code"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-orange-50 rounded-xl p-8">
            <BenefitItem 
              icon={<Smartphone size={32} />}
              title="Responsive ontwerp: mobiel, tablet én desktop"
              description="Tegenwoordig bekijkt meer dan de helft van je bezoekers je site via een mobiel. Daarom wordt jouw website vanaf het begin geoptimaliseerd voor alle schermformaten. Alles blijft duidelijk, leesbaar en gebruiksvriendelijk of iemand nu kijkt op een iPhone, tablet of computer."
            />
            
            <BenefitItem 
              icon={<Search size={32} />}
              title="SEO en PageSpeed optimalisatie die werkt"
              description="Je website wordt geoptimaliseerd voor betere vindbaarheid in Google. Snelle laadtijden en een sterke structuur helpen je meer bezoekers aan te trekken en je bereik in Limburg en of Nederland te vergroten. Dit resulteert in meer zichtbaarheid, klanten en groei, zonder dat je er zelf iets voor hoeft te doen."
            />
          </div>
          
          <BenefitItem 
            icon={<Zap size={32} />}
            title="Snelle laadtijd & uitstekende gebruikerservaring"
            description="Niets is vervelender dan een trage website. Mijn sites zijn lichtgewicht en gebouwd in schone code, zonder overbodige plugins of pagebuilders. Hierdoor laden ze razendsnel en werken ze soepel op alle apparaten. Snelle websites zorgen voor een betere positie in zoekmachines én maken een goede eerste indruk op je bezoekers."
            image="Vector-KhcustomWeb.webp"
            imageAlt="Pagina snelheid vector"
            isReversed
          />
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full text-orange-500">
                <Gift size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Gratis demo vooraf zodat je weet wat je krijgt</h3>
                <p className="text-gray-600 leading-relaxed mb-6">Voordat je ergens aan vastzit, krijg je een gratis demo van hoe jouw website eruit kan komen te zien. Dit geeft duidelijkheid en rust, zodat je precies weet wat je krijgt. Pas als je tevreden bent, gaan we verder. Geen verborgen kosten, geen verplichtingen gewoon transparant webdesign.</p>
                <div className="bg-white p-4 rounded-lg mb-6">
                  <p className="text-gray-700 italic">Gratis demo vooraf! Eerst zien, dan pas betalen. Geen verplichtingen, gewoon een eerlijke kennismaking.</p>
                </div>
                <Link
                  to="/contact"
                  className="bg-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-lg hover-animate"
                >
                  Vraag een demo aan
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;