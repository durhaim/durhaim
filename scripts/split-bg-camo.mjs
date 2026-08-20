import sharp from 'sharp';
import path from 'path';

async function main() {
  const bgPath = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story', 'bg-camo.jpg');
  const targetDir = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story');
  const meta = await sharp(bgPath).metadata();

  const splitY = 760;

  // 1. Hero background: top side section for title and sub title
  await sharp(bgPath)
    .extract({ left: 0, top: 0, width: meta.width, height: splitY })
    .toFile(path.join(targetDir, 'hero-bg.jpg'));
  console.log(`Saved hero-bg.jpg (${meta.width}x${splitY})`);

  // 2. Camo background: bottom side section for the content
  await sharp(bgPath)
    .extract({ left: 0, top: splitY, width: meta.width, height: meta.height - splitY })
    .toFile(path.join(targetDir, 'camo-pattern.jpg'));
  console.log(`Saved camo-pattern.jpg (${meta.width}x${meta.height - splitY})`);

  // Also create a test preview of the top and bottom in scratch
  const scratchDir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a/scratch';
  await sharp(bgPath)
    .extract({ left: 0, top: splitY, width: meta.width, height: 800 })
    .toFile(path.join(scratchDir, 'camo_preview_top.jpg'));
}

main().catch(console.error);
