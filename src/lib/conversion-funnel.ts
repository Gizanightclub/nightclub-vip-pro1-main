// SEO Conversion Funnel for Night Club Egypt
// Complete journey from awareness to booking

export const CONVERSION_FUNNEL = {
  // Stage 1: Awareness (Top of Funnel)
  awareness: {
    pages: ['/', '/blog/ultimate-guide-egypt-nightlife'],
    goals: ['Brand awareness', 'Traffic generation'],
    content: ['Informational articles', 'Location guides'],
    cta: 'Learn More',
    metrics: ['Page views', 'Time on page', 'Social shares']
  },

  // Stage 2: Interest (Middle of Funnel)
  interest: {
    pages: ['/prices/cairo', '/locations/cairo', '/reviews/cairo'],
    goals: ['Lead generation', 'Price comparison'],
    content: ['Price guides', 'Location comparisons', 'Reviews'],
    cta: 'Compare Prices',
    metrics: ['Lead magnets downloads', 'Email signups']
  },

  // Stage 3: Consideration (Middle to Bottom of Funnel)
  consideration: {
    pages: ['/guides/booking', '/night-club-near-me'],
    goals: ['Booking intent', 'Location selection'],
    content: ['Booking guides', 'Near me search', 'Availability check'],
    cta: 'Check Availability',
    metrics: ['Booking inquiries', 'Phone calls', 'WhatsApp messages']
  },

  // Stage 4: Decision (Bottom of Funnel)
  decision: {
    pages: ['/pricing-booking', '/contact'],
    goals: ['Final booking', 'Payment processing'],
    content: ['Booking forms', 'Payment options', 'Confirmation'],
    cta: 'Book Now',
    metrics: ['Bookings completed', 'Revenue generated']
  },

  // Stage 5: Retention (Post-Purchase)
  retention: {
    pages: ['/reviews/cairo', '/gallery'],
    goals: ['Repeat visits', 'Referrals', 'Reviews'],
    content: ['Review submission', 'Photo sharing', 'Referral program'],
    cta: 'Leave a Review',
    metrics: ['Repeat bookings', 'Referral rate', 'NPS score']
  }
}

// Funnel optimization strategies
export const FUNNEL_OPTIMIZATION = {
  awareness: {
    seo: ['Long-tail keywords', 'Informational content', 'Social media'],
    content: ['Blog posts', 'Guides', 'Location pages'],
    promotion: ['Google Ads', 'Social media ads', 'Influencer partnerships']
  },

  interest: {
    seo: ['Price-related keywords', 'Comparison content'],
    content: ['Price guides', 'Feature comparisons', 'FAQs'],
    optimization: ['Lead magnets', 'Email capture', 'Retargeting']
  },

  consideration: {
    seo: ['Intent keywords', 'Local SEO'],
    content: ['Booking guides', 'Testimonials', 'Trust signals'],
    conversion: ['Clear CTAs', 'Social proof', 'Urgency elements']
  },

  decision: {
    seo: ['Transactional keywords', 'Trust signals'],
    content: ['Booking forms', 'Payment security', 'Confirmation'],
    optimization: ['Simplified forms', 'Multiple payment options', 'Live chat']
  },

  retention: {
    seo: ['Review keywords', 'Community building'],
    content: ['Review platforms', 'Loyalty programs', 'User-generated content'],
    engagement: ['Email follow-ups', 'Special offers', 'Community events']
  }
}

// Conversion tracking setup
export const CONVERSION_TRACKING = {
  googleAnalytics: {
    awareness: ['page_view', 'scroll_depth'],
    interest: ['generate_lead', 'email_signup'],
    consideration: ['begin_checkout', 'contact_form_submit'],
    decision: ['purchase', 'booking_complete'],
    retention: ['review_submit', 'referral_click']
  },

  facebookPixel: {
    events: ['ViewContent', 'Lead', 'InitiateCheckout', 'Purchase'],
    customEvents: ['BookingInquiry', 'PriceCheck', 'LocationSearch']
  },

  customTracking: {
    phoneCalls: 'Call tracking numbers',
    whatsapp: 'WhatsApp click tracking',
    bookings: 'Booking confirmation tracking'
  }
}