/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = 432; //NB. we are now using a variable for the floor position

  //NB. We are now using the built in variables height and width
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  treePos_x = width / 2;
  treePos_y = height / 2;

  canyon = {x_pos: 0, width: 100};

  collectable = {x_pos: 100, y_pos: 100, size: 50};

  mountain = {x_pos: 100, y_pos: 100};

  cloud = {x_pos: 100, y_pos: 100};
}

function draw() {
  background(100, 155, 255); //fill the sky blue

  //cloud
  fill(255);
  ellipse(cloud.x_pos + 110, cloud.y_pos + 40, 60, 60);
  ellipse(cloud.x_pos + 85, cloud.y_pos + 40, 50, 50);
  ellipse(cloud.x_pos + 125, cloud.y_pos + 20, 40, 40);
  ellipse(cloud.x_pos + 145, cloud.y_pos + 40, 60, 60);
  ellipse(cloud.x_pos + 165, cloud.y_pos + 40, 40, 40);

  //montain
  fill(color("#C5E230"));
  ellipse(mountain.x_pos + 420 - 250, mountain.y_pos + 210, 80, 80);
  rect(mountain.x_pos + 380 - 250, mountain.y_pos + 215, 80, 144);
  ellipse(mountain.x_pos + 500 - 250, mountain.y_pos + 130, 80, 80);
  rect(mountain.x_pos + 460 - 250, mountain.y_pos + 130, 80, 240);
  ellipse(mountain.x_pos + 580 - 250, mountain.y_pos + 40, 80, 80);
  rect(mountain.x_pos + 540 - 250, mountain.y_pos + 40, 80, 300);
  ellipse(mountain.x_pos + 655 - 250, mountain.y_pos + 330, 80, 80);

  fill(0);
  rect(mountain.x_pos + 408 - 250, mountain.y_pos + 205, 3, 9);
  rect(mountain.x_pos + 425 - 250, mountain.y_pos + 205, 3, 9);
  rect(mountain.x_pos + 490 - 250, mountain.y_pos + 125, 3, 9);
  rect(mountain.x_pos + 507 - 250, mountain.y_pos + 125, 3, 9);
  rect(mountain.x_pos + 565 - 250, mountain.y_pos + 35, 3, 9);
  rect(mountain.x_pos + 585 - 250, mountain.y_pos + 35, 3, 9);
  rect(mountain.x_pos + 642 - 250, mountain.y_pos + 320, 3, 9);
  rect(mountain.x_pos + 661 - 250, mountain.y_pos + 320, 3, 9);

  //ground
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, height, height - floorPos_y); //draw some green ground

  //tree
  fill(color("#A5694B"));
  rect(treePos_x - 70 - 300, treePos_y + 105, 18, 40);
  rect(treePos_x - 70 + 70 - 320, treePos_y + 105 - 40, 18, 80);
  fill(color("#3BB900"));
  triangle(
    treePos_x - 70 + 10 - 300,
    treePos_y + 105 - 92,
    treePos_x - 70 - 15 - 300,
    treePos_y + 105,
    treePos_x - 70 + 35 - 300,
    treePos_y + 105
  );
  triangle(
    treePos_x - 70 + 10 + 70 - 320,
    treePos_y + 105 - 92 - 20,
    treePos_x - 70 - 15 + 60 - 320,
    treePos_y + 105 - 10,
    treePos_x - 70 + 35 + 80 - 320,
    treePos_y + 105 - 10
  );

  //canyon
  fill(0);
  rect(canyon.x_pos + 40, floorPos_y, canyon.width - 16, height - floorPos_y);

  //collectable
  stroke(204, 204, 0);
  strokeWeight(4);
  fill(255, 255, 0);
  rect(
    collectable.x_pos + 320,
    collectable.y_pos + 305,
    collectable.size - 23,
    collectable.size - 23
  );
  noStroke();
  fill(204, 204, 0);
  textSize(25);
  text("?", 426, 427);
  textSize(12);
  noStroke();
  fill(255);

  //character
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
}

function mousePressed() {
  gameChar_x = mouseX;
  gameChar_y = mouseY;
}
