import { FaArrowRight } from 'react-icons/fa'
import { siteData } from '../../utils/constants'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="container-custom py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 lg:pr-8">
            <div className="inline-block">
              <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-primary-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                {siteData.hero.eyebrow}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
              {siteData.hero.title}
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {siteData.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors inline-flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base">
                {siteData.hero.cta.primary}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-secondary-700 border-2 border-secondary-700 rounded-full font-semibold hover:bg-secondary-50 transition-colors inline-flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                {siteData.hero.cta.secondary}
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero Image with responsive sources */}
              <picture>
                <source 
                  media="(min-width: 1024px)" 
                  srcSet="/images/hero-main.webp" 
                  type="image/webp"
                />
                <source 
                  media="(min-width: 768px)" 
                  srcSet="/images/hero-main-md.jpg" 
                  type="image/jpeg"
                />
                <source 
                  media="(max-width: 767px)" 
                  srcSet="/images/hero-main-sm.jpg" 
                  type="image/jpeg"
                />
                <img 
                  src="/images/hero-main.jpg" 
                  alt="IT Staffing and Technology Recruitment Services - Professional team collaboration"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="eager"
                  width="1200"
                  height="900"
                />
              </picture>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
