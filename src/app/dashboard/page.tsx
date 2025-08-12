"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import {
  Image,
  Package,
  Tag,
  Gift,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Clock,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Eye,
  ShoppingCart,
  BarChart3,
  PieChart,
  Target,
  Zap
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  Pie,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  LineChart,
  Line,
  BarChart,
  Bar
} from 'recharts';

interface Stats {
  totalPrograms: number;
  totalPackages: number;
  activeCodes: number;
  universalOffers: number;
  totalBookings: number;
  totalRevenue: number;
  activeUsers: number;
  conversionRate: number;
}

interface ChartData {
  name: string;
  value: number;
  revenue?: number;
  bookings?: number;
  color?: string;
}

const COLORS = ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

export default function DashboardHome() {
  const [stats, setStats] = useState<Stats>({
    totalPrograms: 0,
    totalPackages: 0,
    activeCodes: 0,
    universalOffers: 0,
    totalBookings: 0,
    totalRevenue: 0,
    activeUsers: 0,
    conversionRate: 0
  });
  const [loading, setLoading] = useState(true);
  const [revenueData, setRevenueData] = useState<ChartData[]>([]);
  const [packageData, setPackageData] = useState<ChartData[]>([]);
  const [bookingTrends, setBookingTrends] = useState<ChartData[]>([]);

  useEffect(() => {
    fetchStats();
    generateMockData();
  }, []);

  const fetchStats = async () => {
    try {
      // Get programs count
      const { count: programsCount } = await supabase
        .from('programs')
        .select('*', { count: 'exact', head: true });

      // Get packages count
      const { count: packagesCount } = await supabase
        .from('pricing_packages')
        .select('*', { count: 'exact', head: true });

      // Get active discount codes count
      const { count: activeCodesCount } = await supabase
        .from('discount_codes')
        .select('*', { count: 'exact', head: true })
        .eq('is_active', true);

      // Get universal offers count
      const { count: offersCount } = await supabase
        .from('universal_offers')
        .select('*', { count: 'exact', head: true });

      setStats({
        totalPrograms: programsCount || 0,
        totalPackages: packagesCount || 0,
        activeCodes: activeCodesCount || 0,
        universalOffers: offersCount || 0,
        totalBookings: Math.floor(Math.random() * 500) + 100,
        totalRevenue: Math.floor(Math.random() * 50000) + 10000,
        activeUsers: Math.floor(Math.random() * 200) + 50,
        conversionRate: Math.random() * 10 + 5
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateMockData = () => {
    // Revenue chart data
    const revenueChartData = [
      { name: 'يناير', value: 4000, revenue: 2400, bookings: 45 },
      { name: 'فبراير', value: 3000, revenue: 1398, bookings: 38 },
      { name: 'مارس', value: 2000, revenue: 9800, bookings: 67 },
      { name: 'أبريل', value: 2780, revenue: 3908, bookings: 52 },
      { name: 'مايو', value: 1890, revenue: 4800, bookings: 48 },
      { name: 'يونيو', value: 2390, revenue: 3800, bookings: 59 },
      { name: 'يوليو', value: 3490, revenue: 4300, bookings: 71 }
    ];

    // Package distribution data
    const packageChartData = [
      { name: 'VIP', value: 35, color: '#8B5CF6' },
      { name: 'Premium', value: 28, color: '#06B6D4' },
      { name: 'Standard', value: 22, color: '#10B981' },
      { name: 'Basic', value: 15, color: '#F59E0B' }
    ];

    // Booking trends
    const trendsData = [
      { name: 'الأسبوع 1', value: 85 },
      { name: 'الأسبوع 2', value: 92 },
      { name: 'الأسبوع 3', value: 78 },
      { name: 'الأسبوع 4', value: 96 },
      { name: 'الأسبوع 5', value: 89 },
      { name: 'الأسبوع 6', value: 102 }
    ];

    setRevenueData(revenueChartData);
    setPackageData(packageChartData);
    setBookingTrends(trendsData);
  };

  const statCards = [
    {
      title: 'إجمالي البرامج',
      value: stats.totalPrograms,
      icon: Image,
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      change: '+12%',
      changeType: 'positive',
      href: '/dashboard/programs'
    },
    {
      title: 'باقات الأسعار',
      value: stats.totalPackages,
      icon: Package,
      color: 'from-cyan-500 to-cyan-600',
      textColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      change: '+8%',
      changeType: 'positive',
      href: '/dashboard/pricing'
    },
    {
      title: 'أكواد الخصم النشطة',
      value: stats.activeCodes,
      icon: Tag,
      color: 'from-emerald-500 to-emerald-600',
      textColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      change: '+5%',
      changeType: 'positive',
      href: '/dashboard/discount-codes'
    },
    {
      title: 'العروض الشاملة',
      value: stats.universalOffers,
      icon: Gift,
      color: 'from-amber-500 to-amber-600',
      textColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      change: '+18%',
      changeType: 'positive',
      href: '/dashboard/universal-offer'
    },
    {
      title: 'إجمالي الحجوزات',
      value: stats.totalBookings,
      icon: Calendar,
      color: 'from-rose-500 to-rose-600',
      textColor: 'text-rose-400',
      bgColor: 'bg-rose-500/10',
      change: '+25%',
      changeType: 'positive',
      href: '/dashboard'
    },
    {
      title: 'إجمالي الإيرادات',
      value: `${stats.totalRevenue.toLocaleString()} ج.م`,
      icon: DollarSign,
      color: 'from-indigo-500 to-indigo-600',
      textColor: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      change: '+32%',
      changeType: 'positive',
      href: '/dashboard'
    },
    {
      title: 'المستخدمين النشطين',
      value: stats.activeUsers,
      icon: Users,
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-400',
      bgColor: 'bg-green-500/10',
      change: '+15%',
      changeType: 'positive',
      href: '/dashboard'
    },
    {
      title: 'معدل التحويل',
      value: `${stats.conversionRate.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      textColor: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      change: '+7%',
      changeType: 'positive',
      href: '/dashboard'
    }
  ];

  const quickActions = [
    {
      title: 'إضافة برنامج جديد',
      description: 'إنشاء برنامج ترفيهي جديد',
      icon: Image,
      color: 'from-purple-500 to-purple-600',
      href: '/dashboard/programs'
    },
    {
      title: 'إنشاء كود خصم',
      description: 'إضافة عرض خصم جديد',
      icon: Tag,
      color: 'from-emerald-500 to-emerald-600',
      href: '/dashboard/discount-codes'
    },
    {
      title: 'تحديث الأسعار',
      description: 'تعديل باقات الأسعار',
      icon: DollarSign,
      color: 'from-amber-500 to-amber-600',
      href: '/dashboard/pricing'
    },
    {
      title: 'عرض شامل',
      description: 'إضافة عرض شامل جديد',
      icon: Gift,
      color: 'from-rose-500 to-rose-600',
      href: '/dashboard/universal-offer'
    }
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="h-8 bg-slate-700/50 rounded-lg w-48 animate-pulse"></div>
          <div className="h-4 bg-slate-700/30 rounded w-64 animate-pulse"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl animate-pulse"
            >
              <div className="h-4 bg-slate-700/50 rounded w-3/4 mb-4"></div>
              <div className="h-8 bg-slate-700/50 rounded w-1/2"></div>
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
          <h1 className="text-3xl font-bold text-white mb-2">
            مرحباً بك في لوحة التحكم
          </h1>
          <p className="text-slate-400">
            إليك نظرة عامة على أداء Night Club VIP اليوم
          </p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-4 py-2 rounded-xl">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="text-slate-300 text-sm">
              آخر تحديث: {new Date().toLocaleDateString('ar-EG')}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group cursor-pointer"
            onClick={() => window.location.href = card.href}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:border-slate-600/50 transition-all duration-300 relative overflow-hidden">
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${card.bgColor}`}>
                    <card.icon className={`w-6 h-6 ${card.textColor}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className={`text-sm font-medium ${
                      card.changeType === 'positive' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {card.change}
                    </span>
                    {card.changeType === 'positive' ? (
                      <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </div>

                <h3 className="text-slate-400 text-sm font-medium mb-1">{card.title}</h3>
                <p className="text-2xl font-bold text-white">{card.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">الإيرادات الشهرية</h3>
              <p className="text-slate-400 text-sm">تطور الإيرادات خلال الأشهر الماضية</p>
            </div>
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                <YAxis stroke="#9CA3AF" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    color: '#F9FAFB'
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8B5CF6"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Package Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">توزيع الباقات</h3>
              <p className="text-slate-400 text-sm">نسبة الحجوزات حسب نوع الباقة</p>
            </div>
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <PieChart className="w-6 h-6 text-cyan-400" />
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={packageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {packageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '12px',
                    color: '#F9FAFB'
                  }}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {packageData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-slate-300 text-sm">{item.name}</span>
                <span className="text-slate-400 text-sm">({item.value}%)</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Booking Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">اتجاه الحجوزات</h3>
            <p className="text-slate-400 text-sm">عدد الحجوزات الأسبوعية</p>
          </div>
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Activity className="w-6 h-6 text-emerald-400" />
          </div>
        </div>

        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bookingTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  color: '#F9FAFB'
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-white mb-6">الإجراءات السريعة</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = action.href}
              className="cursor-pointer group"
            >
              <div className="p-4 border-2 border-dashed border-slate-600 rounded-xl hover:border-slate-500 transition-all duration-300 group-hover:bg-slate-700/20">
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-medium mb-1">{action.title}</h4>
                <p className="text-slate-400 text-sm">{action.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-white mb-6">النشاط الأخير</h3>

        <div className="space-y-4">
          {[
            { action: 'تم إضافة برنامج جديد', time: 'منذ 5 دقائق', icon: Image, color: 'text-purple-400' },
            { action: 'تم تحديث باقة VIP', time: 'منذ 15 دقيقة', icon: Package, color: 'text-cyan-400' },
            { action: 'تم إنشاء كود خصم جديد', time: 'منذ 30 دقيقة', icon: Tag, color: 'text-emerald-400' },
            { action: 'تم حجز باقة Premium', time: 'منذ ساعة', icon: Calendar, color: 'text-amber-400' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700/30 transition-colors">
              <div className="p-2 bg-slate-700/50 rounded-lg">
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{activity.action}</p>
                <p className="text-slate-400 text-xs">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
