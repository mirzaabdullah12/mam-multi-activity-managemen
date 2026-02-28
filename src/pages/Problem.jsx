import { Phone, Home, Award } from 'lucide-react';
import { memo } from 'react';

const Problem = memo(() => {
  return (
    <section id="problem" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          {/* Phone Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mb-6 shadow-2xl animate-pulse">
            <Phone size={40} className="text-white" />
          </div>

          {/* Phone Number */}
          <a 
            href="tel:123-456-789-0000" 
            className="block text-3xl md:text-4xl lg:text-5xl font-black text-cyan-400 mb-8 hover:text-cyan-300 transition-colors"
          >
            123-456-789-0000
          </a>

          {/* Main Heading */}
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Need Any Housing Services?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          </div>

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 mb-8">
            <Award className="text-cyan-400" size={32} />
            <div className="text-left">
              <div className="text-5xl font-black text-cyan-400">25</div>
              <div className="text-sm text-gray-300 font-semibold uppercase tracking-wider">Years Experience</div>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We have <span className="text-cyan-400 font-bold">25 years</span> of Home Maintenance business experience
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-bold text-lg transition-all shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 flex items-center gap-3">
              <Home size={24} />
              Learn More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 hover:border-white rounded-lg font-bold text-lg transition-all shadow-xl hover:scale-105">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl font-black text-cyan-400 mb-2">24/7</div>
            <div className="text-white font-semibold mb-1">Emergency Service</div>
            <div className="text-gray-400 text-sm">Available round the clock</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl font-black text-cyan-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-1">Satisfaction</div>
            <div className="text-gray-400 text-sm">Guaranteed quality work</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
            <div className="text-4xl font-black text-cyan-400 mb-2">1000+</div>
            <div className="text-white font-semibold mb-1">Happy Clients</div>
            <div className="text-gray-400 text-sm">Trusted by many</div>
          </div>
        </div>
      </div>
    </section>
  );
});

Problem.displayName = 'Problem';

export default Problem;
