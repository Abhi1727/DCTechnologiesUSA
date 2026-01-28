import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa'
import { siteData } from '../../utils/constants'

export default function BlogPreview() {
  return (
    <section id="blog" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {siteData.blog.eyebrow}
          </span>
          <h2 className="section-title mt-3">
            {siteData.blog.title}
          </h2>
          <p className="section-subtitle">
            {siteData.blog.subtitle}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.blog.articles.map((article) => (
            <div key={article.id} className="card overflow-hidden group cursor-pointer">
              {/* Article Image */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-primary-300 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-xs" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-xs" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="text-primary-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Read More
                  <FaArrowRight className="text-sm" />
                </div>

                {/* Date */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
