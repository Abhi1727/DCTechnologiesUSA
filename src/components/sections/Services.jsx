import { FaUserTie, FaBriefcase, FaChartLine, FaHandshake, FaClipboardCheck, FaUsers, FaArrowRight, FaCheck } from 'react-icons/fa'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { siteData } from '../../data/content'

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
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {siteData.services.eyebrow}
          </span>
          <h2 className="section-title mt-3">
            {siteData.services.title}
          </h2>
          <p className="section-subtitle">
            {siteData.services.subtitle}
          </p>
        </div>

        {/* Features List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
          {siteData.services.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {siteData.services.items.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <Card key={service.id} className="p-8 group cursor-pointer">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    <IconComponent className="text-3xl text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <a href="#" className="text-primary-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <FaArrowRight className="text-sm" />
                </a>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary">
            View All Services
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
