import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { useEffect } from 'react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const servicesData = {
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
    'garden-heating': {
      title: 'Garden & Heating Service',
      image: '/src/assets/caucasian-male-worker-gloves-removing-dry-leaves-from-sidewalk-with-hand-blower-park-side-view.jpg',
      description: 'Professional garden maintenance and heating system services',
      longDescription: 'We offer comprehensive garden maintenance and heating system services to keep your outdoor spaces beautiful and your home comfortable year-round.',
      features: [
        'Garden Maintenance',
        'Lawn Care & Mowing',
        'Hedge Trimming',
        'Leaf Removal',
        'Heating System Installation',
        'Boiler Repairs',
        'Radiator Installation',
        'Heating System Maintenance'
      ],
      benefits: [
        'Experienced gardeners and heating engineers',
        'Regular maintenance programs',
        'Competitive pricing',
        'Quality service guaranteed',
        'Emergency heating repairs',
        'Seasonal garden care'
      ],
      process: [
        { step: 1, title: 'Consultation', desc: 'Discuss your garden or heating needs' },
        { step: 2, title: 'Assessment', desc: 'Evaluate the work required' },
        { step: 3, title: 'Service Plan', desc: 'Create a customized service plan' },
        { step: 4, title: 'Service Delivery', desc: 'Professional work completed' },
        { step: 5, title: 'Ongoing Support', desc: 'Regular maintenance and support' }
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
    </div>
  );
};

export default ServiceDetail;
