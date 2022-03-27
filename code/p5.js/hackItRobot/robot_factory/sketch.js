var robots = [];
var shouldAdd;

function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(230);
  for (let index = 0; index < robots.length; index++) {
    const robot = robots[index];
    robot.update();
    for (let j = index + 1; j < robots.length; j++) {
      anotherRobot = robots[j];
      robot.checkContact(anotherRobot);
    }
    robot.draw();
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    var v = createVector(mouseX, mouseY);
    var robot = creatRobots(v);
    if (mouseX < robot.headWidth / 2) {
      v.x = robot.headWidth / 2;
    }
    if (mouseX > width - robot.headWidth / 2) {
      v.x = width - 50;
    }
    if (mouseY < 50) {
      v.y = 50;
    }
    if (mouseY > height - 50) {
      v.y = height - 50;
    }
    if (robots.length == 0) {
      robots.push(robot);
    } else {
      shouldAdd = true;
      for (let index = 0; index < robots.length; index++) {
        const element = robots[index];
        if (robot.checkContact(element)) {
          shouldAdd = false;
          break;
        }
        //错误方式，每遇到不重合的元素就加一个
        // if (robot.checkContact(element)) {
        //   console.log("disable!!!");
        // } else {
        //   robots.push(robot);
        // }
      }
      if (shouldAdd) {
        robots.push(robot);
      }
    }
    console.log("clicked mouse", robots);
  }
}

function creatRobots(v) {
  return {
    position: v,
    speedX: 1,
    speedY: 1,
    headWidth: round(random(60, 100)),
    isCollision: false,
    color: {
      r: round(random(0, 255)),
      g: round(random(0, 255)),
      b: round(random(0, 255)),
    },
    draw: function () {
      strokeWeight(2);
      stroke(0);
      //head
      rectMode(CENTER);
      fill(this.color.r, this.color.g, this.color.b);
      rect(this.position.x, this.position.y, this.headWidth, 100);
      // //ears
      // fill(this.color.g, this.color.r, this.color.b);
      // rect(this.position.x - 7, this.position.y + 30, 10, 33);
      // rect(this.position.x + this.headWidth - 3, this.position.y + 30, 10, 33);
      // //robots' antennas
      // fill(250, 250, 0);
      // ellipse(
      //   this.position.x + this.headWidth * 0.5,
      //   this.position.y - 7,
      //   10,
      //   10
      // );
      // fill(255 - this.color.r, 255 - this.color.g, 255 - this.color.b);
      // rect(
      //   this.position.x + this.headWidth * 0.5 - 10,
      //   this.position.y - 3,
      //   20,
      //   10
      // );
      // //eyes
      // fill(255);
      // ellipse(
      //   this.position.x + this.headWidth * 0.25,
      //   this.position.y + 30,
      //   26,
      //   26
      // );
      // point(this.position.x + this.headWidth * 0.25, this.position.y + 30);
      // ellipse(
      //   this.position.x + this.headWidth * 0.75,
      //   this.position.y + 30,
      //   26,
      //   26
      // );
      // point(this.position.x + this.headWidth * 0.75, this.position.y + 30);
      // //robots' noses
      // fill(255, 0, 0);
      // triangle(
      //   this.position.x + this.headWidth * 0.5,
      //   this.position.y + 35,
      //   this.position.x + this.headWidth * 0.35,
      //   this.position.y + 60,
      //   this.position.x + this.headWidth * 0.65,
      //   this.position.y + 60
      // );
      //robot 1 mouth
      // noFill();
      // beginShape();
      // vertex(this.position.x + this.headWidth * 0.28, this.position.y + 75);
      // vertex(this.position.x + this.headWidth * 0.36, this.position.y + 85);
      // vertex(this.position.x + this.headWidth * 0.42, this.position.y + 75);
      // vertex(this.position.x + this.headWidth * 0.5, this.position.y + 85);
      // vertex(this.position.x + this.headWidth * 0.58, this.position.y + 75);
      // vertex(this.position.x + this.headWidth * 0.66, this.position.y + 85);
      // vertex(this.position.x + this.headWidth * 0.74, this.position.y + 75);
      // endShape();
    },
    update: function () {
      this.position.x += this.speedX;
      this.position.y += this.speedY;

      // if (this.position.x > width - this.headWidth || this.position.x < 0) {
      if (
        this.position.x > width - this.headWidth / 2 ||
        this.position.x < this.headWidth / 2
      ) {
        this.speedX *= -1;
      }
      if (this.position.y > height - 50 || this.position.y < 50) {
        this.speedY *= -1;
      }
    },
    checkContact: function (otherRobot) {
      let deltaX = abs(this.position.x - otherRobot.position.x);
      let deltaY = abs(this.position.y - otherRobot.position.y);
      let x = ceil((this.headWidth + otherRobot.headWidth) / 2);
      // console.log(deltaX, deltaY);
      let touched = false;
      if (deltaX < x + 1 && (deltaY == 100 || deltaY == 99)) {
        this.speedY *= -1;
        otherRobot.speedY *= -1;
        touched = true;
      }
      if ((deltaX == x || deltaX == x - 1) && deltaY < 101) {
        this.speedX *= -1;
        otherRobot.speedX *= -1;
        touched = true;
      }
      if (deltaX < x && deltaY < 100) {
        this.speedX = -otherRobot.speedX;
        this.speedY = -otherRobot.speedY;
        touched = true;
      }
      return touched;
    },
  };
}
