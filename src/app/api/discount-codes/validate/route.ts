import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, testSupabaseConnection } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  console.log('=== Discount Code Validation API Called ===');
  console.log('Environment check:', {
    hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    hasSupabaseKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV
  });

  try {
    // Test database connection first
    const connectionTest = await testSupabaseConnection();
    if (!connectionTest.success) {
      console.error('Database connection failed:', connectionTest.error);
      return NextResponse.json(
        {
          valid: false,
          message: 'خطأ في الاتصال بقاعدة البيانات',
          debug: connectionTest.error
        },
        { status: 500 }
      );
    }

    console.log('Database connection successful');

    const { code } = await request.json();
    console.log('Received discount code:', code);

    if (!code || typeof code !== 'string') {
      console.log('Invalid code format:', typeof code);
      return NextResponse.json(
        { valid: false, message: 'كود الخصم مطلوب' },
        { status: 400 }
      );
    }

    // البحث عن الكود في قاعدة البيانات
    console.log('Searching for discount code in database...');
    if (!supabaseAdmin) {
      return NextResponse.json(
        { valid: false, message: 'خطأ في إعداد قاعدة البيانات' },
        { status: 500 }
      );
    }
    const { data, error } = await supabaseAdmin
      .from('discount_codes')
      .select('*')
      .eq('code', code.toUpperCase())
      .eq('is_active', true)
      .single();

    console.log('Database query result:', { data: !!data, error: error?.message });

    if (error) {
      console.error('Database error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });

      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { valid: false, message: 'كود خصم غير صحيح' },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          valid: false,
          message: 'خطأ في قاعدة البيانات',
          debug: error.message
        },
        { status: 500 }
      );
    }

    if (!data) {
      console.log('No discount code found');
      return NextResponse.json(
        { valid: false, message: 'كود خصم غير صحيح' },
        { status: 404 }
      );
    }

    console.log('Discount code found, validating...');

    // التحقق من صحة التواريخ
    const now = new Date();

    if (data.valid_from && typeof data.valid_from === 'string' && new Date(data.valid_from) > now) {
      console.log('Code not yet valid');
      return NextResponse.json(
        { valid: false, message: 'كود الخصم لم يصبح ساري المفعول بعد' },
        { status: 400 }
      );
    }

    if (data.valid_until && typeof data.valid_until === 'string' && new Date(data.valid_until) < now) {
      console.log('Code expired');
      return NextResponse.json(
        { valid: false, message: 'كود الخصم منتهي الصلاحية' },
        { status: 400 }
      );
    }

    // التحقق من حد الاستخدام
    const usageLimit = typeof data.usage_limit === 'number' ? data.usage_limit : 0;
    const usedCount = typeof data.used_count === 'number' ? data.used_count : 0;
    
    if (usageLimit > 0 && usedCount >= usageLimit) {
      console.log('Code usage limit exceeded');
      return NextResponse.json(
        { valid: false, message: 'تم استنفاد حد استخدام هذا الكود' },
        { status: 400 }
      );
    }

    console.log('Code validation successful');

    // إرجاع بيانات الكود الصحيح
    return NextResponse.json({
      valid: true,
      discountCode: {
        id: data.id,
        code: data.code,
        discount_type: data.is_percentage ? 'percentage' : 'fixed',
        discount_value: data.is_percentage ? data.discount_percentage : data.discount_amount,
        is_active: data.is_active,
        description: `خصم ${data.is_percentage ? data.discount_percentage + '%' : data.discount_amount + ' جنيه'}`
      }
    });

  } catch (error) {
    console.error('Unexpected error in validation API:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      type: typeof error
    });

    return NextResponse.json(
      {
        valid: false,
        message: 'حدث خطأ أثناء التحقق من كود الخصم',
        debug: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
