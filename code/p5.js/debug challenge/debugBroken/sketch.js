var flowers;
var flower;

function setup() {
  createCanvas(1000, 500);
  base_x = width / 2;
  base_y = height - 50;

  flowers = [];

  for (var i = 0; i < 10; i++) {
    flower = {
      base_x: 0,
      base_y: height - 50,
      stem_h: 100,
      col: color(255, 50, 50),
    };
    flower.base_x = i * 100;
    flower.stem_h = random(50, 400);
    flower.col = color(random(0, 255), random(0, 255), random(0, 255));
    console.log(flower);
    flowers.push(flower);
  }
  console.log(flowers);
}

function draw() {
  background(150, 150, 250);
  for (var i = 0; i < flowers.length; i++) {
    drawFlower(flowers[i]);
  }
}

function drawFlower(flower) {
  noFill();
  strokeWeight(10);
  stroke(0, 200, 50);
  curve(
    flower.base_x + 200,
    flower.base_y + 100,
    flower.base_x,
    flower.base_y,
    flower.base_x,
    flower.base_y - flower.stem_h,
    flower.base_x - 200,
    flower.base_y - (flower.stem_h + 100)
  );

  noStroke();
  fill(flower.col);
  ellipse(flower.base_x + 45, flower.base_y - flower.stem_h, 70, 50);
  ellipse(flower.base_x - 45, flower.base_y - flower.stem_h, 70, 50);
  ellipse(flower.base_x, flower.base_y + 45 - flower.stem_h, 50, 70);
  ellipse(flower.base_x, flower.base_y - 45 - flower.stem_h, 50, 70);

  //flip the colour
  flower.col1 = color(blue(flower.col), red(flower.col), green(flower.col));

  //draw the center
  fill(flower.col1);
  ellipse(flower.base_x, flower.base_y - flower.stem_h, 50, 50);
}
