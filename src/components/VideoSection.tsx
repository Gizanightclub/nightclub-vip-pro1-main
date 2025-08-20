"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "./ui/button";

interface VideoSectionProps {
  videoUrl?: string;
  posterUrl?: string;
  title?: string;
  description?: string;
}

const VideoSection = ({
  videoUrl = "/videos/nightclub-promo.mp4",
  posterUrl = "/images/nightclubegypt.com.jpg",
  title = "🔥 Night Club Egypt",
  description = "🎉!"
}: VideoSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 3000);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden glass-dark"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* ====== VIDEO PLACEHOLDER START ====== */}
      <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={posterUrl}
          muted={isMuted}
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          aria-label={`فيديو: ${title} - ${description}`}
        >
          <source src={videoUrl} type="video/mp4" />
          <p className="text-white bg-black/80 p-4 rounded">
            عذراً، متصفحك لا يدعم تشغيل الفيديو.
            <a href={videoUrl} className="text-nightclub-gold underline mr-2">
              اضغط هنا لتحميل الفيديو
            </a>
          </p>
        </video>

        {/* Play Button Overlay */}
        {!isPlaying && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/30"
          >
            <Button
              onClick={togglePlay}
              size="lg"
              className="w-20 h-20 rounded-full bg-nightclub-gold/90 hover:bg-nightclub-gold text-black hover:scale-110 transition-all duration-300"
              aria-label="تشغيل الفيديو"
            >
              <Play className="w-8 h-8 mr-1" fill="currentColor" />
            </Button>
          </motion.div>
        )}

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
        >
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="bg-white/20 h-1 rounded-full">
              <div
                className="bg-nightclub-gold h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={togglePlay}
                size="sm"
                variant="ghost"
                className="text-white hover:text-nightclub-gold"
                aria-label={isPlaying ? "إيقاف الفيديو" : "تشغيل الفيديو"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>

              <Button
                onClick={toggleMute}
                size="sm"
                variant="ghost"
                className="text-white hover:text-nightclub-gold"
                aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>

              <span className="text-sm text-white/70">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <Button
              onClick={toggleFullscreen}
              size="sm"
              variant="ghost"
              className="text-white hover:text-nightclub-gold"
              aria-label="ملء الشاشة"
            >
              <Maximize className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Title and Description Overlay */}
        <div className="absolute top-6 right-6 text-right max-w-md">
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold mb-2 text-nightclub-gold drop-shadow-lg"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 drop-shadow-lg"
          >
            {description}
          </motion.p>
        </div>
      </div>
      {/* ====== VIDEO PLACEHOLDER END ====== */}

      {/* Video Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": title,
            "description": description,
            "thumbnailUrl": [posterUrl],
            "uploadDate": new Date().toISOString(),
            "contentUrl": `https://www.nightclubegypt.com${videoUrl}`,
            "embedUrl": `https://www.nightclubegypt.com${videoUrl}`,
            "publisher": {
              "@type": "Organization",
              "name": "Night Club Egypt",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.nightclubegypt.com/images/nightclubegyptlogo.jpg"
              }
            },
            "duration": duration > 0 ? `PT${Math.floor(duration)}S` : "PT60S"
          })
        }}
      />
    </motion.div>
  );
};

export default VideoSection;
