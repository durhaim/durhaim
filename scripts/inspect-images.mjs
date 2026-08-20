import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function main() {
  const dir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a/scratch';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  
  for (const f of files) {
    const p = path.join(dir, f);
    try {
      const meta = await sharp(p).metadata();
      console.log(`${f}: ${meta.width}x${meta.height}, format: ${meta.format}, size: ${fs.statSync(p).size}`);
    } catch (e) {
      console.log(`${f}: error ${e.message}`);
    }
  }
}

main();
