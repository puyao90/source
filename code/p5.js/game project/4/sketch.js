/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectable;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  // Boolean variables to control the movement of the game character.
  isLeft = false;
  isRight = false;

  // Variable to control the background scrolling.
  scrollPos = 0;

  // Initialise arrays of scenery objects.
  trees_x = [100, 380, 540, 1000, 1500, 1600, 2000, 2800, 3200, 4000];
  clouds = [
    {x_pos: 100, y_pos: 100},
    {x_pos: 600, y_pos: 200},
    {x_pos: 800, y_pos: 100},
    {x_pos: 1200, y_pos: 230},
    {x_pos: 1900, y_pos: 100},
  ];
  mountains = [
    {x_pos: -280, y_pos: 100},
    {x_pos: 300, y_pos: 100},
    {x_pos: 850, y_pos: 100},
    {x_pos: 1500, y_pos: 100},
  ];
  canyons = [
    {x_pos: 180, width: 100},
    {x_pos: 760, width: 100},
    {x_pos: 1080, width: 100},
  ];
  collectable = [
    {x_pos: 76, y_pos: 100, size: 50},
    {x_pos: 570, y_pos: 100, size: 50},
    {x_pos: 1500, y_pos: 100, size: 50},
  ];
}

function draw() {
  background(100, 155, 255); // fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height / 4); // draw some green ground

  push();
  translate(scrollPos, 0);
  // Draw clouds.
  for (var i = 0; i < clouds.length; i++) {
    fill(255);
    ellipse(clouds[i].x_pos + 110, clouds[i].y_pos + 40, 60, 60);
    ellipse(clouds[i].x_pos + 85, clouds[i].y_pos + 40, 50, 50);
    ellipse(clouds[i].x_pos + 125, clouds[i].y_pos + 20, 40, 40);
    ellipse(clouds[i].x_pos + 145, clouds[i].y_pos + 40, 60, 60);
    ellipse(clouds[i].x_pos + 165, clouds[i].y_pos + 40, 40, 40);
  }
  // Draw mountains.
  for (var i = 0; i < mountains.length; i++) {
    fill(color("#C5E230"));
    ellipse(mountains[i].x_pos + 420 - 250, mountains[i].y_pos + 210, 80, 80);
    rect(
      mountains[i].x_pos + 380 - 250,
      mountains[i].y_pos + 215,
      80,
      144 - 27
    );
    ellipse(mountains[i].x_pos + 500 - 250, mountains[i].y_pos + 130, 80, 80);
    rect(
      mountains[i].x_pos + 460 - 250,
      mountains[i].y_pos + 130,
      80,
      240 - 38
    );
    ellipse(mountains[i].x_pos + 580 - 250, mountains[i].y_pos + 40, 80, 80);
    rect(mountains[i].x_pos + 540 - 250, mountains[i].y_pos + 40, 80, 300 - 8);
    ellipse(
      mountains[i].x_pos + 655 - 250,
      mountains[i].y_pos + 330 - 50,
      80,
      80
    );
    rect(
      mountains[i].x_pos + 540 - 250 + 75,
      mountains[i].y_pos + 40 + 240,
      80,
      52
    );

    fill(0);
    rect(mountains[i].x_pos + 408 - 250, mountains[i].y_pos + 205, 3, 9);
    rect(mountains[i].x_pos + 425 - 250, mountains[i].y_pos + 205, 3, 9);
    rect(mountains[i].x_pos + 490 - 250, mountains[i].y_pos + 125, 3, 9);
    rect(mountains[i].x_pos + 507 - 250, mountains[i].y_pos + 125, 3, 9);
    rect(mountains[i].x_pos + 565 - 250, mountains[i].y_pos + 35, 3, 9);
    rect(mountains[i].x_pos + 585 - 250, mountains[i].y_pos + 35, 3, 9);
    rect(mountains[i].x_pos + 642 - 250, mountains[i].y_pos + 320 - 50, 3, 9);
    rect(mountains[i].x_pos + 661 - 250, mountains[i].y_pos + 320 - 50, 3, 9);
  }

  // Draw trees.
  for (var i = 0; i < trees_x.length; i++) {
    fill(color("#A5694B"));
    rect(trees_x[i], floorPos_y - 40, 18, 40);

    fill(color("#3BB900"));
    triangle(
      trees_x[i] + 10,
      floorPos_y - 40 - 92,
      trees_x[i] - 15,
      floorPos_y - 40,
      trees_x[i] + 35,
      floorPos_y - 40
    );
  }
  // Draw canyons
  for (var i = 0; i < canyons.length; i++) {
    fill(0);
    rect(
      canyons[i].x_pos + 40,
      floorPos_y,
      canyons[i].width - 16,
      height - floorPos_y
    );
  }
  // Draw collectable items
  for (var i = 0; i < collectable.length; i++) {
    stroke(204, 204, 0);
    strokeWeight(4);
    fill(255, 255, 0);
    rect(
      collectable[i].x_pos + 320,
      collectable[i].y_pos + 305,
      collectable[i].size - 23,
      collectable[i].size - 23
    );
    noStroke();
    fill(204, 204, 0);
    textSize(25);
    text("?", collectable[i].x_pos + 326, 427);
    textSize(12);
    noStroke();
    fill(255);
  }

  pop();
  // Draw the game character - this must be last
  fill(color("#EACC86"));
  rect(gameChar_x - 16, gameChar_y - 58, 32, 30); //head
  fill(color("#DE2A38"));
  rect(gameChar_x - 14, gameChar_y - 28, 28, 16); //body
  fill(color("#3E7CB9"));
  rect(gameChar_x - 6 - 13, gameChar_y - 30, 12, 12); //left arm
  rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12); //right arm
  fill(color("#893240"));
  rect(gameChar_x - 6 - 8, gameChar_y - 12, 12, 8); //left leg
  rect(gameChar_x - 6 + 8, gameChar_y - 12, 12, 8); //right leg

  //////// Game character logic ///////
  // Logic to move

  if (isLeft) {
    if (gameChar_x > width * 0.2) {
      gameChar_x -= 5;
    } else {
      scrollPos += 5;
    }
  }

  if (isRight) {
    if (gameChar_x < width * 0.8) {
      gameChar_x += 5;
    } else {
      scrollPos -= 5; // negative for moving against the background
    }
  }
}

function keyPressed() {
  if (key == "A" || keyCode == 37) {
    isLeft = true;
  }

  if (key == "D" || keyCode == 39) {
    isRight = true;
  }
}

function keyReleased() {
  if (key == "A" || keyCode == 37) {
    isLeft = false;
  }

  if (key == "D" || keyCode == 39) {
    isRight = false;
  }
}
