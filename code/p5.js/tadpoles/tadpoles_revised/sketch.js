var tadpoles;
var screenBorder;
var tadpolesCount = 100;

function setup() {
  createCanvas(1200, 800);
  screenBorder = 0;

  tadpoles = [];
  for (var i = 0; i < tadpolesCount; i++) {
    tadpoles.push(
      createTadpole(
        random(0, width + screenBorder),
        random(0, height + screenBorder)
      )
    );
  }
}

function randomTime(start, end) {
  return round(random(start * 30, end * 30));
}

function draw() {
  background(0, 105, 148);
  for (var i = 0; i < tadpoles.length; i++) {
    tadpoles[i].update();
    tadpoles[i].draw();
    tadpoles[i].changeAge();
  }
}

function mousePressed() {
  var v = createVector(mouseX, mouseY);
  console.log(tadpoles[0]);
  for (var i = 0; i < tadpoles.length; i++) {
    tadpoles[i].testClick(v);
  }
}

function createTadpole(x, y) {
  var tadpole = {
    pos: undefined,
    dir: undefined,
    tailFlick: 5,
    tailIncr: -1,
    age: 0,
    lastFrameCount: frameCount,
    happyGrowUp: [
      {
        frameCountDelta: randomTime(5, 6),
        drawThisAge: function (outer) {
          fill(100, 100);
          stroke(150);
          ellipse(0, 0, 25);
          fill(0);
          ellipse(0, 0, 6);
        },
      },
      {
        frameCountDelta: randomTime(5, 6),
        drawThisAge: function (outer) {
          rotate(outer.dir.heading());
          fill(0);
          stroke(0);
          ellipse(0, 0, 12, 8);
          strokeWeight(2);
          noFill();
          beginShape();
          curveVertex(-6, 0);
          curveVertex(-6, 0);
          curveVertex(-18, outer.tailFlick);
          curveVertex(-36, 0);
          curveVertex(-36, 0);
          endShape();
        },
      },
      {
        frameCountDelta: randomTime(6, 9),
        drawThisAge: function (outer) {
          rotate(outer.dir.heading());
          fill(0);
          stroke(0);
          ellipse(0, 0, 16, 12);
          strokeWeight(2);
          noFill();
          beginShape();
          vertex(3, 5);
          vertex(3, 10);
          vertex(7, 10);
          endShape();

          beginShape();
          vertex(3, -5);
          vertex(3, -10);
          vertex(7, -10);
          endShape();

          beginShape();
          curveVertex(-5, 0);
          curveVertex(-5, 0);
          curveVertex(-14, outer.tailFlick);
          curveVertex(-24, 0);
          curveVertex(-24, 0);
          endShape();
        },
      },
      {
        frameCountDelta: randomTime(6, 9),
        drawThisAge: function (outer) {
          rotate(outer.dir.heading());
          fill(0);
          stroke(0);
          ellipse(0, 0, 16, 12);
          strokeWeight(2);
          noFill();
          beginShape();
          vertex(3, 5);
          vertex(3, 10);
          vertex(7, 10);
          endShape();

          beginShape();
          vertex(3, -5);
          vertex(3, -10);
          vertex(7, -10);
          endShape();

          beginShape();
          vertex(-7, 1);
          vertex(-7, 12);
          vertex(-15, 2);
          vertex(-17, 4);
          endShape();

          beginShape();
          vertex(-7, -1);
          vertex(-7, -12);
          vertex(-15, -2);
          vertex(-17, -4);
          endShape();

          beginShape();
          curveVertex(-5, 0);
          curveVertex(-5, 0);
          curveVertex(-14, outer.tailFlick);
          curveVertex(-24, 0);
          curveVertex(-24, 0);
          endShape();
        },
      },
      {
        frameCountDelta: randomTime(6, 9),
        drawThisAge: function (outer) {
          rotate(outer.dir.heading());
          fill(0);
          stroke(0);
          ellipse(0, 0, 16, 12);
          strokeWeight(2);
          noFill();
          beginShape();
          vertex(3, 5);
          vertex(3, 10);
          vertex(7, 10);
          endShape();

          beginShape();
          vertex(3, -5);
          vertex(3, -10);
          vertex(7, -10);
          endShape();

          beginShape();
          vertex(-7, 1);
          vertex(-7, 12);
          vertex(-15, 2);
          vertex(-17, 4);
          endShape();

          beginShape();
          vertex(-7, -1);
          vertex(-7, -12);
          vertex(-15, -2);
          vertex(-17, -4);
          endShape();
        },
      },
    ],

    setup: function (x, y) {
      this.pos = createVector(x, y);
      this.dir = createVector(random(-1, 1), random(-1, 1));
      this.dir.normalize();
    },

    draw: function () {
      push();
      translate(this.pos.x, this.pos.y);
      this.happyGrowUp[this.age].drawThisAge(this);
      pop();
    },

    changeAge: function () {
      if (this.age == 0) {
        // I'm a baby, need to click me, start growing up
      } else {
        let nextAge = this.age + 1;
        let nextAgeShape = this.happyGrowUp[nextAge];
        // console.log(">>", nextAge, nextAgeShape);
        if (
          nextAgeShape &&
          this.lastFrameCount + nextAgeShape.frameCountDelta == frameCount
        ) {
          this.age += 1;
          console.log("grow to ", this.age, nextAgeShape);
          this.lastFrameCount = frameCount;
        }
      }
    },

    update: function () {
      if (this.age == 0) {
        this.pos.x += random(-0.5, 0.5);
        this.pos.y += random(-0.5, 0.5);
      } else {
        this.tailFlick += this.tailIncr;
        if (abs(this.tailFlick) > 5) {
          this.tailIncr *= -1;
        }
        this.pos.add(this.dir);
      }
      this.screenWrap();
    },

    screenWrap: function () {
      if (this.pos.x > width + screenBorder) {
        this.pos.x -= width + screenBorder;
      } else if (this.pos.x < -screenBorder) {
        this.pos.x += width + screenBorder;
      }

      if (this.pos.y > height + screenBorder) {
        this.pos.y -= height + screenBorder;
      } else if (this.pos.y < -screenBorder) {
        this.pos.y += height + screenBorder;
      }
    },

    testClick: function (mouse) {
      if (this.pos.dist(mouse) < 25 && this.age == 0) {
        this.age = 1;
        this.lastFrameCount = frameCount;
        console.log(this);
      }
    },
  };

  tadpole.setup(x, y);

  return tadpole;
}
