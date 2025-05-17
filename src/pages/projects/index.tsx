import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectsHero from './components/ProjectsHero';
import PricingSection from './components/PricingSection';
import ProjectShowcase from './components/ProjectShowcase';
import ComparisonTable from './components/ComparisonTable';
import ProjectFeatures from './components/ProjectFeatures';
import ProjectsFAQ from './components/ProjectsFAQ';
import ProjectsCTA from './components/ProjectsCTA';
import WebDesignTips from '../../components/WebDesignTips';

const Projects: React.FC = () => {
  return (
    <>
     <Helmet>
    <title>Projecten & Tarieven | KHCustomWeb – Professionele Websites vanaf €200</title>
    <meta name="description" content="Bekijk onze succesvolle projecten en de tarieven voor webdesign bij KHCustomWeb. Websites vanaf €200 met een gratis demo, SEO, en responsief ontwerp. Start je project vandaag!" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.khcustomweb.com/projecten-tarieven" />
</Helmet>


      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
              Bekijk mijn <span className="text-orange-500">Webdesign</span> Projecten & Tarieven
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 text-center">
              Bij KHCustomWeb bouw ik websites die niet alleen strak en modern zijn, maar ook snel laden en goed scoren in Google. Hieronder vind je een selectie van projecten voor ondernemers uit Limburg en heel Nederland.
            </p>

            <div id="showcase">
              <ProjectShowcase />
            </div>
            
            <div id="tips">
              <WebDesignTips />
            </div>

            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Betaalbare tarieven voor jouw perfecte website
              </h2>
              <p className="text-lg text-gray-600">
                Onze websites zijn een slimme investering voor ondernemers die resultaat willen, zonder onnodige kosten. Start met een basispakket dat perfect bij jouw wensen past en breid later eenvoudig uit.
              </p>
            </div>

            <div id="pricing">
              <PricingSection />
            </div>
            
            <div id="comparison">
              <ComparisonTable />
            </div>
            
            <div id="faq">
              <ProjectsFAQ />
            </div>
            <ProjectsCTA />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;