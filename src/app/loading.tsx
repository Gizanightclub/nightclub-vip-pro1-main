export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nightclub-dark via-gray-800 to-nightclub-purple/10 flex items-center justify-center">
      <div className="text-center">
        {/* شعار النايت كلوب */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-nightclub-gold to-amber-400 flex items-center justify-center animate-pulse">
            <span className="text-3xl font-bold text-black">🎉</span>
          </div>
        </div>

        {/* اسم النايت كلوب */}
        <h1 className="text-4xl font-bold text-nightclub-gold animate-neon mb-4">
          Night Club Egypt
        </h1>

        {/* مؤشر التحميل */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-nightclub-gold rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-nightclub-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-nightclub-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* نص التحميل */}
        <p className="text-gray-300 text-lg">
          جاري تحضير التجربة المثالية...
        </p>

        {/* شريط التقدم */}
        <div className="w-64 mx-auto mt-6 bg-gray-700 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-nightclub-gold to-amber-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
