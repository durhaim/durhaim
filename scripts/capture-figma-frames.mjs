import { chromium } from '@playwright/test';
import path from 'path';

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled']
  });
  const context = await browser.newContext({
    viewport: { width: 2560, height: 1600 },
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

  // We want to zoom into the left frame first
  // The left frame contains the full content!
  // Let's zoom to 100% or click on the left frame
  await page.mouse.click(200, 500);
  await page.waitForTimeout(500);
  await page.keyboard.press('Shift+2'); // zoom to selection
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_frame_left.png') });

  // Zoom into Frame 1 (right)
  await page.mouse.click(700, 500);
  await page.waitForTimeout(500);
  await page.keyboard.press('Shift+2');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_frame_right.png') });

  // Now let's do a detailed zoom on the left frame to get all text
  // Let's position the camera on the left frame and capture 3 vertical segments at 100% zoom
  await page.mouse.click(300, 500);
  await page.keyboard.press('Shift+2');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Shift+0'); // 100%
  await page.waitForTimeout(1000);

  // Pan top
  await page.mouse.wheel(0, -2000);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_left_part1.png') });

  await page.mouse.wheel(0, 700);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_left_part2.png') });

  await page.mouse.wheel(0, 700);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_left_part3.png') });

  await page.mouse.wheel(0, 700);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_left_part4.png') });

  console.log('Done capturing frame details!');
  await browser.close();
}

main().catch(console.error);
