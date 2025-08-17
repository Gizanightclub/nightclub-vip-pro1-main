import { lazy, ComponentType } from 'react';

// Type for lazy loaded components
type LazyComponent<T = Record<string, unknown>> = ComponentType<T>;

// Lazy load utility with better error handling and loading states
export const createLazyComponent = <T = Record<string, unknown>>(
  importFunction: () => Promise<{ default: ComponentType<T> }>,
  displayName?: string
) => {
  const LazyComponent = lazy(importFunction);

  if (displayName) {
    // TypeScript workaround for displayName
    (LazyComponent as { displayName?: string }).displayName = displayName;
  }

  return LazyComponent;
};

// Pre-load components for better UX
export const preloadComponent = (
  importFunction: () => Promise<{ default: ComponentType<unknown> }>
) => {
  const componentPromise = importFunction();
  return componentPromise;
};

// Lazy load components with retry mechanism
export const createRetryableLazyComponent = <T = Record<string, unknown>>(
  importFunction: () => Promise<{ default: ComponentType<T> }>,
  retries = 3
) => {
  return lazy(() =>
    new Promise<{ default: ComponentType<T> }>((resolve, reject) => {
      let attempts = 0;

      const tryImport = () => {
        attempts++;
        importFunction()
          .then(resolve)
          .catch((error) => {
            if (attempts < retries) {
              console.warn(`Failed to load component, retrying... (${attempts}/${retries})`);
              setTimeout(tryImport, 1000 * attempts); // Exponential backoff
            } else {
              reject(error);
            }
          });
      };

      tryImport();
    })
  );
};

// Intersection Observer for lazy loading
export const useIntersectionObserver = (
  callback: () => void,
  options?: IntersectionObserverInit
) => {
  const elementRef = (element: HTMLElement | null) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(element);
  };

  return elementRef;
};

// Dynamic import with better error handling
export const dynamicImport = async <T>(
  importFunction: () => Promise<T>,
  fallback?: T
): Promise<T> => {
  try {
    return await importFunction();
  } catch (error) {
    console.error('Dynamic import failed:', error);
    if (fallback) {
      return fallback;
    }
    throw error;
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/images/nightclubegyptlogo.jpg',
    '/images/nightclubegypt.com.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Preconnect to external domains
  const externalDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://abnzriaextacbsoroyfr.supabase.co'
  ];

  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};
