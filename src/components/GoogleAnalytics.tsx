'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// تعريف النوع للـ gtag و dataLayer
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

interface GoogleAnalyticsProps {
  gaId: string;
}

const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => {
  // تحميل محسن ومنفصل للـ Analytics
  useEffect(() => {
    if (!gaId) return;

    // تأخير تحميل Analytics حتى بعد تحميل الصفحة بالكامل
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && !window.gtag) {
        // إنشاء dataLayer فقط عند الحاجة
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(...args: unknown[]){
          window.dataLayer?.push(args);
        };
        window.gtag('js', new Date());
        window.gtag('config', gaId, {
          // تحسينات الأداء
          send_page_view: true,
          cookie_flags: 'SameSite=None;Secure',
          // تقليل البيانات المرسلة
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false
        });
      }
    }, 2000); // تأخير 2 ثانية

    return () => clearTimeout(timer);
  }, [gaId]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        onLoad={() => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Google Analytics loaded successfully');
          }
        }}
        onError={() => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('Failed to load Google Analytics');
          }
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
