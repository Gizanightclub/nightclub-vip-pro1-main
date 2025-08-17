// Global Type Definitions for Night Club Egypt

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
  
  const gtag: (...args: unknown[]) => void;
}

export {};
