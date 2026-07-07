import { describe, it, expect } from "vitest";
import { getPuzzleForToday, PUZZLES } from "../puzzles";

describe("getPuzzleForToday determinism", () => {
  it("returns the puzzle matching an exact calendar date", () => {
    const puzzle = getPuzzleForToday(new Date(2026, 6, 6)); // July 6 2026, local
    expect(puzzle.date).toBe("2026-07-06");
  });

  it("is deterministic: same date in, same puzzle out, repeatedly", () => {
    const a = getPuzzleForToday(new Date(2026, 6, 7));
    const b = getPuzzleForToday(new Date(2026, 6, 7));
    expect(a).toEqual(b);
    expect(a.date).toBe("2026-07-07");
  });

  it("falls back to the first puzzle in the bank for dates outside the bank", () => {
    const puzzle = getPuzzleForToday(new Date(2099, 0, 1));
    expect(puzzle.date).toBe(PUZZLES[0].date);
  });

  it("every puzzle has exactly 4 categories of exactly 4 words", () => {
    for (const puzzle of PUZZLES) {
      expect(puzzle.categories.length).toBe(4);
      for (const category of puzzle.categories) {
        expect(category.words.length).toBe(4);
      }
    }
  });

  it("no word appears in more than one category within the same puzzle (structural, not semantic)", () => {
    for (const puzzle of PUZZLES) {
      const allWords = puzzle.categories.flatMap((c) => c.words);
      expect(new Set(allWords).size).toBe(allWords.length);
    }
  });
});

/**
 * Structural integrity guard for the puzzle bank. These are the invariants the
 * game engine and reveal UI assume; a typo in the content data should fail the
 * build here rather than ship broken. This does NOT (and cannot) verify
 * acceptance criterion #1 — "exactly one valid, unambiguous grouping" — which
 * is a human-judgment content review, not an automatable check.
 */
describe("puzzle bank structural integrity", () => {
  it("has at least one puzzle", () => {
    expect(PUZZLES.length).toBeGreaterThan(0);
  });

  it("uses each difficulty 1-4 exactly once per puzzle", () => {
    for (const puzzle of PUZZLES) {
      const diffs = puzzle.categories.map((c) => c.difficulty).sort();
      expect(diffs, `difficulties for ${puzzle.date}`).toEqual([1, 2, 3, 4]);
    }
  });

  it("has exactly 16 unique words per puzzle", () => {
    for (const puzzle of PUZZLES) {
      const words = puzzle.categories.flatMap((c) => c.words);
      expect(words.length, `word count for ${puzzle.date}`).toBe(16);
      expect(new Set(words).size, `unique words for ${puzzle.date}`).toBe(16);
    }
  });

  it("has non-empty, uppercase words and non-empty category names", () => {
    for (const puzzle of PUZZLES) {
      for (const category of puzzle.categories) {
        expect(category.name.trim().length, `category name in ${puzzle.date}`).toBeGreaterThan(0);
        for (const word of category.words) {
          expect(word.trim().length, `word in ${puzzle.date}`).toBeGreaterThan(0);
          expect(word, `word "${word}" in ${puzzle.date} should be uppercase`).toBe(word.toUpperCase());
        }
      }
    }
  });

  it("uses valid YYYY-MM-DD dates that are unique across the bank", () => {
    const seen = new Set<string>();
    for (const puzzle of PUZZLES) {
      expect(puzzle.date, "date format").toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(seen.has(puzzle.date), `duplicate date ${puzzle.date}`).toBe(false);
      seen.add(puzzle.date);
    }
  });

  it("orders puzzles by consecutive calendar dates (daily cadence, no gaps)", () => {
    for (let i = 1; i < PUZZLES.length; i++) {
      const prev = new Date(`${PUZZLES[i - 1].date}T00:00:00Z`).getTime();
      const curr = new Date(`${PUZZLES[i].date}T00:00:00Z`).getTime();
      const dayMs = 24 * 60 * 60 * 1000;
      expect(
        (curr - prev) / dayMs,
        `gap between ${PUZZLES[i - 1].date} and ${PUZZLES[i].date}`,
      ).toBe(1);
    }
  });
});
