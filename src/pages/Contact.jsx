import { Mail, MapPin, Send, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { memo, useState } from 'react';
import { sendEmailToAdmin } from '../services/emailService';

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const result = await sendEmailToAdmin(formData, 'contact');
      
      if (result.success) {
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        
        // Smooth scroll to top of contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Show success message
        setShowSuccess(true);
        
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
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            Get in Touch
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            If you need any of our services or have any questions, please contact us.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <a 
                    href="mailto:Contact@mamderby.co.uk" 
                    className="text-lg text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Contact@mamderby.co.uk
                  </a>
                  <p className="text-gray-600 mt-2 text-sm">
                    Send us an email anytime
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:07833852812" 
                      className="block text-lg text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      07833 852812 (English)
                    </a>
                    <a 
                      href="tel:+447397076096" 
                      className="block text-lg text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      +44 7397 076096 (Urdu)
                    </a>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl text-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Service Available</h3>
                  <p className="text-cyan-100 text-lg leading-relaxed">
                    Residential & Commercial Projects
                  </p>
                </div>
              </div>
              <div className="space-y-3 mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-cyan-300 flex-shrink-0" />
                  <span className="text-white/90">Home Maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-cyan-300 flex-shrink-0" />
                  <span className="text-white/90">Commercial Buildings</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-cyan-300 flex-shrink-0" />
                  <span className="text-white/90">Emergency Services</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-green-800 mb-2">Message Sent Successfully!</h4>
                    <p className="text-green-700 leading-relaxed">
                      Thank you for contacting us. We have received your message and our team will get back to you within 24 hours. We appreciate your interest in our services.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {showError && (
              <div className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-500 rounded-xl p-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-red-800 mb-2">Submission Failed</h4>
                    <p className="text-red-700 leading-relaxed">
                      We're sorry, but there was an error sending your message. Please try again or contact us directly at 07833 852812 (English) or +44 7397 076096 (Urdu).
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
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
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
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
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>
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
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock size={24} className="text-blue-600" />
            <h3 className="text-xl font-bold text-gray-900">Quick Response</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our team will respond to your enquiry and help you with the best solution for your needs.
          </p>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
