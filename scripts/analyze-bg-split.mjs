import sharp from 'sharp';
import path from 'path';

async function main() {
  const bgPath = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story', 'bg-camo.jpg');
  const meta = await sharp(bgPath).metadata();
  console.log(`Original bg-camo.jpg dimensions: ${meta.width}x${meta.height}`);

  // Let's generate a slice every 200px or analyze where the hero ends and camo starts
  // In the 1816 x 4096 image:
  // Let's extract multiple test slices to see the exact transition boundary.
  const outDir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a/scratch';
  
  for (let h = 500; h <= 1000; h += 100) {
    await sharp(bgPath)
      .extract({ left: 0, top: 0, width: meta.width, height: h })
      .toFile(path.join(outDir, `hero_test_${h}.jpg`));
  }
  
  console.log('Saved test slices 500 to 1000');
}

main().catch(console.error);
