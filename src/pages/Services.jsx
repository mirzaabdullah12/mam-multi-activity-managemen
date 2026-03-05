import { Building2, Wrench, Zap, Droplets, Truck, Flame, Home, Sparkles } from 'lucide-react';
import { useMemo, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = memo(() => {
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
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional services tailored to meet all your property needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
              <div className="absolute inset-0 p-6 flex flex-col justify-end pb-8">
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
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;
