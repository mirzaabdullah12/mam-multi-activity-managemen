import { useState, memo, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// logo asset
import logo from '../assets/logo.png';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img 
                src={logo} 
                alt="MAM Logo" 
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-black text-gray-900">M</span>
                  <span className="text-3xl font-black text-white">A</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">M</span>
                </div>
                <div className="flex items-center gap-1 -mt-1">
                  <span className="text-sm font-black text-gray-900">Derby</span>
                  <span className="text-sm font-black text-white">Services</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-all">
              Home
            </Link>
            <Link to="/about" className="text-white px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-all">
              About
            </Link>
            <Link to="/services" className="text-white px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-all">
              Services
            </Link>
            <a href="/#contact" className="text-white px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-all">
              Contact
            </a>
            
            {/* Call Button */}
            <a 
              href="tel:123-456-789-0000"
              className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-100 font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all"
              onClick={closeMenu}
            >
              Services
            </Link>
            <a
              href="/#contact"
              className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all"
              onClick={closeMenu}
            >
              Contact
            </a>
            
            {/* Call Button for Mobile */}
            <a
              href="tel:123-456-789-0000"
              className="flex items-center justify-center gap-2 w-full mt-2 bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-all"
              onClick={closeMenu}
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
