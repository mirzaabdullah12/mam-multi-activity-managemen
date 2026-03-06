import { useNavigate, Link } from 'react-router-dom';
import { Building2, Wrench, Zap, Droplets, Truck, Flame, Home, Phone, Mail, Shield, Award, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { useMemo, memo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = memo(() => {
  const navigate = useNavigate();
  
  const services = useMemo(() => [
    {
      icon: <Zap size={40} />,
      title: 'Wedding Light',
      shortDesc: 'Transform your special moments with stunning lighting designs and elegant decorations',
      description: 'Create magical memories with our professional wedding lighting services. We specialize in elegant light installations, ambient decorations, and complete event illumination to make your celebration truly unforgettable.',
      color: 'from-pink-500 to-purple-500',
      bgImage: new URL('../assets/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg', import.meta.url).href,
      slug: 'wedding-light'
    },
    {
      icon: <Building2 size={40} />,
      title: 'Building & Construction',
      shortDesc: 'Expert construction solutions from new builds to complete property renovations',
      description: 'Comprehensive building services delivered by experienced professionals. From ground-up construction to property extensions and complete renovations, we bring your vision to life with quality craftsmanship.',
      color: 'from-blue-500 to-cyan-500',
      bgImage: new URL('../assets/working-with-blueprint.jpg', import.meta.url).href,
      slug: 'building-construction'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Repair & Maintenance',
      shortDesc: 'Comprehensive property maintenance ensuring safety and lasting quality',
      description: 'Keep your property in perfect condition with our reliable maintenance services. Our skilled team handles all repairs, preventive maintenance, and emergency fixes to protect your investment.',
      color: 'from-purple-500 to-pink-500',
      bgImage: new URL('../assets/builder-orange-work-clothes-using-hammer-with-stand-different-tools-near-workshop.jpg', import.meta.url).href,
      slug: 'repair-maintenance'
    },
    {
      icon: <Zap size={40} />,
      title: 'Electrical Services',
      shortDesc: 'Certified electricians providing safe installations and reliable electrical solutions',
      description: 'Professional electrical services for all your needs. From complete wiring installations to lighting systems, fault diagnostics, and emergency repairs - all work certified and guaranteed.',
      color: 'from-yellow-500 to-orange-500',
      bgImage: new URL('../assets/man-electrical-technician-working-switchboard-with-fuses.jpg', import.meta.url).href,
      slug: 'electrical-services'
    },
    {
      icon: <Droplets size={40} />,
      title: 'Plumbing Services',
      shortDesc: 'Professional plumbers delivering quality installations and emergency repairs',
      description: 'Complete plumbing solutions for residential and commercial properties. Expert pipe installations, leak repairs, bathroom fittings, drainage systems, and 24/7 emergency plumbing services.',
      color: 'from-cyan-500 to-blue-500',
      bgImage: new URL('../assets/worker-repairing-water-heater.jpg', import.meta.url).href,
      slug: 'plumbing-services'
    },
    {
      icon: <Truck size={40} />,
      title: 'House Moving Services',
      shortDesc: 'Stress-free relocation with professional packing and secure transportation',
      description: 'Make your move effortless with our experienced moving team. We provide careful packing, secure loading, safe transportation, and efficient unpacking services for a smooth relocation experience.',
      color: 'from-green-500 to-emerald-500',
      bgImage: new URL('../assets/medium-shot-delivery-people-working.jpg', import.meta.url).href,
      slug: 'house-moving'
    },
    {
      icon: <Home size={40} />,
      title: 'House & Marquee Decorating',
      shortDesc: 'Creative decoration services bringing elegance to your celebrations',
      description: 'Transform any space into a stunning venue with our decoration expertise. Specializing in weddings, parties, and corporate events with beautiful marquee setups and house decorations.',
      color: 'from-rose-500 to-pink-500',
      bgImage: new URL('../assets/beautiful-wedding-altar-made-white-pink-curtains.jpg', import.meta.url).href,
      slug: 'house-marquee-decorating'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Cleaning Services',
      shortDesc: 'Thorough cleaning solutions for spotless homes and professional workspaces',
      description: 'Experience pristine cleanliness with our professional cleaning team. Offering deep cleaning, regular maintenance, office cleaning, and specialized sanitization services using eco-friendly products.',
      color: 'from-teal-500 to-cyan-500',
      bgImage: new URL('../assets/medium-shot-people-cleaning-building (1).jpg', import.meta.url).href,
      slug: 'cleaning-services'
    },
    {
      icon: <Flame size={40} />,
      title: 'Gardening Services',
      shortDesc: 'Expert landscaping and garden care for beautiful outdoor spaces year-round',
      description: 'Create and maintain stunning outdoor spaces with our gardening professionals. From landscape design to regular lawn care, seasonal planting, and complete garden transformations.',
      color: 'from-green-500 to-emerald-500',
      bgImage: new URL('../assets/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg', import.meta.url).href,
      slug: 'gardening-services'
    }
  ], []);

  const handleServiceClick = useCallback((slug) => {
    navigate(`/service/${slug}`);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 py-20 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Professional services tailored to meet all your property needs. From construction to maintenance, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Additional Info */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With extensive experience, we provide comprehensive services for residential and commercial properties. Our expert team is dedicated to delivering quality workmanship and exceptional customer service.
            </p>
          </div>

          {/* Image with Description Section */}
          <div className="mb-20 bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-[450px] md:h-[500px]">
                <img 
                  src={new URL('../assets/portrait-smiling-construction-worker (1).jpg', import.meta.url).href} 
                  alt="Professional Services"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Professional Excellence in Every Project
                </h3>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  At MAM Multi Activity Management, we pride ourselves on delivering exceptional service across all our specializations. Our team of certified professionals brings decades of combined experience to every project.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From small repairs to large-scale renovations, we handle each job with the same level of dedication and attention to detail. Your satisfaction is our priority.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">1000+</p>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-4">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">500+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                onClick={() => handleServiceClick(service.slug)}
                className="group rounded-2xl overflow-hidden relative min-h-[280px] hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{
                  backgroundImage: `url('${service.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Dark overlay - lighter by default, darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-blue-900/30 to-slate-900/40 group-hover:from-slate-900/85 group-hover:via-blue-900/80 group-hover:to-slate-900/85 transition-all duration-500"></div>
                
                {/* Content - Title and short description always visible */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="h-[100px] flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-2xl transition-all duration-500 line-clamp-1">
                      {service.title}
                    </h3>
                    
                    {/* Short description - Always visible */}
                    <p className="text-white/90 text-sm leading-relaxed mb-3 drop-shadow-lg font-medium transition-all duration-500 line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                  
                  {/* Full description and button - Only visible on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-gray-100 text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {service.description}
                    </p>
                    <button className="text-cyan-300 hover:text-cyan-200 font-semibold transition-colors flex items-center gap-2 group-hover:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                      Learn More
                      <span className="transition-all">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Areas Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Service Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Home repairs and maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Property renovations and extensions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Garden and outdoor maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Emergency repair services</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Office building maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Commercial property repairs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Event venue setup and decoration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-500 mt-1">✓</span>
                    <span className="text-gray-700">Facility management solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Process Section */}
          <div className="mt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              How We Work
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-gray-300 text-sm">Get in touch via phone, email, or our website</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">We evaluate your needs and provide a detailed quote</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Execution</h3>
                <p className="text-gray-300 text-sm">Our expert team completes the work professionally</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Follow-up</h3>
                <p className="text-gray-300 text-sm">We ensure your complete satisfaction</p>
              </div>
            </div>
          </div>

          {/* Our Guarantees Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Commitment to Excellence
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Fully certified professionals with comprehensive insurance coverage</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                <p className="text-gray-600 text-sm">100% satisfaction guarantee on all our services and workmanship</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-600 text-sm">Projects completed on schedule with no hidden delays</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Warranty Included</h3>
                <p className="text-gray-600 text-sm">Extended warranty on all installations and major repairs</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our team is ready to help with your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:07833852812"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                <Phone size={24} />
                Call Us Now
              </a>
              <Link 
                to="/get-quote"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Mail size={24} />
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;
