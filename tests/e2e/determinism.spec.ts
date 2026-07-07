import { test, expect } from "@playwright/test";
import { gotoPuzzle, wordButton } from "./helpers";

/**
 * Acceptance criterion 5: the puzzle is a deterministic function of the
 * calendar date (resolved client-side). Pinning the clock to a date must
 * always yield that date's board; out-of-range dates fall back to puzzle 1.
 */
test.describe("deterministic daily puzzle selection", () => {
  const byDate: [string, string][] = [
    ["2026-07-06", "WAFFLE"], // puzzle 1
    ["2026-07-09", "PEPPERONI"], // puzzle 4
    ["2026-07-14", "WHEELBARROW"], // puzzle 9
  ];

  for (const [date, signatureWord] of byDate) {
    test(`${date} resolves to its own board`, async ({ page }) => {
      await gotoPuzzle(page, date);
      await expect(wordButton(page, signatureWord)).toBeVisible();
    });
  }

  test("a date outside the bank falls back to the first puzzle", async ({ page }) => {
    await gotoPuzzle(page, "2099-01-01");
    await expect(wordButton(page, "WAFFLE")).toBeVisible();
  });
});
