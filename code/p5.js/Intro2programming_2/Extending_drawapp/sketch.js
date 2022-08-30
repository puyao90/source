var star;
var starSizeSlider;
var nStarSlider;

function preload() {
  star = loadImage('285661_star_icon.png');
  starSizeSlider = createSlider(5, 50, 20);
  starSizeSlider.parent('#SizeOfStarsControl');
  nStarSlider = createSlider(1, 20, 5);
  nStarSlider.parent('#numberOfStarsControl');
}

function setup() {
  createCanvas(800, 600);
  background(240);
}

function draw() {
  if (mouseIsPressed) {
    for (var i = 0; i < nStarSlider.value(); i++) {
      var starSize = starSizeSlider.value();
      var starX = random(mouseX - starSize / 2 - 10, mouseX - starSize / 2 + 10);
      var starY = random(mouseY - starSize / 2 - 10, mouseY - starSize / 2 + 10);
      image(star, starX, starY, starSize, starSize);
    }
  }
}
