import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled']
  });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  const url = 'https://www.figma.com/design/485dTCU4qC6VdeVgjMvooW/Untitled?node-id=0-1&t=TOlo8ZEj18L0tsPJ-0';
  console.log('Navigating to Figma URL:', url);

  const responses = [];
  page.on('response', async (response) => {
    const resUrl = response.url();
    if (resUrl.includes('figma.com') && (resUrl.includes('api') || resUrl.includes('graphql') || resUrl.includes('images'))) {
      responses.push({ url: resUrl, status: response.status() });
    }
  });

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  } catch (e) {
    console.log('Goto finished with note:', e.message);
  }

  console.log('Waiting for canvas to render...');
  await page.waitForTimeout(10000);

  const screenshotDir = 'C:/Users/yehez/.gemini/antigravity/brain/a57a3655-f04b-4500-9ce5-e8d08a376d3a';
  const screenshotPath = path.join(screenshotDir, 'figma_capture.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log('Screenshot saved to:', screenshotPath);
  console.log('Title:', await page.title());
  console.log('Responses count:', responses.length);

  await browser.close();
}

main().catch(console.error);
