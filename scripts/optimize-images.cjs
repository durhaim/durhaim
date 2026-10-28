const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  }
  return arrayOfFiles;
}

async function optimizeImage(filePath) {
  const origBuffer = fs.readFileSync(filePath);
  const origSize = origBuffer.length;
  // Skip tiny files (< 8 KB)
  if (origSize < 8 * 1024) {
    return { skipped: true, origSize, newSize: origSize };
  }

  const ext = path.extname(filePath).toLowerCase();
  const isHomepageBg = filePath.includes('homepage') || filePath.includes('main-background');
  const maxDim = isHomepageBg ? 1600 : 1400;

  try {
    const meta = await sharp(origBuffer).metadata();
    let pipeline = sharp(origBuffer).rotate();

    const needsResize = (meta.width && meta.width > maxDim) || (meta.height && meta.height > maxDim);
    if (needsResize) {
      pipeline = pipeline.resize({
        width: maxDim,
        height: maxDim,
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    let buf;
    if (ext === '.webp') {
      buf = await pipeline.webp({ quality: 80, effort: 4 }).toBuffer();
    } else if (ext === '.png') {
      buf = await pipeline.png({ compressionLevel: 8, quality: 80 }).toBuffer();
    } else if (ext === '.jpg' || ext === '.jpeg') {
      buf = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    } else {
      return { skipped: true, origSize, newSize: origSize };
    }

    // Only overwrite if it actually saved space (at least 2% smaller)
    if (buf && buf.length < origSize * 0.98) {
      fs.writeFileSync(filePath, buf);
      return { success: true, origSize, newSize: buf.length, saved: origSize - buf.length };
    }

    return { unchanged: true, origSize, newSize: origSize };
  } catch (err) {
    console.error('Failed to optimize:', filePath, err.message);
    return { error: true, origSize, newSize: origSize };
  }
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const allFiles = getAllFiles(publicDir);
  const imageFiles = allFiles.filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f));

  console.log(`Optimizing ${imageFiles.length} images in public directory...`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let optimizedCount = 0;

  const BATCH_SIZE = 8;
  for (let i = 0; i < imageFiles.length; i += BATCH_SIZE) {
    const batch = imageFiles.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(batch.map((f) => optimizeImage(f)));
    for (const r of results) {
      totalOriginal += r.origSize;
      totalOptimized += r.newSize;
      if (r.success) optimizedCount++;
    }
    const percent = Math.round(((i + batch.length) / imageFiles.length) * 100);
    process.stdout.write(`\rProgress: ${percent}% (${i + batch.length}/${imageFiles.length})`);
  }

  const savedBytes = totalOriginal - totalOptimized;
  const savedPercent = ((savedBytes / totalOriginal) * 100).toFixed(1);
  console.log('\n\n--- Optimization Summary ---');
  console.log(`Images processed: ${imageFiles.length}`);
  console.log(`Images shrunk:    ${optimizedCount}`);
  console.log(`Current total:    ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Additional saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB (${savedPercent}% reduction)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
