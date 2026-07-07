import { Category, DIFFICULTY_COLOR } from "@/lib/types";

export interface CategoryRowProps {
  category: Category;
  /** Extra classes for row-specific touches (e.g. reveal animation, padding). */
  className?: string;
}

/**
 * A single difficulty-colored category row: name + its four words. Shared
 * between PuzzleGrid (solved rows during play) and WinLossModal (solved or
 * revealed rows at game end) so the two don't drift out of sync. No hooks
 * or events — safe as a Server Component wherever it's used.
 */
export default function CategoryRow({ category, className = "" }: CategoryRowProps) {
  const colors = DIFFICULTY_COLOR[category.difficulty];

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg ${colors.bg} ${colors.text} p-3 text-center ${className}`}
    >
      <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">{category.name}</span>
      <span className="text-sm sm:text-base font-medium">{category.words.join(", ")}</span>
    </div>
  );
}
