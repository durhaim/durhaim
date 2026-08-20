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

  // Dismiss cookie banner
  try {
    const optOut = page.getByRole('button', { name: /opt out/i });
    if (await optOut.isVisible()) await optOut.click();
  } catch (e) {}

  // Zoom to selection
  await page.keyboard.press('Shift+2');
  await page.waitForTimeout(2000);

  // Zoom to 100%
  await page.keyboard.press('Shift+0');
  await page.waitForTimeout(2000);

  const screenshotDir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a';

  // Let's capture at 100% zoom with various wheel offsets
  // First, scroll up a bit
  await page.mouse.wheel(0, -1000);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(screenshotDir, 'figma_scroll_0.png') });

  // Scroll down in increments
  for (let i = 1; i <= 6; i++) {
    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotDir, `figma_scroll_${i}.png`) });
  }

  console.log('Scroll captures completed!');
  await browser.close();
}

main().catch(console.error);
