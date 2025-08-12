'use client';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

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
            distance: 150,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce"
            }
          },
          number: { value: 30 },
          opacity: { value: 0.2 },
          shape: { type: "circle" },
          size: { value: 3 },
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
