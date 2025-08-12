"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { supabase, Program } from "@/lib/supabase";

const Programs = () => {
  const [currentPartyImage, setCurrentPartyImage] = useState(0);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch programs from Supabase
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const { data, error } = await supabase
          .from('programs')
          .select('*')
          .order('is_featured', { ascending: false })
          .order('created_at', { ascending: false });

        if (error) throw error;

        setPrograms(data || []);

        // Fallback data if no programs exist
        if (!data || data.length === 0) {
          setPrograms([{
            id: '1',
            title: "حفلة اليوم",
            description: "انضم إلينا في ليلة لا تُنسى مع أفضل الموسيقى والأجواء",
            image_url: "/images/nightclubegypt.com (6).jpg",
            is_featured: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }]);
        }
      } catch (error) {
        console.error('Error fetching programs:', error);
        // Fallback data on error
        setPrograms([{
          id: '1',
          title: "حفلة اليوم",
          description: "انضم إلينا في ليلة لا تُنسى مع أفضل الموسيقى والأجواء",
          image_url: "/images/nightclubegypt.com (6).jpg",
          is_featured: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }]);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('programs_changes')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'programs' },
        () => {
          fetchPrograms();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Auto-slide للحفلات القادمة
  useEffect(() => {
    if (programs.length === 0) return;

    const interval = setInterval(() => {
      setCurrentPartyImage((prev) => (prev + 1) % programs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [programs.length]);

  const nextPartyImage = () => {
    setCurrentPartyImage((prev) => (prev + 1) % programs.length);
  };

  const prevPartyImage = () => {
    setCurrentPartyImage((prev) => (prev - 1 + programs.length) % programs.length);
  };

  if (loading) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nightclub-dark/30 via-black to-nightclub-dark/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="h-8 w-48 bg-gray-700 rounded-full mx-auto mb-6 animate-pulse"></div>
            <div className="h-12 w-96 bg-gray-700 rounded mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 w-2/3 bg-gray-700 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="h-96 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-nightclub-dark/30 via-black to-nightclub-dark/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="glass-dark px-6 py-2 text-lg border-nightclub-purple/50 mb-6 animate-glow">
            <Calendar className="w-5 h-5 ml-2" />
            الحفلات القادمة
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            حفلات <span className="text-nightclub-gold">قادمة مميزة</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            استعد لأجمل الليالي مع حفلاتنا القادمة المليئة بالإثارة والترفيه
          </p>
        </motion.div>

        {/* صور الحفلات القادمة مع السلايدر التلقائي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="glass-dark border-nightclub-gold/50 card-3d animate-glow overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-[70vh]">
                {/* Main Party Image */}
                <motion.div
                  key={currentPartyImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={programs[currentPartyImage]?.image_url || "/images/nightclubegypt.com (6).jpg"}
                    alt={programs[currentPartyImage]?.title || "حفلة اليوم"}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-8 right-8 text-right">
                    <motion.h3
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl font-bold mb-2 text-nightclub-gold animate-neon"
                    >
                      {programs[currentPartyImage]?.title || "حفلة اليوم"}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-gray-300"
                    >
                      {programs[currentPartyImage]?.description || "انضم إلينا في ليلة لا تُنسى"}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Navigation Buttons - Only show if multiple programs */}
                {programs.length > 1 && (
                  <>
                    <Button
                      onClick={prevPartyImage}
                      variant="ghost"
                      size="icon"
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass-dark border border-white/20 hover:border-nightclub-purple"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>

                    <Button
                      onClick={nextPartyImage}
                      variant="ghost"
                      size="icon"
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full glass-dark border border-white/20 hover:border-nightclub-purple"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </Button>
                  </>
                )}
              </div>

              {/* Thumbnails - Only show if multiple programs */}
              {programs.length > 1 && (
                <div className="p-6">
                  <div className="flex justify-center gap-3 overflow-x-auto">
                    {programs.map((program, index) => (
                      <motion.div
                        key={program.id}
                        whileHover={{ scale: 1.05 }}
                        className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 flex-shrink-0 ${
                          currentPartyImage === index
                            ? "ring-3 ring-nightclub-gold"
                            : "ring-1 ring-white/20 hover:ring-nightclub-purple"
                        }`}
                        onClick={() => setCurrentPartyImage(index)}
                      >
                        <Image
                          src={program.image_url || "/images/nightclubegypt.com (6).jpg"}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 transition-all duration-300 ${
                          currentPartyImage === index ? "bg-transparent" : "bg-black/50"
                        }`}></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Card className="glass-dark border-nightclub-purple/50 max-w-2xl mx-auto card-3d">
            <CardContent className="p-8">
              <Star className="w-12 h-12 text-nightclub-gold mx-auto mb-4 animate-float" />
              <h3 className="text-3xl font-bold text-nightclub-gold mb-4">
                احجز مكانك الآن
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                لا تفوت الفرصة وكن جزءاً من أجمل الليالي في القاهرة
              </p>
              <Badge className="bg-gradient-gold text-black px-8 py-3 text-lg font-bold animate-pulse">
                اتصل الآن: 01286110562
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
