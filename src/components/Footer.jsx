import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Section - Brand & Description */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-black mb-2">
                <span className="text-white">Multi </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Activity</span>
              </h2>
              <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Management
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Professional home maintenance and repair services. We provide reliable solutions for all your property needs with 25 years of experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-cyan-400 mt-1">📍</div>
                <div>
                  <p className="font-semibold text-white">Service Location</p>
                  <p className="text-gray-300 text-sm">Available for Residential & Commercial</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-cyan-400 mt-1">📞</div>
                <div>
                  <p className="font-semibold text-white">123-456-789-0000</p>
                  <p className="text-gray-300 text-sm">24/7 Emergency Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">OUR SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">›</span> Building & Construction
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">›</span> Repair & Maintenance
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">›</span> Electrical Services
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">›</span> Plumbing Services
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">›</span> House Moving
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="text-cyan-400">›</span> Garden & Heating
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Special Offer */}
          <div>
            <div className="border-2 border-dashed border-cyan-500/30 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
              <p className="text-gray-300 text-sm mb-2">GET</p>
              <p className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">20%</p>
              <p className="text-white text-lg font-semibold mb-3">OFF</p>
              <p className="text-gray-300 text-sm mb-4">Special offer limited time</p>
              <p className="text-white font-bold mb-2">All Handyman Services</p>
              <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-2 rounded-lg inline-block">
                <p className="text-xs text-cyan-100">OFFER CODE:</p>
                <p className="text-white font-bold">MAM2026</p>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
                <span className="text-white">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
                <span className="text-white">G+</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
                <span className="text-white">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
                <span className="text-white">P</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; 2026 MAM - Multi Activity Management. All rights reserved.</p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 opacity-5">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <text x="50%" y="50%" fontSize="200" fill="white" textAnchor="middle" dominantBaseline="middle" opacity="0.1">MAM</text>
        </svg>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
