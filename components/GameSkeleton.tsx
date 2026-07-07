/**
 * Deterministic, data-free loading placeholder shown while the client-only
 * Game bundle mounts. Presentational only — safe as a Server Component, and
 * used as the `loading` fallback for the dynamic, ssr:false Game import so
 * the very first paint (server and client) never depends on localStorage
 * or Math.random(), avoiding any hydration mismatch.
 */
export default function GameSkeleton() {
  return (
    <div
      className="flex w-full max-w-2xl flex-col items-center gap-5 px-4"
      aria-busy="true"
      aria-label="Loading today's puzzle"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 w-48 animate-pulse rounded-md bg-zinc-200" />
        <div className="h-4 w-40 animate-pulse rounded-md bg-zinc-200" />
      </div>
      <div className="h-4 w-56 animate-pulse rounded-full bg-zinc-200" />
      <div className="grid w-full grid-cols-4 gap-1.5 sm:gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square animate-pulse rounded-lg bg-zinc-200 sm:aspect-[4/3]"
          />
        ))}
      </div>
    </div>
  );
}
