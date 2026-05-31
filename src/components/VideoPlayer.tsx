"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Maximize2, Minimize2, Play, Pause } from "lucide-react";

type Props = {
  src: string;
  poster?: string;
  muted?: boolean;
  loop?: boolean;
  volume?: number;
  className?: string;
  showFullscreenButton?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
};

const VideoPlayer = forwardRef<HTMLVideoElement, Props>(
  ({ src, poster, muted = false, loop = false, volume = 0.05, className = "", showFullscreenButton = true, onPlay, onPause, onEnded }, ref) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useImperativeHandle(ref, () => videoRef.current as HTMLVideoElement);

    useEffect(() => {
      const handler = () => {
        const fs = document.fullscreenElement || (document as any).webkitFullscreenElement;
        setIsFullscreen(!!fs);
      };
      document.addEventListener("fullscreenchange", handler);
      document.addEventListener("webkitfullscreenchange", handler as any);
      return () => {
        document.removeEventListener("fullscreenchange", handler);
        document.removeEventListener("webkitfullscreenchange", handler as any);
      };
    }, []);

    useEffect(() => {
      const v = videoRef.current;
      if (!v) return;
      v.volume = volume;
    }, [volume]);

    const togglePlay = async () => {
      const v = videoRef.current;
      if (!v) return;
      try {
        if (v.paused) {
          await v.play();
          setIsPlaying(true);
          onPlay?.();
        } else {
          v.pause();
          setIsPlaying(false);
          onPause?.();
        }
      } catch (e) {
        console.error(e);
      }
    };

    const enterFullscreen = async () => {
      const v = videoRef.current;
      if (!v) return;
      try {
        if (v.requestFullscreen) await v.requestFullscreen();
        else if ((v as any).webkitEnterFullscreen) await (v as any).webkitEnterFullscreen();
        else if ((v as any).webkitRequestFullscreen) await (v as any).webkitRequestFullscreen();
      } catch (e) {
        console.error(e);
      }
    };

    const exitFullscreen = async () => {
      try {
        if (document.exitFullscreen) await document.exitFullscreen();
        else if ((document as any).webkitExitFullscreen) await (document as any).webkitExitFullscreen();
      } catch (e) {
        console.error(e);
      }
    };

    const toggleFullscreen = () => {
      if (isFullscreen) exitFullscreen();
      else enterFullscreen();
    };

    return (
      <div ref={containerRef} className={`relative ${className}`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          src={src}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          onPlay={() => {
            setIsPlaying(true);
            onPlay?.();
          }}
          onPause={() => {
            setIsPlaying(false);
            onPause?.();
          }}
          onEnded={() => {
            setIsPlaying(false);
            onEnded?.();
          }}
        />

        <button
          aria-label={isPlaying ? "إيقاف" : "تشغيل"}
          onClick={togglePlay}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 text-white rounded-full p-4 md:p-5 shadow-2xl border border-white/40 hover:scale-105 transition-transform duration-200 z-20"
        >
          {isPlaying ? <Pause className="w-6 h-6 md:w-7 md:h-7" /> : <Play className="w-6 h-6 md:w-7 md:h-7" />}
        </button>

        {showFullscreenButton && (
          <div className="absolute bottom-3 right-3 z-30">
            <button
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "خروج من ملء الشاشة" : "تكبير إلى ملء الشاشة"}
              className="bg-yellow-400/95 text-black px-3 py-2 rounded-2xl shadow-2xl border border-black/20 hover:bg-yellow-300 hover:scale-105 transition-transform duration-200 flex items-center gap-2"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              <span className="text-sm font-semibold leading-none">
                {isFullscreen ? "خروج" : "شاشة كاملة"}
              </span>
            </button>
          </div>
        )}
      </div>
    );
  }
);

export default VideoPlayer;
