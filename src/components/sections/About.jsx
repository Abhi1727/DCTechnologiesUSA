import Button from '../ui/Button'
import { FaArrowRight } from 'react-icons/fa'
import { siteData } from '../../data/content'

export default function About() {
  return (
    <section id="about" className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary-200 font-semibold text-sm uppercase tracking-wider">
            {siteData.about.eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6">
            {siteData.about.title}
          </h2>
          <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-8">
            {siteData.about.subtitle}
          </p>
          <p className="text-primary-100 mb-8">
            Partner with us to experience seamless hiring and unmatched results.
          </p>
          <Button variant="secondary" className="bg-white text-primary-600 hover:bg-gray-100 border-0">
            {siteData.about.cta}
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  )
}
