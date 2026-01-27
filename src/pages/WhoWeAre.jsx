import { FaCheckCircle, FaAward, FaUsers, FaHandshake } from 'react-icons/fa'
import { siteData } from '../utils/constants'
import SEOHead from '../components/SEOHead.jsx'
import { pageSEO, breadcrumbSchemas } from '../utils/seo'

export default function WhoWeAre() {
  return (
    <>
      <SEOHead
        title={pageSEO.whoWeAre.title}
        description={pageSEO.whoWeAre.description}
        keywords={pageSEO.whoWeAre.keywords}
        canonical={pageSEO.whoWeAre.canonical}
        schema={breadcrumbSchemas.whoWeAre}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-700 to-secondary-900 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              About DC Technologies USA
            </h1>
            <p className="text-xl text-gray-300">
              We believe in excellence. We deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <svg className="w-32 h-32 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6 text-secondary-700">
                We Help Clients Invent Their Future
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                DC Technologies USA is a leading IT consulting company that helps small and big organizations acquire, engage and retain the right talents, when and how you need them, such as contract-hire, direct-hire, or permanent placement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Being one of the prominent IT consulting companies, our experienced recruiters know tech and can help you find the most talented and best qualified candidates who are fit for your business culture and goals. The more we get to know your business, the better we can help you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work as partners with our clients to help them find and hire highly skilled people to join their teams. With years of experience in the IT consulting industry and unique sourcing methodology, we have built a strong pipeline of pre-screened candidates to fasten the placement process.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-4xl text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary-700 mb-2">Quality First</h3>
              <p className="text-gray-600">We never compromise on quality and excellence</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-4xl text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary-700 mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Years of experience across multiple industries</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-4xl text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary-700 mb-2">Talented Team</h3>
              <p className="text-gray-600">Expert recruiters with deep technical knowledge</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-4xl text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary-700 mb-2">Client Partnership</h3>
              <p className="text-gray-600">We work as true partners with our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary-700 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To simplify workforce challenges by providing innovative and customized solutions across industries. We are committed to connecting businesses with exceptional talent and helping professionals advance their careers with purpose.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-secondary-700 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted leader in the staffing industry, recognized for our commitment to excellence, integrity, and innovation. We envision a future where every business has access to the right talent at the right time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
