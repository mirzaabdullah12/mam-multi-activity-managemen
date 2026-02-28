import { Building2, Wrench, Zap, Droplets, Truck, Flame, Home } from 'lucide-react';
import { useMemo, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = memo(() => {
  const navigate = useNavigate();
  
  const services = useMemo(() => [
    {
      icon: <Zap size={40} />,
      title: 'Wedding Light',
      description: 'Professional wedding and event lighting services to make your special day magical and memorable with stunning light decorations.',
      color: 'from-pink-500 to-purple-500',
      bgImage: '/src/assets/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg',
      slug: 'wedding-light'
    },
    {
      icon: <Building2 size={40} />,
      title: 'Building & Construction',
      description: 'We provide professional building services including construction work, property extensions, renovations, and general building projects.',
      color: 'from-blue-500 to-cyan-500',
      bgImage: '/src/assets/working-with-blueprint.jpg',
      slug: 'building-construction'
    },
    {
      icon: <Wrench size={40} />,
      title: 'Repair & Maintenance',
      description: 'Our team offers reliable repair and maintenance services to keep your property safe and in good condition.',
      color: 'from-purple-500 to-pink-500',
      bgImage: '/src/assets/builder-orange-work-clothes-using-hammer-with-stand-different-tools-near-workshop.jpg',
      slug: 'repair-maintenance'
    },
    {
      icon: <Zap size={40} />,
      title: 'Electrical Services',
      description: 'We provide electrical installation, wiring, lighting installation, electrical fault finding, and repair services.',
      color: 'from-yellow-500 to-orange-500',
      bgImage: '/src/assets/man-electrical-technician-working-switchboard-with-fuses.jpg',
      slug: 'electrical-services'
    },
    {
      icon: <Droplets size={40} />,
      title: 'Plumbing Services',
      description: 'Our plumbing services include pipe installation, leak repairs, bathroom fittings, drainage work, and general plumbing maintenance.',
      color: 'from-cyan-500 to-blue-500',
      bgImage: '/src/assets/worker-repairing-water-heater.jpg',
      slug: 'plumbing-services'
    },
    {
      icon: <Truck size={40} />,
      title: 'House Moving Services',
      description: 'We provide safe and reliable house moving services to help you relocate easily. Our team ensures your belongings are handled carefully during transport.',
      color: 'from-green-500 to-emerald-500',
      bgImage: '/src/assets/medium-shot-delivery-people-working.jpg',
      slug: 'house-moving'
    },
    {
      icon: <Home size={40} />,
      title: 'House & Marquee Decorating',
      description: 'Transform your events with our professional house and marquee decoration services. We create beautiful setups for weddings, parties, and special occasions.',
      color: 'from-rose-500 to-pink-500',
      bgImage: '/src/assets/beautiful-wedding-altar-made-white-pink-curtains.jpg',
      slug: 'house-marquee-decorating'
    },
    {
      icon: <Flame size={40} />,
      title: 'Heating Service',
      description: 'Professional heating system installation, repair, and maintenance services. Keep your home warm and comfortable all year round with our expert heating solutions.',
      color: 'from-orange-500 to-red-500',
      bgImage: '/src/assets/technician-checking-heating-system-boiler-room.jpg',
      slug: 'heating-service'
    },
    {
      icon: <Flame size={40} />,
      title: 'Gardening Services',
      description: 'Professional garden maintenance, lawn care, landscaping, and outdoor beautification services to keep your garden looking perfect all year round.',
      color: 'from-green-500 to-emerald-500',
      bgImage: '/src/assets/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.slug}
              onClick={() => handleServiceClick(service.slug)}
              className="group rounded-2xl overflow-hidden relative min-h-[320px] hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{
                backgroundImage: `url('${service.bgImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark overlay - appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-blue-900/50 to-slate-900/60 group-hover:from-slate-900/85 group-hover:via-blue-900/80 group-hover:to-slate-900/85 transition-all duration-500"></div>
              
              {/* Content - hidden by default, appears on hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {service.title}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                  {service.description}
                </p>
                <button className="text-cyan-300 hover:text-cyan-200 font-semibold transition-colors flex items-center gap-2 group-hover:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300">
                  Learn More
                  <span className="transition-all">→</span>
                </button>
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
