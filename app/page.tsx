import GameLoader from "@/components/GameLoader";

/**
 * Server Component. Deliberately does NOT resolve or embed today's puzzle
 * data — doing so here would serialize the full answer set (words,
 * category names, difficulties) into the server-rendered HTML/RSC payload,
 * readable via View Source before anyone plays. Puzzle resolution is
 * pushed entirely into the client boundary (GameLoader/Game), which calls
 * getPuzzleForToday() itself after mount. Determinism (criterion 5) still
 * holds: the same calendar date resolves to the same puzzle for every
 * player, it's just evaluated client-side instead of server-side.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-50 py-10 sm:py-16">
      <GameLoader />
    </div>
  );
}
