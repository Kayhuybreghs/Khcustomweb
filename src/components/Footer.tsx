import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isProjectsPage = location.pathname === '/projecten';
  const isContactPage = location.pathname === '/contact';
  const isHomePage = location.pathname === '/';
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KHCustomWeb</h3>
            <p className="text-gray-300 mb-4">
              Betaalbare websites voor ondernemers in Limburg en Nederland.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/khcustomweb/?igsh=OWhndTZzYTlsNTR3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.fiverr.com/khwebdesign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Pagina's</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projecten" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Projecten & Tarieven
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Snelle Links</h3>
            {isProjectsPage ? (
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('showcase')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Eerdere Projecten
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('tips')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Tips
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Prijzen
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('comparison')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Vergelijking
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            ) : isHomePage ? (
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection('benefits')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Voordelen
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('steps')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Werkwijze
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Over Mij
                  </button>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2">
                <li>
                  <Link to="/projecten" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Bekijk Projecten
                  </Link>
                </li>
                <li>
                  <Link to="/projecten#pricing" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Bekijk Prijzen
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className="text-gray-300 hover:text-orange-400 transition-colors">
                    Over Mij
                  </Link>
                </li>
              </ul>
            )}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-2" />
                <a href="tel:+31639430197" className="text-gray-300 hover:text-orange-400 transition-colors">
                  06-39430197
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-2" />
                <a href="mailto:kayhuybreghs@icloud.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  kayhuybreghs@icloud.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-gray-300">Venlo, Limburg</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} KHCustomWeb. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;