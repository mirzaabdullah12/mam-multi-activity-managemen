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

  // Image slider for electrical services
  const electricalImages = [
    '/src/assets/elec 1.jpg',
    '/src/assets/elec 2.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % electricalImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + electricalImages.length) % electricalImages.length);
  };

  const servicesData = {
    'wedding-light': {
      title: 'Wedding Light',
      image: '/src/assets/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg',
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
      image: '/src/assets/beautiful-wedding-altar-made-white-pink-curtains.jpg',
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
      image: '/src/assets/technician-checking-heating-system-boiler-room.jpg',
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
    'building-construction': {
      title: 'Building & Construction',
      image: '/src/assets/working-with-blueprint.jpg',
      description: 'Professional building and construction services for residential and commercial projects',
      longDescription: 'We provide comprehensive building and construction services with over 25 years of experience. Our team of skilled professionals handles everything from small renovations to large-scale construction projects with precision and care.',
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
      image: '/src/assets/builder-orange-work-clothes-using-hammer-with-stand-different-tools-near-workshop.jpg',
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
      image: '/src/assets/man-electrical-technician-working-switchboard-with-fuses.jpg',
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
      image: '/src/assets/worker-repairing-water-heater.jpg',
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
      image: '/src/assets/medium-shot-delivery-people-working.jpg',
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
      image: '/src/assets/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg',
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

        {/* Image Slider - Only for Electrical Services */}
        {serviceId === 'electrical-services' && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Work Gallery</h3>
            <div className="relative max-w-4xl mx-auto">
              {/* Main Image */}
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <img 
                  src={electricalImages[currentImageIndex]} 
                  alt={`Electrical work ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} className="text-gray-800" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentImageIndex + 1} / {electricalImages.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-4 justify-center mt-6">
                {electricalImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-4 transition-all ${
                      currentImageIndex === index 
                        ? 'border-indigo-600 scale-110' 
                        : 'border-gray-300 hover:border-indigo-400'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
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
              href="tel:123-456-789-0000"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              <Phone size={24} />
              Call Us Now
            </a>
            <a 
              href="mailto:your@email.com"
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
