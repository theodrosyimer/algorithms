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
]

let shuffledDeck: string[] = []

function shuffle() {
  let deckLength = Array(deck.length)
    .fill(0)
    .map((_, i) => i)

  for (let index = deckLength.length - 1; index >= 0; index--) {
    let randomNumber = Math.max(
      Math.round(Math.random() * (deckLength.length - 1)),
      0,
    )
    shuffledDeck.push(deck[randomNumber] as (typeof deck)[number])
    ;[deck[randomNumber]] = [deck[index] as (typeof deck)[number]]
    deck.splice(randomNumber, 1)
    deckLength.splice(randomNumber, 1)
  }

  return shuffledDeck
}

console.log(shuffle())
console.log(shuffle().length)
console.log(new Set(shuffle()))
console.log(new Set(shuffle()).size)
