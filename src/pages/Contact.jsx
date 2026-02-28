import { Mail, MapPin, Send, Phone, Clock, CheckCircle } from 'lucide-react';
import { memo } from 'react';

const Contact = memo(() => {
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
                    href="mailto:your@email.com" 
                    className="text-lg text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    your@email.com
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
                  <a 
                    href="tel:123-456-789-0000" 
                    className="text-lg text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    123-456-789-0000
                  </a>
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
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="123-456-7890"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your project or question..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                <Send size={20} />
                Send Message
                <span className="group-hover:translate-x-1 transition-transform">→</span>
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
