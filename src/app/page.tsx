import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import PlacesSection from "@/components/PlacesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VideoCarousel from "@/components/VideoCarousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import ShareButtons from "@/components/ShareButtons";
import SEOUnified from "@/components/SEOUnified";

export default function Home() {
  return (
    <>
      <SEOUnified
        pageType="home"
        customTitle="🔥 أفضل نايت كلوب في مصر 2026 | أسعار مميزة من 750 جنيه"
        customDescription="🔥 نايت كلوب من الآخر في مصر 2026! أحلى أجواء وسهرات مع أشهر النجوم: رحمة محسن، عصام صاصا، إسلام كبونجا، بوسي، روح، ليندا 🎶 خدمة VIP فخمة، رقص شرقي وديسكو، DJs عالميين وأجواء نار. الأسعار تبدأ من 750 جنيه بس 💸 وباقات VIP 1500 جنيه. في القاهرة، الجيزة، العجوزة، الشيخ زايد، الزمالك، المعادي. احجز دلوقتي وعيش سهرة ماحصلتش 📞 012"
        customKeywords={[
          // الكلمات الأساسية باللهجة المصرية
    "نايت كلوب مصر", "أفضل نايت كلوب في مصر", "نايت كلوب القاهرة", "ارخص نايت كلوب",
    "حجز نايت كلوب", "سهرات نايت كلوب", "اسعار نايت كلوب", "نايت كلوب VIP", "نايت كلوب ","nightclub",'نايت كلوب مصر 2026', 'أفضل نايت كلوب',
    'حفلات ليلية فاخرة',"ارخص نايت كلوب","نايت كلوب","نيت كلوب","نايت كلاب","حجز نايت كلوب","نايتات مصر","كلوبات مصر",
    "نايت كلوب مصر", "أفضل نايت كلوب في مصر", " سهرات نايت كلوب", "اسعار نايت كلوب", "Night Club", "نايت كلوب", "ارخص نايت كلوب",
   "سهرات خليجي", "نايت", "سهرات ديسكو", "كباريه", "ديسكو", "nightclub", "نايت كلوب القاهره", "نايت كلوب في الجيزه","نايت كلوب مصر 2026",
   "أفضل نايت كلوب في مصر", "ملهى ليلي VIP", "نادي ليلي فاخر", "Night Club Egypt", "احجز نايت كلوب", "حفلات ليلية فاخرة", "سهرات مميزة مصر",
    'سهرات VIP', 'ملهى ليلي راقي', 'ديسكو القاهرة',"كباريه","نايت كلوب مفتوح الان","كلوب مصر","نادي نايت ",
    'nightclub Egypt', 'Cairo nightlife', 'VIP nightclub', "club night club","club", "night club","egypt club","the nightclub",

    // المدن والمناطق المصرية للـ Local SEO
    "نايت كلوب الجيزة", "نايت كلوب العجوزة", "نايت كلوب الشيخ زايد", "نايت كلوب الهرم",
    "نايت كلوب التجمع الخامس", "نايت كلوب 6 أكتوبر", "نايت كلوب المعادي", "نايت كلوب الزمالك",
    "نايت كلوب المهندسين", "نايت كلوب مدينة نصر", "نايت كلوب مصر الجديدة", "نايت كلوب الدقي",

    // كلمات بحث تفصيلية باللهجة المصرية
    "افضل نايت كلوب في القاهرة", "احسن نايت كلوب في مصر", "اشهر نايت كلوب", "اجمل نايت كلوب",
    "ارقى نايت كلوب", "نايت كلوب راقي مصر", "نايت كلوب فخم", "عروض نايت كلوب", "باقات نايت كلوب",

    // أسماء الفنانين والراقصات
    "رحمة محسن", "عصام صاصا", "إسلام كبونجا", "رضا البحراوي", "كريم كرستيانو",
    "بوسي راقصة", "روح راقصة", "ليندا راقصة", "بديعة راقصة", "توفحة راقصة", "فيروز راقصة",

    // English keywords for international visitors
    "nightclub Egypt", "best nightclub Cairo", "nightclub Giza", "VIP nightclub Egypt", "Cairo nightlife",
    "nightclub Agouza", "nightclub Sheikh Zayed", "premium nightclub Egypt", "nightclub",

    // خدمات ومناسبات
    "حفلات ليلية مصر", "سهرات القاهرة", "ترفيه ليلي VIP", "حفلات خاصة", "مناسبات خاصة",
    "DJ nights Egypt", "live music Cairo", "party nights Egypt", "VIP tables Egypt", "nightclub booking Egypt",
          "حجز نايت كلوب مصر", "أسعار 750 جنيه", "حفلات رحمة محسن", "عصام صاصا نايت كلوب",
          "بوسي راقصة", "روح راقصة", "ليندا راقصة", "خدمة VIP 1500 جنيه",
          "نايت كلوب العجوزة", "نايت كلوب الشيخ زايد", "نايت كلوب الزمالك",
          
          // 🎧 أماكن الجيزة (Giza / Dokki / Agouza / Nile)
          "ديسكو كاش كايرو", "Disco Cash Cairo", "ديسكو خليجي", "Disco Khalijy", "إكس أو كلوب", "XO Club Cairo",
          "أيكون كلوب", "ICON Club Cairo", "ون أوك كلوب", "1OK Club Cairo", "كلوب 707", "Club 707",
          "دايس كلوب", "Dice Club", "ذهبية كلوب", "Dahabia Club", "إيكو كلوب", "Echo Club",
          "الريجينا كلوب", "El Regina Club", "كروزة كلوب", "Karwaza Club", "نايت كلوب الدقي", "nightclub dokki",
          
          // 🎧 أماكن الزمالك ووسط البلد (Zamalek / Downtown / Cairo)
          "أومني كلوب", "OMNI Club Cairo", "سباين كايرو", "SPINE Cairo", "نوكس", "Nox Club",
          "ماما نايت كلوب", "Mama Night Club", "مون ديك", "Moon Deck", "نايت كلوب الزمالك", "nightclub zamalek",
          "نايت كلوب وسط البلد", "downtown Cairo nightclub",
          
          // 🎧 أماكن مصر الجديدة (Heliopolis)
          "هيرا كلوب", "Hera Club Cairo", "لو روا ديسكو", "Le Roi Disco", "جيفنشي نايت كلوب", "Givenchy Night Club",
          "سبيد لاونج", "Spade Lounge", "أسرم هوم", "Asserm Home Club", "نايت كلوب مصر الجديدة", "heliopolis nightclub",
          "البارات في الكوربة", "النزهة كلوب", "barat heliopolis",
          
          // 🎧 أماكن التجمع الخامس / القاهرة الجديدة (New Cairo / Fifth Settlement)
          "كلوب آفا", "Club AVA Cairo", "ذا تاب", "The Tap Cairo", "Cairo Jazz Club 610", "Kanji Club",
          "حفلات القاهرة الجديدة", "new cairo nightclub", "events التجمع الخامس",
          
          // 🎧 أماكن إضافية في القاهرة
          "كلوب أرينا", "Club Arena Cairo", "دارك روك", "Dark Rock Club", "ليفيل كلوب", "Level Club",
          "راي كلوب", "Rai Club Cairo", "تمبو كلوب", "Tempo Club", "فينوم خليجي", "Venom Khaliji Club",
          
          // كلمات للسياح والخليجيين - موسم الصيف
          "سهرات صيف الخليج", "نايت كلوب للسعوديين", "نايت كلوب للخليجيين", "سياحة مصر الخليج",
          "أماكن للخليجيين في مصر", "سهرات صيفية مصر", "نايت كلوب الصيف", "سهرات الخليج في مصر",
          "سياح خليجيين", "tourists from gulf", "summer nightclub", "gulf visitors Egypt",
          "رحلات سياحية مصر", "ليالي صيفية مصر", "حفلات صيفية جديدة", "nightclub for tourists",
          "summer nightclub Egypt", "Gulf tourists Egypt", "Saudi visitors Egypt", "nightclub for tourists Egypt"
        ]}
      />

      <Navigation />
      <main id="main-content">
        <HeroSection />
        <About />
        <VideoCarousel />
        <Gallery />
        <PlacesSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ShareButtons />
    </>
  );
}
