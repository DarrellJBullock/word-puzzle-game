import { describe, it, expect, beforeEach } from "vitest";
import { loadGameState, saveGameState } from "../storage";
import { PersistedGameState } from "../types";

const sample: PersistedGameState = {
  puzzleDate: "2026-07-06",
  selectedWords: ["A", "B"],
  solvedCategoryNames: ["CAT1"],
  mistakes: 2,
  guessHistory: [{ words: ["A", "B", "C", "D"], correct: false, oneAway: true }],
  status: "playing",
};

describe("storage round-trip", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("returns null when nothing stored for that date", () => {
    expect(loadGameState("2026-07-06")).toBeNull();
  });

  it("saves and reloads an identical state", () => {
    saveGameState(sample);
    const loaded = loadGameState("2026-07-06");
    expect(loaded).toEqual(sample);
  });

  it("returns null when stored date does not match requested date (stale/corrupt guard)", () => {
    saveGameState(sample);
    expect(loadGameState("2026-07-07")).toBeNull();
  });

  it("returns null for malformed JSON rather than throwing", () => {
    window.localStorage.setItem("word-puzzle-game:v1:2026-07-06", "{not json");
    expect(() => loadGameState("2026-07-06")).not.toThrow();
    expect(loadGameState("2026-07-06")).toBeNull();
  });

  it("keys state per puzzle date so different dates don't collide", () => {
    saveGameState(sample);
    saveGameState({ ...sample, puzzleDate: "2026-07-07", mistakes: 4, status: "lost" });
    expect(loadGameState("2026-07-06")?.mistakes).toBe(2);
    expect(loadGameState("2026-07-07")?.mistakes).toBe(4);
  });
});
