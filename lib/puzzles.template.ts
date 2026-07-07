import { Puzzle } from "./types";

/**
 * ============================================================================
 *  PUZZLE AUTHORING TEMPLATE  —  read this, fill it in, then paste your
 *  finished `PUZZLES` array into lib/puzzles.ts (replacing the placeholder one).
 * ============================================================================
 *
 * This file is a reference only. It is NOT imported by the app, so editing it
 * can't break the running game. When your content is ready, copy the array
 * below into lib/puzzles.ts and leave `getPuzzleForToday` there untouched —
 * swapping puzzles is a pure data change, no component code changes.
 *
 * ── THE SHAPE (from lib/types.ts) ───────────────────────────────────────────
 *   Puzzle   = { date: "YYYY-MM-DD"; categories: Category[] }  // exactly 4
 *   Category = { name: string; difficulty: 1|2|3|4; words: string[] } // exactly 4
 *
 * ── HARD RULES (the build/tests assume these) ───────────────────────────────
 *   1. Exactly 4 categories per puzzle.
 *   2. Exactly 4 words per category (→ 16 words total per puzzle).
 *   3. All 16 words in a puzzle are UNIQUE — no word repeats across categories.
 *      (A repeated word breaks the exact-match grouping logic.)
 *   4. Words are UPPERCASE to match the display convention (grid renders them
 *      as authored; the placeholder bank is all-caps).
 *   5. `difficulty` is exactly one of 1 | 2 | 3 | 4, and within a single puzzle
 *      use each of 1,2,3,4 exactly once (one category per color).
 *   6. `date` is "YYYY-MM-DD", zero-padded. One puzzle per date. For a daily
 *      game, make dates CONSECUTIVE starting from your launch date — a date
 *      with no puzzle falls back to PUZZLES[0] (fine for dev, not for launch).
 *
 * ── DIFFICULTY → COLOR (genre convention, drives the win/loss reveal) ────────
 *      1 = 🟨 yellow  (easiest — most obvious grouping)
 *      2 = 🟩 green
 *      3 = 🟦 blue
 *      4 = 🟪 purple  (hardest — wordplay / trap / most abstract link)
 *   Calibrate honestly: difficulty 4 is where you hide the trap words that
 *   *look* like they belong to an easier category.
 *
 * ── ACCEPTANCE CRITERION #1 (the human-judgment gate) ───────────────────────
 *   "Every puzzle has exactly ONE valid, unambiguous grouping — no word
 *   reasonably fits more than one category." This can't be automated; it's the
 *   step Tester re-checks by hand once real content lands. Before you commit a
 *   puzzle, for EACH of the 16 words ask: "could a reasonable player argue this
 *   word belongs to a different category?" If yes, swap the word or reword the
 *   category. The intended difficulty comes from clever *misdirection* (a word
 *   that looks like it fits an easy category but actually belongs to a harder
 *   one), NOT from genuine ambiguity where two answers are both defensible.
 * ============================================================================
 */

export const PUZZLES: Puzzle[] = [
  // ─── EXAMPLE (fully worked — replace with your own, or delete) ────────────
  {
    date: "2026-08-01",
    categories: [
      {
        // Easiest: straightforward, on-the-nose grouping.
        name: "CITRUS FRUITS",
        difficulty: 1,
        words: ["LEMON", "LIME", "ORANGE", "GRAPEFRUIT"],
      },
      {
        name: "TENNIS TERMS",
        difficulty: 2,
        words: ["ACE", "SET", "FAULT", "RALLY"],
      },
      {
        name: "CAR MANUFACTURERS",
        difficulty: 3,
        words: ["HONDA", "FORD", "TESLA", "JAGUAR"],
      },
      {
        // Hardest: "___ juice". Note the deliberate trap — JAGUAR (a cat) and
        // ORANGE (a fruit) both *look* like they could go here, but each has
        // exactly one correct home above, so the grouping stays unambiguous.
        name: "___ + JUICE",
        difficulty: 4,
        words: ["APPLE", "CRANBERRY", "PRUNE", "TOMATO"],
      },
    ],
  },

  // ─── YOUR PUZZLES START HERE — copy this blank block per puzzle ────────────
  {
    date: "2026-08-02", // TODO: your launch date, then +1 day per puzzle
    categories: [
      {
        name: "", // TODO — difficulty 1 (yellow, easiest)
        difficulty: 1,
        words: ["", "", "", ""], // TODO — 4 unique UPPERCASE words
      },
      {
        name: "", // TODO — difficulty 2 (green)
        difficulty: 2,
        words: ["", "", "", ""],
      },
      {
        name: "", // TODO — difficulty 3 (blue)
        difficulty: 3,
        words: ["", "", "", ""],
      },
      {
        name: "", // TODO — difficulty 4 (purple, hardest / wordplay)
        difficulty: 4,
        words: ["", "", "", ""],
      },
    ],
  },

  // TODO: repeat the block above for a total of ~10–15 puzzles.
];
