'use client'

// Preload Critical Resources لتحسين LCP
export const preloadCriticalResources = () => {
  if (typeof window !== 'undefined') {
    // Preload hero image
    const heroImg = new Image()
    heroImg.src = '/images/nightclubegyptlogo.jpg'
    heroImg.loading = 'eager'

    // Preload critical font
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.as = 'font'
    fontLink.type = 'font/woff2'
    fontLink.href = '/fonts/cairo-bold.woff2'
    fontLink.crossOrigin = 'anonymous'
    document.head.appendChild(fontLink)

    // Preload critical CSS
    const cssLink = document.createElement('link')
    cssLink.rel = 'preload'
    cssLink.as = 'style'
    cssLink.href = '/_next/static/css/app/layout.css'
    document.head.appendChild(cssLink)
  }
}

// Lazy load images below fold لتحسين LCP
export const optimizeImages = () => {
  if (typeof window !== 'undefined') {
    // Native lazy loading support
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[data-lazy]')
      images.forEach(img => {
        const imageElement = img as HTMLImageElement
        imageElement.src = img.getAttribute('data-lazy') || ''
        imageElement.loading = 'lazy'
        img.removeAttribute('data-lazy')
      })
    } else {
      // Fallback for older browsers
      const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.getAttribute('data-lazy') || ''
            img.classList.remove('lazy')
            lazyImageObserver.unobserve(img)
          }
        })
      })

      document.querySelectorAll('img[data-lazy]').forEach(img => {
        lazyImageObserver.observe(img)
      })
    }
  }
}

// Font optimization لتقليل CLS
export const optimizeFonts = () => {
  if (typeof window !== 'undefined') {
    // Cairo font preload
    const cairoLink = document.createElement('link')
    cairoLink.rel = 'preload'
    cairoLink.as = 'font'
    cairoLink.type = 'font/woff2'
    cairoLink.href = 'https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvalIvTp2mxdt0UX8gfwhNVQ.woff2'
    cairoLink.crossOrigin = 'anonymous'
    document.head.appendChild(cairoLink)

    // Add font-display: swap CSS
    const style = document.createElement('style')
    style.textContent = `
      @font-face {
        font-family: 'Cairo';
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvalIvTp2mxdt0UX8gfwhNVQ.woff2') format('woff2');
      }
    `
    document.head.appendChild(style)
  }
}

// Critical CSS injection لتحسين FCP
export const injectCriticalCSS = () => {
  if (typeof window !== 'undefined') {
    const criticalCSS = `
      body {
        font-family: var(--font-cairo), 'Cairo', Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #0a0a0f;
        color: white;
      }
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      .nightclub-loader {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        background: rgba(0, 0, 0, 0.9);
        padding: 2rem;
        border-radius: 1rem;
      }
      img {
        max-width: 100%;
        height: auto;
      }
    `

    const style = document.createElement('style')
    style.textContent = criticalCSS
    document.head.insertBefore(style, document.head.firstChild)
  }
}

// Optimize Third Party Scripts لتقليل TBT
export const optimizeThirdPartyScripts = () => {
  if (typeof window !== 'undefined') {
    // Defer Google Analytics
    const gaScript = document.querySelector('script[src*="googletagmanager"]')
    if (gaScript) {
      gaScript.setAttribute('defer', '')
    }

    // Add resource hints for external domains
    const domains = [
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    domains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = domain
        document.head.appendChild(link)
      }
    })
  }
}

// Remove unused CSS لتقليل bundle size
export const removeUnusedCSS = () => {
  if (typeof window !== 'undefined') {
    // Remove CSS for elements not in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.style.display = 'none'

          setTimeout(() => {
            element.style.display = ''
          }, 100)
        }
      })
    })

    // Observe non-critical elements
    document.querySelectorAll('.non-critical').forEach(el => {
      observer.observe(el)
    })
  }
}

// Service Worker registration للتخزين المؤقت
export const registerServiceWorker = async () => {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('SW registered: ', registration)
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError)
    }
  }
}

// Image format detection and optimization
export const optimizeImageFormats = () => {
  if (typeof window !== 'undefined') {
    // Check WebP support
    const webpSupport = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0

    // Check AVIF support
    const avifSupport = document.createElement('canvas').toDataURL('image/avif').indexOf('data:image/avif') === 0

    // Replace images with optimized formats
    document.querySelectorAll('img[data-src]').forEach(img => {
      const imageElement = img as HTMLImageElement
      let src = img.getAttribute('data-src') || ''

      if (avifSupport && src.includes('.jpg')) {
        src = src.replace('.jpg', '.avif')
      } else if (webpSupport && src.includes('.jpg')) {
        src = src.replace('.jpg', '.webp')
      }

      imageElement.src = src
    })
  }
}

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Run immediately
    preloadCriticalResources()
    injectCriticalCSS()
    optimizeFonts()

    // Run after DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
      optimizeImages()
      optimizeThirdPartyScripts()
      optimizeImageFormats()
      registerServiceWorker()
    })

    // Run after everything is loaded
    window.addEventListener('load', () => {
      removeUnusedCSS()
    })
  }
}

// Web Vitals reporting
export const reportWebVitals = (metric: any) => {
  if (typeof window !== 'undefined') {
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      })
    }

    // Console log for debugging
    console.log(metric)
  }
}
