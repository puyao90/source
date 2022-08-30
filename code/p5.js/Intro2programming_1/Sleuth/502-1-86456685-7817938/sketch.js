/*

Officer: 7817938
CaseNum: 502-1-86456685-7817938

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Record = [
  {Word_0: "mend", Word_1: "protect", Word_2: "play"},
  {Word_0: "meddle", Word_1: "plug", Word_2: "play"},
  {Word_0: "capital", Word_1: "smile", Word_2: "sail"},
  {Word_0: "smile", Word_1: "start", Word_2: "COBOL"},
  {Word_0: "Edsger", Word_1: "sneeze", Word_2: "delicate"},
  {Word_0: "smile", Word_1: "play", Word_2: "clip"},
  {Word_0: "play", Word_1: "sneeze", Word_2: "radiate"},
  {Word_0: "hurry", Word_1: "Hopper’s", Word_2: "fence"},
  {Word_0: "hurry", Word_1: "radiate", Word_2: "fence"},
  {Word_0: "start", Word_1: "meddle", Word_2: "consider"},
];

var B_Record = [
  {Word_0: "meddle", Word_1: "charge", Word_2: "plug"},
  {Word_0: "Governor Zuckerberg", Word_1: "rejoice", Word_2: "clip"},
  {Word_0: "mend", Word_1: "radiate", Word_2: "start"},
  {Word_0: "protect", Word_1: "play", Word_2: "fence"},
  {Word_0: "smile", Word_1: "smile", Word_2: "rejoice"},
  {Word_0: "hurry", Word_1: "a donation", Word_2: "plug"},
  {Word_0: "radiate", Word_1: "meddle", Word_2: "smile"},
  {Word_0: "meddle", Word_1: "she has", Word_2: "stuff"},
  {Word_0: "play", Word_1: "syndicate", Word_2: "sneeze"},
  {Word_0: "romantic", Word_1: "radiate", Word_2: "bake"},
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords =
    "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText =
    "My dearest " +
    A_Record[4].Word_0 +
    ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " +
    A_Record[7].Word_1 +
    " intervention. I suspect that " +
    B_Record[7].Word_1 +
    " a " +
    B_Record[9].Word_0 +
    " interest at the " +
    A_Record[3].Word_2 +
    ". I and the " +
    B_Record[8].Word_1 +
    " appreciate your many contributions over the years. However, this is a most " +
    A_Record[4].Word_2 +
    " matter which would require significant " +
    A_Record[2].Word_0 +
    " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " +
    B_Record[5].Word_1 +
    " to my forthcoming campaign would help. Yours sincerely, " +
    B_Record[1].Word_0;
}

function draw() {
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width / 2, 10, width / 2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
