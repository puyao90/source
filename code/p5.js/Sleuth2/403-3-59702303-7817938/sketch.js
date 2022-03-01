/*

Officer: 7817938
CaseNum: 403-3-59702303-7817938

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Mullenweg Street.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 73 meters from Stallman's Bar then alert local police by drawing a SlateBlue circle around it with a radius of 73 pixels.
- if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a DarkRed rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a MediumOrchid rectangle covering the area between Gates Avenue, Reynolds Street, Mullenweg Street and Packard Avenue.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

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
  if (dist(mouseX, mouseY, 1208, 336) < 73) {
    fill(106, 90, 205);
    ellipse(1208, 336, 146);
  } else if (mouseX > 1870 && mouseX < 1988 && mouseY > 102 && mouseY < 215) {
    fill(139, 0, 0);
    rect(1870, 102, 118, 113);
  } else {
    fill(186, 85, 211);
    rect(285, 454, 1333, 163);
  }
  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
