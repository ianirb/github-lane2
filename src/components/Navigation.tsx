import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <Building2 className="w-8 h-8 text-violet-400 animate-icon" />
            <span className="brand-name animate-gradient-text">Lane Acquisitions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            <Link to="/" className="nav-link hover-text tracking-wider text-sm uppercase">Home</Link>
            <Link to="/about" className="nav-link hover-text tracking-wider text-sm uppercase">About</Link>
            <Link to="/portfolio" className="nav-link hover-text tracking-wider text-sm uppercase">Portfolio</Link>
            <Link to="/contact" className="nav-link hover-text tracking-wider text-sm uppercase">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-violet-400" />
            ) : (
              <Menu className="w-6 h-6 text-violet-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="nav-link hover-text tracking-wider text-sm uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="nav-link hover-text tracking-wider text-sm uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/portfolio" 
                className="nav-link hover-text tracking-wider text-sm uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/contact" 
                className="nav-link hover-text tracking-wider text-sm uppercase py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}