# Word Puzzle — Daily Category Game

A daily category-sorting word puzzle in the spirit of NYT Connections: sixteen words that resolve into four hidden groups of four. Built as a portfolio piece with an emphasis on frontend polish, correct state modeling, and product judgment.

**▶️ Live demo: https://word-puzzle-game-olive.vercel.app**

---

## How to play

- A 4×4 grid of 16 words hides **4 categories of 4 words** each.
- Select exactly four words you think share a category and submit.
- A correct guess locks in that category; a wrong one costs a mistake.
- You get **4 mistakes** before the game ends. Solve all four groups to win.
- Guess three-of-four right and you'll get a **"One away"** nudge.
- When you finish, copy an **emoji result grid** to share — it shows how you did **without revealing any answers**.
- Your progress survives a refresh, and everyone gets the **same puzzle on a given day**.

## Features

- **Deterministic daily puzzle** — the puzzle is a pure function of the calendar date; every player sees the same board on the same day.
- **Full game state machine** — selection (capped at 4), exact-match grouping, one-away detection, mistake tracking, and win/loss transitions.
- **Refresh-safe persistence** — in-progress state is saved to `localStorage`, keyed per puzzle date, and restored on reload. A new day starts fresh automatically.
- **Spoiler-safe sharing** — the shareable summary is built from abstract difficulty-colored emoji only; it contains no words or category names, and the puzzle data never appears in the page source.
- **Responsive & accessible** — clean layout from 375px mobile through desktop, with dialog roles, focus management, Escape-to-close, and keyboard-friendly controls.
- **Portfolio-grade UI** — difficulty-coded reveals (🟨🟩🟦🟪), skeleton loading state, and considered empty/disabled/end states.

## Tech stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router) + **React 19** | Client-heavy static site, zero-config deploy, strong DX |
| Language | **TypeScript** | Typed data model and props end-to-end |
| Styling | **Tailwind CSS v4** | Consistent design system, no unstyled defaults |
| Persistence | **Browser `localStorage`** | Same-day progress needs no server — deliberate v1 simplicity |
| Testing | **Vitest** + jsdom | Unit + structural-integrity tests on the puzzle bank |
| Hosting | **Vercel** (Hobby tier) | Zero-config Next.js deploys, free |

**No backend, database, accounts, or environment variables.** The v1 acceptance criteria only require same-day, single-device persistence — `localStorage` satisfies that without server infrastructure. Introducing accounts, history, or cross-device sync would be the point to add a backend; not before.

## Architecture notes

A couple of decisions worth calling out for anyone reading the code:

- **The puzzle is resolved client-side, on purpose.** If the server rendered the day's puzzle into the initial HTML, the answers would sit in plain sight in "View Source." Instead, `getPuzzleForToday()` runs inside a `next/dynamic({ ssr: false })` boundary (`components/GameLoader` → `GameClient`), so the initial HTML is only a skeleton and the puzzle data never touches the server response. Determinism is preserved — date-matching just happens in the browser.
- **The puzzle bank is a pure data seam.** Components depend only on the `Puzzle[]` shape and `getPuzzleForToday()`. Swapping or extending puzzles is a data-only change in `lib/puzzles.ts` — no component edits.
- **Content correctness is guarded by tests.** A structural-integrity test suite asserts every puzzle is 4×4, has 16 unique words, uses each difficulty once, and runs on unique consecutive dates — so a typo in the content fails the build rather than shipping.

## Project structure

```
app/            App Router entry (page, layout, global styles)
components/      PuzzleGrid, GuessSubmit, MistakeTracker, ResultShare,
                WinLossModal, CategoryRow, Game/GameLoader/GameClient, GameSkeleton
lib/
  types.ts      Puzzle/Category/GameState types + shared constants
  puzzles.ts    The puzzle bank + deterministic date selection
  gameLogic.ts  Pure helpers: shuffle, exact-match, one-away detection
  useGameState.ts  Selection / guess / persistence hook
  storage.ts    localStorage read/write, keyed by date
  __tests__/    Unit + structural-integrity tests
```

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run test       # Vitest unit + structural tests
npm run lint       # ESLint
```

## Adding puzzles

Edit `lib/puzzles.ts`. Each puzzle needs exactly four categories (one per difficulty `1–4`) of four unique uppercase words, on a unique `YYYY-MM-DD` date. The key content rule: **every word must have exactly one defensible home** — build difficulty from misdirection (a word that *looks* like it fits an easier group but doesn't), never from genuine ambiguity. The structural tests enforce the mechanical rules; the "one valid grouping" rule is a human review.

## Deployment

Pushes to `main` auto-deploy to Vercel. Production builds run `next build` (which includes the test-guarded content). Rollback is instant via `npx vercel rollback` or the Vercel dashboard.

---

*Built with [Claude Code](https://claude.com/claude-code).*
