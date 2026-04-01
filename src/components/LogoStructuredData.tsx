'use client';

const LogoStructuredData = () => {
  const logoData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": "Night Club Egypt Logo",
    "description": "شعار Night Club Egypt - أفضل نايت كلوب في مصر",
    "url": "https://nightclubegypt.com/images/logo-seo-1200x1200.webp",
    "width": 512,
    "height": 512,
    "caption": "Night Club Egypt Logo - شعار نايت كلوب مصر",
    "thumbnail": {
      "@type": "ImageObject",
      "url": "https://nightclubegypt.com/images/logo-seo-1200x1200.webp",
      "width": 256,
      "height": 256
    },
    "contentUrl": "https://nightclubegypt.com/images/nightclub8.jpeg",
    "encodingFormat": "image/jpeg",
    "uploadDate": "2024-01-01T00:00:00Z",
    "creator": {
      "@type": "Organization",
      "name": "Night Club Egypt"
    },
    "license": "https://nightclubegypt.com/license",
    "acquireLicensePage": "https://nightclubegypt.com/license",
    "creditText": "Night Club Egypt",
    "copyrightNotice": "© 2024 Night Club Egypt. All rights reserved.",
    "keywords": [
      "نايت كلوب مصر",
      "شعار نايت كلوب",
      "Night Club Egypt Logo",
      "ملهى ليلي مصر",
      "ديسكو القاهرة"
    ],
    "subjectOf": {
      "@type": "CreativeWork",
      "name": "Night Club Egypt Brand Identity",
      "description": "الهوية البصرية لنايت كلوب مصر"
    }
  };

  const highQualityLogoData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": "Night Club Egypt High Quality Logo",
    "description": "شعار Night Club Egypt عالي الجودة - أفضل نايت كلوب في مصر",
    "url": "https://nightclubegypt.com/images/nightclubegypt.com (11).jpg",
    "width": 1200,
    "height": 1200,
    "caption": "Night Club Egypt High Quality Logo - شعار عالي الجودة",
    "thumbnail": {
      "@type": "ImageObject",
      "url": "https://nightclubegypt.com/images/nightclubegypt.com (10).jpg",
      "width": 600,
      "height": 600
    },
    "contentUrl": "https://nightclubegypt.com/images/nightclubegypt.com (3).jpg",
    "encodingFormat": "image/png",
    "uploadDate": "2024-01-01T00:00:00Z",
    "creator": {
      "@type": "Organization",
      "name": "Night Club Egypt"
    },
    "license": "https://nightclubegypt.com/license",
    "acquireLicensePage": "https://nightclubegypt.com/license",
    "creditText": "Night Club Egypt",
    "copyrightNotice": "© 2024 Night Club Egypt. All rights reserved.",
    "keywords": [
      "نايت كلوب مصر",
      "شعار عالي الجودة",
      "High Quality Logo",
      "ملهى ليلي مصر",
      "ديسكو القاهرة",
      "حفلات ليلية"
    ],
    "subjectOf": {
      "@type": "CreativeWork",
      "name": "Night Club Egypt High Quality Brand Identity",
      "description": "الهوية البصرية عالية الجودة لنايت كلوب مصر"
    }
  };

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(logoData, null, 2) }} 
      />
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(highQualityLogoData, null, 2) }} 
      />
    </>
  );
};

export default LogoStructuredData;
