import { NextResponse } from 'next/server';
import { testSupabaseConnection } from '@/lib/supabase';

export async function GET() {
  console.log('=== Health Check API Called ===');

  try {
    // التحقق من متغيرات البيئة
    const envCheck = {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      nodeEnv: process.env.NODE_ENV,
      vercelEnv: process.env.VERCEL_ENV || 'not-set'
    };

    console.log('Environment variables check:', envCheck);

    // التحقق من اتصال قاعدة البيانات
    const dbTest = await testSupabaseConnection();

    const healthStatus = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      environment: envCheck,
      database: {
        connected: dbTest.success,
        error: dbTest.success ? null : dbTest.error
      }
    };

    console.log('Health check result:', healthStatus);

    return NextResponse.json(healthStatus, {
      status: dbTest.success ? 200 : 500
    });

  } catch (error) {
    console.error('Health check error:', error);

    return NextResponse.json({
      status: 'error',
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
