/*
  wikipedia: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 */

type CardValue =
  | 'Ace'
  | 'Two'
  | 'Three'
  | 'Four'
  | 'Five'
  | 'Six'
  | 'Seven'
  | 'Eight'
  | 'Nine'
  | 'Ten'
  | 'Jack'
  | 'Queen'
  | 'King'

type Suit = 'Hearts' | 'Diamonds' | 'Spades' | 'Clubs'

type Card = `${CardValue} of ${Suit}`

type Deck = Card[]

// TODO: use a set instead of an array to be sure that there are no duplicates
const deck = [
  'Ace of Hearts',
  'Two of Hearts',
  'Three of Hearts',
  'Four of Hearts',
  'Five of Hearts',
  'Six of Hearts',
  'Seven of Hearts',
  'Eight of Hearts',
  'Nine of Hearts',
  'Ten of Hearts',
  'Jack of Hearts',
  'Queen of Hearts',
  'King of Hearts',
  'Ace of Diamonds',
  'Two of Diamonds',
  'Three of Diamonds',
  'Four of Diamonds',
  'Five of Diamonds',
  'Six of Diamonds',
  'Seven of Diamonds',
  'Eight of Diamonds',
  'Nine of Diamonds',
  'Ten of Diamonds',
  'Jack of Diamonds',
  'Queen of Diamonds',
  'King of Diamonds',
  'Ace of Spades',
  'Two of Spades',
  'Three of Spades',
  'Four of Spades',
  'Five of Spades',
  'Six of Spades',
  'Seven of Spades',
  'Eight of Spades',
  'Nine of Spades',
  'Ten of Spades',
  'Jack of Spades',
  'Queen of Spades',
  'King of Spades',
  'Ace of Clubs',
  'Two of Clubs',
  'Three of Clubs',
  'Four of Clubs',
  'Five of Clubs',
  'Six of Clubs',
  'Seven of Clubs',
  'Eight of Clubs',
  'Nine of Clubs',
  'Ten of Clubs',
  'Jack of Clubs',
  'Queen of Clubs',
  'King of Clubs',
] as const satisfies Deck

type DeckMatrix = typeof deckMatrix

const deckMatrix = {
  'Ace of Hearts': 14,
  'Two of Hearts': 2,
  'Three of Hearts': 3,
  'Four of Hearts': 4,
  'Five of Hearts': 5,
  'Six of Hearts': 6,
  'Seven of Hearts': 7,
  'Eight of Hearts': 8,
  'Nine of Hearts': 9,
  'Ten of Hearts': 10,
  'Jack of Hearts': 11,
  'Queen of Hearts': 12,
  'King of Hearts': 13,
  'Ace of Diamonds': 14,
  'Two of Diamonds': 2,
  'Three of Diamonds': 3,
  'Four of Diamonds': 4,
  'Five of Diamonds': 5,
  'Six of Diamonds': 6,
  'Seven of Diamonds': 7,
  'Eight of Diamonds': 8,
  'Nine of Diamonds': 9,
  'Ten of Diamonds': 10,
  'Jack of Diamonds': 11,
  'Queen of Diamonds': 12,
  'King of Diamonds': 13,
  'Ace of Spades': 14,
  'Two of Spades': 2,
  'Three of Spades': 3,
  'Four of Spades': 4,
  'Five of Spades': 5,
  'Six of Spades': 6,
  'Seven of Spades': 7,
  'Eight of Spades': 8,
  'Nine of Spades': 9,
  'Ten of Spades': 10,
  'Jack of Spades': 11,
  'Queen of Spades': 12,
  'King of Spades': 13,
  'Ace of Clubs': 14,
  'Two of Clubs': 2,
  'Three of Clubs': 3,
  'Four of Clubs': 4,
  'Five of Clubs': 5,
  'Six of Clubs': 6,
  'Seven of Clubs': 7,
  'Eight of Clubs': 8,
  'Nine of Clubs': 9,
  'Ten of Clubs': 10,
  'Jack of Clubs': 11,
  'Queen of Clubs': 12,
  'King of Clubs': 13,
} as const

const deckLength = 52 as const

type DeckLength = typeof deckLength

type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T
  ? ((t: T, ...a: A) => void) extends (...x: infer X) => void
    ? X
    : never
  : never

type EnumerateInternal<A extends Array<unknown>, N extends number> = {
  0: A
  1: EnumerateInternal<PrependNextNum<A>, N>
}[N extends A['length'] ? 0 : 1]

type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[]
  ? E
  : never

type AllowedIndices = Enumerate<DeckLength>

console.log('Shuffled Deck:', shuffle())

function shuffle() {
  // TODO: type this properly
  let shuffledDeck = new Set()
  let deck = [...reset()]
  let possibilities = Array(deck.length)
    .fill(0)
    .map((_, i) => i)

  for (let index = possibilities.length - 1; index >= 0; index--) {
    let randomNumber = randomMinMax(0, deck.length - 1)
    shuffledDeck.add(deck[randomNumber] as (typeof deck)[number])
    ;[deck[randomNumber]] = [deck[index] as (typeof deck)[number]]

    deck.splice(randomNumber, 1)
    possibilities.splice(randomNumber, 1)
  }

  return shuffledDeck
}

function get(card: Card) {
  return deckMatrix[card]
}

function reset() {
  return deck
}

export function randomMinMax(min = 0, max = 0): number {
  return Math.max(Math.round(Math.random() * max), min)
}

export function serveHand() {
  let hand /* = new Set() */
  return hand
}
