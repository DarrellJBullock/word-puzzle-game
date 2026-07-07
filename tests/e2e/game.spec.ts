import { test, expect } from "@playwright/test";
import {
  PUZZLE_ONE,
  ALL_WORDS,
  gotoPuzzle,
  wordButton,
  selectWords,
  submit,
  deselectAll,
  solveCategory,
} from "./helpers";

const C = PUZZLE_ONE.categories;

test.describe("core game mechanics", () => {
  test.beforeEach(async ({ page }) => {
    await gotoPuzzle(page);
  });

  test("renders all 16 word tiles once the client grid mounts", async ({ page }) => {
    for (const word of ALL_WORDS) {
      await expect(wordButton(page, word)).toBeVisible();
    }
    // Submit starts disabled with nothing selected.
    await expect(page.getByRole("button", { name: "Submit", exact: true })).toBeDisabled();
  });

  test("selecting a word marks it pressed; deselecting clears it", async ({ page }) => {
    const waffle = wordButton(page, "WAFFLE");
    await expect(waffle).toHaveAttribute("aria-pressed", "false");
    await waffle.click();
    await expect(waffle).toHaveAttribute("aria-pressed", "true");
    await waffle.click();
    await expect(waffle).toHaveAttribute("aria-pressed", "false");
  });

  test("caps selection at 4 — a 5th word is ignored", async ({ page }) => {
    await selectWords(page, C["BREAKFAST FOODS"]); // 4 selected
    await expect(page.locator('button[aria-pressed="true"]')).toHaveCount(4);
    await expect(page.getByRole("button", { name: "Submit", exact: true })).toBeEnabled();

    // A 5th selection must not register.
    await wordButton(page, "BISHOP").click();
    await expect(wordButton(page, "BISHOP")).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator('button[aria-pressed="true"]')).toHaveCount(4);
  });

  test("a correct guess locks the category and removes its tiles", async ({ page }) => {
    await solveCategory(page, C["BREAKFAST FOODS"]);

    // Solved row (name + words) is revealed...
    await expect(page.getByText("BREAKFAST FOODS")).toBeVisible();
    // ...and the four tiles are gone from the playable grid.
    for (const word of C["BREAKFAST FOODS"]) {
      await expect(wordButton(page, word)).toHaveCount(0);
    }
    // 12 tiles remain, selection cleared, no mistakes.
    await expect(page.locator('button[aria-pressed]')).toHaveCount(12);
    await expect(page.locator('button[aria-pressed="true"]')).toHaveCount(0);
  });

  test("a fully wrong guess shows 'Not quite.' feedback", async ({ page }) => {
    // One word from each category — never a match and never one-away.
    await selectWords(page, ["WAFFLE", "BISHOP", "BUTTER", "DEBT"]);
    await submit(page);
    await expect(page.getByText("Not quite.")).toBeVisible();
  });

  test("a three-of-four guess shows 'One away!' feedback", async ({ page }) => {
    await selectWords(page, ["WAFFLE", "OMELET", "BAGEL", "BISHOP"]); // 3 breakfast + 1 chess
    await submit(page);
    await expect(page.getByText("One away!")).toBeVisible();
  });

  test("solving all four categories wins the game", async ({ page }) => {
    await solveCategory(page, C["BREAKFAST FOODS"]);
    await solveCategory(page, C["CHESS PIECES"]);
    await solveCategory(page, C["___ FLY"]);
    await solveCategory(page, C["SILENT B"]);

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("heading", { name: "Nice work!" })).toBeVisible();
  });

  test("four wrong guesses loses and reveals every answer", async ({ page }) => {
    // Four cross-category selections: each wrong, none one-away.
    const wrongGuesses = [
      ["WAFFLE", "BISHOP", "BUTTER", "DEBT"],
      ["OMELET", "KNIGHT", "DRAGON", "DOUBT"],
      ["BAGEL", "ROOK", "FIRE", "LAMB"],
      ["PANCAKE", "PAWN", "MAY", "THUMB"],
    ];
    for (const [i, guess] of wrongGuesses.entries()) {
      await selectWords(page, guess);
      await submit(page);
      // Wrong guesses keep the selection; clear it before the next one.
      // Skip after the final guess — the game is over and the control is disabled.
      if (i < wrongGuesses.length - 1) await deselectAll(page);
    }

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("heading", { name: "So close!" })).toBeVisible();
    // Loss reveals all four category names.
    for (const name of Object.keys(C)) {
      await expect(dialog.getByText(name, { exact: true })).toBeVisible();
    }
  });
});
