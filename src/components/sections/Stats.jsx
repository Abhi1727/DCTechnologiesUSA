import { useState, useEffect, useRef } from 'react'
import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import { siteData } from '../../data/content'

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
    <span ref={ref} className="font-display font-bold text-5xl md:text-6xl text-primary-600">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="stats" className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {siteData.stats.eyebrow}
          </span>
          <h2 className="section-title mt-3">
            {siteData.stats.title}
          </h2>
          <p className="section-subtitle">
            {siteData.stats.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {siteData.stats.metrics.map((metric) => {
            const numericValue = parseInt(metric.value.replace(/\D/g, ''))
            const suffix = metric.value.replace(/[0-9]/g, '')
            
            return (
              <div key={metric.id} className="text-center">
                <Counter end={numericValue} suffix={suffix} />
                <p className="text-gray-600 font-semibold mt-3 text-lg">
                  {metric.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="primary">
            Get Started
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
