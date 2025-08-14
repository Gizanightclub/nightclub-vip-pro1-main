import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, testSupabaseConnection } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  console.log('=== Discount Code Usage API Called ===');
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
          error: 'خطأ في الاتصال بقاعدة البيانات',
          debug: connectionTest.error
        },
        { status: 500 }
      );
    }

    console.log('Database connection successful');

    const { code } = await request.json();
    console.log('Received discount code for usage:', code);

    if (!code || typeof code !== 'string') {
      console.log('Invalid code format:', typeof code);
      return NextResponse.json(
        { error: 'كود الخصم مطلوب' },
        { status: 400 }
      );
    }

    // التحقق من توفر supabaseAdmin
    if (!supabaseAdmin) {
      return NextResponse.json(
        { message: 'Database connection not available' },
        { status: 503 }
      );
    }

    // البحث عن الكود والتحقق من صحته
    console.log('Searching for discount code in database...');
    const { data: discountCode, error: fetchError } = await supabaseAdmin
      .from('discount_codes')
      .select('*')
      .eq('code', code.toUpperCase())
      .eq('is_active', true)
      .single();

    console.log('Database query result:', { data: !!discountCode, error: fetchError?.message });

    if (fetchError) {
      console.error('Database error details:', {
        message: fetchError.message,
        details: fetchError.details,
        hint: fetchError.hint,
        code: fetchError.code
      });

      if (fetchError.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'كود خصم غير صحيح' },
          { status: 404 }
        );
      }

      return NextResponse.json(
        {
          error: 'خطأ في قاعدة البيانات',
          debug: fetchError.message
        },
        { status: 500 }
      );
    }

    if (!discountCode) {
      console.log('No discount code found');
      return NextResponse.json(
        { error: 'كود خصم غير صحيح' },
        { status: 404 }
      );
    }

    console.log('Discount code found, validating for usage...');

    // التحقق من صحة التواريخ
    const now = new Date();

    if (discountCode.valid_from && new Date(discountCode.valid_from) > now) {
      console.log('Code not yet valid');
      return NextResponse.json(
        { error: 'كود الخصم لم يصبح ساري المفعول بعد' },
        { status: 400 }
      );
    }

    if (discountCode.valid_until && new Date(discountCode.valid_until) < now) {
      console.log('Code expired');
      return NextResponse.json(
        { error: 'كود الخصم منتهي الصلاحية' },
        { status: 400 }
      );
    }

    // التحقق من حد الاستخدام
    if (discountCode.usage_limit > 0 && discountCode.used_count >= discountCode.usage_limit) {
      console.log('Code usage limit exceeded');
      return NextResponse.json(
        { error: 'تم استنفاد حد استخدام هذا الكود' },
        { status: 400 }
      );
    }

    console.log('Code validation successful, updating usage count...');

    // زيادة عداد الاستخدام
    const { error: updateError } = await supabaseAdmin
      .from('discount_codes')
      .update({
        used_count: discountCode.used_count + 1,
        updated_at: new Date().toISOString()
      })
      .eq('id', discountCode.id);

    if (updateError) {
      console.error('Error updating usage count:', {
        message: updateError.message,
        details: updateError.details,
        hint: updateError.hint,
        code: updateError.code
      });

      return NextResponse.json(
        {
          error: 'حدث خطأ أثناء استخدام كود الخصم',
          debug: updateError.message
        },
        { status: 500 }
      );
    }

    console.log('Usage count updated successfully');

    return NextResponse.json({
      success: true,
      message: 'تم استخدام كود الخصم بنجاح'
    });

  } catch (error) {
    console.error('Unexpected error in usage API:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace',
      type: typeof error
    });

    return NextResponse.json(
      {
        error: 'حدث خطأ أثناء استخدام كود الخصم',
        debug: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
