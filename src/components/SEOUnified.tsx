'use client'

import { useEffect } from 'react'
import Script from 'next/script'

import {
  NIGHTCLUB_BASE_INFO,
  SEO_KEYWORDS,
  generateStructuredData,
  SEO_IMAGES,
  generatePageMetadataByType,
  generateCanonicalUrl
} from '../lib/seo-unified'

interface SEOUnifiedProps {
  pageType?: 'home' | 'about' | 'programs' | 'packages' | 'gallery' | 'contact' | 'booking' | 'places' | 'place'
  customTitle?: string
  customDescription?: string
  customKeywords?: string[]
  customImage?: string
}

const SEOUnified: React.FC<SEOUnifiedProps> = ({
  pageType = 'home',
  customTitle,
  customDescription,
  customKeywords = [],
  customImage
}) => {

  // 📊 إنشاء metadata للصفحة الحالية
  const pageMetadata = generatePageMetadataByType(pageType, customTitle, customDescription, customKeywords)

  useEffect(() => {
    // 🔧 تحديث document title
    if (pageMetadata.title) {
      document.title = pageMetadata.title as string
    }

    // 📊 تحديث meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', pageMetadata.description || '')

    // 📊 تحديث Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: pageMetadata.openGraph?.title || pageMetadata.title },
      { property: 'og:description', content: pageMetadata.openGraph?.description || pageMetadata.description },
      { property: 'og:url', content: pageMetadata.openGraph?.url || generateCanonicalUrl() },
      { property: 'og:image', content: customImage || SEO_IMAGES.logo },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: NIGHTCLUB_BASE_INFO.name }
    ]

    ogTags.forEach(({ property, content }) => {
      if (content) {
        let meta = document.querySelector(`meta[property="${property}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute('property', property)
          document.head.appendChild(meta)
        }
        meta.setAttribute('content', String(content))
      }
    })

    // 📊 تحديث Twitter meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageMetadata.twitter?.title || pageMetadata.title },
      { name: 'twitter:description', content: pageMetadata.twitter?.description || pageMetadata.description },
      { name: 'twitter:image', content: customImage || SEO_IMAGES.logo }
    ]

    twitterTags.forEach(({ name, content }) => {
      if (content) {
        let meta = document.querySelector(`meta[name="${name}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute('name', name)
          document.head.appendChild(meta)
        }
        meta.setAttribute('content', String(content))
      }
    })

    // 📊 تحديث canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', String(pageMetadata.alternates?.canonical || generateCanonicalUrl()))

    // 🔧 تحسين الأداء - Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImg = new Image()
      heroImg.src = customImage || SEO_IMAGES.logo
      heroImg.loading = 'eager'

      // Preconnect to external domains
      const preconnectDomains = [
        'https://www.googletagmanager.com',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ]

      preconnectDomains.forEach(domain => {
        if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
          const link = document.createElement('link')
          link.rel = 'preconnect'
          link.href = domain
          if (domain.includes('fonts.gstatic.com')) {
            link.crossOrigin = 'anonymous'
          }
          document.head.appendChild(link)
        }
      })
    }

    // 📊 تحديث Meta Tags ديناميكياً
    const updateDynamicMetaTags = () => {
      // Update keywords
      const allKeywords = [
        ...SEO_KEYWORDS.primary.slice(0, 10),
        ...customKeywords,
        ...SEO_KEYWORDS.locations.slice(0, 5)
      ].join(', ')

      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.setAttribute('name', 'keywords')
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', allKeywords)

      // Update page-specific meta tags
      const pageSpecificMeta = {
        'theme-color': '#dfdbe7ff',
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'apple-mobile-web-app-title': 'Night Club Egypt',
        'application-name': 'Night Club Egypt',
        'msapplication-TileColor': '#dbd9dfff',
        'msapplication-TileImage': '/mstile-150x150.png'
      }

      Object.entries(pageSpecificMeta).forEach(([name, content]) => {
        let meta = document.querySelector(`meta[name="${name}"]`)
        if (!meta) {
          meta = document.createElement('meta')
          meta.setAttribute('name', name)
          document.head.appendChild(meta)
        }
        meta.setAttribute('content', String(content))
      })
    }

    // 🎯 تحسين الصور المحملة بطريقة lazy
    const optimizeLazyImages = () => {
      if ('loading' in HTMLImageElement.prototype) {
        const lazyImages = document.querySelectorAll('img[data-lazy]')
        lazyImages.forEach(img => {
          const imageElement = img as HTMLImageElement
          imageElement.src = img.getAttribute('data-lazy') || ''
          imageElement.loading = 'lazy'
          img.removeAttribute('data-lazy')
        })
      } else {
        // Fallback for older browsers using IntersectionObserver
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

        const lazyImages = document.querySelectorAll('img[data-lazy]')
        lazyImages.forEach(img => lazyImageObserver.observe(img))
      }
    }

    // 📱 تحسين تجربة المستخدم على الموبايل
    const optimizeMobileExperience = () => {
      // Disable zoom on input focus (iOS Safari)
      const viewportMeta = document.querySelector('meta[name="viewport"]')
      if (viewportMeta && /iPhone|iPad|iPod/.test(navigator.userAgent)) {
        const inputs = document.querySelectorAll('input, textarea, select')
        inputs.forEach(input => {
          input.addEventListener('focus', () => {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1')
          })
          input.addEventListener('blur', () => {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes')
          })
        })
      }
    }

    // تشغيل جميع التحسينات
    preloadCriticalResources()
    updateDynamicMetaTags()
    optimizeLazyImages()
    optimizeMobileExperience()

    // تنظيف عند إلغاء التحميل
    return () => {
      // Cleanup if needed
    }
  }, [pageType, customKeywords, customImage, pageMetadata])

  // 📊 Structured Data للصفحة
  const structuredData = generateStructuredData()

  // 🎯 FAQ Schema للصفحة الرئيسية
  const faqSchema = pageType === 'home' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي أسعار نايت كلوب مصر؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "أسعارنا تبدأ من 750 جنيه مصري وتشمل خدمة VIP فاخرة مع مشروبات عالية الجودة وترفيه استثنائي."
        }
      },
      {
        "@type": "Question",
        "name": "أين يقع نايت كلوب مصر؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نقع في كورنيش النيل، العجوزة، الجيزة، مصر. موقع مميز وسهل الوصول من جميع أنحاء القاهرة الكبرى."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي مواعيد العمل؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعمل يومياً من 8 مساءً حتى 5 فجراً. حجز مسبق مطلوب لضمان أفضل الطاولات."
        }
      },
      {
        "@type": "Question",
        "name": "من هم الفنانين المشاركين؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نستضيف أشهر النجوم مثل رحمة محسن، عصام صاصا،اليثي ، إسلام كبونجا، وأجمل الراقصات: بوسي، روح، ليندا."
        }
      },
      {
        "@type": "Question",
        "name": "سن الدخول من جول النايت",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "سن الدخول من 18 سنه فيما فوق لزم تكون عندك 18 سنه "
        }
       },
      {
        "@type": "Question",
        "name": "هل في غرف و علاقه في النايت",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "النايت ففط لي السهرات ليس لي نشط غير قنوني و نحن غير مسؤلين عن اي نشط مضلل او نصب و الاحتيال"
        }
       },
      {
        "@type": "Question",
        "name": " هل في بنات في النايت",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "اكيد في بنات من مختلف الجنسيات عندنا ف النايت مصريه و جنسيات متعدده و يمكنك اختيار فتاه للجلوس معاك علي طوله"
        }
      },
    ]
  } : null

  return (
    <>
      {/* 📊 Main Structured Data */}
      <Script
        id="nightclub-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 0)
        }}
      />

      {/* 🎯 FAQ Schema للصفحة الرئيسية */}
      {faqSchema && (
        <Script
          id="nightclub-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema, null, 0)
          }}
        />
      )}

      {/* 🔧 Performance Optimization Script */}
      <Script
        id="performance-optimization"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // تحسين Core Web Vitals
            (function() {
              // تحسين LCP
              const heroImage = document.querySelector('img[loading="eager"]');
              if (heroImage && !heroImage.complete) {
                heroImage.onload = function() {
                  console.log('Hero image loaded for LCP optimization');
                };
              }

              // تحسين CLS
              const styleSheet = document.createElement('style');
              styleSheet.textContent = \`
                img, video { height: auto; width: 100%; }
                .loading-placeholder { min-height: 200px; background: #1a1a1a; }
              \`;
              document.head.appendChild(styleSheet);

              // تحسين FID
              const buttons = document.querySelectorAll('button, [role="button"]');
              buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                  this.style.transform = 'scale(0.98)';
                  setTimeout(() => {
                    this.style.transform = '';
                  }, 100);
                });
              });
            })();
          `
        }}
      />
    </>
  )
}

export default SEOUnified
