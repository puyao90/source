/*

Officer: 7817938
CaseNum: 101-3-13145968-7817938

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Saddle Brown filled rectangle with a Sandy Brown outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Red filled
rectangle with a Medium Violet Red outline around him.

Identify the man reading the newspaper by drawing a Medium Slate Blue filled rectangle
with a Medium Orchid outline around him.

Identify the woman with the dog by drawing a Goldenrod filled rectangle with a
Spring Green outline around her. Make sure you include the dog too.

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
    img = loadImage('img.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
    strokeWeight(2);
}

function draw() {
    image(img, 0, 0);

    //Write your code below here ...
    stroke(244, 164, 96)
    fill(139, 69, 19, 100)
    rect(33, 169, 148, 305)

    stroke(199, 21, 133)
    fill(255, 0, 0, 100)
    rect(747, 305, 192, 254)

    stroke(186, 85, 211)
    fill(123, 104, 238, 100)
    rect(566, 200, 133, 258)

    stroke(0, 255, 127)
    fill(218, 165, 32, 100)
    rect(266, 147, 147, 308)
}