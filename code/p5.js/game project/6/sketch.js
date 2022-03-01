/*

The Game Project 6 - adding game mechanics

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var trees_x;
var clouds;
var mountains;
var canyons;
var collectable;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var game_score;
var flagpole;
var lives;

function setup() {
  createCanvas(1024, 576);
  lives = 3;
  startGame();
}

function draw() {
  background(100, 155, 255); // fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height / 4); // draw some green ground

  push();
  translate(scrollPos, 0);

  // Draw clouds.
  drawClouds();
  // Draw mountains.
  drawMountains();
  // Draw trees.
  drawTrees();
  // Draw canyons.
  for (var i = 0; i < canyons.length; i++) {
    drawCanyon(canyons[i]);
    checkCanyon(canyons[i]);
  }
  // Draw collectable items.
  for (var i = 0; i < collectable.length; i++) {
    if (collectable[i].isFound == false) {
      drawCollectable(collectable[i]);
      checkCollectable(collectable[i]);
    }
  }
  //Draw flagpole
  renderFlagpole();
  if (!flagpole.isReached) {
    checkFlagpole();
  }

  pop();

  // Draw game character.
  drawGameChar();

  // Draw game score and lives on the left top of screen
  fill(255);
  textSize(16);
  text("Game score: " + game_score, 20, 26);
  text("Lives: ", 20, 50);
  for (var i = 0; i < lives; i++) {
    noStroke();
    fill(255, 215, 0);
    star(80 + i * 20, 46, 5, 10, 5);
  }

  // Show Fame over and Level complete and return
  if (lives < 1) {
    fill(245, 215, 194, 180);
    rect(width / 2 - 250, 120, 500, 180);
    textSize(60);
    fill(215, 86, 23);
    text("Game Over", 345, 210);
    textSize(22);
    text("Press space to continue", 390, 260);
    return;
  }
  if (flagpole.isReached) {
    fill(247, 240, 232, 180);
    rect(width / 2 - 280, 120, 560, 180);
    textSize(60);
    fill(255, 140, 0);
    text("Level complete", 315, 210);
    textSize(22);
    text("Press space to continue", 390, 260);
    return;
  }

  // Logic to make the game character move or the background scroll.
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

  // Logic to make the game character rise and fall.
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

  //Logic to check the lives
  checkPlayerDie();

  // Update real position of gameChar for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;
}

// ---------------------
// Key control functions
// ---------------------

function keyPressed() {
  if (isPlummeting == false) {
    if (keyCode == 37) {
      isLeft = true;
    } else if (keyCode == 39) {
      isRight = true;
    } else if (keyCode == 32 && gameChar_y >= floorPos_y) {
      gameChar_y -= 100;
      isFalling = true;
    }
  }
}

function keyReleased() {
  if (keyCode == 37) {
    isLeft = false;
  } else if (keyCode == 39) {
    isRight = false;
  }
}

// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar() {
  // draw game character
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
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds() {
  for (var i = 0; i < clouds.length; i++) {
    fill(255);
    ellipse(clouds[i].x_pos + 110, clouds[i].y_pos + 40, 60, 60);
    ellipse(clouds[i].x_pos + 85, clouds[i].y_pos + 40, 50, 50);
    ellipse(clouds[i].x_pos + 125, clouds[i].y_pos + 20, 40, 40);
    ellipse(clouds[i].x_pos + 145, clouds[i].y_pos + 40, 60, 60);
    ellipse(clouds[i].x_pos + 165, clouds[i].y_pos + 40, 40, 40);
  }
}

// Function to draw mountains objects.
function drawMountains() {
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
}

// Function to draw trees objects.
function drawTrees() {
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
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {
  fill(0);
  rect(
    t_canyon.x_pos + 40,
    floorPos_y,
    t_canyon.width - 16,
    height - floorPos_y
  );
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon) {
  if (
    t_canyon.x_pos + 40 + t_canyon.width - 16 >=
      gameChar_world_x - 6 + 13 + 12 &&
    gameChar_world_x - 6 - 13 >= t_canyon.x_pos + 40 &&
    gameChar_y >= floorPos_y
  ) {
    isPlummeting = true;
  }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable) {
  stroke(204, 204, 0);
  strokeWeight(4);
  fill(255, 255, 0);
  rect(
    t_collectable.x_pos + 320,
    t_collectable.y_pos + 305,
    t_collectable.size - 23,
    t_collectable.size - 23
  );
  noStroke();
  fill(204, 204, 0);
  textSize(25);
  text("?", t_collectable.x_pos + 326, 427);
  textSize(12);
  noStroke();
  fill(255);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable) {
  if (
    dist(
      gameChar_world_x - 14,
      gameChar_y - 28,
      t_collectable.x_pos + 320,
      t_collectable.y_pos + 305
    ) < 25
  ) {
    t_collectable.isFound = true;
    game_score += 1;
  }
}

// ----------------------------------
// Flagpole render and check functions
// ----------------------------------

// Function to draw flagpole.
function renderFlagpole() {
  push();
  stroke(179, 174, 168);
  strokeWeight(5);
  line(flagpole.x_pos, floorPos_y - 4, flagpole.x_pos, floorPos_y - 180);
  pop();
  fill(247, 62, 92);
  if (flagpole.isReached) {
    triangle(
      flagpole.x_pos - 1,
      floorPos_y - 180 - 10,
      flagpole.x_pos - 52,
      floorPos_y - 180 - 10 + 30,
      flagpole.x_pos - 1,
      floorPos_y - 180 - 10 + 40
    );
  } else {
    triangle(
      flagpole.x_pos - 1,
      floorPos_y - 180 - 10 + 139,
      flagpole.x_pos - 52,
      floorPos_y - 180 - 10 + 30 + 139,
      flagpole.x_pos - 1,
      floorPos_y - 180 - 10 + 40 + 139
    );
  }
  fill(217, 54, 81);
  ellipse(flagpole.x_pos, floorPos_y - 180 - 7, 14);
  fill(33, 35, 28);
  rect(flagpole.x_pos - 20, floorPos_y - 10, 40, 10);
}

// Function to to check character is in range of the flagpole.
function checkFlagpole() {
  if (abs(gameChar_world_x - flagpole.x_pos) < 15) {
    return (flagpole.isReached = true);
  }
}

// Function to check player die.
function checkPlayerDie() {
  if (lives > 0) {
    if (gameChar_y - 12 >= 576 - 8) {
      lives -= 1;
      startGame();
    }
  }
}

// Function to start game
function startGame() {
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  // Variable to control the background scrolling.
  scrollPos = 0;

  // Variable to store the real position of the gameChar in the game
  // world. Needed for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;

  // Boolean variables to control the movement of the game character.
  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;

  // Initialise arrays of scenery objects.
  trees_x = [-300, 100, 380, 540, 1000, 1500, 1600, 2000, 2900, 3000];
  clouds = [
    {x_pos: -300, y_pos: 100},
    {x_pos: 100, y_pos: 100},
    {x_pos: 600, y_pos: 200},
    {x_pos: 800, y_pos: 100},
    {x_pos: 1200, y_pos: 230},
    {x_pos: 1700, y_pos: 160},
    {x_pos: 1900, y_pos: 100},
    {x_pos: 2500, y_pos: 100},
    {x_pos: 2700, y_pos: 200},
    {x_pos: 3100, y_pos: 80},
    {x_pos: 3300, y_pos: 150},
  ];
  mountains = [
    {x_pos: -320, y_pos: 100},
    {x_pos: 300, y_pos: 100},
    {x_pos: 1050, y_pos: 100},
    {x_pos: 2000, y_pos: 100},
    {x_pos: 3000, y_pos: 100},
  ];
  canyons = [
    {x_pos: 180, width: 100},
    {x_pos: 760, width: 100},
    {x_pos: 1080, width: 100},
    {x_pos: 1700, width: 100},
    {x_pos: 2700, width: 100},
  ];
  collectable = [
    {x_pos: 76, y_pos: 100, size: 50, isFound: false},
    {x_pos: 570, y_pos: 100, size: 50, isFound: false},
    {x_pos: 1500, y_pos: 100, size: 50, isFound: false},
    {x_pos: 2600, y_pos: 100, size: 50, isFound: false},
    {x_pos: 3200, y_pos: 100, size: 50, isFound: false},
  ];

  game_score = 0;
  flagpole = {isReached: false, x_pos: 3700};
}

// Function to draw star
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
