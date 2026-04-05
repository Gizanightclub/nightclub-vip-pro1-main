// Unified SEO Library for Night Club Egypt - Complete Optimization

import { Metadata } from 'next'

// 📍 معلومات أساسية عن النايت كلوب
export const NIGHTCLUB_BASE_INFO = {
  name: "Night Club Egypt",
  arabicName: "نايت كلوب مصر",
  domain: "https://www.nightclubegypt.com",
  phone: "+201286110562",
  whatsapp: "https://wa.me/201286110562",
  email: "nightclub2026@gmail.com",
  address: "كورنيش النيل، العجوزة، الجيزة، مصر",
  priceRange: "750-1500 جنيه مصري",
  workingHours: "من 8 مساءً حتى 4 فجراً يومياً",
  coordinates: { lat: 30.0666, lng: 31.2240 },
  socialMedia: {
    facebook: "https://www.facebook.com/people/%D9%83%D8%A8%D8%A7%D8%B1%D9%8A%D9%87-%D8%A7%D9%84%D8%B9%D8%AC%D9%88%D8%B2%D9%87-Night-Club/61569297924042/",
    instagram: "https://www.instagram.com/night_club_5star",
    tiktok: "https://www.tiktok.com/@night.club993?_t=ZS-8yvVCVK9A5R&_r=1"
  }
}

// نسخة موحدة لنص Copyright وحقول الصورة
export const COPYRIGHT_NOTICE = "© 2026 Night Club Egypt. All rights reserved."
export const IMAGE_LICENSE = `${NIGHTCLUB_BASE_INFO.domain}/license`
export const IMAGE_ACQUIRE_PAGE = `${NIGHTCLUB_BASE_INFO.domain}/contact`
export const IMAGE_CREDIT = "Night Club Egypt"
export const IMAGE_CREATOR_ORG = { "@type": "Organization", "name": NIGHTCLUB_BASE_INFO.name }
export const IMAGE_COPYRIGHT_HOLDER = { "@type": "Organization", "name": NIGHTCLUB_BASE_INFO.name }

// 🖼️ الصور المحسنة للـ SEO - صور مختلفة من معرض الصور الكبير
export const SEO_IMAGES = {
  logo: `${NIGHTCLUB_BASE_INFO.domain}/images/logo-seo-1200x1200.webp`,
  hero: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com (10).jpg`,
  about: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com (11).jpg`,
  gallery: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com (6).jpg`,
  programs: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com (5).jpg`,
  packages: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com (7).jpg`,
  contact: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com (8).jpg`,
  booking: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com (3).jpg`,
  nightclub7: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com9.jpg`,
  nightclub8: `${NIGHTCLUB_BASE_INFO.domain}/images/Omni Club Cairo 1.jpg`,
  nightclub9: `${NIGHTCLUB_BASE_INFO.domain}/images/Echo-club.jpg`,
  mmas: `${NIGHTCLUB_BASE_INFO.domain}/images/Stage Cairo Club.jpg`,
  vip: `${NIGHTCLUB_BASE_INFO.domain}/images/Volt Lounge.jpg`,
  places: `${NIGHTCLUB_BASE_INFO.domain}/images/ROVI Club1.png`,
  blog: `${NIGHTCLUB_BASE_INFO.domain}/images/nightclubegypt.com15.jpg`
}

// 🎯 كلمات مفتاحية شاملة ومحسنة - منظمة بدون تكرار
export const SEO_KEYWORDS = {
  primary: [
    "نايت كلوب", "أفضل نايت كلوب في مصر", "ارخص نايت كلوب",
    "حجز نايت كلوب", "سهرات نايت كلوب", "اسعار نايت كلوب", "نايت كلوب VIP",
     "نيت كلوب", "نايت كلاب", "نايتات مصر", "كلوبات مصر",
    "Night Club", "Night Club Egypt", "nightclub","نايت كلوب مصر", "أفضل نايت كلوب في مصر", "نايت كلوب القاهرة", "ارخص نايت كلوب",
    "حجز نايت كلوب", "سهرات نايت كلوب", "اسعار نايت كلوب", "نايت كلوب VIP", "نايت كلوب ","nightclub",'نايت كلوب مصر 2026', 'أفضل نايت كلوب',
    'حفلات ليلية فاخرة',"ارخص نايت كلوب","نيت كلوب","نايت كلاب","حجز نايت كلوب","نايتات مصر","كلوبات مصر",
    "نايت كلوب مصر", "أفضل نايت كلوب في مصر", " سهرات نايت كلوب", "اسعار نايت كلوب", "Night Club",
   "سهرات خليجي", "نايت", "سهرات ديسكو", "كباريه", "ديسكو", "nightclub", "نايت كلوب القاهره", "نايت كلوب في الجيزه","نايت كلوب مصر 2026",
    "ملهى ليلي VIP", "نادي ليلي فاخر", "Night Club Egypt", "احجز نايت كلوب", "حفلات ليلية فاخرة", "سهرات مميزة مصر",
    'سهرات VIP', 'ملهى ليلي راقي', 'ديسكو القاهرة',"كباريه","نايت كلوب مفتوح الان","كلوب مصر","نادي نايت ",
    'nightclub Egypt', 'Cairo nightlife', 'VIP nightclub', "club night club","club", "night club","egypt club","the nightclub",
    "سهرات خليجي","ديسكو","حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي VIP", "حفلات خاصة", "مناسبات خاصة",
    "DJ nights Egypt", "live music Cairo", "party nights Egypt", "VIP tables Egypt", "nightclub booking Egypt",
     "حجز نايت كلوب مصر", "أسعار 750 جنيه", "حفلات رحمة محسن", "عصام صاصا نايت كلوب",
    "بوسي راقصة", "روح راقصة", "ليندا راقصة", "خدمة VIP 1500 جنيه","اسعار نايت كلوب",
    "نايت كلوب العجوزة", "نايت كلوب الشيخ زايد", "نايت كلوب الزمالك",
    "ملهى ليلي VIP", "نادي ليلي فاخر", "احجز نايت كلوب",
    "حفلات ليلية فاخرة", "سهرات مميزة مصر", "سهرات VIP",
    "ملهى ليلي راقي", "ديسكو القاهرة", "كلوب مصر", "نادي نايت",
    // كلمات موسمية للسياح الخليجيين الصيف
    "سهرات صيف الخليج", "نايت كلوب للسعوديين", "نايت كلوب للخليجيين", "سهرات سياح",
    "سياحة مصر الخليج", "أماكن للخليجيين في مصر", "سهرات صيفية مصر", "نايت كلوب الصيف",
    "سهرات الخليج في مصر", "رحلات سياحية مصر", "ليالي صيفية مصر", "حفلات صيفية جديدة",
    "nightclub for tourists", "summer nightclub Egypt", "Gulf tourists Egypt", "Saudi visitors Egypt",
    "أماكن ترفيهية سعودية", "نوادي ليلية الإمارات", "كويتي في مصر", "عماني يسهر"
  ],
  locations: [
    "نايت كلوب القاهرة", "نايت كلوب الجيزة", "نايت كلوب العجوزة",
    "نايت كلوب الشيخ زايد", "نايت كلوب الهرم", "نايت كلوب التجمع الخامس",
    "نايت كلوب 6 أكتوبر", "نايت كلوب المعادي", "نايت كلوب الزمالك",
    "نايت كلوب المهندسين", "نايت كلوب مدينة نصر", "نايت كلوب مصر الجديدة",
    "نايت كلوب الدقي", "نايت كلوب وسط البلد",
    
    // 🎧 أماكن الجيزة
    "ديسكو كاش كايرو", "Disco Cash Cairo", "ديسكو خليجي", "Disco Khalijy", "إكس أو كلوب", "XO Club Cairo",
    "أيكون كلوب", "ICON Club Cairo", "ون أوك كلوب", "1OK Club Cairo", "كلوب 707", "Club 707",
    "دايس كلوب", "Dice Club", "ذهبية كلوب", "Dahabia Club", "إيكو كلوب", "Echo Club",
    "الريجينا كلوب", "El Regina Club", "كروزة كلوب", "Karwaza Club",
    
    // 🎧 أماكن الزمالك ووسط البلد
    "أومني كلوب", "OMNI Club Cairo", "سباين كايرو", "SPINE Cairo", "نوكس", "Nox Club",
    "ماما نايت كلوب", "Mama Night Club", "مون ديك", "Moon Deck",
    
    // 🎧 أماكن مصر الجديدة
    "هيرا كلوب", "Hera Club Cairo", "لو روا ديسكو", "Le Roi Disco", "جيفنشي نايت كلوب", "Givenchy Night Club",
    "سبيد لاونج", "Spade Lounge", "أسرم هوم", "Asserm Home Club",
    
    // 🎧 أماكن التجمع الخامس
    "كلوب آفا", "Club AVA Cairo", "ذا تاب", "The Tap Cairo", "Cairo Jazz Club 610", "Kanji Club",
    
    // 🎧 أماكن إضافية
    "كلوب أرينا", "Club Arena Cairo", "دارك روك", "Dark Rock Club", "ليفيل كلوب", "Level Club",
    "راي كلوب", "Rai Club Cairo", "تمبو كلوب", "Tempo Club", "فينوم خليجي", "Venom Khaliji Club"
  ],
  performers: [
    "رحمة محسن", "عصام صاصا", "إسلام كبونجا", "رضا البحراوي", "كريم الغزال",
    "بوسي راقصة", "روح راقصة", "ليندا راقصة", "بديعة راقصة", "توفحة راقصة", "فيروز راقصة"
  ],
  english: [
    "nightclub Egypt", "best nightclub Cairo", "nightclub Giza", "VIP nightclub Egypt","nightclub","deco","bar","night",
    "Cairo nightlife", "nightclub Agouza", "nightclub Sheikh Zayed", "premium nightclub Egypt"
  ]
}

// 🏗️ مولد Schema.org شامل ومحسن
export const generateUnifiedBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["NightClub", "EntertainmentBusiness", "LocalBusiness"],
  "name": NIGHTCLUB_BASE_INFO.name,
  "alternateName": [NIGHTCLUB_BASE_INFO.arabicName, "Night Club Cairo", "أفضل نايت كلوب في مصر"],
  "description": "أفضل نايت كلوب في مصر لعام 2026 - حفلات ليلية فاخرة مع أشهر النجوم: رحمة محسن، عصام صاصا، بوسي، روح، ليندا. خدمة VIP استثنائية وأسعار تبدأ من 750 جنيه في القاهرة والجيزة والعجوزة والشيخ زايد.",
  "url": NIGHTCLUB_BASE_INFO.domain,
  "logo": {
    "@type": "ImageObject",
    "url": SEO_IMAGES.logo,
    "name": "Night Club Egypt Logo - شعار نايت كلوب مصر",
    "description": "شعار نايت كلوب مصر الرسمي للاستخدام في صفحات الموقع ووسائل التواصل",
    "caption": "Night Club Egypt Logo - شعار نايت كلوب مصر",
    "width": 1200,
    "height": 1200,
    "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
    "creator": IMAGE_CREATOR_ORG,
    "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
    "creditText": IMAGE_CREDIT,
    "license": IMAGE_LICENSE,
    "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
    "copyrightNotice": COPYRIGHT_NOTICE,
    "encodingFormat": "image/webp",
    "keywords": "Night Club Egypt, logo, شعار"
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.hero,
      "name": "حفلة مميزة في نايت كلوب مصر - أجواء VIP فاخرة",
      "description": "استمتع بأروع الأوقات في حفلاتنا المميزة مع أجواء VIP فاخرة وخدمة استثنائية في أفضل نايت كلوب بالقاهرة",
      "caption": "استمتع بأروع الأوقات في حفلاتنا المميزة مع أجواء VIP فاخرة وخدمة استثنائية في أفضل نايت كلوب بالقاهرة",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "نايت كلوب مصر, حفلات, سهرات, ترفيه ليلي, القاهرة, صور 1",
      "representativeOfPage": "http://schema.org/True"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.about,
      "name": "سهرة راقصة مع أشهر النجوم في نايت كلوب إيجيبت",
      "description": "احجز مكانك في أقوى السهرات مع أشهر النجوم والراقصات في أفضل ملهى ليلي بمصر",
      "caption": "احجز مكانك في أقوى السهرات مع أشهر النجوم والراقصات في أفضل ملهى ليلي بمصر",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "نايت كلوب مصر, حفلات, سهرات, ترفيه ليلي, القاهرة, صور 2",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.contact,
      "name": "حفلات الويك إند المميزة - موسيقى حية و DJs عالميين",
      "description": "عيش تجربة ليلية لا تُنسى مع أفضل DJs العالميين والموسيقى الحية في حفلات الويك إند الأسطورية",
      "caption": "عيش تجربة ليلية لا تُنسى مع أفضل DJs العالميين والموسيقى الحية في حفلات الويك إند الأسطورية",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "نايت كلوب مصر, حفلات, سهرات, ترفيه ليلي, القاهرة, صور 3",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.nightclub7,
      "name": "رقص شرقي أصيل مع أمهر الراقصات في مصر",
      "description": "استمتع بعروض الرقص الشرقي الأصيل مع أمهر الراقصات والفنانات في أجواء شرقية ساحرة",
      "caption": "استمتع بعروض الرقص الشرقي الأصيل مع أمهر الراقصات والفنانات في أجواء شرقية ساحرة",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "نايت كلوب مصر, حفلات, سهرات, ترفيه ليلي, القاهرة, صور 4",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.nightclub8,
      "name": "حفلات رقص شرقي كل يوم",
      "description": "استمتع بأجواء ساحرة مع حفلات رقص شرقي كل يوم في نايت كلوب مصر",
      "caption": "استمتع بأجواء ساحرة مع حفلات رقص شرقي كل يوم في نايت كلوب مصر",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "نايت كلوب مصر, حفلات, سهرات, ترفيه ليلي, القاهرة, صور 5",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.nightclub9,
      "name": "حفلات المطربين والنجوم - أقوى الأمسيات الغنائية",
      "description": "احضر أقوى الحفلات مع أشهر المطربين والنجوم في أمسيات غنائية استثنائية لا تُفوت",
      "caption": "احضر أقوى الحفلات مع أشهر المطربين والنجوم في أمسيات غنائية استثنائية لا تُفوت",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "نايت كلوب مصر, حفلات, سهرات, ترفيه ليلي, القاهرة, صور 6",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.mmas,
      "name": "عروض خاصة وحفلات استثنائية كل ليلة",
      "description": "كل ليلة عندنا مختلفة! عروض خاصة وحفلات استثنائية مع برامج متنوعة تناسب جميع الأذواق",
      "caption": "كل ليلة عندنا مختلفة! عروض خاصة وحفلات استثنائية مع برامج متنوعة تناسب جميع الأذواق",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "نايت كلوب مصر, حفلات, سهرات, ترفيه ليلي, القاهرة, صور 7",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.gallery,
      "name": "معرض صور نايت كلوب مصر",
      "description": "معرض صور الحفلات والسهرات في نايت كلوب مصر - لحظات حصرية وأجواء VIP",
      "caption": "معرض صور نايت كلوب مصر",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "معرض صور، نايت كلوب مصر، حفلات",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.programs,
      "name": "برامج وعروض نايت كلوب مصر",
      "description": "برامج الحفلات والعروض الأسبوعية مع نجوم وراقصات مميزين",
      "caption": "برامج وعروض نايت كلوب مصر",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "برامج، فعاليات، نايت كلوب مصر",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.packages,
      "name": "حزم وباقات خاصة للضيوف",
      "description": "باقات الدخول وحجز الطاولات مع خدمات VIP ومشروبات مميزة",
      "caption": "حزم وباقات خاصة للضيوف",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "باقات، VIP، حجز طاولات",
      "representativeOfPage": "http://schema.org/False"
    },
    {
      "@type": "ImageObject",
      "url": SEO_IMAGES.booking,
      "name": "حجز وطاولات VIP",
      "description": "خدمة الحجز الفوري للطاولات وطاولات VIP مع عروض خاصة",
      "caption": "حجز وطاولات VIP",
      "width": 1200,
      "height": 630,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/jpeg",
      "keywords": "حجز، طاولات VIP",
      "representativeOfPage": "http://schema.org/False"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "كورنيش النيل، العجوزة",
    "addressLocality": "الجيزة",
    "addressRegion": "القاهرة الكبرى",
    "postalCode": "11511",
    "addressCountry": "EG",
    "addressCountryName": "مصر"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": NIGHTCLUB_BASE_INFO.coordinates.lat,
    "longitude": NIGHTCLUB_BASE_INFO.coordinates.lng
  },
  "telephone": NIGHTCLUB_BASE_INFO.phone,
  "email": NIGHTCLUB_BASE_INFO.email,
  "priceRange": "750-1500 EGP",
  "currenciesAccepted": ["EGP", "USD", "EUR"],
  "paymentAccepted": ["Cash", "Credit Card", "Mobile Payment"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "20:00",
      "closes": "04:00"
    }
  ],
  "amenityFeature": [
    {"@type": "LocationFeatureSpecification", "name": "VIP Tables - طاولات VIP", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Live Music Shows - عروض موسيقية حية", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Professional Dancers - راقصات محترفات", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Dance Floor - أرضية الرقص", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Premium Bar Service - خدمة بار متميزة", "value": true},
    {"@type": "LocationFeatureSpecification", "name": "Private Rooms - غرف خاصة", "value": true}
  ],
  "performer": SEO_KEYWORDS.performers.map(name => ({"@type": "Person", "name": name})),
  "sameAs": [
    NIGHTCLUB_BASE_INFO.socialMedia.facebook,
    NIGHTCLUB_BASE_INFO.socialMedia.instagram,
    NIGHTCLUB_BASE_INFO.socialMedia.tiktok,
    NIGHTCLUB_BASE_INFO.whatsapp
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156",
    "bestRating": "5",
    "worstRating": "1"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "باقات وعروض نايت كلوب مصر",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "باقة VIP - طاولة VIP مع خدمة مميزة"
        },
        "price": "1500",
        "priceCurrency": "EGP",
        "description": "باقة VIP شاملة مشروبات ومأكولات وخدمة مميزة مع أفضل المقاعد"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "باقة عادية - دخول مع مشروب واحد"
        },
        "price": "750",
        "priceCurrency": "EGP",
        "description": "باقة الدخول العادي مع مشروب واحد مجاني ومتابعة العروض"
      }
    ]
  }
})

// 📊 مولد Structured Data موحد
export const generateStructuredData = () => {
  return generateUnifiedBusinessSchema()
}

// 🌐 مولد WebSite Schema (مضبوط وبه logo كامل)
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": NIGHTCLUB_BASE_INFO.name,
  "alternateName": NIGHTCLUB_BASE_INFO.arabicName,
  "url": NIGHTCLUB_BASE_INFO.domain,
  "description": "أفضل نايت كلوب في مصر 2025 - حفلات ليلية فاخرة مع أشهر النجوم وخدمة VIP استثنائية",
  "inLanguage": ["ar", "en"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${NIGHTCLUB_BASE_INFO.domain}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": NIGHTCLUB_BASE_INFO.name,
    "logo": {
      "@type": "ImageObject",
      "url": SEO_IMAGES.logo,
      "name": "Night Club Egypt Logo - شعار",
      "description": "شعار نايت كلوب مصر الرسمي",
      "width": 1200,
      "height": 1200,
      "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
      "creator": IMAGE_CREATOR_ORG,
      "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
      "creditText": IMAGE_CREDIT,
      "license": IMAGE_LICENSE,
      "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
      "copyrightNotice": COPYRIGHT_NOTICE,
      "encodingFormat": "image/webp"
    }
  }
})

// ❓ مولد FAQ Schema
export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "كم سعر الدخول لنايت كلوب مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "أسعار الدخول تبدأ من 750 جنيه للباقة العادية و 1500 جنيه لباقة VIP الشاملة. نوفر عروض وخصومات خاصة للمجموعات. للحجز اتصل على 01286110562."
      }
    },
    {
      "@type": "Question",
      "name": "أين يقع أفضل نايت كلوب في مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يقع Night Club Egypt في كورنيش النيل، العجوزة، الجيزة. نخدم جميع مناطق القاهرة الكبرى: القاهرة، الجيزة، الشيخ زايد، التجمع الخامس، 6 أكتوبر."
      }
    },
    {
      "@type": "Question",
      "name": "ما هي مواعيد عمل النايت كلوب؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعمل يومياً من الساعة 8 مساءً حتى 4 صباحاً. أفضل الأوقات للحصول على تجربة مميزة من 10 مساءً حتى 2 صباحاً. للحجز والاستفسار اتصل على 01286110562."
      }
    },
    {
      "@type": "Question",
      "name": "من هم الفنانين الذين يحيون الحفلات؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نستضيف أشهر النجوم مثل رحمة محسن، عصام صاصا، إسلام كبونجا، رضا البحراوي، كريم الغزال، وأشهر الراقصات مثل بوسي، روح، ليندا، بديعة، توفحة، فيروز."
      }
    },
    {
      "@type": "Question",
      "name": "هل يمكن حجز طاولة VIP في النايت كلوب؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، نوفر خدمة حجز طاولات VIP مع خدمة مميزة شاملة مشروبات ومأكولات. يمكنك الحجز عبر الاتصال على 01286110562 أو من خلال الواتساب."
      }
    },
    {
      "@type": "Question",
      "name": "ما هي مواعيد العمل في نايت كلوب مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يعمل نايت كلوب مصر يومياً من الساعة 8 مساءً حتى الساعة 4 فجراً."
      }
    },
    {
      "@type": "Question",
      "name": "كيف يمكنني الحجز في نايت كلوب مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "يمكنك الحجز عبر الواتساب على الرقم +201286110562 أو من خلال صفحة اتصل بنا على الموقع."
      }
    },
    {
      "@type": "Question",
      "name": "ما هي أسعار الدخول والحفلات؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "الأسعار تبدأ من 750 جنيه مصري وتختلف حسب نوع الحفل والباقات."
      }
    },
    {
      "@type": "Question",
      "name": "هل يوجد باركينج متاح للعملاء؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، يتوفر باركينج خاص وآمن للعملاء بالقرب من النادي."
      }
    },
    {
      "@type": "Question",
      "name": "هل يقبل الدفع ببطاقات الائتمان؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "نعم، نقبل الدفع النقدي وبطاقات الائتمان الرئيسية."
      }
    },
    {
      "@type": "Question",
      "name": "هل يوجد غرف أو خدمات خاصة داخل نايت كلوب مصر؟",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "لا، نايت كلوب مصر لا يوفر أي غرف أو خدمات غير قانونية أو غير شرعية. خدماتنا تقتصر فقط على الترفيه الليلي المصرح به والعروض الفنية."
      }
       }
  ]
})

// 🔗 مولد Breadcrumb Schema
export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

// 📝 مولد Meta Tags محسن
export const generatePageMetadata = ({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website"
}: {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}): Metadata => {
  const defaultImage = `${NIGHTCLUB_BASE_INFO.domain}/images/logo-seo-1200x1200.webp`
  const defaultUrl = NIGHTCLUB_BASE_INFO.domain

  // دمج الكلمات المفتاحية
  const allKeywords = [
    ...SEO_KEYWORDS.primary,
    ...keywords
  ]

  return {
    title,
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: NIGHTCLUB_BASE_INFO.name, url: NIGHTCLUB_BASE_INFO.domain }],
    creator: NIGHTCLUB_BASE_INFO.name,
    publisher: NIGHTCLUB_BASE_INFO.name,

    openGraph: {
      title,
      description,
      url: url || defaultUrl,
      siteName: NIGHTCLUB_BASE_INFO.name,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: "ar_EG",
      type: type as any
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || defaultImage],
      site: "@nightclubegypt",
      creator: "@nightclubegypt"
    },

    alternates: {
      canonical: url || defaultUrl
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    other: {
      "geo.region": "EG-C",
      "geo.placename": "Cairo, Giza, Agouza, Sheikh Zayed",
      "geo.position": `${NIGHTCLUB_BASE_INFO.coordinates.lat};${NIGHTCLUB_BASE_INFO.coordinates.lng}`,
      "ICBM": `${NIGHTCLUB_BASE_INFO.coordinates.lat}, ${NIGHTCLUB_BASE_INFO.coordinates.lng}`,
    }
  }
}

// 🌐 مولد Canonical URL
export const generateCanonicalUrl = (path: string = "") => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const pathSegment = normalizedPath.split('/').pop() || ''
  const hasExtension = pathSegment.includes('.')
  const canonicalPath = normalizedPath === '/'
    ? normalizedPath
    : normalizedPath.endsWith('/') || hasExtension
      ? normalizedPath
      : `${normalizedPath}/`

  return `${NIGHTCLUB_BASE_INFO.domain}${canonicalPath}`
}

// 📊 مولد Sitemap URLs محسن
export const generateSitemapUrls = () => [
  {
    url: NIGHTCLUB_BASE_INFO.domain,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0
  },
  {
    url: `${NIGHTCLUB_BASE_INFO.domain}/about`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9
  },
  {
    url: `${NIGHTCLUB_BASE_INFO.domain}/programs`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9
  },
  {
    url: `${NIGHTCLUB_BASE_INFO.domain}/packages`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  },
  {
    url: `${NIGHTCLUB_BASE_INFO.domain}/gallery`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  },
  {
    url: `${NIGHTCLUB_BASE_INFO.domain}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  },
  {
    url: `${NIGHTCLUB_BASE_INFO.domain}/booking`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9
  }
]

// 🎭 مولد Event Schema
export const generateEventSchema = (eventData: {
  name: string
  description: string
  startDate: string
  endDate?: string
  price?: string
  performer?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": eventData.name,
  "description": eventData.description,
  "startDate": eventData.startDate,
  "endDate": eventData.endDate || eventData.startDate,
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": NIGHTCLUB_BASE_INFO.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "كورنيش النيل، العجوزة",
      "addressLocality": "الجيزة",
      "addressRegion": "القاهرة الكبرى",
      "addressCountry": "EG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": NIGHTCLUB_BASE_INFO.coordinates.lat,
      "longitude": NIGHTCLUB_BASE_INFO.coordinates.lng
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": NIGHTCLUB_BASE_INFO.name,
    "url": NIGHTCLUB_BASE_INFO.domain
  },
  "offers": {
    "@type": "Offer",
    "price": eventData.price || "750",
    "priceCurrency": "EGP",
    "availability": "https://schema.org/InStock",
    "url": NIGHTCLUB_BASE_INFO.domain
  },
  "performer": {
    "@type": "Person",
    "name": eventData.performer || "Live DJ Performance"
  }
})

// � مولد Schema للتقييم الإجمالي
export const generateAggregateRatingSchema = (ratingValue: number = 4.8, reviewCount: number = 258) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": ratingValue,
  "reviewCount": reviewCount,
  "bestRating": 5,
  "worstRating": 1
})
// 📋 مولد Schema لكيفية القيام بشيء
export const generateHowToSchema = (steps: any[] = []) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "كيف تحجز نايت كلوب في مصر",
  "description": "دليل خطوة بخطوة لحجز نايت كلوب في مصر",
  "step": steps
})
// 🖼️ مولد Schema للصور
export const generateImageSchema = (imageUrl: string, name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "url": imageUrl,
  "name": name,
  "description": description,
  "width": 1200,
  "height": 630,
  "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
  "creator": IMAGE_CREATOR_ORG,
  "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
  "creditText": IMAGE_CREDIT,
  "license": IMAGE_LICENSE,
  "acquireLicensePage": IMAGE_ACQUIRE_PAGE,
  "copyrightNotice": COPYRIGHT_NOTICE
})
// 🎥 مولد Schema للفيديوهات
export const generateVideoSchema = (videoUrl: string, name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "url": videoUrl,
  "name": name,
  "description": description,
  "thumbnailUrl": videoUrl.replace(/\.[^/.]+$/, ".jpg"),
  "uploadDate": new Date().toISOString().split("T")[0],
  "duration": "PT3M",
  "contentLocation": { "@type": "Place", "name": "Cairo, Egypt" },
  "creator": IMAGE_CREATOR_ORG,
  "copyrightHolder": IMAGE_COPYRIGHT_HOLDER,
  "license": IMAGE_LICENSE
})
// ⭐ مولد Schema للمراجعات
export const generateReviewSchema = (reviewText: string, authorName: string, rating: number = 5) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": authorName
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": rating,
    "bestRating": 5
  },
  "reviewBody": reviewText,
  "datePublished": new Date().toISOString().split("T")[0]
})
// 📄 مولد metadata خاص لكل نوع صفحة
export const generatePageMetadataByType = (
  pageType: 'home' | 'about' | 'programs' | 'packages' | 'gallery' | 'contact' | 'faq' | 'booking' | 'places' | 'place',
  customTitle?: string,
  customDescription?: string,
  customKeywords?: string[],
  customImage?: string,
  customUrl?: string
) => {
  const pageInfo = {
    home: {
      title: "🔥 أفضل نايت كلوب في مصر 2025 | أسعار مميزة من 750 جنيه",
      description: "🔥 نايت كلوب من الآخر في مصر 2025! أحلى أجواء وسهرات مع أشهر النجوم: رحمة محسن، عصام صاصا، إسلام كبونجا، بوسي، روح، ليندا 🎶 خدمة VIP فخمة، رقص شرقي وديسكو، DJs عالميين وأجواء نار.",
      path: "",
      image: SEO_IMAGES.hero,
      keywords: ["حجز نايت كلوب مصر", "أسعار 750 جنيه", "حفلات رحمة محسن", "نايت كلوب مصر", "أفضل نايت كلوب في مصر", "نايت كلوب القاهرة", "ارخص نايت كلوب",
    "حجز نايت كلوب", "سهرات نايت كلوب", "اسعار نايت كلوب", "نايت كلوب VIP", "نايت كلوب ","nightclub",'نايت كلوب مصر 2025', 'أفضل نايت كلوب',
    'حفلات ليلية فاخرة',"ارخص نايت كلوب","نايت كلوب","نيت كلوب","نايت كلاب","حجز نايت كلوب","نايتات مصر","كلوبات مصر",
    "نايت كلوب مصر", "أفضل نايت كلوب في مصر", " سهرات نايت كلوب", "اسعار نايت كلوب", "Night Club", "نايت كلوب", "ارخص نايت كلوب",
   "سهرات خليجي", "نايت", "سهرات ديسكو", "كباريه", "ديسكو", "nightclub", "نايت كلوب القاهره", "نايت كلوب في الجيزه","نايت كلوب مصر 2025",
   "أفضل نايت كلوب في مصر", "ملهى ليلي VIP", "نادي ليلي فاخر", "Night Club Egypt", "احجز نايت كلوب", "حفلات ليلية فاخرة", "سهرات مميزة مصر",
    'سهرات VIP', 'ملهى ليلي راقي', 'ديسكو القاهرة',"كباريه","نايت كلوب مفتوح الان","كلوب مصر","نادي نايت ",
    'nightclub Egypt', 'Cairo nightlife', 'VIP nightclub', "club night club","club", "night club","egypt club","the nightclub","عصام صاصا نايت كلوب"]
    },
    about: {
      title: "عن النادي - أفضل نايت كلوب في مصر | Night Club Egypt",
      description: "تعرف على تاريخ وخدمات أفضل نايت كلوب في مصر. أجواء فاخرة، خدمة VIP استثنائية، وحفلات مميزة مع أشهر النجوم في القاهرة والجيزة والعجوزة والشيخ زايد.",
      path: "/about",
      image: SEO_IMAGES.about,
      keywords: ["عن نايت كلوب مصر", "تاريخ أفضل نايت كلوب", "خدمات VIP نايت كلوب"]
    },
    programs: {
      title: "برامج وفعاليات نايت كلوب مصر 2025 - حفلات يومية مع أشهر النجوم",
      description: "تعرف على برامج وفعاليات نايت كلوب مصر الأسبوعية! حفلات يومية مع رحمة محسن، عصام صاصا، بوسي، روح، ليندا وأشهر النجوم.",
      path: "/programs",
      image: SEO_IMAGES.programs,
      keywords: ["برامج نايت كلوب مصر", "فعاليات نايت كلوب","بروجرام نايت كلوب", "حفلات يومية نايت كلوب"]
    },
    packages: {
      title: "باقات وأسعار نايت كلوب مصر - من 750 جنيه | عروض VIP 1500 جنيه",
      description: "اكتشف أفضل باقات وأسعار نايت كلوب مصر 2025! باقة عادية 750 جنيه، باقة VIP 1500 جنيه مع خدمة فاخرة.",
      path: "/packages",
      image: SEO_IMAGES.packages,
      keywords: ["أسعار نايت كلوب مصر", "باقات نايت كلوب 750 جنيه","ارخص نايت كلوب", "اسعار نايت كلوب", "نايت كلوب بي 500", "باقة VIP 1500 جنيه"]
    },
    gallery: {
      title: "معرض الصور والفيديوهات - أفضل نايت كلوب في مصر | Night Club Egypt",
      description: "شاهد أجمل لحظات الحفلات والسهرات في أفضل نايت كلوب بمصر. صور وفيديوهات حصرية للحفلات مع أشهر النجوم.",
      path: "/gallery",
      image: SEO_IMAGES.gallery,
      keywords: ["صور نايت كلوب مصر", "فيديوهات حفلات نايت كلوب", "معرض صور أفضل نايت كلوب"]
    },
    places: {
      title: "أماكن السهر VIP - Night Club Egypt",
      description: "استعرض أفضل أماكن السهر VIP في مصر وحجز سريع عبر WhatsApp أو InstaPay. تصفح الأماكن واحجز الآن.",
      path: "/places",
      image: SEO_IMAGES.nightclub7,
      keywords: ["أماكن نايت كلوب", "حجز أماكن VIP", "نادي ليلي مصر"]
    },
    place: {
      title: "احجز مكانك - Night Club Egypt",
      description: "نموذج حجز المكان مع تفاصيل كاملة وخيارات InstaPay وبدون دفع. احجز الآن عبر أسهل تجربة.",
      path: "/places",
      image: SEO_IMAGES.nightclub8,
      keywords: ["حجز مكان نايت كلوب", "صفحة حجز مكان", "InstaPay" ]
    },
    contact: {
      title: "تواصل معنا واحجز الآن - نايت كلوب مصر | 01286110562",
      description: "احجز في أفضل نايت كلوب بمصر الآن! اتصل على 01286110562 أو احجز عبر واتساب. نخدم القاهرة، الجيزة، العجوزة، الشيخ زايد.",
      path: "/contact",
      image: SEO_IMAGES.contact,
      keywords: ["حجز نايت كلوب مصر", "رقم تليفون نايت كلوب", "01286110562 نايت كلوب"]
    },
    faq: {
      title: "الأسئلة الشائعة - نايت كلوب مصر | إجابات شاملة",
      description: "إجابات على أكثر الأسئلة شيوعاً حول نايت كلوب مصر. أسعار، مواعيد، حجز، فنانين وكل ما تحتاجه لتجربة لا تُنسى.",
      path: "/faq",
      image: SEO_IMAGES.packages,
      keywords: ["أسئلة شائعة نايت كلوب", "FAQ نايت كلوب مصر", "أسعار نايت كلوب", "حجز نايت كلوب"]
    },
    booking: {
      title: "احجز الآن في أفضل نايت كلوب مصر - حجز فوري | خصومات 25%",
      description: "احجز مكانك الآن في أفضل نايت كلوب بمصر! حجز فوري وسريع، خصومات تصل 25% للحجز المبكر.",
      path: "/booking",
      image: SEO_IMAGES.booking,
      keywords: ["حجز نايت كلوب فوري", "احجز نايت كلوب مصر الآن", "حجز مباشر نايت كلوب"]
    }
  }

  const page = pageInfo[pageType]
  const finalTitle = customTitle || page.title
  const finalDescription = customDescription || page.description
  const finalKeywords = [...page.keywords, ...(customKeywords || [])]
  const finalImage = customImage || page.image
  const finalUrl = customUrl || generateCanonicalUrl(page.path)

  return generatePageMetadata({
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    image: finalImage,
    url: finalUrl
  })
}
