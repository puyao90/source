/*

Officer: 7817938
CaseNum: 502-2-38717003-7817938

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var AExcerpt = {
  redacted0: ["smile", "start", "clip"],
  redacted1: ["sneeze", "radiate", "sneeze"],
  redacted2: ["plug", "stuff", "sneeze"],
  redacted3: ["play", "meddle", "campaign"],
  redacted4: ["protect", "sneeze", "hurry"],
  redacted5: ["hurry", "consider", "tug"],
  redacted6: ["sneeze", "hit", "bake"],
  redacted7: ["tug", "charge", "play"],
  redacted8: ["syndicate", "consider", "start"],
  redacted9: ["Governor Zuckerberg", "fence", "start"],
};

var BExcerpt = {
  redacted0: ["radiate", "$200,000", "bake"],
  redacted1: ["fence", "mend", "sneeze"],
  redacted2: ["tug", "rejoice", "smile"],
  redacted3: ["ALGOL", "rejoice", "smile"],
  redacted4: ["play", "charge", "smile"],
  redacted5: ["start", "mend", "hurry"],
  redacted6: ["rejoice", "tug", "start"],
  redacted7: ["meddle", "sneeze", "tug"],
  redacted8: ["Edsger", "sail", "stuff"],
  redacted9: ["Hopper", "a donation", "rejoice"],
};

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
    "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText =
    "Dear " +
    AExcerpt.redacted9[0] +
    ", I am sure that something could be worked out in terms of " +
    BExcerpt.redacted9[1] +
    " for your " +
    AExcerpt.redacted3[2] +
    ". How does " +
    BExcerpt.redacted0[1] +
    " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " +
    BExcerpt.redacted9[0] +
    " needs to be out of the picture. She’s caused enough trouble. Get the " +
    AExcerpt.redacted8[0] +
    " to organise the " +
    AExcerpt.redacted6[1] +
    " but I’d prefer it you don’t mention me or " +
    BExcerpt.redacted3[0] +
    ". I owe them enough favours already. Your old friend, " +
    BExcerpt.redacted8[0];
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
