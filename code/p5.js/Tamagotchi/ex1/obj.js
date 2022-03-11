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

class Apple {
  constructor(x, y, size, color) {
    this.current = createVector(x, y);
    this.size = size;
    this.original = copyVector(this.current);
    this.grabbed = false;
    this.target = null;
    this.speed = 0.03;
    this.deleted = false;
  }

  draw() {
    if (!this.deleted) {
      fill(220, 20, 60);
      if (this.target) {
        let deltaX = this.target.x - this.current.x;
        let deltaY = this.target.y - this.current.y;

        this.current.x += this.deltaX * this.speed;
        this.current.y += this.deltaY * this.speed;
        if (abs(deltaX) < 10 && abs(deltaY) < 10) {
          this.current = copyVector(this.target);
          this.target = null;
        }
      }
      ellipse(this.current.x, this.current.y, this.size);
    }
  }

  checkGrabbed() {
    this.grabbed = mouseTouchedObject(
      this.current.x,
      this.current.y,
      this.size
    );
  }

  release(tamagotchi) {
    if (this.grabbed) {
      if (mouseTouchedObject(0, 0, tamagotchi.size * 1.2)) {
        this.deleted = true;
        tamagotchi.grow();
      } else {
        this.reset();
      }
    }
  }

  reset() {
    this.grabbed = false;
    this.target = createVector(this.original.x, this.original.y);
    this.deltaX = this.target.x - this.current.x;
    this.deltaY = this.target.y - this.current.y;
  }

  followMouse() {
    if (this.grabbed) {
      this.current.x = mouseX - width / 2;
      this.current.y = mouseY - height / 2;
    }
  }
}

class AppleBanner {
  constructor(appleNumber = 3) {
    this.appleNumber = appleNumber;
    this.appleList = [];
    this.generateApples(appleNumber);
    this.currentAppleNumber = appleNumber;
  }

  generateApples(appleNumber) {
    // this.appleList = [];
    for (let i = 0; i < appleNumber; i++) {
      this.appleList.push(
        new Apple(24 + i * 26 * 1.3 - width / 2, height - 20 - height / 2, 26)
      );
    }
  }

  draw() {
    this.applyFunction("draw");
  }

  applyFunction(func, args) {
    for (let i = 0; i < this.appleList.length; i++) {
      var apple = this.appleList[i];
      apple[func](args);
    }
  }

  checkRelease(tamagotchi) {
    this.applyFunction("release", tamagotchi);
  }

  noApples() {
    return this.deletedApples() == this.appleNumber;
  }

  deletedApples() {
    return this.appleList.map((a) => a.deleted).reduce((a, b) => a + b);
  }

  grabApple() {
    this.applyFunction("checkGrabbed");
  }

  moveApple() {
    this.applyFunction("followMouse");
  }
}

export {Apple, AppleBanner};
