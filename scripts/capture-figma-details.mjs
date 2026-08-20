import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled']
  });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1200 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  const imageRequests = [];
  page.on('response', async (response) => {
    const url = response.url();
    const ct = response.headers()['content-type'] || '';
    if (ct.startsWith('image/') || url.includes('figma-alpha-api') || url.includes('images.figma.com') || url.includes('/images/')) {
      imageRequests.push({ url, status: response.status(), contentType: ct });
      // If it's an image, let's save it
      try {
        const buffer = await response.body();
        if (buffer.length > 5000) { // filter out small icons
          const id = Math.random().toString(36).substring(7);
          const ext = ct.includes('jpeg') || ct.includes('jpg') ? 'jpg' : ct.includes('png') ? 'png' : 'bin';
          const savePath = path.join('C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a/scratch', `figma_img_${id}_${buffer.length}.${ext}`);
          fs.mkdirSync(path.dirname(savePath), { recursive: true });
          fs.writeFileSync(savePath, buffer);
        }
      } catch (e) {}
    }
  });

  const url = 'https://www.figma.com/design/485dTCU4qC6VdeVgjMvooW/Untitled?node-id=0-1&t=TOlo8ZEj18L0tsPJ-0';
  console.log('Navigating to Figma URL:', url);

  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(6000);

  // Click zoom dropdown and select 100% or Zoom to Fit
  // Let's press Shift+1 (Zoom to fit)
  await page.keyboard.press('Shift+1');
  await page.waitForTimeout(2000);

  const screenshotDir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a';
  await page.screenshot({ path: path.join(screenshotDir, 'figma_fit.png') });

  // Zoom to 50% or 100%
  // Let's use the zoom menu if possible, or keyboard:
  // In Figma: Shift + 0 is 100%, Shift + 2 is zoom to selection
  await page.keyboard.press('Shift+0');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_100pct.png') });

  // Let's also check if we can inspect canvas coordinates and take multiple crops
  // Let's zoom to selection and take vertical pan slices
  await page.keyboard.press('Shift+2');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_sel_overview.png') });

  // Let's zoom in twice from selection
  await page.keyboard.press('Control+=');
  await page.waitForTimeout(500);
  await page.keyboard.press('Control+=');
  await page.waitForTimeout(1000);

  // Pan from top to bottom
  // In Figma, holding Space and dragging pans the canvas
  const canvas = await page.$('canvas');
  if (canvas) {
    const box = await canvas.boundingBox();
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;

    // Pan up to top
    // Drag down to reveal top
    await page.mouse.move(cx, cy);
    await page.keyboard.down('Space');
    await page.mouse.down();
    await page.mouse.move(cx, cy + 800, { steps: 10 });
    await page.mouse.up();
    await page.keyboard.up('Space');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotDir, 'figma_slice_1.png') });

    for (let s = 2; s <= 6; s++) {
      await page.keyboard.down('Space');
      await page.mouse.down();
      await page.mouse.move(cx, cy - 400, { steps: 10 });
      await page.mouse.up();
      await page.keyboard.up('Space');
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(screenshotDir, `figma_slice_${s}.png`) });
    }
  }

  console.log('Saved images count:', imageRequests.length);
  await browser.close();
}

main().catch(console.error);
