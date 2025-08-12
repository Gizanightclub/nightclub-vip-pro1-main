"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const GallerySlider = () => {
  const instanceRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []); // إزالة instanceRef من dependency array

  return (
    <div className="relative">
      {/* محتوى المكون */}
      <div className="gallery-slider" ref={instanceRef}>
        {/* محتوى السلايدر */}
      </div>
    </div>
  );
};

export default GallerySlider;