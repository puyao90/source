function setup() {
  createCanvas(500, 500);
  // fill(255, 150, 0) //setup只在开始执行一次，draw会每一帧循环执行。在这里设置的颜色会被下面draw里的覆盖，所以一般只在draw设置颜色
  // noFill()
  // stroke(0, 0, 255)
  // noStroke()
}

// function draw() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }
var huale = false;

function draw() {
  background(200, 200, 200); //red green blue
  if (!huale) {
    line(0, 0, 999, 999);
    huale = true;
  }
  // noStroke()
  // rect(100, 100, 100, 100) //四个参数分别是左上角点x坐标，y坐标，width，height

  // fill(255, 150, 0, 255) //255means the shape is completely opaque
  // stroke(0, 255, 255)
  // rect(250, 100, 100, 100)
  // ellipse(350, 180, 75, 75) //x,y表示圆心位置

  // fill(255, 0, 0)
  // rect(100, 250, 100, 100)

  // rect(250, 250, 100, 100)

  // line(50, 50, 50, 450) //line(x1,y1,x2,y2)
  // triangle(450, 50, 480, 100, 420, 100) //triangle(x1,y1,x2,y2,x3,y3)

  // strokeWeight(5)
  // point(450, 450)
  // strokeWeight(1)
}