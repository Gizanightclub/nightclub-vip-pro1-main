"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, DiscountCode } from '@/lib/supabase';
import { Plus, Edit, Trash2, Eye, EyeOff, Copy, Calendar, Percent, DollarSign, Tag, Search, Filter, Clock, AlertCircle, CheckCircle, XCircle, BarChart3, TrendingUp, Users, Activity } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function DiscountCodesPage() {
  const [codes, setCodes] = useState<DiscountCode[]>([]);
  const [filteredCodes, setFilteredCodes] = useState<DiscountCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCode, setEditingCode] = useState<DiscountCode | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive' | 'expired'>('all');
  const [formData, setFormData] = useState({
    code: '',
    discount_percentage: 0,
    discount_amount: 0,
    is_percentage: true,
    is_active: true,
    valid_from: '',
    valid_until: '',
    usage_limit: 0,
    used_count: 0
  });

  useEffect(() => {
    fetchCodes();
  }, []);

  useEffect(() => {
    filterCodes();
  }, [codes, searchQuery, filterStatus]);

  const fetchCodes = async () => {
    try {
      const { data, error } = await supabase
        .from('discount_codes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCodes(data || []);
    } catch (error) {
      console.error('Error fetching discount codes:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterCodes = useCallback(() => {
    let filtered = codes;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(code =>
        code.code.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus === 'active') {
      filtered = filtered.filter(code => code.is_active && !isExpired(code.valid_until) && !isUsageLimitReached(code.usage_limit, code.used_count));
    } else if (filterStatus === 'inactive') {
      filtered = filtered.filter(code => !code.is_active);
    } else if (filterStatus === 'expired') {
      filtered = filtered.filter(code => isExpired(code.valid_until) || isUsageLimitReached(code.usage_limit, code.used_count));
    }

    setFilteredCodes(filtered);
  }, [codes, searchQuery, filterStatus]);

  const generateCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData({ ...formData, code: result });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const codeData = {
        ...formData,
        code: formData.code.toUpperCase(),
        valid_from: formData.valid_from || null,
        valid_until: formData.valid_until || null,
      };

      if (editingCode) {
        // Update existing code
        const { error } = await supabase
          .from('discount_codes')
          .update({
            ...codeData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingCode.id);

        if (error) throw error;
      } else {
        // Create new code - let database generate ID and timestamps
        const { error } = await supabase
          .from('discount_codes')
          .insert([codeData]);

        if (error) throw error;
      }

      setShowModal(false);
      setEditingCode(null);
      resetForm();
      fetchCodes();
    } catch (error) {
      console.error('Error saving discount code:', error);
      alert('حدث خطأ أثناء حفظ كود الخصم');
    }
  };

  const handleEdit = (code: DiscountCode) => {
    setEditingCode(code);
    setFormData({
      code: code.code,
      discount_percentage: code.discount_percentage,
      discount_amount: code.discount_amount,
      is_percentage: code.is_percentage,
      is_active: code.is_active,
      valid_from: code.valid_from ? new Date(code.valid_from).toISOString().split('T')[0] : '',
      valid_until: code.valid_until ? new Date(code.valid_until).toISOString().split('T')[0] : '',
      usage_limit: code.usage_limit,
      used_count: code.used_count
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف كود الخصم هذا؟')) return;

    try {
      const { error } = await supabase
        .from('discount_codes')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchCodes();
    } catch (error) {
      console.error('Error deleting discount code:', error);
      alert('حدث خطأ أثناء حذف كود الخصم');
    }
  };

  const toggleActive = async (code: DiscountCode) => {
    try {
      const { error } = await supabase
        .from('discount_codes')
        .update({
          is_active: !code.is_active,
          updated_at: new Date().toISOString()
        })
        .eq('id', code.id);

      if (error) throw error;
      fetchCodes();
    } catch (error) {
      console.error('Error updating active status:', error);
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // Could use a toast notification instead of alert
    alert('تم نسخ الكود!');
  };

  const resetForm = () => {
    setFormData({
      code: '',
      discount_percentage: 0,
      discount_amount: 0,
      is_percentage: true,
      is_active: true,
      valid_from: '',
      valid_until: '',
      usage_limit: 0,
      used_count: 0
    });
    setEditingCode(null);
    setShowModal(false);
  };

  const isExpired = (validUntil: string) => {
    return validUntil && new Date(validUntil) < new Date();
  };

  const isUsageLimitReached = (usageLimit: number, usedCount: number) => {
    return usageLimit > 0 && usedCount >= usageLimit;
  };

  const getCodeStatus = (code: DiscountCode) => {
    if (!code.is_active) return { status: 'inactive', label: 'غير نشط', color: 'bg-slate-500/20 text-slate-400 border-slate-500/30' };
    if (isExpired(code.valid_until)) return { status: 'expired', label: 'منتهي الصلاحية', color: 'bg-red-500/20 text-red-400 border-red-500/30' };
    if (isUsageLimitReached(code.usage_limit, code.used_count)) return { status: 'limit_reached', label: 'تم استنفاد الحد', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' };
    return { status: 'active', label: 'نشط', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' };
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

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-slate-700/50 rounded-xl"></div>
            ))}
          </div>
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
          <h1 className="text-3xl font-bold text-white mb-2">إدارة أكواد الخصم</h1>
          <p className="text-slate-400">إنشاء وإدارة أكواد الخصم والعروض الترويجية</p>
        </div>
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg flex items-center mt-4 md:mt-0"
        >
          <Plus className="w-5 h-5 ml-2" />
          إضافة كود خصم جديد
        </motion.button>
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
              placeholder="البحث في أكواد الخصم..."
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
                onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'inactive' | 'expired')}
                className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">جميع الأكواد</option>
                <option value="active">النشطة</option>
                <option value="inactive">غير النشطة</option>
                <option value="expired">منتهية الصلاحية</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Tag className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">إجمالي الأكواد</p>
                <p className="text-white text-xl font-bold">{codes.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">الأكواد النشطة</p>
                <p className="text-white text-xl font-bold">
                  {codes.filter(code =>
                    code.is_active &&
                    !isExpired(code.valid_until) &&
                    !isUsageLimitReached(code.usage_limit, code.used_count)
                  ).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <XCircle className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">منتهية الصلاحية</p>
                <p className="text-white text-xl font-bold">
                  {codes.filter(code => isExpired(code.valid_until)).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Activity className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">إجمالي الاستخدام</p>
                <p className="text-white text-xl font-bold">
                  {codes.reduce((sum, code) => sum + code.used_count, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Codes List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {filteredCodes.map((code) => {
          const codeStatus = getCodeStatus(code);

          return (
            <motion.div
              key={code.id}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  {/* Code Display */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl">
                      <Tag className="w-8 h-8 text-white" />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full border-2 border-slate-800 ${
                      codeStatus.status === 'active' ? 'bg-emerald-500' :
                      codeStatus.status === 'expired' ? 'bg-red-500' : 'bg-slate-500'
                    }`}></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-white font-mono bg-slate-700/50 px-3 py-1 rounded-lg">
                          {code.code}
                        </span>
                        <motion.button
                          onClick={() => copyCode(code.code)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-1 text-slate-400 hover:text-white transition-colors"
                          title="نسخ الكود"
                        >
                          <Copy className="w-4 h-4" />
                        </motion.button>
                      </div>

                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${codeStatus.color}`}>
                        {codeStatus.label}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-slate-300 mb-2">
                      {/* Discount Value */}
                      <div className="flex items-center space-x-1">
                        {code.is_percentage ? (
                          <>
                            <Percent className="w-4 h-4 text-emerald-400" />
                            <span className="font-medium text-emerald-400">{code.discount_percentage}%</span>
                          </>
                        ) : (
                          <>
                            <DollarSign className="w-4 h-4 text-emerald-400" />
                            <span className="font-medium text-emerald-400">{code.discount_amount} ج.م</span>
                          </>
                        )}
                      </div>

                      {/* Usage Stats */}
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span>
                          {code.usage_limit > 0 ? (
                            <span className={code.used_count >= code.usage_limit ? 'text-red-400' : 'text-blue-400'}>
                              {code.used_count} / {code.usage_limit}
                            </span>
                          ) : (
                            <span className="text-blue-400">{code.used_count} / ∞</span>
                          )}
                        </span>
                      </div>

                      {/* Validity Period */}
                      {(code.valid_from || code.valid_until) && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-amber-400" />
                          <span className="text-amber-400">
                            {code.valid_from && new Date(code.valid_from).toLocaleDateString('ar-EG')}
                            {code.valid_from && code.valid_until && ' - '}
                            {code.valid_until && new Date(code.valid_until).toLocaleDateString('ar-EG')}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center text-slate-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      تم الإنشاء في {new Date(code.created_at).toLocaleDateString('ar-EG')}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <motion.button
                    onClick={() => handleEdit(code)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => toggleActive(code)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-colors ${
                      code.is_active
                        ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30'
                        : 'bg-slate-700/50 border border-slate-600/50 text-slate-400 hover:bg-slate-600/50'
                    }`}
                  >
                    {code.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </motion.button>
                  <motion.button
                    onClick={() => handleDelete(code.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Empty State */}
      {filteredCodes.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="w-24 h-24 bg-slate-700/50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Tag className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">
            {searchQuery || filterStatus !== 'all' ? 'لا توجد نتائج' : 'لا توجد أكواد خصم'}
          </h3>
          <p className="text-slate-400 mb-6">
            {searchQuery || filterStatus !== 'all'
              ? 'جرب تغيير معايير البحث أو المرشحات'
              : 'ابدأ بإضافة أول كود خصم لك'
            }
          </p>
          {(!searchQuery && filterStatus === 'all') && (
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg"
            >
              إضافة كود خصم جديد
            </motion.button>
          )}
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={resetForm}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 p-8 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {editingCode ? 'تعديل كود الخصم' : 'إضافة كود خصم جديد'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    كود الخصم
                  </label>
                  <div className="flex">
                    <Input
                      type="text"
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                      className="flex-1 rounded-l-none font-mono bg-slate-700/50 border-slate-600/50 text-white"
                      placeholder="DISCOUNT20"
                      required
                    />
                    <motion.button
                      type="button"
                      onClick={generateCode}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-3 bg-slate-600/50 border border-slate-600/50 rounded-l-xl hover:bg-slate-500/50 text-sm transition-colors text-white"
                    >
                      توليد
                    </motion.button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    نوع الخصم
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={formData.is_percentage}
                        onChange={() => setFormData({ ...formData, is_percentage: true })}
                        className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-slate-300">نسبة مئوية</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={!formData.is_percentage}
                        onChange={() => setFormData({ ...formData, is_percentage: false })}
                        className="w-4 h-4 text-purple-600 bg-slate-700 border-slate-600 focus:ring-purple-500"
                      />
                      <span className="text-sm text-slate-300">مبلغ ثابت</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {formData.is_percentage ? 'نسبة الخصم (%)' : 'مبلغ الخصم (ج.م)'}
                  </label>
                  <Input
                    type="number"
                    value={formData.is_percentage ? formData.discount_percentage : formData.discount_amount}
                    onChange={(e) => setFormData({
                      ...formData,
                      [formData.is_percentage ? 'discount_percentage' : 'discount_amount']: Number(e.target.value)
                    })}
                    className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                    required
                    min="0"
                    max={formData.is_percentage ? "100" : undefined}
                    placeholder={formData.is_percentage ? "20" : "100"}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      صالح من (اختياري)
                    </label>
                    <Input
                      type="date"
                      value={formData.valid_from}
                      onChange={(e) => setFormData({ ...formData, valid_from: e.target.value })}
                      className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      صالح حتى (اختياري)
                    </label>
                    <Input
                      type="date"
                      value={formData.valid_until}
                      onChange={(e) => setFormData({ ...formData, valid_until: e.target.value })}
                      className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    حد الاستخدام (0 = غير محدود)
                  </label>
                  <Input
                    type="number"
                    value={formData.usage_limit}
                    onChange={(e) => setFormData({ ...formData, usage_limit: Number(e.target.value) })}
                    className="w-full bg-slate-700/50 border-slate-600/50 text-white"
                    min="0"
                    placeholder="0"
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
                    كود نشط
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
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg"
                  >
                    {editingCode ? 'تحديث' : 'إضافة'}
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
