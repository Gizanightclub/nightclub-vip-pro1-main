"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface VideoData {
  id: string;
  src: string;
  poster: string;
  title: string;
  description: string;
  duration?: string;
}

interface VideoCarouselProps {
  videos?: VideoData[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showThumbnails?: boolean;
  className?: string;
}

// 👇 VideoObject Schema للفيديوهات
const VideoSchema = ({ video, baseUrl }: { video: VideoData; baseUrl: string }) => {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `${baseUrl}/${video.poster}`,
    "contentUrl": `${baseUrl}${video.src}`,
    "uploadDate": new Date().toISOString(),
    "duration": `PT${video.duration || 25}S`,
    "embedUrl": `${baseUrl}${video.src}`,
    "publisher": {
      "@type": "Organization",
      "name": "Night Club Egypt",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo-seo-1200x1200.webp`
      }
    },
    "creator": {
      "@type": "Organization",
      "name": "Night Club Egypt"
    },
    "genre": "Entertainment",
    "inLanguage": "ar",
    "isFamilyFriendly": false,
    "keywords": "نايت كلوب مصر, سهرات, ترفيه ليلي, القاهرة, ديسكو, رقص",
    "locationCreated": {
      "@type": "Place",
      "name": "Cairo, Egypt"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  );
};

const defaultVideos: VideoData[] = [
  {
    id: "3",
    src: "/videos/sasa2.mp4",
    poster: "images/bestnightclb.jpg",
    title: "أفضل السهرات في نايت كلوب مصر",
    description: "استمتع بأجمل الأوقات مع عصام صاصا في أفضل نايت كلوب بمصر. سهرات مميزة وأجواء فاخرة مع أشهر النجوم والراقصات.",
    duration: "25"
  }
];

const VideoCarousel = ({
  videos = defaultVideos,
  autoplay = true,
  autoplayDelay = 5000,
  showThumbnails = true,
  className = ""
}: VideoCarouselProps) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set(videos.map(v => v.id)));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null);

  const baseUrl = 'https://www.nightclubegypt.com';

  const setVideoRef = (id: string, element: HTMLVideoElement | null) => {
    if (element) {
      videoRefs.current.set(id, element);
    } else {
      videoRefs.current.delete(id);
    }
  };

  useEffect(() => {
    if (swiperRef.current?.swiper?.autoplay) {
      if (isVideoPlaying) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [isVideoPlaying]);

  const togglePlayPause = (videoId: string) => {
    const video = videoRefs.current.get(videoId);
    if (!video) return;

    if (activeVideo === videoId) {
      video.pause();
      setActiveVideo(null);
      setIsVideoPlaying(false);
    } else {
      videoRefs.current.forEach((v, id) => {
        if (id !== videoId && !v.paused) {
          v.pause();
        }
      });

      video.play();
      setActiveVideo(videoId);
      setIsVideoPlaying(true);
    }
  };

  const toggleMute = (videoId: string) => {
    const video = videoRefs.current.get(videoId);
    if (!video) return;

    const newMutedVideos = new Set(mutedVideos);
    if (mutedVideos.has(videoId)) {
      video.muted = false;
      newMutedVideos.delete(videoId);
    } else {
      video.muted = true;
      newMutedVideos.add(videoId);
    }
    setMutedVideos(newMutedVideos);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.activeIndex);

    if (activeVideo) {
      const video = videoRefs.current.get(activeVideo);
      if (video) {
        video.pause();
        setActiveVideo(null);
        setIsVideoPlaying(false);
      }
    }
  };

  const handleVideoPlay = (videoId: string) => {
    setActiveVideo(videoId);
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setActiveVideo(null);
    setIsVideoPlaying(false);
  };

  const handleVideoEnded = () => {
    setActiveVideo(null);
    setIsVideoPlaying(false);
  };

  return (
    <section
      className={`video-carousel py-16 bg-gradient-to-b from-black via-purple-900/10 to-black ${className}`}
      aria-label="معرض فيديوهات النايت كلوب"
    >
      {videos.map(video => (
        <VideoSchema key={`schema-${video.id}`} video={video} baseUrl={baseUrl} />
      ))}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-yellow-400">شاهد</span> فيديوهات من داخل النايت كلوب
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            استمتع بمشاهدة أفضل اللحظات من سهراتنا المميزة والأجواء الفاخرة
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={autoplay && !isVideoPlaying ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            } : false}
            onSlideChange={handleSlideChange}
            className="video-swiper"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id} className="relative">
                <div className="relative w-full h-[40vh] bg-black rounded-2xl overflow-hidden group cursor-pointer shadow-lg border border-gray-800 transition-all duration-500">
                  <video
                    ref={(el) => setVideoRef(video.id, el)}
                    className="w-full h-full object-cover"
                    poster={video.poster}
                    muted={mutedVideos.has(video.id)}
                    playsInline
                    preload="metadata"
                    onPlay={() => handleVideoPlay(video.id)}
                    onPause={handleVideoPause}
                    onEnded={handleVideoEnded}
                    loop
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  {/* زر التشغيل */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      onClick={() => togglePlayPause(video.id)}
                      size="lg"
                      className="w-20 h-20 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-300"
                    >
                      {activeVideo === video.id ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8" />
                      )}
                    </Button>
                  </div>

                  {/* زر كتم الصوت - فوق يمين */}
                  <div className="absolute top-4 right-4">
                    <Button
                      onClick={() => toggleMute(video.id)}
                      size="sm"
                      variant="ghost"
                      className="text-white hover:text-yellow-400 bg-black/40 backdrop-blur-sm"
                    >
                      {mutedVideos.has(video.id) ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </Button>
                  </div>

                  {/* عنوان + وصف */}
                  <div className="absolute bottom-4 right-4 text-right max-w-md">
                    <h3 className="text-xl font-bold text-yellow-300 mb-1">{video.title}</h3>
                    <p className="text-gray-100 text-sm">{video.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCarousel;
