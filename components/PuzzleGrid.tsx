"use client";

import { Category } from "@/lib/types";
import CategoryRow from "./CategoryRow";

export interface PuzzleGridProps {
  /** Words still unsolved, in current (possibly shuffled) display order. */
  words: string[];
  /** Currently selected words (max 4, enforced by parent). */
  selectedWords: string[];
  /** Categories already solved this game, rendered as locked rows above the grid. */
  solvedCategories: Category[];
  onToggleWord: (word: string) => void;
  disabled?: boolean;
}

/**
 * Renders the 4x4 (shrinking) word grid plus any already-solved category
 * rows. Client Component: needs click handling and selection state passed
 * down from the parent game controller.
 */
export default function PuzzleGrid({
  words,
  selectedWords,
  solvedCategories,
  onToggleWord,
  disabled = false,
}: PuzzleGridProps) {
  return (
    <div className="flex flex-col gap-2">
      {solvedCategories.map((category) => (
        <CategoryRow
          key={category.name}
          category={category}
          className="sm:p-4 animate-[fadeIn_0.3s_ease-out]"
        />
      ))}

      {words.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {words.map((word) => {
            const isSelected = selectedWords.includes(word);
            return (
              <button
                key={word}
                type="button"
                disabled={disabled}
                onClick={() => onToggleWord(word)}
                aria-pressed={isSelected}
                className={`aspect-square sm:aspect-[4/3] flex items-center justify-center rounded-lg px-2 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-tight break-words transition-colors duration-150 select-none
                  ${
                    isSelected
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                  }
                  ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
                `}
              >
                {word}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
