"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Image,
  Package,
  Tag,
  Gift,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  Settings,
  User as UserIcon,
  ChevronDown,
  Moon,
  Sun
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check initial auth state
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoginError('بيانات الدخول غير صحيحة');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const navigation = [
    {
      name: 'لوحة المعلومات',
      href: '/dashboard',
      icon: LayoutDashboard,
      description: 'نظرة عامة على الإحصائيات'
    },
    {
      name: 'إدارة البرامج',
      href: '/dashboard/programs',
      icon: Image,
      description: 'إضافة وتعديل البرامج'
    },
    {
      name: 'إدارة الباقات',
      href: '/dashboard/pricing',
      icon: Package,
      description: 'تحديد الأسعار والعروض'
    },
    {
      name: 'أكواد الخصم',
      href: '/dashboard/discount-codes',
      icon: Tag,
      description: 'إنشاء وإدارة الخصومات'
    },
    {
      name: 'العرض الشامل',
      href: '/dashboard/universal-offer',
      icon: Gift,
      description: 'العروض الخاصة والشاملة'
    },
  ];

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 40
      }
    },
    closed: {
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 40
      }
    }
  };

  const backdropVariants = {
    open: {
      opacity: 1,
      visibility: "visible" as const
    },
    closed: {
      opacity: 0,
      visibility: "hidden" as const,
      transition: {
        delay: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center space-y-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
          />
          <p className="text-white text-xl font-medium">جاري التحميل...</p>
        </motion.div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <UserIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              تسجيل الدخول
            </h1>
            <p className="text-gray-300 text-sm">
              ادخل إلى لوحة التحكم الخاصة بك
            </p>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-gray-200 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="admin@example.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-200 mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                required
              />
            </motion.div>

            {loginError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg"
              >
                <p className="text-red-200 text-sm">{loginError}</p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg"
            >
              تسجيل الدخول
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial="closed"
        animate={sidebarOpen ? "open" : "closed"}
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-800/95 backdrop-blur-xl border-r border-slate-700/50 shadow-2xl lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-slate-700/50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Night Club VIP</h1>
              <p className="text-xs text-slate-400">لوحة التحكم</p>
            </div>
          </motion.div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-4">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href as string}
                  className={`group flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 mb-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 shadow-lg shadow-purple-500/10 border border-purple-500/30'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`ml-3 w-5 h-5 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-purple-400' : 'text-slate-400'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-700/50 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin</p>
              <p className="text-xs text-slate-400 truncate">{user.email}</p>
            </div>
          </div>

          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition-all group"
          >
            <LogOut className="ml-3 w-5 h-5 group-hover:scale-110 transition-transform" />
            تسجيل الخروج
          </motion.button>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="lg:mr-80">
        {/* Top navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-30"
        >
          <div className="flex items-center justify-between h-20 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700/50"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Search Bar */}
              <div className="hidden md:flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="البحث..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all w-64"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Notifications */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </motion.button>

              {/* Settings */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white transition-colors"
              >
                <Settings className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Page content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
