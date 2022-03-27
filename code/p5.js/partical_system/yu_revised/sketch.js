function gradient(currentValue, startNumber, endNumber, startColor, endColor) {
  return color(
    map(
      currentValue,
      startNumber,
      endNumber,
      startColor.levels[0],
      endColor.levels[0]
    ),
    map(
      currentValue,
      startNumber,
      endNumber,
      startColor.levels[1],
      endColor.levels[1]
    ),
    map(
      currentValue,
      startNumber,
      endNumber,
      startColor.levels[2],
      endColor.levels[2]
    ),
    map(
      currentValue,
      startNumber,
      endNumber,
      startColor.levels[3],
      endColor.levels[3]
    )
  );
}

function CreateParticles(
  pos_x,
  pos_y,
  speedX,
  speedY,
  startSize,
  endSize,
  startColor,
  endColor,
  maxAge
) {
  this.pos = createVector(pos_x, pos_y);
  this.speedX = speedX;
  this.speedY = speedY;
  this.startSize = startSize;
  this.currentSize = startSize;
  this.endSize = endSize;
  this.exipred = false;
  this.maxAge = maxAge;
  this.currentAge = 0;

  this.startColor = startColor;
  this.endColor = endColor;
  this.currentColor = color(
    startColor.levels[0],
    startColor.levels[1],
    startColor.levels[2],
    startColor.levels[3]
  );

  this.currentAge = 0;
  this.drawParticles = function () {
    if (!this.exipred) {
      fill(this.currentColor);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.currentSize);
    }
  };
  this.update = function () {
    this.pos.x += this.speedX;
    this.pos.y += this.speedY;
    this.currentAge += 1;
    if (this.currentAge > this.maxAge) {
      this.exipred = true;
      // console.log("dead updat");
    }
    this.currentColor = gradient(
      this.currentAge,
      10,
      this.maxAge,
      this.startColor,
      this.endColor
    );
    this.currentSize += 0.2;
    // this.currentSize = map(
    //   this.currentAge,
    //   0,
    //   this.maxAge,
    //   this.startSize,
    //   this.endSize
    // );
  };
}

function Emitter(
  pos_x,
  pos_y,
  speedX,
  speedY,
  startSize,
  endSize,
  startColor,
  endColor,
  maxAge
) {
  this.pos = createVector(pos_x, pos_y);
  this.speedX = speedX;
  this.speedY = speedY;
  this.startSize = startSize;
  this.endSize = endSize;
  this.startColor = startColor;
  this.endColor = endColor;
  this.maxAge = maxAge;
  this.num = 0;
  this.particles = [];

  this.ANewParticle = function () {
    // console.log(this.startColor);
    return new CreateParticles(
      random(this.pos.x - 100, this.pos.x + 100),
      random(this.pos.y - 5, this.pos.y + 5),
      random(this.speedX - 0.5, this.speedX + 0.5),
      random(this.speedY - 1, this.speedY),
      this.startSize,
      this.endSize,
      this.startColor,
      this.endColor,
      this.maxAge
    );
  };
  this.pushToParticles = function (num) {
    this.num = num;
    for (let i = 0; i < this.num; i++) {
      this.particles.push(this.ANewParticle());
    }
  };

  this.emitParticles = function () {
    this.pushToParticles(10);
    // let diedParticles = 0;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].exipred) {
        // diedParticles++;
        this.particles.splice(i, 1);
        // console.log("kill" + diedParticles);
      } else {
        this.particles[i].update();
        this.particles[i].drawParticles();
      }
    }
    // for (let i = 0; i < diedParticles; i++) {
    //   this.particles.push(this.ANewParticle());
    //   console.log("add" + diedParticles);
    // }
  };
}

let em1;

function setup() {
  createCanvas(800, 600);
  em1 = new Emitter(
    width / 2,
    height - 20,
    0,
    -5,
    20,
    50,
    color(247, 225, 0, 200),
    color(255, 73, 4, 0),
    70
  );
  // em1.pushToParticles(1);
}

function draw() {
  background(0);
  em1.emitParticles();
  if (frameCount % 100 == 0) console.log(em1.particles.length);
}
