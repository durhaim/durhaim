import sharp from 'sharp';
import path from 'path';

async function main() {
  const input = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a/scratch/figma_img_c1jsgn_1644654.jpg';
  const meta = await sharp(input).metadata();
  console.log('bg-camo metadata:', meta);

  // The image is 1816 x 4096.
  // In the Figma design, the hero banner is at the top.
  // Let's extract the hero portion: 0 to ~700 height
  const heroPath = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story', 'hero-bg.jpg');
  await sharp(input)
    .extract({ left: 0, top: 0, width: meta.width, height: 750 })
    .toFile(heroPath);
  console.log('Saved hero-bg.jpg');

  // Let's extract the camo texture: from 700 downwards
  const camoPath = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story', 'camo-pattern.jpg');
  await sharp(input)
    .extract({ left: 0, top: 700, width: meta.width, height: meta.height - 700 })
    .toFile(camoPath);
  console.log('Saved camo-pattern.jpg');

  // Let's also properly copy the correct workshop images:
  // workshop-1: yblqg_306620.jpg (eye-level station)
  // workshop-2: t7kcb_379367.jpg (overhead)
  // workshop-3: pkga7n_354175.jpg (needle stitching)
  const dir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a/scratch';
  const outDir = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story');

  await sharp(path.join(dir, 'figma_img_yblqg_306620.jpg')).toFile(path.join(outDir, 'workshop-1.jpg'));
  await sharp(path.join(dir, 'figma_img_t7kcb_379367.jpg')).toFile(path.join(outDir, 'workshop-2.jpg'));
  await sharp(path.join(dir, 'figma_img_pkga7n_354175.jpg')).toFile(path.join(outDir, 'workshop-3.jpg'));
  await sharp(path.join(dir, 'figma_img_v6qgx_355288.jpg')).toFile(path.join(outDir, 'rd-office.jpg'));
  await sharp(path.join(dir, 'figma_img_r8rhx_86470.jpg')).toFile(path.join(outDir, 'studio-setup.jpg'));

  console.log('Assets processed and cropped successfully!');
}

main().catch(console.error);
