import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

/**
 * LazyImage Component - Implements lazy loading for images
 * Improves initial page load and Core Web Vitals (LCP)
 * Uses Intersection Observer API for efficient lazy loading
 */
export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  objectFit = 'cover',
  placeholder = 'blur',
  priority = false,
  onLoad,
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority) // Load immediately if priority
  const imgRef = useRef(null)

  useEffect(() => {
    if (priority) {
      return // Skip intersection observer for priority images
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading slightly before image enters viewport
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [priority])

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) {
      onLoad()
    }
  }

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
          style={{ width: '100%', height: '100%' }}
        />
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={handleLoad}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: objectFit,
          }}
        />
      )}
    </div>
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  placeholder: PropTypes.oneOf(['blur', 'empty']),
  priority: PropTypes.bool,
  onLoad: PropTypes.func,
}

/**
 * OptimizedImage Component - Wrapper with srcset support
 * Serves different image sizes based on viewport
 */
export function OptimizedImage({ src, alt, sizes, ...props }) {
  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc) => {
    const widths = [320, 640, 768, 1024, 1280, 1536]
    return widths
      .map((width) => {
        // Assuming images are served with width parameter
        const srcWithWidth = baseSrc.includes('?')
          ? `${baseSrc}&w=${width}`
          : `${baseSrc}?w=${width}`
        return `${srcWithWidth} ${width}w`
      })
      .join(', ')
  }

  return (
    <LazyImage
      src={src}
      alt={alt}
      srcSet={generateSrcSet(src)}
      sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      {...props}
    />
  )
}

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.string,
}
