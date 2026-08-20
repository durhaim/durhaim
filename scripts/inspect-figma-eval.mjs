import { chromium } from '@playwright/test';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  const url = 'https://www.figma.com/design/485dTCU4qC6VdeVgjMvooW/Untitled?node-id=0-1&t=TOlo8ZEj18L0tsPJ-0';
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(6000);

  // Check if there are canvas elements or texts or node data in memory
  const info = await page.evaluate(() => {
    return {
      title: document.title,
      textNodes: Array.from(document.querySelectorAll('*')).map(el => el.innerText).filter(t => t && t.length > 5 && t.length < 200).slice(0, 30)
    };
  });
  console.log('Evaluated info:', JSON.stringify(info, null, 2));

  await browser.close();
}

main().catch(console.error);
