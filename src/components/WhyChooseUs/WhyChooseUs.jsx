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

        {/* Reasons Grid - Image Cards with Icons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason) => {
            const IconComponent = iconMap[reason.icon]
            return (
              <div key={reason.id} className="group cursor-pointer">
                {/* Image Card */}
                <div className="relative overflow-hidden rounded-2xl mb-4 sm:mb-6 shadow-lg">
                  {/* Placeholder Image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Icon Circle Overlay */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-2xl sm:text-2xl md:text-3xl text-white" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center pt-6 sm:pt-8 px-2">
                  <h3 className="text-lg sm:text-xl font-bold text-secondary-700 mb-2 sm:mb-3 group-hover:text-primary-500 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
