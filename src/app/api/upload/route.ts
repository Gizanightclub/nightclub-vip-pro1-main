import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'لم يتم تحديد ملف' },
        { status: 400 }
      );
    }

    // التحقق من نوع الملف
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'نوع الملف غير مدعوم. يُسمح فقط بالصور (JPEG, PNG, GIF, WebP)' },
        { status: 400 }
      );
    }

    // التحقق من حجم الملف (حد أقصى 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'حجم الملف كبير جداً. الحد الأقصى 5MB' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // إنشاء اسم ملف فريد
    const timestamp = Date.now();
    const extension = file.name.split('.').pop();
    const fileName = `upload_${timestamp}.${extension}`;

    // مسار حفظ الملف
    const uploadDir = join(process.cwd(), 'public', 'images', 'uploads');
    const filePath = join(uploadDir, fileName);

    // إنشاء مجلد uploads إذا لم يكن موجوداً
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // حفظ الملف
    await writeFile(filePath, buffer);

    // إرجاع رابط الصورة
    const imageUrl = `/images/uploads/${fileName}`;

    return NextResponse.json({
      success: true,
      imageUrl,
      message: 'تم رفع الصورة بنجاح'
    });

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء رفع الملف' },
      { status: 500 }
    );
  }
}
