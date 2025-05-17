import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Zap, Wrench, CheckCircle, Rocket, Server, ArrowRight } from 'lucide-react';

const StepCard: React.FC<{
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  isEven?: boolean;
  showDemoLink?: boolean;
}> = ({ icon, number, title, description, isEven, showDemoLink }) => (
  <div className={`flex ${isEven ? 'md:ml-auto' : ''} w-full md:w-[80%] mb-6`}>
    <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-lg md:hover:shadow-2xl md:hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 md:group-hover:bg-orange-500 md:group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div>
          <div className="text-orange-700 font-medium mb-1">Stap {number}</div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
          {showDemoLink && (
            <Link
              to="/contact"
              className="bg-orange-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-lg hover-animate"
            >
              Start met een gratis demo
              <ArrowRight className="ml-2" size={18} />
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-12 md:py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Jouw website, <span className="text-orange-500">stap</span> voor <span className="text-orange-500">stap</span> geregeld
          </h2>
          <p className="text-xl text-gray-600">
            Hieronder zie je precies hoe het proces eruitziet. Duidelijk, snel en zonder gedoe.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <StepCard
            icon={<Star size={24} />}
            number={1}
            title="Jij vraagt een gratis demo aan"
            description="Vertel me kort wat je in gedachten hebt. Denk aan: kleuren, stijl, wat je bedrijf doet en wat je met de site wilt bereiken. Op basis daarvan maak ik gratis een demo-ontwerp."
            showDemoLink={true}
          />

          <StepCard
            icon={<Zap size={24} />}
            number={2}
            title="Binnen 1-2 dagen krijg je jouw demo"
            description="Ik stuur je een eerste versie van je website, helemaal gratis. Zo kun je direct zien of het bij je past. Er zitten geen verplichtingen aan vast. Bevalt het je niet, dan stoppen we gewoon. Er zijn geen extra kosten en geen kleine lettertjes. Al denk ik eerlijk gezegd dat dat niet nodig zal zijn. Wil je verder? Dan bespreken we jouw wensen, de inhoud en kan ik ook helpen met het schrijven van SEO-geoptimaliseerde teksten."
            isEven
          />

          <StepCard
            icon={<Wrench size={24} />}
            number={3}
            title="Ik bouw je website"
            description="Zodra alles duidelijk is, ga ik voor je aan de slag. Ik bouw jouw website volledig op maat met snelle en schone code, zonder trage templates of ingewikkelde systemen. Kleine websites staan vaak binnen 4 tot 7 dagen online. Wil je extra pagina's of functies? Dan bespreken we samen de planning. Alles wordt geregeld zoals het hoort: snel, persoonlijk en zonder rompslomp."
          />

          <StepCard
            icon={<CheckCircle size={24} />}
            number={4}
            title="Oplevering & revisies"
            description="Je ontvangt je eigen unieke website. Natuurlijk is er ruimte voor aanpassingen, zodat alles helemaal klopt en past bij jouw merk."
            isEven
          />

          <StepCard
            icon={<Rocket size={24} />}
            number={5}
            title="Extra optimalisatie"
            description="We kijken samen nog even naar de puntjes op de i. Wil je extra SEO, betere vindbaarheid in Google of nog iets toevoegen voor marketing? Geen probleem, ik help je graag verder."
          />

          <StepCard
            icon={<Server size={24} />}
            number={6}
            title="Hosting & onderhoud"
            description="Wil je alles in één keer goed geregeld? Ik bied snelle hosting aan voor slechts €15 per maand inclusief onderhoud én gratis SSL-certificaat. Jij hoeft nergens meer naar om te kijken."
            isEven
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;