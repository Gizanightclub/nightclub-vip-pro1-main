"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import BookingForm from "./BookingForm";
import { supabase, PricingPackage } from "@/lib/supabase";
import {
  Crown,
  Star,
  Sparkles,
  Wine,
  UtensilsCrossed,
  Apple,
  Users,
  Check,
  Zap,
  Gift
} from "lucide-react";

// Package info interface for BookingForm
interface PackageInfo {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  features: string[];
}

// Extended interface for display
interface DisplayPackage extends PricingPackage {
  originalPrice: number;
  discount: number;
  featuresList: Array<{
    icon: React.ComponentType<{ className?: string }>;
    text: string;
    premium: boolean;
  }>;
  buttonText: string;
  gradient: string;
  glowColor: string;
}

const Pricing = () => {
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string}>>([]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageInfo | null>(null);
  const [packages, setPackages] = useState<DisplayPackage[]>([]);
  const [loading, setLoading] = useState(true);

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      left: `${(i * 6.67) % 100}%`,
      top: `${(i * 8.33) % 100}%`,
      delay: `${(i * 0.2) % 3}s`,
    }));
    setParticles(newParticles);
  }, []);

  // Fetch packages from Supabase
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data, error } = await supabase
          .from('pricing_packages')
          .select('*')
          .eq('is_active', true)
          .order('order_index', { ascending: true });

        if (error) throw error;

        if (data && data.length > 0) {
          // Transform Supabase data to display format
          const transformedPackages: DisplayPackage[] = data.map((pkg, index) => {
            // Calculate original price (add 25% to current price as discount simulation)
            const originalPrice = Math.round(pkg.price * 1.25);
            const discount = originalPrice - pkg.price;

            // Create feature list with icons
            const featuresList = pkg.features.map((feature: string, featureIndex: number) => {
              const icons = [Wine, UtensilsCrossed, Apple, Users, Crown, Star];
              return {
                icon: icons[featureIndex % icons.length],
                text: feature,
                premium: pkg.is_popular
              };
            });

            return {
              ...pkg,
              originalPrice,
              discount,
              featuresList,
              buttonText: pkg.is_popular ? "احجز VIP الآن" : "احجز الآن",
              gradient: pkg.is_popular
                ? "bg-gradient-to-br from-amber-500/20 to-amber-600/20"
                : "bg-gradient-to-br from-purple-500/20 to-purple-700/20",
              glowColor: pkg.is_popular
                ? "shadow-amber-500/30"
                : "shadow-purple-500/20"
            };
          });

          setPackages(transformedPackages);
        } else {
          // Fallback data if no packages exist
          setPackages([
            {
              id: "fallback-1",
              name: "الصف الثاني",
              price: 1000,
              currency: "EGP",
              features: [
                "مشروبين فاخرين من اختيارك",
                "طبق مازة شرقية متنوع يفتح النفس",
                "طبق فواكه طازة ومختارة بعناية",
                "مرافقة خاصة من اختيارك"
              ],
              is_popular: false,
              is_active: true,
              order_index: 1,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              originalPrice: 1500,
              discount: 500,
              featuresList: [
                { icon: Wine, text: "مشروبين فاخرين من اختيارك", premium: false },
                { icon: UtensilsCrossed, text: "طبق مازة شرقية متنوع يفتح النفس", premium: false },
                { icon: Apple, text: "طبق فواكه طازة ومختارة بعناية", premium: false },
                { icon: Users, text: "مرافقة خاصة من اختيارك", premium: false }
              ],
              buttonText: "احجز الآن",
              gradient: "bg-gradient-to-br from-purple-500/20 to-purple-700/20",
              glowColor: "shadow-purple-500/20"
            },
            {
              id: "fallback-2",
              name: "الصف الأول VIP",
              price: 1500,
              currency: "EGP",
              features: [
                "ثلاث مشروبات فاخرة من اختيارك",
                "طبق مازة شرقية متنوع يفتح النفس",
                "طبق فواكه طازة ومختارة بعناية",
                "مرافقة خاصة + خدمة VIP مميزة"
              ],
              is_popular: true,
              is_active: true,
              order_index: 2,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              originalPrice: 2000,
              discount: 500,
              featuresList: [
                { icon: Wine, text: "ثلاث مشروبات فاخرة من اختيارك", premium: true },
                { icon: UtensilsCrossed, text: "طبق مازة شرقية متنوع يفتح النفس", premium: true },
                { icon: Apple, text: "طبق فواكه طازة ومختارة بعناية", premium: true },
                { icon: Crown, text: "مرافقة خاصة + خدمة VIP مميزة", premium: true }
              ],
              buttonText: "احجز VIP الآن",
              gradient: "bg-gradient-to-br from-amber-500/20 to-amber-600/20",
              glowColor: "shadow-amber-500/30"
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching packages:', error);
        // Use fallback data on error
        setPackages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();

    // Subscribe to real-time changes
    const subscription = supabase
      .channel('pricing_packages_changes')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'pricing_packages' },
        () => {
          fetchPackages();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleBookingClick = (pkg: DisplayPackage) => {
    const packageInfo: PackageInfo = {
      id: pkg.id,
      title: pkg.name,
      price: pkg.price,
      originalPrice: pkg.originalPrice,
      features: pkg.features
    };
    setSelectedPackage(packageInfo);
    setIsBookingOpen(true);
  };

  if (loading) {
    return (
      <section id="packages" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-purple-700/10 to-amber-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="h-8 w-48 bg-gray-700 rounded-full mx-auto mb-6 animate-pulse"></div>
            <div className="h-12 w-96 bg-gray-700 rounded mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 w-2/3 bg-gray-700 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-96 bg-gray-700 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-purple-700/10 to-amber-500/10"></div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-amber-400/40 rounded-full animate-sparkle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="glass-dark px-6 py-2 text-lg border-nightclub-purple/50 mb-6 animate-glow">
            <Gift className="w-5 h-5 ml-2" />
            عروض خاصة محدودة
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            اختر <span className="text-nightclub-gold animate-neon">باقتك المثالية</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            استمتع بتجربة فاخرة مع خصومات حصرية تصل إلى 500 جنيه
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative"
            >
              {/* Popular Badge */}
              {pkg.is_popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <Badge className="bg-gradient-gold text-black font-bold px-6 py-2 text-lg animate-pulse-purple">
                    <Crown className="w-5 h-5 ml-2" />
                    الأكثر شعبية
                  </Badge>
                </motion.div>
              )}

              <Card className={`glass-dark border-2 ${pkg.is_popular ? 'border-nightclub-gold animate-glow' : 'border-nightclub-purple/30'} ${pkg.gradient} card-3d h-full relative overflow-hidden`}>
                {/* Sparkle Effects */}
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-8 h-8 text-nightclub-gold animate-sparkle" />
                </div>

                <CardHeader className="text-center pb-4">
                  <h3 className={`text-3xl font-bold mb-4 ${pkg.is_popular ? 'text-nightclub-gold' : 'text-white'}`}>
                    {pkg.name}
                  </h3>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-4 mb-3">
                      <span className="text-5xl font-bold text-nightclub-gold">
                        {pkg.price} {pkg.currency === 'EGP' ? 'ج' : pkg.currency}
                      </span>
                      <span className="text-2xl text-gray-400 line-through">
                        {pkg.originalPrice} {pkg.currency === 'EGP' ? 'ج' : pkg.currency}
                      </span>
                    </div>
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-4 py-2 animate-bounce">
                      <Zap className="w-4 h-4 ml-2" />
                      وفر {pkg.discount} {pkg.currency === 'EGP' ? 'جنيه' : pkg.currency}!
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <h4 className={`text-xl font-bold ${pkg.is_popular ? 'text-nightclub-gold' : 'text-nightclub-purple'} mb-4 flex items-center gap-2`}>
                      {pkg.is_popular ? <Crown className="w-5 h-5" /> : <Star className="w-5 h-5" />}
                      {pkg.is_popular ? "العرض الملكي يشمل:" : "العرض يشمل:"}
                    </h4>

                    {pkg.featuresList.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + featureIndex * 0.1 }}
                        className="flex items-center gap-4 p-3 rounded-lg bg-black/20 backdrop-blur-sm"
                      >
                        <div className={`p-2 rounded-lg ${feature.premium ? 'bg-nightclub-gold/20' : 'bg-nightclub-purple/20'}`}>
                          <feature.icon className={`w-5 h-5 ${feature.premium ? 'text-nightclub-gold' : 'text-nightclub-purple'}`} />
                        </div>
                        <span className="text-gray-300 flex-1">{feature.text}</span>
                        <Check className="w-5 h-5 text-green-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    onClick={() => handleBookingClick(pkg)}
                    aria-label={`احجز الآن باقة ${pkg.name} بسعر ${pkg.price} جنيه - فتح نموذج الحجز`}
                    className={`w-full text-lg font-bold py-6 rounded-xl transition-all duration-300 ${
                      pkg.is_popular
                        ? "bg-gradient-gold text-black hover:scale-105 animate-pulse-purple"
                        : "bg-gradient-purple text-white hover:scale-105"
                    }`}
                  >
                    {pkg.buttonText}
                  </Button>

                  {/* Discount Message */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center text-nightclub-gold font-semibold mt-4 text-sm"
                  >
                    💫 احجز من الموقع واستمتع بأفضل الأسعار!
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Card className="glass-dark border-nightclub-purple/30 max-w-2xl mx-auto animate-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-nightclub-gold mb-4">
                🎉 عرض لفترة محدودة!
              </h3>
              <p className="text-gray-300 mb-6">
                احجز الآن واستمتع بأفضل الأسعار والعروض المميزة - العرض ساري حتى نفاد الكمية
              </p>
              <Button
                size="lg"
                aria-label="اتصل الآن للحجز والاستفسار في Night Club Egypt"
                className="bg-gradient-nightclub text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
              >
                اتصل الآن للحجز والاستفسار
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Booking Form Dialog */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedPackage={selectedPackage}
      />
    </section>
  );
};

export default Pricing;
