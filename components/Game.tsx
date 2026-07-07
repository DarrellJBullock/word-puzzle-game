"use client";

import { useEffect, useState } from "react";
import { Puzzle } from "@/lib/types";
import { useGameState } from "@/lib/useGameState";
import PuzzleGrid from "./PuzzleGrid";
import GuessSubmit from "./GuessSubmit";
import MistakeTracker from "./MistakeTracker";
import WinLossModal from "./WinLossModal";

export interface GameProps {
  puzzle: Puzzle;
}

/**
 * Top-level game controller: owns the persisted game state hook and wires
 * it into the presentational components. Client Component because the
 * entire game loop is interactive local state with localStorage side effects.
 */
export default function Game({ puzzle }: GameProps) {
  const {
    state,
    remainingWords,
    solvedCategories,
    toggleWord,
    deselectAll,
    shuffleWords,
    submitGuess,
  } = useGameState(puzzle);

  // Seeded from the (possibly localStorage-restored) guess history length
  // at mount, so a same-day refresh with existing progress doesn't re-flash
  // the "one away"/"not quite" banner for a guess the player already saw
  // and dismissed before refreshing.
  const [dismissedAtCount, setDismissedAtCount] = useState(() => state.guessHistory.length);
  const [modalDismissed, setModalDismissed] = useState(false);

  const lastGuess = state.guessHistory[state.guessHistory.length - 1];
  const guessCount = state.guessHistory.length;

  // The feedback message itself is derived directly from guess history
  // below (no duplicated state) — this effect only owns the fade-out timer,
  // recording which guess count it has faded out for once the timer fires
  // (never calling setState synchronously in the effect body itself).
  useEffect(() => {
    if (guessCount === 0) return;
    const timer = window.setTimeout(() => setDismissedAtCount(guessCount), 1800);
    return () => window.clearTimeout(timer);
  }, [guessCount]);

  const feedback =
    lastGuess && !lastGuess.correct && dismissedAtCount !== guessCount
      ? lastGuess.oneAway
        ? "One away!"
        : "Not quite."
      : null;

  const gameOver = state.status !== "playing";
  const showModal = gameOver && !modalDismissed;

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-5 px-4">
      <header className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
          Word Puzzle
        </h1>
        <p className="text-sm text-zinc-500">
          Find four groups of four. {puzzle.date}
        </p>
      </header>

      <MistakeTracker mistakes={state.mistakes} />

      <div className="h-6 text-sm font-bold text-zinc-700" aria-live="polite">
        {feedback}
      </div>

      <PuzzleGrid
        words={remainingWords}
        selectedWords={state.selectedWords}
        solvedCategories={solvedCategories}
        onToggleWord={toggleWord}
        disabled={gameOver}
      />

      <GuessSubmit
        selectedCount={state.selectedWords.length}
        onSubmit={submitGuess}
        onShuffle={shuffleWords}
        onDeselectAll={deselectAll}
        disabled={gameOver}
      />

      {showModal && (state.status === "won" || state.status === "lost") && (
        <WinLossModal
          status={state.status}
          puzzle={puzzle}
          solvedCategories={solvedCategories}
          guessHistory={state.guessHistory}
          mistakes={state.mistakes}
          onClose={() => setModalDismissed(true)}
        />
      )}
    </div>
  );
}
