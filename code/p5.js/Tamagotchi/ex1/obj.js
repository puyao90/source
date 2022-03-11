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
  constructor(x, y, size) {
    this.current = createVector(x, y);
    this.size = size;
    this.original = copyVector(this.current);
    this.grabbed = false;
    this.target = null;
    this.speed = 0.03;
    // this.deleted = false;
    // this.appleList = appleList;
  }

  draw() {
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

  checkGrabbed() {
    this.grabbed = mouseTouchedObject(
      this.current.x,
      this.current.y,
      this.size
    );
  }

  // release(tamagotchi) {
  //   if (this.grabbed) {
  //     if (mouseTouchedObject(0, 0, tamagotchi.size * 1.2)) {
  //       this.deleted = true;
  //       console.log(this.appleList);
  //       tamagotchi.grow();
  //       return true;
  //     } else {
  //       this.reset();
  //     }
  //   }
  //   return false;
  // }

  putBack() {
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
  constructor(tamagotchi, appleNumber = 3) {
    this.appleNumber = appleNumber;
    this.appleList = [];
    this.generateApples(appleNumber);
    this.currentAppleNumber = appleNumber;
    this.tamagotchi = tamagotchi;
  }

  generateApples(appleNumber) {
    // this.appleList = [];
    for (let i = 0; i < appleNumber; i++) {
      this.appleList.push(
        new Apple(
          24 + i * 26 * 1.3 - width / 2,
          height - 20 - height / 2,
          26,
          this.appleList
        )
      );
    }
  }

  draw() {
    this.applyFunction("draw");
  }

  applyFunction(func, args) {
    this.appleList.map((apple) => apple[func](args));
    // for (let i = 0; i < this.appleList.length; i++) {
    //   var apple = this.appleList[i];
    //   apple[func](args);
    // }
  }

  mouseReleased(tamagotchi) {
    // this.applyFunction("release", tamagotchi);
    let inRangeOfTamagotchi = mouseTouchedObject(0, 0, tamagotchi.size * 1.2);
    this.appleList = this.appleList
      .map((apple) => {
        if (apple.grabbed && inRangeOfTamagotchi) {
          tamagotchi.grow();
          apple.deleted = true;
          return undefined;
        } else if (apple.grabbed) {
          apple.putBack();
        }
        return apple;
      })
      .filter((x) => x);
  }

  noApples() {
    // return this.deletedApples() == this.appleNumber;
    return this.appleList.length == 0;
  }

  // // return a number shows how many apple were deleted
  // deletedApples() {
  //   return this.appleList.map((a) => a.deleted).reduce((a, b) => a + b);
  // }

  // mousePressed
  mousePressed() {
    this.applyFunction("checkGrabbed");
  }

  //mouseDragged
  mouseDragged() {
    this.applyFunction("followMouse");
  }
}

export {Apple, AppleBanner};
