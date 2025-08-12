"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, UniversalOffer } from '@/lib/supabase';
import { Plus, Edit, Trash2, Eye, EyeOff, Image as ImageIcon, Save, Calendar, Clock, Gift, Sparkles, Star, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function UniversalOfferPage() {
  const [offers, setOffers] = useState<UniversalOffer[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<UniversalOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingOffer, setEditingOffer] = useState<UniversalOffer | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image_url: '',
    button_text: '',
    is_active: true
  });

  useEffect(() => {
    fetchOffers();
  }, []);

  useEffect(() => {
    filterOffers();
  }, [offers, searchQuery, filterStatus]);

  const fetchOffers = async () => {
    try {
      const { data, error } = await supabase
        .from('universal_offers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOffers(data || []);
    } catch (error) {
      console.error('Error fetching universal offers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterOffers = () => {
    let filtered = offers;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(offer =>
        offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        offer.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus === 'active') {
      filtered = filtered.filter(offer => offer.is_active);
    } else if (filterStatus === 'inactive') {
      filtered = filtered.filter(offer => !offer.is_active);
    }

    setFilteredOffers(filtered);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingOffer) {
        // Update existing offer
        const { error } = await supabase
          .from('universal_offers')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingOffer.id);

        if (error) throw error;
      } else {
        // Create new offer - let database generate ID and timestamps
        const { error } = await supabase
          .from('universal_offers')
          .insert([formData]);

        if (error) throw error;
      }

      setShowModal(false);
      setEditingOffer(null);
      resetForm();
      fetchOffers();
    } catch (error) {
      console.error('Error saving universal offer:', error);
      alert('حدث خطأ أثناء حفظ العرض الشامل');
    }
  };

  const handleEdit = (offer: UniversalOffer) => {
    setEditingOffer(offer);
    setFormData({
      title: offer.title,
      subtitle: offer.subtitle || '',
      description: offer.description,
      image_url: offer.image_url || '',
      button_text: offer.button_text || '',
      is_active: offer.is_active
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا العرض الشامل؟')) return;

    try {
      const { error } = await supabase
        .from('universal_offers')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchOffers();
    } catch (error) {
      console.error('Error deleting universal offer:', error);
      alert('حدث خطأ أثناء حذف العرض الشامل');
    }
  };

  const toggleActive = async (offer: UniversalOffer) => {
    try {
      const { error } = await supabase
        .from('universal_offers')
        .update({
          is_active: !offer.is_active,
          updated_at: new Date().toISOString()
        })
        .eq('id', offer.id);

      if (error) throw error;
      fetchOffers();
    } catch (error) {
      console.error('Error updating active status:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image_url: '',
      button_text: '',
      is_active: true
    });
    setEditingOffer(null);
    setShowModal(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-2">
            <div className="h-8 bg-slate-700/50 rounded-lg w-48 animate-pulse"></div>
            <div className="h-4 bg-slate-700/30 rounded w-64 animate-pulse"></div>
          </div>
          <div className="h-10 bg-slate-700/50 rounded-lg w-32 animate-pulse mt-4 md:mt-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl animate-pulse"
            >
              <div className="h-48 bg-slate-700/50 rounded-xl mb-4"></div>
              <div className="h-6 bg-slate-700/50 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-slate-700/50 rounded w-1/2 mb-2"></div>
              <div className="h-16 bg-slate-700/50 rounded"></div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">إدارة العروض الشاملة</h1>
          <p className="text-slate-400">إنشاء وإدارة العروض الخاصة التي تظهر لجميع الزوار</p>
        </div>
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg flex items-center mt-4 md:mt-0"
        >
          <Plus className="w-5 h-5 ml-2" />
          إضافة عرض شامل جديد
        </motion.button>
      </motion.div>

      {/* Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6"
      >
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Sparkles className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">ما هو العرض الشامل؟</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              العرض الشامل هو تصميم موحد يظهر في صفحة الباقات ويمكن تطبيقه على جميع الباقات.
              يمكنك تخصيص النصوص والصور لإنشاء عرض جذاب وموحد لجميع خدماتك.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="البحث في العروض..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'inactive')}
                className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">جميع العروض</option>
                <option value="active">النشطة</option>
                <option value="inactive">غير النشطة</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Gift className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">إجمالي العروض</p>
                <p className="text-white text-xl font-bold">{offers.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Eye className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">العروض النشطة</p>
                <p className="text-white text-xl font-bold">
                  {offers.filter(offer => offer.is_active).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Search className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">النتائج المعروضة</p>
                <p className="text-white text-xl font-bold">{filteredOffers.length}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Offers Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {filteredOffers.map((offer) => (
          <motion.div
            key={offer.id}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 ${
              !offer.is_active ? 'opacity-60' : ''
            }`}
          >
            <div className="relative">
              {offer.image_url ? (
                <img
                  src={offer.image_url}
                  alt={offer.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-48 bg-slate-700/50 flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-slate-400" />
                </div>
              )}

              {!offer.is_active && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-medium bg-slate-800/80 px-3 py-1 rounded-lg">غير نشط</span>
                </div>
              )}

              {offer.is_active && (
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    نشط
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {offer.title}
              </h3>
              {offer.subtitle && (
                <h4 className="text-lg text-purple-400 mb-3 font-medium">{offer.subtitle}</h4>
              )}
              <p className="text-slate-300 text-sm mb-4 line-clamp-3">{offer.description}</p>

              {offer.button_text && (
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium inline-block">
                    {offer.button_text}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-slate-700/50 pt-4">
                <div className="flex space-x-2">
                  <motion.button
                    onClick={() => handleEdit(offer)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => toggleActive(offer)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-colors ${
                      offer.is_active
                        ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30'
                        : 'bg-slate-700/50 border border-slate-600/50 text-slate-400 hover:bg-slate-600/50'
                    }`}
                  >
                    {offer.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(offer.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
                <div className="text-xs text-slate-500 flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(offer.created_at).toLocaleDateString('ar-EG')}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredOffers.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="w-24 h-24 bg-slate-700/50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Gift className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">
            {searchQuery || filterStatus !== 'all' ? 'لا توجد نتائج' : 'لا توجد عروض شاملة'}
          </h3>
          <p className="text-slate-400 mb-6">
            {searchQuery || filterStatus !== 'all'
              ? 'جرب تغيير معايير البحث أو المرشحات'
              : 'ابدأ بإضافة أول عرض شامل لك'
            }
          </p>
          {(!searchQuery && filterStatus === 'all') && (
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg"
            >
              إضافة عرض شامل جديد
            </motion.button>
          )}
        </motion.div>
      )}

      {/* Preview Section */}
      {offers.filter(offer => offer.is_active).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-emerald-400" />
            معاينة العروض النشطة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offers.filter(offer => offer.is_active).map((offer) => (
              <div key={offer.id} className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-4 text-center">
                <h4 className="font-medium text-white mb-1">{offer.title}</h4>
                {offer.subtitle && (
                  <p className="text-sm text-purple-400 mb-2">{offer.subtitle}</p>
                )}
                <p className="text-xs text-slate-300 mb-2 line-clamp-2">{offer.description}</p>
                {offer.button_text && (
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded border border-purple-500/30">
                    {offer.button_text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start sm:items-center justify-center z-50 p-2 sm:p-4"
            onClick={resetForm}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {editingOffer ? 'تعديل العرض الشامل' : 'إضافة عرض شامل جديد'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      العنوان الرئيسي *
                    </label>
                    <Input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                      placeholder="عرض خاص لفترة محدودة"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      العنوان الفرعي
                    </label>
                    <Input
                      type="text"
                      value={formData.subtitle}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                      placeholder="احجز الآن واحصل على خصم 50%"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    الوصف *
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                    placeholder="وصف مفصل عن العرض الشامل..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    رابط الصورة
                  </label>
                  <Input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                    placeholder="https://example.com/offer-image.jpg"
                  />
                  {formData.image_url && (
                    <div className="mt-3">
                      <img
                        src={formData.image_url}
                        alt="معاينة الصورة"
                        className="w-full h-40 object-cover rounded-xl border border-slate-600/50"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    نص الزر
                  </label>
                  <Input
                    type="text"
                    value={formData.button_text}
                    onChange={(e) => setFormData({ ...formData, button_text: e.target.value })}
                    className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                    placeholder="احجز الآن"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="is_active"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="is_active" className="text-sm font-medium text-slate-300 cursor-pointer">
                    العرض نشط (سيظهر في الموقع)
                  </label>
                </div>

                <div className="flex justify-end space-x-3 pt-6 border-t border-slate-700/50">
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 border border-slate-600 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-colors"
                  >
                    إلغاء
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg flex items-center"
                  >
                    <Save className="w-4 h-4 ml-2" />
                    {editingOffer ? 'تحديث' : 'إضافة'}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
