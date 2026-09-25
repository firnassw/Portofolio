const path = require('path');
const fs = require('fs');

const publicDir = path.resolve(__dirname, '..', 'public');

(async () => {
  try {
    const imagemin = (await import('imagemin')).default;
    const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;
    const imageminPngquant = (await import('imagemin-pngquant')).default;

    // Use forward slashes for glob pattern, otherwise it fails on Windows
    const globPattern = publicDir.replace(/\\/g, '/') + '/**/*.{jpg,jpeg,png}';

    const files = await imagemin([globPattern], {
      // Don't specify destination here, we'll write them back manually
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        imageminPngquant({ quality: [0.6, 0.8] })
      ]
    });

    for (const file of files) {
      // imagemin returns { data: Buffer, sourcePath: string, destinationPath: string }
      if (file.sourcePath) {
        fs.writeFileSync(file.sourcePath, file.data);
        console.log(`Optimized: ${file.sourcePath}`);
      }
    }

    console.log(`Successfully compressed ${files.length} images.`);
  } catch (error) {
    console.error("Compression failed:", error);
  }
})();
