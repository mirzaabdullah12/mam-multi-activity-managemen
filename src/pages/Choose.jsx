import { Check, Award, Users, PoundSterling, Star, Shield } from 'lucide-react';
import { memo, useMemo } from 'react';

const Choose = memo(() => {
  const reasons = useMemo(() => [
    {
      icon: <Users size={32} />,
      title: 'Professional Team',
      description: 'Skilled professionals with years of expertise.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Reliable Service',
      description: 'Timely delivery and consistent quality.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <PoundSterling size={32} />,
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising quality.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Workmanship',
      description: 'Exceptional craftsmanship and attention to detail.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Star size={32} />,
      title: 'Customer Satisfaction',
      description: 'Your happiness is our top priority.',
      color: 'from-indigo-500 to-purple-500'
    }
  ], []);

  return (
    <section id="choose" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600">
            Excellence in every service we provide
          </p>
        </div>

        {/* Reasons Grid - Compact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-transparent hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {reason.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Choose.displayName = 'Choose';

export default Choose;
