'use client'

import { generateSEOKeywords, generateCanonicalUrl } from '../lib/seo-enhanced'
import { useEffect } from 'react'

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'event';
  location?: string;
  eventType?: string;
  noindex?: boolean;
}

export default function SeoHead({
  title,
  description,
  keywords = [],
  image = "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg",
  url,
  type = 'website',
  location,
  eventType,
  noindex = false
}: SeoHeadProps) {
  const canonicalUrl = url || generateCanonicalUrl()
  const seoKeywords = generateSEOKeywords(keywords, location, eventType)

  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', seoKeywords.join(', '))
    updateMetaTag('author', 'Night Club Egypt')
    updateMetaTag('robots', noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1")

    // Geo tags
    updateMetaTag('geo.region', 'EG-C')
    updateMetaTag('geo.placename', 'Cairo, Egypt')
    updateMetaTag('geo.position', '30.0444;31.2357')
    updateMetaTag('ICBM', '30.0444, 31.2357')

    // Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', canonicalUrl, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:site_name', 'Night Club Egypt', true)
    updateMetaTag('og:locale', 'ar_EG', true)

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)
    updateMetaTag('twitter:site', '@nightclubegypt')

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    // Add performance hints
    const addPreconnect = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = href
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      }
    }

    addPreconnect('https://fonts.googleapis.com')
    addPreconnect('https://fonts.gstatic.com')
    addPreconnect('https://www.googletagmanager.com')

  }, [title, description, seoKeywords, image, canonicalUrl, type, noindex])

  return null // This component doesn't render anything
}
