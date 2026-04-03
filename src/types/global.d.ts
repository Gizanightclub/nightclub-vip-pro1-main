// Global Type Definitions for Night Club Egypt

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
  
  const gtag: (...args: unknown[]) => void;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/autoplay";

declare module "swiper/swiper-bundle.css";

declare module "*.css";

export {};
