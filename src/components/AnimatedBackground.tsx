'use client';
import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load particles to reduce initial bundle size
const Particles = dynamic(() => import('react-tsparticles'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black -z-10" />
  )
});

export default function AnimatedBackground() {
  const [shouldLoad, setShouldLoad] = useState(false);

  // Delay loading particles until after initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2000); // Load after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const particlesInit = useCallback(async (engine: unknown) => {
    // Dynamic import tsparticles to reduce initial bundle
    const { loadFull } = await import('tsparticles');
    await loadFull(engine);
  }, []);

  if (!shouldLoad) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black -z-10" />
    );
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#050016" } },
        particles: {
          color: { value: "#aa00ff" },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 100, // Reduced from 150
            opacity: 0.1, // Reduced from 0.2
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5, // Reduced from 1
            direction: "none",
            outModes: {
              default: "bounce"
            }
          },
          number: { value: 15 }, // Reduced from 30
          opacity: { value: 0.1 }, // Reduced from 0.2
          shape: { type: "circle" },
          size: { value: 2 }, // Reduced from 3
        },
        interactivity: {
          events: {
            onHover: { enable: false, mode: [] },
            onClick: { enable: false, mode: [] },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
