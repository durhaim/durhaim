import fs from 'fs';
import path from 'path';

const scratchDir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a/scratch';
const targetDir = path.join(process.cwd(), 'public', 'storefront', 'figma', 'our-story');

fs.mkdirSync(targetDir, { recursive: true });

const mappings = {
  'bg-camo.jpg': 'figma_img_c1jsgn_1644654.jpg',
  'workshop-1.jpg': 'figma_img_t7kcb_379367.jpg',
  'workshop-2.jpg': 'figma_img_4zwdyr_161933.jpg',
  'workshop-3.jpg': 'figma_img_pkga7n_354175.jpg',
  'rd-office.jpg': 'figma_img_v6qgx_355288.jpg',
  'studio-setup.jpg': 'figma_img_r8rhx_86470.jpg',
};

for (const [targetName, sourceName] of Object.entries(mappings)) {
  const sourcePath = path.join(scratchDir, sourceName);
  const targetPath = path.join(targetDir, targetName);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${sourceName} -> ${targetName} (${fs.statSync(targetPath).size} bytes)`);
  } else {
    console.error(`Missing source: ${sourcePath}`);
  }
}
