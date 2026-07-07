"use client";

import { useEffect, useRef } from "react";
import { Category, GuessResult, GameStatus } from "@/lib/types";
import { Puzzle } from "@/lib/types";
import CategoryRow from "./CategoryRow";
import ResultShare from "./ResultShare";

export interface WinLossModalProps {
  status: Extract<GameStatus, "won" | "lost">;
  puzzle: Puzzle;
  solvedCategories: Category[];
  guessHistory: GuessResult[];
  mistakes: number;
  onClose: () => void;
}

/**
 * End-of-game overlay: celebrates a win with the solved categories, or on a
 * loss reveals every category's answers. Client Component: it's an
 * interactive overlay with a close handler and embeds the clipboard-using
 * ResultShare.
 */
export default function WinLossModal({
  status,
  puzzle,
  solvedCategories,
  guessHistory,
  mistakes,
  onClose,
}: WinLossModalProps) {
  const won = status === "won";
  const categoriesToShow = won
    ? solvedCategories
    : [...puzzle.categories].sort((a, b) => a.difficulty - b.difficulty);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Move focus into the dialog on open (basic focus management) and close
  // on Escape, matching standard modal accessibility expectations.
  useEffect(() => {
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label={won ? "You solved today's puzzle" : "Better luck tomorrow"}
    >
      <div className="flex max-h-full w-full max-w-md flex-col gap-4 overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <h2 className="text-2xl font-extrabold text-zinc-900">
            {won ? "Nice work!" : "So close!"}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-zinc-600">
          {won
            ? `You solved every category with ${mistakes} mistake${mistakes === 1 ? "" : "s"}.`
            : "Here are today's answers:"}
        </p>

        <div className="flex flex-col gap-2">
          {categoriesToShow.map((category) => (
            <CategoryRow key={category.name} category={category} />
          ))}
        </div>

        <div className="border-t border-zinc-200 pt-4">
          <ResultShare puzzle={puzzle} guessHistory={guessHistory} status={status} mistakes={mistakes} />
        </div>
      </div>
    </div>
  );
}
