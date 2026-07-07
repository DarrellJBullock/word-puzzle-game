import { describe, it, expect } from "vitest";
import { findExactCategoryMatch, isOneAway, shuffle } from "../gameLogic";
import { Category } from "../types";

const categories: Category[] = [
  { name: "A", difficulty: 1, words: ["W1", "W2", "W3", "W4"] },
  { name: "B", difficulty: 2, words: ["X1", "X2", "X3", "X4"] },
  { name: "C", difficulty: 3, words: ["Y1", "Y2", "Y3", "Y4"] },
  { name: "D", difficulty: 4, words: ["Z1", "Z2", "Z3", "Z4"] },
];

describe("findExactCategoryMatch", () => {
  it("finds the matching category regardless of order", () => {
    const match = findExactCategoryMatch(categories, ["W4", "W1", "W3", "W2"]);
    expect(match?.name).toBe("A");
  });

  it("returns undefined when selection spans multiple categories", () => {
    const match = findExactCategoryMatch(categories, ["W1", "W2", "W3", "X1"]);
    expect(match).toBeUndefined();
  });

  it("returns undefined for fewer than 4 words", () => {
    const match = findExactCategoryMatch(categories, ["W1", "W2", "W3"]);
    expect(match).toBeUndefined();
  });
});

describe("isOneAway", () => {
  it("returns true when exactly 3 of 4 selected belong to same category", () => {
    expect(isOneAway(categories, ["W1", "W2", "W3", "X1"])).toBe(true);
  });

  it("returns false for an exact match (4/4)", () => {
    expect(isOneAway(categories, ["W1", "W2", "W3", "W4"])).toBe(false);
  });

  it("returns false when no category has 3 overlap", () => {
    expect(isOneAway(categories, ["W1", "W2", "X1", "X2"])).toBe(false);
  });
});

describe("shuffle", () => {
  it("does not mutate the input array", () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    shuffle(input);
    expect(input).toEqual(copy);
  });

  it("returns an array with the same elements", () => {
    const input = ["a", "b", "c", "d"];
    const result = shuffle(input);
    expect([...result].sort()).toEqual([...input].sort());
    expect(result.length).toBe(input.length);
  });
});
