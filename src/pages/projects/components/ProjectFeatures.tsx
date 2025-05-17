import React from 'react';

const ProjectFeatures: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          Kenmerken van mijn websites
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Responsive Design"
            description="Websites die perfect werken op alle apparaten - van mobiel tot desktop"
          />
          <FeatureCard
            title="SEO Geoptimaliseerd"
            description="Gebouwd met de beste praktijken voor zoekmachine optimalisatie"
          />
          <FeatureCard
            title="Snelle Laadtijd"
            description="Geoptimaliseerde prestaties voor een soepele gebruikerservaring"
          />
          <FeatureCard
            title="Modern Design"
            description="Strakke, professionele vormgeving die past bij jouw merk"
          />
          <FeatureCard
            title="Gebruiksvriendelijk"
            description="Intuïtieve navigatie en duidelijke call-to-actions"
          />
          <FeatureCard
            title="Onderhoudsvriendelijk"
            description="Eenvoudig te updaten en uit te breiden naar wens"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ title: string; description: string }> = ({
  title,
  description
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProjectFeatures;