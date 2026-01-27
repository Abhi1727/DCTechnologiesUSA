import { useState, useEffect, useRef } from 'react'
import { FaArrowRight, FaUsers } from 'react-icons/fa'
import { siteData } from '../../utils/constants'

function Counter({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const increment = end / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <span ref={ref} className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-primary-500">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Left Side - Content */}
        <div className="bg-gray-50 relative flex items-center p-8 lg:p-16">
          {/* Decorative Arc Lines */}
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M 0 200 Q 0 100 100 100 T 200 0" stroke="#f97316" strokeWidth="3" fill="none" />
              <path d="M 0 200 Q 0 120 120 120 T 200 20" stroke="#f97316" strokeWidth="3" fill="none" />
              <path d="M 0 200 Q 0 140 140 140 T 200 40" stroke="#f97316" strokeWidth="3" fill="none" />
              <path d="M 0 200 Q 0 160 160 160 T 200 60" stroke="#f97316" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Decorative Circle */}
          <div className="absolute top-1/4 left-12 w-32 h-32 border-2 border-primary-300 rounded-full opacity-30"></div>

          <div className="relative z-10 max-w-xl">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              {siteData.stats.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6 text-secondary-700 leading-tight">
              {siteData.stats.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {siteData.stats.subtitle}
            </p>
            <button className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors inline-flex items-center gap-3 group">
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side - Image with Stats */}
        <div className="relative flex items-center justify-center p-8 lg:p-16 bg-white">
          {/* Decorative Diagonal Stripes */}
          <div className="absolute top-0 right-0 w-48 h-full opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <pattern id="stripes2" x="0" y="0" width="20" height="100" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="8" height="100" fill="#f97316" transform="skewY(-30)" />
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#stripes2)" />
            </svg>
          </div>

          {/* Decorative Circles */}
          <div className="absolute bottom-16 left-16 w-16 h-16 bg-primary-200 rounded-full opacity-40"></div>

          <div className="relative z-10 w-full max-w-lg">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Stats Badge */}
            <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-xl p-6 border-4 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <FaUsers className="text-2xl text-primary-500" />
                </div>
                <div>
                  <Counter end={90} suffix="+" />
                  <p className="text-gray-600 font-semibold mt-1">
                    Team<br />Members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
