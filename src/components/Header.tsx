import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (window.innerWidth >= 768) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform
        ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}
        ${!isVisible && 'md:-translate-y-full'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-bold">
            <span className="text-gray-900">KH</span>
            <span className="text-orange-500">CustomWeb</span>
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/Projecten-Tarieven" label="Projecten & Tarieven" />
            <NavLink to="/contact" label="Contact" />
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/projecten" label="Projecten & Tarieven" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink to="/contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => (
  <Link 
    to={to} 
    className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
  >
    {label}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, label, onClick }) => (
  <Link 
    to={to} 
    className="block py-2 text-gray-700 hover:text-orange-500 transition-colors"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Header;