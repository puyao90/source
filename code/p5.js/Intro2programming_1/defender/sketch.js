var space_ship;
var mountain;
class spaceShip {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 0;
  }
  draw() {
    fill(255, 0, 0);
    triangle(this.x, this.y, this.x - 50, this.y - 10, this.x - 50, this.y + 10);
  }
  move() {
    this.y += this.direction;
    this.y = constrain(this.y, 0, height);
  }
  keyPressed() {
    if (key == 'W') {
      this.direction = -2;
    }
    if (key == 'S') {
      this.direction = 2;
    }
  }
  keyReleased() {
    this.direction = 0;
  }
}

class endlessMountain {
  constructor(start_x, start_y, end_x, end_y, height, inc, incV) {
    this.start_x = start_x;
    this.start_y = start_y;
    this.end_x = end_x;
    this.end_y = end_y;
    this.height = height;
    this.inc = inc;
    this.incV = incV;
  }

  draw() {
    noStroke();
    fill(100);
    beginShape();
    vertex(this.start_x, this.start_y);
    for (let i = 0; i < width; i++) {
      vertex(i, this.generateNoise(i));
    }
    vertex(this.end_x, this.end_y);
    endShape();
  }
  generateNoise(input) {
    var n = noise(input * 0.01 + this.inc);
    var y = map(n, 0, 1, this.start_y, this.end_y + this.height);
    if (this.inversed) return y;
    else return y;
  }
  update() {
    this.inc += this.incV;
  }
  checkCollision(space_ship) {
    var Threshold = this.generateNoise(space_ship.x);
    if (this.height < 0) {
      if (space_ship.y > Threshold) {
        this.gameOver();
      }
    }
    if (this.height > 0) {
      if (space_ship.y < Threshold) {
        this.gameOver();
      }
    }
  }
  gameOver() {
    fill(255);
    textSize(32);
    textAlign(CENTER);
    text('Game Over', width / 2, height / 2);
    noLoop();
  }
}

function setup() {
  createCanvas(600, 400);
  increase = 0;
  space_ship = new spaceShip(100, height / 2);
  mountainDown = new endlessMountain(0, height, width, height, -200, 0, 0.01);
  mountainUp = new endlessMountain(0, 0, width, 0, 200, 153918, 0.01);
}

function draw() {
  background(0);
  mountainDown.draw();
  mountainDown.update();
  mountainUp.draw();
  mountainUp.update();
  space_ship.draw();
  space_ship.move();
  mountainDown.checkCollision(space_ship);
  mountainUp.checkCollision(space_ship);
}
function keyPressed() {
  space_ship.keyPressed();
}
function keyReleased() {
  space_ship.keyReleased();
}
