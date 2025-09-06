"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

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

const defaultVideos: VideoData[] = [
  {
    id: "3",
    src: "/videos/sasa2.mp4",
    poster: "images/bestnightclb.jpg",
    title: "أفضل السهرات في نايت كلوب مصر",
    description: "استمتع بأجمل الأوقات مع عصام صاصا في أفضل نايت كلوب بمصر. سهرات مميزة وأجواء فاخرة مع أشهر النجوم والراقصات.",
    duration: "25",
  },
];

const VideoCarousel = ({ videos = defaultVideos }: { videos?: VideoData[] }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set(videos.map(v => v.id)));
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  const setVideoRef = (id: string, element: HTMLVideoElement | null) => {
    if (element) {
      videoRefs.current.set(id, element);
    } else {
      videoRefs.current.delete(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoEl = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
            setActiveVideo(videoEl.dataset.id || null);
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => observer.observe(video));

    return () => {
      videoRefs.current.forEach((video) => observer.unobserve(video));
    };
  }, []);

  const togglePlayPause = (videoId: string) => {
    const video = videoRefs.current.get(videoId);
    if (!video) return;

    if (video.paused) {
      video.play();
      setActiveVideo(videoId);
    } else {
      video.pause();
      setActiveVideo(null);
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

  return (
    <section className="video-carousel py-16 bg-gradient-to-b from-black via-purple-900/10 to-black">
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

        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          className="video-swiper"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id} className="relative">
              <div className="relative w-full h-[40vh] bg-black rounded-2xl overflow-hidden group cursor-pointer shadow-lg border border-gray-800 transition-all duration-500">
                <video
                  ref={(el) => setVideoRef(video.id, el)}
                  data-id={video.id}
                  className="w-full h-full object-cover"
                  poster={video.poster}
                  muted={mutedVideos.has(video.id)}
                  playsInline
                  preload="metadata"
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

                {/* زر الصوت */}
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

                {/* العنوان والوصف */}
                <div className="absolute bottom-4 right-4 text-right max-w-md">
                  <h3 className="text-xl font-bold text-yellow-300 mb-1">{video.title}</h3>
                  <p className="text-gray-100 text-sm">{video.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoCarousel;
