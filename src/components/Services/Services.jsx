import { FaUserTie, FaBriefcase, FaChartLine, FaHandshake, FaClipboardCheck, FaUsers, FaArrowRight, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { siteData } from '../../utils/constants'

const iconMap = {
  FaUserTie,
  FaBriefcase,
  FaChartLine,
  FaHandshake,
  FaClipboardCheck,
  FaUsers,
}

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            {siteData.services.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mt-3 text-secondary-700 px-4">
            {siteData.services.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto px-4">
            {siteData.services.subtitle}
          </p>
        </div>

        {/* Features List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 max-w-5xl mx-auto px-4">
          {siteData.services.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="text-primary-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 px-4">
          {siteData.services.items.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <div key={service.id} className="card p-5 sm:p-6 md:p-8 group cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center group-hover:bg-primary-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="text-3xl text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary-700 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link to="/services" className="text-primary-500 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services" className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 group">
            View All Services
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
