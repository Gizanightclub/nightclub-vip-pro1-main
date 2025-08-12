"use client";

import { useState, useEffect } from 'react';
import { supabase, PricingPackage } from '@/lib/supabase';
import { Plus, Edit, Trash2, Crown, Eye, EyeOff, ArrowUp, ArrowDown } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function PricingPage() {
  const [packages, setPackages] = useState<PricingPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState<PricingPackage | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    currency: 'EGP',
    features: [''],
    is_popular: false,
    is_active: true,
    order_index: 0
  });

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const { data, error } = await supabase
        .from('pricing_packages')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setPackages(data || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const packageData = {
        ...formData,
        features: formData.features.filter(feature => feature.trim() !== '')
      };

      if (editingPackage) {
        // Update existing package
        const { error } = await supabase
          .from('pricing_packages')
          .update({
            ...packageData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingPackage.id);

        if (error) throw error;
      } else {
        // Create new package
        const { error } = await supabase
          .from('pricing_packages')
          .insert([{
            ...packageData,
            id: crypto.randomUUID(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }]);

        if (error) throw error;
      }

      setShowModal(false);
      setEditingPackage(null);
      resetForm();
      fetchPackages();
    } catch (error) {
      console.error('Error saving package:', error);
      alert('حدث خطأ أثناء حفظ الباقة');
    }
  };

  const handleEdit = (pkg: PricingPackage) => {
    setEditingPackage(pkg);
    setFormData({
      name: pkg.name,
      price: pkg.price,
      currency: pkg.currency,
      features: pkg.features.length > 0 ? pkg.features : [''],
      is_popular: pkg.is_popular,
      is_active: pkg.is_active,
      order_index: pkg.order_index
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذه الباقة؟')) return;

    try {
      const { error } = await supabase
        .from('pricing_packages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchPackages();
    } catch (error) {
      console.error('Error deleting package:', error);
      alert('حدث خطأ أثناء حذف الباقة');
    }
  };

  const toggleActive = async (pkg: PricingPackage) => {
    try {
      const { error } = await supabase
        .from('pricing_packages')
        .update({
          is_active: !pkg.is_active,
          updated_at: new Date().toISOString()
        })
        .eq('id', pkg.id);

      if (error) throw error;
      fetchPackages();
    } catch (error) {
      console.error('Error updating active status:', error);
    }
  };

  const togglePopular = async (pkg: PricingPackage) => {
    try {
      const { error } = await supabase
        .from('pricing_packages')
        .update({
          is_popular: !pkg.is_popular,
          updated_at: new Date().toISOString()
        })
        .eq('id', pkg.id);

      if (error) throw error;
      fetchPackages();
    } catch (error) {
      console.error('Error updating popular status:', error);
    }
  };

  const movePackage = async (pkg: PricingPackage, direction: 'up' | 'down') => {
    const currentIndex = packages.findIndex(p => p.id === pkg.id);
    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

    if (targetIndex < 0 || targetIndex >= packages.length) return;

    const targetPackage = packages[targetIndex];

    try {
      // Swap order indices
      await supabase
        .from('pricing_packages')
        .update({ order_index: targetPackage.order_index })
        .eq('id', pkg.id);

      await supabase
        .from('pricing_packages')
        .update({ order_index: pkg.order_index })
        .eq('id', targetPackage.id);

      fetchPackages();
    } catch (error) {
      console.error('Error moving package:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: 0,
      currency: 'EGP',
      features: [''],
      is_popular: false,
      is_active: true,
      order_index: packages.length
    });
    setEditingPackage(null);
    setShowModal(false);
  };

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({
      ...formData,
      features: newFeatures
    });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      features: newFeatures.length > 0 ? newFeatures : ['']
    });
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-white">إدارة الباقات</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="space-y-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="h-4 bg-gray-200 rounded w-full"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">إدارة الباقات</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200 flex items-center"
        >
          <Plus className="w-4 h-4 ml-2" />
          إضافة باقة جديدة
        </button>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div key={pkg.id} className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
            pkg.is_popular ? 'ring-2 ring-yellow-400' : ''
          } ${!pkg.is_active ? 'opacity-60' : ''}`}>
            {pkg.is_popular && (
              <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                <Crown className="w-4 h-4 inline ml-1" />
                الأكثر شعبية
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => movePackage(pkg, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => movePackage(pkg, 'down')}
                    disabled={index === packages.length - 1}
                    className="p-1 text-gray-400 hover:text-gray-600 disabled:opacity-30"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-3xl font-bold text-purple-600">{pkg.price}</span>
                <span className="text-gray-600 mr-1">{pkg.currency}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(pkg)}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => togglePopular(pkg)}
                    className={`p-2 rounded transition duration-200 ${
                      pkg.is_popular
                        ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    <Crown className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleActive(pkg)}
                    className={`p-2 rounded transition duration-200 ${
                      pkg.is_active
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    {pkg.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => handleDelete(pkg.id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(pkg.created_at).toLocaleDateString('ar-EG')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {packages.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Plus className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">لا توجد باقات</h3>
          <p className="text-gray-500 mb-4">ابدأ بإضافة أول باقة لك</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            إضافة باقة
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-start sm:items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] flex flex-col my-2 sm:my-0">
            {/* Header */}
            <div className="p-4 sm:p-6 pb-0 flex-shrink-0">
              <h2 className="text-lg sm:text-xl font-semibold">
                {editingPackage ? 'تعديل الباقة' : 'إضافة باقة جديدة'}
              </h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6">
              <form id="pricing-form" onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 py-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  اسم الباقة
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full"
                  required
                  placeholder="أدخل اسم الباقة"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    السعر
                  </label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full"
                    required
                    min="0"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    العملة
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                    className="w-full h-11 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="EGP">جنيه مصري</option>
                    <option value="USD">دولار أمريكي</option>
                    <option value="EUR">يورو</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  مميزات الباقة
                </label>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Input
                      type="text"
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                      className="flex-1"
                      placeholder="أدخل ميزة الباقة"
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="mr-2 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="text-purple-600 text-sm hover:text-purple-800 transition-colors"
                >
                  + إضافة ميزة أخرى
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_popular}
                    onChange={(e) => setFormData({ ...formData, is_popular: e.target.checked })}
                    className="ml-2 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">الباقة الأكثر شعبية</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="ml-2 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">نشط</span>
                </label>
              </div>

              </form>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 pt-0 flex-shrink-0 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  form="pricing-form"
                  className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm sm:text-base"
                >
                  {editingPackage ? 'تحديث' : 'إضافة'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
