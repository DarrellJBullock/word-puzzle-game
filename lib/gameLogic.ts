import { Category } from "./types";

/** Fisher-Yates shuffle. Returns a new array; does not mutate input. */
export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Returns the category that exactly matches the given 4 words, if any. */
export function findExactCategoryMatch(
  categories: Category[],
  selectedWords: string[]
): Category | undefined {
  const selectedSet = new Set(selectedWords);
  return categories.find(
    (category) =>
      category.words.length === selectedWords.length &&
      category.words.every((word) => selectedSet.has(word))
  );
}

/** True when exactly 3 of the 4 selected words belong to the same category. */
export function isOneAway(categories: Category[], selectedWords: string[]): boolean {
  return categories.some((category) => {
    const overlap = category.words.filter((word) => selectedWords.includes(word)).length;
    return overlap === 3;
  });
}
