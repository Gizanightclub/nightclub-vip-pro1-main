"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, Program } from '@/lib/supabase';
import { Plus, Edit, Trash2, Star, StarOff, Image as ImageIcon, Search, Filter, Grid, List, Eye, Calendar, Clock, Upload, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'featured' | 'regular'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    is_featured: false
  });

  // States للصور
  const [imageUploading, setImageUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [uploadMethod, setUploadMethod] = useState<'url' | 'file'>('url');

  useEffect(() => {
    fetchPrograms();
  }, []);

  useEffect(() => {
    filterPrograms();
  }, [programs, searchQuery, filterStatus]);

  const fetchPrograms = async () => {
    try {
      const { data, error } = await supabase
        .from('programs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPrograms(data || []);
    } catch (error) {
      console.error('Error fetching programs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPrograms = () => {
    let filtered = programs;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(program =>
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus === 'featured') {
      filtered = filtered.filter(program => program.is_featured);
    } else if (filterStatus === 'regular') {
      filtered = filtered.filter(program => !program.is_featured);
    }

    setFilteredPrograms(filtered);
  };

  // وظيفة رفع الصورة
  const handleImageUpload = async (file: File) => {
    setImageUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormData(prev => ({ ...prev, image_url: result.imageUrl }));
        setPreviewUrl(result.imageUrl);
        return result.imageUrl;
      } else {
        alert(result.error || 'فشل رفع الصورة');
        return null;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('حدث خطأ أثناء رفع الصورة');
      return null;
    } finally {
      setImageUploading(false);
    }
  };

  // وظيفة معالجة تغيير الصورة
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // التحقق من نوع الملف
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        alert('نوع الملف غير مدعوم. يُسمح فقط بالصور (JPEG, PNG, GIF, WebP)');
        return;
      }

      // التحقق من حجم الملف (5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('حجم الملف كبير جداً. الحد الأقصى 5MB');
        return;
      }

      setSelectedImage(file);

      // إنشاء preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = formData.image_url;

      // رفع الصورة إذا تم اختيار ملف
      if (selectedImage && uploadMethod === 'file') {
        const uploadedUrl = await handleImageUpload(selectedImage);
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        } else {
          return; // إيقاف العملية إذا فشل رفع الصورة
        }
      }

      if (editingProgram) {
        // Update existing program
        const { error } = await supabase
          .from('programs')
          .update({
            ...formData,
            image_url: imageUrl,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingProgram.id);

        if (error) throw error;
      } else {
        // Create new program - let database generate UUID and timestamps
        const { error } = await supabase
          .from('programs')
          .insert([{
            ...formData,
            image_url: imageUrl
          }]);

        if (error) throw error;
      }

      setShowModal(false);
      setEditingProgram(null);
      resetForm();
      fetchPrograms();
    } catch (error) {
      console.error('Error saving program:', error);
      alert('حدث خطأ أثناء حفظ البرنامج');
    }
  };

  const handleEdit = (program: Program) => {
    setEditingProgram(program);
    setFormData({
      title: program.title,
      description: program.description,
      image_url: program.image_url,
      is_featured: program.is_featured
    });
    setPreviewUrl(program.image_url);
    setUploadMethod(program.image_url ? 'url' : 'file');
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا البرنامج؟')) return;

    try {
      const { error } = await supabase
        .from('programs')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchPrograms();
    } catch (error) {
      console.error('Error deleting program:', error);
      alert('حدث خطأ أثناء حذف البرنامج');
    }
  };

  const toggleFeatured = async (program: Program) => {
    try {
      const { error } = await supabase
        .from('programs')
        .update({
          is_featured: !program.is_featured,
          updated_at: new Date().toISOString()
        })
        .eq('id', program.id);

      if (error) throw error;
      fetchPrograms();
    } catch (error) {
      console.error('Error updating featured status:', error);
    }
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', image_url: '', is_featured: false });
    setEditingProgram(null);
    setShowModal(false);
    setSelectedImage(null);
    setPreviewUrl('');
    setUploadMethod('url');
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl animate-pulse"
            >
              <div className="h-48 bg-slate-700/50 rounded-xl mb-4"></div>
              <div className="h-4 bg-slate-700/50 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-slate-700/50 rounded w-1/2"></div>
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
          <h1 className="text-3xl font-bold text-white mb-2">إدارة البرامج</h1>
          <p className="text-slate-400">إضافة وتعديل البرامج الترفيهية للنادي</p>
        </div>
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg flex items-center mt-4 md:mt-0"
        >
          <Plus className="w-5 h-5 ml-2" />
          إضافة برنامج جديد
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
              placeholder="البحث في البرامج..."
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
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">جميع البرامج</option>
                <option value="featured">المميزة</option>
                <option value="regular">العادية</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-700/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-purple-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-purple-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <ImageIcon className="w-4 h-4 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">إجمالي البرامج</p>
                <p className="text-white text-xl font-bold">{programs.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Star className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">البرامج المميزة</p>
                <p className="text-white text-xl font-bold">
                  {programs.filter(p => p.is_featured).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 p-4 rounded-xl">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Eye className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">النتائج المعروضة</p>
                <p className="text-white text-xl font-bold">{filteredPrograms.length}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Programs Grid/List */}
      <AnimatePresence mode="wait">
        {viewMode === 'grid' ? (
          <motion.div
            key="grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="relative">
                  {program.image_url ? (
                    <img
                      src={program.image_url}
                      alt={program.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-slate-700/50 flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-slate-400" />
                    </div>
                  )}

                  {program.is_featured && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        مميز
                      </div>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <motion.button
                        onClick={() => handleEdit(program)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={() => toggleFeatured(program)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        {program.is_featured ? <Star className="w-4 h-4" /> : <StarOff className="w-4 h-4" />}
                      </motion.button>
                      <motion.button
                        onClick={() => handleDelete(program.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-red-500/50 backdrop-blur-sm rounded-full text-white hover:bg-red-500/70 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">{program.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(program.created_at).toLocaleDateString('ar-EG')}
                    </div>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(program.updated_at).toLocaleTimeString('ar-EG', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    {program.image_url ? (
                      <img
                        src={program.image_url}
                        alt={program.title}
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-slate-700/50 rounded-xl flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-slate-400" />
                      </div>
                    )}
                    {program.is_featured && (
                      <div className="absolute -top-2 -right-2">
                        <Star className="w-5 h-5 text-amber-400 fill-current" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{program.title}</h3>
                    <p className="text-slate-400 text-sm mb-2">{program.description}</p>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(program.created_at).toLocaleDateString('ar-EG')}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <motion.button
                      onClick={() => handleEdit(program)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => toggleFeatured(program)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-lg transition-colors ${
                        program.is_featured
                          ? 'bg-amber-500/20 border border-amber-500/30 text-amber-400 hover:bg-amber-500/30'
                          : 'bg-slate-700/50 border border-slate-600/50 text-slate-400 hover:bg-slate-600/50'
                      }`}
                    >
                      {program.is_featured ? <Star className="w-4 h-4" /> : <StarOff className="w-4 h-4" />}
                    </motion.button>
                    <motion.button
                      onClick={() => handleDelete(program.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {filteredPrograms.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="w-24 h-24 bg-slate-700/50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">
            {searchQuery || filterStatus !== 'all' ? 'لا توجد نتائج' : 'لا توجد برامج'}
          </h3>
          <p className="text-slate-400 mb-6">
            {searchQuery || filterStatus !== 'all'
              ? 'جرب تغيير معايير البحث أو المرشحات'
              : 'ابدأ بإضافة أول برنامج ترفيهي لك'
            }
          </p>
          {(!searchQuery && filterStatus === 'all') && (
            <motion.button
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg"
            >
              إضافة برنامج جديد
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start sm:items-center justify-center z-50 p-2 sm:p-4"
            onClick={resetForm}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="backdrop-blur-xl border border-slate-300/50 rounded-1xl shadow-1xl w-full max-w-md bg-[#071a31] max-h-[95vh] sm:max-h-[90vh] flex flex-col my-2 sm:my-0"
            >
              {/* Header - ثابت */}
              <div className="p-4 sm:p-6 pb-0 flex-shrink-0">
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  {editingProgram ? 'تعديل البرنامج' : 'إضافة برنامج جديد'}
                </h2>
              </div>

              {/* Content - قابل للتمرير */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-6">
                <form id="program-form" onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 py-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    عنوان البرنامج
                  </label>
                  <Input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-700/50 border-slate-600/50 text-white text-sm sm:text-base"
                    required
                    placeholder="أدخل عنوان البرنامج"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    وصف البرنامج
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full bg-slate-700/50 border-slate-600/50 text-white text-sm sm:text-base"
                    required
                    placeholder="أدخل وصف البرنامج"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    صورة البرنامج
                  </label>

                  {/* خيارات رفع الصورة */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <button
                      type="button"
                      onClick={() => setUploadMethod('url')}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        uploadMethod === 'url'
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      رابط صورة
                    </button>
                    <button
                      type="button"
                      onClick={() => setUploadMethod('file')}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                        uploadMethod === 'file'
                          ? 'bg-purple-600 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      رفع ملف
                    </button>
                  </div>

                  {uploadMethod === 'url' ? (
                    <Input
                      type="url"
                      value={formData.image_url}
                      onChange={(e) => {
                        setFormData({ ...formData, image_url: e.target.value });
                        if (e.target.value) {
                          setPreviewUrl(e.target.value);
                        }
                      }}
                      className="w-full bg-slate-700/50 border-slate-600/50 text-white text-sm sm:text-base"
                      placeholder="https://example.com/image.jpg"
                    />
                  ) : (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex flex-col items-center justify-center w-full h-24 sm:h-32 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer hover:border-slate-500 transition-colors bg-slate-700/30"
                      >
                        <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 mb-1 sm:mb-2" />
                        <span className="text-xs sm:text-sm text-slate-400 text-center px-2">
                          {selectedImage ? selectedImage.name : 'اختر صورة للرفع'}
                        </span>
                        <span className="text-xs text-slate-500 mt-1 hidden sm:block">
                          JPG, PNG, GIF, WebP - حد أقصى 5MB
                        </span>
                      </label>
                    </div>
                  )}

                  {/* معاينة الصورة */}
                  {previewUrl && (
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        معاينة الصورة
                      </label>
                      <div className="relative inline-block">
                        <img
                          src={previewUrl}
                          alt="معاينة"
                          className="w-full h-24 sm:h-32 object-cover rounded-lg border border-slate-600"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewUrl('');
                            setFormData({ ...formData, image_url: '' });
                            setSelectedImage(null);
                          }}
                          className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="is_featured"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-4 h-4 mt-0.5 text-purple-600 bg-slate-700 border-slate-600 rounded focus:ring-purple-500 flex-shrink-0"
                  />
                  <label htmlFor="is_featured" className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
                    برنامج مميز (يظهر في الصفحة الرئيسية)
                  </label>
                </div>

                </form>
              </div>

              {/* Footer - الأزرار ثابتة */}
              <div className="p-4 sm:p-6 pt-0 flex-shrink-0 border-t border-slate-600/30">
                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-slate-600 rounded-xl text-slate-300 hover:bg-slate-700/50 transition-colors text-sm sm:text-base"
                  >
                    إلغاء
                  </motion.button>
                  <motion.button
                    type="submit"
                    form="program-form"
                    disabled={imageUploading}
                    whileHover={{ scale: imageUploading ? 1 : 1.02 }}
                    whileTap={{ scale: imageUploading ? 1 : 0.98 }}
                    className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all shadow-lg flex items-center justify-center text-sm sm:text-base ${
                      imageUploading
                        ? 'bg-slate-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                    } text-white`}
                  >
                    {imageUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white ml-2"></div>
                        جاري رفع الصورة...
                      </>
                    ) : (
                      editingProgram ? 'تحديث' : 'إضافة'
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
