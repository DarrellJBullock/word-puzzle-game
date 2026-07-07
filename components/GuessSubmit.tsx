"use client";

export interface GuessSubmitProps {
  selectedCount: number;
  onSubmit: () => void;
  onShuffle: () => void;
  onDeselectAll: () => void;
  disabled?: boolean;
}

/**
 * Action row: submit (enabled only at exactly 4 selections), plus the
 * genre-standard shuffle and deselect-all helpers. Client Component because
 * it's purely interactive controls wired to parent handlers.
 */
export default function GuessSubmit({
  selectedCount,
  onSubmit,
  onShuffle,
  onDeselectAll,
  disabled = false,
}: GuessSubmitProps) {
  const canSubmit = selectedCount === 4 && !disabled;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={onShuffle}
        disabled={disabled}
        className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Shuffle
      </button>
      <button
        type="button"
        onClick={onDeselectAll}
        disabled={disabled || selectedCount === 0}
        className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Deselect All
      </button>
      <button
        type="button"
        onClick={onSubmit}
        disabled={!canSubmit}
        className={`rounded-full px-6 py-2 text-sm font-bold transition-colors ${
          canSubmit
            ? "bg-zinc-900 text-white hover:bg-zinc-700 cursor-pointer"
            : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </div>
  );
}
