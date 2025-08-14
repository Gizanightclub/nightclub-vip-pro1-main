// Service Worker محسن لتحسين الأداء - Night Club Egypt
const CACHE_VERSION = 'v3';
const STATIC_CACHE = `nightclub-static-${CACHE_VERSION}`;
const IMAGES_CACHE = `nightclub-images-${CACHE_VERSION}`;
const FONTS_CACHE = `nightclub-fonts-${CACHE_VERSION}`;
const API_CACHE = `nightclub-api-${CACHE_VERSION}`;

// موارد أساسية للتخزين المؤقت الفوري
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png'
];

// موارد مهمة للـ precaching
const CRITICAL_IMAGES = [
  '/images/nightclubegyptlogo.jpg',
  '/images/nightclubegypt.com.jpg',
  '/images/nightclubegypt.com (3).jpg',
  '/images/nightclubegypt.com (8).jpg'
];

// تثبيت Service Worker مع precaching محسن
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache الموارد الأساسية
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      }),
      // Precache الصور المهمة
      caches.open(IMAGES_CACHE).then((cache) => {
        return cache.addAll(CRITICAL_IMAGES);
      })
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

// تفعيل Service Worker مع تنظيف الcaches القديمة
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [STATIC_CACHE, IMAGES_CACHE, FONTS_CACHE, API_CACHE];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// استراتيجيات Caching متقدمة
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // تجاهل الطلبات غير GET
  if (request.method !== 'GET') return;

  // استراتيجية للخطوط - Cache First مع fallback
  if (request.destination === 'font' || url.pathname.includes('fonts.googleapis.com') || url.pathname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(FONTS_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          return fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // استراتيجية للصور - Cache First مع تحسين الأداء
  if (request.destination === 'image' || url.pathname.includes('/images/')) {
    event.respondWith(
      caches.open(IMAGES_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          if (response) {
            return response;
          }
          return fetch(request).then((networkResponse) => {
            // فقط cache الصور الناجحة
            if (networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => {
            // إرجاع صورة placeholder في حالة الفشل
            return new Response('', { status: 404, statusText: 'Image not found' });
          });
        });
      })
    );
    return;
  }

  // استراتيجية لـ API calls - Network First مع Cache fallback
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      caches.open(API_CACHE).then((cache) => {
        return fetch(request).then((networkResponse) => {
          // Cache only successful responses
          if (networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          return cache.match(request);
        });
      })
    );
    return;
  }

  // استراتيجية للـ JS/CSS - Cache First مع update في الخلفية
  if (request.destination === 'script' || request.destination === 'style' || url.pathname.includes('/_next/static/')) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.match(request).then((response) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
          return response || fetchPromise;
        });
      })
    );
    return;
  }

  // استراتيجية للصفحات - Network First مع Cache fallback
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request).then((networkResponse) => {
        const responseToCache = networkResponse.clone();
        caches.open(STATIC_CACHE).then((cache) => {
          cache.put(request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        return caches.match(request).then((response) => {
          return response || caches.match('/');
        });
      })
    );
    return;
  }

  // للموارد الأخرى - Cache First
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(request).then((networkResponse) => {
        if (networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(STATIC_CACHE).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});

// تنظيف Cache عند امتلائه وإدارة التحديثات
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CACHE_CLEANUP') {
    cleanupCaches();
  }
});

// وظيفة تنظيف الcaches
async function cleanupCaches() {
  const cacheNames = await caches.keys();
  const cachesToDelete = cacheNames.filter(cacheName =>
    !cacheName.includes(CACHE_VERSION)
  );

  await Promise.all(
    cachesToDelete.map(cacheName => caches.delete(cacheName))
  );
}

// Background sync للتحديثات
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // تحديث الcache في الخلفية
      updateCriticalResources()
    );
  }
});

async function updateCriticalResources() {
  const cache = await caches.open(IMAGES_CACHE);

  for (const imageUrl of CRITICAL_IMAGES) {
    try {
      const response = await fetch(imageUrl);
      if (response.status === 200) {
        await cache.put(imageUrl, response);
      }
    } catch (error) {
      console.log('Failed to update cache for:', imageUrl);
    }
  }
}
