
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const path = require('path');
const fs = require('fs');

const publicDir = path.resolve(__dirname, '..', 'public');

(async () => {
  const files = await imagemin([`${publicDir}/**/*.{jpg,jpeg,png}`], {
    destination: publicDir,
    plugins: [
      imageminMozjpeg({quality: 70}),
      imageminPngquant({quality: [0.6,0.8]}),
      imageminWebp({quality: 75})
    ]
  });
  console.log(`Compressed ${files.length} images`);
})();
