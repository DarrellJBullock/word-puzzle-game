import { test, expect } from "@playwright/test";
import {
  PUZZLE_ONE,
  gotoPuzzle,
  wordButton,
  selectWords,
  submit,
  solveCategory,
  readPersisted,
} from "./helpers";

const C = PUZZLE_ONE.categories;

test.describe("localStorage persistence (acceptance criterion 2)", () => {
  test("in-progress mistakes and solved categories survive a refresh", async ({ page }) => {
    await gotoPuzzle(page);

    // One correct category and one wrong guess.
    await solveCategory(page, C["CHESS PIECES"]);
    await selectWords(page, ["WAFFLE", "DRAGON", "LAMB", "OMELET"]); // wrong, not one-away
    await submit(page);

    const before = await readPersisted(page);
    expect(before.mistakes).toBe(1);
    expect(before.solvedCategoryNames).toContain("CHESS PIECES");
    expect(before.status).toBe("playing");

    await page.reload();
    await expect(page.getByRole("button", { name: "Shuffle" })).toBeVisible();

    // Persisted state is unchanged after reload...
    const after = await readPersisted(page);
    expect(after.mistakes).toBe(1);
    expect(after.solvedCategoryNames).toContain("CHESS PIECES");

    // ...and the UI reflects it: solved row present, its tiles gone.
    await expect(page.getByText("CHESS PIECES")).toBeVisible();
    for (const word of C["CHESS PIECES"]) {
      await expect(wordButton(page, word)).toHaveCount(0);
    }
  });

  test("a finished (won) game stays finished after refresh", async ({ page }) => {
    await gotoPuzzle(page);
    for (const words of Object.values(C)) {
      await solveCategory(page, words);
    }
    expect((await readPersisted(page)).status).toBe("won");

    await page.reload();
    await expect(page.getByRole("button", { name: "Shuffle" })).toBeVisible();
    expect((await readPersisted(page)).status).toBe("won");
  });
});
