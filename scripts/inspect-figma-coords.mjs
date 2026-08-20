import { chromium } from '@playwright/test';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  const url = 'https://www.figma.com/design/485dTCU4qC6VdeVgjMvooW/Untitled?node-id=0-1&t=TOlo8ZEj18L0tsPJ-0';
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(6000);

  // Let's inspect if we can query text or layers
  // In Figma Web, when we click on an element, inspect panel or dev mode or tooltip might show info
  // Let's click on the left frame title
  await page.mouse.click(960, 300);
  await page.waitForTimeout(1000);

  await browser.close();
}

main().catch(console.error);
