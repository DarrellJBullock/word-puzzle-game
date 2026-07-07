"use client";

import { useState } from "react";
import { getPuzzleForToday } from "@/lib/puzzles";
import Game from "./Game";

/**
 * Resolves today's puzzle and renders Game. This component is only ever
 * mounted by GameLoader via `next/dynamic(..., { ssr: false })`, so it
 * never executes during server rendering — the lazy `useState` initializer
 * below (and everything it produces) exists purely client-side and is
 * never part of the server-rendered HTML/RSC payload. That's what keeps
 * the full puzzle (words, category names, difficulties) out of View
 * Source before a player has done anything.
 *
 * `getPuzzleForToday` remains deterministic by calendar date (criterion 5:
 * same date -> same puzzle for every player), just evaluated in the
 * browser instead of on the server.
 */
export default function GameClient() {
  const [puzzle] = useState(() => getPuzzleForToday(new Date()));
  return <Game key={puzzle.date} puzzle={puzzle} />;
}
