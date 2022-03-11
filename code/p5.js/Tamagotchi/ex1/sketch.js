import {AppleBanner} from "./obj.js";
var tamagotchi;
var appleBanner;

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
  appleBanner.grabApple();
}

function mouseReleased() {
  appleBanner.checkRelease(tamagotchi);
}

function keyPressed() {
  if ((keyCode == 32) & appleBanner.noApples()) appleBanner = new AppleBanner();
}

function mouseDragged() {
  appleBanner.moveApple();
}

window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;
window.keyPressed = keyPressed;
window.mouseDragged = mouseDragged;
