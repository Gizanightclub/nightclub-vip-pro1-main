export type Package = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
};

export type Place = {
  slug: string;
  name: string;
  location: string;
  description: string;
  price: number;
  originalPrice: number;
  features: string[];
  image: string;
  video?: string;
  packages: Package[];
};

export const places: Place[] = [
  {
    slug: "city-vibes",
    name: " TANGO CLUB - تانجو كلوب",
    location: " الجيزه شارع البحر الاعظم",
    description: "سهرة VIP مع DJs عالميين وأجواء ساحرة. احجز تجربة لا تُنسى.",
    price: 1000,
    originalPrice: 1500,
    features: [
      "طاولة VIP خاصة",
      "3 مشروبات مجانية",
      "مدخل سريع بدون انتظار",
      "دي جي مباشر لموسيقى مميزة",
    ],
    image: "/images/night.jpg",
    packages: [
      {
        id: "standard",
        name: "تيكت صف تاني 🎫",
        price: 1000,
        originalPrice: 1700,
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)",
        ],
      },
      {
        id: "vip",
        name: "تيكت صف اول VIP 🎫🔥",
        price: 2000,
        originalPrice: 3300,
        features: [
          "ثلاث مشروبات فاخرة (Free)",
          "طبق مازة مميزة (Free)",
          "طبق فواكه طازة مميزة (Free)",
          "مقاعد أمام الستيج مباشرة + خدمة VIP خاصة",
          "إمكانية الجلوس مع بنات (أكثر تميزً)",
        ],
      },
    ],
  },
  {
    slug: "royal-lounge",
    name: "FOX CLUB - فوكس كلوب",
    location: "الجيزة - العجوزه",
    description: "مطل على النيل مع أجواء فخمة وصوتيات عالمية. حجزك شامل خدمات .",
    price: 2500,
    originalPrice: 3000,
    features: [
      "قائمة طعام راقية",
      "مشروبات فاخرة غير محدودة",
      "جلسة تصوير VIP",
      "خدمة استقبال شخصية",
    ],
    image: "/images/mmas.jpg",
    packages: [
      {
        id: "standard",
        name: "تيكت صف تاني 🎫",
        price: 2500,
        originalPrice: 2900,
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)",
        ],
      },
      {
        id: "vip",
        name: "تيكت صف اول VIP 🎫🔥",
        price: 3000,
        originalPrice: 3500,
        features: [
          "ثلاث مشروبات فاخرة (Free)",
          "طبق مازة مميزة (Free)",
          "طبق فواكه طازة مميزة (Free)",
          "مقاعد أمام الستيج مباشرة + خدمة VIP خاصة",
          "إمكانية الجلوس مع بنات (أكثر تميزاً)",
        ],
      },
    ],
  },
  {
    slug: "neon-paradise",
    name: "EL MALUONAERR CLUB - المليونير كلوب ",
    location: "القاهرة - الزمالك",
    description: "أضواء نيون، رقص شرقي وغربي، وVIP exclusive experience.",
    price: 3000,
    originalPrice: 3500,
    features: [
      "دي جي شعبي وديسكو",
      "عرض راقصات على أعلى مستوى",
      "تخفيضات خاصة للأطفال",
      "مواقف سيارات VIP",
    ],
    image: "/images/naloner.jpg",
    video: "/videos/rahma.mp4",
    packages: [
      {
        id: "standard",
        name: "تيكت صف تاني 🎫",
        price: 3000,
        originalPrice: 3500,
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)",
        ],
      },
      {
        id: "vip",
        name: "تيكت صف اول VIP 🎫🔥",
        price: 3500,
        originalPrice: 4000,
        features: [
          "ثلاث مشروبات فاخرة (Free)",
          "طبق مازة مميزة (Free)",
          "طبق فواكه طازة مميزة (Free)",
          "مقاعد أمام الستيج مباشرة + خدمة VIP خاصة",
          "إمكانية الجلوس مع بنات (أكثر تميزاً)",
        ],
      },
    ],
  },
  {
    slug: "nox-club",
    name: "NOX CLUB",
    location: "القاهرة - العجوزه ",
    description: "نادي فخم مع أنظمة صوتية متقدمة وأجواء إلكترونية.",
    price: 2800,
    originalPrice: 3500,
    features: ["إضاءة ليزر", "دي جي عالمي", "VIP Lounge", "بار خاص"],
    image: "/images/nox club 01286110562.jpg",
    packages: [
      { id: "standard", name: "تيكت صف تاني 🎫", price: 2800, originalPrice: 3500, features: ["مشروب ترحيب", "طاولة مشتركة"] },
      { id: "vip", name: "تيكت VIP 🎫🔥", price: 3800, originalPrice: 4500, features: ["طاولة VIP", "مشروب لا محدود"] },
    ],
  },
  {
    slug: "vieena-club",
    name: "VIEENA CLUB",
    location: " العجوزه - كورنيش النيل",
    description: "تجربة راقية بأجواء إيكونومية ودي جي مثالي.",
    price: 1500,
    originalPrice: 2000,
    features: ["بار كوكتيل", "مشروب ترحيبي", "رسم وجه", "سيشن تصوير"],
    image: "/images/nightclubegypt.com.jpg",
    packages: [
      { id: "standard", name: "تيكت صف تاني 🎫", price: 1500, originalPrice: 2000, features: ["مشروب ترحيب", "مازة خفيفة"] },
      { id: "vip", name: "تيكت VIP 🎫🔥", price: 2500, originalPrice: 3000, features: ["طاولة VIP", "بار خاص"] },
    ],
  },
  {
    slug: "roty-club",
    name: "ROTY CLUB",
    location: " العجوزه فندق روتي ",
    description: "موسيقى عربية وغربية مع تشكيلة واسعة من الضيفات.",
    price: 2000,
    originalPrice: 2500,
    features: ["دي جي مباشر", "مدخل سريع", "جلسات خاصة", "مشروبات مجانية"],
    image: "/images/nightclub8.jpeg",
    packages: [
      { id: "standard", name: "تيكت صف تاني 🎫", price: 1500, originalPrice: 2000, features: ["مشروب ترحيب", "مازة خفيفة"] },
      { id: "vip", name: "تيكت VIP 🎫🔥", price: 3100, originalPrice: 3600, features: ["طاولة VIP", "بار خاص"] },
    ],
  },
];

export const getPlaceBySlug = (slug: string) =>
  places.find((place) => place.slug === slug);
