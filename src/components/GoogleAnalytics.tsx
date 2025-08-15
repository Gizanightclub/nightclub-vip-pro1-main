'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// تعريف النوع للـ gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  // تحميل محسن ومنفصل للـ Analytics
  useEffect(() => {
    // تأخير تحميل Analytics حتى بعد تحميل الصفحة بالكامل
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && !window.gtag) {
        // إنشاء dataLayer فقط عند الحاجة
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){
          window.dataLayer?.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'G-H1ZWPG12HP', {
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
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-H1ZWPG12HP"
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
