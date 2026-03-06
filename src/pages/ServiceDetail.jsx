import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Image slider for electrical services (use bundler-friendly URLs)
  const electricalImages = [
    {
      url: new URL('../assets/elec 1.jpg', import.meta.url).href,
      title: 'Professional Electrical Installation',
      description: 'Expert wiring and electrical panel setup with safety compliance'
    },
    {
      url: new URL('../assets/elec 2.jpg', import.meta.url).href,
      title: 'Electrical Maintenance & Repair',
      description: 'Regular maintenance and emergency repair services available 24/7'
    }
  ];

  // Image slider for gardening services (use bundler-friendly URLs)
  const gardeningImages = [
    {
      url: new URL('../assets/garden 1.jpg', import.meta.url).href,
      title: 'Professional Lawn Care',
      description: 'Expert lawn mowing, trimming and maintenance services'
    },
    {
      url: new URL('../assets/garden 2.jpg', import.meta.url).href,
      title: 'Garden Landscaping',
      description: 'Beautiful garden design and landscaping solutions'
    },
    {
      url: new URL('../assets/garden 3.jpg', import.meta.url).href,
      title: 'Garden Maintenance',
      description: 'Regular garden upkeep and seasonal cleanup services'
    }
  ];

  // Image slider for house moving services (use bundler-friendly URLs)
  const houseMovingImages = [
    {
      url: new URL('../assets/house 1.jpg', import.meta.url).href,
      title: 'Professional House Moving',
      description: 'Safe and reliable residential moving services with care',
      position: 'center'
    },
    {
      url: new URL('../assets/house 2.jpg', import.meta.url).href,
      title: 'Packing & Transportation',
      description: 'Expert packing and secure transportation of your belongings',
      position: 'center top'
    }
  ];

  // Image slider for plumbing services (use bundler-friendly URLs)
  const plumbingImages = [
    {
      url: new URL('../assets/plumber 1.jpg', import.meta.url).href,
      title: 'Professional Plumbing Services',
      description: 'Expert pipe installation, repairs and maintenance',
      position: 'center'
    },
    {
      url: new URL('../assets/plumber 2.jpg', import.meta.url).href,
      title: 'Emergency Plumbing Solutions',
      description: 'Fast and reliable plumbing repairs available 24/7',
      position: 'center'
    }
  ];

  // Image slider for wedding light services (use bundler-friendly URLs)
  const weddingImages = [
    {
      url: new URL('../assets/weeding 2.jpg', import.meta.url).href,
      title: 'Stunning Wedding Lighting',
      description: 'Beautiful light decorations for your special day',
      position: 'center'
    },
    {
      url: new URL('../assets/wedding 1.jpg', import.meta.url).href,
      title: 'Elegant Event Lighting',
      description: 'Professional lighting setup for weddings and events',
      position: 'center'
    }
  ];

  // Image slider for house & marquee decorating services (use bundler-friendly URLs)
  const marqueeImages = [
    {
      url: new URL('../assets/maurqi1.jpg', import.meta.url).href,
      title: 'Elegant Marquee Decoration',
      description: 'Beautiful marquee setup for weddings and special events',
      position: 'center'
    },
    {
      url: new URL('../assets/marqi2.jpg', import.meta.url).href,
      title: 'House Event Decoration',
      description: 'Professional house decoration for parties and celebrations',
      position: 'center'
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    if (serviceId === 'electrical-services' || serviceId === 'gardening-services' || serviceId === 'house-moving' || serviceId === 'plumbing-services' || serviceId === 'wedding-light' || serviceId === 'house-marquee-decorating') {
      const interval = setInterval(() => {
        if (serviceId === 'electrical-services') {
          setCurrentImageIndex((prev) => (prev + 1) % electricalImages.length);
        } else if (serviceId === 'gardening-services') {
          setCurrentImageIndex((prev) => (prev + 1) % gardeningImages.length);
        } else if (serviceId === 'house-moving') {
          setCurrentImageIndex((prev) => (prev + 1) % houseMovingImages.length);
        } else if (serviceId === 'plumbing-services') {
          setCurrentImageIndex((prev) => (prev + 1) % plumbingImages.length);
        } else if (serviceId === 'wedding-light') {
          setCurrentImageIndex((prev) => (prev + 1) % weddingImages.length);
        } else if (serviceId === 'house-marquee-decorating') {
          setCurrentImageIndex((prev) => (prev + 1) % marqueeImages.length);
        }
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }
  }, [serviceId, electricalImages.length, gardeningImages.length, houseMovingImages.length, plumbingImages.length, weddingImages.length, marqueeImages.length]);

  // Get current images based on service
  const getCurrentImages = () => {
    if (serviceId === 'electrical-services') return electricalImages;
    if (serviceId === 'gardening-services') return gardeningImages;
    if (serviceId === 'house-moving') return houseMovingImages;
    if (serviceId === 'plumbing-services') return plumbingImages;
    if (serviceId === 'wedding-light') return weddingImages;
    if (serviceId === 'house-marquee-decorating') return marqueeImages;
    return [];
  };

  const currentImages = getCurrentImages();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const servicesData = {
    'wedding-light': {
      title: 'Wedding Light',
      image: new URL('../assets/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg', import.meta.url).href,
      description: 'Professional wedding and event lighting services',
      longDescription: 'Make your special day magical with our professional wedding lighting services. We specialize in creating stunning light displays that transform venues into enchanting spaces for weddings and special events.',
      features: [
        'Wedding Stage Lighting',
        'Fairy Light Decorations',
        'LED Light Installations',
        'Outdoor Event Lighting',
        'Dance Floor Lighting',
        'Ambient Mood Lighting',
        'Custom Light Designs',
        'Professional Setup & Removal'
      ],
      benefits: [
        'Experienced lighting designers',
        'High-quality equipment',
        'Customized lighting plans',
        'Affordable packages',
        'On-time setup and removal',
        'Professional service'
      ],
      process: [
        { step: 1, title: 'Consultation', desc: 'Discuss your vision and requirements' },
        { step: 2, title: 'Design Plan', desc: 'Create custom lighting design' },
        { step: 3, title: 'Equipment Setup', desc: 'Professional installation before event' },
        { step: 4, title: 'Event Support', desc: 'On-site support during event' },
        { step: 5, title: 'Removal', desc: 'Clean removal after event' }
      ]
    },
    'house-marquee-decorating': {
      title: 'House & Marquee Decorating',
      image: new URL('../assets/beautiful-wedding-altar-made-white-pink-curtains.jpg', import.meta.url).href,
      description: 'Professional decoration services for houses and marquees',
      longDescription: 'Transform your events with our expert house and marquee decoration services. We create beautiful, memorable setups for weddings, parties, and all special occasions with attention to every detail.',
      features: [
        'Wedding Decorations',
        'Marquee Setup & Styling',
        'Floral Arrangements',
        'Balloon Decorations',
        'Stage Decorations',
        'Entrance Decorations',
        'Table Settings',
        'Theme-based Decorations'
      ],
      benefits: [
        'Creative design team',
        'Quality decoration materials',
        'Custom themes available',
        'Complete setup service',
        'Affordable pricing',
        'Timely execution'
      ],
      process: [
        { step: 1, title: 'Theme Selection', desc: 'Choose your decoration theme' },
        { step: 2, title: 'Planning', desc: 'Detailed decoration plan created' },
        { step: 3, title: 'Material Preparation', desc: 'Quality materials arranged' },
        { step: 4, title: 'Setup', desc: 'Professional decoration installation' },
        { step: 5, title: 'Final Touch', desc: 'Perfect finishing and cleanup' }
      ]
    },
    'heating-service': {
      title: 'Heating Service',
      image: new URL('../assets/technician-checking-heating-system-boiler-room.jpg', import.meta.url).href,
      description: 'Professional heating system installation and repair',
      longDescription: 'Keep your home warm and comfortable with our professional heating services. We provide expert installation, repair, and maintenance of all types of heating systems.',
      features: [
        'Boiler Installation',
        'Central Heating Systems',
        'Radiator Installation',
        'Heating Repairs',
        'System Maintenance',
        'Emergency Heating Service',
        'Energy Efficient Solutions',
        'Heating System Upgrades'
      ],
      benefits: [
        'Certified heating engineers',
        'Quality heating equipment',
        'Energy-efficient solutions',
        'Competitive pricing',
        '24/7 emergency service',
        'Guaranteed workmanship'
      ],
      process: [
        { step: 1, title: 'Assessment', desc: 'Evaluate your heating needs' },
        { step: 2, title: 'Recommendation', desc: 'Suggest best heating solution' },
        { step: 3, title: 'Installation', desc: 'Professional system installation' },
        { step: 4, title: 'Testing', desc: 'Complete system testing' },
        { step: 5, title: 'Maintenance', desc: 'Ongoing support and service' }
      ]
    },
    'cleaning-services': {
      title: 'Cleaning Services',
      image: new URL('../assets/medium-shot-people-cleaning-building (1).jpg', import.meta.url).href,
      description: 'Professional cleaning services for homes and offices',
      longDescription: 'Our professional cleaning team provides comprehensive cleaning solutions for residential and commercial properties. We use eco-friendly products and modern equipment to ensure spotless results every time.',
      features: [
        'Deep Cleaning Services',
        'Regular House Cleaning',
        'Office Cleaning',
        'Carpet & Upholstery Cleaning',
        'Window Cleaning',
        'Post-Construction Cleaning',
        'Move In/Move Out Cleaning',
        'Sanitization Services'
      ],
      benefits: [
        'Trained cleaning professionals',
        'Eco-friendly cleaning products',
        'Flexible scheduling options',
        'Affordable pricing packages',
        'Quality assurance guarantee',
        'Fully insured service'
      ],
      process: [
        { step: 1, title: 'Consultation', desc: 'Discuss your cleaning requirements' },
        { step: 2, title: 'Custom Plan', desc: 'Create tailored cleaning schedule' },
        { step: 3, title: 'Professional Cleaning', desc: 'Expert team performs thorough cleaning' },
        { step: 4, title: 'Quality Check', desc: 'Ensure all areas meet standards' },
        { step: 5, title: 'Follow-up', desc: 'Regular maintenance and support' }
      ]
    },
    'building-construction': {
      title: 'Building & Construction',
      image: new URL('../assets/working-with-blueprint.jpg', import.meta.url).href,
      description: 'Professional building and construction services for residential and commercial projects',
      longDescription: 'We provide comprehensive building and construction services with extensive experience. Our team of skilled professionals handles everything from small renovations to large-scale construction projects with precision and care.',
      features: [
        'New Construction Projects',
        'Property Extensions & Additions',
        'Home Renovations & Remodeling',
        'Commercial Building Work',
        'Structural Repairs & Modifications',
        'Foundation Work',
        'Roofing & Exterior Work',
        'Interior Finishing'
      ],
      benefits: [
        'Experienced and certified builders',
        'High-quality materials and workmanship',
        'On-time project completion',
        'Competitive pricing',
        'Full project management',
        'Building regulations compliance'
      ],
      process: [
        { step: 1, title: 'Initial Consultation', desc: 'We discuss your project requirements and vision' },
        { step: 2, title: 'Site Assessment', desc: 'Our team evaluates the site and provides recommendations' },
        { step: 3, title: 'Design & Planning', desc: 'We create detailed plans and obtain necessary permits' },
        { step: 4, title: 'Construction', desc: 'Professional execution with regular progress updates' },
        { step: 5, title: 'Final Inspection', desc: 'Quality check and handover of completed project' }
      ]
    },
    'repair-maintenance': {
      title: 'Repair & Maintenance',
      image: new URL('../assets/builder-orange-work-clothes-using-hammer-with-stand-different-tools-near-workshop.jpg', import.meta.url).href,
      description: 'Reliable repair and maintenance services to keep your property in perfect condition',
      longDescription: 'Our maintenance team provides prompt and professional repair services for all types of properties. We understand the importance of keeping your home or business in excellent condition.',
      features: [
        'General Property Repairs',
        'Preventive Maintenance',
        'Emergency Repair Services',
        'Painting & Decorating',
        'Carpentry Work',
        'Drywall Repair',
        'Door & Window Repairs',
        'Weatherproofing'
      ],
      benefits: [
        'Fast response time',
        'Skilled maintenance technicians',
        'Affordable pricing',
        'Quality workmanship guaranteed',
        'Regular maintenance programs available',
        'Emergency service available'
      ],
      process: [
        { step: 1, title: 'Contact Us', desc: 'Call or email to report the issue' },
        { step: 2, title: 'Assessment', desc: 'We evaluate the problem and provide a quote' },
        { step: 3, title: 'Scheduling', desc: 'Book a convenient time for repairs' },
        { step: 4, title: 'Repair Work', desc: 'Professional repair with quality materials' },
        { step: 5, title: 'Follow-up', desc: 'Ensure complete satisfaction' }
      ]
    },
    'electrical-services': {
      title: 'Electrical Services',
      image: new URL('../assets/man-electrical-technician-working-switchboard-with-fuses.jpg', import.meta.url).href,
      description: 'Professional electrical installation, repair, and maintenance services',
      longDescription: 'Our certified electricians provide safe and reliable electrical services for homes and businesses. We handle everything from simple repairs to complete electrical installations.',
      features: [
        'Electrical Installation',
        'Wiring & Rewiring',
        'Lighting Installation',
        'Electrical Fault Finding',
        'Circuit Breaker Repairs',
        'Power Point Installation',
        'Safety Inspections',
        'Emergency Electrical Services'
      ],
      benefits: [
        'Licensed and insured electricians',
        'Available 24/7 for emergencies',
        'Safety-first approach',
        'Competitive rates',
        'Quality workmanship',
        'Compliance with electrical codes'
      ],
      process: [
        { step: 1, title: 'Initial Contact', desc: 'Describe your electrical needs' },
        { step: 2, title: 'Safety Assessment', desc: 'Our electrician evaluates the situation' },
        { step: 3, title: 'Quote & Planning', desc: 'Detailed quote and work plan provided' },
        { step: 4, title: 'Installation/Repair', desc: 'Professional electrical work performed' },
        { step: 5, title: 'Testing & Certification', desc: 'Complete testing and safety certification' }
      ]
    },
    'plumbing-services': {
      title: 'Plumbing Services',
      image: new URL('../assets/worker-repairing-water-heater.jpg', import.meta.url).href,
      description: 'Expert plumbing solutions for all your residential and commercial needs',
      longDescription: 'Our experienced plumbers provide comprehensive plumbing services with a focus on quality and customer satisfaction. We handle all types of plumbing work efficiently.',
      features: [
        'Pipe Installation & Repair',
        'Leak Detection & Repair',
        'Bathroom Fittings',
        'Kitchen Plumbing',
        'Drainage Work',
        'Water Heater Installation',
        'Tap & Fixture Repairs',
        'Emergency Plumbing'
      ],
      benefits: [
        'Experienced plumbers',
        'Fast and reliable service',
        'Quality parts and materials',
        'Competitive pricing',
        'Emergency service available',
        'Guaranteed workmanship'
      ],
      process: [
        { step: 1, title: 'Call for Service', desc: 'Contact us with your plumbing issue' },
        { step: 2, title: 'Diagnosis', desc: 'Our plumber identifies the problem' },
        { step: 3, title: 'Solution & Quote', desc: 'We provide the best solution and pricing' },
        { step: 4, title: 'Repair/Installation', desc: 'Professional plumbing work completed' },
        { step: 5, title: 'Quality Check', desc: 'Ensure everything works perfectly' }
      ]
    },
    'house-moving': {
      title: 'House Moving Services',
      image: new URL('../assets/medium-shot-delivery-people-working.jpg', import.meta.url).href,
      description: 'Safe and reliable house moving services for stress-free relocation',
      longDescription: 'We provide professional house moving services to make your relocation smooth and hassle-free. Our experienced team handles your belongings with care and ensures safe transport.',
      features: [
        'Residential Moving',
        'Commercial Moving',
        'Packing Services',
        'Loading & Unloading',
        'Furniture Disassembly/Assembly',
        'Safe Transportation',
        'Storage Solutions',
        'Insurance Coverage'
      ],
      benefits: [
        'Experienced moving team',
        'Careful handling of belongings',
        'Affordable rates',
        'Flexible scheduling',
        'Full insurance coverage',
        'Professional packing materials'
      ],
      process: [
        { step: 1, title: 'Get a Quote', desc: 'Contact us for a free moving estimate' },
        { step: 2, title: 'Planning', desc: 'We plan the move according to your schedule' },
        { step: 3, title: 'Packing', desc: 'Professional packing of your belongings' },
        { step: 4, title: 'Transportation', desc: 'Safe transport to your new location' },
        { step: 5, title: 'Unpacking', desc: 'Help with unpacking and setup' }
      ]
    },
    'gardening-services': {
      title: 'Gardening Services',
      image: new URL('../assets/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg', import.meta.url).href,
      description: 'Professional garden maintenance and landscaping services',
      longDescription: 'Transform and maintain your outdoor spaces with our professional gardening services. We provide comprehensive garden care, landscaping, and maintenance to keep your garden beautiful throughout the year.',
      features: [
        'Garden Maintenance',
        'Lawn Mowing & Care',
        'Hedge Trimming',
        'Leaf Removal',
        'Garden Design & Landscaping',
        'Plant Care & Pruning',
        'Seasonal Garden Cleanup',
        'Garden Irrigation'
      ],
      benefits: [
        'Experienced gardeners',
        'Regular maintenance programs',
        'Quality equipment',
        'Competitive pricing',
        'Seasonal care packages',
        'Professional landscaping'
      ],
      process: [
        { step: 1, title: 'Garden Assessment', desc: 'Evaluate your garden needs' },
        { step: 2, title: 'Service Plan', desc: 'Create customized maintenance plan' },
        { step: 3, title: 'Regular Care', desc: 'Scheduled garden maintenance' },
        { step: 4, title: 'Seasonal Work', desc: 'Seasonal cleanup and care' },
        { step: 5, title: 'Ongoing Support', desc: 'Continuous garden support' }
      ]
    }
  };

  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
                Go back to home
              </button>
            </div>
          </div>
        );
      }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section with Image */}
      <div 
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.70), rgba(30, 58, 138, 0.75)), url('${service.image}')`,
        }}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <button 
              onClick={() => navigate('/')}
              className="mb-6 flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Services
            </button>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {service.longDescription}
          </p>
        </div>

        {/* Process */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {service.process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Slider - Only for Wedding Light Services */}
        {serviceId === 'wedding-light' && (
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Work Gallery</h3>
            <p className="text-center text-gray-600 mb-8">Stunning wedding and event lighting decorations</p>
            
            <div className="relative max-w-3xl mx-auto">
              {/* Main Image Slider */}
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: image.position || 'center'
                        }}
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Image Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex gap-2 justify-center mt-6">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentImageIndex === index 
                        ? 'w-8 h-3 bg-gradient-to-r from-pink-600 to-purple-600' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-sm font-semibold text-gray-600">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Image Slider - Only for Electrical Services */}
        {serviceId === 'electrical-services' && (
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Work Gallery</h3>
            <p className="text-center text-gray-600 mb-8">Professional electrical installations and repairs</p>
            
            <div className="relative max-w-3xl mx-auto">
              {/* Main Image Slider */}
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Image Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex gap-2 justify-center mt-6">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentImageIndex === index 
                        ? 'w-8 h-3 bg-gradient-to-r from-indigo-600 to-cyan-600' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-sm font-semibold text-gray-600">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Image Slider - Only for Gardening Services */}
        {serviceId === 'gardening-services' && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Work Gallery</h3>
            <p className="text-center text-gray-600 mb-8">Professional garden maintenance and landscaping</p>
            
            <div className="relative max-w-3xl mx-auto">
              {/* Main Image Slider */}
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Image Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex gap-2 justify-center mt-6">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentImageIndex === index 
                        ? 'w-8 h-3 bg-gradient-to-r from-green-600 to-emerald-600' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-sm font-semibold text-gray-600">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Image Slider - Only for House Moving Services */}
        {serviceId === 'house-moving' && (
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Work Gallery</h3>
            <p className="text-center text-gray-600 mb-8">Professional house moving and relocation services</p>
            
            <div className="relative max-w-3xl mx-auto">
              {/* Main Image Slider */}
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: image.position || 'center'
                        }}
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Image Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex gap-2 justify-center mt-6">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentImageIndex === index 
                        ? 'w-8 h-3 bg-gradient-to-r from-orange-600 to-amber-600' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-sm font-semibold text-gray-600">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Image Slider - Only for Plumbing Services */}
        {serviceId === 'plumbing-services' && (
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Work Gallery</h3>
            <p className="text-center text-gray-600 mb-8">Professional plumbing installations and repairs</p>
            
            <div className="relative max-w-3xl mx-auto">
              {/* Main Image Slider */}
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: image.position || 'center'
                        }}
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Image Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex gap-2 justify-center mt-6">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentImageIndex === index 
                        ? 'w-8 h-3 bg-gradient-to-r from-blue-600 to-cyan-600' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-sm font-semibold text-gray-600">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Image Slider - Only for House & Marquee Decorating Services */}
        {serviceId === 'house-marquee-decorating' && (
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">Our Work Gallery</h3>
            <p className="text-center text-gray-600 mb-8">Beautiful house and marquee decorations</p>
            
            <div className="relative max-w-3xl mx-auto">
              {/* Main Image Slider */}
              <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl bg-gray-900">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="w-full h-full relative">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="absolute inset-0 w-full h-full"
                        style={{ 
                          objectFit: 'cover',
                          objectPosition: image.position || 'center'
                        }}
                      />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Image Details */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{image.title}</h4>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="flex gap-2 justify-center mt-6">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentImageIndex === index 
                        ? 'w-8 h-3 bg-gradient-to-r from-rose-600 to-pink-600' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4">
                <span className="text-sm font-semibold text-gray-600">
                  {currentImageIndex + 1} / {currentImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Features & Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services Include</h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl p-8 shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-300 flex-shrink-0 mt-1" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free consultation and quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:07833852812"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              <Phone size={24} />
              Call Us Now
            </a>
            <a 
              href="mailto:Contact@mamderby.co.uk"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
            >
              <Mail size={24} />
              Email Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
