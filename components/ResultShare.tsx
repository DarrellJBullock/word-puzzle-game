"use client";

import { useState } from "react";
import { GuessResult, Puzzle, GameStatus, MAX_MISTAKES } from "@/lib/types";

const DIFFICULTY_EMOJI: Record<number, string> = {
  1: "🟨",
  2: "🟩",
  3: "🟦",
  4: "🟪",
};

export interface ResultShareProps {
  puzzle: Puzzle;
  guessHistory: GuessResult[];
  status: GameStatus;
  mistakes: number;
}

/**
 * Builds the copyable emoji/text result summary, genre-style: one row of
 * colored squares per guess attempt, colored by each word's category
 * difficulty. This deliberately reveals nothing but abstract colors and a
 * win/loss/mistake count — no category names or words appear anywhere in
 * the string, so someone who hasn't played learns nothing about the
 * puzzle's actual content (acceptance criterion 3). Client Component: uses
 * the Clipboard API and local copy-confirmation state.
 */
export default function ResultShare({ puzzle, guessHistory, status, mistakes }: ResultShareProps) {
  const [copied, setCopied] = useState(false);

  const wordDifficulty = new Map<string, number>();
  puzzle.categories.forEach((category) => {
    category.words.forEach((word) => wordDifficulty.set(word, category.difficulty));
  });

  const rows = guessHistory.map((guess) =>
    guess.words.map((word) => DIFFICULTY_EMOJI[wordDifficulty.get(word) ?? 1]).join("")
  );

  const resultLine = status === "won" ? "Solved it!" : "Didn't solve it";
  const shareText = [
    `Word Puzzle ${puzzle.date}`,
    `${resultLine} · ${mistakes}/${MAX_MISTAKES} mistakes`,
    "",
    ...rows,
  ].join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op; the text is still visible below.
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <pre className="max-h-40 w-full overflow-y-auto whitespace-pre-wrap rounded-lg bg-zinc-100 px-4 py-3 text-center text-sm font-medium text-zinc-800">
        {shareText}
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-700"
      >
        {copied ? "Copied!" : "Copy Result"}
      </button>
    </div>
  );
}
