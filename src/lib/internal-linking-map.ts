// Internal Linking Map for Night Club Egypt SEO
// This map defines all internal links for optimal SEO structure

export const INTERNAL_LINKING_MAP = {
  // Home Page Links
  home: {
    outgoing: [
      { url: '/prices/cairo', anchor: 'أسعار نايت كلوب القاهرة', context: 'price intent' },
      { url: '/locations/cairo', anchor: 'مواقع نايت كلوب القاهرة', context: 'location intent' },
      { url: '/guides/booking', anchor: 'كيف تحجز', context: 'booking guide' },
      { url: '/reviews/cairo', anchor: 'تقييمات الزوار', context: 'social proof' },
      { url: '/night-club-near-me', anchor: 'نايت كلوب قريب مني', context: 'near me intent' },
      { url: '/places', anchor: 'جميع الملاهي الليلية', context: 'all venues' },
      { url: '/vip', anchor: 'خدمات VIP', context: 'vip services' },
      { url: '/gallery', anchor: 'معرض الصور', context: 'gallery' },
      { url: '/blog/ultimate-guide-egypt-nightlife', anchor: 'دليل الحياة الليلية', context: 'comprehensive guide' },
      { url: '/contact', anchor: 'اتصل بنا', context: 'contact' }
    ]
  },

  // Price Pages Links
  'prices/cairo': {
    outgoing: [
      { url: '/guides/booking', anchor: 'دليل الحجز', context: 'how to book' },
      { url: '/reviews/cairo', anchor: 'تقييمات الزوار', context: 'social proof' },
      { url: '/locations/cairo', anchor: 'مواقع النوادي', context: 'location context' },
      { url: '/vip', anchor: 'خدمات VIP', context: 'vip pricing' },
      { url: '/blog/vip-table-booking-prices-cairo', anchor: 'أسعار طاولات VIP', context: 'vip details' },
      { url: '/places', anchor: 'الملاهي المتاحة', context: 'venue options' },
      { url: '/contact', anchor: 'احجز الآن', context: 'booking cta' }
    ],
    incoming: ['home', 'night-club-prices-cairo', 'pricing-booking']
  },

  // Location Pages Links
  'locations/cairo': {
    outgoing: [
      { url: '/prices/cairo', anchor: 'أسعار الدخول', context: 'pricing info' },
      { url: '/guides/booking', anchor: 'احجز الآن', context: 'cta booking' },
      { url: '/reviews/cairo', anchor: 'آراء الزوار', context: 'reviews' },
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo venues' },
      { url: '/night-club-cairo', anchor: 'نايت كلوب القاهرة', context: 'cairo nightlife' },
      { url: '/night-club-zamalek', anchor: 'نايت كلوب الزمالك', context: 'zamalek' },
      { url: '/night-club-tagamo3', anchor: 'نايت كلوب التجمع', context: 'tagamo3' }
    ],
    incoming: ['home', 'night-club-cairo', 'places/cairo']
  },

  // Guide Pages Links
  'guides/booking': {
    outgoing: [
      { url: '/prices/cairo', anchor: 'الأسعار والحجز', context: 'pricing details' },
      { url: '/locations/cairo', anchor: 'المواقع المتاحة', context: 'location options' },
      { url: '/reviews/cairo', anchor: 'تجارب الزوار', context: 'testimonials' },
      { url: '/vip', anchor: 'خدمات VIP', context: 'vip booking' },
      { url: '/contact', anchor: 'اتصل للحجز', context: 'contact booking' },
      { url: '/blog/booking-guide-egypt', anchor: 'دليل الحجز الكامل', context: 'full guide' }
    ],
    incoming: ['home', 'blog/ultimate-guide-egypt-nightlife', 'pricing-booking']
  },

  // Review Pages Links
  'reviews/cairo': {
    outgoing: [
      { url: '/prices/cairo', anchor: 'الأسعار', context: 'pricing transparency' },
      { url: '/guides/booking', anchor: 'احجز تجربتك', context: 'booking cta' },
      { url: '/locations/cairo', anchor: 'زورنا', context: 'location visit' },
      { url: '/gallery', anchor: 'شاهد الصور', context: 'visual proof' },
      { url: '/places', anchor: 'الملاهي الأخرى', context: 'other venues' }
    ],
    incoming: ['home', 'gallery', 'about']
  },

  // Places Pages Links
  places: {
    outgoing: [
      { url: '/prices/cairo', anchor: 'أسعار الدخول', context: 'pricing' },
      { url: '/locations/cairo', anchor: 'مواقع القاهرة', context: 'cairo locations' },
      { url: '/reviews/cairo', anchor: 'تقييمات الزوار', context: 'reviews' },
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo venues' },
      { url: '/places/alexandria', anchor: 'نوادي الإسكندرية', context: 'alexandria' },
      { url: '/places/hurghada', anchor: 'نوادي الغردقة', context: 'hurghada' },
      { url: '/places/sharm-el-sheikh', anchor: 'نوادي شرم الشيخ', context: 'sharm' }
    ],
    incoming: ['home', 'locations/cairo']
  },

  // Specific Venue Pages
  'places/cairo': {
    outgoing: [
      { url: '/prices/cairo', anchor: 'أسعار القاهرة', context: 'cairo pricing' },
      { url: '/reviews/cairo', anchor: 'تقييمات القاهرة', context: 'cairo reviews' },
      { url: '/night-club-cairo', anchor: 'نايت كلوب القاهرة', context: 'cairo nightlife' }
    ],
    incoming: ['places', 'locations/cairo']
  },

  'places/alexandria': {
    outgoing: [
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo comparison' },
      { url: '/prices/cairo', anchor: 'الأسعار', context: 'pricing' }
    ],
    incoming: ['places']
  },

  'places/hurghada': {
    outgoing: [
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo comparison' },
      { url: '/prices/cairo', anchor: 'الأسعار', context: 'pricing' }
    ],
    incoming: ['places']
  },

  'places/sharm-el-sheikh': {
    outgoing: [
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo comparison' },
      { url: '/prices/cairo', anchor: 'الأسعار', context: 'pricing' }
    ],
    incoming: ['places']
  },

  // VIP Pages
  vip: {
    outgoing: [
      { url: '/prices/cairo', anchor: 'أسعار VIP', context: 'vip pricing' },
      { url: '/guides/booking', anchor: 'كيف تحجز VIP', context: 'vip booking' },
      { url: '/reviews/cairo', anchor: 'تقييمات VIP', context: 'vip reviews' },
      { url: '/blog/vip-table-booking-prices-cairo', anchor: 'دليل طاولات VIP', context: 'vip guide' }
    ],
    incoming: ['home', 'prices/cairo', 'guides/booking']
  },

  // Gallery
  gallery: {
    outgoing: [
      { url: '/reviews/cairo', anchor: 'قراءة التقييمات', context: 'reviews' },
      { url: '/places', anchor: 'زيارة الملاهي', context: 'venues' },
      { url: '/contact', anchor: 'احجز زيارتك', context: 'booking' }
    ],
    incoming: ['home', 'reviews/cairo', 'places']
  },

  // Blog Pages
  'blog/ultimate-guide-egypt-nightlife': {
    outgoing: [
      { url: '/prices/cairo', anchor: 'أسعار 2026', context: 'current pricing' },
      { url: '/guides/booking', anchor: 'دليل الحجز', context: 'booking guide' },
      { url: '/places', anchor: 'أفضل الملاهي', context: 'best venues' },
      { url: '/blog/best-nightclubs-egypt-2026', anchor: 'أفضل النوادي 2026', context: 'best clubs' },
      { url: '/blog/booking-guide-egypt', anchor: 'دليل الحجز التفصيلي', context: 'detailed booking' }
    ],
    incoming: ['home', 'blog/best-nightclubs-egypt-2026']
  },

  'blog/best-nightclubs-egypt-2026': {
    outgoing: [
      { url: '/places', anchor: 'جميع الملاهي', context: 'all venues' },
      { url: '/prices/cairo', anchor: 'الأسعار', context: 'pricing' },
      { url: '/reviews/cairo', anchor: 'التقييمات', context: 'reviews' }
    ],
    incoming: ['blog/ultimate-guide-egypt-nightlife']
  },

  'blog/booking-guide-egypt': {
    outgoing: [
      { url: '/guides/booking', anchor: 'خطوات الحجز', context: 'booking steps' },
      { url: '/contact', anchor: 'اتصل الآن', context: 'contact' },
      { url: '/prices/cairo', anchor: 'الأسعار', context: 'pricing' }
    ],
    incoming: ['blog/ultimate-guide-egypt-nightlife', 'guides/booking']
  },

  'blog/cheapest-clubs-cairo': {
    outgoing: [
      { url: '/prices/cairo', anchor: 'الأسعار التفصيلية', context: 'detailed pricing' },
      { url: '/places/cairo', anchor: 'النوادي الرخيصة', context: 'cheap venues' }
    ],
    incoming: ['prices/cairo']
  },

  'blog/vip-table-booking-prices-cairo': {
    outgoing: [
      { url: '/vip', anchor: 'خدمات VIP', context: 'vip services' },
      { url: '/prices/cairo', anchor: 'أسعار VIP', context: 'vip pricing' },
      { url: '/guides/booking', anchor: 'حجز طاولات VIP', context: 'vip booking' }
    ],
    incoming: ['prices/cairo', 'vip']
  },

  // Specific Location Pages
  'night-club-cairo': {
    outgoing: [
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo venues' },
      { url: '/prices/cairo', anchor: 'أسعار القاهرة', context: 'cairo pricing' },
      { url: '/locations/cairo', anchor: 'مواقع القاهرة', context: 'cairo locations' }
    ],
    incoming: ['locations/cairo', 'places/cairo']
  },

  'night-club-zamalek': {
    outgoing: [
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo venues' },
      { url: '/locations/cairo', anchor: 'مواقع الزمالك', context: 'zamalek location' }
    ],
    incoming: ['locations/cairo']
  },

  'night-club-tagamo3': {
    outgoing: [
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo venues' },
      { url: '/locations/cairo', anchor: 'مواقع التجمع', context: 'tagamo3 location' }
    ],
    incoming: ['locations/cairo']
  },

  'night-club-near-me': {
    outgoing: [
      { url: '/locations/cairo', anchor: 'مواقع القاهرة', context: 'cairo locations' },
      { url: '/places', anchor: 'جميع الملاهي', context: 'all venues' }
    ],
    incoming: ['home']
  },

  'night-club-prices-cairo': {
    outgoing: [
      { url: '/prices/cairo', anchor: 'تفاصيل الأسعار', context: 'detailed pricing' },
      { url: '/guides/booking', anchor: 'كيف تحجز', context: 'booking guide' }
    ],
    incoming: ['prices/cairo']
  },

  'night-clubs-cairo': {
    outgoing: [
      { url: '/places/cairo', anchor: 'نوادي القاهرة', context: 'cairo venues' },
      { url: '/locations/cairo', anchor: 'مواقع القاهرة', context: 'cairo locations' }
    ],
    incoming: ['places/cairo']
  },

  // Other Pages
  'pricing-booking': {
    outgoing: [
      { url: '/prices/cairo', anchor: 'الأسعار التفصيلية', context: 'detailed pricing' },
      { url: '/guides/booking', anchor: 'دليل الحجز', context: 'booking guide' },
      { url: '/contact', anchor: 'اتصل للحجز', context: 'contact booking' }
    ],
    incoming: ['home', 'prices/cairo', 'guides/booking']
  },

  disco: {
    outgoing: [
      { url: '/places', anchor: 'ملاهي الديسكو', context: 'disco venues' },
      { url: '/prices/cairo', anchor: 'أسعار الديسكو', context: 'disco pricing' }
    ],
    incoming: ['home']
  },

  parties: {
    outgoing: [
      { url: '/places', anchor: 'أماكن الحفلات', context: 'party venues' },
      { url: '/vip', anchor: 'حفلات VIP', context: 'vip parties' }
    ],
    incoming: ['home']
  },

  programs: {
    outgoing: [
      { url: '/places', anchor: 'البرامج المتاحة', context: 'available programs' },
      { url: '/prices/cairo', anchor: 'أسعار البرامج', context: 'program pricing' }
    ],
    incoming: ['home']
  },

  // Contact redirects to home but should link internally
  contact: {
    outgoing: [
      { url: '/guides/booking', anchor: 'دليل الحجز', context: 'booking guide' },
      { url: '/prices/cairo', anchor: 'الأسعار', context: 'pricing' }
    ],
    incoming: ['home', 'guides/booking', 'pricing-booking']
  },

  // About redirects to home but should link internally
  about: {
    outgoing: [
      { url: '/reviews/cairo', anchor: 'تقييماتنا', context: 'reviews' },
      { url: '/gallery', anchor: 'معرض الصور', context: 'gallery' }
    ],
    incoming: ['home']
  }
}

// Entity-based linking for topical authority
export const ENTITY_LINKING = {
  entities: {
    'Night Club Egypt': {
      mentions: ['home', 'about', 'contact'],
      related: ['prices', 'locations', 'reviews']
    },
    'Cairo Nightlife': {
      mentions: ['locations/cairo', 'prices/cairo', 'reviews/cairo'],
      related: ['guides/booking', 'night-club-cairo']
    },
    'VIP Tables': {
      mentions: ['prices/cairo', 'vip', 'blog/vip-table-booking-prices-cairo'],
      related: ['guides/booking', 'pricing-booking']
    }
  }
}

// Conversion funnel linking
export const CONVERSION_FUNNEL_LINKS = {
  awareness: ['home', 'blog/ultimate-guide-egypt-nightlife'],
  consideration: ['prices/cairo', 'locations/cairo', 'reviews/cairo'],
  decision: ['guides/booking', 'pricing-booking', 'contact'],
  action: ['tel:01286110562', 'https://wa.me/201286110562']
}