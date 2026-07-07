import { Puzzle } from "./types";

/**
 * Puzzle bank (20 puzzles).
 *
 * Each puzzle: 4 categories × 4 words, one category per difficulty (1=yellow
 * easiest → 4=purple hardest), 16 unique words, and — per product-spec
 * acceptance criterion #1 — exactly one defensible grouping. Difficulty comes
 * from misdirection (words that *look* like they fit an easier category but
 * have exactly one correct home), not from genuine ambiguity.
 *
 * Dates run consecutively so `getPuzzleForToday` resolves a distinct daily
 * puzzle. Editorial note: these are drafted for review — criterion #1 still
 * wants a human eyeball pass before launch (see company-docs/architecture.md).
 *
 * Swapping/extending is a pure data change: keep this file's exported shape
 * (`Puzzle[]` + `getPuzzleForToday`) identical and no component code changes.
 */
export const PUZZLES: Puzzle[] = [
  {
    date: "2026-07-06",
    categories: [
      { name: "BREAKFAST FOODS", difficulty: 1, words: ["WAFFLE", "OMELET", "BAGEL", "PANCAKE"] },
      { name: "CHESS PIECES", difficulty: 2, words: ["BISHOP", "KNIGHT", "ROOK", "PAWN"] },
      { name: "___ FLY", difficulty: 3, words: ["BUTTER", "DRAGON", "FIRE", "MAY"] },
      { name: "SILENT B", difficulty: 4, words: ["DEBT", "DOUBT", "LAMB", "THUMB"] },
    ],
  },
  {
    date: "2026-07-07",
    categories: [
      { name: "SHADES OF RED", difficulty: 1, words: ["CRIMSON", "SCARLET", "RUBY", "CHERRY"] },
      { name: "CARD GAMES", difficulty: 2, words: ["POKER", "BRIDGE", "HEARTS", "RUMMY"] },
      { name: "___ STORM", difficulty: 3, words: ["BRAIN", "THUNDER", "SAND", "SNOW"] },
      { name: "THINGS WITH TEETH", difficulty: 4, words: ["COMB", "SAW", "ZIPPER", "GEAR"] },
    ],
  },
  {
    date: "2026-07-08",
    categories: [
      { name: "DOG BREEDS", difficulty: 1, words: ["BOXER", "POODLE", "BEAGLE", "HUSKY"] },
      { name: "GREEK LETTERS", difficulty: 2, words: ["ALPHA", "DELTA", "OMEGA", "SIGMA"] },
      { name: "___ ROLL", difficulty: 3, words: ["DRUM", "BARREL", "EGG", "SPRING"] },
      { name: "PALINDROMES", difficulty: 4, words: ["LEVEL", "KAYAK", "RADAR", "CIVIC"] },
    ],
  },
  {
    date: "2026-07-09",
    categories: [
      { name: "PIZZA TOPPINGS", difficulty: 1, words: ["PEPPERONI", "MUSHROOM", "OLIVE", "ONION"] },
      { name: "OCEANS", difficulty: 2, words: ["PACIFIC", "ATLANTIC", "INDIAN", "ARCTIC"] },
      { name: "___ CODE", difficulty: 3, words: ["ZIP", "BAR", "AREA", "MORSE"] },
      { name: "___ NUT", difficulty: 4, words: ["PEA", "WAL", "COCO", "CHEST"] },
    ],
  },
  {
    date: "2026-07-10",
    categories: [
      { name: "SUSHI INGREDIENTS", difficulty: 1, words: ["TUNA", "EEL", "SALMON", "SHRIMP"] },
      { name: "ZODIAC SIGNS", difficulty: 2, words: ["LEO", "ARIES", "LIBRA", "VIRGO"] },
      { name: "___ SHIP", difficulty: 3, words: ["FRIEND", "HARD", "CENSOR", "PARTNER"] },
      { name: "___ FISH", difficulty: 4, words: ["CAT", "JELLY", "SWORD", "GOLD"] },
    ],
  },
  {
    date: "2026-07-11",
    categories: [
      { name: "KITCHEN APPLIANCES", difficulty: 1, words: ["TOASTER", "BLENDER", "KETTLE", "MICROWAVE"] },
      { name: "SUPERHEROES", difficulty: 2, words: ["BATMAN", "THOR", "WOLVERINE", "HULK"] },
      { name: "___ LIGHT", difficulty: 3, words: ["HEAD", "SPOT", "MOON", "SUN"] },
      { name: "___ CUP", difficulty: 4, words: ["BUTTER", "HIC", "TEA", "KETCH"] },
    ],
  },
  {
    date: "2026-07-12",
    categories: [
      { name: "TYPES OF PASTA", difficulty: 1, words: ["PENNE", "RAVIOLI", "FUSILLI", "LASAGNA"] },
      { name: "DANCES", difficulty: 2, words: ["TANGO", "WALTZ", "SALSA", "FOXTROT"] },
      { name: "___ SAUCE", difficulty: 3, words: ["SOY", "HOT", "BBQ", "TARTAR"] },
      { name: "___ BALL", difficulty: 4, words: ["ODD", "HIGH", "MEAT", "EYE"] },
    ],
  },
  {
    date: "2026-07-13",
    categories: [
      { name: "BIRDS", difficulty: 1, words: ["CANARY", "SPARROW", "FINCH", "WREN"] },
      { name: "BATMAN VILLAINS", difficulty: 2, words: ["JOKER", "RIDDLER", "BANE", "TWOFACE"] },
      { name: "___ HOOD", difficulty: 3, words: ["NEIGHBOR", "FALSE", "PARENT", "KNIGHT"] },
      { name: "___ MAN", difficulty: 4, words: ["SNOW", "SPIDER", "POST", "FRESH"] },
    ],
  },
  {
    date: "2026-07-14",
    categories: [
      { name: "COFFEE DRINKS", difficulty: 1, words: ["LATTE", "MOCHA", "ESPRESSO", "CAPPUCCINO"] },
      { name: "MONOPOLY TOKENS", difficulty: 2, words: ["THIMBLE", "BOOT", "WHEELBARROW", "DOG"] },
      { name: "GOLF CLUBS", difficulty: 3, words: ["WEDGE", "DRIVER", "IRON", "PUTTER"] },
      { name: "___ WOOD", difficulty: 4, words: ["HOLLY", "DRIFT", "PLY", "ROSE"] },
    ],
  },
  {
    date: "2026-07-15",
    categories: [
      { name: "TREES", difficulty: 1, words: ["OAK", "MAPLE", "BIRCH", "WILLOW"] },
      { name: "TYPES OF BEAR", difficulty: 2, words: ["POLAR", "PANDA", "GRIZZLY", "BROWN"] },
      { name: "___ STICK", difficulty: 3, words: ["LIP", "YARD", "CHOP", "DRUM"] },
      { name: "___ BERRY", difficulty: 4, words: ["BLUE", "STRAW", "RASP", "GOOSE"] },
    ],
  },
  {
    date: "2026-07-16",
    categories: [
      { name: "FRUITS", difficulty: 1, words: ["APPLE", "BANANA", "GRAPE", "PEACH"] },
      { name: "US COINS", difficulty: 2, words: ["PENNY", "NICKEL", "DIME", "QUARTER"] },
      { name: "___ BOARD", difficulty: 3, words: ["KEY", "DASH", "CHESS", "SURF"] },
      { name: "SOUND LIKE LETTERS", difficulty: 4, words: ["BEE", "JAY", "CUE", "WHY"] },
    ],
  },
  {
    date: "2026-07-17",
    categories: [
      { name: "SHADES OF GREEN", difficulty: 1, words: ["OLIVE", "LIME", "EMERALD", "MINT"] },
      { name: "MARTIAL ARTS", difficulty: 2, words: ["KARATE", "JUDO", "BOXING", "SUMO"] },
      { name: "___ FALL", difficulty: 3, words: ["WATER", "RAIN", "PRAT", "NIGHT"] },
      { name: "POKER TERMS", difficulty: 4, words: ["BLUFF", "RAISE", "FOLD", "CALL"] },
    ],
  },
  {
    date: "2026-07-18",
    categories: [
      { name: "ROOMS IN A HOUSE", difficulty: 1, words: ["KITCHEN", "ATTIC", "GARAGE", "PANTRY"] },
      { name: "SEWING TOOLS", difficulty: 2, words: ["NEEDLE", "THREAD", "THIMBLE", "PIN"] },
      { name: "___ WORK", difficulty: 3, words: ["NET", "HOME", "FRAME", "TEAM"] },
      { name: "___ FLOWER", difficulty: 4, words: ["SUN", "MAY", "WALL", "CAULI"] },
    ],
  },
  {
    date: "2026-07-19",
    categories: [
      { name: "TYPES OF BREAD", difficulty: 1, words: ["RYE", "PITA", "NAAN", "SOURDOUGH"] },
      { name: "___ PROOF", difficulty: 2, words: ["BOMB", "BULLET", "FOOL", "CHILD"] },
      { name: "CONSTELLATIONS", difficulty: 3, words: ["ORION", "LEO", "LYRA", "DRACO"] },
      { name: "___ HORSE", difficulty: 4, words: ["SEA", "SAW", "RACE", "WAR"] },
    ],
  },
  {
    date: "2026-07-20",
    categories: [
      { name: "BODIES OF WATER", difficulty: 1, words: ["LAKE", "RIVER", "POND", "OCEAN"] },
      { name: "SPICES", difficulty: 2, words: ["CUMIN", "PAPRIKA", "NUTMEG", "GINGER"] },
      { name: "___ WATCH", difficulty: 3, words: ["OVER", "STOP", "WRIST", "NIGHT"] },
      { name: "___ CAST", difficulty: 4, words: ["BROAD", "FORE", "OUT", "POD"] },
    ],
  },
  {
    date: "2026-07-21",
    categories: [
      { name: "FARM ANIMALS", difficulty: 1, words: ["COW", "PIG", "GOAT", "SHEEP"] },
      { name: "BOARD GAMES", difficulty: 2, words: ["CLUE", "RISK", "SORRY", "TROUBLE"] },
      { name: "___ HOUSE", difficulty: 3, words: ["POWER", "LIGHT", "GREEN", "WARE"] },
      { name: "HOT ___", difficulty: 4, words: ["ROD", "SHOT", "SPOT", "HEAD"] },
    ],
  },
  {
    date: "2026-07-22",
    categories: [
      { name: "MONTHS", difficulty: 1, words: ["MARCH", "MAY", "JUNE", "AUGUST"] },
      { name: "PROGRAMMING LANGUAGES", difficulty: 2, words: ["PYTHON", "RUBY", "JAVA", "SWIFT"] },
      { name: "___ CASE", difficulty: 3, words: ["BRIEF", "SUIT", "STAIR", "BOOK"] },
      { name: "___ TAIL", difficulty: 4, words: ["PONY", "CAT", "FISH", "DOVE"] },
    ],
  },
  {
    date: "2026-07-23",
    categories: [
      { name: "GEMSTONES", difficulty: 1, words: ["RUBY", "PEARL", "JADE", "OPAL"] },
      { name: "IN A DECK OF CARDS", difficulty: 2, words: ["ACE", "KING", "QUEEN", "JACK"] },
      { name: "___ TIME", difficulty: 3, words: ["BED", "DAY", "HALF", "SPARE"] },
      { name: "___ CRACKER", difficulty: 4, words: ["FIRE", "NUT", "WISE", "SAFE"] },
    ],
  },
  {
    date: "2026-07-24",
    categories: [
      { name: "INSECTS", difficulty: 1, words: ["ANT", "BEE", "MOTH", "WASP"] },
      { name: "RAINBOW COLORS", difficulty: 2, words: ["RED", "ORANGE", "INDIGO", "VIOLET"] },
      { name: "___ PIT", difficulty: 3, words: ["ARM", "FIRE", "TAR", "SAND"] },
      { name: "___ WORM", difficulty: 4, words: ["EARTH", "BOOK", "SILK", "GLOW"] },
    ],
  },
  {
    date: "2026-07-25",
    categories: [
      { name: "SEVEN DWARFS", difficulty: 1, words: ["DOC", "HAPPY", "SLEEPY", "GRUMPY"] },
      { name: "CAR PARTS", difficulty: 2, words: ["HOOD", "TRUNK", "BUMPER", "FENDER"] },
      { name: "___ PORT", difficulty: 3, words: ["AIR", "PASS", "SEA", "CAR"] },
      { name: "___ STONE", difficulty: 4, words: ["BRIM", "LIME", "MILE", "GEM"] },
    ],
  },
];

/**
 * Deterministically resolves "today's" puzzle by exact calendar-date match.
 * Falls back to the first puzzle in the bank so the app always has content
 * to render, even outside the authored date range.
 */
export function getPuzzleForToday(date: Date = new Date()): Puzzle {
  const isoDate = toIsoDate(date);
  const match = PUZZLES.find((puzzle) => puzzle.date === isoDate);
  return match ?? PUZZLES[0];
}

function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
