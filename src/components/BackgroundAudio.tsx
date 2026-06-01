"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useVideoContext } from "@/context/VideoContext";

type BackgroundAudioProps = {
  src: string | string[];
  label?: string;
  autoPlay?: boolean;
  loop?: boolean;
  volume?: number;
};

export default function BackgroundAudio({
  src,
  autoPlay = true,
  loop = true,
  volume = 0.01,
}: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { isVideoPlaying } = useVideoContext();
  const selectedSrc = useMemo(
    () => (Array.isArray(src) ? src[Math.floor(Math.random() * src.length)] : src),
    [src]
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // عندما يشتغل الفيديو، نخفّت صوت الخلفية أو نطفيه
    if (isVideoPlaying) {
      audio.volume = 0;
    } else {
      audio.volume = volume;
    }
  }, [isVideoPlaying, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;

    const attemptPlay = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser blocked autoplay; user interaction will be required.
        });
      }
    };

    const timeout = setTimeout(() => {
      if (autoPlay) {
        attemptPlay();
      }
    }, 1000);

    const onUserInteraction = () => {
      attemptPlay();
      document.removeEventListener("click", onUserInteraction);
      document.removeEventListener("touchstart", onUserInteraction);
    };

    document.addEventListener("click", onUserInteraction, { once: true });
    document.addEventListener("touchstart", onUserInteraction, { once: true });

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", onUserInteraction);
      document.removeEventListener("touchstart", onUserInteraction);
    };
  }, [autoPlay, volume]);

  return (
    <audio
      ref={audioRef}
      src={selectedSrc}
      loop={loop}
      preload="auto"
      autoPlay={autoPlay}
      playsInline
    />
  );
}
