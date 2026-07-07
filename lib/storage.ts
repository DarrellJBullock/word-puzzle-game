import { PersistedGameState } from "./types";

const STORAGE_PREFIX = "word-puzzle-game:v1:";

function keyFor(puzzleDate: string): string {
  return `${STORAGE_PREFIX}${puzzleDate}`;
}

/**
 * Reads persisted game state for a given puzzle date. Returns null when
 * nothing is stored, storage is unavailable (SSR, privacy mode), or the
 * stored payload fails to parse — callers should fall back to fresh state.
 */
export function loadGameState(puzzleDate: string): PersistedGameState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(keyFor(puzzleDate));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedGameState;
    if (parsed.puzzleDate !== puzzleDate) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveGameState(state: PersistedGameState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(keyFor(state.puzzleDate), JSON.stringify(state));
  } catch {
    // localStorage unavailable (private browsing quota, etc.) — fail silently,
    // the game remains playable, just without persistence.
  }
}
