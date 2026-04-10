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
  rating?: number; // تقييم المكان من 1-5 نجوم
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
      "2 مشروبات مجانية",
      "مدخل سريع بدون انتظار",
      "دي جي مباشر لموسيقى مميزة",
    ],
    image: "/images/night.jpg",
    video: "/videos/Savetik_1765351085.mp4",
    rating: 4.8,
    keywords: [
      "تانجو كلوب", "Tango Club", "حجز تانجو", "Tango nightclub", "تانجو الجيزة",
      "تانجو كورنيش النيل", "سهرات تانجو", "أسعار تانجو كلوب", "Tango booking",
      "ديسكو تانجو", "رقص شرقي تانجو", "DJs تانجو", "موسيقى حية تانجو",
      "تانجو VIP", "كوكتيل تانجو", "حفلات تانجو الليلية", "Tango café",
      "نايت كلوب الجيزة", "سهرة الجيزة", "nightclub Giza", "البحر الاعظم نايت كلوب",
      "تانجو كلوب 2026", "حجز تانجو الآن", "تانجو كلوب الحجز", "تانجو كلوب vip",
      "تانجو كلوب الرقص", "ديي تانجو كلوب", "أسعار تانجو كلوب", "حفلات تانجو كلوب",
      "موسيقى تانجو كلوب", "تانجو كلوب الجيزة", "احجز تانجو كلوب", "تانجو كلوب العجوزة",
      "Tango Club Giza", "Tango Nightclub Cairo", "Book Tango Club Elgouza", "Tango Club VIP Tables",
      "Dancing Tango Club Giza", "DJ Tango Club Cairo", "Tango Club Booking Online", "Tango Club Prices",
      "Live Entertainment Tango", "Music Tango Club Giza", "تانجو كلوب كورنيش", "تانجو كلوب النيل"
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
    features: ["بار كوكتيل", "مشروب ترحيبي", "رقص شرقي ", "بروجرام يومي  "],
    image: "/images/2025-04-19.webp",
    video: "/videos/veinaa.mp4",
    rating: 4.6,
    keywords: [
      "فيينا كلوب", "Vienna Club", "حجز فيينا", "Vienna nightclub", "فيينا العجوزة",
      "فيينا كورنيش النيل", "سهرات فيينا", "أسعار فيينا كلوب", "Vienna booking",
      "ديسكو فيينا", "رقص شرقي فيينا", "DJs فيينا", "موسيقى حية فيينا",
      "فيينا VIP", "كوكتيل فيينا", "حفلات فيينا الليلية", "Vienna café",
      "نايت كلوب العجوزة", "سهرة العجوزة", "nightclub Agouza", "nightclub Corniche",
      "فيينا كلوب 2026", "حجز فيينا الآن", "فيينا كلوب الحجز", "فيينا كلوب vip",
      "فيينا كلوب الرقص", "ديي فيينا كلوب", "أسعار فيينا كلوب", "حفلات فيينا كلوب",
      "موسيقى فيينا كلوب", "فيينا كلوب الجيزة", "احجز فيينا كلوب", "فيينا كلوب العجوزة",
      "Vienna Club Giza", "Vienna Nightclub Cairo", "Book Vienna Club Elgouza", "Vienna Club VIP Tables",
      "Dancing Vienna Club Giza", "DJ Vienna Club Cairo", "Vienna Club Booking Online", "Vienna Club Prices",
      "Live Entertainment Vienna", "Music Vienna Club Giza", "فيينا كلوب كورنيش", "فيينا كلوب النيل"
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
    rating: 4.7,
    keywords: [
      "أوتار كلوب", "AOWTAR Club", "حجز أوتار", "AOWTAR booking", "أوتار العجوزة",
      "أوتار فور سيزونز", "سهرات أوتار", "أسعار أوتار كلوب", "AOWTAR nightclub",
      "دي جي أوتار", "موسيقى أوتار", "جلسات خاصة أوتار", "أوتار VIP",
      "نايت كلوب العجوزة", "nightclub Agouza", "Four Seasons nightclub",
      "أوتار كلوب 2026", "حجز أوتار الآن", "أوتار كلوب الحجز", "أوتار كلوب vip",
      "أوتار كلوب الرقص", "ديي أوتار كلوب", "أسعار أوتار كلوب", "حفلات أوتار كلوب",
      "موسيقى أوتار كلوب", "أوتار كلوب الجيزة", "احجز أوتار كلوب", "أوتار كلوب العجوزة",
      "AOWTAR Club Giza", "AOWTAR Nightclub Cairo", "Book AOWTAR Club Elgouza", "AOWTAR Club VIP Tables",
      "Dancing AOWTAR Club Giza", "DJ AOWTAR Club Cairo", "AOWTAR Club Booking Online", "AOWTAR Club Prices",
      "Live Entertainment AOWTAR", "Music AOWTAR Club Giza", "أوتار كلوب كورنيش", "أوتار كلوب النيل"
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
      "قائمة مشروبات  راقية",
      " بروجرام يومي مميز",
      "جلسة VIP",
      "خدمة استقبال شخصية",
    ],
    image: "/images/2026-03-29.webp",
    video: "/videos/vedo2.mp4",
    rating: 4.9,
    keywords: [
      "فوكس كلوب", "FOX Club", "حجز فوكس", "FOX booking", "فوكس العجوزة",
      "فوكس الجيزة", "سهرات فوكس", "أسعار فوكس كلوب", "FOX nightclub",
      "دي جي فوكس", "فوكس مطل", "FOX lounge", "فوكس VIP",
      "مظلومهم علو النيل", "nightclub Nile view", "Fox Corniche",
      "فوكس كلوب 2026", "حجز فوكس الآن", "فوكس كلوب الحجز", "فوكس كلوب vip",
      "فوكس كلوب الرقص", "ديي فوكس كلوب", "أسعار فوكس كلوب", "حفلات فوكس كلوب",
      "موسيقى فوكس كلوب", "فوكس كلوب الجيزة", "احجز فوكس كلوب", "فوكس كلوب العجوزة",
      "FOX Club Giza", "FOX Nightclub Cairo", "Book FOX Club Elgouza", "FOX Club VIP Tables",
      "Dancing FOX Club Giza", "DJ FOX Club Cairo", "FOX Club Booking Online", "FOX Club Prices",
      "Live Entertainment FOX", "Music FOX Club Giza", "فوكس كلوب كورنيش", "فوكس كلوب النيل"
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
      "تخفيضات 20% على المشروبات",
      "مواقف سيارات VIP",
    ],
    image: "/images/naloner.jpg",
    video: "/videos/mlyoner.mp4",
    rating: 4.5,
    keywords: [
      "مليونير كلوب", "Millionaire Club", "حجز مليونير", "Millionaire booking", "مليونير الزمالك",
      "مليونير القاهرة", "سهرات مليونير", "أسعار مليونير كلوب", "EL MALUONAERR nightclub",
      "دي جي مليونير", "راقصات مليونير", "رقص شرقي مليونير", "مليونير VIP",
      "نايت كلوب الزمالك", "Zamalek nightclub", "مليونير كلوب 2026",
      "حجز مليونير الآن", "مليونير كلوب الحجز", "مليونير كلوب vip", "مليونير كلوب الرقص",
      "ديي مليونير كلوب", "أسعار مليونير كلوب", "حفلات مليونير كلوب", "موسيقى مليونير كلوب",
      "مليونير كلوب القاهرة", "احجز مليونير كلوب", "مليونير كلوب الزمالك",
      "Millionaire Club Cairo", "Millionaire Nightclub Zamalek", "Book Millionaire Club Zamalek", "Millionaire Club VIP Tables",
      "Dancing Millionaire Club Cairo", "DJ Millionaire Club Zamalek", "Millionaire Club Booking Online", "Millionaire Club Prices",
      "Live Entertainment Millionaire", "Music Millionaire Club Cairo", "مليونير كلوب كورنيش", "مليونير كلوب النيل"
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
    rating: 4.4,
    keywords: [
      "نوكس كلوب", "NOX Club", "حجز نوكس", "NOX booking", "نوكس العجوزة",
      "نوكس القاهرة", "سهرات نوكس", "أسعار نوكس كلوب", "NOX nightclub",
      "دي جي نوكس", "موسيقى إلكترونية نوكس", "ليزر نوكس", "نوكس VIP",
      "نايت كلوب العجوزة", "nightclub Agouza", "نوكس كلوب 2026",
      "حجز نوكس الآن", "نوكس كلوب الحجز", "نوكس كلوب vip", "نوكس كلوب الرقص",
      "ديي نوكس كلوب", "أسعار نوكس كلوب", "حفلات نوكس كلوب", "موسيقى نوكس كلوب",
      "نوكس كلوب القاهرة", "احجز نوكس كلوب", "نوكس كلوب العجوزة",
      "NOX Club Cairo", "NOX Nightclub Agouza", "Book NOX Club Agouza", "NOX Club VIP Tables",
      "Dancing NOX Club Cairo", "DJ NOX Club Agouza", "NOX Club Booking Online", "NOX Club Prices",
      "Live Entertainment NOX", "Music NOX Club Cairo", "نوكس كلوب كورنيش", "نوكس كلوب النيل"
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
    rating: 4.3,
    keywords: [
      "ستيج كايرو", "Stage Cairo", "حجز ستيج", "Stage booking", "ستيج النادي الأهلي",
      "ستيج القاهرة", "سهرات ستيج", "أسعار ستيج كلوب", "Stage nightclub",
      "دي جي ستيج", "عروض ليزر ستيج", "Stage lounge", "ستيج VIP",
      "مسرح ليلي ستيج", "theatrical nightclub", "ستيج كلوب 2026",
      "حجز ستيج الآن", "ستيج كلوب الحجز", "ستيج كلوب vip", "ستيج كلوب الرقص",
      "ديي ستيج كلوب", "أسعار ستيج كلوب", "حفلات ستيج كلوب", "موسيقى ستيج كلوب",
      "ستيج كلوب القاهرة", "احجز ستيج كلوب", "ستيج كلوب الأهلي",
      "Stage Cairo Club Cairo", "Stage Nightclub Ahly", "Book Stage Club Ahly", "Stage Club VIP Tables",
      "Dancing Stage Club Cairo", "DJ Stage Club Ahly", "Stage Club Booking Online", "Stage Club Prices",
      "Live Entertainment Stage", "Music Stage Club Cairo", "ستيج كلوب كورنيش", "ستيج كلوب النيل"
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
      "دي جي كاش", "موسيقى إلكترونية كاش", "نيون كاش", "كاش VIP",
      "نايت كلوب المهندسين", "nightclub Engineers", "كاش كلوب 2026",
      "حجز كاش الآن", "كاش كلوب الحجز", "كاش كلوب vip", "كاش كلوب الرقص",
      "ديي كاش كلوب", "أسعار كاش كلوب", "حفلات كاش كلوب", "موسيقى كاش كلوب",
      "كاش كلوب القاهرة", "احجز كاش كلوب", "كاش كلوب المهندسين",
      "Cash Cairo Club Cairo", "Cash Nightclub Engineers", "Book Cash Club Engineers", "Cash Club VIP Tables",
      "Dancing Cash Club Cairo", "DJ Cash Club Engineers", "Cash Club Booking Online", "Cash Club Prices",
      "Live Entertainment Cash", "Music Cash Club Cairo", "كاش كلوب كورنيش", "كاش كلوب النيل"
    ],
    description: "مكان عصري بإضاءة نيون وموسيقى  VIP مميز.",
    price: 2500,
    originalPrice: 3900,
    features: ["دي جي خليجي", "مشروبات مختارة", "طاولة مشتركة", "باقات احتفالية"],
    image: "/images/unnamed.jpg",
    video: "/videos/Cash Cairo.mp4",
    rating: 4.2,
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
    features: ["دي جي لايف", "مشاريب  خاص", "جدران LED", "خدمة سريعة"],
    couplesOnly: true,
    image: "/images/Omni Club Cairo 1.jpg",
    video: "/videos/Omni Club Cairo.mp4",
    rating: 4.1,
    keywords: [
      "أومني كلوب", "Omni Club", "حجز أومني", "Omni booking", "أومني الجزيرة",
      "أومني القاهرة", "سهرات أومني", "أسعار أومني كلوب", "Omni nightclub",
      "دي جي أومني", "موسيقى حية أومني", "LED جدران أومني", "أومني VIP",
      "نادي الجزيرة أومني", "nightclub Island Club", "أومني كلوب 2026",
      "حجز أومني الآن", "أومني كلوب الحجز", "أومني كلوب vip", "أومني كلوب الرقص",
      "ديي أومني كلوب", "أسعار أومني كلوب", "حفلات أومني كلوب", "موسيقى أومني كلوب",
      "أومني كلوب القاهرة", "احجز أومني كلوب", "أومني كلوب الجزيرة",
      "Omni Club Cairo", "Omni Nightclub Gezira", "Book Omni Club Gezira", "Omni Club VIP Tables",
      "Dancing Omni Club Cairo", "DJ Omni Club Gezira", "Omni Club Booking Online", "Omni Club Prices",
      "Live Entertainment Omni", "Music Omni Club Cairo", "أومني كلوب كورنيش", "أومني كلوب النيل"
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
      "دي جي إيكو", "فرقة موسيقية إيكو", "صوتيات عالمية إيكو", "إيكو VIP",
      "نايت كلوب المعادي", "nightclub Maadi", "إيكو كلوب 2026",
      "حجز إيكو الآن", "إيكو كلوب الحجز", "إيكو كلوب vip", "إيكو كلوب الرقص",
      "ديي إيكو كلوب", "أسعار إيكو كلوب", "حفلات إيكو كلوب", "موسيقى إيكو كلوب",
      "إيكو كلوب القاهرة", "احجز إيكو كلوب", "إيكو كلوب المعادي",
      "Echo Club Cairo", "Echo Nightclub Maadi", "Book Echo Club Maadi", "Echo Club VIP Tables",
      "Dancing Echo Club Cairo", "DJ Echo Club Maadi", "Echo Club Booking Online", "Echo Club Prices",
      "Live Entertainment Echo", "Music Echo Club Cairo", "إيكو كلوب كورنيش", "إيكو كلوب النيل"
    ],
    description: "صوتيات مذهلة مع أضواء ليزر وعروض مع فرق موسيقية حية.",
    price: 2400,
    originalPrice: 3000,
    features: ["فرقة حية", "دي جي عالمي", "بار مفتوح", "مواقف سيارات"],
    image: "/images/echo-club.jpg",
    video: "/videos/Echo Club.mp4",
    rating: 4.9,
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
    rating: 4.3,
    keywords: [
      "كينج كلوب", "King Club", "حجز كينج", "King booking", "كينج الجيزة",
      "كينج البحر الأعظم", "سهرات كينج", "أسعار كينج كلوب", "King nightclub",
      "دي جي كينج", "عروض حصرية كينج", "كوكتيل ملكي كينج", "كينج VIP",
      "نايت كلوب الجيزة", "nightclub Giza", "كينج كلوب 2026",
      "حجز كينج الآن", "كينج كلوب الحجز", "كينج كلوب vip", "كينج كلوب الرقص",
      "ديي كينج كلوب", "أسعار كينج كلوب", "حفلات كينج كلوب", "موسيقى كينج كلوب",
      "كينج كلوب الجيزة", "احجز كينج كلوب", "كينج كلوب البحر الأعظم",
      "King Club Giza", "King Nightclub Cairo", "Book King Club Giza", "King Club VIP Tables",
      "Dancing King Club Giza", "DJ King Club Cairo", "King Club Booking Online", "King Club Prices",
      "Live Entertainment King", "Music King Club Giza", "كينج كلوب كورنيش", "كينج كلوب النيل"
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
    rating: 5.0,
    keywords: [
      "كوزمو كلوب", "Cosmo Club", "حجز كوزمو", "Cosmo booking", "كوزمو الزمالك",
      "كوزمو القاهرة", "سهرات كوزمو", "أسعار كوزمو كلوب", "Cosmo nightclub",
      "دي جي كوزمو", "موسيقى عالمية كوزمو", "لاونج فخم كوزمو", "كوزمو VIP",
      "نايت كلوب الزمالك", "nightclub Zamalek", "كوزمو كلوب 2026",
      "حجز كوزمو الآن", "كوزمو كلوب الحجز", "كوزمو كلوب vip", "كوزمو كلوب الرقص",
      "ديي كوزمو كلوب", "أسعار كوزمو كلوب", "حفلات كوزمو كلوب", "موسيقى كوزمو كلوب",
      "كوزمو كلوب القاهرة", "احجز كوزمو كلوب", "كوزمو كلوب الزمالك",
      "Cosmo Club Cairo", "Cosmo Nightclub Zamalek", "Book Cosmo Club Zamalek", "Cosmo Club VIP Tables",
      "Dancing Cosmo Club Cairo", "DJ Cosmo Club Zamalek", "Cosmo Club Booking Online", "Cosmo Club Prices",
      "Live Entertainment Cosmo", "Music Cosmo Club Cairo", "كوزمو كلوب كورنيش", "كوزمو كلوب النيل"
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
    rating: 5.0,
    keywords: [
      "أوفيد كلوب", "OVID Club", "حجز أوفيد", "OVID booking", "أوفيد أهل مصر",
      "أوفيد النيل", "سهرات أوفيد", "أسعار أوفيد كلوب", "OVID nightclub",
      "دي جي أوفيد", "فنانين مشهورين أوفيد", "رقص شبابي أوفيد", "أوفيد VIP",
      "نايت كلوب النيل", "nightclub Nile", "أوفيد كلوب 2026",
      "حجز أوفيد الآن", "أوفيد كلوب الحجز", "أوفيد كلوب vip", "أوفيد كلوب الرقص",
      "ديي أوفيد كلوب", "أسعار أوفيد كلوب", "حفلات أوفيد كلوب", "موسيقى أوفيد كلوب",
      "أوفيد كلوب القاهرة", "احجز أوفيد كلوب", "أوفيد كلوب أهل مصر",
      "OVID Club Cairo", "OVID Nightclub Nile", "Book OVID Club Nile", "OVID Club VIP Tables",
      "Dancing OVID Club Cairo", "DJ OVID Club Nile", "OVID Club Booking Online", "OVID Club Prices",
      "Live Entertainment OVID", "Music OVID Club Cairo", "أوفيد كلوب كورنيش", "أوفيد كلوب النيل"
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
    rating: 4.8,
    keywords: [
      "شوتس كلوب", "Shots Club", "حجز شوتس", "Shots booking", "شوتس المعادي",
      "شوتس القاهرة", "سهرات شوتس", "أسعار شوتس كلوب", "Shots nightclub",
      "دي جي شوتس", "جولات shots شوتس", "عروض راقصة شوتس", "موسيقى إلكترونية شوتس",
      "شوتس VIP", "كوكتيل شوتس", "حفلات شوتس الليلية", "Shots café",
      "نايت كلوب المعادي", "سهرة المعادي", "nightclub Maadi", "شوتس كلوب 2026",
      "حجز شوتس الآن", "شوتس كلوب الحجز", "شوتس كلوب vip", "شوتس كلوب الرقص",
      "ديي شوتس كلوب", "أسعار شوتس كلوب", "حفلات شوتس كلوب", "موسيقى شوتس كلوب",
      "شوتس كلوب القاهرة", "احجز شوتس كلوب", "شوتس كلوب المعادي",
      "Shots Club Cairo", "Shots Nightclub Maadi", "Book Shots Club Maadi", "Shots Club VIP Tables",
      "Dancing Shots Club Cairo", "DJ Shots Club Maadi", "Shots Club Booking Online", "Shots Club Prices",
      "Live Entertainment Shots", "Music Shots Club Cairo", "شوتس كلوب كورنيش", "شوتس كلوب النيل"
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
    rating: 4.4,
    keywords: [
      "روفي كلوب", "ROVI Club", "حجز روفي", "ROVI booking", "روفي المعادي",
      "روفي القاهرة", "سهرات روفي", "أسعار روفي كلوب", "ROVI nightclub",
      "دي جي روفي", "موسيقى راقصة روفي", "ديسكو حديث روفي", "روفي VIP",
      "نايت كلوب المعادي", "nightclub Maadi Corniche", "روفي كلوب 2026",
      "حجز روفي الآن", "روفي كلوب الحجز", "روفي كلوب vip", "روفي كلوب الرقص",
      "ديي روفي كلوب", "أسعار روفي كلوب", "حفلات روفي كلوب", "موسيقى روفي كلوب",
      "روفي كلوب القاهرة", "احجز روفي كلوب", "روفي كلوب المعادي",
      "ROVI Club Cairo", "ROVI Nightclub Maadi", "Book ROVI Club Maadi", "ROVI Club VIP Tables",
      "Dancing ROVI Club Cairo", "DJ ROVI Club Maadi", "ROVI Club Booking Online", "ROVI Club Prices",
      "Live Entertainment ROVI", "Music ROVI Club Cairo", "روفي كلوب كورنيش", "روفي كلوب النيل"
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
      "راي القاهرة", "سهرات راي", "أسعار راي كلوب", "Rai nightclub",
      "موسيقى راي راي", "مركب نيلية راي", "أجواء رومانسية راي", "راي VIP",
      "حفلات على المركب راي", "Nile boat party", "راي كلوب 2026",
      "حجز راي الآن", "راي كلوب الحجز", "راي كلوب vip", "راي كلوب الرقص",
      "ديي راي كلوب", "أسعار راي كلوب", "حفلات راي كلوب", "موسيقى راي كلوب",
      "راي كلوب القاهرة", "احجز راي كلوب", "راي كلوب النيل",
      "Rai Club Cairo", "Rai Nightclub Nile", "Book Rai Club Nile", "Rai Club VIP Tables",
      "Dancing Rai Club Cairo", "DJ Rai Club Nile", "Rai Club Booking Online", "Rai Club Prices",
      "Live Entertainment Rai", "Music Rai Club Cairo", "راي كلوب كورنيش", "راي كلوب النيل"
    ],
    description: "حفلات على المركب مع إطلالة نيلية وموسيقى راي وحفلات حية.",
    price: 2200,
    originalPrice: 2800,
    features: ["موسيقى راي", "منظر النيل", "أضواء ليلية", "أجواء رومانسية"],
    image: "/images/Rai Club Nile Dragon Boat.jpg",
    video: "/videos/Savetik_1764254796.mp4",
    rating: 4.6,
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
    rating: 4.3,
    keywords: [
      "فولت لاونج", "Volt Lounge", "حجز فولت", "Volt booking", "فولت الدقي",
      "فولت العجوزة", "سهرات فولت", "أسعار فولت لاونج", "Volt nightclub",
      "دي جي فولت", "موسيقى فولت", "فولت VIP", "نايت كلوب الجيزة",
      "nightclub Giza", "فولت لاونج 2026", "حجز فولت الآن",
      "فولت لاونج الحجز", "فولت لاونج vip", "فولت لاونج الرقص", "ديي فولت لاونج",
      "أسعار فولت لاونج", "حفلات فولت لاونج", "موسيقى فولت لاونج", "فولت لاونج الجيزة",
      "احجز فولت لاونج", "فولت لاونج الدقي", "Volt Lounge Giza", "Volt Nightclub Cairo",
      "Book Volt Lounge Doqqi", "Volt Lounge VIP Tables", "Dancing Volt Lounge Giza",
      "DJ Volt Lounge Cairo", "Volt Lounge Booking Online", "Volt Lounge Prices",
      "Live Entertainment Volt", "Music Volt Lounge Giza", "فولت لاونج كورنيش", "فولت لاونج النيل"
    ],
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
    rating: 5.0,
    keywords: [
      "سانسي كلوب", "Sansee Club", "حجز سانسي", "Sansee booking", "سانسي المهندسين",
      "سانسي الجيزة", "سهرات سانسي", "أسعار سانسي كلوب", "Sansee nightclub",
      "دي جي سانسي", "موسيقى عربية وغربية سانسي", "عروض راقصات سانسي", "سانسي VIP",
      "نايت كلوب المهندسين", "nightclub Engineers", "سانسي كلوب 2026",
      "حجز سانسي الآن", "سانسي كلوب الحجز", "سانسي كلوب vip", "سانسي كلوب الرقص",
      "ديي سانسي كلوب", "أسعار سانسي كلوب", "حفلات سانسي كلوب", "موسيقى سانسي كلوب",
      "سانسي كلوب الجيزة", "احجز سانسي كلوب", "سانسي كلوب المهندسين",
      "Sansee Club Giza", "Sansee Nightclub Engineers", "Book Sansee Club Engineers", "Sansee Club VIP Tables",
      "Dancing Sansee Club Giza", "DJ Sansee Club Engineers", "Sansee Club Booking Online", "Sansee Club Prices",
      "Live Entertainment Sansee", "Music Sansee Club Giza", "سانسي كلوب كورنيش", "سانسي كلوب النيل"
    ],
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
    rating: 4.2,
    keywords: [
      "ديسكو نوكس", "Disco NoX Club", "حجز نوكس", "NOX booking", "نوكس العجوزة",
      "نوكس الجيزة", "سهرات نوكس", "أسعار نوكس كلوب", "Disco NoX nightclub",
      "دي جي نوكس", "عروض رقص نوكس", "نور ديجيتال نوكس", "نوكس VIP",
      "نايت كلوب العجوزة", "nightclub Agouza", "ديسكو نوكس كلوب 2026",
      "حجز نوكس الآن", "نوكس كلوب الحجز", "نوكس كلوب vip", "نوكس كلوب الرقص",
      "ديي نوكس كلوب", "أسعار نوكس كلوب", "حفلات نوكس كلوب", "موسيقى نوكس كلوب",
      "نوكس كلوب الجيزة", "احجز نوكس كلوب", "نوكس كلوب العجوزة",
      "Disco NoX Club Giza", "Disco NoX Nightclub Cairo", "Book Disco NoX Club Agouza", "Disco NoX Club VIP Tables",
      "Dancing Disco NoX Club Giza", "DJ Disco NoX Club Cairo", "Disco NoX Club Booking Online", "Disco NoX Club Prices",
      "Live Entertainment Disco NoX", "Music Disco NoX Club Giza", "نوكس كلوب كورنيش", "نوكس كلوب النيل"
    ],
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
    keywords: [
      "صهله كلوب", "Sahalal Club", "حجز صهله", "Sahalal booking", "صهله الهرم",
      "صهله الجيزة", "سهرات صهله", "أسعار صهله كلوب", "Sahalal nightclub",
      "دي جي صهله", "موسيقى عالمية صهله", "ساحة رقص واسعة صهله", "صهله VIP",
      "نايت كلوب الجيزة", "nightclub Giza", "صهله كلوب 2026",
      "حجز صهله الآن", "صهله كلوب الحجز", "صهله كلوب vip", "صهله كلوب الرقص",
      "ديي صهله كلوب", "أسعار صهله كلوب", "حفلات صهله كلوب", "موسيقى صهله كلوب",
      "صهله كلوب الجيزة", "احجز صهله كلوب", "صهله كلوب الهرم",
      "Sahalal Club Giza", "Sahalal Nightclub Cairo", "Book Sahalal Club Giza", "Sahalal Club VIP Tables",
      "Dancing Sahalal Club Giza", "DJ Sahalal Club Cairo", "Sahalal Club Booking Online", "Sahalal Club Prices",
      "Live Entertainment Sahalal", "Music Sahalal Club Giza", "صهله كلوب كورنيش", "صهله كلوب النيل"
    ],
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
    rating: 4.0,
    keywords: [
      "كاليجيه كلوب", "Kalije Night Club", "حجز كاليجيه", "Kalije booking", "كاليجيه الدقي",
      "كاليجيه الجيزة", "سهرات كاليجيه", "أسعار كاليجيه كلوب", "Kalije nightclub",
      "دي جي كاليجيه", "موسيقى وايت كاليجيه", "برامج خاصة كاليجيه", "كاليجيه VIP",
      "نايت كلوب الدقي", "nightclub Doqqi", "كاليجيه كلوب 2026",
      "حجز كاليجيه الآن", "كاليجيه كلوب الحجز", "كاليجيه كلوب vip", "كاليجيه كلوب الرقص",
      "ديي كاليجيه كلوب", "أسعار كاليجيه كلوب", "حفلات كاليجيه كلوب", "موسيقى كاليجيه كلوب",
      "كاليجيه كلوب الجيزة", "احجز كاليجيه كلوب", "كاليجيه كلوب الدقي",
      "Kalije Club Giza", "Kalije Nightclub Cairo", "Book Kalije Club Doqqi", "Kalije Club VIP Tables",
      "Dancing Kalije Club Giza", "DJ Kalije Club Cairo", "Kalije Club Booking Online", "Kalije Club Prices",
      "Live Entertainment Kalije", "Music Kalije Club Giza", "كاليجيه كلوب كورنيش", "كاليجيه كلوب النيل"
    ],
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
