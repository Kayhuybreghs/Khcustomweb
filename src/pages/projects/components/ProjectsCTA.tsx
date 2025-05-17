import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectsCTA: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-8 text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Klaar om te starten?</h2>
      <p className="mb-8">
        Vraag een gratis demo aan en ontdek hoe jouw perfecte website eruit kan zien.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
      >
        Vraag je demo aan
        <ArrowRight className="ml-2" size={18} />
      </Link>
    </div>
  );
};

export default ProjectsCTA;