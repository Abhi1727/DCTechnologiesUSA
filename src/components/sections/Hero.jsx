import { FaArrowRight } from 'react-icons/fa'
import Button from '../ui/Button'
import { siteData } from '../../data/content'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="container-custom section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8">
            <div className="inline-block">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider bg-primary-100 px-4 py-2 rounded-full">
                {siteData.hero.eyebrow}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
              {siteData.hero.title}
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {siteData.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary">
                {siteData.hero.cta.primary}
                <FaArrowRight />
              </Button>
              <Button variant="secondary">
                {siteData.hero.cta.secondary}
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                <div className="text-center text-primary-700 p-8">
                  <svg
                    className="w-32 h-32 mx-auto mb-4 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="font-semibold">Hero Image Placeholder</p>
                  <p className="text-sm mt-2">Replace with your hero image</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}
