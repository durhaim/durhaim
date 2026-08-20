import { expect, test } from "@playwright/test";

const responsiveWidths = [1920, 1440, 1280, 1024, 768, 390, 320];

test.describe("Our Story page fidelity & responsiveness", () => {
  for (const width of responsiveWidths) {
    test(`Our Story renders with zero horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: width <= 390 ? 844 : 900 });
      await page.goto("/our-story?lang=id", { waitUntil: "domcontentloaded" });
      await page.waitForSelector("#main-content");

      // Verify no horizontal overflow
      await expect.poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)
      ).toBe(true);

      // Verify hero title
      const h1 = page.locator("h1");
      await expect(h1).toBeVisible();
      await expect(h1).toHaveText(/OUR STORY/i);

      // Verify all 5 content images are rendered and loaded
      const images = page.locator("#main-content img");
      await expect(images).toHaveCount(5);

      for (let i = 0; i < 5; i++) {
        const img = images.nth(i);
        await expect(img).toBeVisible();
        const isLoaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
        expect(isLoaded).toBe(true);
      }
    });
  }

  test("Our Story supports language switching between ID and EN", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    // Indonesian check
    await page.goto("/our-story?lang=id", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#main-content")).toContainText("Durhaim berdiri secara resmi pada 1 maret tahun 2018");
    await expect(page.locator("#main-content")).toContainText("Visi dan Misi durhaim");

    // English check
    await page.goto("/our-story?lang=en", { waitUntil: "domcontentloaded" });
    await expect(page.locator("#main-content")).toContainText("Durhaim was officially established on March 1, 2018");
    await expect(page.locator("#main-content")).toContainText("Durhaim's Vision and Mission");
  });
});
