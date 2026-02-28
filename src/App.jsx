import Navbar from './components/Navbar'
import { useState, useEffect, useMemo, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { preloadAllImages } from './utils/imagePreloader'

// Lazy load components for better performance
const Choose = lazy(() => import('./pages/Choose'))
const Services = lazy(() => import('./pages/Services'))
const Problem = lazy(() => import('./pages/Problem'))
const Contact = lazy(() => import('./pages/Contact'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const slides = useMemo(() => [
    {
      image: '/src/assets/household-repair-middle-aged-man-inspecting-pipe-touching-hand-sink-stylish-modern-kitchen.jpg',
      title: 'Welcome to',
      highlight: 'MAM',
      subtitle: 'Multi Activity Management',
      description: 'MAM provides reliable and professional services for homes and businesses. Our team specializes in building work, property repairs, electrical services, plumbing, and house moving solutions.',
      subtext: 'We focus on delivering high-quality work, dependable service, and complete customer satisfaction. Whether you need construction, maintenance, or relocation services, we are here to help.'
    },
    {
      image: '/src/assets/male-electrician-working-electrical-panel-male-electrician-overalls.jpg',
      title: 'Expert',
      highlight: 'Electrical Services',
      subtitle: 'Professional Electricians',
      description: 'Our certified electricians provide comprehensive electrical solutions for residential and commercial properties. From installations to repairs, we ensure safety and quality.',
      subtext: 'Available 24/7 for emergency electrical services. Licensed, insured, and experienced professionals at your service.'
    },
    {
      image: '/src/assets/man-builder-uniform-holding-older-looking-building-plan.jpg',
      title: 'Quality',
      highlight: 'Construction',
      subtitle: 'Building Your Dreams',
      description: 'Professional construction and building services with attention to detail. We handle projects of all sizes, from renovations to new constructions.',
      subtext: 'Experienced builders committed to delivering projects on time and within budget. Your vision, our expertise.'
    }
  ], []);

  // Preload ALL images on mount - INSTANT LOADING
  useEffect(() => {
    // Start preloading immediately
    const loadImages = async () => {
      try {
        await preloadAllImages();
        setImagesLoaded(true);
      } catch (error) {
        // Even if error, set loaded to true to not block UI
        setImagesLoaded(true);
      }
    };
    
    loadImages();
  }, []);

  useEffect(() => {
    // Start slider only after images loaded
    if (imagesLoaded) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slides.length, imagesLoaded]);

  return (
    <div className="relative">
      <Navbar />
      
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      }>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
            {/* Home Section with Background Image Slider */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Images Slider */}
        <div className="absolute inset-0 bg-black">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-linear ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.75), rgba(30, 58, 138, 0.70), rgba(15, 23, 42, 0.75)), url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                zIndex: index === currentSlide ? 10 : 0
              }}
            />
          ))}
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-cyan-400 w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="relative z-10 w-full py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl md:ml-4 relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-1000 ease-linear ${
                    index === currentSlide 
                      ? 'opacity-100 relative' 
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-3 md:mb-4 leading-none">
                    {slide.title}
                  </h1>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-none">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
                      {slide.highlight}
                    </span>
                  </h1>
                  
                  <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 md:mb-8"></div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 mb-8 md:mb-12 tracking-wide">
                    {slide.subtitle}
                  </h2>

                  <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                    <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-light">
                      {slide.description}
                    </p>

                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light">
                      {slide.subtext}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-20">
                    <button className="group px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-bold text-base md:text-lg transition-all shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 relative overflow-hidden">
                      <span className="relative z-10">Get Started Today</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                    <button className="px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white rounded-lg font-bold text-base md:text-lg transition-all">
                      Learn More
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 min-h-[100px]">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-1 md:mb-2">500+</div>
                      <div className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-1 md:mb-2">100%</div>
                      <div className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-1 md:mb-2">24/7</div>
                      <div className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 mb-1 md:mb-2">10+</div>
                      <div className="text-xs sm:text-sm text-gray-300 font-medium uppercase tracking-wider">Years</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Choose />

      {/* Services Section */}
      <Services />

      {/* Problem Section */}
      <Problem />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
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
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="text-cyan-400">›</span> Building & Construction
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="text-cyan-400">›</span> Repair & Maintenance
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="text-cyan-400">›</span> Electrical Services
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="text-cyan-400">›</span> Plumbing Services
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="text-cyan-400">›</span> House Moving
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="text-cyan-400">›</span> Gardning service
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
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all">
                  <span className="text-white">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all">
                  <span className="text-white">G+</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all">
                  <span className="text-white">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all">
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
          </>
        } />
        
        {/* Service Detail Route */}
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
      </Routes>
      </Suspense>
    </div>
  )
}

export default App
