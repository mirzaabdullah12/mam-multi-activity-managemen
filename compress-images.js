import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsPath = path.join(__dirname, 'src', 'assets');

async function compressAllImages() {
  try {
    console.log('Starting aggressive image compression...\n');
    
    const files = fs.readdirSync(assetsPath);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    
    for (const file of imageFiles) {
      const filePath = path.join(assetsPath, file);
      const ext = path.extname(file).toLowerCase();
      const baseName = path.basename(file, ext);
      const tempPath = path.join(assetsPath, `${baseName}-temp.jpg`);
      
      try {
        let pipeline = sharp(filePath);
        
        // Get image metadata
        const metadata = await pipeline.metadata();
        console.log(`Processing: ${file} (${metadata.width}x${metadata.height})`);
        
        // Resize to max 1200px width
        if (metadata.width > 1200) {
          pipeline = pipeline.resize(1200, 800, {
            fit: 'inside',
            withoutEnlargement: true
          });
        }
        
        // Compress to JPEG with quality 20
        await pipeline
          .jpeg({ quality: 20, mozjpeg: true, progressive: true })
          .toFile(tempPath);
        
        // Replace original with temp file
        fs.unlinkSync(filePath);
        
        const newExt = '.jpg';
        const newPath = path.join(assetsPath, `${baseName}${newExt}`);
        fs.renameSync(tempPath, newPath);
        
        const newSize = fs.statSync(newPath).size / 1024;
        console.log(`  → Compressed to ${newSize.toFixed(2)}KB\n`);
        
      } catch (err) {
        console.error(`  Error processing ${file}:`, err.message, '\n');
      }
    }
    
    // Final summary
    console.log('\n=== Final Image Summary ===');
    const finalFiles = fs.readdirSync(assetsPath);
    let totalSize = 0;
    finalFiles.forEach(file => {
      if (/\.(jpg|jpeg|png|svg)$/i.test(file)) {
        const filePath = path.join(assetsPath, file);
        const size = fs.statSync(filePath).size / 1024;
        totalSize += size;
        if (size < 100) {
          console.log(`${file}: ${size.toFixed(2)}KB ✓`);
        } else {
          console.log(`${file}: ${size.toFixed(2)}KB`);
        }
      }
    });
    console.log(`\nTotal: ${(totalSize / 1024).toFixed(2)}MB`);
    console.log('✓ Done!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

compressAllImages();
