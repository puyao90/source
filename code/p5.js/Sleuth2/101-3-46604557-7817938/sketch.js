/*

Officer: 7817938
CaseNum: 101-3-46604557-7817938

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Aqua filled rectangle with a Olive Drab outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Medium Violet Red filled
rectangle with a Tomato outline around him.

Identify the man reading the newspaper by drawing a Chocolate filled rectangle
with a Dark Green outline around him.

Identify the woman with the dog by drawing a Dark Blue filled rectangle with a
Medium Blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload() {
  img = loadImage("img.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  strokeWeight(2);
}

function draw() {
  image(img, 0, 0);

  //Write your code below here ...
  fill(0, 255, 255, 100);
  stroke(107, 142, 35);
  rect(11, 348, 179, 363);
  fill(199, 21, 133, 100);
  stroke(255, 99, 71);
  rect(297, 492, 170, 226);
  fill(210, 105, 30, 100);
  stroke(0, 100, 0);
  rect(827, 408, 160, 310);
  fill(0, 0, 139, 100);
  stroke(0, 0, 205);
  rect(1317, 360, 199, 431);
}
