import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold hover:scale-105 transition-transform">
              MAM
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-all">
              Home
            </a>
            <a href="#about" className="text-white px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-all">
              About
            </a>
            <a href="#services" className="text-white px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-all">
              Services
            </a>
            <a href="#contact" className="text-white px-4 py-2 rounded-lg hover:bg-white/20 font-medium transition-all">
              Contact
            </a>
          </div>

          {/* Login Button */}
          {/* <div className="hidden md:block">
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-100 font-semibold transition-all hover:scale-105 shadow-lg">
              Login
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-all"
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
            <a
              href="#home"
              className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg font-medium transition-all"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full mt-2 bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-all">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
