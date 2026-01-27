import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { siteData } from '../utils/constants'
import SEOHead from '../components/SEOHead.jsx'
import { pageSEO, breadcrumbSchemas } from '../utils/seo'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <SEOHead
        title={pageSEO.contactUs.title}
        description={pageSEO.contactUs.description}
        keywords={pageSEO.contactUs.keywords}
        canonical={pageSEO.contactUs.canonical}
        schema={breadcrumbSchemas.contactUs}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100">
              Get in touch with us for your IT consulting and staffing needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-secondary-700">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Whether you're looking to hire top talent, seeking new opportunities, or need IT consulting services, we're here to help. Reach out to us and let's discuss how we can support your goals.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-700 mb-1">Phone</h3>
                    <a href={`tel:${siteData.company.phone}`} className="text-gray-600 hover:text-primary-500 transition-colors">
                      {siteData.company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-700 mb-1">Email</h3>
                    <a href={`mailto:${siteData.company.email}`} className="text-gray-600 hover:text-primary-500 transition-colors">
                      {siteData.company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-700 mb-1">Location</h3>
                    <p className="text-gray-600">{siteData.company.address}</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-secondary-700 text-white rounded-xl">
                <h3 className="font-bold text-xl mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-secondary-700 mb-4 sm:mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm sm:text-base text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors inline-flex items-center justify-center gap-2 sm:gap-3 group touch-manipulation text-sm sm:text-base"
                  >
                    Send Message
                    <FaPaperPlane className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs sm:text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms & Conditions
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-100">
        <div className="aspect-[21/9] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <FaMapMarkerAlt className="text-6xl mb-4 mx-auto" />
            <p className="text-xl font-semibold">Map Placeholder</p>
            <p className="text-sm">Integrate Google Maps or similar service here</p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
