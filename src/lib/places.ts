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
  available?: boolean;
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
    video: "/videos/Savetik_1765351085.mp4",
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
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)",
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
    image: "/images/2026-03-29.webp",
    video: "/videos/vedo2.mp4",
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
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)",
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
    video: "/videos/mlyoner.mp4",
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
          "اثنين مشروبات فاخرة (Free)",
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
    video: "/videos/Disco NoX Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2800, 
        originalPrice: 3500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3800, 
        originalPrice: 4500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
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
    image: "/images/2025-04-19.webp",
    video: "/videos/veinaa.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 1500, 
        originalPrice: 2000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 2500, 
        originalPrice: 3000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "roty-club",
    name: "AOWTAR CLUB - أوتار كلوب",
    location: " العجوزه فندق روتي ",
    description: "موسيقى عربية وغربية مع تشكيلة واسعة من الضيفات.",
    price: 2000,
    originalPrice: 2500,
    features: ["دي جي مباشر", "مدخل سريع", "جلسات خاصة", "مشروبات مجانية"],
    image: "/images/2026-03-31.webp",
    video: "/videos/اوتار.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 1500, 
        originalPrice: 2000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3100, 
        originalPrice: 3600, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "stage-cairo-club",
    name: "Stage Cairo Club",
    location: "خلف النادي الأهلي، القاهرة",
    description: "تجربة مسرحية مع DJs محليين وعروض ضوء وصوت متقدمة.",
    price: 3500,
    originalPrice: 4500,
    features: ["DJ عالمي", "VIP Lounge", "عرض ليزر", "بوفيه مشروبات"],
    image: "/images/Stage Cairo Club.jpg",
    video: "/videos/حجزات لاونج وديسكو وسياحه مصر.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 3500, 
        originalPrice: 4500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 4500, 
        originalPrice: 5200, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "cash-cairo",
    name: "Cash Cairo",
    location: "المهندسين، القاهرة",
    description: "مكان عصري بإضاءة نيون وموسيقى إلكترونية مع طراز VIP مميز.",
    price: 2500,
    originalPrice: 3900,
    features: ["دي جي إلكتروني", "مشروبات مختارة", "طاولة مشتركة", "باقات احتفالية"],
    image: "/images/unnamed.jpg",
    video: "/videos/Cash Cairo.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2500, 
        originalPrice: 3900, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3000, 
        originalPrice: 3600, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "omni-club-cairo",
    name: "Omni Club Cairo",
    location: "طريق نادي الجزيرة، القاهرة",
    description: "أمسيات موسيقية متنوعة ودي جي لايف ودار أجواء حماسية.",
    price: 2500,
    originalPrice: 3500,
    features: ["دي جي لايف", "كوكتيل خاص", "جدران LED", "خدمة سريعة"],
    image: "/images/Omni Club Cairo 1.jpg",
    video: "/videos/Omni Club Cairo.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2500, 
        originalPrice: 3500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3200, 
        originalPrice: 4000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "echo-club",
    name: "Echo Club",
    location: "المعادي، القاهرة",
    description: "صوتيات مذهلة مع أضواء ليزر وعروض مع فرق موسيقية حية.",
    price: 2400,
    originalPrice: 3000,
    features: ["فرقة حية", "دي جي عالمي", "بار مفتوح", "مواقف سيارات"],
    image: "/images/echo-club.jpg",
    video: "/videos/Echo Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2400, 
        originalPrice: 3000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3400, 
        originalPrice: 4300, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "king-club",
    name: "King Club",
    location: "البحر الأعظم، الجيزة",
    description: "المكان الملكي للأمسيات الراقية مع عروض دي جي حصرية.",
    price: 2400,
    originalPrice: 4000,
    features: ["عروض دي جي حصرية", "كرسي VIP", "قائمة كوكتيل مميزة", "مدخل سريع"],
    image: "/images/2026-03-31.webp",
    video: "/videos/King Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2400, 
        originalPrice: 3000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3600, 
        originalPrice: 4500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "cosmo-lounge-and-club",
    name: "Cosmo Lounge & Club",
    location: "الزمالك، القاهرة",
    description: "لounge فخم مع دي جي وموسيقى عالمية وخدمة VIP فاخرة.",
    price: 5000,
    originalPrice: 6000,
    features: ["دي جي عالمي", "لوبي راقي", "كوكتيل خاص", "سياسة أقصى راحة"],
    image: "/images/cosmoclub.egy_14050114_004447329.jpg",
    video: "/videos/Cosmo Lounge & Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 5000, 
        originalPrice: 6000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 6000, 
        originalPrice: 7000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "ovid-club",
    name: "OVID Club",
    location: "ممشى أهل مصر (على النيل)",
    description: "أجواء شبابية مع دي جي واستضافة فنانين مشهورين.",
    price: 4000,
    originalPrice: 5000,
    features: ["دي جي شهير", "أضواء LED", "منطقة رقص", "باقة أصدقاء"],
    image: "/images/unnamed.webp",
    video: "/videos/OVID Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 4000, 
        originalPrice: 5000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 5000, 
        originalPrice: 6000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "shots-club",
    name: "Shots Club",
    location: "المعادي، القاهرة",
    description: "ليالي ملتهبة مع جولات Shots باقات VIP وتقنية عالية.",
    price: 1500,
    originalPrice: 2500,
    features: ["جولات Shots", "دي جي إلكتروني", "عروض راقصة", "مساحات VIP"],
    image: "/images/SHOTS.jpg",
    video: "/videos/Shots Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 1500, 
        originalPrice: 2500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3100, 
        originalPrice: 3900, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "rovi-club",
    name: "ROVI Club",
    location: "كورنيش المعادي، القاهرة",
    description: "ركن حديث للموسيقى الراقصة والحفلات الليلية الكبيرة.",
    price: 2500,
    originalPrice: 3000,
    features: ["ديسكو لايت", "دي جي عالمي", "بار مفتوح", "خدمة VIP"],
    image: "/images/ROVI Club صور.jpg",
    video: "/videos/ROVI Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2500, 
        originalPrice: 3000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3300, 
        originalPrice: 4200, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "rai-club-nile-dragon-boat",
    name: "Rai Club Nile Dragon Boat",
    location: "كورنيش النيل، القاهرة",
    description: "حفلات على المركب مع إطلالة نيلية وموسيقى راي وحفلات حية.",
    price: 2200,
    originalPrice: 2800,
    features: ["موسيقى راي", "منظر النيل", "أضواء ليلية", "أجواء رومانسية"],
    image: "/images/Rai Club Nile Dragon Boat.jpg",
    video: "/videos/Savetik_1764254796.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2200, 
        originalPrice: 2800, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3000, 
        originalPrice: 4900, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "volt-lounge",
    name: "Volt Lounge",
    location: "الدقي / العجوزة، الجيزة",
    description: "أجواء نوادي عالمية مع دي جي وإضاءة ديناميكية وخدمة سريعة.",
    price: 3000,
    originalPrice: 4000,
    features: ["دي جي متجدد", "مجموعة مشروبات راقية", "قسم VIP", "مشاهدة ليلية"],
    image: "/images/Volt Lounge.jpg",
    video: "/videos/Volt Lounge.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 3000, 
        originalPrice: 4000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3500, 
        originalPrice: 4000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "sansee-club",
    name: "سانسي كلوب",
    location: "المهندسين، الجيزة",
    description: "موقع مميز لسهرة ممتعة مع موسيقى عربية وغربية وبرامج حصرية.",
    price: 2700,
    originalPrice: 3500,
    features: ["دي جي مقيم", "بوفيه مشروبات", "عرض راقصات", "ممر VIP"],
    image: "/images/سانسي كلوب.png",
    video: "/videos/سانسي كلوب.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2700, 
        originalPrice: 3500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3400, 
        originalPrice: 4500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "disco-nox-club",
    name: "Disco NoX Club",
    location: "العجوزة، الجيزة",
    description: "نسخة موسيقية متطورة من NoX مع دي جي وعروض رقص لا تُنسى.",
    price: 3500,
    originalPrice: 4000,
    features: ["دي جي رقص", "نور ديجيتال", "VIP", "نظام صوتي 360"],
    image: "/images/nox club 01286110562.jpg",
    video: "/videos/Disco NoX Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 3500, 
        originalPrice: 4000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 4300, 
        originalPrice: 4900, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "millennium-club",
    name: "SAHALAL CLUB - صهله كلوب",
    location: "الجيزه - شارع الهرم",
    description: "أجواء مليئة بالطاقة وصوتيات احترافية وحفلات يومية.",
    price: 2000,
    originalPrice: 2900,
    features: ["دي جي عالمي", "ساحة رقص واسعة", "عروض فنية", "VIP"],
    image: "/images/FB_IMG_1775170510794.jpg",
    video: "/videos/صهله.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2000, 
        originalPrice: 2900, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3500, 
        originalPrice: 4300, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
  {
    slug: "kalije-night-club",
    name: "Kalije Night Club",
    location: "الدقي، الجيزة",
    description: "أجواء حديثة ومتنوعة مع موسيقى وايت DJs ومحطات VIP حصرية.",
    price: 3000,
    originalPrice: 4000,
    features: ["DJ حي", "منطقة للزوار", "برامج خاصة", "خدمة VIP"],
    image: "/images/Kalije Night Club.jpg",
    video: "/videos/Kalije Night Club.mp4",
    packages: [
      { 
        id: "standard", 
        name: "تيكت صف تاني 🎫", 
        price: 2700, 
        originalPrice: 3500, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الثاني",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
      { 
        id: "vip", 
        name: "تيكت صف اول VIP 🎫🔥", 
        price: 3200, 
        originalPrice: 4000, 
        features: [
          "مشروبين فاخرين (Free) من اختيارك",
          "طبق مازة متنوع (Free)",
          "طبق فواكه طازة (Free)",
          "مقاعد مميزة في الصف الأول",
          "إمكانية الجلوس مع بنات (عند الطلب)"
        ] 
      },
    ],
  },
].sort((a, b) => a.price - b.price);

export const getPlaceBySlug = (slug: string) =>
  places.find((place) => place.slug === slug);
