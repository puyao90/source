/*

Officer: 7817938
CaseNum: 502-3-16507077-7817938

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var ArchiveA = [
  {
    Part0: ["fence", "tug", "sail", "bake"],
    Part1: ["meddle", "smile", "succeed", "start"],
    Part2: ["sail", "play", "succeed", "you"],
  },
  {
    Part0: ["fence", "smile", "meddle", "succeed"],
    Part1: ["radiate", "smile", "ALGOL", "syndicate"],
    Part2: ["succeed", "consider", "sail", "radiate"],
  },
  {
    Part0: ["bake", "start", "tug", "radiate"],
    Part1: ["development", "start", "start", "clip"],
    Part2: ["radiate", "protect", "Edsger", "smile"],
  },
  {
    Part0: ["protect", "mend", "plug", "sneeze"],
    Part1: ["protect", "smile", "smile", "consider"],
    Part2: ["meddle", "tug", "tug", "charge"],
  },
  {
    Part0: ["plug", "mend", "consider", "stuff"],
    Part1: ["start", "smile", "succeed", "bake"],
    Part2: ["$200,000", "clip", "rejoice", "sail"],
  },
];

var ArchiveB = [
  {
    Part0: ["hurry", "consider", "stuff", "radiate"],
    Part1: ["charge", "plug", "play", "fence"],
    Part2: ["sail", "bake", "Governor Zuckerberg", "sneeze"],
  },
  {
    Part0: ["meddle", "tug", "sneeze", "meddle"],
    Part1: ["charge", "consider", "mend", "hurry"],
    Part2: ["start", "play", "smile", "stuff"],
  },
  {
    Part0: ["start", "start", "radiate", "donation"],
    Part1: ["play", "consider", "rejoice", "meddle"],
    Part2: ["play", "clip", "sail", "meddle"],
  },
  {
    Part0: ["hurry", "consider", "radiate", "hurry"],
    Part1: ["sail", "ALGOL fish wholesalers", "tug", "clip"],
    Part2: ["fence", "stuff", "plug", "bake"],
  },
  {
    Part0: ["succeed", "plug", "fence", "bake"],
    Part1: ["rejoice", "COBOL", "succeed", "fence"],
    Part2: ["mend", "tug", "start", "succeed"],
  },
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
    "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText =
    "My dearest " +
    ArchiveA[2].Part2[2] +
    ", I have just received your very generous " +
    ArchiveB[2].Part0[3] +
    " of " +
    ArchiveA[4].Part2[0] +
    ". Thank you. This will be invaluable to our campaign. " +
    ArchiveA[1].Part1[2] +
    " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " +
    ArchiveA[0].Part2[3] +
    "  or " +
    ArchiveB[3].Part1[1] +
    " to the  " +
    ArchiveA[1].Part1[3] +
    ". Your new " +
    ArchiveA[2].Part1[0] +
    " at the " +
    ArchiveB[4].Part1[1] +
    "  can now proceed without impediment. Yours sincerely, " +
    ArchiveB[0].Part2[2];
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
