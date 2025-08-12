import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code || typeof code !== 'string') {
      return NextResponse.json(
        { valid: false, message: 'كود الخصم مطلوب' },
        { status: 400 }
      );
    }

    // البحث عن الكود في قاعدة البيانات
    const { data, error } = await supabase
      .from('discount_codes')
      .select('*')
      .eq('code', code.toUpperCase())
      .eq('is_active', true)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { valid: false, message: 'كود خصم غير صحيح' },
        { status: 404 }
      );
    }

    // التحقق من صحة التواريخ
    const now = new Date();

    if (data.valid_from && new Date(data.valid_from) > now) {
      return NextResponse.json(
        { valid: false, message: 'كود الخصم لم يصبح ساري المفعول بعد' },
        { status: 400 }
      );
    }

    if (data.valid_until && new Date(data.valid_until) < now) {
      return NextResponse.json(
        { valid: false, message: 'كود الخصم منتهي الصلاحية' },
        { status: 400 }
      );
    }

    // التحقق من حد الاستخدام
    if (data.usage_limit > 0 && data.used_count >= data.usage_limit) {
      return NextResponse.json(
        { valid: false, message: 'تم استنفاد حد استخدام هذا الكود' },
        { status: 400 }
      );
    }

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
    console.error('Error validating discount code:', error);
    return NextResponse.json(
      { valid: false, message: 'حدث خطأ أثناء التحقق من كود الخصم' },
      { status: 500 }
    );
  }
}
