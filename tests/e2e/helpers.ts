import { Page, expect } from "@playwright/test";

/**
 * The first puzzle in the bank (lib/puzzles.ts), dated 2026-07-06. Tests pin
 * the browser clock to this date so `getPuzzleForToday(new Date())` — which
 * runs client-side at mount — always resolves to this exact board, regardless
 * of the machine's real date. Keep in sync with lib/puzzles.ts[0].
 */
export const PUZZLE_ONE = {
  date: "2026-07-06",
  categories: {
    "BREAKFAST FOODS": ["WAFFLE", "OMELET", "BAGEL", "PANCAKE"],
    "CHESS PIECES": ["BISHOP", "KNIGHT", "ROOK", "PAWN"],
    "___ FLY": ["BUTTER", "DRAGON", "FIRE", "MAY"],
    "SILENT B": ["DEBT", "DOUBT", "LAMB", "THUMB"],
  } as const,
};

export const ALL_WORDS = Object.values(PUZZLE_ONE.categories).flat();
export const CATEGORY_NAMES = Object.keys(PUZZLE_ONE.categories);

/** A local-time Date for a given YYYY-MM-DD, at midday to dodge TZ edges. */
export function dateAt(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 12, 0, 0);
}

/**
 * Pin the clock to a puzzle date, load the app, and wait for the client-only
 * grid to replace the loading skeleton. `setFixedTime` freezes `Date` while
 * leaving real timers running, so React/mount timers still fire normally.
 */
export async function gotoPuzzle(page: Page, isoDate: string = PUZZLE_ONE.date) {
  await page.clock.setFixedTime(dateAt(isoDate));
  await page.goto("/");
  // Skeleton is aria-busy; wait for a real word tile to confirm Game mounted.
  await expect(page.getByRole("button", { name: "Shuffle" })).toBeVisible();
}

export function wordButton(page: Page, word: string) {
  return page.getByRole("button", { name: word, exact: true });
}

export async function selectWords(page: Page, words: readonly string[]) {
  for (const word of words) {
    await wordButton(page, word).click();
  }
}

export async function submit(page: Page) {
  await page.getByRole("button", { name: "Submit", exact: true }).click();
}

export async function deselectAll(page: Page) {
  await page.getByRole("button", { name: "Deselect All", exact: true }).click();
}

/** Selects a full category and submits it as a (correct) guess. */
export async function solveCategory(page: Page, words: readonly string[]) {
  await selectWords(page, words);
  await submit(page);
}

/** Reads and parses the persisted game state for a puzzle date from localStorage. */
export async function readPersisted(page: Page, isoDate: string = PUZZLE_ONE.date) {
  const raw = await page.evaluate(
    (key) => window.localStorage.getItem(key),
    `word-puzzle-game:v1:${isoDate}`,
  );
  return raw ? JSON.parse(raw) : null;
}
