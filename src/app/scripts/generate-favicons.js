#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// مسارات الملفات
const INPUT_LOGO = path.join(__dirname, '..', 'public', 'images', 'nightclubegyptlogo.jpg');
const OUTPUT_DIR = path.join(__dirname, '..', 'public');

// الأحجام المطلوبة للأيقونات
const FAVICON_SIZES = [
  { size: 48, name: 'favicon-48x48.png' },
  { size: 512, name: 'favicon-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' }, // Apple Touch Icon
  { size: 192, name: 'android-chrome-192x192.png' }, // Android Chrome
  { size: 16, name: 'favicon-16x16.png' }, // Standard favicon
  { size: 32, name: 'favicon-32x32.png' }, // Standard favicon
];

async function generateFavicons() {
  try {
    console.log('🎨 بدء إنتاج الأيقونات...');

    // قراءة الصورة الأصلية
    const inputBuffer = fs.readFileSync(INPUT_LOGO);

    for (const { size, name } of FAVICON_SIZES) {
      console.log(`🔧 إنتاج: ${name} (${size}x${size})`);

      // إنشاء PNG مع خلفية شفافة
      await sharp(inputBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // خلفية شفافة
        })
        .png({
          quality: 100,
          compressionLevel: 9,
          progressive: true
        })
        .toFile(path.join(OUTPUT_DIR, name));

      // إنشاء WebP مع خلفية شفافة للمتصفحات الحديثة
      const webpName = name.replace('.png', '.webp');
      await sharp(inputBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 } // خلفية شفافة
        })
        .webp({
          quality: 90,
          effort: 6,
          lossless: false
        })
        .toFile(path.join(OUTPUT_DIR, webpName));

      console.log(`✅ تم إنتاج: ${name} و ${webpName}`);
    }

    // إنشاء favicon.ico متعدد الأحجام
    console.log('🔧 إنتاج favicon.ico...');
    await sharp(inputBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'favicon.ico'));

    // إنشاء صورة مربعة للـ SEO (1200x1200) مع خلفية شفافة
    console.log('🔧 إنتاج صورة SEO مربعة...');
    await sharp(inputBuffer)
      .resize(1200, 1200, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({
        quality: 100,
        compressionLevel: 9
      })
      .toFile(path.join(OUTPUT_DIR, 'logo-seo-1200x1200.png'));

    await sharp(inputBuffer)
      .resize(1200, 1200, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({
        quality: 90,
        effort: 6
      })
      .toFile(path.join(OUTPUT_DIR, 'logo-seo-1200x1200.webp'));

    console.log('\n🎉 تم إنتاج جميع الأيقونات بنجاح!');
    console.log('\n📋 الملفات المنتجة:');

    FAVICON_SIZES.forEach(({ name }) => {
      console.log(`✓ ${name}`);
      console.log(`✓ ${name.replace('.png', '.webp')}`);
    });

    console.log('✓ favicon.ico');
    console.log('✓ logo-seo-1200x1200.png');
    console.log('✓ logo-seo-1200x1200.webp');

    // إنشاء تقرير الأحجام
    generateSizeReport();

  } catch (error) {
    console.error('❌ خطأ في إنتاج الأيقونات:', error.message);
    process.exit(1);
  }
}

function generateSizeReport() {
  console.log('\n📊 تقرير أحجام الملفات:');

  const filesToCheck = [
    'favicon-48x48.png',
    'favicon-512x512.png',
    'logo-seo-1200x1200.png',
    'apple-touch-icon.png'
  ];

  filesToCheck.forEach(filename => {
    const filePath = path.join(OUTPUT_DIR, filename);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`${filename}: ${sizeKB} KB`);
    }
  });
}

// تحقق من وجود الصورة الأصلية
if (!fs.existsSync(INPUT_LOGO)) {
  console.error(`❌ لم يتم العثور على الصورة الأصلية: ${INPUT_LOGO}`);
  process.exit(1);
}

// تشغيل المولد
if (require.main === module) {
  generateFavicons().catch(console.error);
}

module.exports = { generateFavicons };
