let gameChar_screen_x, gameChar_screen_y;
let gameChar_world_x, gameChar_world_y;
let cameraPos_x, cameraPos_y;
let isLeft, isRight, isFalling;
const platforms = [];
let camera_target_posX, camera_target_posY;
const damp = 0.95;

function setup() {
  createCanvas(400, 400);

  gameChar_screen_x = width / 2;
  gameChar_screen_y = height / 2;
  gameChar_world_x = gameChar_screen_x;
  gameChar_world_y = gameChar_screen_y;
  cameraPos_x = 0;
  cameraPos_y = 0;
  noStroke();
  // var moveP = new CreatingMovingPlatform(0, 200, 50, 50);
  platforms.push(new CreatingMovingPlatform(100, 200, 50, 50));
  // var p = new CreatePlatform(0, 300, 500);
  platforms.push(new CreatePlatform(0, 300, 500));
  platforms.push(new CreatePlatform(300, 250, 50));
  for (let i = 0; i < 10; i++) {
    platforms.push(new CreatePlatform(platforms.at(-1).x + 50, platforms.at(-1).y - 50, 50));
  }

  // console.log(moveP instanceof CreatingMovingPlatform); //true
  // console.log(moveP instanceof CreatePlatform); //true
  // console.log(p instanceof CreatingMovingPlatform); //false
  // console.log(p instanceof CreatePlatform); //true
}

function draw() {
  background(100, 150, 200);
  camera_target_posX = gameChar_world_x - gameChar_screen_x;
  camera_target_posY = gameChar_world_y - gameChar_screen_y;
  cameraPos_x = cameraPos_x * damp + camera_target_posX * (1 - damp);
  cameraPos_y = cameraPos_y * damp + camera_target_posY * (1 - damp);
  push();
  translate(-cameraPos_x, -cameraPos_y);

  for (const p of platforms) {
    p.update();
    p.draw();
  }

  fill(255, 0, 0);
  noStroke();
  ellipse(gameChar_world_x, gameChar_world_y - 8, 16);

  pop();

  // Logic to make the character move or the background scroll.
  if (isLeft) {
    gameChar_world_x -= 5;
  }

  if (isRight) {
    gameChar_world_x += 5;
  }
  isFalling = false;

  // Logic to make the game character rise and fall.
  var isContact = false;
  for (const p of platforms) {
    if (p.checkContact(gameChar_world_x, gameChar_world_y)) {
      isContact = true;
      gameChar_world_y = p.y;
      if (p instanceof CreatingMovingPlatform) {
        gameChar_world_x += p.dir;
      }
      break;
    }
  }

  if (!isContact) {
    isFalling = true;
    gameChar_world_y += 3;
  }
}

function keyPressed() {
  if (key == 'A' || keyCode == 37) {
    isLeft = true;
  }

  if (key == 'D' || keyCode == 39) {
    isRight = true;
  }

  if (key == ' ' || key == 'W') {
    if (!isFalling) {
      gameChar_world_y -= 100;
    }
  }
}

function keyReleased() {
  if (key == 'A' || keyCode == 37) {
    isLeft = false;
  }

  if (key == 'D' || keyCode == 39) {
    isRight = false;
  }
}

class CreatePlatform {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
  }

  draw() {
    stroke(0);
    fill(255, 255, 0);
    rect(this.x, this.y, this.length, 20);
  }
  update() {}

  checkContact(gc_x, gc_y) {
    if (gc_x > this.x && gc_x < this.x + this.length) {
      const d = this.y - gc_y;
      if (d < 5 && d >= 0) {
        return true;
      }
    }
    return false;
  }
}
class CreatingMovingPlatform extends CreatePlatform {
  constructor(x, y, length, range) {
    super(x, y, length);
    this.range = range;
    this.anchor = x;
    this.dir = 1;
  }
  update() {
    this.x += this.dir;
    if (abs(this.x - this.anchor) > this.range) {
      this.dir *= -1;
    }
  }
}
