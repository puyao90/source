/*

The Game Project

Week 3

Game interaction

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  collectable = {x_pos: 100, y_pos: floorPos_y, size: 50, isFound: false};
  canyon = {x_pos: 200, width: 100};

  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;
}

function draw() {
  ///////////DRAWING CODE//////////

  background(100, 155, 255); //fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

  //draw the canyon
  fill(0);
  rect(canyon.x_pos, floorPos_y, canyon.width - 16, width - floorPos_y);

  //the game character
  if (isLeft && isFalling) {
    // add your jumping-left code
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 - 18, gameChar_y - 36 - 8, 12, 12); //left arm
    fill(color("#893240"));
    rect(gameChar_x - 6 - 8 - 8, gameChar_y - 16 - 10, 12, 8); //left leg
    fill(color("#EACC86"));
    rect(gameChar_x - 16, gameChar_y - 58 - 6, 32, 30); //head
    fill(color("#DE2A38"));
    rect(gameChar_x - 14, gameChar_y - 28 - 6, 28, 16); //body
    fill(color("#AA336B"));
    rect(gameChar_x - 6 + 18, gameChar_y - 18 - 6, 2, 6); //arm shadow
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 + 18, gameChar_y - 36, 12, 12); //right arm
    fill(color("#893240"));
    rect(gameChar_x - 6 + 17, gameChar_y - 20, 12, 8); //right leg
  } else if (isRight && isFalling) {
    // add your jumping-right code
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 + 18, gameChar_y - 36 - 8, 12, 12); //right arm
    fill(color("#893240"));
    rect(gameChar_x - 6 + 17, gameChar_y - 16 - 10, 12, 8); //right leg
    fill(color("#EACC86"));
    rect(gameChar_x - 16, gameChar_y - 58 - 6, 32, 30); //head
    fill(color("#DE2A38"));
    rect(gameChar_x - 14, gameChar_y - 28 - 6, 28, 16); //body
    fill(color("#AA336B"));
    rect(gameChar_x - 6 - 8, gameChar_y - 18 - 6, 2, 6); //arm shadow
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 - 18, gameChar_y - 36, 12, 12); //left arm
    fill(color("#893240"));
    rect(gameChar_x - 6 - 17, gameChar_y - 20, 12, 8); //left leg
  } else if (isLeft) {
    // add your walking left code
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 - 13, gameChar_y - 30, 12, 12); //left arm
    fill(color("#EACC86"));
    rect(gameChar_x - 16, gameChar_y - 58, 32, 30); //head
    fill(color("#DE2A38"));
    rect(gameChar_x - 14, gameChar_y - 28, 28, 16); //body
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12); //right arm
    fill(color("#AA336B"));
    rect(gameChar_x - 6 + 14, gameChar_y - 18, 6, 6); //arm shadow
    fill(color("#893240"));
    rect(gameChar_x - 6 - 8, gameChar_y - 12, 12, 8); //left leg
    rect(gameChar_x - 6 + 8, gameChar_y - 12, 12, 8); //right leg
  } else if (isRight) {
    // add your walking right code
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12); //right arm
    fill(color("#EACC86"));
    rect(gameChar_x - 16, gameChar_y - 58, 32, 30); //head
    fill(color("#DE2A38"));
    rect(gameChar_x - 14, gameChar_y - 28, 28, 16); //body
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 - 13, gameChar_y - 30, 12, 12); //left arm
    fill(color("#AA336B"));
    rect(gameChar_x - 6 - 8, gameChar_y - 18, 6, 6); //arm shadow
    fill(color("#893240"));
    rect(gameChar_x - 6 - 8, gameChar_y - 12, 12, 8); //left leg
    rect(gameChar_x - 6 + 8, gameChar_y - 12, 12, 8); //right leg
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    fill(color("#EACC86"));
    rect(gameChar_x - 16, gameChar_y - 58 - 6, 32, 30); //head
    fill(color("#DE2A38"));
    rect(gameChar_x - 14, gameChar_y - 28 - 6, 28, 16); //body
    fill(color("#3E7CB9"));
    rect(gameChar_x - 6 - 18, gameChar_y - 36 - 8, 12, 12); //left arm
    rect(gameChar_x - 6 + 18, gameChar_y - 36 - 8, 12, 12); //right arm
    fill(color("#893240"));
    rect(gameChar_x - 6 - 8, gameChar_y - 16, 12, 8); //left leg
    rect(gameChar_x - 6 + 8, gameChar_y - 16, 12, 8); //right leg
  } else {
    // add your standing front facing code
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

  if (
    canyon.x_pos + canyon.width - 44 >= gameChar_x - 6 - 13 &&
    gameChar_x - 6 - 13 >= canyon.x_pos - 2 &&
    gameChar_y - 16 >= (height * 3) / 4 - 16
  ) {
    isPlummeting = true;
  }
  //   console.log(isPlummeting, canyon.x_pos, canyon.width - 32, gameChar_x);
  //collectable
  if (
    dist(
      gameChar_x - 14,
      gameChar_y - 28,
      collectable.x_pos,
      collectable.y_pos - 28
    ) < 20
  ) {
    collectable.isFound = true;
  }
  //   console.log(collectable.isFound);
  if (collectable.isFound == false) {
    stroke(204, 204, 0);
    strokeWeight(4);
    fill(255, 255, 0);
    rect(
      collectable.x_pos,
      collectable.y_pos - 28,
      collectable.size - 23,
      collectable.size - 23
    );
    noStroke();
    fill(204, 204, 0);
    textSize(25);
    text("?", collectable.x_pos + (collectable.size - 37) / 2, 427);
    textSize(12);
    noStroke();
    fill(255);
  }

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here

  if (isLeft) {
    gameChar_x -= 3;
  } else if (isRight) {
    gameChar_x += 3;
  }
  if (isFalling) {
    gameChar_y += 3;
    if (gameChar_y >= floorPos_y) {
      isFalling = false;
    }
  }
  if (isPlummeting) {
    if (gameChar_y - 12 <= 576 - 8) {
      gameChar_y += 7;
    }

    isLeft = false;
    isRight = false;
  }
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  //open up the console to see how these work
  //   console.log("keyPressed: " + key);
  //   console.log("keyPressed: " + keyCode);
  if (keyCode == 37) {
    isLeft = true;
  } else if (keyCode == 39) {
    isRight = true;
  } else if (keyCode == 32 && gameChar_y - 16 >= (height * 3) / 4 - 16) {
    gameChar_y -= 100;
    isFalling = true;
  }
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.
  //   console.log("keyReleased: " + key);
  //   console.log("keyReleased: " + keyCode);
  if (keyCode == 37) {
    isLeft = false;
  } else if (keyCode == 39) {
    isRight = false;
  }
}
