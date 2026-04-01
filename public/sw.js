// Service Worker for Night Club Egypt
// تحسين الأداء والتخزين المؤقت

const CACHE_NAME = 'nightclub-egypt-v1.0.0';
const STATIC_CACHE = 'nightclub-static-v1.0.0';
const DYNAMIC_CACHE = 'nightclub-dynamic-v1.0.0';

// الملفات المهمة للتخزين المؤقت
const STATIC_FILES = [
  '/',
  '/images/nightclubegyptlogo.jpg',
  '/images/logo-seo-1200x1200.png',
  '/images/nightclubegypt.com.jpg',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/site.webmanifest'
];

// استراتيجية التخزين المؤقت: Cache First
const cacheFirst = async (request) => {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('Cache First failed:', error);
    return new Response('Network error', { status: 503 });
  }
};

// استراتيجية التخزين المؤقت: Network First
const networkFirst = async (request) => {
  try {
    const networkResponse = await fetch(request);
    const cache = await caches.open(DYNAMIC_CACHE);
    cache.put(request, networkResponse.clone());
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Network error', { status: 503 });
  }
};

// استراتيجية التخزين المؤقت: Stale While Revalidate
const staleWhileRevalidate = async (request) => {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
};

// Install Event
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static files...');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker installation failed:', error);
      })
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // تجاهل طلبات POST
  if (request.method !== 'GET') {
    return;
  }
  
  // تجاهل طلبات API
  if (url.pathname.startsWith('/api/')) {
    return;
  }
  
  // تجاهل طلبات WebSocket
  if (url.protocol === 'ws:' || url.protocol === 'wss:') {
    return;
  }
  
  // استراتيجيات التخزين المؤقت حسب نوع الملف
  if (STATIC_FILES.includes(url.pathname) || url.pathname.startsWith('/_next/static/')) {
    // الملفات الثابتة: Cache First
    event.respondWith(cacheFirst(request));
  } else if (url.pathname.startsWith('/images/')) {
    // الصور: Stale While Revalidate
    event.respondWith(staleWhileRevalidate(request));
  } else if (url.pathname.startsWith('/dashboard/')) {
    // صفحات لوحة التحكم: Network First
    event.respondWith(networkFirst(request));
  } else {
    // باقي الصفحات: Network First
    event.respondWith(networkFirst(request));
  }
});

// Background Sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

// Push Notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Night Club Egypt - تحديث جديد!',
    icon: '/images/nightclubegyptlogo.jpg',
    badge: '/images/nightclubegyptlogo.jpg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'استكشف الموقع',
        icon: '/images/nightclubegyptlogo.jpg'
      },
      {
        action: 'close',
        title: 'إغلاق',
        icon: '/images/nightclubegyptlogo.jpg'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Night Club Egypt', options)
  );
});

// Notification Click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Background Sync Function
async function doBackgroundSync() {
  try {
    // تحديث البيانات في الخلفية
    const response = await fetch('/api/health');
    if (response.ok) {
      console.log('Background sync completed successfully');
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Message Handler
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Error Handler
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

// Unhandled Rejection Handler
self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});
