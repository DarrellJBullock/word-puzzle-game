import { Puzzle } from "./types";

/**
 * Puzzle bank (87 puzzles).
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
  {
    date: "2026-07-26",
    categories: [
      { name: "CAT BREEDS", difficulty: 1, words: ["SIAMESE", "PERSIAN", "TABBY", "SPHYNX"] },
      { name: "PLANETS", difficulty: 2, words: ["MARS", "VENUS", "SATURN", "JUPITER"] },
      { name: "___ BOX", difficulty: 3, words: ["MAIL", "SAND", "TOOL", "LUNCH"] },
      { name: "___ PRINT", difficulty: 4, words: ["FOOT", "FINGER", "BLUE", "NEWS"] },
    ],
  },
  {
    date: "2026-07-27",
    categories: [
      { name: "DESSERTS", difficulty: 1, words: ["CAKE", "PIE", "PUDDING", "TRIFLE"] },
      { name: "US PRESIDENTS", difficulty: 2, words: ["LINCOLN", "MADISON", "MONROE", "ADAMS"] },
      { name: "___ LINE", difficulty: 3, words: ["DEAD", "BASE", "HAIR", "PUNCH"] },
      { name: "___ MARKET", difficulty: 4, words: ["SUPER", "FLEA", "STOCK", "BLACK"] },
    ],
  },
  {
    date: "2026-07-28",
    categories: [
      { name: "TYPES OF TEA", difficulty: 1, words: ["GREEN", "BLACK", "OOLONG", "CHAMOMILE"] },
      { name: "CARD SUITS", difficulty: 2, words: ["SPADE", "HEART", "CLUB", "DIAMOND"] },
      { name: "___ CLUB", difficulty: 3, words: ["BOOK", "NIGHT", "GOLF", "FAN"] },
      { name: "___ HORN", difficulty: 4, words: ["FRENCH", "LONG", "FOG", "SHOE"] },
    ],
  },
  {
    date: "2026-07-29",
    categories: [
      { name: "SCHOOL SUBJECTS", difficulty: 1, words: ["MATH", "SCIENCE", "HISTORY", "ART"] },
      { name: "SHAKESPEARE PLAYS", difficulty: 2, words: ["HAMLET", "MACBETH", "OTHELLO", "TEMPEST"] },
      { name: "___ CAKE", difficulty: 3, words: ["PAN", "CUP", "FRUIT", "SHORT"] },
      { name: "___ ROOM", difficulty: 4, words: ["BATH", "BED", "CLASS", "MUSH"] },
    ],
  },
  {
    date: "2026-07-30",
    categories: [
      { name: "VEGETABLES", difficulty: 1, words: ["CARROT", "BROCCOLI", "SPINACH", "PEPPER"] },
      { name: "GREAT LAKES", difficulty: 2, words: ["ERIE", "HURON", "ONTARIO", "SUPERIOR"] },
      { name: "___ BELT", difficulty: 3, words: ["SEAT", "BLACK", "BIBLE", "CONVEYOR"] },
      { name: "___ JACK", difficulty: 4, words: ["LUMBER", "FLAP", "CRACKER", "HI"] },
    ],
  },
  {
    date: "2026-07-31",
    categories: [
      { name: "TYPES OF NUTS", difficulty: 1, words: ["ALMOND", "CASHEW", "PISTACHIO", "PECAN"] },
      { name: "SOLFEGE NOTES", difficulty: 2, words: ["DO", "RE", "MI", "FA"] },
      { name: "___ NOTE", difficulty: 3, words: ["FOOT", "KEY", "BANK", "SIDE"] },
      { name: "___ CHIP", difficulty: 4, words: ["POKER", "MICRO", "WOOD", "CHOCOLATE"] },
    ],
  },
  {
    date: "2026-08-01",
    categories: [
      { name: "KITCHEN UTENSILS", difficulty: 1, words: ["SPATULA", "WHISK", "LADLE", "TONGS"] },
      { name: "SEASONS", difficulty: 2, words: ["SPRING", "SUMMER", "FALL", "WINTER"] },
      { name: "___ FIELD", difficulty: 3, words: ["OUT", "IN", "BATTLE", "MINE"] },
      { name: "___ SPRING", difficulty: 4, words: ["HOT", "OFF", "MAIN", "BED"] },
    ],
  },
  {
    date: "2026-08-02",
    categories: [
      { name: "SHOE TYPES", difficulty: 1, words: ["SNEAKER", "SANDAL", "LOAFER", "BOOT"] },
      { name: "TYPES OF WHALES", difficulty: 2, words: ["BLUE", "HUMPBACK", "ORCA", "SPERM"] },
      { name: "___ SICK", difficulty: 3, words: ["HOME", "SEA", "LOVE", "CAR"] },
      { name: "___ POINT", difficulty: 4, words: ["MATCH", "VIEW", "BOILING", "PIN"] },
    ],
  },
  {
    date: "2026-08-03",
    categories: [
      { name: "TYPES OF SOUP", difficulty: 1, words: ["TOMATO", "MINESTRONE", "CHOWDER", "BISQUE"] },
      { name: "TYPES OF CLOUDS", difficulty: 2, words: ["CUMULUS", "CIRRUS", "STRATUS", "NIMBUS"] },
      { name: "___ BOW", difficulty: 3, words: ["RAIN", "EL", "CROSS", "LONG"] },
      { name: "___ HOUND", difficulty: 4, words: ["BLOOD", "GREY", "BASSET", "FOX"] },
    ],
  },
  {
    date: "2026-08-04",
    categories: [
      { name: "HERBS", difficulty: 1, words: ["BASIL", "THYME", "OREGANO", "PARSLEY"] },
      { name: "TYPES OF BOATS", difficulty: 2, words: ["CANOE", "KAYAK", "YACHT", "FERRY"] },
      { name: "___ DECK", difficulty: 3, words: ["SUN", "FLIGHT", "TAPE", "POOP"] },
      { name: "___ MATE", difficulty: 4, words: ["ROOM", "CLASS", "SOUL", "CHECK"] },
    ],
  },
  {
    date: "2026-08-05",
    categories: [
      { name: "BERRIES", difficulty: 1, words: ["STRAWBERRY", "BLUEBERRY", "RASPBERRY", "CRANBERRY"] },
      { name: "US STATES", difficulty: 2, words: ["TEXAS", "OHIO", "UTAH", "MAINE"] },
      { name: "___ HOUSE", difficulty: 3, words: ["TREE", "DOG", "FIRE", "BIRD"] },
      { name: "SNOW ___", difficulty: 4, words: ["BALL", "FLAKE", "MAN", "PLOW"] },
    ],
  },
  {
    date: "2026-08-06",
    categories: [
      { name: "REPTILES", difficulty: 1, words: ["LIZARD", "SNAKE", "TURTLE", "IGUANA"] },
      { name: "MUSICAL INSTRUMENTS", difficulty: 2, words: ["VIOLIN", "TRUMPET", "CLARINET", "CELLO"] },
      { name: "___ BALL", difficulty: 3, words: ["BASE", "FOOT", "BASKET", "EYE"] },
      { name: "FOOT ___", difficulty: 4, words: ["PATH", "NOTE", "PRINT", "HILL"] },
    ],
  },
  {
    date: "2026-08-07",
    categories: [
      { name: "SHADES OF BLUE", difficulty: 1, words: ["NAVY", "COBALT", "TEAL", "AZURE"] },
      { name: "OLYMPIC SPORTS", difficulty: 2, words: ["SWIMMING", "ARCHERY", "FENCING", "ROWING"] },
      { name: "___ BOARD", difficulty: 3, words: ["CARD", "SNOW", "SKATE", "CUP"] },
      { name: "CROSS ___", difficulty: 4, words: ["WORD", "ROAD", "WALK", "FIRE"] },
    ],
  },
  {
    date: "2026-08-08",
    categories: [
      { name: "TYPES OF HATS", difficulty: 1, words: ["FEDORA", "BERET", "SOMBRERO", "BEANIE"] },
      { name: "CITRUS FRUITS", difficulty: 2, words: ["LEMON", "LIME", "ORANGE", "GRAPEFRUIT"] },
      { name: "___ CAKE", difficulty: 3, words: ["CHEESE", "FISH", "HOT", "BEEF"] },
      { name: "SUN ___", difficulty: 4, words: ["FLOWER", "SHINE", "SET", "BURN"] },
    ],
  },
  {
    date: "2026-08-09",
    categories: [
      { name: "AFRICAN ANIMALS", difficulty: 1, words: ["LION", "ZEBRA", "GIRAFFE", "RHINO"] },
      { name: "BOXING TERMS", difficulty: 2, words: ["JAB", "HOOK", "UPPERCUT", "KNOCKOUT"] },
      { name: "___ FISH", difficulty: 3, words: ["CAT", "JELLY", "SWORD", "STAR"] },
      { name: "WATER ___", difficulty: 4, words: ["FALL", "MELON", "PROOF", "MARK"] },
    ],
  },
  {
    date: "2026-08-10",
    categories: [
      { name: "TYPES OF SANDWICHES", difficulty: 1, words: ["CLUB", "REUBEN", "PANINI", "SLIDER"] },
      { name: "CHEMICAL ELEMENTS", difficulty: 2, words: ["OXYGEN", "CARBON", "HELIUM", "NEON"] },
      { name: "___ LINE", difficulty: 3, words: ["HEAD", "OUT", "COAST", "PIPE"] },
      { name: "BACK ___", difficulty: 4, words: ["PACK", "BONE", "GROUND", "YARD"] },
    ],
  },
  {
    date: "2026-08-11",
    categories: [
      { name: "DESERT ANIMALS", difficulty: 1, words: ["CAMEL", "SCORPION", "COYOTE", "LIZARD"] },
      { name: "WINTER OLYMPIC SPORTS", difficulty: 2, words: ["SKIING", "LUGE", "CURLING", "BOBSLED"] },
      { name: "MOON ___", difficulty: 3, words: ["LIGHT", "SHINE", "WALK", "BEAM"] },
      { name: "___ FIELD", difficulty: 4, words: ["OUT", "IN", "BATTLE", "MINE"] },
    ],
  },
  {
    date: "2026-08-12",
    categories: [
      { name: "TYPES OF CHEESE", difficulty: 1, words: ["CHEDDAR", "GOUDA", "BRIE", "SWISS"] },
      { name: "KNOTS", difficulty: 2, words: ["SQUARE", "GRANNY", "SLIP", "BOWLINE"] },
      { name: "___ WORK", difficulty: 3, words: ["ART", "FRAME", "TEAM", "CLOCK"] },
      { name: "STAR ___", difficulty: 4, words: ["FISH", "LIGHT", "DUST", "GAZE"] },
    ],
  },
  {
    date: "2026-08-13",
    categories: [
      { name: "SHAPES", difficulty: 1, words: ["TRIANGLE", "SQUARE", "CIRCLE", "HEXAGON"] },
      { name: "TYPES OF WEATHER", difficulty: 2, words: ["SUNNY", "CLOUDY", "RAINY", "WINDY"] },
      { name: "___ DROP", difficulty: 3, words: ["RAIN", "TEAR", "DEW", "GUM"] },
      { name: "BACK ___", difficulty: 4, words: ["FIRE", "STAGE", "LOG", "DROP"] },
    ],
  },
  {
    date: "2026-08-14",
    categories: [
      { name: "SCHOOL SUPPLIES", difficulty: 1, words: ["PENCIL", "ERASER", "STAPLER", "BINDER"] },
      { name: "FAMOUS PAINTERS", difficulty: 2, words: ["MONET", "PICASSO", "DEGAS", "RENOIR"] },
      { name: "___ SIDE", difficulty: 3, words: ["OUT", "IN", "BLIND", "CURB"] },
      { name: "UP ___", difficulty: 4, words: ["TOWN", "GRADE", "ROOT", "LIFT"] },
    ],
  },
  {
    date: "2026-08-15",
    categories: [
      { name: "TROPICAL FRUITS", difficulty: 1, words: ["MANGO", "PAPAYA", "PINEAPPLE", "GUAVA"] },
      { name: "US NATIONAL PARKS", difficulty: 2, words: ["YELLOWSTONE", "YOSEMITE", "ZION", "DENALI"] },
      { name: "___ SHELL", difficulty: 3, words: ["SEA", "NUT", "EGG", "BOMB"] },
      { name: "DOWN ___", difficulty: 4, words: ["TOWN", "POUR", "STAIRS", "FALL"] },
    ],
  },
  {
    date: "2026-08-16",
    categories: [
      { name: "CIRCUS PERFORMERS", difficulty: 1, words: ["ACROBAT", "CLOWN", "JUGGLER", "RINGMASTER"] },
      { name: "SEA CREATURES", difficulty: 2, words: ["OCTOPUS", "STARFISH", "CRAB", "JELLYFISH"] },
      { name: "OVER ___", difficulty: 3, words: ["BOARD", "TIME", "LOOK", "NIGHT"] },
      { name: "SIDE ___", difficulty: 4, words: ["WALK", "KICK", "SHOW", "TRACK"] },
    ],
  },
  {
    date: "2026-08-17",
    categories: [
      { name: "ICE CREAM FLAVORS", difficulty: 1, words: ["VANILLA", "CHOCOLATE", "STRAWBERRY", "PISTACHIO"] },
      { name: "TYPES OF BRIDGES", difficulty: 2, words: ["SUSPENSION", "ARCH", "BEAM", "TRUSS"] },
      { name: "KEY ___", difficulty: 3, words: ["BOARD", "HOLE", "STONE", "CHAIN"] },
      { name: "WIND ___", difficulty: 4, words: ["MILL", "SHIELD", "PIPE", "FALL"] },
    ],
  },
  {
    date: "2026-08-18",
    categories: [
      { name: "DINOSAURS", difficulty: 1, words: ["TRICERATOPS", "STEGOSAURUS", "VELOCIRAPTOR", "BRACHIOSAURUS"] },
      { name: "ROMAN GODS", difficulty: 2, words: ["JUPITER", "NEPTUNE", "MARS", "VENUS"] },
      { name: "___ HOUND", difficulty: 3, words: ["BLOOD", "GREY", "BASSET", "FOX"] },
      { name: "OUT ___", difficulty: 4, words: ["LAW", "LINE", "BREAK", "FIELD"] },
    ],
  },
  {
    date: "2026-08-19",
    categories: [
      { name: "BAKERY ITEMS", difficulty: 1, words: ["CROISSANT", "MUFFIN", "SCONE", "DANISH"] },
      { name: "US MOUNTAIN RANGES", difficulty: 2, words: ["ROCKIES", "APPALACHIANS", "CASCADES", "SIERRAS"] },
      { name: "___ MATE", difficulty: 3, words: ["ROOM", "CLASS", "SOUL", "CHECK"] },
      { name: "FIRE ___", difficulty: 4, words: ["PLACE", "FIGHTER", "WOOD", "CRACKER"] },
    ],
  },
  {
    date: "2026-08-20",
    categories: [
      { name: "SALAD INGREDIENTS", difficulty: 1, words: ["LETTUCE", "TOMATO", "CUCUMBER", "CROUTON"] },
      { name: "FAMOUS INVENTORS", difficulty: 2, words: ["EDISON", "TESLA", "NEWTON", "FRANKLIN"] },
      { name: "___ FALL", difficulty: 3, words: ["WIND", "PIT", "SHORT", "DOWN"] },
      { name: "___ CAP", difficulty: 4, words: ["HUB", "KNEE", "NIGHT", "RED"] },
    ],
  },
  {
    date: "2026-08-21",
    categories: [
      { name: "TYPES OF PIES", difficulty: 1, words: ["APPLE", "PUMPKIN", "PECAN", "CHERRY"] },
      { name: "GYMNASTICS EVENTS", difficulty: 2, words: ["VAULT", "RINGS", "BEAM", "FLOOR"] },
      { name: "___ STONE", difficulty: 3, words: ["CORNER", "KEY", "TOMB", "GALL"] },
      { name: "BOOK ___", difficulty: 4, words: ["WORM", "CASE", "MARK", "SHELF"] },
    ],
  },
  {
    date: "2026-08-22",
    categories: [
      { name: "AFRICAN COUNTRIES", difficulty: 1, words: ["KENYA", "EGYPT", "GHANA", "NIGERIA"] },
      { name: "TYPES OF CANDY", difficulty: 2, words: ["TAFFY", "FUDGE", "TOFFEE", "CARAMEL"] },
      { name: "___ TIME", difficulty: 3, words: ["LIFE", "OVER", "SOME", "RAG"] },
      { name: "RAIN ___", difficulty: 4, words: ["BOW", "COAT", "FALL", "DROP"] },
    ],
  },
  {
    date: "2026-08-23",
    categories: [
      { name: "FAMOUS SCIENTISTS", difficulty: 1, words: ["DARWIN", "CURIE", "EINSTEIN", "GALILEO"] },
      { name: "HAIRSTYLES", difficulty: 2, words: ["BRAID", "PONYTAIL", "BUN", "MOHAWK"] },
      { name: "___ WALK", difficulty: 3, words: ["SIDE", "BOARD", "CAKE", "MOON"] },
      { name: "SUN ___", difficulty: 4, words: ["FLOWER", "SHINE", "SET", "ROOF"] },
    ],
  },
  {
    date: "2026-08-24",
    categories: [
      { name: "ROCK TYPES", difficulty: 1, words: ["GRANITE", "MARBLE", "SLATE", "BASALT"] },
      { name: "MUSIC GENRES", difficulty: 2, words: ["JAZZ", "BLUES", "REGGAE", "FOLK"] },
      { name: "___ SHOT", difficulty: 3, words: ["SNAP", "MUG", "LONG", "MOON"] },
      { name: "OFF ___", difficulty: 4, words: ["SHORE", "SPRING", "SET", "BEAT"] },
    ],
  },
  {
    date: "2026-08-25",
    categories: [
      { name: "SPACE OBJECTS", difficulty: 1, words: ["COMET", "ASTEROID", "METEOR", "NEBULA"] },
      { name: "CARD GAMES", difficulty: 2, words: ["SOLITAIRE", "EUCHRE", "SPADES", "CANASTA"] },
      { name: "___ BOX", difficulty: 3, words: ["MATCH", "JUKE", "ICE", "SNUFF"] },
      { name: "IN ___", difficulty: 4, words: ["SIDE", "PUT", "COME", "DOOR"] },
    ],
  },
  {
    date: "2026-08-26",
    categories: [
      { name: "AMPHIBIANS", difficulty: 1, words: ["FROG", "TOAD", "SALAMANDER", "NEWT"] },
      { name: "US HOLIDAYS", difficulty: 2, words: ["THANKSGIVING", "HALLOWEEN", "EASTER", "CHRISTMAS"] },
      { name: "___ PACK", difficulty: 3, words: ["BACK", "SIX", "ICE", "WOLF"] },
      { name: "OUT ___", difficulty: 4, words: ["LAW", "BREAK", "FIELD", "LOOK"] },
    ],
  },
  {
    date: "2026-08-27",
    categories: [
      { name: "FAMOUS EXPLORERS", difficulty: 1, words: ["COLUMBUS", "MAGELLAN", "COOK", "DRAKE"] },
      { name: "TYPES OF CHAIRS", difficulty: 2, words: ["RECLINER", "ROCKER", "STOOL", "ARMCHAIR"] },
      { name: "___ ROOM", difficulty: 3, words: ["COURT", "DARK", "REST", "SHOW"] },
      { name: "___ SHIP", difficulty: 4, words: ["CENSOR", "OWNER", "FLAG", "TOWN"] },
    ],
  },
  {
    date: "2026-08-28",
    categories: [
      { name: "ARCTIC ANIMALS", difficulty: 1, words: ["PENGUIN", "WALRUS", "SEAL", "NARWHAL"] },
      { name: "FAMOUS COMPOSERS", difficulty: 2, words: ["BACH", "MOZART", "BEETHOVEN", "CHOPIN"] },
      { name: "___ CODE", difficulty: 3, words: ["ZIP", "BAR", "AREA", "DRESS"] },
      { name: "___ MILL", difficulty: 4, words: ["WIND", "SAW", "TREAD", "WATER"] },
    ],
  },
  {
    date: "2026-08-29",
    categories: [
      { name: "FAST FOOD ITEMS", difficulty: 1, words: ["BURGER", "FRIES", "NUGGET", "SHAKE"] },
      { name: "BASEBALL POSITIONS", difficulty: 2, words: ["PITCHER", "CATCHER", "SHORTSTOP", "OUTFIELDER"] },
      { name: "___ BELT", difficulty: 3, words: ["SEAT", "BLACK", "BIBLE", "SUN"] },
      { name: "___ ARM", difficulty: 4, words: ["FORE", "FIRE", "YARD", "UNDER"] },
    ],
  },
  {
    date: "2026-08-30",
    categories: [
      { name: "FAMOUS AUTHORS", difficulty: 1, words: ["TWAIN", "DICKENS", "AUSTEN", "HEMINGWAY"] },
      { name: "CAPITAL CITIES", difficulty: 2, words: ["PARIS", "TOKYO", "CAIRO", "OTTAWA"] },
      { name: "___ YARD", difficulty: 3, words: ["BACK", "COURT", "JUNK", "VINE"] },
      { name: "___ WORTHY", difficulty: 4, words: ["NEWS", "TRUST", "PRAISE", "SEA"] },
    ],
  },
  {
    date: "2026-08-31",
    categories: [
      { name: "TYPES OF PEPPERS", difficulty: 1, words: ["JALAPENO", "HABANERO", "POBLANO", "SERRANO"] },
      { name: "BALLET TERMS", difficulty: 2, words: ["PLIE", "RELEVE", "ARABESQUE", "PIROUETTE"] },
      { name: "___ LOCK", difficulty: 3, words: ["DEAD", "PAD", "GRID", "HEAD"] },
      { name: "___ SICK", difficulty: 4, words: ["HOME", "SEA", "CAR", "AIR"] },
    ],
  },
  {
    date: "2026-09-01",
    categories: [
      { name: "FARM CROPS", difficulty: 1, words: ["WHEAT", "CORN", "BARLEY", "OATS"] },
      { name: "WEATHER PHENOMENA", difficulty: 2, words: ["TORNADO", "HURRICANE", "BLIZZARD", "DROUGHT"] },
      { name: "___ STORM", difficulty: 3, words: ["FIRE", "RAIN", "DUST", "ICE"] },
      { name: "___ BOARD", difficulty: 4, words: ["BILL", "WASH", "SCORE", "SNOW"] },
    ],
  },
  {
    date: "2026-09-02",
    categories: [
      { name: "TYPES OF SHARKS", difficulty: 1, words: ["HAMMERHEAD", "TIGER", "MAKO", "BULL"] },
      { name: "US RIVERS", difficulty: 2, words: ["MISSISSIPPI", "COLORADO", "HUDSON", "POTOMAC"] },
      { name: "___ HAWK", difficulty: 3, words: ["NIGHT", "SPARROW", "FISH", "WAR"] },
      { name: "___ BIRD", difficulty: 4, words: ["BLACK", "LADY", "MOCKING", "HUMMING"] },
    ],
  },
  {
    date: "2026-09-03",
    categories: [
      { name: "WAYS TO COOK AN EGG", difficulty: 1, words: ["SCRAMBLED", "POACHED", "BOILED", "FRIED"] },
      { name: "MYTHICAL CREATURES", difficulty: 2, words: ["DRAGON", "UNICORN", "PHOENIX", "GRIFFIN"] },
      { name: "___ WORM", difficulty: 3, words: ["TAPE", "RING", "SILK", "GLOW"] },
      { name: "___ BUG", difficulty: 4, words: ["LADY", "LOVE", "BED", "JITTER"] },
    ],
  },
  {
    date: "2026-09-04",
    categories: [
      { name: "OUTERWEAR", difficulty: 1, words: ["JACKET", "SWEATER", "HOODIE", "VEST"] },
      { name: "AUSTRALIAN ANIMALS", difficulty: 2, words: ["KANGAROO", "KOALA", "WOMBAT", "DINGO"] },
      { name: "___ COAT", difficulty: 3, words: ["OVER", "RAIN", "TURN", "TOP"] },
      { name: "___ FLY", difficulty: 4, words: ["SAW", "HORSE", "BOT", "DRAGON"] },
    ],
  },
  {
    date: "2026-09-05",
    categories: [
      { name: "GARDEN TOOLS", difficulty: 1, words: ["RAKE", "SHOVEL", "HOE", "TROWEL"] },
      { name: "PERCUSSION INSTRUMENTS", difficulty: 2, words: ["DRUM", "CYMBAL", "TAMBOURINE", "MARACAS"] },
      { name: "___ PAPER", difficulty: 3, words: ["NEWS", "WALL", "SAND", "FLY"] },
      { name: "___ WHEEL", difficulty: 4, words: ["FERRIS", "PIN", "COLOR", "WATER"] },
    ],
  },
  {
    date: "2026-09-06",
    categories: [
      { name: "DAIRY PRODUCTS", difficulty: 1, words: ["MILK", "CHEESE", "YOGURT", "BUTTER"] },
      { name: "SPORTS EQUIPMENT", difficulty: 2, words: ["HELMET", "RACKET", "CLEATS", "PADS"] },
      { name: "___ NUT", difficulty: 3, words: ["PEA", "WAL", "COCO", "HAZEL"] },
      { name: "___ PROOF", difficulty: 4, words: ["BOMB", "BULLET", "FOOL", "WATER"] },
    ],
  },
  {
    date: "2026-09-07",
    categories: [
      { name: "MUSHROOM TYPES", difficulty: 1, words: ["PORTOBELLO", "SHIITAKE", "CREMINI", "MOREL"] },
      { name: "FAMOUS MOUNTAINS", difficulty: 2, words: ["EVEREST", "KILIMANJARO", "FUJI", "MATTERHORN"] },
      { name: "___ CASE", difficulty: 3, words: ["BRIEF", "SUIT", "UPPER", "LOWER"] },
      { name: "___ TAIL", difficulty: 4, words: ["PONY", "COCK", "FOX", "OX"] },
    ],
  },
  {
    date: "2026-09-08",
    categories: [
      { name: "TYPES OF BEANS", difficulty: 1, words: ["KIDNEY", "PINTO", "BLACK", "LIMA"] },
      { name: "ANCIENT CIVILIZATIONS", difficulty: 2, words: ["ROMAN", "EGYPTIAN", "MAYAN", "GREEK"] },
      { name: "___ EYED", difficulty: 3, words: ["EAGLE", "CROSS", "DOE", "WIDE"] },
      { name: "___ SIGHTED", difficulty: 4, words: ["FAR", "NEAR", "CLEAR", "SHORT"] },
    ],
  },
  {
    date: "2026-09-09",
    categories: [
      { name: "ICE CREAM TOPPINGS", difficulty: 1, words: ["SPRINKLES", "FUDGE", "NUTS", "CHERRY"] },
      { name: "TYPES OF GUITARS", difficulty: 2, words: ["ACOUSTIC", "ELECTRIC", "BASS", "CLASSICAL"] },
      { name: "___ CONE", difficulty: 3, words: ["PINE", "SNOW", "ICE", "TRAFFIC"] },
      { name: "___ STRING", difficulty: 4, words: ["SHOE", "HAM", "BOW", "DRAW"] },
    ],
  },
  {
    date: "2026-09-10",
    categories: [
      { name: "AUTUMN THEMES", difficulty: 1, words: ["PUMPKIN", "ACORN", "HARVEST", "MAPLE"] },
      { name: "TYPES OF PUZZLES", difficulty: 2, words: ["JIGSAW", "CROSSWORD", "SUDOKU", "RIDDLE"] },
      { name: "___ WORD", difficulty: 3, words: ["KEY", "PASS", "SWEAR", "BUZZ"] },
      { name: "___ HOLE", difficulty: 4, words: ["PIN", "MAN", "POT", "LOOP"] },
    ],
  },
  {
    date: "2026-09-11",
    categories: [
      { name: "TYPES OF VEHICLES", difficulty: 1, words: ["SEDAN", "COUPE", "MINIVAN", "PICKUP"] },
      { name: "FAMOUS VOLCANOES", difficulty: 2, words: ["VESUVIUS", "KRAKATOA", "ETNA", "FUJI"] },
      { name: "___ CYCLE", difficulty: 3, words: ["MOTOR", "BI", "UNI", "RE"] },
      { name: "___ WAY", difficulty: 4, words: ["HIGH", "DRIVE", "RUN", "SUB"] },
    ],
  },
  {
    date: "2026-09-12",
    categories: [
      { name: "TYPES OF CHOCOLATE", difficulty: 1, words: ["DARK", "MILK", "WHITE", "RUBY"] },
      { name: "FAMOUS LAKES", difficulty: 2, words: ["TAHOE", "BAIKAL", "VICTORIA", "GENEVA"] },
      { name: "___ BAR", difficulty: 3, words: ["CANDY", "CROW", "SAND", "SIDE"] },
      { name: "___ SET", difficulty: 4, words: ["SUN", "MIND", "HEAD", "OFF"] },
    ],
  },
  {
    date: "2026-09-13",
    categories: [
      { name: "ROOT VEGETABLES", difficulty: 1, words: ["CARROT", "POTATO", "BEET", "RADISH"] },
      { name: "WORLD LANDMARKS", difficulty: 2, words: ["COLOSSEUM", "PYRAMID", "ACROPOLIS", "STONEHENGE"] },
      { name: "___ HEAD", difficulty: 3, words: ["AIR", "FORE", "HOT", "EGG"] },
      { name: "___ ACHE", difficulty: 4, words: ["TOOTH", "STOMACH", "BACK", "HEART"] },
    ],
  },
  {
    date: "2026-09-14",
    categories: [
      { name: "CIRCUS ANIMALS", difficulty: 1, words: ["LION", "ELEPHANT", "TIGER", "BEAR"] },
      { name: "FAMOUS PHILOSOPHERS", difficulty: 2, words: ["SOCRATES", "PLATO", "ARISTOTLE", "KANT"] },
      { name: "___ RING", difficulty: 3, words: ["KEY", "EAR", "NOSE", "BULL"] },
      { name: "___ TOP", difficulty: 4, words: ["DESK", "LAP", "ROOF", "TABLE"] },
    ],
  },
  {
    date: "2026-09-15",
    categories: [
      { name: "ART SUPPLIES", difficulty: 1, words: ["MARKER", "HIGHLIGHTER", "CHALK", "CRAYON"] },
      { name: "WORLD RIVERS", difficulty: 2, words: ["NILE", "AMAZON", "DANUBE", "THAMES"] },
      { name: "___ LIGHT", difficulty: 3, words: ["DAY", "FLASH", "LIME", "STAR"] },
      { name: "___ POINT", difficulty: 4, words: ["MATCH", "VIEW", "BOILING", "GUN"] },
    ],
  },
  {
    date: "2026-09-16",
    categories: [
      { name: "TYPES OF TRAINS", difficulty: 1, words: ["SUBWAY", "FREIGHT", "BULLET", "STEAM"] },
      { name: "TYPES OF DRUMS", difficulty: 2, words: ["SNARE", "BASS", "BONGO", "TIMPANI"] },
      { name: "___ WHISTLE", difficulty: 3, words: ["WOLF", "DOG", "TIN", "TRAIN"] },
      { name: "___ HORN", difficulty: 4, words: ["FRENCH", "LONG", "FOG", "BULL"] },
    ],
  },
  {
    date: "2026-09-17",
    categories: [
      { name: "SALAD DRESSINGS", difficulty: 1, words: ["RANCH", "VINAIGRETTE", "CAESAR", "ITALIAN"] },
      { name: "FICTIONAL DETECTIVES", difficulty: 2, words: ["SHERLOCK", "POIROT", "COLUMBO", "MARLOWE"] },
      { name: "___ APPLE", difficulty: 3, words: ["PINE", "CRAB", "MAY", "CANDY"] },
      { name: "___ DOG", difficulty: 4, words: ["HOT", "BULL", "WATCH", "SHEEP"] },
    ],
  },
  {
    date: "2026-09-18",
    categories: [
      { name: "DESERT PLANTS", difficulty: 1, words: ["BARREL", "SAGUARO", "PRICKLY", "AGAVE"] },
      { name: "PIRATE GEAR", difficulty: 2, words: ["PARROT", "TREASURE", "CUTLASS", "EYEPATCH"] },
      { name: "___ BEARD", difficulty: 3, words: ["BLUE", "GRAY", "RED", "BLACK"] },
      { name: "___ PATCH", difficulty: 4, words: ["PUMPKIN", "CABBAGE", "ELBOW", "BRIAR"] },
    ],
  },
  {
    date: "2026-09-19",
    categories: [
      { name: "WINTER CLOTHING", difficulty: 1, words: ["SCARF", "MITTENS", "EARMUFFS", "PARKA"] },
      { name: "BOARD GAME PIECES", difficulty: 2, words: ["DICE", "TOKEN", "CARD", "SPINNER"] },
      { name: "___ BALL", difficulty: 3, words: ["SNOW", "EYE", "HIGH", "ODD"] },
      { name: "___ SUIT", difficulty: 4, words: ["SWIM", "LAW", "JUMP", "TRACK"] },
    ],
  },
  {
    date: "2026-09-20",
    categories: [
      { name: "TYPES OF BOOTS", difficulty: 1, words: ["COWBOY", "RAIN", "COMBAT", "HIKING"] },
      { name: "BODY PARTS", difficulty: 2, words: ["ELBOW", "KNEE", "SHOULDER", "ANKLE"] },
      { name: "___ STRAP", difficulty: 3, words: ["BOOT", "CHIN", "WRIST", "JOCK"] },
      { name: "___ GUARD", difficulty: 4, words: ["BODY", "LIFE", "SAFE", "MOUTH"] },
    ],
  },
  {
    date: "2026-09-21",
    categories: [
      { name: "TYPES OF JUICE", difficulty: 1, words: ["POMEGRANATE", "PINEAPPLE", "MANGO", "TOMATO"] },
      { name: "TYPES OF STORMS", difficulty: 2, words: ["HURRICANE", "TORNADO", "TYPHOON", "CYCLONE"] },
      { name: "___ ADE", difficulty: 3, words: ["LEMON", "LIME", "PAR", "BLOCK"] },
      { name: "___ FRONT", difficulty: 4, words: ["COLD", "STORE", "WATER", "FORE"] },
    ],
  },
  {
    date: "2026-09-22",
    categories: [
      { name: "TYPES OF BICYCLES", difficulty: 1, words: ["MOUNTAIN", "ROAD", "TANDEM", "CRUISER"] },
      { name: "SIMPLE MACHINES", difficulty: 2, words: ["LEVER", "PULLEY", "WEDGE", "SCREW"] },
      { name: "___ DRIVER", difficulty: 3, words: ["TAXI", "CAB", "BACKSEAT", "DESIGNATED"] },
      { name: "___ SCREW", difficulty: 4, words: ["THUMB", "CORK", "SET", "HAND"] },
    ],
  },
  {
    date: "2026-09-23",
    categories: [
      { name: "BEACH ITEMS", difficulty: 1, words: ["TOWEL", "UMBRELLA", "COOLER", "SUNSCREEN"] },
      { name: "TYPES OF SHELLS", difficulty: 2, words: ["CONCH", "CLAM", "OYSTER", "SCALLOP"] },
      { name: "___ SHORE", difficulty: 3, words: ["OFF", "SEA", "LAKE", "ON"] },
      { name: "___ WEED", difficulty: 4, words: ["RAG", "MILK", "TUMBLE", "CHICK"] },
    ],
  },
  {
    date: "2026-09-24",
    categories: [
      { name: "CAMPING GEAR", difficulty: 1, words: ["TENT", "LANTERN", "COMPASS", "CANTEEN"] },
      { name: "US DESERTS", difficulty: 2, words: ["MOJAVE", "SONORAN", "CHIHUAHUAN", "PAINTED"] },
      { name: "___ FIRE", difficulty: 3, words: ["CAMP", "BON", "CROSS", "MIS"] },
      { name: "___ PASS", difficulty: 4, words: ["OVER", "UNDER", "BY", "SUR"] },
    ],
  },
  {
    date: "2026-09-25",
    categories: [
      { name: "TYPES OF COOKIES", difficulty: 1, words: ["OATMEAL", "SNICKERDOODLE", "SHORTBREAD", "MACAROON"] },
      { name: "FAMOUS PHYSICISTS", difficulty: 2, words: ["EINSTEIN", "NEWTON", "CURIE", "HAWKING"] },
      { name: "___ BREAD", difficulty: 3, words: ["GINGER", "FLAT", "CORN", "RYE"] },
      { name: "___ WAVE", difficulty: 4, words: ["HEAT", "MICRO", "SOUND", "SHOCK"] },
    ],
  },
  {
    date: "2026-09-26",
    categories: [
      { name: "STREET FOOD", difficulty: 1, words: ["TACO", "HOTDOG", "KEBAB", "CREPE"] },
      { name: "EUROPEAN COUNTRIES", difficulty: 2, words: ["FRANCE", "SPAIN", "ITALY", "GREECE"] },
      { name: "___ DOG", difficulty: 3, words: ["BULL", "WATCH", "SHEEP", "CORN"] },
      { name: "___ CAKE", difficulty: 4, words: ["RICE", "CRAB", "CARROT", "SPONGE"] },
    ],
  },
  {
    date: "2026-09-27",
    categories: [
      { name: "PARTY SUPPLIES", difficulty: 1, words: ["CONFETTI", "STREAMER", "BALLOON", "PINATA"] },
      { name: "FAMOUS MAGICIANS", difficulty: 2, words: ["HOUDINI", "COPPERFIELD", "BLAINE", "MERLIN"] },
      { name: "___ TRICK", difficulty: 3, words: ["HAT", "CARD", "DIRTY", "PARTY"] },
      { name: "___ HAT", difficulty: 4, words: ["TOP", "HARD", "HIGH", "OLD"] },
    ],
  },
  {
    date: "2026-09-28",
    categories: [
      { name: "MUSICAL NOTATION", difficulty: 1, words: ["SHARP", "FLAT", "NATURAL", "REST"] },
      { name: "WORLD LANGUAGES", difficulty: 2, words: ["SPANISH", "FRENCH", "MANDARIN", "ARABIC"] },
      { name: "___ REST", difficulty: 3, words: ["ARM", "HEAD", "BACK", "FOOT"] },
      { name: "___ SCALE", difficulty: 4, words: ["FISH", "FULL", "GREY", "TIME"] },
    ],
  },
  {
    date: "2026-09-29",
    categories: [
      { name: "MORNING ROUTINE ITEMS", difficulty: 1, words: ["TOOTHBRUSH", "RAZOR", "TOWEL", "MIRROR"] },
      { name: "FAMOUS ASTRONAUTS", difficulty: 2, words: ["ARMSTRONG", "ALDRIN", "GLENN", "GAGARIN"] },
      { name: "___ BRUSH", difficulty: 3, words: ["HAIR", "PAINT", "AIR", "UNDER"] },
      { name: "___ CRAFT", difficulty: 4, words: ["SPACE", "WITCH", "HAND", "STAGE"] },
    ],
  },
  {
    date: "2026-09-30",
    categories: [
      { name: "TYPES OF LUGGAGE", difficulty: 1, words: ["SUITCASE", "BACKPACK", "DUFFEL", "TROLLEY"] },
      { name: "FAMOUS CANALS", difficulty: 2, words: ["SUEZ", "PANAMA", "ERIE", "CORINTH"] },
      { name: "___ CASE", difficulty: 3, words: ["BRIEF", "UPPER", "LOWER", "BOOK"] },
      { name: "___ PORT", difficulty: 4, words: ["AIR", "PASS", "SEA", "RE"] },
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
