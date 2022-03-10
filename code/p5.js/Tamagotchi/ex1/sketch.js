var tamagotchi;
var appleBanner;

class Apple {
  constructor(x, y, size, color) {
    this.center = createVector(x, y);
    this.size = size;
    this.original = copyVector(this.center);
    this.current = "";
    this.grabbed = false;
  }

  draw() {
    fill(220, 20, 60);
    ellipse(this.center.x, this.center.y, this.size);
  }

  checkGrabbed() {
    this.grabbed = mouseTouchedObject(this.center.x, this.center.y, this.size);
  }

  reset() {
    this.grabbed = false;
    this.center = createVector(this.original.x, this.original.y);
  }

  followMouse() {
    if (this.grabbed) {
      this.center.x = mouseX - width / 2;
      this.center.y = mouseY - height / 2;
    }
  }
}

class AppleBanner {
  constructor(appleNumber = 3) {
    this.appleNumber = appleNumber;
    this.appleList = [];
    this.generateApples(3);
  }

  generateApples(appleNumber) {
    this.appleList = [];
    for (let i = 0; i < appleNumber; i++) {
      this.appleList.push(
        new Apple(24 + i * 26 * 1.3 - width / 2, height - 20 - height / 2, 26)
      );
    }
  }

  draw() {
    this.applyFunction("draw");
  }

  applyFunction(func) {
    for (let i = 0; i < this.appleList.length; i++) {
      var apple = this.appleList[i];
      apple[func]();
    }
  }

  releaseApple() {
    for (let index = 0; index < this.appleList.length; index++) {
      const apple = this.appleList[index];
      if (apple.grabbed) {
        if (mouseTouchedObject(0, 0, tamagotchi.size * 1.2)) {
          this.appleList.splice(index, 1);
          tamagotchi.grow();
        } else {
          apple.reset();
        }
      }
    }
  }
}

function setup() {
  createCanvas(500, 500);
  noStroke();

  appleBanner = new AppleBanner();
  tamagotchi = {
    points: [],
    size: 100,
    setup: function () {
      for (var index = 0; index < 36; index++) {
        var v = createVector(0, random(0.78, 1));
        this.points.push(v.rotate(((PI * 2) / 36) * index));
      }
      console.log(this.points);
    },
    drawTamagotchi: function () {
      beginShape();
      for (let i = 0; i < this.points.length; i++) {
        fill(106, 90, 205);
        var p = this.points[i];
        var t = p5.Vector.mult(p, this.size);
        curveVertex(t.x, t.y);
      }
      endShape();

      fill(255);
      ellipse(this.size * 0.12, 0, this.size * 0.1);
      ellipse(-this.size * 0.12, 0, this.size * 0.1);

      fill(0);
      var v = createVector(mouseX - width / 2, mouseY - height / 2);
      v.normalize();
      v.mult(this.size * 0.02);
      ellipse(this.size * 0.12 + v.x, v.y, this.size * 0.05);
      ellipse(-this.size * 0.12 + v.x, v.y, this.size * 0.05);
    },
    grow: function () {
      this.size *= random(1.1, 1.5);
      this.size = min(this.size, 220);
      var rot = random(-0.01, 0.01);
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].rotate(rot);
      }
    },
    shrink: function () {
      this.size *= random(0.9995, 1);
      this.size = max(this.size, 30);
    },
  };

  tamagotchi.setup();
}

function draw() {
  background(0, 0, 0);
  translate(width / 2, height / 2);

  tamagotchi.drawTamagotchi();
  tamagotchi.shrink();
  appleBanner.draw();
}

function mousePressed() {
  appleBanner.applyFunction("checkGrabbed");
}

function mouseReleased() {
  appleBanner.releaseApple();
}

function checkAndRegenerateApples() {
  if (appleBanner.appleList.length == 0) appleBanner.generateApples(4);
}

function keyPressed() {
  if (keyCode == 32) checkAndRegenerateApples();
}

function mouseDragged() {
  appleBanner.applyFunction("followMouse");
}

function mouseTouchedObject(objectX, objectY, radius) {
  return (
    mouseX - width / 2 < objectX + radius / 2 &&
    mouseX - width / 2 > objectX - radius / 2 &&
    mouseY - height / 2 > objectY - radius / 2 &&
    mouseY - height / 2 < objectY + radius / 2
  );
}

function copyVector(v) {
  return createVector(v.x, v.y);
}
