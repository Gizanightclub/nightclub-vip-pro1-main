"use client";

import { useState, useEffect } from "react";

// 👇 مكون Client-side للتفاعلات والـ particles
export default function HomeClient() {
  const [backgroundParticles, setBackgroundParticles] = useState<
    Array<{ left: string; top: string; delay: string; duration: string }>
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setMounted(true);

    // Generate background particles on client side only
    const particles = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setBackgroundParticles(particles);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* 👇 Background Elements - عناصر الخلفية التفاعلية */}
      <div className="particles-bg" aria-hidden="true">
        {/* Floating particles for ambiance */}
        {backgroundParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-nightclub-purple/20 rounded-full animate-sparkle pointer-events-none"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
    </>
  );
}
