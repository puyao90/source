let gameChar_x;
let gameChar_world_x;
let gameChar_y;
let isLeft, isRight, isFalling;
const floorPos_y = 300;
let scrollPos;
const platforms = [];

function setup() {
  createCanvas(400, 400);

  gameChar_x = width / 2;
  gameChar_world_x = gameChar_x;
  gameChar_y = height / 2;
  scrollPos = 0;

  noStroke();

  platforms.push(createPlatform(300, floorPos_y - 50, 50));
  //   platforms.push(createPlatform(350, floorPos_y - 100, 50));
  //   platforms.push(createPlatform(400, floorPos_y - 150, 50));
  for (let i = 0; i < 10; i++) {
    // platforms.push(createPlatform(300 + i * 50, floorPos_y - 50 - i * 50, 50));
    platforms.push(
      //   createPlatform(
      //     platforms[platforms.length - 1].x + 50,
      //     platforms[platforms.length - 1].y - 50,
      //     50
      //   )
      createPlatform(platforms.at(-1).x + 50, platforms.at(-1).y - 50, 50)
    );
  }
}

function draw() {
  background(100, 150, 200);

  //draw the ground
  fill(0, 100, 0);
  rect(0, floorPos_y, width, height - floorPos_y);

  push();
  translate(scrollPos, 0);

  for (const p of platforms) {
    p.draw();
  }

  pop();

  fill(255, 0, 0);
  noStroke();
  ellipse(gameChar_x, gameChar_y - 8, 16);

  // Logic to make the character move or the background scroll.
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
  isFalling = false;
  // Logic to make the game character rise and fall.
  if (gameChar_y < floorPos_y) {
    var isContact = false;
    for (const p of platforms) {
      if (p.checkContact(gameChar_world_x, gameChar_y)) {
        isContact = true;
        gameChar_y = p.y;
        break;
      }
    }

    if (!isContact) {
      isFalling = true;
      gameChar_y += 3;
    }
  }

  // Update real position of gameChar for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;
}

function keyPressed() {
  if (key == "a" || keyCode == 37) {
    isLeft = true;
  }

  if (key == "d" || keyCode == 39) {
    isRight = true;
  }

  if (key == " " || key == "w") {
    if (!isFalling) {
      gameChar_y -= 100;
    }
  }
}

function keyReleased() {
  if (key == "a" || keyCode == 37) {
    isLeft = false;
  }

  if (key == "d" || keyCode == 39) {
    isRight = false;
  }
}

function createPlatform(x, y, length) {
  const p = {
    x: x,
    y: y,
    length: length,
    draw: function () {
      stroke(0);
      fill(255, 255, 0);
      rect(this.x, this.y, this.length, 20);
    },

    checkContact(gc_x, gc_y) {
      if (gc_x > this.x && gc_x < this.x + length) {
        const d = this.y - gc_y;

        if (d < 5 && d >= 0) {
          return true;
        }
      }

      return false;
    },
  };

  return p;
}
