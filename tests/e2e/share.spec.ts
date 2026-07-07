import { test, expect } from "@playwright/test";
import {
  PUZZLE_ONE,
  ALL_WORDS,
  CATEGORY_NAMES,
  gotoPuzzle,
  solveCategory,
} from "./helpers";

const C = PUZZLE_ONE.categories;

test.describe("share result (acceptance criterion 3: no answer leakage)", () => {
  test("share summary contains a score and emoji but no words or category names", async ({
    page,
  }) => {
    await gotoPuzzle(page);
    for (const words of Object.values(C)) {
      await solveCategory(page, words);
    }

    const shareText = (await page.getByRole("dialog").locator("pre").innerText()).trim();

    // It DOES contain the abstract summary...
    expect(shareText).toContain(`Word Puzzle ${PUZZLE_ONE.date}`);
    expect(shareText).toContain("Solved it!");
    expect(shareText).toContain("0/4 mistakes");
    expect(shareText).toMatch(/[🟨🟩🟦🟪]/u);

    // ...and leaks NOTHING about the actual content.
    for (const word of ALL_WORDS) {
      expect(shareText, `share text must not contain the word "${word}"`).not.toContain(word);
    }
    for (const name of CATEGORY_NAMES) {
      expect(shareText, `share text must not contain category "${name}"`).not.toContain(name);
    }
  });

  test("copy button confirms it copied", async ({ page }) => {
    await gotoPuzzle(page);
    for (const words of Object.values(C)) {
      await solveCategory(page, words);
    }

    const copyButton = page.getByRole("button", { name: "Copy Result" });
    await copyButton.click();
    await expect(page.getByRole("button", { name: "Copied!" })).toBeVisible();

    // And what actually landed on the clipboard also leaks nothing.
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());
    for (const word of ALL_WORDS) {
      expect(clipboard).not.toContain(word);
    }
  });
});
