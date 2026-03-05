import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Target, Heart, Shield, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// asset imports (so they bundle correctly)
import heroImage from '../assets/pexels-tima-miroshnichenko-6196677.jpg';

const AboutPage = memo(() => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 py-20 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            About MAM
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Multi Activity Management - Your trusted partner for all property services since 1999
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                MAM Multi Activity Management is a leading provider of comprehensive property services, established with a vision to deliver excellence in every project we undertake. With extensive experience, we have built a reputation for quality, reliability, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our team of certified professionals specializes in a wide range of services including construction, electrical work, plumbing, gardening, and event services. We pride ourselves on our commitment to delivering projects on time and within budget.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From small repairs to large-scale renovations, we handle every project with the same level of dedication and attention to detail, ensuring complete customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="MAM Team"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center">
              <p className="text-5xl font-black mb-2">1000+</p>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-6 text-white text-center">
              <p className="text-5xl font-black mb-2">500+</p>
              <p className="text-lg">Happy Clients</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white text-center">
              <p className="text-5xl font-black mb-2">50+</p>
              <p className="text-lg">Expert Team</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional property services that exceed customer expectations through quality workmanship, professional expertise, and unwavering commitment to excellence. We strive to be the most trusted name in multi-activity management services.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the leading provider of comprehensive property services, recognized for innovation, reliability, and customer satisfaction. We aim to set new standards in the industry while maintaining our core values of integrity and excellence.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">Honest and transparent in all our dealings</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">Committed to delivering the highest quality</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teamwork</h3>
                <p className="text-gray-600 text-sm">Collaboration and mutual respect</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Continuously improving our services</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose MAM?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Licensed & Certified</h3>
                <p className="text-gray-300">All our professionals are fully licensed, certified, and insured for your peace of mind.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
                <p className="text-gray-300">Emergency services available round the clock to address your urgent needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
                <p className="text-gray-300">100% satisfaction guarantee with warranty on all our work and installations.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust MAM for their property needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services"
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                View Our Services
              </Link>
              <a 
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
