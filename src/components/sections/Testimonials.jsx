import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa'
import Card from '../ui/Card'
import { siteData } from '../../data/content'

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

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="section bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {siteData.testimonials.eyebrow}
          </span>
          <h2 className="section-title mt-3">
            {siteData.testimonials.title}
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="relative">
              {/* Quote Icon */}
              <FaQuoteLeft className="text-5xl text-primary-200 mb-6" />

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                  "{siteData.testimonials.items[currentIndex].quote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(siteData.testimonials.items[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-2xl font-bold">
                  {siteData.testimonials.items[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {siteData.testimonials.items[currentIndex].name}
                  </p>
                  <p className="text-gray-600">
                    {siteData.testimonials.items[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {siteData.testimonials.items[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {siteData.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
