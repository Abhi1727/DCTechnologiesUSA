import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * SEOHead Component - Manages page-specific SEO metadata
 * Updates document title, meta tags, and structured data for each page
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage,
  schema,
  noindex = false,
}) {
  const location = useLocation()
  const baseUrl = 'https://dctechnologiesusa.com'
  const fullUrl = `${baseUrl}${location.pathname}`
  const defaultOgImage = `${baseUrl}/og-image.png`

  useEffect(() => {
    // Update title
    document.title = title || 'DC Technologies USA - IT Staffing & Workforce Solutions'

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      if (!content) return

      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    // Standard meta tags
    updateMetaTag('description', description)
    if (keywords) updateMetaTag('keywords', keywords)
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow')
    
    // Google Site Verification
    updateMetaTag('google-site-verification', 'F-QPqZlMlY0lzI30S6uZTnUKzovXKLmuDN-yiRi9ElQ')

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical || fullUrl)

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:type', ogType, true)
    updateMetaTag('og:url', fullUrl, true)
    updateMetaTag('og:image', ogImage || defaultOgImage, true)
    updateMetaTag('og:site_name', 'DC Technologies USA', true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage || defaultOgImage)

    // Additional SEO meta tags
    updateMetaTag('author', 'DC Technologies USA')
    updateMetaTag('language', 'English')
    updateMetaTag('geo.region', 'US')
    updateMetaTag('geo.placename', 'United States')

    // Structured Data (JSON-LD)
    if (schema) {
      let scriptTag = document.querySelector('script[data-schema="page"]')
      if (!scriptTag) {
        scriptTag = document.createElement('script')
        scriptTag.setAttribute('type', 'application/ld+json')
        scriptTag.setAttribute('data-schema', 'page')
        document.head.appendChild(scriptTag)
      }
      scriptTag.textContent = JSON.stringify(schema)
    }

    // Cleanup function
    return () => {
      // Remove page-specific schema on unmount
      const pageSchema = document.querySelector('script[data-schema="page"]')
      if (pageSchema) {
        pageSchema.remove()
      }
    }
  }, [title, description, keywords, canonical, ogType, ogImage, schema, noindex, fullUrl, defaultOgImage])

  return null
}

SEOHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  schema: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  noindex: PropTypes.bool,
}

/**
 * Schema Component - Renders JSON-LD structured data
 * Use this for adding multiple schemas to a page
 */
export function Schema({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

Schema.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

/**
 * ScrollToTop Component - Scrolls to top on route change
 * Improves UX and ensures users see content from the beginning
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
