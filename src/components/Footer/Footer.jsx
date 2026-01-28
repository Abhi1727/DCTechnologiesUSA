import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { siteData } from '../../utils/constants'

const iconMap = {
  FaLinkedin,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-primary-600 py-8 sm:py-10 md:py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm sm:text-base text-primary-100 mb-4 sm:mb-6">
              Stay updated with the latest industry insights and opportunities.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-sm sm:text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
              >
                Subscribe Now
                <FaArrowRight className="text-xs sm:text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 sm:py-14 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info */}
          <div className="px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 sm:mb-4">
              {siteData.company.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              {siteData.footer.about}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {siteData.footer.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors touch-manipulation"
                    aria-label={social.name}
                  >
                    <IconComponent className="text-base sm:text-lg" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-4 sm:px-0">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {siteData.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2"
                  >
                    <FaArrowRight className="text-xs flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="px-4 sm:px-0">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {siteData.footer.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors inline-flex items-center gap-2"
                  >
                    <FaArrowRight className="text-xs flex-shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="px-4 sm:px-0">
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href={`tel:${siteData.company.phone}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-start gap-3 text-sm sm:text-base"
                >
                  <FaPhone className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Call us:</p>
                    {siteData.company.phone}
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.company.email}`}
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-start gap-3 text-sm sm:text-base"
                >
                  <FaEnvelope className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Email us:</p>
                    <span className="break-all">{siteData.company.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="text-gray-400 flex items-start gap-3 text-sm sm:text-base">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white mb-1">Location:</p>
                    {siteData.company.address}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              ©Copyright {currentYear} | {siteData.company.name} | All Rights Reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
