// Performance Optimization Library for Night Club Egypt

// Core Web Vitals Monitoring
export const measureCoreWebVitals = () => {
  if (typeof window === 'undefined') return;

  // LCP (Largest Contentful Paint)
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    
    if (lastEntry) {
      const lcp = lastEntry.startTime;
      console.log('LCP:', lcp);
      
      // Send to analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'LCP', {
          value: Math.round(lcp),
          event_category: 'Web Vitals'
        });
      }
    }
  });
  
  observer.observe({ entryTypes: ['largest-contentful-paint'] });

  // FID (First Input Delay)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
    const fid = (entry.processingStart || 0) - entry.startTime;
      console.log('FID:', fid);
      
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'FID', {
          value: Math.round(fid),
          event_category: 'Web Vitals'
        });
      }
    });
  });
  
  fidObserver.observe({ entryTypes: ['first-input'] });

  // CLS (Cumulative Layout Shift)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
    if (!entry.hadRecentInput && entry.value) {
      clsValue += entry.value;
    }
  });
    
    console.log('CLS:', clsValue);
    
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'CLS', {
        value: Math.round(clsValue * 1000) / 1000,
        event_category: 'Web Vitals'
      });
    }
  });
  
  clsObserver.observe({ entryTypes: ['layout-shift'] });
};

// Image Optimization
export const optimizeImages = () => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img');
  
  images.forEach((img) => {
    // Add loading="lazy" for images below the fold
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add aspect ratio for images without dimensions
    if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
      (img as HTMLElement).style.aspectRatio = '16/9';
    }
    
    // Add will-change for animated images
    if (img.classList.contains('animated') || img.classList.contains('hero')) {
      (img as HTMLElement).style.willChange = 'transform';
    }
  });
};

// Font Loading Optimization
export const optimizeFonts = () => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
  fontLinks.forEach((link) => {
    link.setAttribute('crossorigin', 'anonymous');
  });
  
  // Font display swap
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Cairo';
      font-display: swap;
    }
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};

// Animation Performance
export const optimizeAnimations = () => {
  if (typeof window === 'undefined') return;

  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
  }
  
  // Use transform instead of top/left for animations
  const animatedElements = document.querySelectorAll('.animated, .fade-in, .slide-in');
  animatedElements.forEach((element) => {
    (element as HTMLElement).style.willChange = 'transform, opacity';
  });
};

// Bundle Size Optimization
export const optimizeBundle = () => {
  // Dynamic imports for heavy components
  const loadHeavyComponent = async (componentName: string) => {
    try {
      const componentModule = await import(`../components/${componentName}`);
      return componentModule.default;
    } catch (error) {
      console.error(`Failed to load component: ${componentName}`, error);
      return null;
    }
  };
  
  return { loadHeavyComponent };
};

// Memory Management
export const optimizeMemory = () => {
  if (typeof window === 'undefined') return;

  // Clean up event listeners
  const cleanupEventListeners = () => {
    // Remove unused event listeners
    const elements = document.querySelectorAll('[data-event-cleanup]');
    elements.forEach((element) => {
      element.removeAttribute('data-event-cleanup');
    });
  };
  
  // Clean up intervals and timeouts
  const cleanupTimers = () => {
    // Clear any unused intervals/timeouts
    // Note: This is a simplified cleanup - in production, you'd want to track your own timers
    try {
      // Clear any known intervals/timeouts here
    } catch (error) {
      console.warn('Timer cleanup error:', error);
    }
  };
  
  // Run cleanup on page unload
  window.addEventListener('beforeunload', () => {
    cleanupEventListeners();
    cleanupTimers();
  });
  
  return { cleanupEventListeners, cleanupTimers };
};

// Critical CSS Inlining
export const inlineCriticalCSS = () => {
  const criticalCSS = `
    /* Critical CSS for above-the-fold content */
    body {
      font-family: var(--font-cairo), Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #000;
      color: #fff;
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
    }
    
    /* Optimize for mobile */
    @media (max-width: 768px) {
      .hero-section {
        min-height: 80vh;
      }
    }
  `;
  
  return criticalCSS;
};

// Service Worker Registration
export const registerServiceWorker = () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
};

// Performance Monitoring
export const monitorPerformance = () => {
  if (typeof window === 'undefined') return;

  // Monitor page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log('Page load time:', loadTime);
    
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_load_time', {
        value: Math.round(loadTime),
        event_category: 'Performance'
      });
    }
  });
  
  // Monitor memory usage
  if ('memory' in performance) {
    setInterval(() => {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });
      }
    }, 30000); // Every 30 seconds
  }
};

// Initialize all optimizations
export const initializePerformanceOptimizations = () => {
  measureCoreWebVitals();
  optimizeImages();
  optimizeFonts();
  optimizeAnimations();
  optimizeMemory();
  registerServiceWorker();
  monitorPerformance();
  
  // Add critical CSS
  const style = document.createElement('style');
  style.textContent = inlineCriticalCSS();
  document.head.appendChild(style);
};

// Export for use in components
const performanceUtils = {
  measureCoreWebVitals,
  optimizeImages,
  optimizeFonts,
  optimizeAnimations,
  optimizeBundle,
  optimizeMemory,
  inlineCriticalCSS,
  registerServiceWorker,
  monitorPerformance,
  initializePerformanceOptimizations
};

export default performanceUtils;
