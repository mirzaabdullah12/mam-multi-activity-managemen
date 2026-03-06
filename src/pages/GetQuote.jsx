import { useState } from 'react';
import { Send, CheckCircle, ChevronDown, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { sendEmailToAdmin } from '../services/emailService';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Wedding Light',
    'Building & Construction',
    'Repair & Maintenance',
    'Electrical Services',
    'Plumbing Services',
    'House Moving Services',
    'House & Marquee Decorating',
    'Cleaning Services',
    'Gardening Services'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set submitting state
    setIsSubmitting(true);
    setShowError(false);
    
    try {
      // Send email to admin
      const result = await sendEmailToAdmin(formData, 'quote');
      
      if (result.success) {
        // Smooth scroll to top
        window.scrollTo({ behavior: 'smooth', top: 0 });
        
        // Show success message
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        // Show error message
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 py-20 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Get a Free Quote
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Tell us about your project and we'll provide you with a detailed quote tailored to your needs
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          
          {/* Success Message */}
          {showSuccess && (
            <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-800 mb-2">Quote Request Submitted Successfully!</h4>
                  <p className="text-green-700 leading-relaxed">
                    Thank you for your interest in our services. We have received your quote request and our team will review it carefully. We'll get back to you within 24 hours with a detailed quote.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {showError && (
            <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-500 rounded-xl p-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-800 mb-2">Submission Failed</h4>
                  <p className="text-red-700 leading-relaxed">
                    We're sorry, but there was an error submitting your request. Please try again or contact us directly at 07833 852812 (English) or +44 7397 076096 (Urdu).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Request Your Quote</h2>
            <p className="text-gray-600 mb-8">Fill in the details below and we'll get back to you shortly</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service *</label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Choose a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                <textarea 
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your project requirements, timeline, and any specific details that will help us provide an accurate quote..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Quote Request
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl p-6 border border-indigo-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What Happens Next?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>
                <span>Our team will review your quote request within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>
                <span>We'll contact you to discuss your project in detail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>
                <span>You'll receive a comprehensive quote with transparent pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">✓</span>
                <span>No obligation - free consultation and quote</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;