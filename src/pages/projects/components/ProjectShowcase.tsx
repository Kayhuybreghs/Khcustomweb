import React from 'react';
import { Clock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  duration: string;
  image: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, duration, image, technologies }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
    <div className="h-48 md:h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
        loading="lazy"
        width="600"
        height="400"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-gray-500 mb-4">
        <Clock size={18} className="mr-2" />
        <span>Ontwikkeltijd: {duration}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectShowcase: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">
        Websites die ik heb gemaakt
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ProjectCard 
          title="Op Maat Webdesign"
          description="Een moderne website voor een lokaal installatiebedrijf, met focus op duidelijke diensten en een gebruiksvriendelijk contactformulier."
          duration="1 week"
          image="/Website-wemade/Opmaat-Webdesign.webp"
          technologies={['React', 'TailwindCSS', 'SEO', 'Responsive', 'HTML', 'JavaScript']}
        />
        
        <ProjectCard 
          title="SPWEAR Textieldruk"
          description="Een dynamische website voor een textieldrukkerij, inclusief online offerteaanvraag en Statistieken Dashboard."
          duration="5 dagen"
          image="/Website-wemade/Kleding-bedrukken-SPWEAR.webp"
          technologies={['React', 'TailwindCSS', 'JavaScript', 'Forms', 'HTML', 'Statistieken Dashboard']}
        />
      </div>
    </>
  );
};

export default ProjectShowcase;