import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsPath = './src/assets';

// First compress JPGs and PNGs with aggressive settings
async function compressAssets() {
  try {
    console.log('Starting image compression...');
    
    // JPG compression - very aggressive for sizes < 100KB
    await imagemin([`${assetsPath}/*.jpg`, `${assetsPath}/*.jpeg`], {
      destination: assetsPath,
      plugins: [
        imageminMozjpeg({
          quality: 15,  // Extreme compression
          progressive: true
        })
      ]
    });
    
    console.log('✓ JPG images compressed');
    
    // PNG compression
    await imagemin([`${assetsPath}/*.png`], {
      destination: assetsPath,
      plugins: [
        imageminPngquant({
          quality: [0.2, 0.3],  // Even lower quality range
          strip: true
        })
      ]
    });
    
    console.log('✓ PNG images compressed');
    
    // Log final sizes
    const files = fs.readdirSync(assetsPath);
    console.log('\nFinal file sizes:');
    files.forEach(file => {
      const filePath = path.join(assetsPath, file);
      if (fs.statSync(filePath).isFile()) {
        const size = (fs.statSync(filePath).size / 1024).toFixed(2);
        console.log(`  ${file}: ${size}KB`);
      }
    });
    
    console.log('\n✓ Compression complete!');
  } catch (error) {
    console.error('Error during compression:', error);
  }
}

compressAssets();
