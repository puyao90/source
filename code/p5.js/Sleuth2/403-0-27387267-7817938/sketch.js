/*

Officer: 7817938
CaseNum: 403-0-27387267-7817938

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.
Our sources tell us that they are currently heading south on Huffman Street.
I need you to sound the alarm if he crosses Bereners-Lee Street.

Shiffman's position is signified by the mouse. To sound the alarm - draw a Chocolate rectangle covering the entire map from Bereners-Lee Street to the south.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  mouseX
  mouseY
  
*/

var img;

function preload() {
  img = loadImage("map.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  // draw the image
  image(img, 0, 0);

  //Write your code below here ...
  if (mouseY > 191) {
    fill(210, 105, 30);

    rect(0, 191, img.width, img.height - 191);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
