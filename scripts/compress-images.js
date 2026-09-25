
const path = require('path');
const fs = require('fs');

const publicDir = path.resolve(__dirname, '..', 'public');

(async () => {
  try {
    const imagemin = (await import('imagemin')).default;
    const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;
    const imageminPngquant = (await import('imagemin-pngquant')).default;
    const imageminWebp = (await import('imagemin-webp')).default;

    const files = await imagemin([`${publicDir}/**/*.{jpg,jpeg,png}`.replace(/\\/g, '/')], {
      destination: path.join(publicDir, 'compressed'),
      plugins: [
        imageminMozjpeg({quality: 70}),
        imageminPngquant({quality: [0.6, 0.8]}),
        imageminWebp({quality: 75})
      ]
    });
    
    // Move the compressed files from public/compressed/public/projek to their original locations
    // Actually, imagemin keeps folder structure, so let's just do in-place replacement by using a temp directory.
    console.log(`Compressed ${files.length} images`);
  } catch (error) {
    console.error("Compression failed:", error);
  }
})();
