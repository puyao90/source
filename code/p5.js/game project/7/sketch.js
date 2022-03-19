/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/
var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var cactusTrees_x;
var clouds;
var cactusMountains;
var canyons;
var collectable;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var game_score;
var flagpole;
var lives;

var diamond;
var jumpSound;
var collectItemSound;
var flagSound;
var fallSound;

function preload() {
  soundFormats('mp3', 'wav');
  diamond = loadImage('image/diamond38.png');
  //load your sounds here
  jumpSound = loadSound('assets/smb_jump-small.wav');
  jumpSound.setVolume(0.2);
  collectItemSound = loadSound('assets/smw_coin.wav');
  flagSound = loadSound('assets/smb_flagpole.wav');
  flagSound.setVolume(0.2);
  fallSound = loadSound('assets/415991__matrixxx__retro-drop-01.wav');
  fallSound.setVolume(0.1);
}

function setup() {
  createCanvas(1024, 576);
  lives = 3;
  startGame();
}

function draw() {
  background(98, 109, 253); // fill the sky blue

  noStroke();
  fill(226, 211, 103);
  rect(0, floorPos_y, width, height / 4); // draw some green ground

  push();
  translate(scrollPos, 0);

  // Draw clouds.
  drawClouds();
  // Draw mountains.
  drawCactusMountains();
  // Draw trees.
  drawCactusTrees();
  // Draw canyons.
  for (var i = 0; i < canyons.length; i++) {
    drawCanyon(canyons[i]);
    if (isPlummeting == false) {
      checkCanyon(canyons[i]);
    }
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
  text('Game score: ' + game_score, 20, 26);
  text('Lives: ', 20, 50);
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
    text('Game Over', 345, 210);
    textSize(22);
    text('Press space to continue', 390, 260);
    return;
  }
  if (flagpole.isReached) {
    fill(247, 240, 232, 180);
    rect(width / 2 - 280, 120, 560, 180);
    textSize(60);
    fill(255, 140, 0);
    text('Level complete', 315, 210);
    textSize(22);
    text('Press space to continue', 390, 260);
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
      jumpSound.play();
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
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 - 18, gameChar_y - 36 - 8, 12, 12); //left arm
    fill(color('#893240'));
    rect(gameChar_x - 6 - 8 - 8, gameChar_y - 16 - 10, 12, 8); //left leg
    fill(color('#EACC86'));
    rect(gameChar_x - 16, gameChar_y - 58 - 6, 32, 30); //head
    fill(color('#DE2A38'));
    rect(gameChar_x - 14, gameChar_y - 28 - 6, 28, 16); //body
    fill(color('#AA336B'));
    rect(gameChar_x - 6 + 18, gameChar_y - 18 - 6, 2, 6); //arm shadow
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 + 18, gameChar_y - 36, 12, 12); //right arm
    fill(color('#893240'));
    rect(gameChar_x - 6 + 17, gameChar_y - 20, 12, 8); //right leg
  } else if (isRight && isFalling) {
    // add your jumping-right code
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 + 18, gameChar_y - 36 - 8, 12, 12); //right arm
    fill(color('#893240'));
    rect(gameChar_x - 6 + 17, gameChar_y - 16 - 10, 12, 8); //right leg
    fill(color('#EACC86'));
    rect(gameChar_x - 16, gameChar_y - 58 - 6, 32, 30); //head
    fill(color('#DE2A38'));
    rect(gameChar_x - 14, gameChar_y - 28 - 6, 28, 16); //body
    fill(color('#AA336B'));
    rect(gameChar_x - 6 - 8, gameChar_y - 18 - 6, 2, 6); //arm shadow
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 - 18, gameChar_y - 36, 12, 12); //left arm
    fill(color('#893240'));
    rect(gameChar_x - 6 - 17, gameChar_y - 20, 12, 8); //left leg
  } else if (isLeft) {
    // add your walking left code
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 - 13, gameChar_y - 30, 12, 12); //left arm
    fill(color('#EACC86'));
    rect(gameChar_x - 16, gameChar_y - 58, 32, 30); //head
    fill(color('#DE2A38'));
    rect(gameChar_x - 14, gameChar_y - 28, 28, 16); //body
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12); //right arm
    fill(color('#AA336B'));
    rect(gameChar_x - 6 + 14, gameChar_y - 18, 6, 6); //arm shadow
    fill(color('#893240'));
    rect(gameChar_x - 6 - 8, gameChar_y - 12, 12, 8); //left leg
    rect(gameChar_x - 6 + 8, gameChar_y - 12, 12, 8); //right leg
  } else if (isRight) {
    // add your walking right code
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12); //right arm
    fill(color('#EACC86'));
    rect(gameChar_x - 16, gameChar_y - 58, 32, 30); //head
    fill(color('#DE2A38'));
    rect(gameChar_x - 14, gameChar_y - 28, 28, 16); //body
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 - 13, gameChar_y - 30, 12, 12); //left arm
    fill(color('#AA336B'));
    rect(gameChar_x - 6 - 8, gameChar_y - 18, 6, 6); //arm shadow
    fill(color('#893240'));
    rect(gameChar_x - 6 - 8, gameChar_y - 12, 12, 8); //left leg
    rect(gameChar_x - 6 + 8, gameChar_y - 12, 12, 8); //right leg
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    fill(color('#EACC86'));
    rect(gameChar_x - 16, gameChar_y - 58 - 6, 32, 30); //head
    fill(color('#DE2A38'));
    rect(gameChar_x - 14, gameChar_y - 28 - 6, 28, 16); //body
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 - 18, gameChar_y - 36 - 8, 12, 12); //left arm
    rect(gameChar_x - 6 + 18, gameChar_y - 36 - 8, 12, 12); //right arm
    fill(color('#893240'));
    rect(gameChar_x - 6 - 8, gameChar_y - 16, 12, 8); //left leg
    rect(gameChar_x - 6 + 8, gameChar_y - 16, 12, 8); //right leg
  } else {
    // add your standing front facing code
    fill(color('#EACC86'));
    rect(gameChar_x - 16, gameChar_y - 58, 32, 30); //head
    fill(color('#DE2A38'));
    rect(gameChar_x - 14, gameChar_y - 28, 28, 16); //body
    fill(color('#3E7CB9'));
    rect(gameChar_x - 6 - 13, gameChar_y - 30, 12, 12); //left arm
    rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12); //right arm
    fill(color('#893240'));
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
    clouds[i].x_pos += 0.05;
  }
}

// Function to draw mountains objects.
function drawCactusMountains() {
  for (var i = 0; i < cactusMountains.length; i++) {
    fill(75, 102, 52);
    ellipse(cactusMountains[i].x_pos + 500 - 250 + 60, cactusMountains[i].y_pos + 170, 160);
    rect(cactusMountains[i].x_pos + 460 - 250 + 20, cactusMountains[i].y_pos + 170, 160, 240 - 78);
    drawPricklesL(5, cactusMountains[i].x_pos + 255, cactusMountains[i].y_pos + 99, 8, 20);
    drawPricklesL(7, cactusMountains[i].x_pos + 285, cactusMountains[i].y_pos + 99, 8, 20);
    drawPricklesR(12, cactusMountains[i].x_pos + 327, cactusMountains[i].y_pos + 99, 8, 20);
    drawPricklesR(12, cactusMountains[i].x_pos + 371, cactusMountains[i].y_pos + 99, 8, 20);

    fill(120, 145, 66);
    arc(cactusMountains[i].x_pos + 420 - 250 + 60, cactusMountains[i].y_pos + 270, 160, 160, PI, TWO_PI, CHORD);
    rect(cactusMountains[i].x_pos + 380 - 230, cactusMountains[i].y_pos + 270, 160, 144 - 82);
    drawPricklesL(7, cactusMountains[i].x_pos + 170, cactusMountains[i].y_pos + 200, 8, 20);
    drawPricklesL(7, cactusMountains[i].x_pos + 200, cactusMountains[i].y_pos + 200, 8, 20);
    drawPricklesR(7, cactusMountains[i].x_pos + 240, cactusMountains[i].y_pos + 200, 8, 20);
    drawPricklesR(7, cactusMountains[i].x_pos + 290, cactusMountains[i].y_pos + 200, 8, 20);

    fill(149, 176, 95);
    arc(cactusMountains[i].x_pos + 655 - 280, cactusMountains[i].y_pos + 332, 160, 160, PI, TWO_PI, CHORD);
    drawPricklesL(4, cactusMountains[i].x_pos + 320, cactusMountains[i].y_pos + 255, 8, 20);
    drawPricklesL(4, cactusMountains[i].x_pos + 350, cactusMountains[i].y_pos + 255, 8, 20);
    drawPricklesR(4, cactusMountains[i].x_pos + 385, cactusMountains[i].y_pos + 255, 8, 20);
    drawPricklesR(4, cactusMountains[i].x_pos + 430, cactusMountains[i].y_pos + 255, 8, 20);

    function drawPricklesL(num, x, y, len, density) {
      push();
      stroke(0);
      strokeWeight(3);
      for (var j = 1; j < num; j++) {
        line(x, y + j * density, x - len, y + len + j * density);
      }
      pop();
    }

    function drawPricklesR(num, x, y, len, density) {
      push();
      stroke(0);
      strokeWeight(3);
      for (var j = 1; j < num; j++) {
        line(x, y + j * density, x + len, y + len + j * density);
      }
      pop();
    }
  }
}

// Function to draw trees objects.
function drawCactusTrees() {
  for (var i = 0; i < cactusTrees_x.length; i++) {
    fill(120, 146, 67);
    rect(cactusTrees_x[i], floorPos_y - 40, 24, 40);
    ellipse(cactusTrees_x[i] - 2, floorPos_y - 50, 26, 49);
    ellipse(cactusTrees_x[i] + 28, floorPos_y - 32, 26, 49);
  }
}

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon) {
  fill(0);
  rect(t_canyon.x_pos + 40, floorPos_y, t_canyon.width - 16, height - floorPos_y);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon) {
  if (
    t_canyon.x_pos + 40 + t_canyon.width - 16 >= gameChar_world_x - 6 + 13 + 12 &&
    gameChar_world_x - 6 - 13 >= t_canyon.x_pos + 40 &&
    gameChar_y >= floorPos_y
  ) {
    isPlummeting = true;
    fallSound.play();
  }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable) {
  image(diamond, t_collectable.x_pos + 320, t_collectable.y_pos + 299);
}

// Function to check character has collected an item.

function checkCollectable(t_collectable) {
  if (dist(gameChar_world_x - 14, gameChar_y - 28, t_collectable.x_pos + 320, t_collectable.y_pos + 305) < 25) {
    t_collectable.isFound = true;

    game_score += 1;
    collectItemSound.play();
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
      floorPos_y - 180 - 10 + 40,
    );
  } else {
    triangle(
      flagpole.x_pos - 1,
      floorPos_y - 180 - 10 + 139,
      flagpole.x_pos - 52,
      floorPos_y - 180 - 10 + 30 + 139,
      flagpole.x_pos - 1,
      floorPos_y - 180 - 10 + 40 + 139,
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
    flagSound.play();
    return (flagpole.isReached = true);
  }
}

// Function to check player die.
var is_dead = false;
function minusLives() {
  lives -= 1;
  is_dead = false;
  startGame();
}
function checkPlayerDie() {
  if (!is_dead && lives > 0 && gameChar_y - 12 >= 576 - 8) {
    is_dead = true;
    setTimeout(minusLives, 1000);
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
  cactusTrees_x = [-800, -400, 100, 360, 1000, 1300, 1900, 2000, 2500, 3000];
  clouds = [
    { x_pos: -1500, y_pos: 150 },
    { x_pos: -900, y_pos: 100 },
    { x_pos: -300, y_pos: 190 },
    { x_pos: 100, y_pos: 100 },
    { x_pos: 600, y_pos: 200 },
    { x_pos: 800, y_pos: 100 },
    { x_pos: 1200, y_pos: 230 },
    { x_pos: 1700, y_pos: 160 },
    { x_pos: 1900, y_pos: 100 },
    { x_pos: 2500, y_pos: 100 },
    { x_pos: 2700, y_pos: 200 },
    { x_pos: 3100, y_pos: 80 },
    { x_pos: 3300, y_pos: 150 },
  ];
  cactusMountains = [
    { x_pos: -410, y_pos: 100 },
    { x_pos: 300, y_pos: 100 },
    { x_pos: 1250, y_pos: 100 },
    { x_pos: 2000, y_pos: 100 },
    { x_pos: 3000, y_pos: 100 },
  ];
  canyons = [
    { x_pos: 180, width: 100 },
    { x_pos: 760, width: 100 },
    { x_pos: 1080, width: 100 },
    { x_pos: 1700, width: 100 },
    { x_pos: 2700, width: 100 },
  ];
  collectable = [
    { x_pos: 70, y_pos: 100, size: 50, isFound: false },
    { x_pos: 620, y_pos: 100, size: 50, isFound: false },
    { x_pos: 1550, y_pos: 100, size: 50, isFound: false },
    { x_pos: 1900, y_pos: 100, size: 50, isFound: false },
    { x_pos: 2600, y_pos: 100, size: 50, isFound: false },
    { x_pos: 3150, y_pos: 100, size: 50, isFound: false },
    { x_pos: 3200, y_pos: 100, size: 50, isFound: false },
    { x_pos: 3250, y_pos: 100, size: 50, isFound: false },
  ];

  game_score = 0;
  flagpole = { isReached: false, x_pos: 3700 };
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
