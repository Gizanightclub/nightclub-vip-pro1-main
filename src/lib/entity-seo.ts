// Entity-Based SEO for Night Club Egypt
// Focus on entities rather than just keywords

export const NIGHTLIFE_ENTITIES = {
  // Primary Entities
  primary: {
    'Night Club Egypt': {
      type: 'Organization',
      attributes: {
        location: 'Cairo, Egypt',
        industry: 'Hospitality & Entertainment',
        services: ['VIP Nightclub', 'Event Hosting', 'Live Entertainment'],
        rating: '4.8/5',
        priceRange: '750-1500 EGP'
      },
      relatedEntities: ['Cairo Nightlife', 'VIP Tables', 'Egyptian Entertainment']
    },

    'Cairo Nightlife': {
      type: 'LocalBusiness',
      attributes: {
        location: 'Cairo, Egypt',
        category: 'Entertainment',
        popularTimes: 'Friday-Saturday nights',
        priceRange: '750-2000 EGP',
        rating: '4.6/5'
      },
      relatedEntities: ['Zamalek District', 'Agouza District', 'VIP Services']
    }
  },

  // Location Entities
  locations: {
    'Zamalek District': {
      type: 'Place',
      attributes: {
        city: 'Cairo',
        type: 'Upscale Neighborhood',
        nightlifeDensity: 'High',
        targetAudience: 'Professionals, Expats'
      },
      relatedEntities: ['Nox Club', 'OMNI Club', 'Premium Nightlife']
    },

    'Agouza District': {
      type: 'Place',
      attributes: {
        city: 'Cairo',
        type: 'Residential & Commercial',
        landmarks: ['Nile Corniche', 'Agouza Club'],
        nightlifeFocus: 'Mixed crowd'
      },
      relatedEntities: ['Echo Club', 'Night Club Egypt', 'Corniche Location']
    }
  },

  // Service Entities
  services: {
    'VIP Tables': {
      type: 'Service',
      attributes: {
        price: '1500 EGP+',
        includes: ['Reserved seating', 'Free drinks', 'Priority entry'],
        duration: 'Evening session',
        availability: 'Daily'
      },
      relatedEntities: ['Table Reservation', 'Premium Service', 'Group Packages']
    },

    'Table Reservation': {
      type: 'Service',
      attributes: {
        bookingMethod: 'Phone/WhatsApp',
        contact: '+201286110562',
        confirmation: 'Instant',
        cancellation: '24h notice'
      },
      relatedEntities: ['VIP Tables', 'Booking Guide', 'Customer Service']
    }
  },

  // Event Entities
  events: {
    'Live Entertainment': {
      type: 'Event',
      attributes: {
        performers: ['Egyptian Artists', 'DJs', 'Dancers'],
        frequency: 'Weekly',
        popularity: 'High',
        targetAudience: 'Nightlife enthusiasts'
      },
      relatedEntities: ['Rahma Hassan', 'DJ Nights', 'Oriental Dance']
    }
  }
}

// Entity relationships for internal linking
export const ENTITY_RELATIONSHIPS = {
  'Night Club Egypt': ['Cairo Nightlife', 'VIP Tables', 'Zamalek District'],
  'Cairo Nightlife': ['Zamalek District', 'Agouza District', 'VIP Tables'],
  'VIP Tables': ['Table Reservation', 'Premium Service', 'Group Packages'],
  'Zamalek District': ['Nox Club', 'OMNI Club', 'Premium Nightlife'],
  'Agouza District': ['Echo Club', 'Night Club Egypt', 'Corniche Location']
}

// Schema markup for entities
export function generateEntitySchema(entityName: string) {
  const entity = (NIGHTLIFE_ENTITIES.primary as any)[entityName] ||
                 (NIGHTLIFE_ENTITIES.locations as any)[entityName] ||
                 (NIGHTLIFE_ENTITIES.services as any)[entityName]

  if (!entity) return null

  return {
    "@context": "https://schema.org",
    "@type": entity.type,
    "name": entityName,
    ...entity.attributes
  }
}