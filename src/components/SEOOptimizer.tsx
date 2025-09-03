'use client';

import { useEffect } from 'react';
import { generateBusinessSchema, generateMetaTags } from '../lib/seo';
import { generateOrganizationSchema, generateSEOKeywords } from '../lib/seo-enhanced';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'event';
  location?: string;
  eventType?: string;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "🔥 أفضل نايت كلوب في مصر 2025 | احجز الآن",
  description = "🎉 استمتع بأفضل سهرة ليلية في مصر! حفلات فاخرة، خدمة VIP استثنائية، موسيقى عالمية، DJs مشاهير في القاهرة والجيزة. احجز الآن: 01286110562",
  keywords = ["نايت كلوب مصر", "ديسكو القاهرة", "حفلات ليلية", "سهرات VIP", "ملهى ليلي"],
  image = "https://www.nightclubegypt.com/images/logo-seo-1200x1200.webp",
  url = "https://www.nightclubegypt.com",
  type = "website",
  location,
  eventType
}) => {
  useEffect(() => {
    // Initialize performance optimizations
  

    // Generate enhanced SEO keywords
    const enhancedKeywords = generateSEOKeywords(keywords, location, eventType);

    // Update meta tags dynamically
    const updateMetaTags = () => {
      // Title
      document.title = title;

      // Meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);

      // Keywords with enhanced SEO
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', enhancedKeywords.join(', '));

      // Open Graph tags
      const ogTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: 'Night Club Egypt' },
        { property: 'og:locale', content: 'ar_EG' },
        { property: 'og:locale:alternate', content: 'en_US' }
      ];

      ogTags.forEach(({ property, content }) => {
        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if (!ogTag) {
          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', property);
          document.head.appendChild(ogTag);
        }
        ogTag.setAttribute('content', content);
      });

      // Twitter Card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { name: 'twitter:site', content: '@nightclubegypt' },
        { name: 'twitter:creator', content: '@nightclubegypt' }
      ];

      twitterTags.forEach(({ name, content }) => {
        let twitterTag = document.querySelector(`meta[name="${name}"]`);
        if (!twitterTag) {
          twitterTag = document.createElement('meta');
          twitterTag.setAttribute('name', name);
          document.head.appendChild(twitterTag);
        }
        twitterTag.setAttribute('content', content);
      });

      // Canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', url);

      // Geo and Local SEO tags
      const geoTags = [
        { name: 'geo.region', content: 'EG-C' },
        { name: 'geo.placename', content: 'Cairo, Egypt' },
        { name: 'geo.position', content: '30.0444;31.2357' },
        { name: 'ICBM', content: '30.0444, 31.2357' }
      ];

      geoTags.forEach(({ name, content }) => {
        let geoTag = document.querySelector(`meta[name="${name}"]`);
        if (!geoTag) {
          geoTag = document.createElement('meta');
          geoTag.setAttribute('name', name);
          document.head.appendChild(geoTag);
        }
        geoTag.setAttribute('content', content);
      });
    };

    // Update meta tags
    updateMetaTags();

    // Add enhanced structured data
    const addEnhancedStructuredData = () => {
      // Remove existing structured data scripts
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]:not([id="initial-schema"])');
      existingScripts.forEach(script => script.remove());

      // Add enhanced organization schema
      const organizationSchema = generateOrganizationSchema();
      const organizationScript = document.createElement('script');
      organizationScript.type = 'application/ld+json';
      organizationScript.id = 'organization-schema';
      organizationScript.textContent = JSON.stringify(organizationSchema, null, 0);
      document.head.appendChild(organizationScript);

      // Add website schema with search action
      const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Night Club Egypt",
        "alternateName": "نايت كلوب مصر",
        "url": "https://www.nightclubegypt.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.nightclubegypt.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      };

      const websiteScript = document.createElement('script');
      websiteScript.type = 'application/ld+json';
      websiteScript.id = 'website-schema';
      websiteScript.textContent = JSON.stringify(websiteSchema, null, 0);
      document.head.appendChild(websiteScript);
    };

    // Add enhanced structured data
    addEnhancedStructuredData();

    // Optimize images for SEO with enhanced alt text
    const optimizeImagesForSEO = () => {
      const images = document.querySelectorAll('img');

      images.forEach((img, index) => {
        // Add descriptive alt text if missing
        if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') {
          const fileName = img.src.split('/').pop()?.split('.')[0];
          const altTexts = [
            `Night Club Egypt - أفضل نايت كلوب في مصر`,
            `حفلات ليلية فاخرة في نايت كلوب القاهرة`,
            `سهرات VIP استثنائية في أرقى نايت كلوب بمصر`,
            `أجواء رائعة وموسيقى عالمية في نايت كلوب مصر`,
            `خدمة VIP مميزة في أفضل ملهى ليلي بالقاهرة`
          ];
          img.setAttribute('alt', altTexts[index % altTexts.length] || `Night Club Egypt - ${fileName || 'صورة'}`);
        }

        // Add loading optimization
        if (!img.hasAttribute('loading')) {
          // First 2 images are eager, rest are lazy
          img.setAttribute('loading', index < 2 ? 'eager' : 'lazy');
        }

        // Add aspect ratio for CLS prevention
        if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
          if (!img.style.aspectRatio) {
            (img as HTMLElement).style.aspectRatio = '16/9';
          }
        }

        // Add decode="async" for better performance
        img.setAttribute('decoding', 'async');
      });
    };

    // Optimize images
    setTimeout(optimizeImagesForSEO, 100);

    // Add enhanced preload links for critical resources
    const addEnhancedPreloadLinks = () => {
      const preloadLinks = [
        { href: '/images/nightclubegyptlogo.jpg', as: 'image', type: 'image/jpeg', priority: 'high' },
        { href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap', as: 'style' },
        { href: 'https://abnzriaextacbsoroyfr.supabase.co', as: 'fetch', crossorigin: 'anonymous' }
      ];

      preloadLinks.forEach(({ href, as, type, crossorigin, priority }) => {
        let link = document.querySelector(`link[href="${href}"]`);
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'preload');
          link.setAttribute('href', href);
          link.setAttribute('as', as);
          if (type) link.setAttribute('type', type);
          if (crossorigin) link.setAttribute('crossorigin', crossorigin);
          if (priority) link.setAttribute('fetchpriority', priority);
          document.head.appendChild(link);
        }
      });
    };

    // Add preload links
    addEnhancedPreloadLinks();

    // Add DNS prefetch and preconnect for performance
    const addResourceHints = () => {
      const hints = [
        { type: 'preconnect', href: 'https://fonts.googleapis.com' },
        { type: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { type: 'preconnect', href: 'https://www.googletagmanager.com' },
        { type: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { type: 'dns-prefetch', href: 'https://abnzriaextacbsoroyfr.supabase.co' }
      ];

      hints.forEach(({ type, href, crossorigin }) => {
        let link = document.querySelector(`link[href="${href}"]`);
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', type);
          link.setAttribute('href', href);
          if (crossorigin) link.setAttribute('crossorigin', 'anonymous');
          document.head.appendChild(link);
        }
      });
    };

    // Add resource hints
    addResourceHints();

  }, [title, description, keywords, image, url, type, location, eventType]);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;
