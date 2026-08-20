import sharp from 'sharp';
import path from 'path';

async function main() {
  const heroPath = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story', 'hero-bg.jpg');
  const camoPath = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story', 'camo-pattern.jpg');

  const heroMeta = await sharp(heroPath).metadata();
  const camoMeta = await sharp(camoPath).metadata();

  console.log('Hero dimensions:', heroMeta.width, heroMeta.height);
  console.log('Camo dimensions:', camoMeta.width, camoMeta.height);
}

main().catch(console.error);
