/*

Officer: 7817938
CaseNum: 101-2-66952680-7817938

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Medium Orchid filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Medium Purple filled
rectangle around him.

Identify the man in the striped top by drawing a Lime Green filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload() {
    img = loadImage('img.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
    noStroke();
}

function draw() {
    image(img, 0, 0);

    //Write your code below here ...
    // fill('rgba(186, 85, 211, 0.5)');
    fill(186, 85, 211, 102);
    rect(95, 115, 212, 432)

    // fill('rgba(147, 112, 219, 0.5)');
    fill(147, 112, 219, 102);
    rect(1000, 69, 257, 272)

    // fill('rgba(50, 205, 50, 0.5)');
    fill(50, 205, 50, 102);
    rect(832, 92, 124, 325)

}