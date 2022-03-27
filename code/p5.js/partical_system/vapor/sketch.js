function CreateParticles(x_pos, y_pos, speedX, speedY, size, scaleSize) {
  this.x_pos = x_pos;
  this.y_pos = y_pos;
  this.speedX = speedX;
  this.speedY = speedY;
  this.size = size;
  this.scaleSize = scaleSize;
  // this.color = color;
  this.drawParticles = function () {
    // fill(this.color);
    ellipse(this.x_pos, this.y_pos, this.size);
  };
  this.update = function () {
    this.x_pos += this.speedX;
    this.y_pos += this.speedY;
    this.size += this.scaleSize;
  };
}

function Emitter(x_pos, y_pos, speedX, speedY, size, scaleSize) {
  this.x_pos = x_pos;
  this.y_pos = y_pos;
  this.speedX = speedX;
  this.speedY = speedY;
  this.size = size;
  this.scaleSize = scaleSize;
  // this.color = color;

  this.particles = [];

  this.pushToParticles = function () {
    this.particles.push(
      new CreateParticles(
        this.x_pos,
        this.y_pos,
        random(-this.speedX, this.speedX),
        random(this.speedY, this.speedY + 0.25),
        this.size,
        this.scaleSize
        // this.color
      )
    );
  };

  this.emitParticles = function () {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      // console.log(this.particles[i].y_pos);
      if (this.particles[i].y_pos < 0) {
        this.particles.splice(i, 1);
        // console.log("kill");
      }
    }
    for (let i = 0; i < this.particles.length; i++) {
      noStroke();
      let alpha = map(this.particles[i].size, 0, 200, 20, 0);
      fill(255, 20, 147, alpha);
      // fill(255);
      this.particles[i].drawParticles();
    }
  };
}

let em;
function setup() {
  createCanvas(400, 400);
  em = new Emitter(width / 2, height - 100, 0.5, -1, 2, 0.5);
}

function draw() {
  background(20);
  em.pushToParticles();
  // console.log(em.particles.length);
  em.emitParticles();
  //   console.log(particles.length);
}
