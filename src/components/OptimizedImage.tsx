"use client";

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  title?: string;
  caption?: string;
  loading?: 'lazy' | 'eager';
  // 👇 خصائص SEO إضافية
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  location?: string;
}

// 👇 مكون محسن للصور مع دعم WebP وتحسين SEO
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  quality = 85,
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw',
  title,
  caption,
  loading = 'lazy',
  seoTitle,
  seoDescription,
  keywords = 'نايت كلوب مصر, سهرات, ترفيه ليلي',
  location = 'القاهرة، مصر'
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 👇 تحويل مسار الصورة إلى WebP إذا أمكن
  const getOptimizedSrc = (originalSrc: string) => {
    // إذا كانت الصورة تدعم WebP، استخدمها
    if (originalSrc.endsWith('.jpg') || originalSrc.endsWith('.jpeg') || originalSrc.endsWith('.png')) {
      const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return webpSrc;
    }
    return originalSrc;
  };

  // 👇 إنشاء ImageObject Schema للصورة
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": `https://www.nightclubegypt.com${src}`,
    "name": seoTitle || title || alt,
    "description": seoDescription || caption || alt,
    "caption": caption || alt,
    "width": width,
    "height": height,
    "contentLocation": {
      "@type": "Place",
      "name": location
    },
    "creator": {
      "@type": "Organization",
      "name": "Night Club Egypt"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Night Club Egypt"
    },
    "keywords": keywords,
    "encodingFormat": src.includes('.webp') ? 'image/webp' : 'image/jpeg'
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <div className={`bg-gray-800 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">فشل في تحميل الصورة</span>
      </div>
    );
  }

  return (
    <>
      {/* 👇 إضافة Schema للصورة */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />

      <div className={`relative ${className}`}>
        {/* 👇 إضافة placeholder أثناء التحميل */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <Image
          src={getOptimizedSrc(src)}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          quality={quality}
          priority={priority}
          sizes={sizes}
          title={title || seoTitle}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          // 👇 fallback للصورة الأصلية في حالة فشل WebP
          onLoadingComplete={() => setIsLoading(false)}
        />

        {/* 👇 إضافة caption إذا وُجد */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <p className="text-white text-sm text-center">{caption}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OptimizedImage;
