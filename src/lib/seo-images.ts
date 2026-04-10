// SEO Images Mapping for Places and Pages
// اختيار صور مناسبة لكل slug بناءً على الصور المتاحة في /public/images/

export const PLACE_SEO_IMAGES: Record<string, string> = {
  // Tango Club
  "tango-club": "/images/nightclubeg2.jpg",

  // Vieena Club
  "vieena-club": "/images/2025-04-19.webp",

  // Cash Cairo
  "cash-cairo": "/images/Cash Cairo.webp",

  // Stage Cairo Club
  "stage-cairo-club": "/images/Stage Cairo Club.jpg",

  // Shots Club
  "shots-club": "/images/SHOTS.jpg",

  // Echo Club
  "echo-club": "/images/echo-club.jpg",

  // Omni Club Cairo
  "omni-club-cairo": "/images/Omni Club Cairo 1.jpg",

  // Volt Lounge
  "volt-lounge": "/images/Volt Lounge.jpg",

  // ROVI Club
  "rovi-club": "/images/ROVI Club1.png",

  // Fox Club
  "fox-club": "/images/2026-03-29.webp",

  // Aowtar Club
  "aowtar-club": "/images/nightclub.jpg",

  // Maluonaerr Club
  "maluonaerr-club": "/images/naloner.jpg",

  // Nox Club
  "nox-club": "/images/nox club 01286110562.jpg",

  // King Club
  "king-club": "/images/nightclubeg.jpg",

  // Cosmo Lounge & Club
  "cosmo-lounge-and-club": "/images/Cosmo Lounge & Club.jpg",

  // Ovid Club
  "ovid-club": "/images/OVID Club.png",

  // Rai Club Nile Dragon Boat
  "rai-club-nile-dragon-boat": "/images/Rai Club Nile Dragon Boat.jpg",

  // Sansee Club
  "sansee-club": "/images/سانسي كلوب.png",

  // Disco NoX Club
  "disco-nox-club": "/images/nox club 01286110562.jpg",

  // Default fallback images for other places
  "default-nightclub": "/images/nightclub.jpg",
  "default-club": "/images/nightclubeg.jpg",
  "default-lounge": "/images/nightclubegypt.com (10).jpg"
};

// Function to get SEO image for a place slug
export const getPlaceSEOImage = (slug: string): string => {
  return PLACE_SEO_IMAGES[slug] || PLACE_SEO_IMAGES["default-nightclub"];
};

// Page-specific SEO images
export const PAGE_SEO_IMAGES: Record<string, string> = {
  "home": "/images/nightclubegypt.com (10).jpg",
  "about": "/images/nightclubegypt.com (11).jpg",
  "gallery": "/images/nightclubegypt.com (6).jpg",
  "programs": "/images/nightclubegypt.com (5).jpg",
  "pricing-booking": "/images/nightclubegypt.com (3).jpg",
  "contact": "/images/nightclubegypt.com (8).jpg",
  "night-club": "/images/nightclubegypt.com (10).jpg",
  "night-clubs-cairo": "/images/Omni Club Cairo 1.jpg",
  "vip": "/images/Volt Lounge.jpg",
  "parties": "/images/nightclubegypt.com15.jpg",
  "faq": "/images/nightclubegypt.com (7).jpg",
  "blog": "/images/nightclubegypt.com15.jpg"
};

// Function to get SEO image for a page
export const getPageSEOImage = (page: string): string => {
  return PAGE_SEO_IMAGES[page] || PAGE_SEO_IMAGES["home"];
};