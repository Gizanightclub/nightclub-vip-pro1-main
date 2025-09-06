"use client";

import { useEffect, useState } from "react";

interface Artist {
  name: string;
  type: 'singer' | 'dancer' | 'dj';
  description?: string;
}

interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  artists: Artist[];
  price: {
    regular: number;
    vip: number;
    currency: string;
  };
  image?: string;
  category: string;
  keywords: string[];
}

interface EventSchemaProps {
  events?: EventData[];
  showUpcoming?: boolean;
}

export default function EventSchema({ events, showUpcoming = false }: EventSchemaProps) {
  const [upcomingEvents, setUpcomingEvents] = useState<EventData[]>([]);

  // أحداث افتراضية للنايت كلوب
  const defaultEvents: EventData[] = [
    {
      id: "weekend-party-rahma-mohsen",
      title: "ليلة ويك إند مع رحمة محسن",
      description: "ليلة استثنائية مع المطربة الشهيرة رحمة محسن في أجواء فاخرة مع أفضل العروض الحية والموسيقى الشعبية والطرب الأصيل",
      date: "2025-09-07",
      startTime: "20:00",
      endTime: "04:00",
      artists: [
        { name: "رحمة محسن", type: "singer", description: "مطربة شعبي مشهورة" },
        { name: "بوسي", type: "dancer", description: "راقصة شرقية محترفة" },
        { name: "DJ Omar", type: "dj", description: "دي جي موسيقى عالمية" }
      ],
      price: { regular: 750, vip: 1500, currency: "EGP" },
      image: "https://www.nightclubegypt.com/images/nightclub1.jpeg",
      category: "Live Music Night",
      keywords: ["رحمة محسن", "ليلة ويك إند", "موسيقى شعبي", "بوسي راقصة"]
    },
    {
      id: "essam-sasa-night",
      title: "حفلة عصام صاصا المميزة",
      description: "سهرة لا تُنسى مع النجم عصام صاصا وأجمل الأغاني الشعبية مع عروض رقص شرقي مبهرة وأجواء احتفالية رائعة",
      date: "2025-09-08",
      startTime: "21:00",
      endTime: "04:00",
      artists: [
        { name: "عصام صاصا", type: "singer", description: "مطرب شعبي مشهور" },
        { name: "روح", type: "dancer", description: "راقصة شرقية متميزة" },
        { name: "ليندا", type: "dancer", description: "راقصة محترفة" }
      ],
      price: { regular: 800, vip: 1600, currency: "EGP" },
      image: "https://www.nightclubegypt.com/images/nightclub3.jpeg",
      category: "Special Concert",
      keywords: ["عصام صاصا", "موسيقى شعبي", "روح راقصة", "ليندا راقصة"]
    },
    {
      id: "ladies-night-special",
      title: "ليلة السيدات الخاصة",
      description: "ليلة مخصصة للسيدات مع خصومات خاصة وعروض رقص متنوعة مع أشهر الراقصات وموسيقى متنوعة شرقية وغربية",
      date: "2025-09-10",
      startTime: "20:30",
      endTime: "03:30",
      artists: [
        { name: "بديعة", type: "dancer", description: "راقصة شرقية مشهورة" },
        { name: "توفحة", type: "dancer", description: "راقصة محترفة" },
        { name: "فيروز", type: "dancer", description: "راقصة شرقية متميزة" }
      ],
      price: { regular: 600, vip: 1200, currency: "EGP" },
      image: "https://www.nightclubegypt.com/images/nightclub4.jpeg",
      category: "Ladies Night",
      keywords: ["ليلة السيدات", "خصومات السيدات", "بديعة راقصة", "توفحة راقصة"]
    },
    {
      id: "birthday-celebration-package",
      title: "باقة احتفال أعياد الميلاد",
      description: "احتفل بعيد ميلادك بطريقة مميزة مع باقة خاصة تشمل كيكة، ديكور، وعروض خاصة لجعل ليلتك لا تُنسى",
      date: "2025-09-12",
      startTime: "19:00",
      endTime: "04:00",
      artists: [
        { name: "إسلام كبونجا", type: "singer", description: "مطرب شعبي" },
        { name: "رضا البحراوي", type: "singer", description: "مطرب ومؤدي" }
      ],
      price: { regular: 900, vip: 1800, currency: "EGP" },
      image: "https://www.nightclubegypt.com/images/nightclub5.jpeg",
      category: "Birthday Celebration",
      keywords: ["عيد ميلاد", "احتفال خاص", "إسلام كبونجا", "رضا البحراوي"]
    }
  ];

  const allEvents = events || defaultEvents;

  useEffect(() => {
    // فلترة الأحداث القادمة
    const now = new Date();
    const upcoming = allEvents.filter(event => new Date(event.date) >= now);
    setUpcomingEvents(upcoming);
  }, [allEvents]);

  // إنشاء schema markup للأحداث
  const eventsSchema = {
    "@context": "https://schema.org",
    "@graph": allEvents.map(event => ({
      "@type": "Event",
      "@id": `https://www.nightclubegypt.com/events/${event.id}`,
      "name": event.title,
      "description": event.description,
      "startDate": `${event.date}T${event.startTime}:00+02:00`,
      "endDate": `${event.date}T${event.endTime}:00+02:00`,
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "NightClub",
        "name": "Night Club Egypt",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "كورنيش النيل، العجوزة",
          "addressLocality": "الجيزة",
          "addressRegion": "القاهرة الكبرى",
          "postalCode": "11511",
          "addressCountry": "EG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.0666,
          "longitude": 31.2240
        }
      },
      "image": event.image || "https://www.nightclubegypt.com/images/nightclub1.jpeg",
      "performer": event.artists.map(artist => ({
        "@type": "Person",
        "name": artist.name,
        "description": artist.description
      })),
      "offers": [
        {
          "@type": "Offer",
          "name": "تذكرة عادية",
          "price": event.price.regular,
          "priceCurrency": event.price.currency,
          "availability": "https://schema.org/InStock",
          "url": "https://www.nightclubegypt.com/#contact"
        },
        {
          "@type": "Offer",
          "name": "تذكرة VIP",
          "price": event.price.vip,
          "priceCurrency": event.price.currency,
          "availability": "https://schema.org/InStock",
          "url": "https://www.nightclubegypt.com/#contact"
        }
      ],
      "organizer": {
        "@type": "Organization",
        "name": "Night Club Egypt",
        "url": "https://www.nightclubegypt.com",
        "telephone": "+201286110562"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Adults 18+"
      },
      "isAccessibleForFree": false,
      "keywords": event.keywords.join(", "),
      "category": event.category
    }))
  };

  return (
    <>
      {/* Schema markup للأحداث */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventsSchema)
        }}
      />

      {/* عرض الأحداث القادمة إذا كان مطلوباً */}
      {showUpcoming && upcomingEvents.length > 0 && (
        <section className="upcoming-events bg-gradient-to-b from-purple-900/10 to-black py-16" aria-labelledby="events-title">
          <div className="container mx-auto px-4">
            <h2 id="events-title" className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
              🎉 الحفلات والأحداث القادمة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.slice(0, 6).map((event, index) => (
                <div
                  key={event.id}
                  className="event-card bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
                >
                  {/* صورة الحدث */}
                  {event.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {new Date(event.date).toLocaleDateString('ar-EG')}
                      </div>
                    </div>
                  )}

                  {/* محتوى الحدث */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* الفنانين */}
                    <div className="mb-4">
                      <p className="text-yellow-400 font-medium text-sm mb-2">⭐ النجوم:</p>
                      <div className="flex flex-wrap gap-2">
                        {event.artists.slice(0, 3).map((artist, i) => (
                          <span
                            key={i}
                            className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded text-xs"
                          >
                            {artist.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* الأسعار */}
                    <div className="mb-4">
                      <p className="text-yellow-400 font-medium text-sm mb-2">💰 الأسعار:</p>
                      <div className="flex gap-4">
                        <span className="text-white text-sm">
                          عادي: {event.price.regular} {event.price.currency}
                        </span>
                        <span className="text-yellow-400 text-sm font-bold">
                          VIP: {event.price.vip} {event.price.currency}
                        </span>
                      </div>
                    </div>

                    {/* زر الحجز */}
                    <a
                      href="/#contact"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-2 px-4 rounded-lg hover:scale-105 transition-all duration-300 text-center block"
                    >
                      احجز الآن
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// مكون مبسط للاستخدام السريع
export function QuickEventSchema() {
  return <EventSchema showUpcoming={false} />;
}

// Hook لاستخدام الأحداث
export function useEvents() {
  return {
    renderEvents: (props?: Partial<EventSchemaProps>) => <EventSchema {...props} />
  };
}
