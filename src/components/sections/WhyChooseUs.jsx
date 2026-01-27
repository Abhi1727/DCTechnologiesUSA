import { FaStar, FaRocket, FaShieldAlt, FaHeart, FaGlobal, FaAward } from 'react-icons/fa'
import { siteData } from '../../data/content'

const iconMap = {
  FaStar,
  FaRocket,
  FaShieldAlt,
  FaHeart,
  FaGlobal,
  FaAward,
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {siteData.whyChooseUs.eyebrow}
          </span>
          <h2 className="section-title mt-3">
            {siteData.whyChooseUs.title}
          </h2>
          <p className="section-subtitle">
            {siteData.whyChooseUs.subtitle}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.whyChooseUs.reasons.map((reason) => {
            const IconComponent = iconMap[reason.icon]
            return (
              <div key={reason.id} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <IconComponent className="text-2xl text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
