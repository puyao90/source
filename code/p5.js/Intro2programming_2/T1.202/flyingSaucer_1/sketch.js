//Topic 1.1
//Object orientation revisted
//part one
var flying_saucers;
class Flying_saucer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = random(150, 250);
    this.height = random(75, 125);
    this.window_width = random(0.5, 0.85);
    this.window_height = 1.2;
    this.base_height = 0.45;
    this.num_lights = round(random(10, 20));
    this.brightness = [];
    this.brightnessIncValue = 15;
    this.brightnessIncSpeed = 5;
    this.beamOn = false;
    for (let i = 0; i < this.num_lights; i++) {
      this.brightness.push((i * this.brightnessIncValue) % 255);
    }
  }
  draw() {
    if (this.beamOn) {
      this.beam();
    }
    fill(175, 238, 238);
    arc(this.x, this.y, this.width * this.window_width, this.height * this.window_height, PI, TWO_PI);
    fill(150);
    arc(this.x, this.y, this.width, this.height / 2, PI, TWO_PI);
    fill(50);
    arc(this.x, this.y, this.width, this.height * this.base_height, 0, PI);

    var inc = this.width / (this.num_lights - 1);
    for (let i = 0; i < this.num_lights; i++) {
      fill(this.brightness[i]);
      ellipse(this.x - this.width / 2 + inc * i, this.y, 5);
      this.brightness[i] += this.brightnessIncSpeed;
      this.brightness[i] = this.brightness[i] % 255;
    }
  }
  hover() {
    this.x += random(-2, 2);
    this.y += random(-1, 1);
    if (!this.beamOn && random() > 0.99) {
      this.beamOn = true;
    } else if (this.beamOn && random() > 0.95) {
      this.beamOn = false;
    }
  }
  beam() {
    if (random() > 0.05) {
      fill(255, 255, 100, 150);
      beginShape();
      vertex(this.x - this.width * 0.25, this.y);
      vertex(this.x + this.width * 0.25, this.y);
      vertex(this.x + this.width * 0.35, height - 100);
      vertex(this.x - this.width * 0.35, height - 100);
      endShape();
    }
  }
}
function setup() {
  createCanvas(800, 600);
  noStroke();
  flying_saucers = [];
  for (let i = 0; i < 5; i++) {
    flying_saucers.push(new Flying_saucer(130 * (i + 1), 90 * (i + 1)));
  }
}

function draw() {
  background(50, 0, 80);

  //draw the ground
  fill(0, 50, 0);
  rect(0, height - 100, width, 100);

  for (let i = 0; i < flying_saucers.length; i++) {
    flying_saucers[i].draw();
    flying_saucers[i].hover();
  }
}
