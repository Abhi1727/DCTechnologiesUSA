import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'
import { siteData } from '../../data/content'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <a href={`tel:${siteData.company.phone}`} className="flex items-center gap-2 hover:text-primary-200 transition-colors">
                <FaPhone className="text-xs" />
                {siteData.company.phone}
              </a>
              <a href={`mailto:${siteData.company.email}`} className="flex items-center gap-2 hover:text-primary-200 transition-colors">
                <FaEnvelope className="text-xs" />
                {siteData.company.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <div className="text-2xl font-display font-bold text-primary-600">
                {siteData.company.name}
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {siteData.navigation.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                {siteData.navigation.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <a href={`tel:${siteData.company.phone}`} className="flex items-center gap-2 text-gray-600">
                  <FaPhone />
                  {siteData.company.phone}
                </a>
                <a href={`mailto:${siteData.company.email}`} className="flex items-center gap-2 text-gray-600">
                  <FaEnvelope />
                  {siteData.company.email}
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
