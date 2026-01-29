import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { siteData } from '../../utils/constants'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === siteData.testimonials.items.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? siteData.testimonials.items.length - 1 : prev - 1
    )
  }

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section id="testimonials" className="section bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Floating Profile Images */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Decorative Arc */}
            <div className="absolute bottom-0 left-0 w-48 h-96 opacity-10">
              <svg viewBox="0 0 100 200" className="w-full h-full">
                <path d="M 0 200 Q 0 100 50 100 T 100 0" stroke="#f97316" strokeWidth="2" fill="none" />
                <path d="M 0 200 Q 0 120 60 120 T 100 20" stroke="#f97316" strokeWidth="2" fill="none" />
                <path d="M 0 200 Q 0 140 70 140 T 100 40" stroke="#f97316" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Decorative Orange Circles */}
            <div className="absolute top-20 left-12 w-16 h-16 bg-primary-500 rounded-full opacity-80"></div>
            <div className="absolute top-32 left-20 w-8 h-8 bg-primary-300 rounded-full opacity-60"></div>

            {/* Floating Profile Images */}
            <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden hover:scale-110 transition-transform duration-300 animate-float">
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                DM
              </div>
            </div>

            <div className="absolute top-16 right-16 w-32 h-32 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-purple-400 to-purple-600 overflow-hidden hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '1s'}}>
              <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
                SL
              </div>
            </div>

            <div className="absolute bottom-32 left-16 w-20 h-20 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-pink-400 to-pink-600 overflow-hidden hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '2s'}}>
              <div className="w-full h-full flex items-center justify-center text-white text-xl font-bold">
                MR
              </div>
            </div>

            <div className="absolute top-1/2 right-1/4 w-28 h-28 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-green-400 to-green-600 overflow-hidden hover:scale-110 transition-transform duration-300 animate-float" style={{animationDelay: '1.5s'}}>
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
            </div>

            <div className="absolute bottom-16 right-8 w-24 h-24 rounded-full border-4 border-white shadow-xl bg-gradient-to-br from-yellow-400 to-orange-500 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                OR
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Content */}
          <div className="px-4 sm:px-0">
            <span className="text-primary-500 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              {siteData.testimonials.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-8 sm:mb-10 md:mb-12 text-secondary-700">
              {siteData.testimonials.title}
            </h2>

            {/* Testimonial Card */}
            <div className="bg-white">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
                "{siteData.testimonials.items[currentIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg">
                  {siteData.testimonials.items[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-secondary-700 text-base sm:text-lg">
                    {siteData.testimonials.items[currentIndex].name}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {siteData.testimonials.items[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-100 hover:bg-primary-500 hover:text-white text-primary-500 transition-colors flex items-center justify-center touch-manipulation"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft className="text-sm sm:text-base" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-100 hover:bg-primary-500 hover:text-white text-primary-500 transition-colors flex items-center justify-center touch-manipulation"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight className="text-sm sm:text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 opacity-5">
        <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-8 gap-2 p-4">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  )
}
