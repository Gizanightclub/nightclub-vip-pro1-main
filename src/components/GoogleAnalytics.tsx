'use client';

import Script from 'next/script';

// تعريف النوع للـ gtag و dataLayer
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

interface GoogleAnalyticsProps {
  gaIds: string[];
}

const GoogleAnalytics = ({ gaIds }: GoogleAnalyticsProps) => {
  const primaryId = gaIds[0];

  if (!primaryId) return null;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        onLoad={() => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Google Analytics script loaded successfully');
          }
        }}
        onError={() => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('Failed to load Google Analytics script');
          }
        }}
      />

      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          window.gtag('js', new Date());
          ${gaIds
            .map(
              (id) =>
                `window.gtag('config', '${id}', { send_page_view: true, anonymize_ip: true, cookie_flags: 'SameSite=None;Secure', allow_google_signals: false, allow_ad_personalization_signals: false });`
            )
            .join('\n')}
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
