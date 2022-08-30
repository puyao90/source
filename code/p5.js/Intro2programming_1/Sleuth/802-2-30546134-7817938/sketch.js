/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 7817938
CaseNum: 802-2-30546134-7817938

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in win_hand from the deck and store it in the hand array.

*Write a function called buildWinningHand and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in win_hand add it to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 9 and end at 70.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var deck = [
  {s: "Spades", n: "A"},
  {s: "Spades", n: "2"},
  {s: "Spades", n: "3"},
  {s: "Spades", n: "4"},
  {s: "Spades", n: "5"},
  {s: "Spades", n: "6"},
  {s: "Spades", n: "7"},
  {s: "Spades", n: "8"},
  {s: "Spades", n: "9"},
  {s: "Spades", n: "10"},
  {s: "Spades", n: "J"},
  {s: "Spades", n: "Q"},
  {s: "Spades", n: "K"},
  {s: "Clubs", n: "A"},
  {s: "Clubs", n: "2"},
  {s: "Clubs", n: "3"},
  {s: "Clubs", n: "4"},
  {s: "Clubs", n: "5"},
  {s: "Clubs", n: "6"},
  {s: "Clubs", n: "7"},
  {s: "Clubs", n: "8"},
  {s: "Clubs", n: "9"},
  {s: "Clubs", n: "10"},
  {s: "Clubs", n: "J"},
  {s: "Clubs", n: "Q"},
  {s: "Clubs", n: "K"},
  {s: "Hearts", n: "A"},
  {s: "Hearts", n: "2"},
  {s: "Hearts", n: "3"},
  {s: "Hearts", n: "4"},
  {s: "Hearts", n: "5"},
  {s: "Hearts", n: "6"},
  {s: "Hearts", n: "7"},
  {s: "Hearts", n: "8"},
  {s: "Hearts", n: "9"},
  {s: "Hearts", n: "10"},
  {s: "Hearts", n: "J"},
  {s: "Hearts", n: "Q"},
  {s: "Hearts", n: "K"},
  {s: "Diamonds", n: "A"},
  {s: "Diamonds", n: "2"},
  {s: "Diamonds", n: "3"},
  {s: "Diamonds", n: "4"},
  {s: "Diamonds", n: "5"},
  {s: "Diamonds", n: "6"},
  {s: "Diamonds", n: "7"},
  {s: "Diamonds", n: "8"},
  {s: "Diamonds", n: "9"},
  {s: "Diamonds", n: "10"},
  {s: "Diamonds", n: "J"},
  {s: "Diamonds", n: "Q"},
  {s: "Diamonds", n: "K"},
];
var deck_img;
var table_img;
var drawCounter = 0;

var win_hand = [
  {cardSuit: "Spades", v: "10"},
  {cardSuit: "Clubs", v: "K"},
  {cardSuit: "Hearts", v: "J"},
  {cardSuit: "Diamonds", v: "Q"},
  {cardSuit: "Clubs", v: "10"},
];
var hand = [];

function preload() {
  deck_img = loadImage("deck.png");
  table_img = loadImage("table.png");
}
function setup() {
  createCanvas(table_img.width, table_img.height);
  frameRate(30);

  //call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
  shuffleSeed();
  shuffleDeck(shuffleSeed());
  //call your buildWinningHand function here
  buildWinningHand();
}

//write your buildWinningHand function here
function buildWinningHand() {
  for (let index = 0; index < deck.length; index++) {
    for (let j = 0; j < win_hand.length; j++) {
      if (
        deck[index].s == win_hand[j].cardSuit &&
        deck[index].n == win_hand[j].v
      ) {
        hand.push(deck[index]);
        break;
      }
    }
  }
}

//write your shuffleSeed() function here.
function shuffleSeed() {
  var shuffle = [];
  for (let index = 0; index < 52; index++) {
    shuffle.push(round(random(9, 70)));
  }
  return shuffle;
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
  //shuffle the deck by rotating the cards location with the values in
  //shuffleSeed. Repeat this a random number of times between 20 and 50
  var shuffleIterations = parseInt(random(20, 50));
  for (var i = 0; i < shuffleIterations; i++) {
    for (var j = 0; j < deck.length; j++) {
      var tempCard = deck.splice(j, 1);
      var newLoc = (j + shuffleSeed[j]) % 52;
      deck.splice(newLoc, 0, tempCard[0]);
    }
  }
}

function draw() {
  image(table_img, 0, 0);

  if (frameCount % 7 == 0) {
    drawCounter++;
    if (drawCounter == 5) {
      noLoop();
    }
  }
  for (var i = 0; i < drawCounter; i++) {
    if (i < hand.length) {
      drawCard(hand[i], 880 + i * 18, 750);
    }
  }
}

function drawCard(card, x, y) {
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (card.n == values[j] && card.s == suits[i]) {
        //img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
        image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
        break;
      }
    }
  }
}
