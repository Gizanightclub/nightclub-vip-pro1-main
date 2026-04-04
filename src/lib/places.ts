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
  couplesOnly?: boolean;
  gulfOnly?: boolean;
  keywords?: string[]; // كلمات مفتاحية خاصة بكل مكان
};

export const places: Place[] = [
  {
    slug: "tango-club",
    name: "TANGO CLUB - تانجو كلوب",
    location: "الجيزه شارع البحر الاعظم",
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
    keywords: [
      "تانجو كلوب", "Tango Club", "حجز تانجو", "Tango nightclub", "تانجو الجيزة",
      "تانجو كورنيش النيل", "سهرات تانجو", "أسعار تانجو كلوب", "Tango booking",
      "ديسكو تانجو", "رقص شرقي تانجو", "DJs تانجو", "موسيقى حية تانجو",
      "تانجو VIP", "كوكتيل تانجو", "حفلات تانجو الليلية", "Tango café",
      "نايت كلوب الجيزة", "سهرة الجيزة", "nightclub Giza", "البحر الاعظم نايت كلوب"
    ],
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
    slug: "vieena-club",
    name: "VIEENA CLUB",
    location: " العجوزه - كورنيش النيل",
    description: "تجربة راقية بأجواء إيكونومية ودي جي مثالي.",
    price: 1500,
    originalPrice: 2000,
    features: ["بار كوكتيل", "مشروب ترحيبي", "رسم وجه", "سيشن تصوير"],
    image: "/images/2025-04-19.webp",
    video: "/videos/veinaa.mp4",
    keywords: [
      "فيينا كلوب", "Vienna Club", "حجز فيينا", "Vienna nightclub", "فيينا العجوزة",
      "فيينا كورنيش النيل", "سهرات فيينا", "أسعار فيينا كلوب", "Vienna booking",
      "ديسكو فيينا", "رقص شرقي فيينا", "DJs فيينا", "موسيقى حية فيينا",
      "فيينا VIP", "كوكتيل فيينا", "حفلات فيينا الليلية", "Vienna café",
      "نايت كلوب العجوزة", "سهرة العجوزة", "nightclub Agouza", "nightclub Corniche",
      "فيينا كلوب 2026", "حجز فيينا الآن"
    ],
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
    slug: "aowtar-club",
    name: "AOWTAR CLUB - أوتار كلوب",
    location: " العجوزه فندقي فور سيزونز",
    description: "موسيقى عربية وغربية مع تشكيلة واسعة من الضيفات.",
    price: 1500,
    originalPrice: 2500,
    features: ["دي جي مباشر", "مدخل سريع", "جلسات خاصة", "مشروبات مجانية"],
    image: "/images/2026-03-31.webp",
    video: "/videos/اوتار.mp4",
    keywords: [
      "أوتار كلوب", "AOWTAR Club", "حجز أوتار", "AOWTAR booking", "أوتار العجوزة",
      "أوتار فور سيزونز", "سهرات أوتار", "أسعار أوتار كلوب", "AOWTAR night",
      "دي جي أوتار", "موسيقى أوتار", "رلاق أوتار", "أوتار VIP",
      "نايت كلوب العجوزة", "nightclub Agouza", "Four Seasons nightclub"
    ],
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
    slug: "fox-club",
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
    keywords: [
      "فوكس كلوب", "FOX Club", "حجز فوكس", "FOX booking", "فوكس العجوزة",
      "فوكس الجيزة", "سهرات فوكس", "أسعار فوكس كلوب", "FOX nightclub",
      "دي جي فوكس", "فوكس مطل", "FOX lounge", "فوكس VIP",
      "مظلومهم علو النيل", "nightclub Nile view", "Fox Corniche"
    ],
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
    slug: "maluonaerr-club",
    name: "EL MALUONAERR CLUB - المليونير كلوب ",
    location: "القاهرة - الزمالك",
    description: "أجواء راقية وأنيقة مع خدمة فاخرة وحفلات مميزة.",
    price: 3000,
    originalPrice: 3500,
    features: [
      "عرض راقصات على أعلى مستوى",
      "تخفيضات خاصة للأطفال",
      "مواقف سيارات VIP",
    ],
    image: "/images/naloner.jpg",
    video: "/videos/mlyoner.mp4",
    keywords: [
      "مليونير كلوب", "Millionaire Club", "حجز مليونير", "Millionaire booking", "مليونير الزمالك",
      "مليونير القاهرة", "سهرات مليونير", "أسعار مليونير", "EL MALUONAERR night",
      "دي جي مليونير", "راقصات مليونير", "رقص شرقي", "مليونير VIP",
      "نايت كلوب الزمالك", "Zamalek nightclub"
    ],
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
    keywords: [
      "نوكس كلوب", "NOX Club", "حجز نوكس", "NOX booking", "نوكس العجوزة",
      "نوكس ديسكو", "سهرات نوكس", "أسعار نوكس كلوب", "NOX nightclub",
      "دي جي نوكس", "موسيقى إلكترونية", "ليزر نوكس", "نوكس VIP",
      "نايت كلوب مصر", "nightclub Cairo", "نوكس 2026"
    ],
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
    slug: "stage-cairo-club",
    name: "Stage Cairo Club",
    location: "خلف النادي الأهلي، القاهرة",
    description: "تجربة مسرحية مع DJs محليين وعروض ضوء وصوت متقدمة.",
    price: 3500,
    originalPrice: 4500,
    features: ["DJ عالمي", "VIP Lounge", "عرض ليزر", "بوفيه مشروبات"],
    image: "/images/Stage Cairo Club.jpg",
    video: "/videos/حجزات لاونج وديسكو وسياحه مصر.mp4",
    keywords: [
      "ستيج كايرو", "Stage Cairo", "حجز ستيج", "Stage booking", "ستيج النادي الأهلي",
      "ستيج مسرح", "سهرات ستيج", "أسعار ستيج كلوب", "Stage nightclub",
      "دي جي ستيج", "عروض ليزر", "Stage lounge", "ستيج VIP",
      "مسرح ليلي", "theatrical nightclub", "ستيج 2026"
    ],
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
    keywords: [
      "كاش كايرو", "Cash Cairo", "حجز كاش", "Cash booking", "كاش المهندسين",
      "كاش القاهرة", "سهرات كاش", "أسعار كاش كلوب", "Cash nightclub",
      "دي جي كاش", "موسيقى إلكترونية", "نيون كاش", "کاش VIP",
      "نايت كلوب المهندسين", "nightclub Engineers", "Cash 2026"
    ],
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
    description: "أمسيات موسيقية متنوعة و دي جي لايف ودار أجواء حماسية.",
    price: 2500,
    originalPrice: 3500,
    features: ["دي جي لايف", "كوكتيل خاص", "جدران LED", "خدمة سريعة"],
    couplesOnly: true,
    image: "/images/Omni Club Cairo 1.jpg",
    video: "/videos/Omni Club Cairo.mp4",
    keywords: [
      "أومني كلوب", "Omni Club", "حجز أومني", "Omni booking", "أومني الجزيرة",
      "أومني القاهرة", "سهرات أومني", "أسعار أومني كلوب", "Omni nightclub",
      "دي جي أومني", "موسيقى حية", "LED جدران", "أومني VIP",
      "نادي الجزيرة", "nightclub Island Club", "Omni 2026"
    ],
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
    keywords: [
      "إيكو كلوب", "Echo Club", "حجز إيكو", "Echo booking", "إيكو المعادي",
      "إيكو القاهرة", "سهرات إيكو", "أسعار إيكو كلوب", "Echo nightclub",
      "دي جي إيكو", "فرقة موسيقية", "صوتيات عالمية", "إيكو VIP",
      "نايت كلوب المعادي", "nightclub Maadi", "Echo 2026"
    ],
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
    keywords: [
      "كينج كلوب", "King Club", "حجز كينج", "King booking", "كينج الجيزة",
      "كينج البحر الأعظم", "سهرات كينج", "أسعار كينج كلوب", "King nightclub",
      "دي جي كينج", "عروض حصرية", "كوكتيل ملكي", "كينج VIP",
      "نايت كلوب الجيزة", "nightclub Giza", "King 2026"
    ],
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
    couplesOnly: true,
    image: "/images/cosmoclub.egy_14050114_004447329.jpg",
    video: "/videos/Cosmo Lounge & Club.mp4",
    keywords: [
      "كوزمو كلوب", "Cosmo Club", "حجز كوزمو", "Cosmo booking", "كوزمو الزمالك",
      "كوزمو لاونج", "سهرات كوزمو", "أسعار كوزمو", "Cosmo nightclub",
      "دي جي كوزمو", "موسيقى عالمية", "لاونج فخم", "كوزمو VIP",
      "نايت كلوب الزمالك", "nightclub Zamalek", "Cosmo 2026"
    ],
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
    gulfOnly: true,
    couplesOnly: true,
    image: "/images/unnamed.webp",
    video: "/videos/OVID Club.mp4",
    keywords: [
      "أوفيد كلوب", "OVID Club", "حجز أوفيد", "OVID booking", "أوفيد أهل مصر",
      "أوفيد النيل", "سهرات أوفيد", "أسعار أوفيد كلوب", "OVID nightclub",
      "دي جي أوفيد", "فنانين مشهورين", "رقص شبابي", "أوفيد VIP",
      "نايت كلوب النيل", "nightclub Nile", "OVID 2026"
    ],
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
    couplesOnly: true,
    image: "/images/SHOTS.jpg",
    video: "/videos/Shots Club.mp4",
    keywords: [
      "شوتس كلوب", "Shots Club", "حجز شوتس", "Shots nightclub", "شوتس المعادي",
      "جولات shots", "سهرات شوتس", "أسعار شوتس كلوب", "Shots booking",
      "ديسكو شوتس", "رقص شرقي شوتس", "عروض راقصة شوتس", "موسيقى إلكترونية شوتس",
      "شوتس VIP", "كوكتيل شوتس", "حفلات شوتس الليلية", "Shots café",
      "نايت كلوب المعادي", "سهرة المعادي", "nightclub Maadi", "nightclub Cairo Maadi",
      "شوتس كلوب 2026"
    ],
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
    couplesOnly: true,
    image: "/images/ROVI Club صور.jpg",
    video: "/videos/ROVI Club.mp4",
    keywords: [
      "روفي كلوب", "ROVI Club", "حجز روفي", "ROVI booking", "روفي المعادي",
      "روفي كورنيش", "سهرات روفي", "أسعار روفي كلوب", "ROVI nightclub",
      "دي جي روفي", "موسيقى راقصة", "ديسكو حديث", "روفي VIP",
      "نايت كلوب المعادي", "nightclub Maadi Corniche", "ROVI 2026"
    ],
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
    keywords: [
      "راي كلوب", "Rai Club", "حجز راي", "Rai booking", "راي النيل",
      "راي مركب", "سهرات راي", "أسعار راي كلوب", "Rai nightclub",
      "موسيقى راي", "مركب نيلية", "أجواء رومانسية", "راي VIP",
      "حفلات على المركب", "Nile boat party", "Dragon boat club"
    ],
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
    keywords: ["فولت لاونج", "Volt Lounge", "حجز فولت", "فولت كلوب", "nightclub Giza", "نايت كلوب الجيزة", "Dj Giza", "موسيقى فولت", "فولت VIP", "حفلات فولت", "سهرات الدقي", "سهرات العجوزة", "نايت كلوب الدقي", "nightclub booking Giza", "أفضل حفلات الدقي", "حفلات VIP القاهرة", "موسيقى حية عالمية", "Volt lounge reservation", "تذاكر حفلات"],
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
    keywords: ["سانسي كلوب", "Sansee Club", "حجز سانسي", "نايت كلوب المهندسين", "nightclub engineers", "موسيقى عربية وغربية", "سانسي VIP", "سهرات المهندسين", "عروض راقصات", "برامج حصرية", "حفلات جيزة", "nightclub booking engineers", "سهرات ممتعة", "موسيقى مباشرة", "أفضل حفلات المهندسين", "راقصات محترفات", "Sansee reservation", "تذاكر سانسي", "حفلات يومية", "عروض مسائية"],
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
    keywords: ["ديسكو نوكس", "Disco NoX Club", "حجز نوكس", "نوكس كلوب", "عروض رقص", "نايت كلوب العجوزة", "nightclub Alzawiya", "Dj مصر", "موسيقى رقص", "نوكس VIP", "حفلات العجوزة", "سهرات مصرية", "نظام صوتي متقدم", "إضاءة ديجيتال", "Disco booking Giza", "تذاكر ديسكو", "حفلات راقصة", "عروض فنية متميزة", "حفلات يومية", "أفضل ديسكو القاهرة"],
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
    slug: "sahalal-club",
    name: "SAHALAL CLUB - صهله كلوب",
    location: "الجيزه - شارع الهرم",
    description: "أجواء مليئة بالطاقة وصوتيات احترافية وحفلات يومية.",
    price: 2000,
    originalPrice: 2900,
    features: ["دي جي عالمي", "ساحة رقص واسعة", "عروض فنية", "VIP"],
    image: "/images/FB_IMG_1775170510794.jpg",
    video: "/videos/صهله.mp4",
    keywords: ["صهله كلوب", "Sahalal Club", "حجز صهله", "صهله نايت كلوب", "nightclub Giza", "نايت كلوب شارع الهرم", "Dj عالمي", "موسيقى عالمية", "صهله VIP", "حفلات الهرم", "سهرات الجيزة", "ساحة رقص كبيرة", "عروض فنية يومية", "Sahalal booking", "تذاكر صهله", "حفلات مصرية", "أفضل حفلات الهرم", "nightclub Sahalal", "حفلات طاقة عالية", "موسيقى حية مباشرة"],
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
    keywords: ["كاليجيه كلوب", "Kalije Night Club", "حجز كاليجيه", "نايت كلوب الدقي", "nightclub Doqqi", "موسيقى وايت", "Dj مقيم", "كاليجيه VIP", "حفلات الدقي", "سهرات حديثة", "برامج خاصة", "محطات VIP حصرية", "Kalije booking", "تذاكر كاليجيه", "نايت كلوب مصرية", "حفلات يومية مميزة", "موسيقى حية عالمية", "منطقة زوار فاخرة", "أفضل الحفلات الدقي", "nightclub Kalije Egypt"],
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
];

export const getPlaceBySlug = (slug: string) =>
  places.find((place) => place.slug === slug);
