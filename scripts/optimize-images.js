#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// مجلد الصور
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'optimized');

// إعدادات التحسين
const OPTIMIZATION_CONFIG = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  },
  webp: {
    quality: 85,
    effort: 6
  },
  avif: {
    quality: 80,
    effort: 9
  },
  png: {
    quality: 90,
    compressionLevel: 9,
    progressive: true
  }
};

// الأحجام المختلفة للصور المتجاوبة
const RESPONSIVE_SIZES = [320, 640, 768, 1024, 1280, 1536, 1920];

// إنشاء مجلد الإخراج إذا لم يكن موجوداً
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputDir, filename) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`تحسين: ${filename}`);
    console.log(`الحجم الأصلي: ${metadata.width}x${metadata.height}`);

    const baseName = path.parse(filename).name;
    const extension = path.parse(filename).ext.toLowerCase();

    // إنتاج صور بأحجام مختلفة
    for (const size of RESPONSIVE_SIZES) {
      if (size <= metadata.width) {
        // JPEG الأصلي محسن
        await image
          .resize(size, null, {
            withoutEnlargement: true,
            fastShrinkOnLoad: true
          })
          .jpeg(OPTIMIZATION_CONFIG.jpeg)
          .toFile(path.join(outputDir, `${baseName}-${size}w.jpg`));

        // WebP
        await image
          .resize(size, null, {
            withoutEnlargement: true,
            fastShrinkOnLoad: true
          })
          .webp(OPTIMIZATION_CONFIG.webp)
          .toFile(path.join(outputDir, `${baseName}-${size}w.webp`));

        // AVIF (للمتصفحات الحديثة جداً)
        try {
          await image
            .resize(size, null, {
              withoutEnlargement: true,
              fastShrinkOnLoad: true
            })
            .avif(OPTIMIZATION_CONFIG.avif)
            .toFile(path.join(outputDir, `${baseName}-${size}w.avif`));
        } catch (avifError) {
          console.warn(`تعذر إنتاج AVIF للحجم ${size}: ${avifError.message}`);
        }
      }
    }

    // إنتاج النسخة الأساسية المحسنة
    if (extension === '.jpg' || extension === '.jpeg') {
      await image
        .jpeg(OPTIMIZATION_CONFIG.jpeg)
        .toFile(path.join(outputDir, `${baseName}.jpg`));

      await image
        .webp(OPTIMIZATION_CONFIG.webp)
        .toFile(path.join(outputDir, `${baseName}.webp`));
    } else if (extension === '.png') {
      await image
        .png(OPTIMIZATION_CONFIG.png)
        .toFile(path.join(outputDir, `${baseName}.png`));

      await image
        .webp(OPTIMIZATION_CONFIG.webp)
        .toFile(path.join(outputDir, `${baseName}.webp`));
    }

    console.log(`✅ تم تحسين: ${filename}`);

  } catch (error) {
    console.error(`❌ خطأ في تحسين ${filename}:`, error.message);
  }
}

async function processDirectory() {
  try {
    const files = fs.readdirSync(IMAGES_DIR);
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    console.log(`🔍 العثور على ${imageFiles.length} صورة للتحسين...`);

    for (const file of imageFiles) {
      const inputPath = path.join(IMAGES_DIR, file);
      await optimizeImage(inputPath, OUTPUT_DIR, file);
    }

    // إنتاج تقرير التحسين
    generateOptimizationReport();

    console.log('\n✅ تم الانتهاء من تحسين جميع الصور!');
    console.log(`📁 الصور المحسنة في: ${OUTPUT_DIR}`);

  } catch (error) {
    console.error('❌ خطأ في معالجة المجلد:', error.message);
  }
}

function generateOptimizationReport() {
  const originalSize = getDirectorySize(IMAGES_DIR);
  const optimizedSize = getDirectorySize(OUTPUT_DIR);
  const savings = originalSize - optimizedSize;
  const percentage = ((savings / originalSize) * 100).toFixed(2);

  console.log('\n📊 تقرير التحسين:');
  console.log(`الحجم الأصلي: ${formatBytes(originalSize)}`);
  console.log(`الحجم المحسن: ${formatBytes(optimizedSize)}`);
  console.log(`التوفير: ${formatBytes(savings)} (${percentage}%)`);
}

function getDirectorySize(dirPath) {
  let totalSize = 0;
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    totalSize += stats.size;
  });

  return totalSize;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// تشغيل السكريبت
if (require.main === module) {
  processDirectory().catch(console.error);
}

module.exports = { optimizeImage, processDirectory };
