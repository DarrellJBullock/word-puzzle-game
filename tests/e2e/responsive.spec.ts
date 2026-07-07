import { test, expect } from "@playwright/test";
import { gotoPuzzle, wordButton } from "./helpers";

/**
 * Acceptance criterion 4: no horizontal scroll / broken layout from 375px up.
 * Checked at 375px against puzzles with the longest words/category names.
 */
test.describe("responsive layout at 375px", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  // [date, a distinctively long word on that day's board]
  const cases: [string, string][] = [
    ["2026-07-06", "PANCAKE"],
    ["2026-07-09", "PEPPERONI"], // PIZZA TOPPINGS + long "KITCHEN APPLIANCES"-style names
    ["2026-07-14", "WHEELBARROW"], // longest token in the bank
  ];

  for (const [date, longWord] of cases) {
    test(`no horizontal overflow on ${date}`, async ({ page }) => {
      await gotoPuzzle(page, date);
      await expect(wordButton(page, longWord)).toBeVisible();

      const overflow = await page.evaluate(() => {
        const el = document.documentElement;
        return { scrollWidth: el.scrollWidth, clientWidth: el.clientWidth };
      });
      expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth);
    });
  }
});
