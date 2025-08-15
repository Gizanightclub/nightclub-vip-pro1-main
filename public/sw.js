// Service Worker for Night Club Egypt - أفضل نايت كلوب في مصر
// Enhanced for performance, Core Web Vitals, and offline caching

const CACHE_NAME = 'nightclub-egypt-v3.0';
const STATIC_CACHE = 'static-v3.0';
const IMAGES_CACHE = 'images-v3.0';
const API_CACHE = 'api-v3.0';
const FONTS_CACHE = 'fonts-v3.0';

// Critical resources to cache immediately for LCP optimization
const CRITICAL_RESOURCES = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/images/nightclubegyptlogo.jpg',
  '/images/nightclubegypt.com.jpg'
];

// Important images for preloading
const HERO_IMAGES = [
  '/images/nightclubegypt.com (3).jpg',
  '/images/nightclubegypt.com (8).jpg',
  '/images/nightclubegypt.com (10).jpg'
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/health'
];

// Install event - cache critical resources for better FCP/LCP
self.addEventListener('install', (event) => {
  console.log('Night Club Egypt SW v3.0: Installing...');

  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(STATIC_CACHE).then(cache => {
        console.log('SW: Caching critical resources for LCP optimization');
        return cache.addAll(CRITICAL_RESOURCES.concat(HERO_IMAGES).map(url => new Request(url, {
          cache: 'reload',
          mode: 'cors'
        })));
      }),

      // Cache fonts separately for FCP optimization
      caches.open(FONTS_CACHE).then(cache => {
        const fontUrls = [
          'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap',
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        ];
        return cache.addAll(fontUrls.map(url => new Request(url, {
          cache: 'force-cache',
          mode: 'cors'
        })));
      }),

      // Skip waiting to activate immediately
      self.skipWaiting()
    ]).catch(error => {
      console.error('SW: Install failed', error);
    })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  console.log('Night Club Egypt SW v3.0: Activating...');

  event.waitUntil(
    Promise.all([
      // Take control of all clients immediately
      self.clients.claim(),

      // Clean old caches to reduce storage usage
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName =>
              cacheName !== STATIC_CACHE &&
              cacheName !== IMAGES_CACHE &&
              cacheName !== API_CACHE &&
              cacheName !== FONTS_CACHE
            )
            .map(cacheName => {
              console.log('SW: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
    ]).catch(error => {
      console.error('SW: Activation failed', error);
    })
  );
});

// Fetch event - optimized caching strategy for Core Web Vitals
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests except for fonts and specific domains
  if (!url.origin.includes(self.location.origin) &&
      !url.origin.includes('fonts.googleapis.com') &&
      !url.origin.includes('fonts.gstatic.com')) {
    return;
  }

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Strategy for different resource types optimized for performance
  if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
    event.respondWith(handleFontRequest(request));
  } else if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApiRequest(request));
  } else if (request.destination === 'document') {
    event.respondWith(handlePageRequest(request));
  } else {
    event.respondWith(handleStaticRequest(request));
  }
});

// Handle font requests - Cache First (fonts rarely change)
async function handleFontRequest(request) {
  try {
    const cache = await caches.open(FONTS_CACHE);
    const cached = await cache.match(request);

    if (cached) {
      return cached;
    }

    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('SW: Font request failed', error);
    return new Response('Font unavailable', { status: 404 });
  }
}

// Handle image requests - Cache First with optimizations for LCP
async function handleImageRequest(request) {
  try {
    const cache = await caches.open(IMAGES_CACHE);
    const cached = await cache.match(request);

    if (cached) {
      // Return cached version immediately for better LCP
      return cached;
    }

    // Fetch from network and cache with timeout for better performance
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(request, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (fetchError) {
      clearTimeout(timeoutId);
      throw fetchError;
    }
  } catch (error) {
    console.error('SW: Image request failed', error);
    return new Response('Image unavailable', { status: 404 });
  }
}

// Handle API requests - Network First with shorter timeout
async function handleApiRequest(request) {
  try {
    const cache = await caches.open(API_CACHE);

    // Try network first with shorter timeout for better FID
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    try {
      const response = await fetch(request, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    } catch (networkError) {
      clearTimeout(timeoutId);

      // Fallback to cache
      const cached = await cache.match(request);
      if (cached) {
        return cached;
      }
      throw networkError;
    }
  } catch (error) {
    console.error('SW: API request failed', error);
    return new Response(JSON.stringify({ error: 'Service unavailable' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Handle page requests - Stale While Revalidate for better performance
async function handlePageRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);

    // Return cached version immediately if available (faster LCP)
    if (cached) {
      // Update cache in background
      fetch(request).then(response => {
        if (response.ok) {
          cache.put(request, response.clone());
        }
      }).catch(() => {});

      return cached;
    }

    // If not cached, fetch from network
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('SW: Page request failed', error);
    return new Response('Page unavailable offline', { status: 503 });
  }
}

// Handle static assets - Cache First with long TTL
async function handleStaticRequest(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(request);

    if (cached) {
      return cached;
    }

    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('SW: Static request failed', error);
    return new Response('Resource unavailable', { status: 404 });
  }
}

// Handle messages from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CACHE_CLEANUP') {
    cleanupOldCaches();
  }

  if (event.data && event.data.type === 'PRELOAD_CRITICAL') {
    preloadCriticalResources();
  }
});

// Preload critical resources for better Core Web Vitals
async function preloadCriticalResources() {
  try {
    const cache = await caches.open(IMAGES_CACHE);
    const criticalImages = [
      '/images/nightclubegyptlogo.jpg',
      '/images/nightclubegypt.com.jpg',
      '/images/nightclubegypt.com (3).jpg'
    ];

    await Promise.all(
      criticalImages.map(async (url) => {
        const cached = await cache.match(url);
        if (!cached) {
          try {
            const response = await fetch(url);
            if (response.ok) {
              await cache.put(url, response);
            }
          } catch (error) {
            console.log('SW: Failed to preload', url);
          }
        }
      })
    );
    console.log('SW: Critical resources preloaded');
  } catch (error) {
    console.error('SW: Preload failed', error);
  }
}

// Periodic cache cleanup to prevent storage bloat
async function cleanupOldCaches() {
  try {
    const cacheNames = await caches.keys();
    const oldCaches = cacheNames.filter(name =>
      !name.includes('v3.0') && name.includes('nightclub')
    );

    await Promise.all(oldCaches.map(name => caches.delete(name)));
    console.log('SW: Cleaned up old caches');
  } catch (error) {
    console.error('SW: Cache cleanup failed', error);
  }
}

// Error handling
self.addEventListener('error', (event) => {
  console.error('SW: Error occurred', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('SW: Unhandled promise rejection', event.reason);
});

console.log('Night Club Egypt Service Worker v3.0 loaded - Optimized for Core Web Vitals');
