import { FaNetworkWired, FaLightbulb, FaHandsHelping, FaUsers, FaCog, FaGlobe } from 'react-icons/fa'
import { siteData } from '../../utils/constants'

const iconMap = {
  FaNetworkWired,
  FaLightbulb,
  FaHandsHelping,
  FaUsers,
  FaCog,
  FaGlobe,
}

export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      icon: 'FaNetworkWired',
      title: 'Industry Expertise',
      description: 'Extensive knowledge across diverse sectors ensures tailored hiring solutions for your unique needs.',
    },
    {
      id: 2,
      icon: 'FaLightbulb',
      title: 'Quality Talent Pool',
      description: 'Access a pre-vetted network of top-tier professionals ready to drive your success.',
    },
    {
      id: 3,
      icon: 'FaHandsHelping',
      title: 'Customized Solutions',
      description: 'Our flexible services align perfectly with your business goals and project timelines.',
    },
    {
      id: 4,
      icon: 'FaUsers',
      title: 'Dedicated Support',
      description: 'Personalized service and ongoing support throughout the entire hiring process.',
    },
    {
      id: 5,
      icon: 'FaCog',
      title: 'Proven Process',
      description: 'Streamlined recruitment methodology that delivers results efficiently and effectively.',
    },
    {
      id: 6,
      icon: 'FaGlobe',
      title: 'Global Reach',
      description: 'Extensive network spanning multiple regions to connect you with the best talent worldwide.',
    },
  ]

  return (
    <section id="why-choose-us" className="section bg-gray-50 relative overflow-hidden">
      {/* Decorative Dots Background */}
      <div className="absolute top-0 left-0 w-full h-32 opacity-5">
        <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2 sm:gap-3 p-2 sm:p-4">
          {[...Array(120)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            WHY CHOOSE US?
          </span>
          <h2 className="section-title mt-3 text-secondary-700 text-3xl sm:text-4xl md:text-5xl">
            Reasons to Partner With Us
          </h2>
          <p className="section-subtitle text-gray-600 text-base sm:text-lg md:text-xl">
            We are committed to delivering exceptional staffing solutions that prioritize your business growth and workforce excellence.
          </p>
        </div>

        {/* Reasons Grid - Icon Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon]
            return (
              <div key={reason.id} className="card p-6 sm:p-8 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <IconComponent className="text-3xl sm:text-4xl text-white" />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-secondary-700 mb-3 sm:mb-4 group-hover:text-primary-500 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
