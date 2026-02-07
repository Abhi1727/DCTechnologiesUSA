import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa'
import { siteData } from '../../utils/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => {
    return location.pathname === path
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
          isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Company Name */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="DC Technologies USA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                  DC TECHNOLOGIES
                </span>
                <span className="text-xs sm:text-sm font-semibold text-primary-500 tracking-wide">
                  USA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 relative z-10">
              {siteData.navigation.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleNavClick}
                  className={`font-medium transition-colors cursor-pointer ${
                    isActive(link.href) 
                      ? 'text-primary-500' 
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/checkout"
                onClick={handleNavClick}
                className="px-6 py-2.5 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg transition-all"
              >
                Pay Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-primary-500 transition-colors p-2 -mr-2"
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
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={handleNavClick}
                    className={`font-medium transition-colors py-2 ${
                      isActive(link.href)
                        ? 'text-primary-500'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/checkout"
                  onClick={handleNavClick}
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all text-center"
                >
                  Pay Now
                </Link>
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
