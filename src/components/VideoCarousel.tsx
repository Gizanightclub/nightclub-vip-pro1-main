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

const defaultVideos: VideoData[] = [
  //{
   // id: "1",
   // src: "/videos/sasa.mp4",
   // poster: "images/nightclubegypt.com4.jpg",
   //title: "سهرة عصام صاصا مميزة",
   // description: "استمتع بأفضل السهرات   ",
   // duration: "30"
  //},
  //{
   // id: "2",
   // src: "/videos/rahma.mp4",
   // poster: "/images/nightclubegypt.com2.jpg",
    //title: "أجواء النايت كلوب",
    //description: "اكتشف الأجواء الفاخرة والترفيه المميز",
    //duration: "30"
  //},
  {
    id: "3",
    src: "/videos/sasa2.mp4",
    poster: "images/bestnightclb.jpg",
    title: "افضل السهرات ",
    description: "افضل بروجرام يوميا",
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // حالة تشغيل الفيديو
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const swiperRef = useRef<{ swiper: SwiperType } | null>(null);

  // مرجع للفيديو النشط
  const setVideoRef = (id: string, element: HTMLVideoElement | null) => {
    if (element) {
      videoRefs.current.set(id, element);
    } else {
      videoRefs.current.delete(id);
    }
  };

  // التحكم في autoplay حسب حالة الفيديو
  useEffect(() => {
    if (swiperRef.current?.swiper?.autoplay) {
      if (isVideoPlaying) {
        // إيقاف autoplay عند تشغيل فيديو
        swiperRef.current.swiper.autoplay.stop();
      } else {
        // استئناف autoplay عند إيقاف/انتهاء الفيديو
        swiperRef.current.swiper.autoplay.start();
      }
    }
  }, [isVideoPlaying]);

  // تشغيل/إيقاف الفيديو
  const togglePlayPause = (videoId: string) => {
    const video = videoRefs.current.get(videoId);
    if (!video) return;

    if (activeVideo === videoId) {
      video.pause();
      setActiveVideo(null);
      setIsVideoPlaying(false); // تحديث حالة التشغيل
    } else {
      // إيقاف جميع الفيديوهات الأخرى
      videoRefs.current.forEach((v, id) => {
        if (id !== videoId && !v.paused) {
          v.pause();
        }
      });

      video.play();
      setActiveVideo(videoId);
      setIsVideoPlaying(true); // تحديث حالة التشغيل
    }
  };

  // كتم/إلغاء كتم الصوت
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

  // التعامل مع تغيير الشريحة
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.activeIndex);

    // إيقاف الفيديو النشط عند تغيير الشريحة
    if (activeVideo) {
      const video = videoRefs.current.get(activeVideo);
      if (video) {
        video.pause();
        setActiveVideo(null);
        setIsVideoPlaying(false); // تحديث حالة التشغيل
      }
    }
  };

  // معالج أحداث الفيديو
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

  // التنقل بالكيبورد
  const handleKeyDown = (e: React.KeyboardEvent, videoId: string) => {
    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        togglePlayPause(videoId);
        break;
      case 'm':
      case 'M':
        e.preventDefault();
        toggleMute(videoId);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (!isVideoPlaying) { // السماح بالتنقل فقط إذا لم يكن هناك فيديو يعمل
          swiperRef.current?.swiper.slidePrev();
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (!isVideoPlaying) { // السماح بالتنقل فقط إذا لم يكن هناك فيديو يعمل
          swiperRef.current?.swiper.slideNext();
        }
        break;
    }
  };

  return (
    <section
      className={`video-carousel py-16 bg-gradient-to-b from-black via-purple-900/10 to-black ${className}`}
      aria-label="معرض فيديوهات النايت كلوب"
    >
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
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
          {/* مؤشر حالة التشغيل */}
          {isVideoPlaying && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-sm"
            >
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              جاري التشغيل - تم إيقاف التنقل التلقائي
            </motion.div>
          )}
        </motion.div>

        {/* الكاروسيل الرئيسي */}
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
            autoplay={autoplay && !isVideoPlaying ? { // تفعيل autoplay فقط إذا لم يكن هناك فيديو يعمل
              delay: autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            } : false}
            keyboard={{
              enabled: true,
              onlyInViewport: true
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom'
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 1.8,
                spaceBetween: 40
              }
            }}
            onSlideChange={handleSlideChange}
            className="video-swiper"
            role="region"
            aria-label="شريط الفيديوهات"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={video.id} className="relative">
                <div
                   className="relative w-full h-[40vh] bg-black rounded-2xl overflow-hidden group cursor-pointer shadow-lg border border-gray-800 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500"
                  onKeyDown={(e) => handleKeyDown(e, video.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`فيديو: ${video.title} - اضغط مسطرة المسافة للتشغيل`}
                >
                  {/* الفيديو */}
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
                    aria-describedby={`video-description-${video.id}`}
                  >
                    <source src={video.src} type="video/mp4" />
                    <track kind="captions" srcLang="ar" label="العربية" />
                    <p className="text-white bg-black/80 p-4">
                      متصفحك لا يدعم تشغيل الفيديو.
                      <a href={video.src} className="text-yellow-400 underline mr-2" download>
                        تحميل الفيديو
                      </a>
                    </p>
                  </video>

                  {/* طبقة التحكم */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* أزرار التحكم */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        onClick={() => togglePlayPause(video.id)}
                        size="lg"
                        className="w-16 h-16 rounded-full bg-yellow-400/90 hover:bg-yellow-00 text-black hover:scale-110 transition-all duration-300"
                        aria-label={activeVideo === video.id ? "إيقاف الفيديو" : "تشغيل الفيديو"}
                      >
                        {activeVideo === video.id ? (
                          <Pause className="w-6 h-6" fill="currentColor" />
                        ) : (
                          <Play className="w-6 h-6 mr-1" fill="currentColor" />
                        )}
                      </Button>
                    </div>

                    {/* أزرار التحكم الإضافية */}
                    <div className="absolute bottom-4 left-4">
                      <Button
                        onClick={() => toggleMute(video.id)}
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-yellow-400 bg-black/30 backdrop-blur-sm"
                        aria-label={mutedVideos.has(video.id) ? "تشغيل الصوت" : "كتم الصوت"}
                      >
                        {mutedVideos.has(video.id) ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    {/* شارة المدة */}
                    {video.duration && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black/50 text-white border-none">
                          {video.duration}
                        </Badge>
                      </div>
                    )}

                    {/* مؤشر حالة التشغيل للفيديو النشط */}
                    {activeVideo === video.id && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500/80 text-white border-none flex items-center gap-1">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          مباشر
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* معلومات الفيديو */}
                  <div className="absolute bottom-4 right-4 text-right max-w-md">
                    <h3
                      className="text-xl font-bold text-yellow-300 mb-1 drop-shadow-lg"
                      id={`video-title-${video.id}`}
                    >
                      {video.title}
                    </h3>
                    <p
                      className="text-gray-100 text-sm drop-shadow-lg"
                      id={`video-description-${video.id}`}
                    >
                      {video.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* أزرار التنقل المخصصة - معطلة أثناء تشغيل الفيديو */}
          <button
            className={`swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-black transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-00 focus:ring-offset-2 focus:ring-offset-black ${
              isVideoPlaying
                ? 'bg-gray-400/50 cursor-not-allowed opacity-50'
                : 'bg-yellow-400/90 hover:bg-yellow-400 cursor-pointer'
            }`}
            aria-label="الفيديو السابق"
            disabled={isVideoPlaying}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className={`swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-black transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black ${
              isVideoPlaying
                ? 'bg-gray-400/50 cursor-not-allowed opacity-50'
                : 'bg-yellow-400/90 hover:bg-yellow-400 cursor-pointer'
            }`}
            aria-label="الفيديو التالي"
            disabled={isVideoPlaying}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* مؤشر الشرائح المخصص */}
        <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => !isVideoPlaying && swiperRef.current?.swiper.slideTo(index)} // منع التنقل أثناء التشغيل
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black ${
                index === currentSlide
                  ? 'bg-yellow-400 scale-125'
                  : isVideoPlaying
                    ? 'bg-gray-600/50 cursor-not-allowed'
                    : 'bg-gray-600 hover:bg-gray-400 cursor-pointer'
              }`}
              aria-label={`الانتقال إلى الفيديو ${index + 1}`}
              disabled={isVideoPlaying}
            />
          ))}
        </div>

        {/* تعليمات التحكم بالكيبورد */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            استخدم الأسهم للتنقل • مسطرة المسافة للتشغيل • M لكتم الصوت
            {isVideoPlaying && (
              <span className="block mt-1 text-red-400">
                ⚠️ التنقل بالأسهم معطل أثناء تشغيل الفيديو
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .video-swiper .swiper-pagination {
          bottom: -50px !important;
        }

        .swiper-pagination-bullet-custom {
          width: 12px !important;
          height: 12px !important;
          background: rgba(229, 229, 230, 0.5) !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active-custom {
          background: rgba(22, 22, 20, 1) !important;
          transform: scale(1.25) !important;
        }

        .video-swiper .swiper-slide {
          transition: transform 0.3s ease !important;
        }

        .video-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
          transform: scale(0.95);
        }

        .video-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        /* تعطيل hover effects أثناء تشغيل الفيديو */
        .video-swiper.video-playing .swiper-button-prev-custom:hover,
        .video-swiper.video-playing .swiper-button-next-custom:hover {
          transform: translateY(-50%) !important;
          scale: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default VideoCarousel;
