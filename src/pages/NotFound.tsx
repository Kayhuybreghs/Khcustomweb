import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  React.useEffect(() => {
    document.title = "Pagina niet gevonden | KHCustomWeb";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Oeps! Pagina niet gevonden
        </h2>
        
        <p className="text-gray-600 mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst.
          Laten we je weer op weg helpen naar een werkende pagina.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <Home className="mr-2" size={18} />
            Terug naar home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={18} />
            Ga terug
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;