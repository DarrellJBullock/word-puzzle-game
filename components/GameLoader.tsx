"use client";

import dynamic from "next/dynamic";
import GameSkeleton from "./GameSkeleton";

// `ssr: false` is what actually keeps puzzle data out of the server
// response: GameClient (which resolves getPuzzleForToday() and renders
// Game) is never executed during server rendering at all, so there is
// nothing for Next to serialize into the initial HTML/RSC payload for it
// — only this file's own (data-free) output, and GameSkeleton while
// GameClient's chunk loads and mounts.
const GameClient = dynamic(() => import("./GameClient"), {
  ssr: false,
  loading: () => <GameSkeleton />,
});

/**
 * Client boundary between the Server Component page and the fully
 * client-only game. See GameClient for where puzzle resolution actually
 * happens and why that placement is what prevents leaking today's answers
 * via View Source.
 */
export default function GameLoader() {
  return <GameClient />;
}
