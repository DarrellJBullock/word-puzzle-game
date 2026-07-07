/**
 * Core data model for the daily word puzzle game.
 * See company-docs/architecture.md for the source-of-truth shape.
 */

export type Difficulty = 1 | 2 | 3 | 4;

export interface Category {
  name: string;
  difficulty: Difficulty;
  words: string[]; // exactly 4 words
}

export interface Puzzle {
  date: string; // "YYYY-MM-DD"
  categories: Category[]; // exactly 4 categories
}

/** A single locked-in guess attempt, correct or not. */
export interface GuessResult {
  words: string[];
  correct: boolean;
  /** true when exactly 3 of the 4 selected words belong to the same category */
  oneAway: boolean;
}

export type GameStatus = "playing" | "won" | "lost";

/** Shape persisted to localStorage, keyed by puzzle date. */
export interface PersistedGameState {
  puzzleDate: string;
  selectedWords: string[];
  solvedCategoryNames: string[];
  mistakes: number;
  guessHistory: GuessResult[];
  status: GameStatus;
}

export const MAX_MISTAKES = 4;
export const WORDS_PER_CATEGORY = 4;
export const CATEGORIES_PER_PUZZLE = 4;

/** Color tokens tied to difficulty, matching genre convention. */
export const DIFFICULTY_COLOR: Record<Difficulty, { bg: string; text: string; ring: string }> = {
  1: { bg: "bg-yellow-300", text: "text-yellow-950", ring: "ring-yellow-400" },
  2: { bg: "bg-green-400", text: "text-green-950", ring: "ring-green-500" },
  3: { bg: "bg-blue-400", text: "text-blue-950", ring: "ring-blue-500" },
  4: { bg: "bg-purple-400", text: "text-purple-950", ring: "ring-purple-500" },
};
