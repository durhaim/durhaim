import { chromium } from '@playwright/test';
import path from 'path';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const viewports = [
    { name: '1920', width: 1920, height: 1080 },
    { name: '1440', width: 1440, height: 900 },
    { name: '1024', width: 1024, height: 768 },
    { name: '768', width: 768, height: 1024 },
    { name: '390', width: 390, height: 844 },
    { name: '320', width: 320, height: 640 },
  ];

  const screenshotDir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a';

  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    await page.goto('http://localhost:3000/our-story?lang=id', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('#main-content', { timeout: 30000 });
    await page.waitForTimeout(1000);

    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    console.log(`Viewport ${vp.name}px - horizontal overflow: ${hasOverflow}`);

    await page.screenshot({ path: path.join(screenshotDir, `rendered_our_story_${vp.name}.png`), fullPage: true });
    await context.close();
  }

  // Also take one in English
  const contextEn = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const pageEn = await contextEn.newPage();
  await pageEn.goto('http://localhost:3000/our-story?lang=en', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await pageEn.waitForSelector('#main-content', { timeout: 30000 });
  await pageEn.waitForTimeout(1000);
  await pageEn.screenshot({ path: path.join(screenshotDir, 'rendered_our_story_1440_en.png'), fullPage: true });
  await contextEn.close();

  console.log('Screenshots completed!');
  await browser.close();
}

main().catch(console.error);
