var groundHeight;
var houseWidth;
var houseHeight;
var roofHeight;
var windows;

function setup() {
  createCanvas(800, 600);

  groundHeight = (height / 5) * 1;
  houseWidth = (width / 3) * 2;
  houseHeight = (height / 5) * 2;
  roofHeight = (height / 9) * 2;

  //initalise the windows
  windows = [
    {
      x: 200,
      y: 270,
      width: houseWidth / 6,
      height: 50,
      color: "black",
    },
    {
      x: width / 2 - 24,
      y: 270,
      width: 48,
      height: 50,
      color: "black",
    },
    {
      x: width - 200 - houseWidth / 6,
      y: 270,
      width: houseWidth / 6,
      height: 50,
      color: "black",
    },
    {
      x: 200,
      y: height - groundHeight - 80,
      width: houseWidth / 6,
      height: 50,
      color: "black",
    },
    {
      x: width - 200 - houseWidth / 6,
      y: height - groundHeight - 80,
      width: houseWidth / 6,
      height: 50,
      color: "black",
    },
  ];
}

function draw() {
  //draw the bg and ground
  background(112, 128, 144);
  noStroke();
  fill(72, 61, 139);
  rect(0, height - groundHeight, width, groundHeight);

  //draw the house without windows
  fill(255, 255, 224);
  rect(
    width / 2 - houseWidth / 2,
    height - groundHeight - houseHeight,
    houseWidth,
    houseHeight
  );
  fill(178, 34, 34);
  //roof
  triangle(
    width / 2,
    height - groundHeight - houseHeight - roofHeight,
    width / 2 - houseWidth / 2,
    height - groundHeight - houseHeight,
    width / 2 + houseWidth / 2,
    height - groundHeight - houseHeight
  );
  //door
  rect(width / 2 - 24, height - groundHeight - 80, 48, 80);

  //draw the windows
  fill(windows[0].color);
  rect(windows[0].x, windows[0].y, windows[0].width, windows[0].height);
  fill(windows[1].color);
  rect(windows[1].x, windows[1].y, windows[1].width, windows[1].height);
  fill(windows[2].color);
  rect(windows[2].x, windows[2].y, windows[2].width, windows[2].height);
  fill(windows[3].color);
  rect(windows[3].x, windows[3].y, windows[3].width, windows[3].height);
  fill(windows[4].color);
  rect(windows[4].x, windows[4].y, windows[4].width, windows[4].height);
}

function mousePressed() {
  for (var i = 0; i < 5; i++) {
    if (
      mouseX >= windows[i].x &&
      mouseX <= windows[i].x + windows[i].width &&
      mouseY >= windows[i].y &&
      mouseY <= windows[i].y + windows[i].height
    ) {
      lightSwitch(windows[i]);
    }
  }
}

function lightSwitch(obj) {
  if (obj.color == "black") {
    obj.color = "yellow";
  } else {
    obj.color = "black";
  }
}
