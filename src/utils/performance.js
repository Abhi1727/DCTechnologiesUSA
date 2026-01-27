/**
 * Performance Optimization Utilities
 * Collection of functions to improve Core Web Vitals
 */

/**
 * Debounce function - Limits function execution rate
 * Useful for scroll, resize, and input handlers
 */
export function debounce(func, wait = 300) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function - Ensures function executes at most once per interval
 * Better for continuous events like scrolling
 */
export function throttle(func, limit = 100) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Preload critical resources
 * Improves LCP by loading important resources early
 */
export function preloadResource(href, as = 'image', type = null) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  if (type) {
    link.type = type
  }
  document.head.appendChild(link)
}

/**
 * Lazy load external scripts
 * Reduces initial JavaScript bundle size
 */
export function loadScriptAsync(src, id = null) {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (id && document.getElementById(id)) {
      resolve()
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = true
    if (id) {
      script.id = id
    }

    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))

    document.body.appendChild(script)
  })
}

/**
 * Check if user prefers reduced motion
 * Improves accessibility and UX
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get connection speed
 * Useful for serving different quality assets
 */
export function getConnectionSpeed() {
  if ('connection' in navigator) {
    return navigator.connection.effectiveType // '4g', '3g', '2g', 'slow-2g'
  }
  return 'unknown'
}

/**
 * Check if device is mobile
 */
export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * Measure Core Web Vitals
 * LCP, FID, CLS tracking
 */
export function measureWebVitals(callback) {
  if (typeof window === 'undefined') return

  // Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        callback({
          name: 'LCP',
          value: lastEntry.renderTime || lastEntry.loadTime,
          rating: lastEntry.renderTime < 2500 ? 'good' : lastEntry.renderTime < 4000 ? 'needs-improvement' : 'poor',
        })
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        callback({
          name: 'CLS',
          value: clsValue,
          rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor',
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // First Input Delay (FID) / Interaction to Next Paint (INP)
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const firstInput = entries[0]
        callback({
          name: 'FID',
          value: firstInput.processingStart - firstInput.startTime,
          rating: firstInput.processingStart - firstInput.startTime < 100 ? 'good' : 
                  firstInput.processingStart - firstInput.startTime < 300 ? 'needs-improvement' : 'poor',
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
    } catch (error) {
      console.error('Error measuring web vitals:', error)
    }
  }

  // Time to First Byte (TTFB)
  if (window.performance && window.performance.timing) {
    const ttfb = window.performance.timing.responseStart - window.performance.timing.requestStart
    callback({
      name: 'TTFB',
      value: ttfb,
      rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs-improvement' : 'poor',
    })
  }
}

/**
 * Image optimization helper
 * Returns optimized image URL based on device and connection
 */
export function getOptimizedImageUrl(baseUrl, options = {}) {
  const { width, height, quality = 80, format = 'webp' } = options
  const speed = getConnectionSpeed()
  const isMobile = isMobileDevice()

  // Adjust quality based on connection speed
  let adjustedQuality = quality
  if (speed === '2g' || speed === 'slow-2g') {
    adjustedQuality = 50
  } else if (speed === '3g') {
    adjustedQuality = 65
  }

  // Build optimized URL (adjust based on your image CDN)
  let url = baseUrl
  const params = []

  if (width) params.push(`w=${width}`)
  if (height) params.push(`h=${height}`)
  params.push(`q=${adjustedQuality}`)
  params.push(`f=${format}`)

  if (params.length > 0) {
    url += `?${params.join('&')}`
  }

  return url
}

/**
 * Prefetch next page resources
 * Improves navigation speed
 */
export function prefetchPage(url) {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = url
  document.head.appendChild(link)
}

/**
 * Critical CSS inline function
 * Extract and inline critical CSS for above-the-fold content
 */
export function inlineCriticalCSS(css) {
  if (typeof document === 'undefined') return

  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
}

/**
 * Font loading optimization
 * Preload critical fonts
 */
export function preloadFont(fontUrl, fontFamily) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'font'
  link.type = 'font/woff2'
  link.href = fontUrl
  link.crossOrigin = 'anonymous'
  document.head.appendChild(link)
}
