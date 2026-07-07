import { MAX_MISTAKES } from "@/lib/types";

export interface MistakeTrackerProps {
  mistakes: number;
}

/**
 * Visual indicator of remaining guesses (dots deplete as mistakes accrue).
 * No interactivity or hooks — safe to render as a Server Component; it just
 * happens to live inside a client-rendered game tree.
 */
export default function MistakeTracker({ mistakes }: MistakeTrackerProps) {
  const remaining = Math.max(MAX_MISTAKES - mistakes, 0);

  return (
    <div className="flex items-center justify-center gap-2" role="status" aria-live="polite">
      <span className="text-sm font-medium text-zinc-600">Mistakes remaining:</span>
      <div className="flex gap-1.5">
        {Array.from({ length: MAX_MISTAKES }).map((_, i) => (
          <span
            key={i}
            className={`h-3.5 w-3.5 rounded-full transition-colors ${
              i < remaining ? "bg-zinc-800" : "bg-zinc-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
