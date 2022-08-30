var gamePos;
var smoothedGamePos;

var rawValues = [];
var smoothValues = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  gamePos = createVector(width / 2, 0);
  smoothedGamePos = gamePos.copy();

  for (var i = 0; i < 512; i++) {
    rawValues.push(0);
    smoothValues.push(0);
  }
}

function draw() {
  background(0);

  push();
  translate(0, (height * 3) / 4);
  noStroke();

  //the raw game position
  fill(255, 0, 0);
  ellipse(gamePos.x, gamePos.y, 20, 20);

  //the smoothed position
  fill(255, 255, 0);
  rect(smoothedGamePos.x - 10, smoothedGamePos.y, 20, 40);

  pop();

  noStroke();

  /////////////////////draw the cars/////////////////////////////////

  for (var i = 0; i < 5; i++) {
    randomSeed(i * 1000); //isn't this useful !
    fill(0, 0, 255);
    rect(width / 2 + random(-width * 0.1, width * 0.1), (frameCount % (height + 400)) - i * 100, 20, 40);
  }

  ////////////////////draw the moving road////////////////////////////

  stroke(255);
  line(width * 0.6, 0, width * 0.6, height);
  line(width * 0.4, 0, width * 0.4, height);

  push();
  translate(0, -height / 20 + (frameCount % (height / 20)));
  for (var i = 0; i < 21; i++) {
    line(width / 2, (i * height) / 20, width / 2, (i * height) / 20 + height / 30); // the ground
  }
  pop();

  ///////////////////////Update the values for drawing the signal/////////////////////
  rawValues.push(gamePos.x / width);
  rawValues.shift();

  smoothedGamePos.x = smoothedGamePos.x * 0.95 + gamePos.x * 0.05;

  smoothValues.push(smoothedGamePos.x / width);
  smoothValues.shift();

  ///////////////////////////Draw the signal/////////////////////////
  noFill();

  beginShape();
  stroke(255, 0, 0);
  for (var i = 0; i < 512; i++) {
    vertex((i * 200) / 512, -rawValues[i] * height * 0.25 + height * 0.25);
  }
  endShape();

  beginShape();
  stroke(255, 255, 0);
  for (var i = 0; i < 512; i++) {
    vertex((i * 200) / 512, -smoothValues[i] * height * 0.25 + height * 0.5);
  }
  endShape();
}

function mouseMoved() {
  gamePos.x = constrain(mouseX, width * 0.4, width * 0.6);
}
