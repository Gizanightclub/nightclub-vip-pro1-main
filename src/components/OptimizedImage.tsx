"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  loading?: "lazy" | "eager";
  lazyRoot?: string;
  lazyRootMargin?: string;
  lazyThreshold?: number;
  enableNativeLoading?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 80, // تحسين الجودة قليلاً
  placeholder = "blur",
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==",
  sizes = "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw",
  fill = false,
  objectFit = "cover",
  loading = "lazy",
  lazyRoot,
  lazyRootMargin = "50px",
  lazyThreshold = 0.1,
  enableNativeLoading = true
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Advanced Intersection Observer للـ lazy loading محسن
  useEffect(() => {
    if (priority || !enableNativeLoading) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        root: lazyRoot ? document.querySelector(lazyRoot) : null,
        rootMargin: lazyRootMargin,
        threshold: lazyThreshold,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, lazyRoot, lazyRootMargin, lazyThreshold, enableNativeLoading]);

  // تحسين مسار الصورة للحصول على WebP/AVIF
  const getOptimizedSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('/images/')) {
      // التحقق من دعم WebP/AVIF
      const supportsWebP = typeof window !== 'undefined' &&
        document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;

      if (supportsWebP) {
        const pathWithoutExtension = originalSrc.replace(/\.[^/.]+$/, "");
        return `${pathWithoutExtension}.webp`;
      }
    }
    return originalSrc;
  };

  // إنشاء srcSet محسن للصور المتجاوبة
  const createResponsiveSizes = () => {
    if (!width || !height) return sizes;

    const aspectRatio = width / height;
    return [
      `(max-width: 640px) min(100vw, ${Math.round(640 * aspectRatio)}px)`,
      `(max-width: 768px) min(50vw, ${Math.round(384 * aspectRatio)}px)`,
      `(max-width: 1024px) min(33vw, ${Math.round(341 * aspectRatio)}px)`,
      `min(25vw, ${Math.round(256 * aspectRatio)}px)`
    ].join(', ');
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Placeholder محسن للتحميل
  const LoadingPlaceholder = () => (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]",
        "flex items-center justify-center text-gray-500",
        className
      )}
      style={{ width, height }}
    >
      <div className="flex flex-col items-center space-y-2">
        <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs">جاري التحميل...</span>
      </div>
    </div>
  );

  // Error fallback محسن
  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-100 text-gray-500 border border-gray-200",
          className
        )}
        style={{ width, height }}
      >
        <div className="text-center">
          <span className="text-2xl">🖼️</span>
          <p className="text-sm mt-1">فشل في تحميل الصورة</p>
        </div>
      </div>
    );
  }

  const optimizedSrc = getOptimizedSrc(src);
  const responsiveSizes = createResponsiveSizes();

  const imageProps = {
    src: optimizedSrc,
    alt,
    quality,
    priority: priority || false,
    placeholder,
    blurDataURL,
    sizes: responsiveSizes,
    loading: (priority ? "eager" : "lazy") as "eager" | "lazy",
    onLoad: handleLoad,
    onError: handleError,
    className: cn(
      "transition-all duration-500 ease-out",
      isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100",
      className
    ),
    style: {
      objectFit: fill ? undefined : objectFit
    }
  };

  return (
    <div ref={imgRef} className="relative">
      {!isIntersecting && !priority ? (
        <LoadingPlaceholder />
      ) : (
        <>
          {isLoading && <LoadingPlaceholder />}
          {fill ? (
            <Image {...imageProps} fill />
          ) : (
            <Image {...imageProps} width={width} height={height} />
          )}
        </>
      )}
    </div>
  );
};

export default OptimizedImage;
