var rocket;
var baseLine;
var bullets = [];

function setup() {
  createCanvas(800, 600);

  baseLine = height - 100;

  rocket = {
    vect: createVector(width / 2, baseLine),
    thrust: false,
    moveLeft: false,
    moveRight: false,
    drawRocket: function () {
      fill(180);
      beginShape();
      vertex(this.vect.x + 10, this.vect.y + 60);
      vertex(this.vect.x + 10, this.vect.y + 20);
      vertex(this.vect.x + 15, this.vect.y);
      vertex(this.vect.x + 20, this.vect.y + 20);
      vertex(this.vect.x + 20, this.vect.y + 60);
      endShape(CLOSE);

      fill(255, 0, 0);
      beginShape();
      vertex(this.vect.x, this.vect.y + 60);
      vertex(this.vect.x + 10, this.vect.y + 40);
      vertex(this.vect.x + 10, this.vect.y + 60);
      endShape(CLOSE);

      beginShape();
      vertex(this.vect.x + 30, this.vect.y + 60);
      vertex(this.vect.x + 20, this.vect.y + 40);
      vertex(this.vect.x + 20, this.vect.y + 60);
      endShape(CLOSE);
    },
    moveRoket: function () {
      if (this.thrust && this.vect.y > 0) {
        this.vect.y -= 2;
      } else if (this.vect.y < baseLine) {
        this.vect.y += 2;
      }

      if (this.moveLeft && this.vect.x > 0 && this.vect.y != baseLine) {
        this.vect.x -= 2;
      }

      if (
        this.moveRight &&
        this.vect.x < width - 30 &&
        this.vect.y != baseLine
      ) {
        this.vect.x += 2;
      }
    },

    shootBullet: function () {
      console.log(bullets);
      bullets.push({
        loc: this.vect,
        speed: 5,
        size: 3,
        move: function () {
          this.loc = createVector(this.loc.x, this.loc.y - this.speed);
        },
      });
    },
  };
}

function drawBullets() {
  for (let index = 0; index < bullets.length; index++) {
    const bullet = bullets[index];
    stroke(0, 255, 255);
    line(
      bullet.loc.x + 15,
      bullet.loc.y,
      bullet.loc.x + 15,
      bullet.loc.y + bullet.size
    );
    bullet.move();
    //remove from bullets array when bullet flys out of the screen
    if (bullets[index].loc.y < 10) {
      bullets.splice(index, 1);
    }
  }
}

function draw() {
  background(10);
  rocket.drawRocket();
  rocket.moveRoket();
  drawBullets();
  noStroke();

  if (rocket.thrust) {
    fill(255, 150, 0);
    beginShape();
    vertex(rocket.vect.x + 10, rocket.vect.y + 60);
    vertex(rocket.vect.x + 13, rocket.vect.y + 80);
    vertex(rocket.vect.x + 15, rocket.vect.y + 70);
    vertex(rocket.vect.x + 18, rocket.vect.y + 80);
    vertex(rocket.vect.x + 20, rocket.vect.y + 60);
    endShape(CLOSE);
  }
}

function keyPressed() {
  if (key == "W") {
    rocket.thrust = true;
  }

  if (key == "A") {
    rocket.moveLeft = true;
  }

  if (key == "D") {
    rocket.moveRight = true;
  }
  if (keyCode == 32) {
    rocket.shootBullet();
  }
  //   console.log(keyCode);
}

function keyReleased() {
  if (key == "W") {
    rocket.thrust = false;
  }

  if (key == "A") {
    rocket.moveLeft = false;
  }

  if (key == "D") {
    rocket.moveRight = false;
  }
}
