'use client';

import { useEffect } from 'react';
import { generateBusinessSchema, generateMetaTags } from '../lib/seo';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'event';
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Night Club Egypt | أفضل نايت كلوب في مصر",
  description = "أفضل نايت كلوب في مصر لعام 2025 - حفلات ليلية فاخرة في القاهرة، الجيزة، العجوزة، الشيخ زايد، الهرم، التجمع الخامس، 6 أكتوبر، المعادي، الزمالك، المهندسين. خدمة VIP استثنائية، عروض حية، موسيقى عالمية، أجواء رائعة.",
  keywords = ["نايت كلوب مصر", "ديسكو القاهرة", "حفلات ليلية", "سهرات خليجية", "ملهى ليلي"],
  image = "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg",
  url = "https://www.nightclubegypt.com",
  type = "website"
}) => {
  useEffect(() => {
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
      
      // Keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
      
      // Open Graph tags
      const ogTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: 'Night Club Egypt' },
        { property: 'og:locale', content: 'ar_EG' }
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
    };
    
    // Update meta tags
    updateMetaTags();
    
    // Add structured data
    const addStructuredData = () => {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());
      
      // Add business schema
      const businessSchema = generateBusinessSchema();
      const businessScript = document.createElement('script');
      businessScript.type = 'application/ld+json';
      businessScript.textContent = JSON.stringify(businessSchema, null, 2);
      document.head.appendChild(businessScript);
      
      // Add local business schema
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "NightClub",
        "name": "Night Club Egypt",
        "description": "أفضل نايت كلوب في مصر - حفلات ليلية فاخرة وخدمة VIP استثنائية",
        "url": "https://www.nightclubegypt.com",
        "telephone": "+201286110562",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cairo",
          "addressRegion": "Cairo Governorate",
          "addressCountry": "EG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.0444,
          "longitude": 31.2357
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Thursday", "Friday", "Saturday"],
            "opens": "22:00",
            "closes": "04:00"
          }
        ],
        "priceRange": "$$",
        "servesCuisine": ["International", "Arabic", "Mediterranean"],
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "VIP Service",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Live Music",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Dance Floor",
            "value": true
          }
        ]
      };
      
      const localBusinessScript = document.createElement('script');
      localBusinessScript.type = 'application/ld+json';
      localBusinessScript.textContent = JSON.stringify(localBusinessSchema, null, 2);
      document.head.appendChild(localBusinessScript);
    };
    
    // Add structured data
    addStructuredData();
    
    // Optimize images for SEO
    const optimizeImagesForSEO = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach((img) => {
        // Add alt text if missing
        if (!img.hasAttribute('alt')) {
          const fileName = img.src.split('/').pop()?.split('.')[0];
          img.setAttribute('alt', `Night Club Egypt - ${fileName || 'صورة'}`);
        }
        
        // Add loading="lazy" for images below the fold
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add aspect ratio for images without dimensions
        if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
          (img as HTMLElement).style.aspectRatio = '16/9';
        }
      });
    };
    
    // Optimize images
    optimizeImagesForSEO();
    
    // Add preload links for critical resources
    const addPreloadLinks = () => {
      const preloadLinks = [
        { href: '/images/nightclubegyptlogo.jpg', as: 'image', type: 'image/jpeg' },
        { href: 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap', as: 'style' },
        { href: 'https://abnzriaextacbsoroyfr.supabase.co', as: 'fetch', crossorigin: 'anonymous' }
      ];
      
      preloadLinks.forEach(({ href, as, type, crossorigin }) => {
        let link = document.querySelector(`link[href="${href}"]`);
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'preload');
          link.setAttribute('href', href);
          link.setAttribute('as', as);
          if (type) link.setAttribute('type', type);
          if (crossorigin) link.setAttribute('crossorigin', crossorigin);
          document.head.appendChild(link);
        }
      });
    };
    
    // Add preload links
    addPreloadLinks();
    
    // Add DNS prefetch for external domains
    const addDNSPrefetch = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com'
      ];
      
      domains.forEach(domain => {
        let link = document.querySelector(`link[href="${domain}"]`);
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'dns-prefetch');
          link.setAttribute('href', domain);
          document.head.appendChild(link);
        }
      });
    };
    
    // Add DNS prefetch
    addDNSPrefetch();
    
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEOOptimizer;
