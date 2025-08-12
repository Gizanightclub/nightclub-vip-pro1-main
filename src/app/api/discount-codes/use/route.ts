import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json(
        { error: 'كود الخصم مطلوب' },
        { status: 400 }
      );
    }

    // البحث عن الكود والتحقق من صحته
    const { data: discountCode, error: fetchError } = await supabase
      .from('discount_codes')
      .select('*')
      .eq('code', code.toUpperCase())
      .eq('is_active', true)
      .single();

    if (fetchError || !discountCode) {
      return NextResponse.json(
        { error: 'كود خصم غير صحيح' },
        { status: 404 }
      );
    }

    // التحقق من صحة التواريخ
    const now = new Date();

    if (discountCode.valid_from && new Date(discountCode.valid_from) > now) {
      return NextResponse.json(
        { error: 'كود الخصم لم يصبح ساري المفعول بعد' },
        { status: 400 }
      );
    }

    if (discountCode.valid_until && new Date(discountCode.valid_until) < now) {
      return NextResponse.json(
        { error: 'كود الخصم منتهي الصلاحية' },
        { status: 400 }
      );
    }

    // التحقق من حد الاستخدام
    if (discountCode.usage_limit > 0 && discountCode.used_count >= discountCode.usage_limit) {
      return NextResponse.json(
        { error: 'تم استنفاد حد استخدام هذا الكود' },
        { status: 400 }
      );
    }

    // زيادة عداد الاستخدام
    const { error: updateError } = await supabase
      .from('discount_codes')
      .update({
        used_count: discountCode.used_count + 1,
        updated_at: new Date().toISOString()
      })
      .eq('id', discountCode.id);

    if (updateError) {
      console.error('Error updating usage count:', updateError);
      return NextResponse.json(
        { error: 'حدث خطأ أثناء استخدام كود الخصم' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'تم استخدام كود الخصم بنجاح'
    });

  } catch (error) {
    console.error('Error using discount code:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء استخدام كود الخصم' },
      { status: 500 }
    );
  }
}
