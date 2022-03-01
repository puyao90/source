var spaceship_a;
var spaceship_b;
var d;

function setup() {
  createCanvas(500, 500);
  //   frameRate(10);
  spaceship_a = {
    x: width / 2,
    y: height / 2,
    radius: 50,
    speed_x: random(-5, 5),
    speed_y: random(-5, 5),
  };
  spaceship_b = {
    x: 100,
    y: height / 2,
    radius: 50,
    speed_x: random(-5, 5),
    speed_y: random(-5, 5),
  };
}

function draw() {
  background(0);
  noStroke();
  d = checkCollision(
    spaceship_a,
    spaceship_b,
    spaceship_a.radius + spaceship_b.radius
  );

  drawSpaceShip(spaceship_a, d);
  drawSpaceShip(spaceship_b, d);
  fly(spaceship_a);
  fly(spaceship_b);
}

function drawSpaceShip(spaceship, isCollided) {
  var rx = 0;
  var ry = 0;

  if (isCollided) {
    rx = random(-10, 10);
    ry = random(-10, 10);
  }

  fill(100, 200, 255);
  ellipse(
    spaceship.x + rx,
    spaceship.y - spaceship.radius / 2 + ry,
    spaceship.radius * 0.75,
    spaceship.radius
  );

  if (isCollided) {
    fill(150, 0, 0);
  } else {
    fill(100);
  }

  ellipse(
    spaceship.x + rx,
    spaceship.y + ry,
    spaceship.radius * 2,
    spaceship.radius
  );
}

function checkCollision(point_a, point_b, threshold) {
  //returns true if point_a is less than threshold away from point_b
  //otherwise it returns false
  if (dist(point_a.x, point_a.y, point_b.x, point_b.y) < threshold) {
    return true;
  } else {
    return false;
  }
}

function fly(spaceship) {
  //increments the position of the spaceship by its speed properties
  var speed = getSpeed(spaceship);
  // change speed of spaceship
  spaceship.speed_x = speed.x;
  spaceship.speed_y = speed.y;

  // apply offset of x,y
  spaceship.x += spaceship.speed_x;
  spaceship.y += spaceship.speed_y;
}

function getSpeed(spaceship) {
  //reverses the speed of a spaceship if it crosses the edge of the canvas
  //returns a speed object with x and y properties

  var speed = {x: spaceship.speed_x, y: spaceship.speed_y};

  if (
    spaceship.x < spaceship.radius ||
    spaceship.x > width - spaceship.radius
  ) {
    speed.x = -spaceship.speed_x;
  }
  if (
    spaceship.y > height - spaceship.radius / 2 ||
    spaceship.y < spaceship.radius
  ) {
    speed.y = -spaceship.speed_y;
  }
  return speed;
}
