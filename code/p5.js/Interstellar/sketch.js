var starPositionX;
var starPositionY;
var starNum;

var starDirectionsX;
var starDirectionsY;
var maxDistance;

function setup() {
  createCanvas(800, 800);

  starPositionX = [];
  starPositionY = [];
  starNum = 1000;
  starDirectionsX = [];
  starDirectionsY = [];

  maxDistance = dist(0, 0, width / 2, height / 2);

  for (var i = 0; i < starNum; i++) {
    starPositionX.push(width / 2);
    starPositionY.push(height / 2);
    starDirectionsX.push(random(-1, 1));
    starDirectionsY.push(random(-1, 1));
  }
}

function draw() {
  background(0);
  fill(255);
  noStroke();
  for (var i = 0; i < starNum; i++) {
    var d = dist(starPositionX[i], starPositionY[i], width / 2, height / 2);
    var r = d / 25;
    var s = (d * 2) / maxDistance + 0.2;
    ellipse(starPositionX[i], starPositionY[i], r, r);
    starPositionX[i] += starDirectionsX[i] * s;
    starPositionY[i] += starDirectionsY[i] * s;
    if (d > maxDistance) {
      starPositionX[i] = width / 2;
      starPositionY[i] = height / 2;
    }
  }
}
