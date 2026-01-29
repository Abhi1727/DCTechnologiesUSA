import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { siteData } from '../../utils/constants'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Left Side - Orange with Images */}
        <div className="bg-primary-500 relative flex items-center justify-center p-6 sm:p-8 lg:p-16">
          {/* Decorative Dots Pattern */}
          <div className="absolute top-16 left-16">
            <div className="grid grid-cols-6 gap-2">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full opacity-70"></div>
              ))}
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute bottom-32 left-8 w-16 h-16 border-4 border-white rounded-full opacity-50"></div>
          <div className="absolute bottom-48 left-12 w-8 h-8 bg-white rounded-full opacity-30"></div>

          {/* Arc Lines */}
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M 0 200 Q 0 100 100 100 T 200 0" stroke="white" strokeWidth="2" fill="none" />
              <path d="M 0 200 Q 0 120 120 120 T 200 20" stroke="white" strokeWidth="2" fill="none" />
              <path d="M 0 200 Q 0 140 140 140 T 200 40" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>

          {/* Images Container */}
          <div className="relative z-10 max-w-xl">
            {/* Main Large Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-4 hover:shadow-primary-700/50 hover:scale-[1.02] transition-all duration-500 group">
              <img 
                src="/images/hero-main.jpg" 
                alt="DC Technologies USA - Professional Team Collaboration"
                className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Small Image Overlay */}
            <div className="absolute bottom-8 left-8 w-48 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="/images/hero-main-md.jpg" 
                alt="Professional IT Services"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-4 right-8 w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-glow">
              <div className="text-4xl font-bold text-primary-500">30+</div>
              <div className="text-xs text-gray-600 text-center leading-tight">
                Years of<br />Experience
              </div>
            </div>
          </div>

          {/* Decorative Elements Bottom Right */}
          <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full opacity-40"></div>
          <div className="absolute bottom-4 right-16 w-6 h-6 bg-white rounded-full opacity-30"></div>
        </div>

        {/* Right Side - Dark Navy with Text */}
        <div className="bg-secondary-700 text-white relative flex items-center p-8 lg:p-16">
          {/* Decorative Diagonal Stripes */}
          <div className="absolute top-0 right-0 w-64 h-full opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <pattern id="stripes" x="0" y="0" width="20" height="100" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="8" height="100" fill="#f97316" transform="skewY(-30)" />
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#stripes)" />
            </svg>
          </div>

          {/* Decorative Dots */}
          <div className="absolute top-8 left-8 grid grid-cols-4 gap-2 opacity-20">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-1/3 right-12 w-24 h-24 bg-white rounded-full opacity-5"></div>
          <div className="absolute bottom-1/4 right-24 w-16 h-16 bg-primary-500 rounded-full opacity-20"></div>

          <div className="relative z-10 max-w-xl">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              {siteData.about.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 leading-tight">
              {siteData.about.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {siteData.about.subtitle}
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We are a premier staffing company dedicated to connecting businesses with exceptional talent. With a mission to simplify workforce challenges, we provide innovative and customized solutions across industries. Partner with us to experience seamless hiring and unmatched results.
            </p>
            <Link to="/who-we-are" className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors inline-flex items-center gap-3 group">
              {siteData.about.cta}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
