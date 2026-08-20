import { chromium } from '@playwright/test';
import path from 'path';

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled']
  });
  const context = await browser.newContext({
    viewport: { width: 3840, height: 2160 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  const url = 'https://www.figma.com/design/485dTCU4qC6VdeVgjMvooW/Untitled?node-id=0-1&t=TOlo8ZEj18L0tsPJ-0';
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(6000);

  try {
    const optOut = page.getByRole('button', { name: /opt out/i });
    if (await optOut.isVisible()) await optOut.click();
  } catch (e) {}

  const screenshotDir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a';

  // Zoom to selection
  await page.keyboard.press('Shift+2');
  await page.waitForTimeout(2000);

  // In 3840x2160 viewport, the artboard will be super sharp and large!
  await page.screenshot({ path: path.join(screenshotDir, 'figma_4k_full.png') });

  // Now zoom in to 100% (Shift + 0)
  await page.keyboard.press('Shift+0');
  await page.waitForTimeout(2000);

  // Pan to top of left artboard
  // Let's drag canvas
  await page.mouse.move(1920, 1080);
  await page.keyboard.down('Space');
  await page.mouse.down();
  await page.mouse.move(1920 + 800, 1080 + 1000, { steps: 5 });
  await page.mouse.up();
  await page.keyboard.up('Space');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_100_top.png') });

  // Drag up to see bottom
  await page.keyboard.down('Space');
  await page.mouse.down();
  await page.mouse.move(1920, 1080 - 1000, { steps: 5 });
  await page.mouse.up();
  await page.keyboard.up('Space');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_100_bot.png') });

  console.log('4K captures complete!');
  await browser.close();
}

main().catch(console.error);
