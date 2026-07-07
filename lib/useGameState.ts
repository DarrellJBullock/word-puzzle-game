"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Puzzle, PersistedGameState, GuessResult, MAX_MISTAKES } from "./types";
import { loadGameState, saveGameState } from "./storage";
import { findExactCategoryMatch, isOneAway, shuffle } from "./gameLogic";

function freshState(puzzleDate: string): PersistedGameState {
  return {
    puzzleDate,
    selectedWords: [],
    solvedCategoryNames: [],
    mistakes: 0,
    guessHistory: [],
    status: "playing",
  };
}

/**
 * Owns all game state for the day's puzzle: selection, guesses, mistakes,
 * win/loss, and word order — persisted to localStorage keyed by puzzle date
 * so a same-day refresh restores exactly where the player left off.
 */
export function useGameState(puzzle: Puzzle) {
  const [state, setState] = useState<PersistedGameState>(() =>
    loadGameState(puzzle.date) ?? freshState(puzzle.date)
  );

  // Word order is shuffled once per mount (not persisted) so remaining rows
  // don't reset their internal order every render; solved words are simply
  // filtered out of the visible order.
  const [wordOrder, setWordOrder] = useState<string[]>(() =>
    shuffle(puzzle.categories.flatMap((c) => c.words))
  );

  // Note: this hook (via Game) only ever mounts client-side — Game is
  // rendered through GameLoader with `next/dynamic(..., { ssr: false })` —
  // so the localStorage restore and shuffle above run once, client-only,
  // with no server-rendered markup to hydrate against (no mismatch
  // possible). A new calendar date arrives via a fresh page load, and
  // GameLoader mounts <Game key={puzzle.date}>, so a changed puzzle date
  // remounts this hook with fresh initial state via the useState
  // initializers above rather than requiring an effect-driven reset here.

  useEffect(() => {
    saveGameState(state);
  }, [state]);

  const remainingWords = useMemo(() => {
    const solvedWords = new Set(
      puzzle.categories
        .filter((c) => state.solvedCategoryNames.includes(c.name))
        .flatMap((c) => c.words)
    );
    return wordOrder.filter((word) => !solvedWords.has(word));
  }, [wordOrder, puzzle.categories, state.solvedCategoryNames]);

  const solvedCategories = useMemo(
    () =>
      puzzle.categories
        .filter((c) => state.solvedCategoryNames.includes(c.name))
        .sort((a, b) => a.difficulty - b.difficulty),
    [puzzle.categories, state.solvedCategoryNames]
  );

  const toggleWord = useCallback(
    (word: string) => {
      if (state.status !== "playing") return;
      setState((prev) => {
        if (prev.selectedWords.includes(word)) {
          return { ...prev, selectedWords: prev.selectedWords.filter((w) => w !== word) };
        }
        if (prev.selectedWords.length >= 4) return prev; // block a 5th selection
        return { ...prev, selectedWords: [...prev.selectedWords, word] };
      });
    },
    [state.status]
  );

  const deselectAll = useCallback(() => {
    setState((prev) => ({ ...prev, selectedWords: [] }));
  }, []);

  const shuffleWords = useCallback(() => {
    setWordOrder((prev) => shuffle(prev));
  }, []);

  const submitGuess = useCallback(() => {
    setState((prev) => {
      if (prev.selectedWords.length !== 4 || prev.status !== "playing") return prev;

      const match = findExactCategoryMatch(puzzle.categories, prev.selectedWords);
      const result: GuessResult = {
        words: prev.selectedWords,
        correct: Boolean(match),
        oneAway: !match && isOneAway(puzzle.categories, prev.selectedWords),
      };

      if (match) {
        const solvedCategoryNames = [...prev.solvedCategoryNames, match.name];
        const won = solvedCategoryNames.length === puzzle.categories.length;
        return {
          ...prev,
          selectedWords: [],
          solvedCategoryNames,
          guessHistory: [...prev.guessHistory, result],
          status: won ? "won" : "playing",
        };
      }

      const mistakes = prev.mistakes + 1;
      const lost = mistakes >= MAX_MISTAKES;
      return {
        ...prev,
        selectedWords: lost ? [] : prev.selectedWords,
        mistakes,
        guessHistory: [...prev.guessHistory, result],
        status: lost ? "lost" : "playing",
      };
    });
  }, [puzzle.categories]);

  return {
    state,
    remainingWords,
    solvedCategories,
    toggleWord,
    deselectAll,
    shuffleWords,
    submitGuess,
  };
}
